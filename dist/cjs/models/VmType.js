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
exports.VmTypeToJSON = exports.VmTypeFromJSONTyped = exports.VmTypeFromJSON = void 0;
const runtime_1 = require("../runtime");
function VmTypeFromJSON(json) {
    return VmTypeFromJSONTyped(json, false);
}
exports.VmTypeFromJSON = VmTypeFromJSON;
function VmTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bsuOptimized': !(0, runtime_1.exists)(json, 'BsuOptimized') ? undefined : json['BsuOptimized'],
        'maxPrivateIps': !(0, runtime_1.exists)(json, 'MaxPrivateIps') ? undefined : json['MaxPrivateIps'],
        'memorySize': !(0, runtime_1.exists)(json, 'MemorySize') ? undefined : json['MemorySize'],
        'vcoreCount': !(0, runtime_1.exists)(json, 'VcoreCount') ? undefined : json['VcoreCount'],
        'vmTypeName': !(0, runtime_1.exists)(json, 'VmTypeName') ? undefined : json['VmTypeName'],
        'volumeCount': !(0, runtime_1.exists)(json, 'VolumeCount') ? undefined : json['VolumeCount'],
        'volumeSize': !(0, runtime_1.exists)(json, 'VolumeSize') ? undefined : json['VolumeSize'],
    };
}
exports.VmTypeFromJSONTyped = VmTypeFromJSONTyped;
function VmTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'BsuOptimized': value.bsuOptimized,
        'MaxPrivateIps': value.maxPrivateIps,
        'MemorySize': value.memorySize,
        'VcoreCount': value.vcoreCount,
        'VmTypeName': value.vmTypeName,
        'VolumeCount': value.volumeCount,
        'VolumeSize': value.volumeSize,
    };
}
exports.VmTypeToJSON = VmTypeToJSON;
