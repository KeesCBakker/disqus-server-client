import { Disqus } from "./../disqus"

export interface IForumsAddModeratorParameters {
    /**
     * Looks up a forum by ID (aka short name)
     * You must be a moderator on the selected forum.
     *
     * @type {string}
     * @memberOf IForumsAddModeratorParameters
     */
    forum: string

    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IForumsAddModeratorParameters
     */
    user: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsAddModeratorParameters
     */
    canAdminister?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsAddModeratorParameters
     */
    canEdit?: string
}

export interface IForumsAddModerator {
    code: number
    response: IForumsAddModeratorResponse
}

export interface IForumsAddModeratorResponse {
    id: number
}

export interface IForumsCreateParameters {
    name: string

    short_name: string

    /**
     * URL (defined by RFC 3986)
     *
     * @type {string}
     * @memberOf IForumsCreateParameters
     */
    website?: string

    /**
     * Choices: Tech, Living, Style, Business, Entertainment, Celebrity, Sports, Culture, Games, News
     *
     * @type {"Tech" | "Living" | "Style" | "Business" | "Entertainment" | "Celebrity" | "Sports" | "Culture" | "Games" | "News"}
     * @memberOf IForumsCreateParameters
     */
    category?:
        | "Tech"
        | "Living"
        | "Style"
        | "Business"
        | "Entertainment"
        | "Celebrity"
        | "Sports"
        | "Culture"
        | "Games"
        | "News"

    /**
     * Defaults to false
     *
     * @type {string}
     * @memberOf IForumsCreateParameters
     */
    adultContent?: string

    /**
     * Choices: followsForum, forumCanDisableAds, forumForumCategory, counters, forumDaysAlive, forumFeatures, forumIntegration, forumNewPolicy, forumPermissions
     *
     * @type {"followsForum" | "forumCanDisableAds" | "forumForumCategory" | "counters" | "forumDaysAlive" | "forumFeatures" | "forumIntegration" | "forumNewPolicy" | "forumPermissions"}
     * @memberOf IForumsCreateParameters
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
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsCreateParameters
     */
    guidelines?: string

    /**
     * Translation Language
     *
     * @type {string}
     * @memberOf IForumsCreateParameters
     */
    language?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsCreateParameters
     */
    commentPolicyText?: string

    /**
     * Looks up a forum category by ID
     *
     * @type {string}
     * @memberOf IForumsCreateParameters
     */
    forumCategory?: string

    /**
     * URL (defined by RFC 3986)
     *
     * @type {string}
     * @memberOf IForumsCreateParameters
     */
    commentPolicyLink?: string

    /**
     * Maximum length of 300
     *
     * @type {string}
     * @memberOf IForumsCreateParameters
     */
    description?: string
}

export interface IForumsCreate {
    code: number
    response: IForumsCreateResponse
}

export interface IForumsCreateResponse {
    id: string
    name: string
    founder: string
    favicon: IForumsCreateFavicon
}

export interface IForumsCreateFavicon {
    permalink: string
    cache: string
}

export interface IForumsDetailsParameters {
    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IForumsDetailsParameters
     */
    forum: string

    /**
     * Choices: followsForum, forumCanDisableAds, forumForumCategory, counters, forumDaysAlive, forumFeatures, forumIntegration, forumNewPolicy, forumPermissions
     *
     * @type {"followsForum" | "forumCanDisableAds" | "forumForumCategory" | "counters" | "forumDaysAlive" | "forumFeatures" | "forumIntegration" | "forumNewPolicy" | "forumPermissions"}
     * @memberOf IForumsDetailsParameters
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
     * You may specify relations to include with your response.
     * Choices: author
     *
     * @type {"author"}
     * @memberOf IForumsDetailsParameters
     */
    related?: "author"
}

export interface IForumsDetails {
    code: number
    response: IForumsDetailsResponse
}

export interface IForumsDetailsResponse {
    id: string
    name: string
    founder: string
    favicon: IForumsDetailsFavicon
}

export interface IForumsDetailsFavicon {
    permalink: string
    cache: string
}

export interface IForumsDisableAdsParameters {
    /**
     * Looks up a forum by ID (aka short name)
     * You must be a moderator on the selected forum.
     *
     * @type {string}
     * @memberOf IForumsDisableAdsParameters
     */
    forum: string
}

