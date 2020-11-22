import { IGenericDisqusResponse } from "disqus-server-client-core"
import { Disqus } from "./../disqus"

export interface IForumsTrustedDomainCreateParameters {
    /**
     * Looks up a forum by ID (aka short name)
     * You must be a moderator on the selected forum.
     *
     * @type {string}
     * @memberOf IForumsTrustedDomainCreateParameters
     */
    forum: string

    /**
     * Domain Name
     *
     * @type {string}
     * @memberOf IForumsTrustedDomainCreateParameters
     */
    domainName: string
}

export interface IForumsTrustedDomainKillParameters {
    /**
     * Looks up a trusted domain by id, or by domain name if forum provided
     * You may pass us the 'domain' query type instead of an ID by including 'forum'.
     *
     * @type {string}
     * @memberOf IForumsTrustedDomainKillParameters
     */
    domain: string

    /**
     * Looks up a forum by ID (aka short name)
     * You must be a moderator on the selected forum.
     *
     * @type {string}
     * @memberOf IForumsTrustedDomainKillParameters
     */
    forum?: string
}

export interface IForumsTrustedDomainListParameters {
    /**
     * Looks up a forum by ID (aka short name)
     * You must be a moderator on the selected forum.
     *
     * @type {string}
     * @memberOf IForumsTrustedDomainListParameters
     */
    forum: string
}

export class ForumsTrustedDomainEndpoint {
    constructor(private client: Disqus) {}

    /**
     * Adds a trusted domain to a forum
     *
     * @param {IForumsTrustedDomainCreateParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} ForumsTrustedDomainEndpoint
     */
    create(
        parameters: IForumsTrustedDomainCreateParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "forums/trustedDomain/create",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * Removes a trusted domain from a forum
     *
     * @param {IForumsTrustedDomainKillParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} ForumsTrustedDomainEndpoint
     */
    kill(
        parameters: IForumsTrustedDomainKillParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "forums/trustedDomain/kill",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * Returns a list of forum trusted domains
     *
     * @param {IForumsTrustedDomainListParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} ForumsTrustedDomainEndpoint
     */
    list(
        parameters: IForumsTrustedDomainListParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "forums/trustedDomain/list",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }
}
