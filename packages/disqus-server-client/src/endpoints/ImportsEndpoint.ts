import { IGenericDisqusResponse } from "disqus-server-client-core"
import { Disqus } from "./../disqus"

export interface IImportsDetailsParameters {
    group: string

    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IImportsDetailsParameters
     */
    forum: string
}

export interface IImportsListParameters {
    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IImportsListParameters
     */
    forum: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IImportsListParameters
     */
    cursor?: string
}

export class ImportsEndpoint {
    constructor(private client: Disqus) {}

    /**
     * This method has no descript in on the API.
     *
     * @param {IImportsDetailsParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} ImportsEndpoint
     */
    details(
        parameters: IImportsDetailsParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "imports/details",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * This method has no descript in on the API.
     *
     * @param {IImportsListParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} ImportsEndpoint
     */
    list(parameters: IImportsListParameters): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "imports/list",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }
}
