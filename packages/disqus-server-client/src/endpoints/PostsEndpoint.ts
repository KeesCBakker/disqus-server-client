import { IGenericDisqusResponse } from "disqus-server-client-core"
import { Disqus } from "./../disqus"

export interface IPostsApproveParameters {
    /**
     * Looks up a post by ID
     * You must be a moderator on the selected post's forum.
     *
     * @type {string}
     * @memberOf IPostsApproveParameters
     */
    post: string
}

export interface IPostsApprove {
    code: number
    response: IPostsApproveResponse[]
}

export interface IPostsApproveResponse {
    id: string
}

export interface IPostsCreateParameters {
    message: string

    /**
     * Minimum value of 1
     * Maximum value of 5
     *
     * @type {string}
     * @memberOf IPostsCreateParameters
     */
    rating?: string

    /**
     * Looks up a post by ID
     *
     * @type {string}
     * @memberOf IPostsCreateParameters
     */
    parent?: string

    /**
     * Looks up a thread by ID
     *
     * @type {string}
     * @memberOf IPostsCreateParameters
     */
    thread?: string

    /**
     * Email address (defined by RFC 5322)
     *
     * @type {string}
     * @memberOf IPostsCreateParameters
     */
    author_email?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IPostsCreateParameters
     */
    author_name?: string

    /**
     * Choices: unapproved, approved, spam, killed
     *
     * @type {"unapproved" | "approved" | "spam" | "killed"}
     * @memberOf IPostsCreateParameters
     */
    state?: "unapproved" | "approved" | "spam" | "killed"

    /**
     * URL (defined by RFC 3986)
     *
     * @type {string}
     * @memberOf IPostsCreateParameters
     */
    author_url?: string

    /**
     * Unix timestamp (or ISO datetime standard)
     *
     * @type {string}
     * @memberOf IPostsCreateParameters
     */
    date?: string

    /**
     * IP address (defined by RFC 5322)
     *
     * @type {string}
     * @memberOf IPostsCreateParameters
     */
    ip_address?: string
}

export interface IPostsCreate {
    code: number
    response: IPostsCreateResponse
}

export interface IPostsCreateResponse {
    isJuliaFlagged: boolean
    isFlagged: boolean
    forum: string
    parent: string
    author: IPostsCreateAuthor
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

export interface IPostsCreateAuthor {
    username: string
    about: string
    name: string
    url: string
    isFollowing: boolean
    isFollowedBy: boolean
    profileUrl: string
    avatar: IPostsCreateAvatar
    id: string
    isAnonymous: boolean
    email: string
}

export interface IPostsCreateAvatar {
    permalink: string
    cache: string
}

export interface IPostsDetailsParameters {
    /**
     * Looks up a post by ID
     *
     * @type {string}
     * @memberOf IPostsDetailsParameters
     */
    post: string

    /**
     * You may specify relations to include with your response.
     * Choices: forum, thread
     *
     * @type {"forum" | "thread"}
     * @memberOf IPostsDetailsParameters
     */
    related?: "forum" | "thread"
}

export interface IPostsDetails {
    code: number
    response: IPostsDetailsResponse
}

export interface IPostsDetailsResponse {
    isJuliaFlagged: boolean
    isFlagged: boolean
    forum: string
    parent: string
    author: IPostsDetailsAuthor
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

export interface IPostsDetailsAuthor {
    username: string
    about: string
    name: string
    url: string
    isFollowing: boolean
    isFollowedBy: boolean
    profileUrl: string
    avatar: IPostsDetailsAvatar
    id: string
    isAnonymous: boolean
    email: string
}

export interface IPostsDetailsAvatar {
    permalink: string
    cache: string
}

export interface IPostsGetContextParameters {
    /**
     * Looks up a post by ID
     *
     * @type {string}
     * @memberOf IPostsGetContextParameters
     */
    post: string

    /**
     * You may specify relations to include with your response.
     * Choices: forum, thread
     *
     * @type {"forum" | "thread"}
     * @memberOf IPostsGetContextParameters
     */
    related?: "forum" | "thread"

