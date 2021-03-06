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
 * @interface UpdateNetAccessPointRequest
 */
export interface UpdateNetAccessPointRequest {
    /**
     * One or more IDs of route tables to associate with the specified Net access point.
     * @type {Array<string>}
     * @memberof UpdateNetAccessPointRequest
     */
    addRouteTableIds?: Array<string>;
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof UpdateNetAccessPointRequest
     */
    dryRun?: boolean;
    /**
     * The ID of the Net access point.
     * @type {string}
     * @memberof UpdateNetAccessPointRequest
     */
    netAccessPointId: string;
    /**
     * One or more IDs of route tables to disassociate from the specified Net access point.
     * @type {Array<string>}
     * @memberof UpdateNetAccessPointRequest
     */
    removeRouteTableIds?: Array<string>;
}
export declare function UpdateNetAccessPointRequestFromJSON(json: any): UpdateNetAccessPointRequest;
export declare function UpdateNetAccessPointRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateNetAccessPointRequest;
export declare function UpdateNetAccessPointRequestToJSON(value?: UpdateNetAccessPointRequest | null): any;
