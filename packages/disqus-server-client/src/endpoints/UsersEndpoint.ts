import { Disqus } from "./../disqus"

export interface IUsersCheckUsernameParameters {
    /**
     * Disqus username
     * Minimum length of 3
     * Maximum length of 30
     *
     * @type {string}
     * @memberOf IUsersCheckUsernameParameters
     */
    username?: string
}

export interface IUsersDetailsParameters {
    /**
     * Choices: userFlaggedUser, thirdPartyAccounts
     *
     * @type {"userFlaggedUser" | "thirdPartyAccounts"}
     * @memberOf IUsersDetailsParameters
     */
    attach?: "userFlaggedUser" | "thirdPartyAccounts"

    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IUsersDetailsParameters
     */
    user?: string
}

export interface IUsersDetails {
    code: number
    response: IUsersDetailsResponse
}

export interface IUsersDetailsResponse {
    username: string
    about: string
    name: string
    url: string
    isFollowing: boolean
    isFollowedBy: boolean
    profileUrl: string
    avatar: IUsersDetailsAvatar
    id: string
    isAnonymous: boolean
    email: string
}

export interface IUsersDetailsAvatar {
    permalink: string
    cache: string
}

export interface IUsersFollowParameters {
    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IUsersFollowParameters
     */
    target: string
}

export interface IUsersFollow {
    code: number
    response: any[]
}

export interface IUsersInterestingUsersParameters {
    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf IUsersInterestingUsersParameters
     */
    limit?: string
}

export interface IUsersListActiveForumsParameters {
    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IUsersListActiveForumsParameters
     */
    since_id?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IUsersListActiveForumsParameters
     */
    cursor?: string

    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf IUsersListActiveForumsParameters
     */
    limit?: string

    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IUsersListActiveForumsParameters
     */
    user?: string

    /**
     * Choices: asc, desc
     *
     * @type {"asc" | "desc"}
     * @memberOf IUsersListActiveForumsParameters
     */
    order?: "asc" | "desc"
}

export interface IUsersListActivityParameters {
    /**
     * Unix timestamp (or ISO datetime standard)
     *
     * @type {string}
     * @memberOf IUsersListActivityParameters
     */
    since?: string

    /**
     * You may specify relations to include with your response.
     * Choices: forum, thread
     *
     * @type {"forum" | "thread"}
     * @memberOf IUsersListActivityParameters
     */
    related?: "forum" | "thread"

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IUsersListActivityParameters
     */
    cursor?: string

    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf IUsersListActivityParameters
     */
    limit?: string

    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IUsersListActivityParameters
     */
    user?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IUsersListActivityParameters
     */
    query?: string

    /**
     * Choices: user, replies, following
     *
     * @type {"user" | "replies" | "following"}
     * @memberOf IUsersListActivityParameters
     */
    include?: "user" | "replies" | "following"

    /**
     * Looks up an anonymous user by unique hash
     *
     * @type {string}
     * @memberOf IUsersListActivityParameters
     */
    anon_user?: string
}

export interface IUsersListActivity {
    cursor: IUsersListActivityCursor
    code: number
    response: IUsersListActivityResponse[]
}

export interface IUsersListActivityCursor {
    prev: string
    hasNext: boolean
    next: string
    hasPrev: string
    total: number
    id: string
    more: boolean
}

export interface IUsersListActivityResponse {
    object: IUsersListActivityObject
    type: string
    createdAt: Date
}

export interface IUsersListActivityObject {
    thread: IUsersListActivityThread
    forum: IUsersListActivityForum
    author: IUsersListActivityAuthor
    date?: Date
    vote?: number
    post?: IUsersListActivityPost
    recipient?: string
    id: string
    isJuliaFlagged?: boolean
    isFlagged?: boolean
    voters?: any[] | IUsersListActivityAuthor
    parent?: IUsersListActivityParent
    isApproved?: boolean
    dislikes?: number
    raw_message?: string
    points?: number
    createdAt?: Date
    isEdited?: boolean
    message?: string
    isHighlighted?: boolean
    ipAddress?: string
    isSpam?: boolean
    isDeleted?: boolean
    likes?: number
}

