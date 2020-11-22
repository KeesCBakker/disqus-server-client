import { IGenericDisqusResponse } from "disqus-server-client-core"
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
     * @memberOf {Promise<IGenericDisqusResponse>} ForumCategoriesEndpoint
     */
    details(
        parameters: IForumCategoriesDetailsParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "forumCategories/details",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * Returns a list of forum categories
     *
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} ForumCategoriesEndpoint
     */
    list(): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "forumCategories/list"
        ) as Promise<IGenericDisqusResponse>
    }
}
