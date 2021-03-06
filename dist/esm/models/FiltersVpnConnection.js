/* tslint:disable */
/* eslint-disable */
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
import { exists } from '../runtime';
export function FiltersVpnConnectionFromJSON(json) {
    return FiltersVpnConnectionFromJSONTyped(json, false);
}
export function FiltersVpnConnectionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bgpAsns': !exists(json, 'BgpAsns') ? undefined : json['BgpAsns'],
        'clientGatewayIds': !exists(json, 'ClientGatewayIds') ? undefined : json['ClientGatewayIds'],
        'connectionTypes': !exists(json, 'ConnectionTypes') ? undefined : json['ConnectionTypes'],
        'routeDestinationIpRanges': !exists(json, 'RouteDestinationIpRanges') ? undefined : json['RouteDestinationIpRanges'],
        'states': !exists(json, 'States') ? undefined : json['States'],
        'staticRoutesOnly': !exists(json, 'StaticRoutesOnly') ? undefined : json['StaticRoutesOnly'],
        'tagKeys': !exists(json, 'TagKeys') ? undefined : json['TagKeys'],
        'tagValues': !exists(json, 'TagValues') ? undefined : json['TagValues'],
        'tags': !exists(json, 'Tags') ? undefined : json['Tags'],
        'virtualGatewayIds': !exists(json, 'VirtualGatewayIds') ? undefined : json['VirtualGatewayIds'],
        'vpnConnectionIds': !exists(json, 'VpnConnectionIds') ? undefined : json['VpnConnectionIds'],
    };
}
export function FiltersVpnConnectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'BgpAsns': value.bgpAsns,
        'ClientGatewayIds': value.clientGatewayIds,
        'ConnectionTypes': value.connectionTypes,
        'RouteDestinationIpRanges': value.routeDestinationIpRanges,
        'States': value.states,
        'StaticRoutesOnly': value.staticRoutesOnly,
        'TagKeys': value.tagKeys,
        'TagValues': value.tagValues,
        'Tags': value.tags,
        'VirtualGatewayIds': value.virtualGatewayIds,
        'VpnConnectionIds': value.vpnConnectionIds,
    };
}
