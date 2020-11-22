import { IGenericDisqusResponse } from "disqus-server-client-core"
import { Disqus } from "./../disqus"

export interface IThreadsApproveParameters {
    /**
     * Looks up a thread by ID
     * You must be a moderator on the selected thread's forum.
     * You may pass us the 'ident' or 'link' query types instead of an ID by including 'forum'.
     *
     * @type {string}
     * @memberOf IThreadsApproveParameters
     */
    thread: string

    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IThreadsApproveParameters
     */
    forum?: string
}

export interface IThreadsCloseParameters {
    /**
     * Looks up a thread by ID
     * You must be a moderator on the selected thread's forum.
     * You may pass us the 'ident' query type instead of an ID by including 'forum'.
     * You may pass us the 'link' query type to filter by URL. You must pass the 'forum' if you do not have the Pro API Access addon.
     *
     * @type {string}
     * @memberOf IThreadsCloseParameters
     */
    thread: string

    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IThreadsCloseParameters
     */
    forum?: string
}

export interface IThreadsClose {
    code: number
    response: IThreadsCloseResponse[]
}

export interface IThreadsCloseResponse {
    id: string
}

export interface IThreadsCreateParameters {
    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IThreadsCreateParameters
     */
    forum: string

    title: string

    /**
     * Looks up a category by ID
     *
     * @type {string}
     * @memberOf IThreadsCreateParameters
     */
    category?: string

    /**
     * URL (defined by RFC 3986)
     * Maximum length of 500
     *
     * @type {string}
     * @memberOf IThreadsCreateParameters
     */
    url?: string

    /**
     * Unix timestamp (or ISO datetime standard)
     *
     * @type {string}
     * @memberOf IThreadsCreateParameters
     */
    date?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IThreadsCreateParameters
     */
    message?: string

    /**
     * Maximum length of 300
     *
     * @type {string}
     * @memberOf IThreadsCreateParameters
     */
    identifier?: string

    /**
     * Alpha-numeric slug
     * Maximum length of 200
     *
     * @type {string}
     * @memberOf IThreadsCreateParameters
     */
    slug?: string
}

export interface IThreadsCreate {
    code: number
    response: IThreadsCreateResponse
}

export interface IThreadsCreateResponse {
    category: string
    reactions: number
    identifiers: any[]
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

export interface IThreadsDetailsParameters {
    /**
     * Looks up a thread by ID
     * You may pass us the 'ident' or 'link' query types instead of an ID by including 'forum'.
     *
     * @type {string}
     * @memberOf IThreadsDetailsParameters
     */
    thread: string

    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IThreadsDetailsParameters
     */
    forum?: string

    /**
     * You may specify relations to include with your response.
     * Choices: forum, author, category
     *
     * @type {"forum" | "author" | "category"}
     * @memberOf IThreadsDetailsParameters
     */
    related?: "forum" | "author" | "category"

    /**
     * Choices: topics
     *
     * @type {"topics"}
     * @memberOf IThreadsDetailsParameters
     */
    attach?: "topics"
}

export interface IThreadsDetails {
    code: number
    response: IThreadsDetailsResponse
}

export interface IThreadsDetailsResponse {
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

export interface IThreadsListParameters {
    /**
     * Looks up a category by ID
     *
     * @type {string}
     * @memberOf IThreadsListParameters
     */
    category?: string

    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IThreadsListParameters
     */
    forum?: string

    /**
     * Looks up a thread by ID
     * You may pass us the 'ident' query type instead of an ID by including 'forum'.
     * You may pass us the 'link' query type to filter by URL. You must pass the 'forum' if you do not have the Pro API Access addon.
     *
     * @type {string}
     * @memberOf IThreadsListParameters
     */
    thread?: string

    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IThreadsListParameters
     */
    author?: string

    /**
     * Unix timestamp (or ISO datetime standard)
     *
     * @type {string}
     * @memberOf IThreadsListParameters
     */
    since?: string

    /**
     * You may specify relations to include with your response.
     * Choices: forum, author, category
     *
     * @type {"forum" | "author" | "category"}
     * @memberOf IThreadsListParameters
     */
    related?: "forum" | "author" | "category"

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IThreadsListParameters
     */
    cursor?: string

    /**
     * Choices: topics
     *
     * @type {"topics"}
     * @memberOf IThreadsListParameters
     */
    attach?: "topics"

    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf IThreadsListParameters
     */
    limit?: string

