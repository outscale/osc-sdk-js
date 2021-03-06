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
import { FiltersVolume } from './FiltersVolume';
/**
 *
 * @export
 * @interface ReadVolumesRequest
 */
export interface ReadVolumesRequest {
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof ReadVolumesRequest
     */
    dryRun?: boolean;
    /**
     *
     * @type {FiltersVolume}
     * @memberof ReadVolumesRequest
     */
    filters?: FiltersVolume;
}
export declare function ReadVolumesRequestFromJSON(json: any): ReadVolumesRequest;
export declare function ReadVolumesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadVolumesRequest;
export declare function ReadVolumesRequestToJSON(value?: ReadVolumesRequest | null): any;
