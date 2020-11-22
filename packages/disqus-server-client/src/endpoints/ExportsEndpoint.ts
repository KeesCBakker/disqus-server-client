import { IGenericDisqusResponse } from "disqus-server-client-core"
import { Disqus } from "./../disqus"

export interface IExportsExportForumParameters {
    /**
     * Looks up a forum by ID (aka short name)
     *
     * @type {string}
     * @memberOf IExportsExportForumParameters
     */
    forum: string

    /**
     * Choices: xml
     *
     * @type {"xml"}
     * @memberOf IExportsExportForumParameters
     */
    format?: "xml"
}

export class ExportsEndpoint {
    constructor(private client: Disqus) {}

    /**
     * This method has no descript in on the API.
     *
     * @param {IExportsExportForumParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} ExportsEndpoint
     */
    exportForum(
        parameters: IExportsExportForumParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "exports/exportForum",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }
}
