import { IGenericDisqusResponse } from "disqus-server-client-core"
import { Disqus } from "./../disqus"

export interface IBlacklistsAddParameters {
    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IBlacklistsAddParameters
     */
    forum: string

    /**
     * Domain Name
     *
     * @type {string}
     * @memberOf IBlacklistsAddParameters
     */
    domain?: string

    /**
     * Maximum length of 200
     *
     * @type {string}
     * @memberOf IBlacklistsAddParameters
     */
    word?: string

    /**
     * Deprecated. Apply blacklist retroactively to existing posts, marking them killed
     *
     * @type {string}
     * @memberOf IBlacklistsAddParameters
     */
    retroactive?: string

    /**
     * Maximum length of 50
     *
     * @type {string}
     * @memberOf IBlacklistsAddParameters
     */
    notes?: string

    /**
     * IP address in CIDR notation
     *
     * @type {string}
     * @memberOf IBlacklistsAddParameters
     */
    ip?: string

    /**
     * Unix timestamp (or ISO datetime standard)
     *
     * @type {string}
     * @memberOf IBlacklistsAddParameters
     */
    dateExpires?: string

    /**
     * Defaults to false
     *
     * @type {string}
     * @memberOf IBlacklistsAddParameters
     */
    shadowBan?: string

    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IBlacklistsAddParameters
     */
    user?: string

    /**
     * Action to apply retroactively to existing posts. Leave blank to apply no action
     * Valid values are:
     * 1: KILL
     * 2: SPAM
     *
     * @type {1 | 2}
     * @memberOf IBlacklistsAddParameters
     */
    retroactiveAction?: 1 | 2

    /**
     * Email address (defined by RFC 5322)
     *
     * @type {string}
     * @memberOf IBlacklistsAddParameters
     */
    email?: string
}

export interface IBlacklistsListParameters {
    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IBlacklistsListParameters
     */
    forum: string

    /**
     * Unix timestamp (or ISO datetime standard)
     *
     * @type {string}
     * @memberOf IBlacklistsListParameters
     */
    since?: string

    /**
     * You may specify relations to include with your response.
     * Choices: forum
     *
     * @type {"forum"}
     * @memberOf IBlacklistsListParameters
     */
    related?: "forum"

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IBlacklistsListParameters
     */
    cursor?: string

    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf IBlacklistsListParameters
     */
    limit?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IBlacklistsListParameters
     */
    since_id?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IBlacklistsListParameters
     */
    query?: string

    /**
     * Choices: domain, word, ip, user, thread_slug, email
     *
     * @type {"domain" | "word" | "ip" | "user" | "thread_slug" | "email"}
     * @memberOf IBlacklistsListParameters
     */
    type?: "domain" | "word" | "ip" | "user" | "thread_slug" | "email"

    /**
     * Choices: asc, desc
     *
     * @type {"asc" | "desc"}
     * @memberOf IBlacklistsListParameters
     */
    order?: "asc" | "desc"
}

export interface IBlacklistsRemoveParameters {
    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IBlacklistsRemoveParameters
     */
    forum: string

    /**
     * Domain Name
     *
     * @type {string}
     * @memberOf IBlacklistsRemoveParameters
     */
    domain?: string

    /**
     * Maximum length of 200
     *
     * @type {string}
     * @memberOf IBlacklistsRemoveParameters
     */
    word?: string

    /**
     * IP address in CIDR notation
     *
     * @type {string}
     * @memberOf IBlacklistsRemoveParameters
     */
    ip?: string

    /**
     * Looks up a BlackList by id
     *
     * @type {string}
     * @memberOf IBlacklistsRemoveParameters
     */
    blacklist?: string

    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IBlacklistsRemoveParameters
     */
    user?: string

    /**
     * Email address (defined by RFC 5322)
     *
     * @type {string}
     * @memberOf IBlacklistsRemoveParameters
     */
    email?: string
}

export class BlacklistsEndpoint {
    constructor(private client: Disqus) {}

    /**
     * Adds an entry to the blacklist.
     *
     * @param {IBlacklistsAddParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} BlacklistsEndpoint
     */
    add(parameters: IBlacklistsAddParameters): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "blacklists/add",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * This method has no descript in on the API.
     *
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} BlacklistsEndpoint
     */
    backfillCounters(): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "blacklists/backfillCounters"
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * Returns a list of all blacklist entries.
     *
     * @param {IBlacklistsListParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} BlacklistsEndpoint
     */
    list(
        parameters: IBlacklistsListParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "blacklists/list",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * Removes an entry from the blacklist.
     *
     * @param {IBlacklistsRemoveParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} BlacklistsEndpoint
     */
    remove(
        parameters: IBlacklistsRemoveParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "blacklists/remove",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }
}