    /**
     * Choices: open, closed, killed
     *
     * @type {"open" | "closed" | "killed"}
     * @memberOf IThreadsListParameters
     */
    include?: "open" | "closed" | "killed"

    /**
     * Choices: asc, desc
     *
     * @type {"asc" | "desc"}
     * @memberOf IThreadsListParameters
     */
    order?: "asc" | "desc"
}

export interface IThreadsList {
    cursor: IThreadsListCursor
    code: number
    response: IThreadsListResponse[]
}

export interface IThreadsListCursor {
    prev: string
    hasNext: boolean
    next: string
    hasPrev: boolean
    total: number
    id: string
    more: boolean
}

export interface IThreadsListResponse {
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

export interface IThreadsListHotParameters {
    /**
     * Looks up a category by ID
     *
     * @type {string}
     * @memberOf IThreadsListHotParameters
     */
    category?: string

    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IThreadsListHotParameters
     */
    forum?: string

    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IThreadsListHotParameters
     */
    author?: string

    /**
     * You may specify relations to include with your response.
     * Choices: forum, author, category
     *
     * @type {"forum" | "author" | "category"}
     * @memberOf IThreadsListHotParameters
     */
    related?: "forum" | "author" | "category"

    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf IThreadsListHotParameters
     */
    limit?: string

    /**
     * Choices: open, closed, killed
     *
     * @type {"open" | "closed" | "killed"}
     * @memberOf IThreadsListHotParameters
     */
    include?: "open" | "closed" | "killed"
}

export interface IThreadsListHot {
    code: number
    response: any[]
}

export interface IThreadsListPopularParameters {
    /**
     * Looks up a category by ID
     *
     * @type {string}
     * @memberOf IThreadsListPopularParameters
     */
    category?: string

    /**
     * Choices: 1h, 6h, 12h, 1d, 3d, 7d, 30d, 90d
     *
     * @type {"1h" | "6h" | "12h" | "1d" | "3d" | "7d" | "30d" | "90d"}
     * @memberOf IThreadsListPopularParameters
     */
    interval?: "1h" | "6h" | "12h" | "1d" | "3d" | "7d" | "30d" | "90d"

    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IThreadsListPopularParameters
     */
    forum?: string

    /**
     * You may specify relations to include with your response.
     * Choices: forum, author, category
     *
     * @type {"forum" | "author" | "category"}
     * @memberOf IThreadsListPopularParameters
     */
    related?: "forum" | "author" | "category"

    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf IThreadsListPopularParameters
     */
    limit?: string

    /**
     * Defaults to false
     *
     * @type {string}
     * @memberOf IThreadsListPopularParameters
     */
    with_top_post?: string
}

export interface IThreadsListPopular {
    code: number
    response: any[]
}

export interface IThreadsListPostsParameters {
    /**
     * Looks up a thread by ID
     * You may pass us the 'ident' or 'link' query types instead of an ID by including 'forum'.
     *
     * @type {string}
     * @memberOf IThreadsListPostsParameters
     */
    thread: string

    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IThreadsListPostsParameters
     */
    forum?: string

    /**
     * Unix timestamp (or ISO datetime standard)
     *
     * @type {string}
     * @memberOf IThreadsListPostsParameters
     */
    since?: string

    /**
     * You may specify relations to include with your response.
     * Choices: forum, thread
     *
     * @type {"forum" | "thread"}
     * @memberOf IThreadsListPostsParameters
     */
    related?: "forum" | "thread"

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IThreadsListPostsParameters
     */
    cursor?: string

    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf IThreadsListPostsParameters
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
     * @memberOf IThreadsListPostsParameters
     */
    filters?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IThreadsListPostsParameters
     */
    query?: string

    /**
     * Choices: unapproved, approved, spam, deleted, flagged, highlighted
     *
     * @type {"unapproved" | "approved" | "spam" | "deleted" | "flagged" | "highlighted"}
     * @memberOf IThreadsListPostsParameters
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
     * @memberOf IThreadsListPostsParameters
     */
    order?: "asc" | "desc"
}

export interface IThreadsListPosts {
    cursor: IThreadsListPostsCursor
    code: number
    response: IThreadsListPostsResponse[]
}

export interface IThreadsListPostsCursor {
    prev: string
    hasNext: boolean
    next: string
    hasPrev: boolean
    total: number
    id: string
    more: boolean
}

export interface IThreadsListPostsResponse {
    isJuliaFlagged: boolean
    isFlagged: boolean
    forum: string
    parent: number
    author: IThreadsListPostsAuthor
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

export interface IThreadsListPostsAuthor {
    username?: string
    about?: string
    name: string
    url: string
    isFollowing?: boolean
    isFollowedBy?: boolean
    profileUrl: string
    avatar: IThreadsListPostsAvatar
    id?: string
    isAnonymous: boolean
    email: string
}

export interface IThreadsListPostsAvatar {
    permalink: string
    cache: string
}

export interface IThreadsListUsersVotedThreadParameters {
    /**
     * Looks up a thread by ID
     *
     * @type {string}
     * @memberOf IThreadsListUsersVotedThreadParameters
     */
    thread: string

