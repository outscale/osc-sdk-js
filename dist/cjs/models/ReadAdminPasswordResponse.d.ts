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
import { ModelResponseContext } from './ModelResponseContext';
/**
 *
 * @export
 * @interface ReadAdminPasswordResponse
 */
export interface ReadAdminPasswordResponse {
    /**
     * The password of the VM. After the first boot, returns an empty string.
     * @type {string}
     * @memberof ReadAdminPasswordResponse
     */
    adminPassword?: string;
    /**
     *
     * @type {ModelResponseContext}
     * @memberof ReadAdminPasswordResponse
     */
    responseContext?: ModelResponseContext;
    /**
     * The ID of the VM.
     * @type {string}
     * @memberof ReadAdminPasswordResponse
     */
    vmId?: string;
}
export declare function ReadAdminPasswordResponseFromJSON(json: any): ReadAdminPasswordResponse;
export declare function ReadAdminPasswordResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadAdminPasswordResponse;
export declare function ReadAdminPasswordResponseToJSON(value?: ReadAdminPasswordResponse | null): any;
