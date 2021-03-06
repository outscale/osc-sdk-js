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
exports.ServiceToJSON = exports.ServiceFromJSONTyped = exports.ServiceFromJSON = void 0;
const runtime_1 = require("../runtime");
function ServiceFromJSON(json) {
    return ServiceFromJSONTyped(json, false);
}
exports.ServiceFromJSON = ServiceFromJSON;
function ServiceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'ipRanges': !(0, runtime_1.exists)(json, 'IpRanges') ? undefined : json['IpRanges'],
        'serviceId': !(0, runtime_1.exists)(json, 'ServiceId') ? undefined : json['ServiceId'],
        'serviceName': !(0, runtime_1.exists)(json, 'ServiceName') ? undefined : json['ServiceName'],
    };
}
exports.ServiceFromJSONTyped = ServiceFromJSONTyped;
function ServiceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'IpRanges': value.ipRanges,
        'ServiceId': value.serviceId,
        'ServiceName': value.serviceName,
    };
}
exports.ServiceToJSON = ServiceToJSON;
