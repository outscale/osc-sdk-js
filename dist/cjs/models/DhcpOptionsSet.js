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
exports.DhcpOptionsSetToJSON = exports.DhcpOptionsSetFromJSONTyped = exports.DhcpOptionsSetFromJSON = void 0;
const runtime_1 = require("../runtime");
const ResourceTag_1 = require("./ResourceTag");
function DhcpOptionsSetFromJSON(json) {
    return DhcpOptionsSetFromJSONTyped(json, false);
}
exports.DhcpOptionsSetFromJSON = DhcpOptionsSetFromJSON;
function DhcpOptionsSetFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        '_default': !(0, runtime_1.exists)(json, 'Default') ? undefined : json['Default'],
        'dhcpOptionsSetId': !(0, runtime_1.exists)(json, 'DhcpOptionsSetId') ? undefined : json['DhcpOptionsSetId'],
        'domainName': !(0, runtime_1.exists)(json, 'DomainName') ? undefined : json['DomainName'],
        'domainNameServers': !(0, runtime_1.exists)(json, 'DomainNameServers') ? undefined : json['DomainNameServers'],
        'logServers': !(0, runtime_1.exists)(json, 'LogServers') ? undefined : json['LogServers'],
        'ntpServers': !(0, runtime_1.exists)(json, 'NtpServers') ? undefined : json['NtpServers'],
        'tags': !(0, runtime_1.exists)(json, 'Tags') ? undefined : (json['Tags'].map(ResourceTag_1.ResourceTagFromJSON)),
    };
}
exports.DhcpOptionsSetFromJSONTyped = DhcpOptionsSetFromJSONTyped;
function DhcpOptionsSetToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Default': value._default,
        'DhcpOptionsSetId': value.dhcpOptionsSetId,
        'DomainName': value.domainName,
        'DomainNameServers': value.domainNameServers,
        'LogServers': value.logServers,
        'NtpServers': value.ntpServers,
        'Tags': value.tags === undefined ? undefined : (value.tags.map(ResourceTag_1.ResourceTagToJSON)),
    };
}
exports.DhcpOptionsSetToJSON = DhcpOptionsSetToJSON;
