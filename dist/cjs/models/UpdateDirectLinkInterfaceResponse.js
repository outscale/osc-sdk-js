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
exports.UpdateDirectLinkInterfaceResponseToJSON = exports.UpdateDirectLinkInterfaceResponseFromJSONTyped = exports.UpdateDirectLinkInterfaceResponseFromJSON = void 0;
const runtime_1 = require("../runtime");
const DirectLinkInterfaces_1 = require("./DirectLinkInterfaces");
const ModelResponseContext_1 = require("./ModelResponseContext");
function UpdateDirectLinkInterfaceResponseFromJSON(json) {
    return UpdateDirectLinkInterfaceResponseFromJSONTyped(json, false);
}
exports.UpdateDirectLinkInterfaceResponseFromJSON = UpdateDirectLinkInterfaceResponseFromJSON;
function UpdateDirectLinkInterfaceResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'directLinkInterface': !(0, runtime_1.exists)(json, 'DirectLinkInterface') ? undefined : (0, DirectLinkInterfaces_1.DirectLinkInterfacesFromJSON)(json['DirectLinkInterface']),
        'responseContext': !(0, runtime_1.exists)(json, 'ResponseContext') ? undefined : (0, ModelResponseContext_1.ModelResponseContextFromJSON)(json['ResponseContext']),
    };
}
exports.UpdateDirectLinkInterfaceResponseFromJSONTyped = UpdateDirectLinkInterfaceResponseFromJSONTyped;
function UpdateDirectLinkInterfaceResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'DirectLinkInterface': (0, DirectLinkInterfaces_1.DirectLinkInterfacesToJSON)(value.directLinkInterface),
        'ResponseContext': (0, ModelResponseContext_1.ModelResponseContextToJSON)(value.responseContext),
    };
}
exports.UpdateDirectLinkInterfaceResponseToJSON = UpdateDirectLinkInterfaceResponseToJSON;