    /**
     * Minimum value of 1
     * Maximum value of 10
     *
     * @type {string}
     * @memberOf IPostsGetContextParameters
     */
    depth?: string

    /**
     * Choices: asc, desc, popular
     *
     * @type {"asc" | "desc" | "popular"}
     * @memberOf IPostsGetContextParameters
     */
    order?: "asc" | "desc" | "popular"
}

export interface IPostsGetContext {
    code: number
    response: IPostsGetContextResponse[]
}

export interface IPostsGetContextResponse {
    isJuliaFlagged: boolean
    isFlagged: boolean
    forum: string
    parent: number
    author: IPostsGetContextAuthor
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

export interface IPostsGetContextAuthor {
    username: string
    about: string
    name: string
    url: string
    isFollowing: boolean
    isFollowedBy: boolean
    profileUrl: string
    avatar: IPostsGetContextAvatar
    id: string
    isAnonymous: boolean
    email: string
}

export interface IPostsGetContextAvatar {
    permalink: string
    cache: string
}

export interface IPostsListParameters {
    /**
     * Looks up a category by ID
     *
     * @type {string}
     * @memberOf IPostsListParameters
     */
    category?: string

    /**
     * Unix timestamp (or ISO datetime standard)
     *
     * @type {string}
     * @memberOf IPostsListParameters
     */
    end?: string

    /**
     * Choices: date, priority
     *
     * @type {"date" | "priority"}
     * @memberOf IPostsListParameters
     */
    sortType?: "date" | "priority"

    /**
     * Looks up a thread by ID
     *
     * @type {string}
     * @memberOf IPostsListParameters
     */
    thread?: string

    /**
     * Defaults to all forums you moderate. Use :all to retrieve all forums.
     *
     * @type {string}
     * @memberOf IPostsListParameters
     */
    forum?: string

    /**
     * Unix timestamp (or ISO datetime standard)
     *
     * @type {string}
     * @memberOf IPostsListParameters
     */
    start?: string

    /**
     * Unix timestamp (or ISO datetime standard)
     *
     * @type {string}
     * @memberOf IPostsListParameters
     */
    since?: string

    /**
     * You may specify relations to include with your response.
     * Choices: forum, thread
     *
     * @type {"forum" | "thread"}
     * @memberOf IPostsListParameters
     */
    related?: "forum" | "thread"

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IPostsListParameters
     */
    cursor?: string

    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf IPostsListParameters
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
     * @memberOf IPostsListParameters
     */
    filters?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

    /**
     * Deprecated: Please see documentation on cursors
     *
     * @type {string}
     * @memberOf IPostsListParameters
     */
    offset?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IPostsListParameters
     */
    query?: string

    /**
     * Choices: unapproved, approved, spam, deleted, flagged, highlighted
     *
     * @type {"unapproved" | "approved" | "spam" | "deleted" | "flagged" | "highlighted"}
     * @memberOf IPostsListParameters
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
     * @memberOf IPostsListParameters
     */
    order?: "asc" | "desc"
}

export interface IPostsList {
    cursor: IPostsListCursor
    code: number
    response: IPostsListResponse[]
}

export interface IPostsListCursor {
    prev: string
    hasNext: boolean
    next: string
    hasPrev: boolean
    total: number
    id: string
    more: boolean
}

export interface IPostsListResponse {
    isJuliaFlagged: boolean
    isFlagged: boolean
    forum: string
    parent: number
    author: IPostsListAuthor
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

export interface IPostsListAuthor {
    username?: string
    about?: string
    name: string
    url: string
    isFollowing?: boolean
    isFollowedBy?: boolean
    profileUrl: string
    avatar: IPostsListAvatar
    id?: string
    isAnonymous: boolean
    email: string
}

export interface IPostsListAvatar {
    permalink: string
    cache: string
}

export interface IPostsListModerationHistoryParameters {
    /**
     * Looks up a post by ID
     * You must be a moderator on the selected post's forum.
     *
     * @type {string}
     * @memberOf IPostsListModerationHistoryParameters
     */
    post: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IPostsListModerationHistoryParameters
     */
    cursor?: string