export interface IUsersListActivityAuthor {
    username: string
    about: string
    name: string
    url: string
    id: string
    profileUrl: string
    avatar: IUsersListActivityAvatar
    isAnonymous: boolean
    email: string
}

export interface IUsersListActivityAvatar {
    permalink: string
    cache: string
}

export interface IUsersListActivityForum {
    id: string
    name: string
    founder: string
    favicon: IUsersListActivityAvatar
}

export interface IUsersListActivityParent {
    isJuliaFlagged: boolean
    forum: string
    parent: string
    author: IUsersListActivityAuthor
    isFlagged: boolean
    raw_message: string
    isApproved: boolean
    id: string
    thread: string
    points: number
    isDeleted: boolean
    isEdited: boolean
    message: string
    isHighlighted: boolean
    ipAddress: string
    isSpam: boolean
    createdAt: Date
}

export interface IUsersListActivityPost {
    isJuliaFlagged: boolean
    isFlagged: boolean
    forum: IUsersListActivityForum
    parent: string
    author: IUsersListActivityAuthor
    isApproved: boolean
    dislikes: number
    raw_message: string
    id: string
    thread: IUsersListActivityThread
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

export interface IUsersListActivityThread {
    category: string
    forum: string
    author: string
    title: string
    id: string
    isClosed: boolean
    link: string
    isDeleted: boolean
    message: string
    ipAddress: string
    slug: string
    createdAt: Date
}

export interface IUsersListFollowersParameters {
    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IUsersListFollowersParameters
     */
    since_id?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IUsersListFollowersParameters
     */
    cursor?: string

    /**
     * Choices: userFlaggedUser, thirdPartyAccounts
     *
     * @type {"userFlaggedUser" | "thirdPartyAccounts"}
     * @memberOf IUsersListFollowersParameters
     */
    attach?: "userFlaggedUser" | "thirdPartyAccounts"

    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf IUsersListFollowersParameters
     */
    limit?: string

    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IUsersListFollowersParameters
     */
    user?: string

    /**
     * Choices: asc, desc
     *
     * @type {"asc" | "desc"}
     * @memberOf IUsersListFollowersParameters
     */
    order?: "asc" | "desc"
}

export interface IUsersListFollowingParameters {
    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IUsersListFollowingParameters
     */
    since_id?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IUsersListFollowingParameters
     */
    cursor?: string

    /**
     * Choices: userFlaggedUser, thirdPartyAccounts
     *
     * @type {"userFlaggedUser" | "thirdPartyAccounts"}
     * @memberOf IUsersListFollowingParameters
     */
    attach?: "userFlaggedUser" | "thirdPartyAccounts"

    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf IUsersListFollowingParameters
     */
    limit?: string

    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IUsersListFollowingParameters
     */
    user?: string

    /**
     * Choices: asc, desc
     *
     * @type {"asc" | "desc"}
     * @memberOf IUsersListFollowingParameters
     */
    order?: "asc" | "desc"
}

export interface IUsersListFollowingChannelsParameters {
    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IUsersListFollowingChannelsParameters
     */
    cursor?: string

    /**
     * Whether to exclude Channels that the user moderates fromthe results
     *
     * @type {string}
     * @memberOf IUsersListFollowingChannelsParameters
     */
    excludeModerated?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IUsersListFollowingChannelsParameters
     */
    since_id?: string

    /**
     * Choices: asc, desc
     *
     * @type {"asc" | "desc"}
     * @memberOf IUsersListFollowingChannelsParameters
     */
    order?: "asc" | "desc"

    /**
     * Whether to include Channels where the user follows the primary forum
     *
     * @type {string}
     * @memberOf IUsersListFollowingChannelsParameters
     */
    includeFollowedPrimaryForums?: string