export interface IForumsFollowParameters {
    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IForumsFollowParameters
     */
    target: string
}

export interface IForumsInterestingForumsParameters {
    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf IForumsInterestingForumsParameters
     */
    limit?: string
}

export interface IForumsListCategoriesParameters {
    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IForumsListCategoriesParameters
     */
    forum: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsListCategoriesParameters
     */
    since_id?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsListCategoriesParameters
     */
    cursor?: string

    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf IForumsListCategoriesParameters
     */
    limit?: string

    /**
     * Choices: asc, desc
     *
     * @type {"asc" | "desc"}
     * @memberOf IForumsListCategoriesParameters
     */
    order?: "asc" | "desc"
}

export interface IForumsListCategories {
    cursor: IForumsListCategoriesCursor
    code: number
    response: IForumsListCategoriesResponse[]
}

export interface IForumsListCategoriesCursor {
    prev: string
    hasNext: boolean
    next: string
    hasPrev: boolean
    total: number
    id: string
    more: boolean
}

export interface IForumsListCategoriesResponse {
    id: string
    forum: string
    order: number
    isDefault: boolean
    title: string
}

export interface IForumsListFollowersParameters {
    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IForumsListFollowersParameters
     */
    forum: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsListFollowersParameters
     */
    since_id?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsListFollowersParameters
     */
    cursor?: string

    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf IForumsListFollowersParameters
     */
    limit?: string

    /**
     * Choices: asc, desc
     *
     * @type {"asc" | "desc"}
     * @memberOf IForumsListFollowersParameters
     */
    order?: "asc" | "desc"
}

export interface IForumsListModeratorsParameters {
    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IForumsListModeratorsParameters
     */
    forum: string
}

export interface IForumsListModerators {
    code: number
    response: IForumsListModeratorsResponse[]
}

export interface IForumsListModeratorsResponse {
    id: string
    forum: string
    user: IForumsListModeratorsUser
}

export interface IForumsListModeratorsUser {
    username: string
    about: string
    name: string
    url: string
    isFollowing: boolean
    isFollowedBy: boolean
    profileUrl: string
    avatar: IForumsListModeratorsAvatar
    id: string
    isAnonymous: boolean
    email: string
}

export interface IForumsListModeratorsAvatar {
    permalink: string
    cache: string
}

export interface IForumsListMostActiveUsersParameters {
    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IForumsListMostActiveUsersParameters
     */
    forum: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsListMostActiveUsersParameters
     */
    cursor?: string

    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf IForumsListMostActiveUsersParameters
     */
    limit?: string

    /**
     * Choices: desc
     *
     * @type {"desc"}
     * @memberOf IForumsListMostActiveUsersParameters
     */
    order?: "desc"
}

export interface IForumsListMostLikedUsersParameters {
    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IForumsListMostLikedUsersParameters
     */
    forum: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsListMostLikedUsersParameters
     */
    cursor?: string

    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf IForumsListMostLikedUsersParameters
     */
    limit?: string

    /**
     * Choices: desc
     *
     * @type {"desc"}
     * @memberOf IForumsListMostLikedUsersParameters
     */
    order?: "desc"
}

export interface IForumsListMostLikedUsers {
    cursor: IForumsListMostLikedUsersCursor
    code: number
    response: any[]
}

export interface IForumsListMostLikedUsersCursor {
    prev: string
    hasNext: boolean
    next: string
    hasPrev: boolean
    total: number
    id: string
    more: boolean
}

export interface IForumsListPostsParameters {
    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IForumsListPostsParameters
     */
    forum: string

    /**
     * Unix timestamp (or ISO datetime standard)
     *
     * @type {string}
     * @memberOf IForumsListPostsParameters
     */
    since?: string

    /**
     * You may specify relations to include with your response.
     * Choices: thread
     *
     * @type {"thread"}
     * @memberOf IForumsListPostsParameters
     */
    related?: "thread"

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsListPostsParameters
     */
    cursor?: string

    /**
     * Maximum number of posts to return.
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf IForumsListPostsParameters
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
     * @memberOf IForumsListPostsParameters
     */
    filters?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsListPostsParameters
     */
    query?: string

