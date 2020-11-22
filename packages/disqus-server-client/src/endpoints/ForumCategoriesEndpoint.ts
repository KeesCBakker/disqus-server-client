import { Disqus } from "./../disqus"

export interface IForumCategoriesDetailsParameters {
    /**
     * Looks up a forum category by ID
     *
     * @type {string}
     * @memberOf IForumCategoriesDetailsParameters
     */
    forumCategory: string
}

export class ForumCategoriesEndpoint {
    constructor(private client: Disqus) {}

    /**
     * Returns forum category details.
     *
     * @param {IForumCategoriesDetailsParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} ForumCategoriesEndpoint
     */
    details(parameters: IForumCategoriesDetailsParameters): Promise<any> {
        return this.client.request("forumCategories/details", parameters)
    }

    /**
     * Returns a list of forum categories
     *
     * @returns The response as a promise.
     * @memberOf {Promise<any>} ForumCategoriesEndpoint
     */
    list(): Promise<any> {
        return this.client.request("forumCategories/list")
    }
}
