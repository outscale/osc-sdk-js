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
    ModelResponseContext,
    ModelResponseContextFromJSON,
    ModelResponseContextFromJSONTyped,
    ModelResponseContextToJSON,
} from './ModelResponseContext';

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

export function ReadPublicIpRangesResponseFromJSON(json: any): ReadPublicIpRangesResponse {
    return ReadPublicIpRangesResponseFromJSONTyped(json, false);
}

export function ReadPublicIpRangesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadPublicIpRangesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'publicIps': !exists(json, 'PublicIps') ? undefined : json['PublicIps'],
        'responseContext': !exists(json, 'ResponseContext') ? undefined : ModelResponseContextFromJSON(json['ResponseContext']),
    };
}

export function ReadPublicIpRangesResponseToJSON(value?: ReadPublicIpRangesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'PublicIps': value.publicIps,
        'ResponseContext': ModelResponseContextToJSON(value.responseContext),
    };
}

