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
 * Information about the public IP.
 * @export
 * @interface PublicIpLight
 */
export interface PublicIpLight {
    /**
     * The public IP associated with the NAT service.
     * @type {string}
     * @memberof PublicIpLight
     */
    publicIp?: string;
    /**
     * The allocation ID of the public IP associated with the NAT service.
     * @type {string}
     * @memberof PublicIpLight
     */
    publicIpId?: string;
}

export function PublicIpLightFromJSON(json: any): PublicIpLight {
    return PublicIpLightFromJSONTyped(json, false);
}

export function PublicIpLightFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicIpLight {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'publicIp': !exists(json, 'PublicIp') ? undefined : json['PublicIp'],
        'publicIpId': !exists(json, 'PublicIpId') ? undefined : json['PublicIpId'],
    };
}

export function PublicIpLightToJSON(value?: PublicIpLight | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'PublicIp': value.publicIp,
        'PublicIpId': value.publicIpId,
    };
}