    /**
     * Choices: unapproved, approved, spam, deleted, flagged, highlighted
     *
     * @type {"unapproved" | "approved" | "spam" | "deleted" | "flagged" | "highlighted"}
     * @memberOf IForumsListPostsParameters
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
     * @memberOf IForumsListPostsParameters
     */
    order?: "asc" | "desc"
}

export interface IForumsListPosts {
    cursor: IForumsListPostsCursor
    code: number
    response: IForumsListPostsResponse[]
}

export interface IForumsListPostsCursor {
    prev: string
    hasNext: boolean
    next: string
    hasPrev: boolean
    total: number
    id: string
    more: boolean
}

export interface IForumsListPostsResponse {
    isJuliaFlagged: boolean
    isFlagged: boolean
    forum: string
    parent: number
    author: IForumsListPostsAuthor
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

export interface IForumsListPostsAuthor {
    username?: string
    about?: string
    name: string
    url: string
    isFollowing?: boolean
    isFollowedBy?: boolean
    profileUrl: string
    avatar: IForumsListPostsAvatar
    id?: string
    isAnonymous: boolean
    email: string
}

export interface IForumsListPostsAvatar {
    permalink: string
    cache: string
}

export interface IForumsListThreadsParameters {
    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IForumsListThreadsParameters
     */
    forum: string

    /**
     * Looks up a thread by ID
     * You may pass us the 'ident' query type instead of an ID by including 'forum'.
     * You may pass us the 'link' query type to filter by URL. You must pass the 'forum' if you do not have the Pro API Access addon.
     *
     * @type {string}
     * @memberOf IForumsListThreadsParameters
     */
    thread?: string

    /**
     * Unix timestamp (or ISO datetime standard)
     *
     * @type {string}
     * @memberOf IForumsListThreadsParameters
     */
    since?: string

    /**
     * You may specify relations to include with your response.
     * Choices: forum, author
     *
     * @type {"forum" | "author"}
     * @memberOf IForumsListThreadsParameters
     */
    related?: "forum" | "author"

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsListThreadsParameters
     */
    cursor?: string

    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf IForumsListThreadsParameters
     */
    limit?: string

    /**
     * Choices: open, closed, killed
     *
     * @type {"open" | "closed" | "killed"}
     * @memberOf IForumsListThreadsParameters
     */
    include?: "open" | "closed" | "killed"

    /**
     * Choices: asc, desc
     *
     * @type {"asc" | "desc"}
     * @memberOf IForumsListThreadsParameters
     */
    order?: "asc" | "desc"
}

export interface IForumsListThreads {
    cursor: IForumsListThreadsCursor
    code: number
    response: IForumsListThreadsResponse[]
}

export interface IForumsListThreadsCursor {
    prev: string
    hasNext: boolean
    next: string
    hasPrev: boolean
    total: number
    id: string
    more: boolean
}

export interface IForumsListThreadsResponse {
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

export interface IForumsListUserModerationHistoryParameters {
    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IForumsListUserModerationHistoryParameters
     */
    forum: string

    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IForumsListUserModerationHistoryParameters
     */
    user: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsListUserModerationHistoryParameters
     */
    cursor?: string

    /**
     * Defaults to 20
     *
     * @type {string}
     * @memberOf IForumsListUserModerationHistoryParameters
     */
    limit?: string
}

export interface IForumsRemoveDefaultAvatarParameters {
    /**
     * Looks up a forum by ID (aka short name)
     * You must be a moderator on the selected forum.
     *
     * @type {string}
     * @memberOf IForumsRemoveDefaultAvatarParameters
     */
    forum: string
}

export interface IForumsRemoveModeratorParameters {
    /**
     * Looks up a moderator, either by ID or forum id and user id
     *
     * @type {string}
     * @memberOf IForumsRemoveModeratorParameters
     */
    moderator?: string

    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IForumsRemoveModeratorParameters
     */
    user?: string

    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IForumsRemoveModeratorParameters
     */
    forum?: string
}

export interface IForumsRemoveModerator {
    code: number
    response: IForumsRemoveModeratorResponse
}

export interface IForumsRemoveModeratorResponse {
    id: string
}

export interface IForumsUnfollowParameters {
    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IForumsUnfollowParameters
     */
    target: string
}

export interface IForumsUpdateParameters {
    /**
     * Looks up a forum by ID (aka short name)
     * You must be a moderator on the selected forum.
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    forum: string

    /**
     * Valid values are:
     * 1: OLDEST
     * 2: NEWEST
     * 4: HOT
     *
     * @type {1 | 2 | 4}
     * @memberOf IForumsUpdateParameters
     */
    sort?: 1 | 2 | 4

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    flagThreshold?: string

