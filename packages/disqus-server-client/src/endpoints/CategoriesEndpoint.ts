import { Disqus } from "./../disqus"

export interface ICategoriesCreateParameters {
    /**
     * Looks up a forum by ID (aka short name)
     * You must be a moderator on the selected forum.
     *
     * @type {string}
     * @memberOf ICategoriesCreateParameters
     */
    forum: string

    /**
     * Maximum length of 50
     *
     * @type {string}
     * @memberOf ICategoriesCreateParameters
     */
    title: string

    /**
     * Defaults to false
     *
     * @type {string}
     * @memberOf ICategoriesCreateParameters
     */
    default?: string
}

export interface ICategoriesCreate {
    code: number
    response: ICategoriesCreateResponse
}

export interface ICategoriesCreateResponse {
    id: string
    forum: string
    order: number
    isDefault: boolean
    title: string
}

export interface ICategoriesDetailsParameters {
    /**
     * Looks up a category by ID
     *
     * @type {string}
     * @memberOf ICategoriesDetailsParameters
     */
    category: string
}

export interface ICategoriesDetails {
    code: number
    response: ICategoriesDetailsResponse
}

export interface ICategoriesDetailsResponse {
    id: string
    forum: string
    order: number
    isDefault: boolean
    title: string
}

export interface ICategoriesListParameters {
    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf ICategoriesListParameters
     */
    forum: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf ICategoriesListParameters
     */
    since_id?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf ICategoriesListParameters
     */
    cursor?: string

    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf ICategoriesListParameters
     */
    limit?: string

    /**
     * Choices: asc, desc
     *
     * @type {"asc" | "desc"}
     * @memberOf ICategoriesListParameters
     */
    order?: "asc" | "desc"
}

export interface ICategoriesList {
    cursor: ICategoriesListCursor
    code: number
    response: ICategoriesListResponse[]
}

export interface ICategoriesListCursor {
    prev: string
    hasNext: boolean
    next: string
    hasPrev: boolean
    total: number
    id: string
    more: boolean
}

export interface ICategoriesListResponse {
    id: string
    forum: string
    order: number
    isDefault: boolean
    title: string
}

export interface ICategoriesListPostsParameters {
    /**
     * Looks up a category by ID
     *
     * @type {string}
     * @memberOf ICategoriesListPostsParameters
     */
    category: string

    /**
     * Unix timestamp (or ISO datetime standard)
     *
     * @type {string}
     * @memberOf ICategoriesListPostsParameters
     */
    since?: string

    /**
     * You may specify relations to include with your response.
     * Choices: forum, thread
     *
     * @type {"forum" | "thread"}
     * @memberOf ICategoriesListPostsParameters
     */
    related?: "forum" | "thread"

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf ICategoriesListPostsParameters
     */
    cursor?: string

    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf ICategoriesListPostsParameters
     */
    limit?: string

    /**
     * Valid values are:
     * 1: Is_Anonymous
     * 2: Has_Link
     * 3: Has_Low_Rep_Author
     * 4: Has_Bad_Word
     * 5: Is_Flagged
     * 6: No_Issue
     * 7: Is_Toxic
     * 8: Modified_By_Rule
     * 9: Shadow_Banned
     * 10: Has_Media
     * 11: Is_At_Flag_Limit
     * 12: Shadow_Banned_Global
     *
     * @type {1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}
     * @memberOf ICategoriesListPostsParameters
     */
    filters?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf ICategoriesListPostsParameters
     */
    query?: string

    /**
     * Choices: unapproved, approved, spam, deleted, flagged, highlighted
     *
     * @type {"unapproved" | "approved" | "spam" | "deleted" | "flagged" | "highlighted"}
     * @memberOf ICategoriesListPostsParameters
     */
    include?:
        | "unapproved"
        | "approved"
        | "spam"
        | "deleted"
        | "flagged"
        | "highlighted"

    /**
     * Choices: asc, desc
     *
     * @type {"asc" | "desc"}
     * @memberOf ICategoriesListPostsParameters
     */
    order?: "asc" | "desc"
}

