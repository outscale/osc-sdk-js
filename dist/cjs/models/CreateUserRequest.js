"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * 3DS OUTSCALE API
 * Welcome to the OUTSCALE API documentation.<br /> The OUTSCALE API enables you to manage your resources in the OUTSCALE Cloud. This documentation describes the different actions available along with code examples.<br /><br /> You can learn more about errors returned by the API in the dedicated [errors page](api/errors).<br /><br /> Note that the OUTSCALE Cloud is compatible with Amazon Web Services (AWS) APIs, but there are [differences in resource names](https://docs.outscale.com/en/userguide/OUTSCALE-APIs-Reference.html) between AWS and the OUTSCALE API.<br /> You can also manage your resources using the [Cockpit](https://docs.outscale.com/en/userguide/About-Cockpit.html) web interface.<br /><br /> An OpenAPI description of the OUTSCALE API is also available in this [GitHub repository](https://github.com/outscale/osc-api).
 *
 * The version of the OpenAPI document: 1.27
 * Contact: support@outscale.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserRequestToJSON = exports.CreateUserRequestFromJSONTyped = exports.CreateUserRequestFromJSON = void 0;
const runtime_1 = require("../runtime");
function CreateUserRequestFromJSON(json) {
    return CreateUserRequestFromJSONTyped(json, false);
}
exports.CreateUserRequestFromJSON = CreateUserRequestFromJSON;
function CreateUserRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dryRun': !(0, runtime_1.exists)(json, 'DryRun') ? undefined : json['DryRun'],
        'path': !(0, runtime_1.exists)(json, 'Path') ? undefined : json['Path'],
        'userName': json['UserName'],
    };
}
exports.CreateUserRequestFromJSONTyped = CreateUserRequestFromJSONTyped;
function CreateUserRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'DryRun': value.dryRun,
        'Path': value.path,
        'UserName': value.userName,
    };
}
exports.CreateUserRequestToJSON = CreateUserRequestToJSON;