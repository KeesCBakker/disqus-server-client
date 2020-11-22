import { Disqus } from "./../disqus"

export interface ITrendsListThreadsParameters {
    /**
     * Maximum value of 10
     *
     * @type {string}
     * @memberOf ITrendsListThreadsParameters
     */
    limit?: string

    /**
     * You may specify relations to include with your response.
     * Choices: forum, author, category
     *
     * @type {"forum" | "author" | "category"}
     * @memberOf ITrendsListThreadsParameters
     */
    related?: "forum" | "author" | "category"

    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf ITrendsListThreadsParameters
     */
    forum?: string
}

export interface ITrendsListThreads {
    code: number
    response: ITrendsListThreadsResponse[]
}

export interface ITrendsListThreadsResponse {
    thread: ITrendsListThreadsThread
    postLikes: number
    posts: number
    score: number
    link: string
    likes: number
}

export interface ITrendsListThreadsThread {
    category: string
    reactions: number
    identifiers: string[]
    forum: string
    title: string
    dislikes: number
    isDeleted: boolean
    author: string
    userScore: number
    id: string
    isClosed: boolean
    posts: number
    link: string
    likes: number
    message: string
    ipAddress: string
    slug: string
    createdAt: Date
}

export class TrendsEndpoint {
    constructor(private client: Disqus) {}

    /**
     * Returns a list of trending threads.
     *
     * @param {ITrendsListThreadsParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<ITrendsListThreads>} TrendsEndpoint
     */
    listThreads(
        parameters: ITrendsListThreadsParameters
    ): Promise<ITrendsListThreads> {
        return this.client.request("trends/listThreads", parameters)
    }
}