export interface ICategoriesListPosts {
    cursor: ICategoriesListPostsCursor
    code: number
    response: ICategoriesListPostsResponse[]
}

export interface ICategoriesListPostsCursor {
    prev: string
    hasNext: boolean
    next: string
    hasPrev: boolean
    total: number
    id: string
    more: boolean
}

export interface ICategoriesListPostsResponse {
    isJuliaFlagged: boolean
    isFlagged: boolean
    forum: string
    parent: number
    author: ICategoriesListPostsAuthor
    media: any[]
    isApproved: boolean
    dislikes: number
    raw_message: string
    id: string
    thread: string
    points: number
    createdAt: Date
    isEdited: boolean
    message: string
    isHighlighted: boolean
    ipAddress: string
    isSpam: boolean
    isDeleted: boolean
    likes: number
}

export interface ICategoriesListPostsAuthor {
    username?: string
    about?: string
    name: string
    url: string
    isFollowing?: boolean
    isFollowedBy?: boolean
    profileUrl: string
    avatar: ICategoriesListPostsAvatar
    id?: string
    isAnonymous: boolean
    email: string
}

export interface ICategoriesListPostsAvatar {
    permalink: string
    cache: string
}

export interface ICategoriesListThreadsParameters {
    /**
     * Looks up a category by ID
     *
     * @type {string}
     * @memberOf ICategoriesListThreadsParameters
     */
    category: string

    /**
     * Unix timestamp (or ISO datetime standard)
     *
     * @type {string}
     * @memberOf ICategoriesListThreadsParameters
     */
    since?: string

    /**
     * You may specify relations to include with your response.
     * Choices: forum, author
     *
     * @type {"forum" | "author"}
     * @memberOf ICategoriesListThreadsParameters
     */
    related?: "forum" | "author"

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf ICategoriesListThreadsParameters
     */
    cursor?: string

    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf ICategoriesListThreadsParameters
     */
    limit?: string

    /**
     * Choices: asc, desc
     *
     * @type {"asc" | "desc"}
     * @memberOf ICategoriesListThreadsParameters
     */
    order?: "asc" | "desc"
}

export interface ICategoriesListThreads {
    cursor: ICategoriesListThreadsCursor
    code: number
    response: ICategoriesListThreadsResponse[]
}

export interface ICategoriesListThreadsCursor {
    prev: string
    hasNext: boolean
    next: string
    hasPrev: boolean
    total: number
    id: string
    more: boolean
}

export interface ICategoriesListThreadsResponse {
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

export class CategoriesEndpoint {
    constructor(private client: Disqus) {}

    /**
     * Creates a new category.
     *
     * @param {ICategoriesCreateParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<ICategoriesCreate>} CategoriesEndpoint
     */
    create(
        parameters: ICategoriesCreateParameters
    ): Promise<ICategoriesCreate> {
        return this.client.request("categories/create", parameters)
    }

    /**
     * Returns category details.
     *
     * @param {ICategoriesDetailsParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<ICategoriesDetails>} CategoriesEndpoint
     */
    details(
        parameters: ICategoriesDetailsParameters
    ): Promise<ICategoriesDetails> {
        return this.client.request("categories/details", parameters)
    }

    /**
     * Returns a list of categories within a forum.
     *
     * @param {ICategoriesListParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<ICategoriesList>} CategoriesEndpoint
     */
    list(parameters: ICategoriesListParameters): Promise<ICategoriesList> {
        return this.client.request("categories/list", parameters)
    }

    /**
     * Returns a list of posts within a category.
     *
     * @param {ICategoriesListPostsParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<ICategoriesListPosts>} CategoriesEndpoint
     */
    listPosts(
        parameters: ICategoriesListPostsParameters
    ): Promise<ICategoriesListPosts> {
        return this.client.request("categories/listPosts", parameters)
    }

    /**
     * Returns a list of threads within a category sorted by the date created.
     *
     * @param {ICategoriesListThreadsParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<ICategoriesListThreads>} CategoriesEndpoint
     */
    listThreads(
        parameters: ICategoriesListThreadsParameters
    ): Promise<ICategoriesListThreads> {
        return this.client.request("categories/listThreads", parameters)
    }
}
