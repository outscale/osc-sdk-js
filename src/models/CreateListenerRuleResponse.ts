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
    ListenerRule,
    ListenerRuleFromJSON,
    ListenerRuleFromJSONTyped,
    ListenerRuleToJSON,
} from './ListenerRule';
import {
    ModelResponseContext,
    ModelResponseContextFromJSON,
    ModelResponseContextFromJSONTyped,
    ModelResponseContextToJSON,
} from './ModelResponseContext';

/**
 * 
 * @export
 * @interface CreateListenerRuleResponse
 */
export interface CreateListenerRuleResponse {
    /**
     * 
     * @type {ListenerRule}
     * @memberof CreateListenerRuleResponse
     */
    listenerRule?: ListenerRule;
    /**
     * 
     * @type {ModelResponseContext}
     * @memberof CreateListenerRuleResponse
     */
    responseContext?: ModelResponseContext;
}

export function CreateListenerRuleResponseFromJSON(json: any): CreateListenerRuleResponse {
    return CreateListenerRuleResponseFromJSONTyped(json, false);
}

export function CreateListenerRuleResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateListenerRuleResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'listenerRule': !exists(json, 'ListenerRule') ? undefined : ListenerRuleFromJSON(json['ListenerRule']),
        'responseContext': !exists(json, 'ResponseContext') ? undefined : ModelResponseContextFromJSON(json['ResponseContext']),
    };
}

export function CreateListenerRuleResponseToJSON(value?: CreateListenerRuleResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ListenerRule': ListenerRuleToJSON(value.listenerRule),
        'ResponseContext': ModelResponseContextToJSON(value.responseContext),
    };
}

