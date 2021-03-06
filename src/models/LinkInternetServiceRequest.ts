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
 * @interface LinkInternetServiceRequest
 */
export interface LinkInternetServiceRequest {
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof LinkInternetServiceRequest
     */
    dryRun?: boolean;
    /**
     * The ID of the Internet service you want to attach.
     * @type {string}
     * @memberof LinkInternetServiceRequest
     */
    internetServiceId: string;
    /**
     * The ID of the Net to which you want to attach the Internet service.
     * @type {string}
     * @memberof LinkInternetServiceRequest
     */
    netId: string;
}

export function LinkInternetServiceRequestFromJSON(json: any): LinkInternetServiceRequest {
    return LinkInternetServiceRequestFromJSONTyped(json, false);
}

export function LinkInternetServiceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkInternetServiceRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dryRun': !exists(json, 'DryRun') ? undefined : json['DryRun'],
        'internetServiceId': json['InternetServiceId'],
        'netId': json['NetId'],
    };
}

export function LinkInternetServiceRequestToJSON(value?: LinkInternetServiceRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'DryRun': value.dryRun,
        'InternetServiceId': value.internetServiceId,
        'NetId': value.netId,
    };
}