    /**
     * Choices: followsForum, forumCanDisableAds, forumForumCategory, counters, forumDaysAlive, forumFeatures, forumIntegration, forumNewPolicy, forumPermissions, channel_categories
     *
     * @type {"followsForum" | "forumCanDisableAds" | "forumForumCategory" | "counters" | "forumDaysAlive" | "forumFeatures" | "forumIntegration" | "forumNewPolicy" | "forumPermissions" | "channel_categories"}
     * @memberOf IUsersListFollowingChannelsParameters
     */
    attach?:
        | "followsForum"
        | "forumCanDisableAds"
        | "forumForumCategory"
        | "counters"
        | "forumDaysAlive"
        | "forumFeatures"
        | "forumIntegration"
        | "forumNewPolicy"
        | "forumPermissions"
        | "channel_categories"

    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf IUsersListFollowingChannelsParameters
     */
    limit?: string

    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IUsersListFollowingChannelsParameters
     */
    user?: string

    /**
     * Whether to exclude Channels that the user owns from the results
     *
     * @type {string}
     * @memberOf IUsersListFollowingChannelsParameters
     */
    excludeOwned?: string
}

export interface IUsersListFollowingForumsParameters {
    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IUsersListFollowingForumsParameters
     */
    since_id?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IUsersListFollowingForumsParameters
     */
    cursor?: string

    /**
     * Choices: followsForum, forumCanDisableAds, forumForumCategory, counters, forumDaysAlive, forumFeatures, forumIntegration, forumNewPolicy, forumPermissions
     *
     * @type {"followsForum" | "forumCanDisableAds" | "forumForumCategory" | "counters" | "forumDaysAlive" | "forumFeatures" | "forumIntegration" | "forumNewPolicy" | "forumPermissions"}
     * @memberOf IUsersListFollowingForumsParameters
     */
    attach?:
        | "followsForum"
        | "forumCanDisableAds"
        | "forumForumCategory"
        | "counters"
        | "forumDaysAlive"
        | "forumFeatures"
        | "forumIntegration"
        | "forumNewPolicy"
        | "forumPermissions"

    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf IUsersListFollowingForumsParameters
     */
    limit?: string

    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IUsersListFollowingForumsParameters
     */
    user?: string

    /**
     * Choices: asc, desc
     *
     * @type {"asc" | "desc"}
     * @memberOf IUsersListFollowingForumsParameters
     */
    order?: "asc" | "desc"
}

export interface IUsersListForumsParameters {
    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IUsersListForumsParameters
     */
    since_id?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IUsersListForumsParameters
     */
    cursor?: string

    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf IUsersListForumsParameters
     */
    limit?: string

    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IUsersListForumsParameters
     */
    user?: string

    /**
     * Choices: asc, desc
     *
     * @type {"asc" | "desc"}
     * @memberOf IUsersListForumsParameters
     */
    order?: "asc" | "desc"
}

export interface IUsersListForums {
    cursor: IUsersListForumsCursor
    code: number
    response: IUsersListForumsResponse[]
}

export interface IUsersListForumsCursor {
    prev: string
    hasNext: boolean
    next: string
    hasPrev: boolean
    total: number
    id: string
    more: boolean
}

export interface IUsersListForumsResponse {
    id: string
    name: string
    founder: string
    favicon: IUsersListForumsFavicon
}

export interface IUsersListForumsFavicon {
    permalink: string
    cache: string
}

export interface IUsersListModeratedChannelsParameters {
    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IUsersListModeratedChannelsParameters
     */
    since_id?: string

    /**
     * Choices: asc, desc
     *
     * @type {"asc" | "desc"}
     * @memberOf IUsersListModeratedChannelsParameters
     */
    order?: "asc" | "desc"

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IUsersListModeratedChannelsParameters
     */
    cursor?: string

    /**
     * Choices: followsForum, forumCanDisableAds, forumForumCategory, counters, forumDaysAlive, forumFeatures, forumIntegration, forumNewPolicy, forumPermissions, channel_categories
     *
     * @type {"followsForum" | "forumCanDisableAds" | "forumForumCategory" | "counters" | "forumDaysAlive" | "forumFeatures" | "forumIntegration" | "forumNewPolicy" | "forumPermissions" | "channel_categories"}
     * @memberOf IUsersListModeratedChannelsParameters
     */
    attach?:
        | "followsForum"
        | "forumCanDisableAds"
        | "forumForumCategory"
        | "counters"
        | "forumDaysAlive"
        | "forumFeatures"
        | "forumIntegration"
        | "forumNewPolicy"
        | "forumPermissions"
        | "channel_categories"

    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf IUsersListModeratedChannelsParameters
     */
    limit?: string

    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IUsersListModeratedChannelsParameters
     */
    user?: string

