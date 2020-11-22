import axios, { AxiosRequestConfig, Method } from "axios"
import NodeCache from "node-cache"
import { actionRequiringPost } from "./data/posts"
import { cachedActions } from "./data/cached"
import { IDiscusResponse } from "./IDiscusResponse"
import { IGenericDiscusResponse } from "./IGenericIDiscusResponse"
import { IDisqusConfig } from "./IDisqusConfig"

/**
 * Core Client for connecting to Disqus using a server side API.
 * The Client should NOT be used for client side requests!
 *
 * @export
 * @class DisqusCore
 */
export class DisqusCore {
    private cache: NodeCache

    /**
     * Creates an instance of DisqusCore.
     * @param {IDisqusConfig} config The configuration settings.
     *
     * @memberOf DisqusCore
     */
    constructor(private config: IDisqusConfig) {
        this.cache = new NodeCache()
    }

    /**
     * Performs a POST on the Disqus API.
     *
     * @param {string} action The action.
     * @param {*} [parameters={}] The parameters.
     * @returns {Promise<IGenericDiscusResponse>} The response in the form of a Promise.
     *
     * @memberOf DisqusCore
     */
    post(
        action: string,
        parameters: any = {}
    ): Promise<IGenericDiscusResponse> {
        return this._requestWithPossibleCache<IDiscusResponse<any>>(
            action,
            parameters,
            "POST"
        )
    }

    /**
     * Performs a GET on the Disqus API.
     *
     * @param {string} action The action.
     * @param {*} [parameters={}] The parameters.
     * @returns {Promise<IGenericDiscusResponse>} The response in the form of a Promise.
     *
     * @memberOf DisqusCore
     */
    get(action: string, parameters: any = {}): Promise<IGenericDiscusResponse> {
        return this._requestWithPossibleCache<IDiscusResponse<any>>(
            action,
            parameters,
            "GET"
        )
    }

    /**
     * Performs a request on the Disqus API. Will infer if it needs to be a POST or GET request.
     *
     * @param {string} action The action.
     * @param {*} [parameters={}] The parameters.
     * @returns {Promise<IGenericDiscusResponse>} The response in the form of a Promise.
     *
     * @memberOf DisqusCore
     */
    request(
        action: string,
        parameters: any = {}
    ): Promise<IGenericDiscusResponse> {
        return this._requestWithPossibleCache<IDiscusResponse<any>>(
            action,
            parameters,
            actionRequiringPost.has(action) ? "POST" : "GET"
        )
    }

    /**
     * Performs a requests and caches the result if the action is on the cached actions list.
     *
     * @protected
     * @template T The generic return type.
     * @param {string} action The action.
     * @param {*} parameters The parameters.
     * @param {Method} method The method (GET or POST).
     * @returns {Promise<T>} The response in the form of a Promise.
     *
     * @memberOf DisqusCore
     */
    protected async _requestWithPossibleCache<T>(
        action: string,
        parameters: any,
        method: Method
    ): Promise<T> {
        if (!cachedActions.has(action) || this.config.disableCache) {
            return this._request(action, parameters, method)
        }

        const key = JSON.stringify({
            action: action,
            parameters: parameters,
            method: method,
        })

        if (this.cache.has(key)) {
            return this.cache.get(key) as T
        }

        const result = await this._request<T>(action, parameters, method)
        this.cache.set(key, result, this.config.ttlCache || 120)
        return result
    }

    /**
     * Performs a request on the Disqus API.
     *
     * @protected
     * @template T The generic response type.
     * @param {string} action The action.
     * @param {*} parameters The parameters.
     * @param {Method} method The method.
     * @returns {Promise<T>} The response in the form of a Promise.
     *
     * @memberOf DisqusCore
     */
    protected async _request<T>(
        action: string,
        parameters: any,
        method: Method
    ): Promise<T> {
        const request: AxiosRequestConfig = {
            url: `https://disqus.com/api/3.0/${action}.json`,
            method: method,
        }

        const parameterType = method == "GET" ? "params" : "data"
        request[parameterType] = {
            ...(parameters || {}),
            ...{
                api_key: this.config.apiKey,
                api_secret: this.config.apiSecret,
                access_token: this.config.accessToken,
            },
        }

        const response = await axios.request(request)
        return response.data
    }
}
