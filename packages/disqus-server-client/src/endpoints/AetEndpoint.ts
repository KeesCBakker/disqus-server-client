import { IGenericDisqusResponse } from "disqus-server-client-core"
import { Disqus } from "./../disqus"

export interface IAetAnonymousSubscribeParameters {
    email: string

    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IAetAnonymousSubscribeParameters
     */
    forum: string
}

export interface IAetDismissParameters {
    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IAetDismissParameters
     */
    forum: string
}

export interface IAetExportParameters {
    /**
     * Looks up a forum by ID (aka short name)
     * You must be a moderator on the selected forum.
     *
     * @type {string}
     * @memberOf IAetExportParameters
     */
    forum: string

    /**
     * If true, export all emails collected so far. If false, export all emails since the last partial export
     *
     * @type {string}
     * @memberOf IAetExportParameters
     */
    full?: string
}

export interface IAetPendingExportInfoParameters {
    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IAetPendingExportInfoParameters
     */
    forum: string
}

export interface IAetSubscribeParameters {
    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IAetSubscribeParameters
     */
    forum: string
}

export class AetEndpoint {
    constructor(private client: Disqus) {}

    /**
     * Allows an anonymous user to subscribe to AET banner for a forum. If the user has alreadyaccepted before, a 400 will be returned with 2 as the error code.
     *
     * @param {IAetAnonymousSubscribeParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} AetEndpoint
     */
    anonymousSubscribe(
        parameters: IAetAnonymousSubscribeParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "aet/anonymousSubscribe",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * Allows an authenticated user to dismiss the AET banner for a forum. If the user hasalready accepted/dismissed before, a 400 will be returned with 2 as the error code.
     *
     * @param {IAetDismissParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} AetEndpoint
     */
    dismiss(
        parameters: IAetDismissParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "aet/dismiss",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * Export subscribed users in either csv or json format.
     *
     * @param {IAetExportParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} AetEndpoint
     */
    export(parameters: IAetExportParameters): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "aet/export",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * Returns information about pending exports for a forum..
     *
     * @param {IAetPendingExportInfoParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} AetEndpoint
     */
    pendingExportInfo(
        parameters: IAetPendingExportInfoParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "aet/pendingExportInfo",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * Allows an authenticated user to subscribe to AET for a forum. If the user has alreadyaccepted/dismissed before, a 400 will be returned with 2 as the error code.
     *
     * @param {IAetSubscribeParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} AetEndpoint
     */
    subscribe(
        parameters: IAetSubscribeParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "aet/subscribe",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }
}
