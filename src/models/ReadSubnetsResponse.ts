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
import {
    Subnet,
    SubnetFromJSON,
    SubnetFromJSONTyped,
    SubnetToJSON,
} from './Subnet';

/**
 * 
 * @export
 * @interface ReadSubnetsResponse
 */
export interface ReadSubnetsResponse {
    /**
     * 
     * @type {ModelResponseContext}
     * @memberof ReadSubnetsResponse
     */
    responseContext?: ModelResponseContext;
    /**
     * Information about one or more Subnets.
     * @type {Array<Subnet>}
     * @memberof ReadSubnetsResponse
     */
    subnets?: Array<Subnet>;
}

export function ReadSubnetsResponseFromJSON(json: any): ReadSubnetsResponse {
    return ReadSubnetsResponseFromJSONTyped(json, false);
}

export function ReadSubnetsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadSubnetsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'responseContext': !exists(json, 'ResponseContext') ? undefined : ModelResponseContextFromJSON(json['ResponseContext']),
        'subnets': !exists(json, 'Subnets') ? undefined : ((json['Subnets'] as Array<any>).map(SubnetFromJSON)),
    };
}

export function ReadSubnetsResponseToJSON(value?: ReadSubnetsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ResponseContext': ModelResponseContextToJSON(value.responseContext),
        'Subnets': value.subnets === undefined ? undefined : ((value.subnets as Array<any>).map(SubnetToJSON)),
    };
}

