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
exports.FiltersVmGroupToJSON = exports.FiltersVmGroupFromJSONTyped = exports.FiltersVmGroupFromJSON = void 0;
const runtime_1 = require("../runtime");
function FiltersVmGroupFromJSON(json) {
    return FiltersVmGroupFromJSONTyped(json, false);
}
exports.FiltersVmGroupFromJSON = FiltersVmGroupFromJSON;
function FiltersVmGroupFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'descriptions': !(0, runtime_1.exists)(json, 'Descriptions') ? undefined : json['Descriptions'],
        'securityGroupIds': !(0, runtime_1.exists)(json, 'SecurityGroupIds') ? undefined : json['SecurityGroupIds'],
        'subnetIds': !(0, runtime_1.exists)(json, 'SubnetIds') ? undefined : json['SubnetIds'],
        'tagKeys': !(0, runtime_1.exists)(json, 'TagKeys') ? undefined : json['TagKeys'],
        'tagValues': !(0, runtime_1.exists)(json, 'TagValues') ? undefined : json['TagValues'],
        'tags': !(0, runtime_1.exists)(json, 'Tags') ? undefined : json['Tags'],
        'vmCounts': !(0, runtime_1.exists)(json, 'VmCounts') ? undefined : json['VmCounts'],
        'vmGroupIds': !(0, runtime_1.exists)(json, 'VmGroupIds') ? undefined : json['VmGroupIds'],
        'vmGroupNames': !(0, runtime_1.exists)(json, 'VmGroupNames') ? undefined : json['VmGroupNames'],
        'vmTemplateIds': !(0, runtime_1.exists)(json, 'VmTemplateIds') ? undefined : json['VmTemplateIds'],
    };
}
exports.FiltersVmGroupFromJSONTyped = FiltersVmGroupFromJSONTyped;
function FiltersVmGroupToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'Descriptions': value.descriptions,
        'SecurityGroupIds': value.securityGroupIds,
        'SubnetIds': value.subnetIds,
        'TagKeys': value.tagKeys,
        'TagValues': value.tagValues,
        'Tags': value.tags,
        'VmCounts': value.vmCounts,
        'VmGroupIds': value.vmGroupIds,
        'VmGroupNames': value.vmGroupNames,
        'VmTemplateIds': value.vmTemplateIds,
    };
}
exports.FiltersVmGroupToJSON = FiltersVmGroupToJSON;