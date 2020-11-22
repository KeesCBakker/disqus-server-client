import { IGenericDisqusResponse } from "disqus-server-client-core"
import { Disqus } from "./../disqus"

export interface IForumsBlockBanPostAuthorParameters {
    /**
     * Looks up a post by ID
     * You must be a moderator on the selected post's forum.
     *
     * @type {string}
     * @memberOf IForumsBlockBanPostAuthorParameters
     */
    post: string

    /**
     * Action to apply retroactively to existing posts. Leave blank to apply no action
     * Valid values are:
     * 1: KILL
     * 2: SPAM
     *
     * @type {1 | 2}
     * @memberOf IForumsBlockBanPostAuthorParameters
     */
    retroactiveAction?: 1 | 2

    /**
     * Unix timestamp (or ISO datetime standard)
     *
     * @type {string}
     * @memberOf IForumsBlockBanPostAuthorParameters
     */
    dateExpires?: string

    /**
     * Defaults to false
     *
     * @type {string}
     * @memberOf IForumsBlockBanPostAuthorParameters
     */
    shadowBan?: string

    /**
     * Ban the user who authored the post if one exists
     *
     * @type {string}
     * @memberOf IForumsBlockBanPostAuthorParameters
     */
    banUser?: string

    /**
     * Maximum length of 50
     *
     * @type {string}
     * @memberOf IForumsBlockBanPostAuthorParameters
     */
    notes?: string

    /**
     * Ban the email address associated with the post
     *
     * @type {string}
     * @memberOf IForumsBlockBanPostAuthorParameters
     */
    banEmail?: string

    /**
     * Ban the ip address associated with the post
     *
     * @type {string}
     * @memberOf IForumsBlockBanPostAuthorParameters
     */
    banIp?: string
}

export class ForumsBlockEndpoint {
    constructor(private client: Disqus) {}

    /**
     * This method has no descript in on the API.
     *
     * @param {IForumsBlockBanPostAuthorParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} ForumsBlockEndpoint
     */
    banPostAuthor(
        parameters: IForumsBlockBanPostAuthorParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "forums/block/banPostAuthor",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }
}