    /**
     * Defaults to 20
     *
     * @type {string}
     * @memberOf IPostsListModerationHistoryParameters
     */
    limit?: string
}

export interface IPostsListPopularParameters {
    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IPostsListPopularParameters
     */
    category?: string

    /**
     * Choices: 30s, 1h, 6h, 12h, 1d, 3d, 7d, 30d, 60d, 90d
     *
     * @type {"30s" | "1h" | "6h" | "12h" | "1d" | "3d" | "7d" | "30d" | "60d" | "90d"}
     * @memberOf IPostsListPopularParameters
     */
    interval?:
        | "30s"
        | "1h"
        | "6h"
        | "12h"
        | "1d"
        | "3d"
        | "7d"
        | "30d"
        | "60d"
        | "90d"

    /**
     * Defaults to all forums you moderate. Use :all to retrieve all forums.
     *
     * @type {string}
     * @memberOf IPostsListPopularParameters
     */
    forum?: string

    /**
     * Looks up a thread by ID
     *
     * @type {string}
     * @memberOf IPostsListPopularParameters
     */
    thread?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IPostsListPopularParameters
     */
    query?: string

    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf IPostsListPopularParameters
     */
    limit?: string

    /**
     * You may specify relations to include with your response.
     * Choices: forum, thread
     *
     * @type {"forum" | "thread"}
     * @memberOf IPostsListPopularParameters
     */
    related?: "forum" | "thread"

    /**
     * Defaults to 0
     *
     * @type {string}
     * @memberOf IPostsListPopularParameters
     */
    offset?: string

    /**
     * Looks up an organization by ID
     *
     * @type {string}
     * @memberOf IPostsListPopularParameters
     */
    organization?: string

    /**
     * Choices: unapproved, approved, spam, deleted, flagged, highlighted
     *
     * @type {"unapproved" | "approved" | "spam" | "deleted" | "flagged" | "highlighted"}
     * @memberOf IPostsListPopularParameters
     */
    include?:
        | "unapproved"
        | "approved"
        | "spam"
        | "deleted"
        | "flagged"
        | "highlighted"

    /**
     * Choices: popular, best
     *
     * @type {"popular" | "best"}
     * @memberOf IPostsListPopularParameters
     */
    order?: "popular" | "best"
}

export interface IPostsListPopular {
    code: number
    response: IPostsListPopularResponse[]
}

export interface IPostsListPopularResponse {
    isJuliaFlagged: boolean
    isFlagged: boolean
    forum: string
    parent: number
    author: IPostsListPopularAuthor
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

export interface IPostsListPopularAuthor {
    username?: string
    about?: string
    name: string
    url: string
    isFollowing?: boolean
    isFollowedBy?: boolean
    profileUrl: string
    avatar: IPostsListPopularAvatar
    id?: string
    isAnonymous: boolean
    email: string
}

export interface IPostsListPopularAvatar {
    permalink: string
    cache: string
}

export interface IPostsListReportersParameters {
    /**
     * Looks up a post by ID
     * You must be a moderator on the selected post's forum.
     *
     * @type {string}
     * @memberOf IPostsListReportersParameters
     */
    posts: string

    /**
     * Defaults to 1
     *
     * @type {string}
     * @memberOf IPostsListReportersParameters
     */
    numberPerPost?: string
}

export interface IPostsRemoveParameters {
    /**
     * Looks up a post by ID
     *
     * @type {string}
     * @memberOf IPostsRemoveParameters
     */
    post: string
}

export interface IPostsRemove {
    code: number
    response: IPostsRemoveResponse[]
}

export interface IPostsRemoveResponse {
    id: string
}

export interface IPostsReportParameters {
    /**
     * Looks up a post by ID
     *
     * @type {string}
     * @memberOf IPostsReportParameters
     */
    post: string

