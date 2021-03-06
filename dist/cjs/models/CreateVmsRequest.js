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
exports.CreateVmsRequestToJSON = exports.CreateVmsRequestFromJSONTyped = exports.CreateVmsRequestFromJSON = exports.CreateVmsRequestPerformanceEnum = void 0;
const runtime_1 = require("../runtime");
const BlockDeviceMappingVmCreation_1 = require("./BlockDeviceMappingVmCreation");
const NicForVmCreation_1 = require("./NicForVmCreation");
const Placement_1 = require("./Placement");
/**
 * @export
 */
exports.CreateVmsRequestPerformanceEnum = {
    Medium: 'medium',
    High: 'high',
    Highest: 'highest'
};
function CreateVmsRequestFromJSON(json) {
    return CreateVmsRequestFromJSONTyped(json, false);
}
exports.CreateVmsRequestFromJSON = CreateVmsRequestFromJSON;
function CreateVmsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockDeviceMappings': !(0, runtime_1.exists)(json, 'BlockDeviceMappings') ? undefined : (json['BlockDeviceMappings'].map(BlockDeviceMappingVmCreation_1.BlockDeviceMappingVmCreationFromJSON)),
        'bootOnCreation': !(0, runtime_1.exists)(json, 'BootOnCreation') ? undefined : json['BootOnCreation'],
        'bsuOptimized': !(0, runtime_1.exists)(json, 'BsuOptimized') ? undefined : json['BsuOptimized'],
        'clientToken': !(0, runtime_1.exists)(json, 'ClientToken') ? undefined : json['ClientToken'],
        'deletionProtection': !(0, runtime_1.exists)(json, 'DeletionProtection') ? undefined : json['DeletionProtection'],
        'dryRun': !(0, runtime_1.exists)(json, 'DryRun') ? undefined : json['DryRun'],
        'imageId': json['ImageId'],
        'keypairName': !(0, runtime_1.exists)(json, 'KeypairName') ? undefined : json['KeypairName'],
        'maxVmsCount': !(0, runtime_1.exists)(json, 'MaxVmsCount') ? undefined : json['MaxVmsCount'],
        'minVmsCount': !(0, runtime_1.exists)(json, 'MinVmsCount') ? undefined : json['MinVmsCount'],
        'nics': !(0, runtime_1.exists)(json, 'Nics') ? undefined : (json['Nics'].map(NicForVmCreation_1.NicForVmCreationFromJSON)),
        'performance': !(0, runtime_1.exists)(json, 'Performance') ? undefined : json['Performance'],
        'placement': !(0, runtime_1.exists)(json, 'Placement') ? undefined : (0, Placement_1.PlacementFromJSON)(json['Placement']),
        'privateIps': !(0, runtime_1.exists)(json, 'PrivateIps') ? undefined : json['PrivateIps'],
        'securityGroupIds': !(0, runtime_1.exists)(json, 'SecurityGroupIds') ? undefined : json['SecurityGroupIds'],
        'securityGroups': !(0, runtime_1.exists)(json, 'SecurityGroups') ? undefined : json['SecurityGroups'],
        'subnetId': !(0, runtime_1.exists)(json, 'SubnetId') ? undefined : json['SubnetId'],
        'userData': !(0, runtime_1.exists)(json, 'UserData') ? undefined : json['UserData'],
        'vmInitiatedShutdownBehavior': !(0, runtime_1.exists)(json, 'VmInitiatedShutdownBehavior') ? undefined : json['VmInitiatedShutdownBehavior'],
        'vmType': !(0, runtime_1.exists)(json, 'VmType') ? undefined : json['VmType'],
    };
}
exports.CreateVmsRequestFromJSONTyped = CreateVmsRequestFromJSONTyped;
function CreateVmsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'BlockDeviceMappings': value.blockDeviceMappings === undefined ? undefined : (value.blockDeviceMappings.map(BlockDeviceMappingVmCreation_1.BlockDeviceMappingVmCreationToJSON)),
        'BootOnCreation': value.bootOnCreation,
        'BsuOptimized': value.bsuOptimized,
        'ClientToken': value.clientToken,
        'DeletionProtection': value.deletionProtection,
        'DryRun': value.dryRun,
        'ImageId': value.imageId,
        'KeypairName': value.keypairName,
        'MaxVmsCount': value.maxVmsCount,
        'MinVmsCount': value.minVmsCount,
        'Nics': value.nics === undefined ? undefined : (value.nics.map(NicForVmCreation_1.NicForVmCreationToJSON)),
        'Performance': value.performance,
        'Placement': (0, Placement_1.PlacementToJSON)(value.placement),
        'PrivateIps': value.privateIps,
        'SecurityGroupIds': value.securityGroupIds,
        'SecurityGroups': value.securityGroups,
        'SubnetId': value.subnetId,
        'UserData': value.userData,
        'VmInitiatedShutdownBehavior': value.vmInitiatedShutdownBehavior,
        'VmType': value.vmType,
    };
}
exports.CreateVmsRequestToJSON = CreateVmsRequestToJSON;
