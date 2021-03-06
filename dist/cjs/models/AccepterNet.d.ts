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
 * Information about the accepter Net.
 * @export
 * @interface AccepterNet
 */
export interface AccepterNet {
    /**
     * The account ID of the owner of the accepter Net.
     * @type {string}
     * @memberof AccepterNet
     */
    accountId?: string;
    /**
     * The IP range for the accepter Net, in CIDR notation (for example, `10.0.0.0/16`).
     * @type {string}
     * @memberof AccepterNet
     */
    ipRange?: string;
    /**
     * The ID of the accepter Net.
     * @type {string}
     * @memberof AccepterNet
     */
    netId?: string;
}
export declare function AccepterNetFromJSON(json: any): AccepterNet;
export declare function AccepterNetFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccepterNet;
export declare function AccepterNetToJSON(value?: AccepterNet | null): any;