    /**
     * Valid values are:
     * 0: HARASSMENT
     * 1: SPAM
     * 2: INAPPROPRIATE_CONTENT
     * 3: THREAT
     * 4: IMPERSONATION
     * 5: PRIVATE_INFORMATION
     * 6: DISAGREE
     *
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 6}
     * @memberOf IPostsReportParameters
     */
    reason?: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

export interface IPostsReport {
    code: number
    response: IPostsReportResponse
}

export interface IPostsReportResponse {
    isJuliaFlagged: boolean
    isFlagged: boolean
    forum: string
    parent: string
    author: IPostsReportAuthor
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

export interface IPostsReportAuthor {
    username: string
    about: string
    name: string
    url: string
    isFollowing: boolean
    isFollowedBy: boolean
    profileUrl: string
    avatar: IPostsReportAvatar
    id: string
    isAnonymous: boolean
    email: string
}

export interface IPostsReportAvatar {
    permalink: string
    cache: string
}

export interface IPostsRestoreParameters {
    /**
     * Looks up a post by ID
     *
     * @type {string}
     * @memberOf IPostsRestoreParameters
     */
    post: string
}

export interface IPostsRestore {
    code: number
    response: IPostsRestoreResponse[]
}

export interface IPostsRestoreResponse {
    id: string
}

export interface IPostsSpamParameters {
    /**
     * Looks up a post by ID
     * You must be a moderator on the selected post's forum.
     *
     * @type {string}
     * @memberOf IPostsSpamParameters
     */
    post: string
}

export interface IPostsSpam {
    code: number
    response: IPostsSpamResponse[]
}

export interface IPostsSpamResponse {
    id: string
}

export interface IPostsUpdateParameters {
    message: string

    /**
     * You must be the author of the post or a moderator on the applicable forum.
     *
     * @type {string}
     * @memberOf IPostsUpdateParameters
     */
    post: string

    /**
     * Minimum value of 1
     * Maximum value of 5
     *
     * @type {string}
     * @memberOf IPostsUpdateParameters
     */
    rating?: string
}

export interface IPostsUpdate {
    code: number
    response: IPostsUpdateResponse
}

export interface IPostsUpdateResponse {
    isJuliaFlagged: boolean
    isFlagged: boolean
    forum: string
    parent: string
    author: IPostsUpdateAuthor
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

export interface IPostsUpdateAuthor {
    username: string
    about: string
    name: string
    url: string
    isFollowing: boolean
    isFollowedBy: boolean
    profileUrl: string
    avatar: IPostsUpdateAvatar
    id: string
    isAnonymous: boolean
    email: string
}

export interface IPostsUpdateAvatar {
    permalink: string
    cache: string
}

export interface IPostsVoteParameters {
    /**
     * Choices: -1, 0, 1
     *
     * @type {"-1" | "0" | "1"}
     * @memberOf IPostsVoteParameters
     */
    vote: "-1" | "0" | "1"

    /**
     * Looks up a post by ID
     *
     * @type {string}
     * @memberOf IPostsVoteParameters
     */
    post: string
}

export interface IPostsVote {
    code: number
    response: IPostsVoteResponse
}

export interface IPostsVoteResponse {
    vote: number
    likesDelta: number
    post: IPostsVotePost
    dislikesDelta: number
    delta: number
}

export interface IPostsVotePost {
    isJuliaFlagged: boolean
    isFlagged: boolean
    forum: string
    parent: string
    author: IPostsVoteAuthor
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

export interface IPostsVoteAuthor {
    username: string
    about: string
    name: string
    url: string
    isFollowing: boolean
    isFollowedBy: boolean
    profileUrl: string
    avatar: IPostsVoteAvatar
    id: string
    isAnonymous: boolean
    email: string
}

export interface IPostsVoteAvatar {
    permalink: string
    cache: string
}

export class PostsEndpoint {
    constructor(private client: Disqus) {}

    /**
     * Approves the requested post(s).
     *
     * @param {IPostsApproveParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IPostsApprove>} PostsEndpoint
     */
    approve(parameters: IPostsApproveParameters): Promise<IPostsApprove> {
        return this.client.request(
            "posts/approve",
            parameters
        ) as Promise<IPostsApprove>
    }

