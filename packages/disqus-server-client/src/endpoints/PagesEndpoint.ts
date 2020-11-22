import { IGenericDisqusResponse } from "disqus-server-client-core"
import { Disqus } from "./../disqus"

export interface IPagesListParameters {
    category: string

    /**
     * Maximum value of 50
     *
     * @type {string}
     * @memberOf IPagesListParameters
     */
    cursor?: string

    /**
     * Choices: 7d, 30, 1d, 7, 1h, 30d
     *
     * @type {"7d" | "30" | "1d" | "7" | "1h" | "30d"}
     * @memberOf IPagesListParameters
     */
    range?: "7d" | "30" | "1d" | "7" | "1h" | "30d"

    /**
     * Minimum value of 1
     * Maximum value of 50
     *
     * @type {string}
     * @memberOf IPagesListParameters
     */
    limit?: string
}

export class PagesEndpoint {
    constructor(private client: Disqus) {}

    /**
     * Returns a list of cateory objects with page data of HotThreads forforums in that given category.
     *
     * @param {IPagesListParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} PagesEndpoint
     */
    list(parameters: IPagesListParameters): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "pages/list",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }
}
