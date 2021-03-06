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
import { PrivateIpLight } from './PrivateIpLight';
/**
 *
 * @export
 * @interface CreateNicRequest
 */
export interface CreateNicRequest {
    /**
     * A description for the NIC.
     * @type {string}
     * @memberof CreateNicRequest
     */
    description?: string;
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof CreateNicRequest
     */
    dryRun?: boolean;
    /**
     * The primary private IP for the NIC.<br />
     * This IP must be within the IP range of the Subnet that you specify with the `SubnetId` attribute.<br />
     * If you do not specify this attribute, a random private IP is selected within the IP range of the Subnet.
     * @type {Array<PrivateIpLight>}
     * @memberof CreateNicRequest
     */
    privateIps?: Array<PrivateIpLight>;
    /**
     * One or more IDs of security groups for the NIC.
     * @type {Array<string>}
     * @memberof CreateNicRequest
     */
    securityGroupIds?: Array<string>;
    /**
     * The ID of the Subnet in which you want to create the NIC.
     * @type {string}
     * @memberof CreateNicRequest
     */
    subnetId: string;
}
export declare function CreateNicRequestFromJSON(json: any): CreateNicRequest;
export declare function CreateNicRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateNicRequest;
export declare function CreateNicRequestToJSON(value?: CreateNicRequest | null): any;
