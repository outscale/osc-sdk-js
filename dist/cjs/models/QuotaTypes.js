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
exports.QuotaTypesToJSON = exports.QuotaTypesFromJSONTyped = exports.QuotaTypesFromJSON = void 0;
const runtime_1 = require("../runtime");
const Quota_1 = require("./Quota");
function QuotaTypesFromJSON(json) {
    return QuotaTypesFromJSONTyped(json, false);
}
exports.QuotaTypesFromJSON = QuotaTypesFromJSON;
function QuotaTypesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'quotaType': !(0, runtime_1.exists)(json, 'QuotaType') ? undefined : json['QuotaType'],
        'quotas': !(0, runtime_1.exists)(json, 'Quotas') ? undefined : (json['Quotas'].map(Quota_1.QuotaFromJSON)),
    };
}
exports.QuotaTypesFromJSONTyped = QuotaTypesFromJSONTyped;
function QuotaTypesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'QuotaType': value.quotaType,
        'Quotas': value.quotas === undefined ? undefined : (value.quotas.map(Quota_1.QuotaToJSON)),
    };
}
exports.QuotaTypesToJSON = QuotaTypesToJSON;
