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
     * @memberOf {Promise<any>} OrganizationsSaasEndpoint
     */
    billingInformation(
        parameters: IOrganizationsSaasBillingInformationParameters
    ): Promise<any> {
        return this.client.request(
            "organizations/saas/billingInformation",
            parameters
        )
    }

    /**
     * This method has no descript in on the API.
     *
     * @param {IOrganizationsSaasCurrentPlanParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} OrganizationsSaasEndpoint
     */
    currentPlan(
        parameters: IOrganizationsSaasCurrentPlanParameters
    ): Promise<any> {
        return this.client.request("organizations/saas/currentPlan", parameters)
    }

    /**
     * This method has no descript in on the API.
     *
     * @param {IOrganizationsSaasRemovePaymentInfoParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} OrganizationsSaasEndpoint
     */
    removePaymentInfo(
        parameters: IOrganizationsSaasRemovePaymentInfoParameters
    ): Promise<any> {
        return this.client.request(
            "organizations/saas/removePaymentInfo",
            parameters
        )
    }

    /**
     * This method has no descript in on the API.
     *
     * @param {IOrganizationsSaasSubscribeParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} OrganizationsSaasEndpoint
     */
    subscribe(parameters: IOrganizationsSaasSubscribeParameters): Promise<any> {
        return this.client.request("organizations/saas/subscribe", parameters)
    }

    /**
     * This method has no descript in on the API.
     *
     * @param {IOrganizationsSaasUnsubscribeParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} OrganizationsSaasEndpoint
     */
    unsubscribe(
        parameters: IOrganizationsSaasUnsubscribeParameters
    ): Promise<any> {
        return this.client.request("organizations/saas/unsubscribe", parameters)
    }

    /**
     * Update information that appears in invoices we send to customers for stripe charges.
     *
     * @param {IOrganizationsSaasUpdateInvoiceInfoParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} OrganizationsSaasEndpoint
     */
    updateInvoiceInfo(
        parameters: IOrganizationsSaasUpdateInvoiceInfoParameters
    ): Promise<any> {
        return this.client.request(
            "organizations/saas/updateInvoiceInfo",
            parameters
        )
    }

    /**
     * This method has no descript in on the API.
     *
     * @param {IOrganizationsSaasUpdatePaymentInfoParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} OrganizationsSaasEndpoint
     */
    updatePaymentInfo(
        parameters: IOrganizationsSaasUpdatePaymentInfoParameters
    ): Promise<any> {
        return this.client.request(
            "organizations/saas/updatePaymentInfo",
            parameters
        )
    }

    /**
     * Looks up a coupon string and validates against redeem_by and max_redemptions usingCouponValidator. Returns serialized Coupon object or error message.
     *
     * @param {IOrganizationsSaasValidateCouponParameters} parameters The parameters.
     * @returns The response as a promise.
     * @memberOf {Promise<any>} OrganizationsSaasEndpoint
     */
    validateCoupon(
        parameters: IOrganizationsSaasValidateCouponParameters
    ): Promise<any> {
        return this.client.request(
            "organizations/saas/validateCoupon",
            parameters
        )
    }
}