    /**
     * Whether to exclude Channels that the user owns from the results
     *
     * @type {string}
     * @memberOf IUsersListModeratedChannelsParameters
     */
    excludeOwned?: string
}

export interface IUsersListMostActiveForumsParameters {
    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf IUsersListMostActiveForumsParameters
     */
    limit?: string

    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IUsersListMostActiveForumsParameters
     */
    user?: string
}

export interface IUsersListOwnedChannelsParameters {
    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IUsersListOwnedChannelsParameters
     */
    since_id?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IUsersListOwnedChannelsParameters
     */
    cursor?: string

    /**
     * Choices: followsForum, forumCanDisableAds, forumForumCategory, counters, forumDaysAlive, forumFeatures, forumIntegration, forumNewPolicy, forumPermissions, channel_categories
     *
     * @type {"followsForum" | "forumCanDisableAds" | "forumForumCategory" | "counters" | "forumDaysAlive" | "forumFeatures" | "forumIntegration" | "forumNewPolicy" | "forumPermissions" | "channel_categories"}
     * @memberOf IUsersListOwnedChannelsParameters
     */
    attach?:
        | "followsForum"
        | "forumCanDisableAds"
        | "forumForumCategory"
        | "counters"
        | "forumDaysAlive"
        | "forumFeatures"
        | "forumIntegration"
        | "forumNewPolicy"
        | "forumPermissions"
        | "channel_categories"

    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf IUsersListOwnedChannelsParameters
     */
    limit?: string

    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IUsersListOwnedChannelsParameters
     */
    user?: string

    /**
     * Choices: asc, desc
     *
     * @type {"asc" | "desc"}
     * @memberOf IUsersListOwnedChannelsParameters
     */
    order?: "asc" | "desc"
}

export interface IUsersListPostsParameters {
    /**
     * Unix timestamp (or ISO datetime standard)
     *
     * @type {string}
     * @memberOf IUsersListPostsParameters
     */
    since?: string

    /**
     * You may specify relations to include with your response.
     * Choices: forum, thread
     *
     * @type {"forum" | "thread"}
     * @memberOf IUsersListPostsParameters
     */
    related?: "forum" | "thread"

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IUsersListPostsParameters
     */
    cursor?: string

    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf IUsersListPostsParameters
     */
    limit?: string

    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IUsersListPostsParameters
     */
    user?: string

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
     * @memberOf IUsersListPostsParameters
     */
    filters?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

    /**
     * Choices: unapproved, approved, spam, deleted, flagged, highlighted
     *
     * @type {"unapproved" | "approved" | "spam" | "deleted" | "flagged" | "highlighted"}
     * @memberOf IUsersListPostsParameters
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
     * @memberOf IUsersListPostsParameters
     */
    order?: "asc" | "desc"
}

export interface IUsersListPosts {
    cursor: IUsersListPostsCursor
    code: number
    response: IUsersListPostsResponse[]
}

export interface IUsersListPostsCursor {
    prev: string
    hasNext: boolean
    next: string
    hasPrev: boolean
    total: number
    id: string
    more: boolean
}

export interface IUsersListPostsResponse {
    isJuliaFlagged: boolean
    isFlagged: boolean
    forum: string
    parent: number
    author: IUsersListPostsAuthor
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

export interface IUsersListPostsAuthor {
    username: string
    about: string
    name: string
    url: string
    isFollowing: boolean
    isFollowedBy: boolean
    profileUrl: string
    avatar: IUsersListPostsAvatar
    id: string
    isAnonymous: boolean
    email: string
}

export interface IUsersListPostsAvatar {
    permalink: string
    cache: string
}

export interface IUsersRemoveFollowerParameters {
    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IUsersRemoveFollowerParameters
     */
    follower: string
}

export interface IUsersReportParameters {
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
     * @memberOf IUsersReportParameters
     */
    reason: 0 | 1 | 2 | 3 | 4 | 5 | 6

    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IUsersReportParameters
     */
    user: string
}

export interface IUsersUnfollowParameters {
    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IUsersUnfollowParameters
     */
    target: string
}

export interface IUsersUnfollow {
    code: number
    response: any[]
}

export interface IUsersUpdateProfileParameters {
    /**
     * Defaults to ""
     *
     * @type {string}
     * @memberOf IUsersUpdateProfileParameters
     */
    about?: string

