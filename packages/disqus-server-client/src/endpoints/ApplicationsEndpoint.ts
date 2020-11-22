import { Disqus } from "./../disqus"

export interface IApplicationsListUsageParameters {
    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IApplicationsListUsageParameters
     */
    application?: string

    /**
     * Maximum value of 30
     *
     * @type {string}
     * @memberOf IApplicationsListUsageParameters
     */
    days?: string
}

export interface IApplicationsListUsage {
    code: number
    response: Array<Array<Date | number>>
}

export class ApplicationsEndpoint {
    constructor(private client: Disqus) {}

    /**
     * Returns the API usage per day for this application.
     *
     * @param {IApplicationsListUsageParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IApplicationsListUsage>} ApplicationsEndpoint
     */
    listUsage(
        parameters: IApplicationsListUsageParameters
    ): Promise<IApplicationsListUsage> {
        return this.client.request("applications/listUsage", parameters)
    }
}
