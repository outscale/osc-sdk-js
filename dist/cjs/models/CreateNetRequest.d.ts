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
 *
 * @export
 * @interface CreateNetRequest
 */
export interface CreateNetRequest {
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof CreateNetRequest
     */
    dryRun?: boolean;
    /**
     * The IP range for the Net, in CIDR notation (for example, `10.0.0.0/16`).
     * @type {string}
     * @memberof CreateNetRequest
     */
    ipRange: string;
    /**
     * The tenancy options for the VMs (`default` if a VM created in a Net can be launched with any tenancy, `dedicated` if it can be launched with dedicated tenancy VMs running on single-tenant hardware).
     * @type {string}
     * @memberof CreateNetRequest
     */
    tenancy?: string;
}
export declare function CreateNetRequestFromJSON(json: any): CreateNetRequest;
export declare function CreateNetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateNetRequest;
export declare function CreateNetRequestToJSON(value?: CreateNetRequest | null): any;
