/**
 * 3DS OUTSCALE API
 * Welcome to the OUTSCALE API documentation.<br /> The OUTSCALE API enables you to manage your resources in the OUTSCALE Cloud. This documentation describes the different actions available along with code examples.<br /><br /> You can learn more about errors returned by the API in the dedicated [errors page](api/errors).<br /><br /> Note that the OUTSCALE Cloud is compatible with Amazon Web Services (AWS) APIs, but there are [differences in resource names](https://docs.outscale.com/en/userguide/OUTSCALE-APIs-Reference.html) between AWS and the OUTSCALE API.<br /> You can also manage your resources using the [Cockpit](https://docs.outscale.com/en/userguide/About-Cockpit.html) web interface.<br /><br /> An OpenAPI description of the OUTSCALE API is also available in this [GitHub repository](https://github.com/outscale/osc-api).
 *
 * The version of the OpenAPI document: 1.27
 * Contact: support@outscale.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface ScaleDownVmGroupRequest
 */
export interface ScaleDownVmGroupRequest {
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof ScaleDownVmGroupRequest
     */
    dryRun?: boolean;
    /**
     * The ID of the VM group you want to scale down.
     * @type {string}
     * @memberof ScaleDownVmGroupRequest
     */
    vmGroupId: string;
    /**
     * The number of VMs you want to delete from the VM group.
     * @type {number}
     * @memberof ScaleDownVmGroupRequest
     */
    vmSubtraction: number;
}
export declare function ScaleDownVmGroupRequestFromJSON(json: any): ScaleDownVmGroupRequest;
export declare function ScaleDownVmGroupRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScaleDownVmGroupRequest;
export declare function ScaleDownVmGroupRequestToJSON(value?: ScaleDownVmGroupRequest | null): any;