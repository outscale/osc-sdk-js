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
 * @interface ReadPublicIpRangesResponse
 */
export interface ReadPublicIpRangesResponse {
    /**
     * The list of public IPv4 addresses used in the Region, in CIDR notation.
     * @type {Array<string>}
     * @memberof ReadPublicIpRangesResponse
     */
    publicIps?: Array<string>;
    /**
     *
     * @type {ModelResponseContext}
     * @memberof ReadPublicIpRangesResponse
     */
    responseContext?: ModelResponseContext;
}
export declare function ReadPublicIpRangesResponseFromJSON(json: any): ReadPublicIpRangesResponse;
export declare function ReadPublicIpRangesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadPublicIpRangesResponse;
export declare function ReadPublicIpRangesResponseToJSON(value?: ReadPublicIpRangesResponse | null): any;
