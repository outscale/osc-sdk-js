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
 * Information about the created keypair.
 * @export
 * @interface KeypairCreated
 */
export interface KeypairCreated {
    /**
     * The MD5 public key fingerprint as specified in section 4 of RFC 4716.
     * @type {string}
     * @memberof KeypairCreated
     */
    keypairFingerprint?: string;
    /**
     * The name of the keypair.
     * @type {string}
     * @memberof KeypairCreated
     */
    keypairName?: string;
    /**
     * The private key. When saving the private key in a .rsa file, replace the `\n` escape sequences with line breaks.
     * @type {string}
     * @memberof KeypairCreated
     */
    privateKey?: string;
}

export function KeypairCreatedFromJSON(json: any): KeypairCreated {
    return KeypairCreatedFromJSONTyped(json, false);
}

export function KeypairCreatedFromJSONTyped(json: any, ignoreDiscriminator: boolean): KeypairCreated {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'keypairFingerprint': !exists(json, 'KeypairFingerprint') ? undefined : json['KeypairFingerprint'],
        'keypairName': !exists(json, 'KeypairName') ? undefined : json['KeypairName'],
        'privateKey': !exists(json, 'PrivateKey') ? undefined : json['PrivateKey'],
    };
}

export function KeypairCreatedToJSON(value?: KeypairCreated | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'KeypairFingerprint': value.keypairFingerprint,
        'KeypairName': value.keypairName,
        'PrivateKey': value.privateKey,
    };
}

