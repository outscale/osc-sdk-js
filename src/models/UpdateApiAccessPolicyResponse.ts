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
    ApiAccessPolicy,
    ApiAccessPolicyFromJSON,
    ApiAccessPolicyFromJSONTyped,
    ApiAccessPolicyToJSON,
} from './ApiAccessPolicy';
import {
    ModelResponseContext,
    ModelResponseContextFromJSON,
    ModelResponseContextFromJSONTyped,
    ModelResponseContextToJSON,
} from './ModelResponseContext';

/**
 * 
 * @export
 * @interface UpdateApiAccessPolicyResponse
 */
export interface UpdateApiAccessPolicyResponse {
    /**
     * 
     * @type {ApiAccessPolicy}
     * @memberof UpdateApiAccessPolicyResponse
     */
    apiAccessPolicy?: ApiAccessPolicy;
    /**
     * 
     * @type {ModelResponseContext}
     * @memberof UpdateApiAccessPolicyResponse
     */
    responseContext?: ModelResponseContext;
}

export function UpdateApiAccessPolicyResponseFromJSON(json: any): UpdateApiAccessPolicyResponse {
    return UpdateApiAccessPolicyResponseFromJSONTyped(json, false);
}

export function UpdateApiAccessPolicyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateApiAccessPolicyResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiAccessPolicy': !exists(json, 'ApiAccessPolicy') ? undefined : ApiAccessPolicyFromJSON(json['ApiAccessPolicy']),
        'responseContext': !exists(json, 'ResponseContext') ? undefined : ModelResponseContextFromJSON(json['ResponseContext']),
    };
}

export function UpdateApiAccessPolicyResponseToJSON(value?: UpdateApiAccessPolicyResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ApiAccessPolicy': ApiAccessPolicyToJSON(value.apiAccessPolicy),
        'ResponseContext': ModelResponseContextToJSON(value.responseContext),
    };
}

