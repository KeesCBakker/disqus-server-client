import { Disqus } from "./../disqus"

export interface IApothecarySuggestParameters {
    /**
     * Looks up a post by ID
     * You must be a moderator on the selected post's forum.
     *
     * @type {string}
     * @memberOf IApothecarySuggestParameters
     */
    posts: string
}

export class ApothecaryEndpoint {
    constructor(private client: Disqus) {}

    /**
     * This method has no descript in on the API.
     *
     * @param {IApothecarySuggestParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} ApothecaryEndpoint
     */
    suggest(parameters: IApothecarySuggestParameters): Promise<any> {
        return this.client.request("apothecary/suggest", parameters)
    }
}
