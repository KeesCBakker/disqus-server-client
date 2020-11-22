import { Disqus } from "./../disqus"

export interface ISaasPackagesListParameters {
    /**
     * Looks up an organization by ID
     * You must be an admin on the selected organization.
     *
     * @type {string}
     * @memberOf ISaasPackagesListParameters
     */
    organization?: string
}

export class SaasPackagesEndpoint {
    constructor(private client: Disqus) {}

    /**
     * This method has no descript in on the API.
     *
     * @param {ISaasPackagesListParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} SaasPackagesEndpoint
     */
    list(parameters: ISaasPackagesListParameters): Promise<any> {
        return this.client.request("saas/packages/list", parameters)
    }
}
