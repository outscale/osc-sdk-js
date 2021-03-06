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
 * @interface CreateCaRequest
 */
export interface CreateCaRequest {
    /**
     * The CA in PEM format. It must be a single-line string, containing literal line breaks (`\n`).
     * @type {string}
     * @memberof CreateCaRequest
     */
    caPem: string;
    /**
     * The description of the CA.
     * @type {string}
     * @memberof CreateCaRequest
     */
    description?: string;
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof CreateCaRequest
     */
    dryRun?: boolean;
}

export function CreateCaRequestFromJSON(json: any): CreateCaRequest {
    return CreateCaRequestFromJSONTyped(json, false);
}

export function CreateCaRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCaRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'caPem': json['CaPem'],
        'description': !exists(json, 'Description') ? undefined : json['Description'],
        'dryRun': !exists(json, 'DryRun') ? undefined : json['DryRun'],
    };
}

export function CreateCaRequestToJSON(value?: CreateCaRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'CaPem': value.caPem,
        'Description': value.description,
        'DryRun': value.dryRun,
    };
}

