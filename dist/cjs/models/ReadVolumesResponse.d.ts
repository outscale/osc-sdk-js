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
import { Volume } from './Volume';
/**
 *
 * @export
 * @interface ReadVolumesResponse
 */
export interface ReadVolumesResponse {
    /**
     *
     * @type {ModelResponseContext}
     * @memberof ReadVolumesResponse
     */
    responseContext?: ModelResponseContext;
    /**
     * Information about one or more volumes.
     * @type {Array<Volume>}
     * @memberof ReadVolumesResponse
     */
    volumes?: Array<Volume>;
}
export declare function ReadVolumesResponseFromJSON(json: any): ReadVolumesResponse;
export declare function ReadVolumesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadVolumesResponse;
export declare function ReadVolumesResponseToJSON(value?: ReadVolumesResponse | null): any;