    /**
     * Prioritize followed users who voted on this thread (must be authenticated)
     *
     * @type {string}
     * @memberOf IThreadsListUsersVotedThreadParameters
     */
    prioritize_followed?: string

    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf IThreadsListUsersVotedThreadParameters
     */
    limit?: string

    /**
     * Choices: -1, 0, 1
     *
     * @type {"-1" | "0" | "1"}
     * @memberOf IThreadsListUsersVotedThreadParameters
     */
    vote?: "-1" | "0" | "1"
}

export interface IThreadsOpenParameters {
    /**
     * Looks up a thread by ID
     * You must be a moderator on the selected thread's forum.
     * You may pass us the 'ident' query type instead of an ID by including 'forum'.
     * You may pass us the 'link' query type to filter by URL. You must pass the 'forum' if you do not have the Pro API Access addon.
     *
     * @type {string}
     * @memberOf IThreadsOpenParameters
     */
    thread: string

    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IThreadsOpenParameters
     */
    forum?: string
}

export interface IThreadsOpen {
    code: number
    response: IThreadsOpenResponse[]
}

export interface IThreadsOpenResponse {
    id: string
}

export interface IThreadsRatingsSummaryParameters {
    /**
     * Looks up a thread by ID
     *
     * @type {string}
     * @memberOf IThreadsRatingsSummaryParameters
     */
    thread: string
}

export interface IThreadsRemoveParameters {
    /**
     * Looks up a thread by ID
     * You must be a moderator on the selected thread's forum.
     * You may pass us the 'ident' query type instead of an ID by including 'forum'.
     * You may pass us the 'link' query type to filter by URL. You must pass the 'forum' if you do not have the Pro API Access addon.
     *
     * @type {string}
     * @memberOf IThreadsRemoveParameters
     */
    thread: string

    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IThreadsRemoveParameters
     */
    forum?: string
}

export interface IThreadsRemove {
    code: number
    response: IThreadsRemoveResponse[]
}

export interface IThreadsRemoveResponse {
    id: string
}

export interface IThreadsRestoreParameters {
    /**
     * Looks up a thread by ID
     * You must be a moderator on the selected thread's forum.
     * You may pass us the 'ident' query type instead of an ID by including 'forum'.
     * You may pass us the 'link' query type to filter by URL. You must pass the 'forum' if you do not have the Pro API Access addon.
     *
     * @type {string}
     * @memberOf IThreadsRestoreParameters
     */
    thread: string

    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IThreadsRestoreParameters
     */
    forum?: string
}

export interface IThreadsRestore {
    code: number
    response: IThreadsRestoreResponse[]
}

export interface IThreadsRestoreResponse {
    id: string
}

export interface IThreadsSetParameters {
    /**
     * Looks up a thread by ID
     * You may pass us the 'ident' query type instead of an ID by including 'forum'.
     * You may pass us the 'link' query type to filter by URL. You must pass the 'forum' if you do not have the Pro API Access addon.
     *
     * @type {string}
     * @memberOf IThreadsSetParameters
     */
    thread: string

    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IThreadsSetParameters
     */
    forum?: string

    /**
     * You may specify relations to include with your response.
     * Choices: forum, author, category
     *
     * @type {"forum" | "author" | "category"}
     * @memberOf IThreadsSetParameters
     */
    related?: "forum" | "author" | "category"

    /**
     * Choices: topics
     *
     * @type {"topics"}
     * @memberOf IThreadsSetParameters
     */
    attach?: "topics"
}

export interface IThreadsSpamParameters {
    /**
     * Looks up a thread by ID
     * You must be a moderator on the selected thread's forum.
     * You may pass us the 'ident' or 'link' query types instead of an ID by including 'forum'.
     *
     * @type {string}
     * @memberOf IThreadsSpamParameters
     */
    thread: string

    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IThreadsSpamParameters
     */
    forum?: string
}

export interface IThreadsSubscribeParameters {
    /**
     * Looks up a thread by ID
     *
     * @type {string}
     * @memberOf IThreadsSubscribeParameters
     */
    thread: string
}

export interface IThreadsUnsubscribeParameters {
    /**
     * Looks up a thread by ID
     *
     * @type {string}
     * @memberOf IThreadsUnsubscribeParameters
     */
    thread: string
}

export interface IThreadsUpdateParameters {
    /**
     * You must be the author of the post or a moderator on the applicable forum.
     *
     * @type {string}
     * @memberOf IThreadsUpdateParameters
     */
    thread: string

