import { IGenericDisqusResponse } from "disqus-server-client-core"
import { Disqus } from "./../disqus"

export interface ITopicsUpdateParameters {
    /**
     * Can be either the topic identifier or current display name
     *
     * @type {string}
     * @memberOf ITopicsUpdateParameters
     */
    topic_name: string

    /**
     * Allows the display name of a topic to be modified. This is mostly to allow capitalization/punctuation to be corrected. The new name must resolve to the same slug as the old name
     *
     * @type {string}
     * @memberOf ITopicsUpdateParameters
     */
    display_name?: string

    /**
     * Whether this topic can appear in the list of trending topics
     *
     * @type {string}
     * @memberOf ITopicsUpdateParameters
     */
    can_trend?: string
}

export class TopicsEndpoint {
    constructor(private client: Disqus) {}

    /**
     * This method has no descript in on the API.
     *
     * @param {ITopicsUpdateParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} TopicsEndpoint
     */
    update(
        parameters: ITopicsUpdateParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "topics/update",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }
}
