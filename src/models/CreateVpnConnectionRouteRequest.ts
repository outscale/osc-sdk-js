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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CreateVpnConnectionRouteRequest
 */
export interface CreateVpnConnectionRouteRequest {
    /**
     * The network prefix of the route, in CIDR notation (for example, `10.12.0.0/16`).
     * @type {string}
     * @memberof CreateVpnConnectionRouteRequest
     */
    destinationIpRange: string;
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof CreateVpnConnectionRouteRequest
     */
    dryRun?: boolean;
    /**
     * The ID of the target VPN connection of the static route.
     * @type {string}
     * @memberof CreateVpnConnectionRouteRequest
     */
    vpnConnectionId: string;
}

export function CreateVpnConnectionRouteRequestFromJSON(json: any): CreateVpnConnectionRouteRequest {
    return CreateVpnConnectionRouteRequestFromJSONTyped(json, false);
}

export function CreateVpnConnectionRouteRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateVpnConnectionRouteRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'destinationIpRange': json['DestinationIpRange'],
        'dryRun': !exists(json, 'DryRun') ? undefined : json['DryRun'],
        'vpnConnectionId': json['VpnConnectionId'],
    };
}

export function CreateVpnConnectionRouteRequestToJSON(value?: CreateVpnConnectionRouteRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'DestinationIpRange': value.destinationIpRange,
        'DryRun': value.dryRun,
        'VpnConnectionId': value.vpnConnectionId,
    };
}