    /**
     * Looks up a category by ID
     *
     * @type {string}
     * @memberOf IThreadsUpdateParameters
     */
    category?: string

    /**
     * Only valid if 'identifier' is provided.  See 'identifier' for more information.
     * Maximum length of 300
     *
     * @type {string}
     * @memberOf IThreadsUpdateParameters
     */
    old_identifier?: string

    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IThreadsUpdateParameters
     */
    forum?: string

    /**
     * Maximum length of 200
     *
     * @type {string}
     * @memberOf IThreadsUpdateParameters
     */
    title?: string

    /**
     * URL (defined by RFC 3986)
     * Maximum length of 500
     *
     * @type {string}
     * @memberOf IThreadsUpdateParameters
     */
    url?: string

    /**
     * You must be a moderator on the applicable forum to change a thread author.
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IThreadsUpdateParameters
     */
    author?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IThreadsUpdateParameters
     */
    validateAllPosts?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IThreadsUpdateParameters
     */
    message?: string

    /**
     * To update a specific identifier, provide 'old_identifier'.  If no identifier exists, a new one is created.
     * Maximum length of 300
     *
     * @type {string}
     * @memberOf IThreadsUpdateParameters
     */
    identifier?: string

    /**
     * Alpha-numeric slug
     * Maximum length of 200
     *
     * @type {string}
     * @memberOf IThreadsUpdateParameters
     */
    slug?: string
}

export interface IThreadsUpdate {
    code: number
    response: IThreadsUpdateResponse
}

export interface IThreadsUpdateResponse {
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

export interface IThreadsVoteParameters {
    /**
     * Choices: -1, 0, 1
     *
     * @type {"-1" | "0" | "1"}
     * @memberOf IThreadsVoteParameters
     */
    vote: "-1" | "0" | "1"

    /**
     * Looks up a thread by ID
     * You may pass us the 'ident' or 'link' query types instead of an ID by including 'forum'.
     *
     * @type {string}
     * @memberOf IThreadsVoteParameters
     */
    thread: string

    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IThreadsVoteParameters
     */
    forum?: string
}

export interface IThreadsVote {
    code: number
    response: IThreadsVoteResponse
}

export interface IThreadsVoteResponse {
    likesDelta: number
    vote: number
    dislikesDelta: number
    thread: IThreadsVoteThread
    delta: number
}

export interface IThreadsVoteThread {
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

export class ThreadsEndpoint {
    constructor(private client: Disqus) {}

