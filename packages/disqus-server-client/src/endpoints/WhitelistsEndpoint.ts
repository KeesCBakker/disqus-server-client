import { IGenericDisqusResponse } from "disqus-server-client-core"
import { Disqus } from "./../disqus"

export interface IWhitelistsAddParameters {
    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IWhitelistsAddParameters
     */
    forum: string

    /**
     * Maximum length of 50
     *
     * @type {string}
     * @memberOf IWhitelistsAddParameters
     */
    notes?: string

    /**
     * Email address (defined by RFC 5322)
     *
     * @type {string}
     * @memberOf IWhitelistsAddParameters
     */
    email?: string

    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IWhitelistsAddParameters
     */
    user?: string
}

export interface IWhitelistsListParameters {
    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IWhitelistsListParameters
     */
    forum: string

    /**
     * Unix timestamp (or ISO datetime standard)
     *
     * @type {string}
     * @memberOf IWhitelistsListParameters
     */
    since?: string

    /**
     * You may specify relations to include with your response.
     * Choices: forum
     *
     * @type {"forum"}
     * @memberOf IWhitelistsListParameters
     */
    related?: "forum"

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IWhitelistsListParameters
     */
    cursor?: string

    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf IWhitelistsListParameters
     */
    limit?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IWhitelistsListParameters
     */
    since_id?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IWhitelistsListParameters
     */
    query?: string

    /**
     * Choices: email, user
     *
     * @type {"email" | "user"}
     * @memberOf IWhitelistsListParameters
     */
    type?: "email" | "user"

    /**
     * Choices: asc, desc
     *
     * @type {"asc" | "desc"}
     * @memberOf IWhitelistsListParameters
     */
    order?: "asc" | "desc"
}

export interface IWhitelistsRemoveParameters {
    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IWhitelistsRemoveParameters
     */
    forum: string

    /**
     * Looks up a WhiteList by id
     *
     * @type {string}
     * @memberOf IWhitelistsRemoveParameters
     */
    id?: string

    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IWhitelistsRemoveParameters
     */
    user?: string

    /**
     * Email address (defined by RFC 5322)
     *
     * @type {string}
     * @memberOf IWhitelistsRemoveParameters
     */
    email?: string
}

export class WhitelistsEndpoint {
    constructor(private client: Disqus) {}

    /**
     * Adds an entry to the whitelist.
     *
     * @param {IWhitelistsAddParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} WhitelistsEndpoint
     */
    add(parameters: IWhitelistsAddParameters): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "whitelists/add",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * Returns a list of all whitelist entries.
     *
     * @param {IWhitelistsListParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} WhitelistsEndpoint
     */
    list(
        parameters: IWhitelistsListParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "whitelists/list",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * Removes an entry from the whitelist.
     *
     * @param {IWhitelistsRemoveParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} WhitelistsEndpoint
     */
    remove(
        parameters: IWhitelistsRemoveParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "whitelists/remove",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }
}