    /**
     * Minimum length of 2
     * Maximum length of 30
     *
     * @type {string}
     * @memberOf IUsersUpdateProfileParameters
     */
    name?: string

    /**
     * URL (defined by RFC 3986)
     * Maximum length of 200
     *
     * @type {string}
     * @memberOf IUsersUpdateProfileParameters
     */
    url?: string

    /**
     * Maximum length of 255
     *
     * @type {string}
     * @memberOf IUsersUpdateProfileParameters
     */
    location?: string
}

export interface IUsersUpdateSSOProfileParameters {
    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IUsersUpdateSSOProfileParameters
     */
    user_id?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IUsersUpdateSSOProfileParameters
     */
    name?: string

    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IUsersUpdateSSOProfileParameters
     */
    forum?: string

    /**
     * URL (defined by RFC 3986)
     *
     * @type {string}
     * @memberOf IUsersUpdateSSOProfileParameters
     */
    url?: string

    /**
     * URL (defined by RFC 3986)
     *
     * @type {string}
     * @memberOf IUsersUpdateSSOProfileParameters
     */
    avatar?: string

    /**
     * Email address (defined by RFC 5322)
     *
     * @type {string}
     * @memberOf IUsersUpdateSSOProfileParameters
     */
    email?: string

    /**
     * URL (defined by RFC 3986)
     *
     * @type {string}
     * @memberOf IUsersUpdateSSOProfileParameters
     */
    profile_url?: string
}

export class UsersEndpoint {
    constructor(private client: Disqus) {}

    /**
     * Updates username for the user, fails if username does not meet requirements, or is taken by another user.
     *
     * @param {IUsersCheckUsernameParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} UsersEndpoint
     */
    checkUsername(parameters: IUsersCheckUsernameParameters): Promise<any> {
        return this.client.request("users/checkUsername", parameters)
    }

    /**
     * This method is currently under development and subject to change.
     *
     * @param {IUsersDetailsParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IUsersDetails>} UsersEndpoint
     */
    details(parameters: IUsersDetailsParameters): Promise<IUsersDetails> {
        return this.client.request("users/details", parameters)
    }

    /**
     * Follow a user.
     *
     * @param {IUsersFollowParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IUsersFollow>} UsersEndpoint
     */
    follow(parameters: IUsersFollowParameters): Promise<IUsersFollow> {
        return this.client.request("users/follow", parameters)
    }

    /**
     * Returns a list of interesting users. This is not personalized to theuser making the request.The selection of users is pulled randomly from a list of ~100interesting users
     *
     * @param {IUsersInterestingUsersParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} UsersEndpoint
     */
    interestingUsers(
        parameters: IUsersInterestingUsersParameters
    ): Promise<any> {
        return this.client.request("users/interestingUsers", parameters)
    }

    /**
     * Returns a list of forums a user has been active on.
     *
     * @param {IUsersListActiveForumsParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} UsersEndpoint
     */
    listActiveForums(
        parameters: IUsersListActiveForumsParameters
    ): Promise<any> {
        return this.client.request("users/listActiveForums", parameters)
    }

    /**
     * This method is currently under development and subject to change.
     *
     * @param {IUsersListActivityParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IUsersListActivity>} UsersEndpoint
     */
    listActivity(
        parameters: IUsersListActivityParameters
    ): Promise<IUsersListActivity> {
        return this.client.request("users/listActivity", parameters)
    }

