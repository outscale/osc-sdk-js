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
    Volume,
    VolumeFromJSON,
    VolumeFromJSONTyped,
    VolumeToJSON,
} from './Volume';

/**
 * 
 * @export
 * @interface ReadVolumesResponse
 */
export interface ReadVolumesResponse {
    /**
     * 
     * @type {ModelResponseContext}
     * @memberof ReadVolumesResponse
     */
    responseContext?: ModelResponseContext;
    /**
     * Information about one or more volumes.
     * @type {Array<Volume>}
     * @memberof ReadVolumesResponse
     */
    volumes?: Array<Volume>;
}

export function ReadVolumesResponseFromJSON(json: any): ReadVolumesResponse {
    return ReadVolumesResponseFromJSONTyped(json, false);
}

export function ReadVolumesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadVolumesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'responseContext': !exists(json, 'ResponseContext') ? undefined : ModelResponseContextFromJSON(json['ResponseContext']),
        'volumes': !exists(json, 'Volumes') ? undefined : ((json['Volumes'] as Array<any>).map(VolumeFromJSON)),
    };
}

export function ReadVolumesResponseToJSON(value?: ReadVolumesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ResponseContext': ModelResponseContextToJSON(value.responseContext),
        'Volumes': value.volumes === undefined ? undefined : ((value.volumes as Array<any>).map(VolumeToJSON)),
    };
}