    /**
     * Minimum value of 1
     * Maximum value of 50
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    initialCommentCount?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    behindClickEnabled?: string

    /**
     * Choices: auto, dark, light
     *
     * @type {"auto" | "dark" | "light"}
     * @memberOf IForumsUpdateParameters
     */
    colorScheme?: "auto" | "dark" | "light"

    /**
     * Maximum length of 50
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    commentsLinkOne?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    guidelines?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    adsPositionTopEnabled?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    unapproveLinks?: string

    /**
     * Maximum length of 50
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    commentsLinkZero?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    disableDisqusBranding?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    aetBannerConfirmation?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    adsPositionRecommendationsEnabled?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    linkAffiliationEnabled?: string

    /**
     * Choices: Tech, Living, Style, Business, Entertainment, Celebrity, Sports, Culture, Games, News
     *
     * @type {"Tech" | "Living" | "Style" | "Business" | "Entertainment" | "Celebrity" | "Sports" | "Culture" | "Games" | "News"}
     * @memberOf IForumsUpdateParameters
     */
    category?:
        | "Tech"
        | "Living"
        | "Style"
        | "Business"
        | "Entertainment"
        | "Celebrity"
        | "Sports"
        | "Culture"
        | "Games"
        | "News"

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    aetBannerEnabled?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    aetBannerTitle?: string

    /**
     * Choices: followsForum, forumCanDisableAds, forumForumCategory, counters, forumDaysAlive, forumFeatures, forumIntegration, forumNewPolicy, forumPermissions
     *
     * @type {"followsForum" | "forumCanDisableAds" | "forumForumCategory" | "counters" | "forumDaysAlive" | "forumFeatures" | "forumIntegration" | "forumNewPolicy" | "forumPermissions"}
     * @memberOf IForumsUpdateParameters
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
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    threadRatingsEnabled?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    organicDiscoveryEnabled?: string

    /**
     * Maximum length of 255
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    twitterName?: string

    /**
     * Valid values are:
     * 0: DETAILED
     * 1: DOWNVOTE_LIMITED
     * 2: DOWNVOTE_DISABLED
     * 3: DISABLED
     *
     * @type {0 | 1 | 2 | 3}
     * @memberOf IForumsUpdateParameters
     */
    votingType?: 0 | 1 | 2 | 3

    /**
     * Maximum length of 50
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    commentsLinkMultiple?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    installCompleted?: string

    /**
     * Valid values are:
     * 1: LOW1
     * 2: LOW2
     * 3: AVERAGE
     * 4: HIGH
     *
     * @type {1 | 1 | 2 | 2 | 3 | 4}
     * @memberOf IForumsUpdateParameters
     */
    unapproveReputationLevel?: 1 | 1 | 2 | 2 | 3 | 4

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    commentPolicyText?: string

    /**
     * URL (defined by RFC 3986)
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    website?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    disableSocialShare?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    allowAnonPost?: string

    /**
     * Translation Language
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    translationLanguage?: string

    /**
     * Maximum length of 300
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    description?: string

    /**
     * Maximum length of 50
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    moderatorBadgeText?: string

    /**
     * Defaults to false
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    shouldError?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    adultContent?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    customFont?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    gifPickerEnabled?: string

    /**
     * Maximum length of 45
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    commentsPlaceholderTextEmpty?: string

    /**
     * Looks up a forum category by ID
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    forumCategory?: string

    /**
     * Maximum length of 45
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    commentsPlaceholderTextPopulated?: string

    /**
     * URL (defined by RFC 3986)
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    commentPolicyLink?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    aetBannerDescription?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    disableThirdPartyTrackers?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    flaggingNotifications?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    name?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    mediaembedEnabled?: string

    /**
     * Choices: auto, serif, sans-serif
     *
     * @type {"auto" | "serif" | "sans-serif"}
     * @memberOf IForumsUpdateParameters
     */
    typeface?: "auto" | "serif" | "sans-serif"

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    adsPositionBottomEnabled?: string

