import { Disqus } from "./../disqus"

export interface IForumsBehindClickDetailsParameters {
    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IForumsBehindClickDetailsParameters
     */
    forum: string
}

export interface IForumsBehindClickUpdateParameters {
    /**
     * Looks up a forum by ID (aka short name)
     * You must be a moderator on the selected forum.
     *
     * @type {string}
     * @memberOf IForumsBehindClickUpdateParameters
     */
    forum: string

    /**
     * Defaults to ""
     *
     * @type {string}
     * @memberOf IForumsBehindClickUpdateParameters
     */
    buttonCSS?: string

    /**
     * Defaults to ""
     *
     * @type {string}
     * @memberOf IForumsBehindClickUpdateParameters
     */
    buttonText?: string

    /**
     * Defaults to ""
     *
     * @type {string}
     * @memberOf IForumsBehindClickUpdateParameters
     */
    titleCSS?: string

    /**
     * Defaults to 0
     *
     * @type {string}
     * @memberOf IForumsBehindClickUpdateParameters
     */
    titleEnabled?: string

    /**
     * Defaults to ""
     *
     * @type {string}
     * @memberOf IForumsBehindClickUpdateParameters
     */
    titleText?: string
}

export class ForumsBehindClickEndpoint {
    constructor(private client: Disqus) {}

    /**
     * Returns forum custom behind-a-click settings
     *
     * @param {IForumsBehindClickDetailsParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} ForumsBehindClickEndpoint
     */
    details(parameters: IForumsBehindClickDetailsParameters): Promise<any> {
        return this.client.request("forums/behindClick/details", parameters)
    }

    /**
     * Sets the forum custom behind-a-click settings
     *
     * @param {IForumsBehindClickUpdateParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} ForumsBehindClickEndpoint
     */
    update(parameters: IForumsBehindClickUpdateParameters): Promise<any> {
        return this.client.request("forums/behindClick/update", parameters)
    }
}