    /**
     * This method has no descript in on the API.
     *
     * @param {IThreadsApproveParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} ThreadsEndpoint
     */
    approve(
        parameters: IThreadsApproveParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "threads/approve",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * Closes a thread.
     *
     * @param {IThreadsCloseParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IThreadsClose>} ThreadsEndpoint
     */
    close(parameters: IThreadsCloseParameters): Promise<IThreadsClose> {
        return this.client.request(
            "threads/close",
            parameters
        ) as Promise<IThreadsClose>
    }

    /**
     * This method is currently under development and subject to change.
     *
     * @param {IThreadsCreateParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IThreadsCreate>} ThreadsEndpoint
     */
    create(parameters: IThreadsCreateParameters): Promise<IThreadsCreate> {
        return this.client.request(
            "threads/create",
            parameters
        ) as Promise<IThreadsCreate>
    }

    /**
     * Returns thread details.
     *
     * @param {IThreadsDetailsParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IThreadsDetails>} ThreadsEndpoint
     */
    details(parameters: IThreadsDetailsParameters): Promise<IThreadsDetails> {
        return this.client.request(
            "threads/details",
            parameters
        ) as Promise<IThreadsDetails>
    }

    /**
     * Returns a list of threads sorted by the date created.
     *
     * @param {IThreadsListParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IThreadsList>} ThreadsEndpoint
     */
    list(parameters: IThreadsListParameters): Promise<IThreadsList> {
        return this.client.request(
            "threads/list",
            parameters
        ) as Promise<IThreadsList>
    }

    /**
     * This method is currently under development and subject to change.
     *
     * @param {IThreadsListHotParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IThreadsListHot>} ThreadsEndpoint
     */
    listHot(parameters: IThreadsListHotParameters): Promise<IThreadsListHot> {
        return this.client.request(
            "threads/listHot",
            parameters
        ) as Promise<IThreadsListHot>
    }

    /**
     * This method is currently under development and subject to change.
     *
     * @param {IThreadsListPopularParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IThreadsListPopular>} ThreadsEndpoint
     */
    listPopular(
        parameters: IThreadsListPopularParameters
    ): Promise<IThreadsListPopular> {
        return this.client.request(
            "threads/listPopular",
            parameters
        ) as Promise<IThreadsListPopular>
    }

    /**
     * Returns a list of posts within a thread.
     *
     * @param {IThreadsListPostsParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IThreadsListPosts>} ThreadsEndpoint
     */
    listPosts(
        parameters: IThreadsListPostsParameters
    ): Promise<IThreadsListPosts> {
        return this.client.request(
            "threads/listPosts",
            parameters
        ) as Promise<IThreadsListPosts>
    }

    /**
     * Returns a list of users that voted on this thread. Ifprioritize_followed is True and the user is authenticated, attemptsto return users that the authenticated user follows. If there aren'tenough followed users to reach the limit, pads the rest of the listwith not followed users.
     *
     * @param {IThreadsListUsersVotedThreadParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} ThreadsEndpoint
     */
    listUsersVotedThread(
        parameters: IThreadsListUsersVotedThreadParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "threads/listUsersVotedThread",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * Opens a thread.
     *
     * @param {IThreadsOpenParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IThreadsOpen>} ThreadsEndpoint
     */
    open(parameters: IThreadsOpenParameters): Promise<IThreadsOpen> {
        return this.client.request(
            "threads/open",
            parameters
        ) as Promise<IThreadsOpen>
    }

    /**
     * Returns average and total ratings for a thread.
     *
     * @param {IThreadsRatingsSummaryParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} ThreadsEndpoint
     */
    ratingsSummary(
        parameters: IThreadsRatingsSummaryParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "threads/ratingsSummary",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * Removes a thread.
     *
     * @param {IThreadsRemoveParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IThreadsRemove>} ThreadsEndpoint
     */
    remove(parameters: IThreadsRemoveParameters): Promise<IThreadsRemove> {
        return this.client.request(
            "threads/remove",
            parameters
        ) as Promise<IThreadsRemove>
    }

    /**
     * Opens a thread.
     *
     * @param {IThreadsRestoreParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IThreadsRestore>} ThreadsEndpoint
     */
    restore(parameters: IThreadsRestoreParameters): Promise<IThreadsRestore> {
        return this.client.request(
            "threads/restore",
            parameters
        ) as Promise<IThreadsRestore>
    }

    /**
     * Returns an unsorted set of threads given a list of ids.
     *
     * @param {IThreadsSetParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} ThreadsEndpoint
     */
    set(parameters: IThreadsSetParameters): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "threads/set",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * This method has no descript in on the API.
     *
     * @param {IThreadsSpamParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} ThreadsEndpoint
     */
    spam(parameters: IThreadsSpamParameters): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "threads/spam",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * This method has no descript in on the API.
     *
     * @param {IThreadsSubscribeParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} ThreadsEndpoint
     */
    subscribe(
        parameters: IThreadsSubscribeParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "threads/subscribe",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * This method has no descript in on the API.
     *
     * @param {IThreadsUnsubscribeParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} ThreadsEndpoint
     */
    unsubscribe(
        parameters: IThreadsUnsubscribeParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "threads/unsubscribe",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * This method is currently under development and subject to change.
     *
     * @param {IThreadsUpdateParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IThreadsUpdate>} ThreadsEndpoint
     */
    update(parameters: IThreadsUpdateParameters): Promise<IThreadsUpdate> {
        return this.client.request(
            "threads/update",
            parameters
        ) as Promise<IThreadsUpdate>
    }

    /**
     * Register a vote on a thread.
     *
     * @param {IThreadsVoteParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IThreadsVote>} ThreadsEndpoint
     */
    vote(parameters: IThreadsVoteParameters): Promise<IThreadsVote> {
        return this.client.request(
            "threads/vote",
            parameters
        ) as Promise<IThreadsVote>
    }
}
