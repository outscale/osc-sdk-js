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
import {
    LinkPublicIp,
    LinkPublicIpFromJSON,
    LinkPublicIpFromJSONTyped,
    LinkPublicIpToJSON,
} from './LinkPublicIp';

/**
 * Information about the private IP.
 * @export
 * @interface PrivateIp
 */
export interface PrivateIp {
    /**
     * If true, the IP is the primary private IP of the NIC.
     * @type {boolean}
     * @memberof PrivateIp
     */
    isPrimary?: boolean;
    /**
     * 
     * @type {LinkPublicIp}
     * @memberof PrivateIp
     */
    linkPublicIp?: LinkPublicIp;
    /**
     * The name of the private DNS.
     * @type {string}
     * @memberof PrivateIp
     */
    privateDnsName?: string;
    /**
     * The private IP of the NIC.
     * @type {string}
     * @memberof PrivateIp
     */
    privateIp?: string;
}

export function PrivateIpFromJSON(json: any): PrivateIp {
    return PrivateIpFromJSONTyped(json, false);
}

export function PrivateIpFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrivateIp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isPrimary': !exists(json, 'IsPrimary') ? undefined : json['IsPrimary'],
        'linkPublicIp': !exists(json, 'LinkPublicIp') ? undefined : LinkPublicIpFromJSON(json['LinkPublicIp']),
        'privateDnsName': !exists(json, 'PrivateDnsName') ? undefined : json['PrivateDnsName'],
        'privateIp': !exists(json, 'PrivateIp') ? undefined : json['PrivateIp'],
    };
}

export function PrivateIpToJSON(value?: PrivateIp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'IsPrimary': value.isPrimary,
        'LinkPublicIp': LinkPublicIpToJSON(value.linkPublicIp),
        'PrivateDnsName': value.privateDnsName,
        'PrivateIp': value.privateIp,
    };
}

