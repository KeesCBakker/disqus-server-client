import { IGenericDisqusResponse } from "disqus-server-client-core"
import { Disqus } from "./../disqus"

export interface IInternalForumsActionHistoryBulkCreateParameters {
    actionHistoryItems: string
}

export interface IInternalForumsActionHistoryCreateParameters {
    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IInternalForumsActionHistoryCreateParameters
     */
    forum: string

    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IInternalForumsActionHistoryCreateParameters
     */
    user: string

    /**
     * Valid values are:
     * 1: ApprovePost
     * 2: UnapprovePost
     * 3: SpamPost
     * 4: UnspamPost
     * 5: RestorePost
     * 6: RemovePost
     * 7: HighlightPost
     * 8: UnhighlightPost
     * 9: AddBlacklist
     * 10: RemoveBlacklist
     * 11: MarkAsPendingPost
     * 12: AddWhitelist
     * 13: RemoveWhitelist
     * 14: AddModerator
     * 15: RemoveModerator
     * 16: UpdateThreadCreator
     *
     * @type {1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16}
     * @memberOf IInternalForumsActionHistoryCreateParameters
     */
    action: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16

    /**
     * Unix timestamp (or ISO datetime standard)
     *
     * @type {string}
     * @memberOf IInternalForumsActionHistoryCreateParameters
     */
    dateAdded?: string

    /**
     * Looks up a thread by ID
     *
     * @type {string}
     * @memberOf IInternalForumsActionHistoryCreateParameters
     */
    thread?: string

    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IInternalForumsActionHistoryCreateParameters
     */
    targetUser?: string

    /**
     * IP address (defined by RFC 5322)
     *
     * @type {string}
     * @memberOf IInternalForumsActionHistoryCreateParameters
     */
    ip?: string

    /**
     * Looks up a post by ID
     *
     * @type {string}
     * @memberOf IInternalForumsActionHistoryCreateParameters
     */
    post?: string
}

export interface IInternalForumsActionHistoryDeleteParameters {
    /**
     * Looks up an action history row by ID
     *
     * @type {string}
     * @memberOf IInternalForumsActionHistoryDeleteParameters
     */
    log: string
}

export interface IInternalForumsActionHistoryUpdateParameters {
    /**
     * Looks up an action history row by ID
     *
     * @type {string}
     * @memberOf IInternalForumsActionHistoryUpdateParameters
     */
    log: string

    /**
     * Unix timestamp (or ISO datetime standard)
     *
     * @type {string}
     * @memberOf IInternalForumsActionHistoryUpdateParameters
     */
    dateAdded?: string

    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IInternalForumsActionHistoryUpdateParameters
     */
    forum?: string

    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IInternalForumsActionHistoryUpdateParameters
     */
    targetUser?: string

    /**
     * IP address (defined by RFC 5322)
     *
     * @type {string}
     * @memberOf IInternalForumsActionHistoryUpdateParameters
     */
    ip?: string

    /**
     * Looks up a thread by ID
     *
     * @type {string}
     * @memberOf IInternalForumsActionHistoryUpdateParameters
     */
    thread?: string

    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IInternalForumsActionHistoryUpdateParameters
     */
    user?: string

    /**
     * Valid values are:
     * 1: ApprovePost
     * 2: UnapprovePost
     * 3: SpamPost
     * 4: UnspamPost
     * 5: RestorePost
     * 6: RemovePost
     * 7: HighlightPost
     * 8: UnhighlightPost
     * 9: AddBlacklist
     * 10: RemoveBlacklist
     * 11: MarkAsPendingPost
     * 12: AddWhitelist
     * 13: RemoveWhitelist
     * 14: AddModerator
     * 15: RemoveModerator
     * 16: UpdateThreadCreator
     *
     * @type {1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16}
     * @memberOf IInternalForumsActionHistoryUpdateParameters
     */
    action?:
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12
        | 13
        | 14
        | 15
        | 16

    /**
     * Looks up a post by ID
     *
     * @type {string}
     * @memberOf IInternalForumsActionHistoryUpdateParameters
     */
    post?: string
}

export class InternalForumsActionHistoryEndpoint {
    constructor(private client: Disqus) {}

    /**
     * Creates many ActionHistory rows, for use in backfilling.actionHistoryItems is a json encoded list. Each item in the listshould be a dictionary with keys:- identifier - an identifier that represents the original row, sothat we can return whether each row succeeded/failed.- action - an int representing ActionHistory.Type- forum - id of a forum- user - (optional) user that performed the action- thread - (optional) thread id that the action was performed on- post - (optional) post id that the action was performed on- targetUser - (optional) id of the user that is related to the actionthat was performed (post author etc)- ipAddress - (optional) ip address of the user that performed the action- dateAdded - (optional) date that the action was performed- extra_data - (optional) Contains extra information: target, data_expires, shadow_banThis data is used mainly for Blacklist and Whitelist Actions.- rule (optional) (idk if necessary as it is not in the actionHistory stuff)
     *
     * @param {IInternalForumsActionHistoryBulkCreateParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} InternalForumsActionHistoryEndpoint
     */
    bulkCreate(
        parameters: IInternalForumsActionHistoryBulkCreateParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "internal/forums/actionHistory/bulkCreate",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * Creates an ActionHistory row, for use in backfilling.
     *
     * @param {IInternalForumsActionHistoryCreateParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} InternalForumsActionHistoryEndpoint
     */
    create(
        parameters: IInternalForumsActionHistoryCreateParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "internal/forums/actionHistory/create",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * Deletes an ActionHistory row, for use in backfilling.
     *
     * @param {IInternalForumsActionHistoryDeleteParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} InternalForumsActionHistoryEndpoint
     */
    delete(
        parameters: IInternalForumsActionHistoryDeleteParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "internal/forums/actionHistory/delete",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * Updates an ActionHistory row, for use in backfilling.
     *
     * @param {IInternalForumsActionHistoryUpdateParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} InternalForumsActionHistoryEndpoint
     */
    update(
        parameters: IInternalForumsActionHistoryUpdateParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "internal/forums/actionHistory/update",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }
}
