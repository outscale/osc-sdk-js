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
exports.CreateVmTemplateRequestToJSON = exports.CreateVmTemplateRequestFromJSONTyped = exports.CreateVmTemplateRequestFromJSON = exports.CreateVmTemplateRequestCpuPerformanceEnum = void 0;
const runtime_1 = require("../runtime");
const ResourceTag_1 = require("./ResourceTag");
/**
 * @export
 */
exports.CreateVmTemplateRequestCpuPerformanceEnum = {
    Medium: 'medium',
    High: 'high',
    Highest: 'highest'
};
function CreateVmTemplateRequestFromJSON(json) {
    return CreateVmTemplateRequestFromJSONTyped(json, false);
}
exports.CreateVmTemplateRequestFromJSON = CreateVmTemplateRequestFromJSON;
function CreateVmTemplateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cpuCores': json['CpuCores'],
        'cpuGeneration': json['CpuGeneration'],
        'cpuPerformance': !(0, runtime_1.exists)(json, 'CpuPerformance') ? undefined : json['CpuPerformance'],
        'description': !(0, runtime_1.exists)(json, 'Description') ? undefined : json['Description'],
        'dryRun': !(0, runtime_1.exists)(json, 'DryRun') ? undefined : json['DryRun'],
        'imageId': json['ImageId'],
        'keypairName': !(0, runtime_1.exists)(json, 'KeypairName') ? undefined : json['KeypairName'],
        'ram': json['Ram'],
        'tags': !(0, runtime_1.exists)(json, 'Tags') ? undefined : (json['Tags'].map(ResourceTag_1.ResourceTagFromJSON)),
        'vmTemplateName': json['VmTemplateName'],
    };
}
exports.CreateVmTemplateRequestFromJSONTyped = CreateVmTemplateRequestFromJSONTyped;
function CreateVmTemplateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'CpuCores': value.cpuCores,
        'CpuGeneration': value.cpuGeneration,
        'CpuPerformance': value.cpuPerformance,
        'Description': value.description,
        'DryRun': value.dryRun,
        'ImageId': value.imageId,
        'KeypairName': value.keypairName,
        'Ram': value.ram,
        'Tags': value.tags === undefined ? undefined : (value.tags.map(ResourceTag_1.ResourceTagToJSON)),
        'VmTemplateName': value.vmTemplateName,
    };
}
exports.CreateVmTemplateRequestToJSON = CreateVmTemplateRequestToJSON;