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
 * Information about the DirectLink interface.
 * @export
 * @interface DirectLinkInterface
 */
export interface DirectLinkInterface {
    /**
     * The BGP (Border Gateway Protocol) ASN (Autonomous System Number) on the customer's side of the DirectLink interface.
     * @type {number}
     * @memberof DirectLinkInterface
     */
    bgpAsn: number;
    /**
     * The BGP authentication key.
     * @type {string}
     * @memberof DirectLinkInterface
     */
    bgpKey?: string;
    /**
     * The IP on the customer's side of the DirectLink interface.
     * @type {string}
     * @memberof DirectLinkInterface
     */
    clientPrivateIp?: string;
    /**
     * The name of the DirectLink interface.
     * @type {string}
     * @memberof DirectLinkInterface
     */
    directLinkInterfaceName: string;
    /**
     * The IP on the OUTSCALE side of the DirectLink interface.
     * @type {string}
     * @memberof DirectLinkInterface
     */
    outscalePrivateIp?: string;
    /**
     * The ID of the target virtual gateway.
     * @type {string}
     * @memberof DirectLinkInterface
     */
    virtualGatewayId: string;
    /**
     * The VLAN number associated with the DirectLink interface.
     * @type {number}
     * @memberof DirectLinkInterface
     */
    vlan: number;
}
export declare function DirectLinkInterfaceFromJSON(json: any): DirectLinkInterface;
export declare function DirectLinkInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): DirectLinkInterface;
export declare function DirectLinkInterfaceToJSON(value?: DirectLinkInterface | null): any;
