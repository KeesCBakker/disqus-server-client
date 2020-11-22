import { IGenericDisqusResponse } from "disqus-server-client-core"
import { Disqus } from "./../disqus"

export interface IOrganizationsSaasBillingInformationParameters {
    /**
     * Looks up an organization by ID
     * You must be an admin on the selected organization.
     *
     * @type {string}
     * @memberOf IOrganizationsSaasBillingInformationParameters
     */
    organization: string

    /**
     * Maximum value of 100
     *
     * @type {string}
     * @memberOf IOrganizationsSaasBillingInformationParameters
     */
    historyLimit?: string
}

export interface IOrganizationsSaasCurrentPlanParameters {
    /**
     * Looks up an organization by ID
     * You must be an admin on the selected organization.
     *
     * @type {string}
     * @memberOf IOrganizationsSaasCurrentPlanParameters
     */
    organization: string
}

export interface IOrganizationsSaasRemovePaymentInfoParameters {
    /**
     * Looks up an organization by ID
     * You must be an admin on the selected organization.
     *
     * @type {string}
     * @memberOf IOrganizationsSaasRemovePaymentInfoParameters
     */
    organization: string
}

export interface IOrganizationsSaasSubscribeParameters {
    /**
     * Looks up a PricingOption by name
     *
     * @type {string}
     * @memberOf IOrganizationsSaasSubscribeParameters
     */
    plan: string

    /**
     * Looks up an organization by ID
     * You must be an admin on the selected organization.
     *
     * @type {string}
     * @memberOf IOrganizationsSaasSubscribeParameters
     */
    organization: string

    /**
     * Looks up a coupon by it's stripe id
     *
     * @type {string}
     * @memberOf IOrganizationsSaasSubscribeParameters
     */
    coupon?: string

    /**
     * Looks up a user by ID
     * You may look up a user by username using the 'username' query type.
     *
     * @type {string}
     * @memberOf IOrganizationsSaasSubscribeParameters
     */
    user?: string
}

export interface IOrganizationsSaasUnsubscribeParameters {
    /**
     * Looks up an organization by ID
     * You must be an admin on the selected organization.
     *
     * @type {string}
     * @memberOf IOrganizationsSaasUnsubscribeParameters
     */
    organization: string

    /**
     * Defaults to false
     *
     * @type {string}
     * @memberOf IOrganizationsSaasUnsubscribeParameters
     */
    immediately?: string
}

export interface IOrganizationsSaasUpdateInvoiceInfoParameters {
    /**
     * Looks up an organization by ID
     * You must be an admin on the selected organization.
     *
     * @type {string}
     * @memberOf IOrganizationsSaasUpdateInvoiceInfoParameters
     */
    organization: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IOrganizationsSaasUpdateInvoiceInfoParameters
     */
    city?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IOrganizationsSaasUpdateInvoiceInfoParameters
     */
    companyName?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IOrganizationsSaasUpdateInvoiceInfoParameters
     */
    country?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IOrganizationsSaasUpdateInvoiceInfoParameters
     */
    zipCode?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IOrganizationsSaasUpdateInvoiceInfoParameters
     */
    taxId?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IOrganizationsSaasUpdateInvoiceInfoParameters
     */
    state?: string

    /**
     * Defaults to null
     *
     * @type {string}
     * @memberOf IOrganizationsSaasUpdateInvoiceInfoParameters
     */
    street?: string
}

export interface IOrganizationsSaasUpdatePaymentInfoParameters {
    /**
     * Looks up an organization by ID
     * You must be an admin on the selected organization.
     *
     * @type {string}
     * @memberOf IOrganizationsSaasUpdatePaymentInfoParameters
     */
    organization: string

    token: string
}

export interface IOrganizationsSaasValidateCouponParameters {
    /**
     * Looks up a coupon by it's stripe id
     *
     * @type {string}
     * @memberOf IOrganizationsSaasValidateCouponParameters
     */
    coupon: string

    /**
     * Looks up an organization by ID
     * You must be an admin on the selected organization.
     *
     * @type {string}
     * @memberOf IOrganizationsSaasValidateCouponParameters
     */
    organization: string
}

export class OrganizationsSaasEndpoint {
    constructor(private client: Disqus) {}

    /**
     * Returns billing information related to an organization. This is in a dictionary with keys:`paymentInfo` (optional):`invoiceHistory`: Historical invoices that were successfully paid
     *
     * @param {IOrganizationsSaasBillingInformationParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} OrganizationsSaasEndpoint
     */
    billingInformation(
        parameters: IOrganizationsSaasBillingInformationParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "organizations/saas/billingInformation",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * This method has no descript in on the API.
     *
     * @param {IOrganizationsSaasCurrentPlanParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} OrganizationsSaasEndpoint
     */
    currentPlan(
        parameters: IOrganizationsSaasCurrentPlanParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "organizations/saas/currentPlan",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * This method has no descript in on the API.
     *
     * @param {IOrganizationsSaasRemovePaymentInfoParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} OrganizationsSaasEndpoint
     */
    removePaymentInfo(
        parameters: IOrganizationsSaasRemovePaymentInfoParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "organizations/saas/removePaymentInfo",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * This method has no descript in on the API.
     *
     * @param {IOrganizationsSaasSubscribeParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} OrganizationsSaasEndpoint
     */
    subscribe(
        parameters: IOrganizationsSaasSubscribeParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "organizations/saas/subscribe",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * This method has no descript in on the API.
     *
     * @param {IOrganizationsSaasUnsubscribeParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} OrganizationsSaasEndpoint
     */
    unsubscribe(
        parameters: IOrganizationsSaasUnsubscribeParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "organizations/saas/unsubscribe",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * Update information that appears in invoices we send to customers for stripe charges.
     *
     * @param {IOrganizationsSaasUpdateInvoiceInfoParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} OrganizationsSaasEndpoint
     */
    updateInvoiceInfo(
        parameters: IOrganizationsSaasUpdateInvoiceInfoParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "organizations/saas/updateInvoiceInfo",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * This method has no descript in on the API.
     *
     * @param {IOrganizationsSaasUpdatePaymentInfoParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} OrganizationsSaasEndpoint
     */
    updatePaymentInfo(
        parameters: IOrganizationsSaasUpdatePaymentInfoParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "organizations/saas/updatePaymentInfo",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }

    /**
     * Looks up a coupon string and validates against redeem_by and max_redemptions usingCouponValidator. Returns serialized Coupon object or error message.
     *
     * @param {IOrganizationsSaasValidateCouponParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<IGenericDisqusResponse>} OrganizationsSaasEndpoint
     */
    validateCoupon(
        parameters: IOrganizationsSaasValidateCouponParameters
    ): Promise<IGenericDisqusResponse> {
        return this.client.request(
            "organizations/saas/validateCoupon",
            parameters
        ) as Promise<IGenericDisqusResponse>
    }
}
