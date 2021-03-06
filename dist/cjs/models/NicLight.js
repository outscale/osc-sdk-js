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
exports.NicLightToJSON = exports.NicLightFromJSONTyped = exports.NicLightFromJSON = void 0;
const runtime_1 = require("../runtime");
const LinkNicLight_1 = require("./LinkNicLight");
const LinkPublicIpLightForVm_1 = require("./LinkPublicIpLightForVm");
const PrivateIpLightForVm_1 = require("./PrivateIpLightForVm");
const SecurityGroupLight_1 = require("./SecurityGroupLight");
function NicLightFromJSON(json) {
    return NicLightFromJSONTyped(json, false);
}
exports.NicLightFromJSON = NicLightFromJSON;
function NicLightFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountId': !(0, runtime_1.exists)(json, 'AccountId') ? undefined : json['AccountId'],
        'description': !(0, runtime_1.exists)(json, 'Description') ? undefined : json['Description'],
        'isSourceDestChecked': !(0, runtime_1.exists)(json, 'IsSourceDestChecked') ? undefined : json['IsSourceDestChecked'],
        'linkNic': !(0, runtime_1.exists)(json, 'LinkNic') ? undefined : (0, LinkNicLight_1.LinkNicLightFromJSON)(json['LinkNic']),
        'linkPublicIp': !(0, runtime_1.exists)(json, 'LinkPublicIp') ? undefined : (0, LinkPublicIpLightForVm_1.LinkPublicIpLightForVmFromJSON)(json['LinkPublicIp']),
        'macAddress': !(0, runtime_1.exists)(json, 'MacAddress') ? undefined : json['MacAddress'],
        'netId': !(0, runtime_1.exists)(json, 'NetId') ? undefined : json['NetId'],
        'nicId': !(0, runtime_1.exists)(json, 'NicId') ? undefined : json['NicId'],
        'privateDnsName': !(0, runtime_1.exists)(json, 'PrivateDnsName') ? undefined : json['PrivateDnsName'],
        'privateIps': !(0, runtime_1.exists)(json, 'PrivateIps') ? undefined : (json['PrivateIps'].map(PrivateIpLightForVm_1.PrivateIpLightForVmFromJSON)),
        'securityGroups': !(0, runtime_1.exists)(json, 'SecurityGroups') ? undefined : (json['SecurityGroups'].map(SecurityGroupLight_1.SecurityGroupLightFromJSON)),
        'state': !(0, runtime_1.exists)(json, 'State') ? undefined : json['State'],
        'subnetId': !(0, runtime_1.exists)(json, 'SubnetId') ? undefined : json['SubnetId'],
    };
}
exports.NicLightFromJSONTyped = NicLightFromJSONTyped;
function NicLightToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'AccountId': value.accountId,
        'Description': value.description,
        'IsSourceDestChecked': value.isSourceDestChecked,
        'LinkNic': (0, LinkNicLight_1.LinkNicLightToJSON)(value.linkNic),
        'LinkPublicIp': (0, LinkPublicIpLightForVm_1.LinkPublicIpLightForVmToJSON)(value.linkPublicIp),
        'MacAddress': value.macAddress,
        'NetId': value.netId,
        'NicId': value.nicId,
        'PrivateDnsName': value.privateDnsName,
        'PrivateIps': value.privateIps === undefined ? undefined : (value.privateIps.map(PrivateIpLightForVm_1.PrivateIpLightForVmToJSON)),
        'SecurityGroups': value.securityGroups === undefined ? undefined : (value.securityGroups.map(SecurityGroupLight_1.SecurityGroupLightToJSON)),
        'State': value.state,
        'SubnetId': value.subnetId,
    };
}
exports.NicLightToJSON = NicLightToJSON;
