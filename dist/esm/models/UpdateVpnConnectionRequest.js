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
import { VpnOptionsFromJSON, VpnOptionsToJSON, } from './VpnOptions';
export function UpdateVpnConnectionRequestFromJSON(json) {
    return UpdateVpnConnectionRequestFromJSONTyped(json, false);
}
export function UpdateVpnConnectionRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'clientGatewayId': !exists(json, 'ClientGatewayId') ? undefined : json['ClientGatewayId'],
        'dryRun': !exists(json, 'DryRun') ? undefined : json['DryRun'],
        'virtualGatewayId': !exists(json, 'VirtualGatewayId') ? undefined : json['VirtualGatewayId'],
        'vpnConnectionId': json['VpnConnectionId'],
        'vpnOptions': !exists(json, 'VpnOptions') ? undefined : VpnOptionsFromJSON(json['VpnOptions']),
    };
}
export function UpdateVpnConnectionRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'ClientGatewayId': value.clientGatewayId,
        'DryRun': value.dryRun,
        'VirtualGatewayId': value.virtualGatewayId,
        'VpnConnectionId': value.vpnConnectionId,
        'VpnOptions': VpnOptionsToJSON(value.vpnOptions),
    };
}