    /**
     * Maximum value of 10000
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    daysThreadAlive?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    validateAllPosts?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    flaggingEnabled?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsUpdateParameters
     */
    adsPositionInthreadEnabled?: string
}

export interface IForumsUpdateDefaultAvatarParameters {
    /**
     * Looks up a forum by ID (aka short name)
     * You must be a moderator on the selected forum.
     *
     * @type {string}
     * @memberOf IForumsUpdateDefaultAvatarParameters
     */
    forum: string

    avatar_file: string
}

export interface IForumsValidateParameters {
    /**
     * Looks up a forum by ID (aka short name)
     * You must be a moderator on the selected forum.
     *
     * @type {string}
     * @memberOf IForumsValidateParameters
     */
    forum: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsValidateParameters
     */
    adsPositionTopEnabled?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsValidateParameters
     */
    adsPositionBottomEnabled?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IForumsValidateParameters
     */
    adsPositionInthreadEnabled?: string
}

export class ForumsEndpoint {
    constructor(private client: Disqus) {}

    /**
     * Adds a moderator to a forum.
     *
     * @param {IForumsAddModeratorParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IForumsAddModerator>} ForumsEndpoint
     */
    addModerator(
        parameters: IForumsAddModeratorParameters
    ): Promise<IForumsAddModerator> {
        return this.client.request("forums/addModerator", parameters)
    }

    /**
     * Creates a new forum.
     *
     * @param {IForumsCreateParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IForumsCreate>} ForumsEndpoint
     */
    create(parameters: IForumsCreateParameters): Promise<IForumsCreate> {
        return this.client.request("forums/create", parameters)
    }

    /**
     * Returns forum details.
     *
     * @param {IForumsDetailsParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IForumsDetails>} ForumsEndpoint
     */
    details(parameters: IForumsDetailsParameters): Promise<IForumsDetails> {
        return this.client.request("forums/details", parameters)
    }

    /**
     * This method has no descript in on the API.
     *
     * @param {IForumsDisableAdsParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} ForumsEndpoint
     */
    disableAds(parameters: IForumsDisableAdsParameters): Promise<any> {
        return this.client.request("forums/disableAds", parameters)
    }

    /**
     * Gets forums that are classified in tempest (primarily means has ahigh quality score and is in english)
     *
     * @returns The response as a promise.
     * @memberOf {Promise<any>} ForumsEndpoint
     */
    fixFavIconsForClassifiedForums(): Promise<any> {
        return this.client.request("forums/fixFavIconsForClassifiedForums")
    }

    /**
     * This method is currently under development and subject to change.
     *
     * @param {IForumsFollowParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} ForumsEndpoint
     */
    follow(parameters: IForumsFollowParameters): Promise<any> {
        return this.client.request("forums/follow", parameters)
    }

    /**
     * Internal only endpoint that causes the interesting content (forums) tobe generated, but not returned.
     *
     * @returns The response as a promise.
     * @memberOf {Promise<any>} ForumsEndpoint
     */
    generateInterestingContent(): Promise<any> {
        return this.client.request("forums/generateInterestingContent")
    }

    /**
     * This method has no descript in on the API.
     *
     * @param {IForumsInterestingForumsParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} ForumsEndpoint
     */
    interestingForums(
        parameters: IForumsInterestingForumsParameters
    ): Promise<any> {
        return this.client.request("forums/interestingForums", parameters)
    }

    /**
     * Returns a list of categories within a forum.
     *
     * @param {IForumsListCategoriesParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IForumsListCategories>} ForumsEndpoint
     */
    listCategories(
        parameters: IForumsListCategoriesParameters
    ): Promise<IForumsListCategories> {
        return this.client.request("forums/listCategories", parameters)
    }

    /**
     * This method is currently under development and subject to change.
     *
     * @param {IForumsListFollowersParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} ForumsEndpoint
     */
    listFollowers(parameters: IForumsListFollowersParameters): Promise<any> {
        return this.client.request("forums/listFollowers", parameters)
    }

