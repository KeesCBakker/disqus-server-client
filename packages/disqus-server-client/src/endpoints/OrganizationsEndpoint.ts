import { IGenericDisqusResponse } from "disqus-server-client-core"
import { Disqus } from "./../disqus"

export interface IOrganizationsAddAdminParameters {
    /**
     * Looks up an organization by ID
     * You must be an admin on the selected organization.
     *
     * @type {string}
     * @memberOf IOrganizationsAddAdminParameters
     */
    organization: string

    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IOrganizationsAddAdminParameters
     */
    user: string
}

export interface IOrganizationsListAdminsParameters {
    /**
     * Looks up an organization by ID
     * You must be an admin on the selected organization.
     *
     * @type {string}
     * @memberOf IOrganizationsListAdminsParameters
     */
    organization: string
}

export interface IOrganizationsRemoveAdminParameters {
    /**
     * Looks up an organization by ID
     * You must be an admin on the selected organization.
     *
     * @type {string}
     * @memberOf IOrganizationsRemoveAdminParameters
     */
    organization: string

    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IOrganizationsRemoveAdminParameters
     */
    user: string
}

export interface IOrganizationsSetRoleParameters {
    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IOrganizationsSetRoleParameters
     */
    user: string

    /**
     * Looks up an organization by ID
     * You must be an admin on the selected organization.
     *
     * @type {string}
     * @memberOf IOrganizationsSetRoleParameters
     */
    organization: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IOrganizationsSetRoleParameters
     */
    isModerator?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IOrganizationsSetRoleParameters
     */
    isAdmin?: string
}

export class OrganizationsEndpoint {
    constructor(private client: Disqus) {}

    /**
     * Adds an admin to an organization. Updates permissions of existing admins too.
     *
     * @param {IOrganizationsAddAdminParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} OrganizationsEndpoint
     */
    addAdmin(
        parameters: IOrganizationsAddAdminParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "organizations/addAdmin",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * List all the admins in an organization.
     *
     * @param {IOrganizationsListAdminsParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} OrganizationsEndpoint
     */
    listAdmins(
        parameters: IOrganizationsListAdminsParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "organizations/listAdmins",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * Removes an admin from an organization.
     *
     * @param {IOrganizationsRemoveAdminParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} OrganizationsEndpoint
     */
    removeAdmin(
        parameters: IOrganizationsRemoveAdminParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "organizations/removeAdmin",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * Add a user with an arbitrary role to an organization.
     *
     * @param {IOrganizationsSetRoleParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} OrganizationsEndpoint
     */
    setRole(
        parameters: IOrganizationsSetRoleParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "organizations/setRole",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }
}
