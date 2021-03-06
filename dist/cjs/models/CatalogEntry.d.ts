/**
 * 3DS OUTSCALE API
 * Welcome to the OUTSCALE API documentation.<br /> The OUTSCALE API enables you to manage your resources in the OUTSCALE Cloud. This documentation describes the different actions available along with code examples.<br /><br /> You can learn more about errors returned by the API in the dedicated [errors page](api/errors).<br /><br /> Note that the OUTSCALE Cloud is compatible with Amazon Web Services (AWS) APIs, but there are [differences in resource names](https://docs.outscale.com/en/userguide/OUTSCALE-APIs-Reference.html) between AWS and the OUTSCALE API.<br /> You can also manage your resources using the [Cockpit](https://docs.outscale.com/en/userguide/About-Cockpit.html) web interface.
 *
 * The version of the OpenAPI document: 1.20
 * Contact: support@outscale.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Information about the catalog entry.
 * @export
 * @interface CatalogEntry
 */
export interface CatalogEntry {
    /**
     * The category of the catalog entry (for example, `network`).
     * @type {string}
     * @memberof CatalogEntry
     */
    category?: string;
    /**
     * When returned and equal to `PER_MONTH`, the price of the catalog entry is calculated on a monthly basis.
     * @type {string}
     * @memberof CatalogEntry
     */
    flags?: string;
    /**
     * The API call associated with the catalog entry (for example, `CreateVms` or `RunInstances`).
     * @type {string}
     * @memberof CatalogEntry
     */
    operation?: string;
    /**
     * The service associated with the catalog entry (`TinaOS-FCU`, `TinaOS-LBU`, `TinaOS-DirectLink`, or `TinaOS-OOS`).
     * @type {string}
     * @memberof CatalogEntry
     */
    service?: string;
    /**
     * The Subregion associated with the catalog entry.
     * @type {string}
     * @memberof CatalogEntry
     */
    subregionName?: string;
    /**
     * The description of the catalog entry.
     * @type {string}
     * @memberof CatalogEntry
     */
    title?: string;
    /**
     * The type of resource associated with the catalog entry.
     * @type {string}
     * @memberof CatalogEntry
     */
    type?: string;
    /**
     * The unit price of the catalog entry, in the currency of the catalog of the Region where the API method was used.
     * @type {number}
     * @memberof CatalogEntry
     */
    unitPrice?: number;
}
export declare function CatalogEntryFromJSON(json: any): CatalogEntry;
export declare function CatalogEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogEntry;
export declare function CatalogEntryToJSON(value?: CatalogEntry | null): any;
