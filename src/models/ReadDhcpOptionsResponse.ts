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
    DhcpOptionsSet,
    DhcpOptionsSetFromJSON,
    DhcpOptionsSetFromJSONTyped,
    DhcpOptionsSetToJSON,
} from './DhcpOptionsSet';
import {
    ModelResponseContext,
    ModelResponseContextFromJSON,
    ModelResponseContextFromJSONTyped,
    ModelResponseContextToJSON,
} from './ModelResponseContext';

/**
 * 
 * @export
 * @interface ReadDhcpOptionsResponse
 */
export interface ReadDhcpOptionsResponse {
    /**
     * Information about one or more DHCP options sets.
     * @type {Array<DhcpOptionsSet>}
     * @memberof ReadDhcpOptionsResponse
     */
    dhcpOptionsSets?: Array<DhcpOptionsSet>;
    /**
     * 
     * @type {ModelResponseContext}
     * @memberof ReadDhcpOptionsResponse
     */
    responseContext?: ModelResponseContext;
}

export function ReadDhcpOptionsResponseFromJSON(json: any): ReadDhcpOptionsResponse {
    return ReadDhcpOptionsResponseFromJSONTyped(json, false);
}

export function ReadDhcpOptionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadDhcpOptionsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dhcpOptionsSets': !exists(json, 'DhcpOptionsSets') ? undefined : ((json['DhcpOptionsSets'] as Array<any>).map(DhcpOptionsSetFromJSON)),
        'responseContext': !exists(json, 'ResponseContext') ? undefined : ModelResponseContextFromJSON(json['ResponseContext']),
    };
}

export function ReadDhcpOptionsResponseToJSON(value?: ReadDhcpOptionsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'DhcpOptionsSets': value.dhcpOptionsSets === undefined ? undefined : ((value.dhcpOptionsSets as Array<any>).map(DhcpOptionsSetToJSON)),
        'ResponseContext': ModelResponseContextToJSON(value.responseContext),
    };
}