    /**
     * Creates a new post.
     *
     * @param {IPostsCreateParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IPostsCreate>} PostsEndpoint
     */
    create(parameters: IPostsCreateParameters): Promise<IPostsCreate> {
        return this.client.request(
            "posts/create",
            parameters
        ) as Promise<IPostsCreate>
    }

    /**
     * Returns information about a post.
     *
     * @param {IPostsDetailsParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IPostsDetails>} PostsEndpoint
     */
    details(parameters: IPostsDetailsParameters): Promise<IPostsDetails> {
        return this.client.request(
            "posts/details",
            parameters
        ) as Promise<IPostsDetails>
    }

    /**
     * This method is currently under development and subject to change.
     *
     * @param {IPostsGetContextParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IPostsGetContext>} PostsEndpoint
     */
    getContext(
        parameters: IPostsGetContextParameters
    ): Promise<IPostsGetContext> {
        return this.client.request(
            "posts/getContext",
            parameters
        ) as Promise<IPostsGetContext>
    }

    /**
     * Returns a list of posts ordered by the date created.
     *
     * @param {IPostsListParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IPostsList>} PostsEndpoint
     */
    list(parameters: IPostsListParameters): Promise<IPostsList> {
        return this.client.request(
            "posts/list",
            parameters
        ) as Promise<IPostsList>
    }

    /**
     * Returns moderation history for a given post.
     *
     * @param {IPostsListModerationHistoryParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} PostsEndpoint
     */
    listModerationHistory(
        parameters: IPostsListModerationHistoryParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "posts/listModerationHistory",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * This method is currently under development and subject to change.
     *
     * @param {IPostsListPopularParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IPostsListPopular>} PostsEndpoint
     */
    listPopular(
        parameters: IPostsListPopularParameters
    ): Promise<IPostsListPopular> {
        return this.client.request(
            "posts/listPopular",
            parameters
        ) as Promise<IPostsListPopular>
    }

    /**
     * This method has no descript in on the API.
     *
     * @param {IPostsListReportersParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} PostsEndpoint
     */
    listReporters(
        parameters: IPostsListReportersParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "posts/listReporters",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * Deletes the requested post(s).
     *
     * @param {IPostsRemoveParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IPostsRemove>} PostsEndpoint
     */
    remove(parameters: IPostsRemoveParameters): Promise<IPostsRemove> {
        return this.client.request(
            "posts/remove",
            parameters
        ) as Promise<IPostsRemove>
    }

    /**
     * Reports a post (flagging).
     *
     * @param {IPostsReportParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IPostsReport>} PostsEndpoint
     */
    report(parameters: IPostsReportParameters): Promise<IPostsReport> {
        return this.client.request(
            "posts/report",
            parameters
        ) as Promise<IPostsReport>
    }

    /**
     * Undeletes the requested post(s).
     *
     * @param {IPostsRestoreParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IPostsRestore>} PostsEndpoint
     */
    restore(parameters: IPostsRestoreParameters): Promise<IPostsRestore> {
        return this.client.request(
            "posts/restore",
            parameters
        ) as Promise<IPostsRestore>
    }

    /**
     * Marks the requested post(s) as spam.
     *
     * @param {IPostsSpamParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IPostsSpam>} PostsEndpoint
     */
    spam(parameters: IPostsSpamParameters): Promise<IPostsSpam> {
        return this.client.request(
            "posts/spam",
            parameters
        ) as Promise<IPostsSpam>
    }

    /**
     * This method is currently under development and subject to change.
     *
     * @param {IPostsUpdateParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IPostsUpdate>} PostsEndpoint
     */
    update(parameters: IPostsUpdateParameters): Promise<IPostsUpdate> {
        return this.client.request(
            "posts/update",
            parameters
        ) as Promise<IPostsUpdate>
    }

    /**
     * Register a vote on a post.
     *
     * @param {IPostsVoteParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IPostsVote>} PostsEndpoint
     */
    vote(parameters: IPostsVoteParameters): Promise<IPostsVote> {
        return this.client.request(
            "posts/vote",
            parameters
        ) as Promise<IPostsVote>
    }
}