    /**
     * Returns a list of all moderators on a forum.
     *
     * @param {IForumsListModeratorsParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IForumsListModerators>} ForumsEndpoint
     */
    listModerators(
        parameters: IForumsListModeratorsParameters
    ): Promise<IForumsListModerators> {
        return this.client.request("forums/listModerators", parameters)
    }

    /**
     * Returns a list of users active within a forum ordered by most comments made.
     *
     * @param {IForumsListMostActiveUsersParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} ForumsEndpoint
     */
    listMostActiveUsers(
        parameters: IForumsListMostActiveUsersParameters
    ): Promise<any> {
        return this.client.request("forums/listMostActiveUsers", parameters)
    }

    /**
     * Returns a list of users active within a forum ordered by most likes received.
     *
     * @param {IForumsListMostLikedUsersParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IForumsListMostLikedUsers>} ForumsEndpoint
     */
    listMostLikedUsers(
        parameters: IForumsListMostLikedUsersParameters
    ): Promise<IForumsListMostLikedUsers> {
        return this.client.request("forums/listMostLikedUsers", parameters)
    }

    /**
     * Returns a list of posts within a forum.
     *
     * @param {IForumsListPostsParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IForumsListPosts>} ForumsEndpoint
     */
    listPosts(
        parameters: IForumsListPostsParameters
    ): Promise<IForumsListPosts> {
        return this.client.request("forums/listPosts", parameters)
    }

    /**
     * Returns a list of threads within a forum sorted by the date created.
     *
     * @param {IForumsListThreadsParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IForumsListThreads>} ForumsEndpoint
     */
    listThreads(
        parameters: IForumsListThreadsParameters
    ): Promise<IForumsListThreads> {
        return this.client.request("forums/listThreads", parameters)
    }

    /**
     * Returns moderation history for a given user on a forum.
     *
     * @param {IForumsListUserModerationHistoryParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} ForumsEndpoint
     */
    listUserModerationHistory(
        parameters: IForumsListUserModerationHistoryParameters
    ): Promise<any> {
        return this.client.request(
            "forums/listUserModerationHistory",
            parameters
        )
    }

    /**
     * Switches a forum to use the regular default avatar instead of a custom one
     *
     * @param {IForumsRemoveDefaultAvatarParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} ForumsEndpoint
     */
    removeDefaultAvatar(
        parameters: IForumsRemoveDefaultAvatarParameters
    ): Promise<any> {
        return this.client.request("forums/removeDefaultAvatar", parameters)
    }

    /**
     * Removes a moderator from a forum.
     *
     * @param {IForumsRemoveModeratorParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IForumsRemoveModerator>} ForumsEndpoint
     */
    removeModerator(
        parameters: IForumsRemoveModeratorParameters
    ): Promise<IForumsRemoveModerator> {
        return this.client.request("forums/removeModerator", parameters)
    }

    /**
     * This method is currently under development and subject to change.
     *
     * @param {IForumsUnfollowParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} ForumsEndpoint
     */
    unfollow(parameters: IForumsUnfollowParameters): Promise<any> {
        return this.client.request("forums/unfollow", parameters)
    }

    /**
     * Updates forum details.
     *
     * @param {IForumsUpdateParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} ForumsEndpoint
     */
    update(parameters: IForumsUpdateParameters): Promise<any> {
        return this.client.request("forums/update", parameters)
    }

    /**
     * Automatically crops avatar to the largest centered square and saves as the forum's default avatar.Returns the updated 92px avatar url.
     *
     * @param {IForumsUpdateDefaultAvatarParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} ForumsEndpoint
     */
    updateDefaultAvatar(
        parameters: IForumsUpdateDefaultAvatarParameters
    ): Promise<any> {
        return this.client.request("forums/updateDefaultAvatar", parameters)
    }

    /**
     * This method has no descript in on the API.
     *
     * @param {IForumsValidateParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} ForumsEndpoint
     */
    validate(parameters: IForumsValidateParameters): Promise<any> {
        return this.client.request("forums/validate", parameters)
    }
}
