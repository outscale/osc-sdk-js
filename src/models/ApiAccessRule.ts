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
 * Information about the API access rule.
 * @export
 * @interface ApiAccessRule
 */
export interface ApiAccessRule {
    /**
     *  The ID of the API access rule.
     * @type {string}
     * @memberof ApiAccessRule
     */
    apiAccessRuleId?: string;
    /**
     * One or more IDs of Client Certificate Authorities (CAs) used for the API access rule.
     * @type {Array<string>}
     * @memberof ApiAccessRule
     */
    caIds?: Array<string>;
    /**
     * One or more Client Certificate Common Names (CNs).
     * @type {Array<string>}
     * @memberof ApiAccessRule
     */
    cns?: Array<string>;
    /**
     * The description of the API access rule.
     * @type {string}
     * @memberof ApiAccessRule
     */
    description?: string;
    /**
     * One or more IP ranges used for the API access rule, in CIDR notation (for example, `192.0.2.0/16`).
     * @type {Array<string>}
     * @memberof ApiAccessRule
     */
    ipRanges?: Array<string>;
}

export function ApiAccessRuleFromJSON(json: any): ApiAccessRule {
    return ApiAccessRuleFromJSONTyped(json, false);
}

export function ApiAccessRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiAccessRule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiAccessRuleId': !exists(json, 'ApiAccessRuleId') ? undefined : json['ApiAccessRuleId'],
        'caIds': !exists(json, 'CaIds') ? undefined : json['CaIds'],
        'cns': !exists(json, 'Cns') ? undefined : json['Cns'],
        'description': !exists(json, 'Description') ? undefined : json['Description'],
        'ipRanges': !exists(json, 'IpRanges') ? undefined : json['IpRanges'],
    };
}

export function ApiAccessRuleToJSON(value?: ApiAccessRule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ApiAccessRuleId': value.apiAccessRuleId,
        'CaIds': value.caIds,
        'Cns': value.cns,
        'Description': value.description,
        'IpRanges': value.ipRanges,
    };
}

