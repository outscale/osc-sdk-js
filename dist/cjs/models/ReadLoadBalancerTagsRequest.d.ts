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
 * @interface ReadLoadBalancerTagsRequest
 */
export interface ReadLoadBalancerTagsRequest {
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof ReadLoadBalancerTagsRequest
     */
    dryRun?: boolean;
    /**
     * One or more load balancer names.
     * @type {Array<string>}
     * @memberof ReadLoadBalancerTagsRequest
     */
    loadBalancerNames: Array<string>;
}
export declare function ReadLoadBalancerTagsRequestFromJSON(json: any): ReadLoadBalancerTagsRequest;
export declare function ReadLoadBalancerTagsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadLoadBalancerTagsRequest;
export declare function ReadLoadBalancerTagsRequestToJSON(value?: ReadLoadBalancerTagsRequest | null): any;
