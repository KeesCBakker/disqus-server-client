export interface IDisqusConfig {
    /**
     * The API secret.
     *
     * @type {string}
     * @memberOf IDisqusConfig
     */
    apiSecret: string

    /**
     * The API key.
     *
     * @type {string}
     * @memberOf IDisqusConfig
     */
    apiKey: string

    /**
     * The access token. This token indicates which user does all the actions.
     *
     * @type {string}
     * @memberOf IDisqusConfig
     */
    accessToken: string

    /**
     * True if caching should be disabled. Caching is enabled by default for
     * some nodes.
     *
     * @type {boolean}
     * @memberOf IDisqusConfig
     */
    disableCache?: boolean

    /**
     * The time to live for cached items. Default cache is 120 seconds.
     *
     * @type {number}
     * @memberOf IDisqusConfig
     */
    ttlCache?: number
}
