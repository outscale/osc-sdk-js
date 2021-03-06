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
import { exists } from '../runtime';
import { OsuApiKeyFromJSON, OsuApiKeyToJSON, } from './OsuApiKey';
export function OsuExportToCreateFromJSON(json) {
    return OsuExportToCreateFromJSONTyped(json, false);
}
export function OsuExportToCreateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'diskImageFormat': json['DiskImageFormat'],
        'osuApiKey': !exists(json, 'OsuApiKey') ? undefined : OsuApiKeyFromJSON(json['OsuApiKey']),
        'osuBucket': json['OsuBucket'],
        'osuManifestUrl': !exists(json, 'OsuManifestUrl') ? undefined : json['OsuManifestUrl'],
        'osuPrefix': !exists(json, 'OsuPrefix') ? undefined : json['OsuPrefix'],
    };
}
export function OsuExportToCreateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'DiskImageFormat': value.diskImageFormat,
        'OsuApiKey': OsuApiKeyToJSON(value.osuApiKey),
        'OsuBucket': value.osuBucket,
        'OsuManifestUrl': value.osuManifestUrl,
        'OsuPrefix': value.osuPrefix,
    };
}
