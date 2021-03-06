"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicIpToJSON = exports.PublicIpFromJSONTyped = exports.PublicIpFromJSON = void 0;
const runtime_1 = require("../runtime");
const ResourceTag_1 = require("./ResourceTag");
function PublicIpFromJSON(json) {
    return PublicIpFromJSONTyped(json, false);
}
exports.PublicIpFromJSON = PublicIpFromJSON;
function PublicIpFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'linkPublicIpId': !(0, runtime_1.exists)(json, 'LinkPublicIpId') ? undefined : json['LinkPublicIpId'],
        'nicAccountId': !(0, runtime_1.exists)(json, 'NicAccountId') ? undefined : json['NicAccountId'],
        'nicId': !(0, runtime_1.exists)(json, 'NicId') ? undefined : json['NicId'],
        'privateIp': !(0, runtime_1.exists)(json, 'PrivateIp') ? undefined : json['PrivateIp'],
        'publicIp': !(0, runtime_1.exists)(json, 'PublicIp') ? undefined : json['PublicIp'],
        'publicIpId': !(0, runtime_1.exists)(json, 'PublicIpId') ? undefined : json['PublicIpId'],
        'tags': !(0, runtime_1.exists)(json, 'Tags') ? undefined : (json['Tags'].map(ResourceTag_1.ResourceTagFromJSON)),
        'vmId': !(0, runtime_1.exists)(json, 'VmId') ? undefined : json['VmId'],
    };
}
exports.PublicIpFromJSONTyped = PublicIpFromJSONTyped;
function PublicIpToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'LinkPublicIpId': value.linkPublicIpId,
        'NicAccountId': value.nicAccountId,
        'NicId': value.nicId,
        'PrivateIp': value.privateIp,
        'PublicIp': value.publicIp,
        'PublicIpId': value.publicIpId,
        'Tags': value.tags === undefined ? undefined : (value.tags.map(ResourceTag_1.ResourceTagToJSON)),
        'VmId': value.vmId,
    };
}
exports.PublicIpToJSON = PublicIpToJSON;