    /**
     * This method is currently under development and subject to change.
     *
     * @param {IUsersListFollowersParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} UsersEndpoint
     */
    listFollowers(parameters: IUsersListFollowersParameters): Promise<any> {
        return this.client.request("users/listFollowers", parameters)
    }

    /**
     * This method is currently under development and subject to change.
     *
     * @param {IUsersListFollowingParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} UsersEndpoint
     */
    listFollowing(parameters: IUsersListFollowingParameters): Promise<any> {
        return this.client.request("users/listFollowing", parameters)
    }

    /**
     * This method is currently under development and subject to change.
     *
     * @param {IUsersListFollowingChannelsParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} UsersEndpoint
     */
    listFollowingChannels(
        parameters: IUsersListFollowingChannelsParameters
    ): Promise<any> {
        return this.client.request("users/listFollowingChannels", parameters)
    }

    /**
     * This method is currently under development and subject to change.
     *
     * @param {IUsersListFollowingForumsParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} UsersEndpoint
     */
    listFollowingForums(
        parameters: IUsersListFollowingForumsParameters
    ): Promise<any> {
        return this.client.request("users/listFollowingForums", parameters)
    }

    /**
     * Returns a list of forums a user owns.
     *
     * @param {IUsersListForumsParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IUsersListForums>} UsersEndpoint
     */
    listForums(
        parameters: IUsersListForumsParameters
    ): Promise<IUsersListForums> {
        return this.client.request("users/listForums", parameters)
    }

    /**
     * This method is currently under development and subject to change.
     *
     * @param {IUsersListModeratedChannelsParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} UsersEndpoint
     */
    listModeratedChannels(
        parameters: IUsersListModeratedChannelsParameters
    ): Promise<any> {
        return this.client.request("users/listModeratedChannels", parameters)
    }

    /**
     * This method is currently under development and subject to change.
     *
     * @param {IUsersListMostActiveForumsParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} UsersEndpoint
     */
    listMostActiveForums(
        parameters: IUsersListMostActiveForumsParameters
    ): Promise<any> {
        return this.client.request("users/listMostActiveForums", parameters)
    }

    /**
     * This method is currently under development and subject to change.
     *
     * @param {IUsersListOwnedChannelsParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} UsersEndpoint
     */
    listOwnedChannels(
        parameters: IUsersListOwnedChannelsParameters
    ): Promise<any> {
        return this.client.request("users/listOwnedChannels", parameters)
    }

    /**
     * Returns a list of posts made by the user.
     *
     * @param {IUsersListPostsParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IUsersListPosts>} UsersEndpoint
     */
    listPosts(parameters: IUsersListPostsParameters): Promise<IUsersListPosts> {
        return this.client.request("users/listPosts", parameters)
    }

    /**
     * Remove a user from set of followers.
     *
     * @param {IUsersRemoveFollowerParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} UsersEndpoint
     */
    removeFollower(parameters: IUsersRemoveFollowerParameters): Promise<any> {
        return this.client.request("users/removeFollower", parameters)
    }

    /**
     * This method has no descript in on the API.
     *
     * @param {IUsersReportParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} UsersEndpoint
     */
    report(parameters: IUsersReportParameters): Promise<any> {
        return this.client.request("users/report", parameters)
    }

    /**
     * Unfollow a user.
     *
     * @param {IUsersUnfollowParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IUsersUnfollow>} UsersEndpoint
     */
    unfollow(parameters: IUsersUnfollowParameters): Promise<IUsersUnfollow> {
        return this.client.request("users/unfollow", parameters)
    }

    /**
     * Updates user profile.
     *
     * @param {IUsersUpdateProfileParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} UsersEndpoint
     */
    updateProfile(parameters: IUsersUpdateProfileParameters): Promise<any> {
        return this.client.request("users/updateProfile", parameters)
    }

    /**
     * Updates SSO user profile attributes.
     *
     * @param {IUsersUpdateSSOProfileParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} UsersEndpoint
     */
    updateSSOProfile(
        parameters: IUsersUpdateSSOProfileParameters
    ): Promise<any> {
        return this.client.request("users/updateSSOProfile", parameters)
    }
}
