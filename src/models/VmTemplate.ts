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

import { exists, mapValues } from '../runtime';
import {
    ResourceTag,
    ResourceTagFromJSON,
    ResourceTagFromJSONTyped,
    ResourceTagToJSON,
} from './ResourceTag';

/**
 * Information about the VM template.
 * @export
 * @interface VmTemplate
 */
export interface VmTemplate {
    /**
     * The number of vCores.
     * @type {number}
     * @memberof VmTemplate
     */
    cpuCores: number;
    /**
     * The processor generation.
     * @type {string}
     * @memberof VmTemplate
     */
    cpuGeneration: string;
    /**
     * The performance of the VMs.
     * @type {string}
     * @memberof VmTemplate
     */
    cpuPerformance?: VmTemplateCpuPerformanceEnum;
    /**
     * The date and time of creation of the VM template.
     * @type {Date}
     * @memberof VmTemplate
     */
    creationDate?: Date;
    /**
     * The description of the VM template.
     * @type {string}
     * @memberof VmTemplate
     */
    description?: string;
    /**
     * The ID of the OMI.
     * @type {string}
     * @memberof VmTemplate
     */
    imageId: string;
    /**
     * The name of the keypair.
     * @type {string}
     * @memberof VmTemplate
     */
    keypairName?: string;
    /**
     * The amount of RAM.
     * @type {number}
     * @memberof VmTemplate
     */
    ram: number;
    /**
     * One or more tags associated with the VM template.
     * @type {Array<ResourceTag>}
     * @memberof VmTemplate
     */
    tags?: Array<ResourceTag>;
    /**
     * The ID of the VM template.
     * @type {string}
     * @memberof VmTemplate
     */
    vmTemplateId: string;
    /**
     * The name of the VM template.
     * @type {string}
     * @memberof VmTemplate
     */
    vmTemplateName: string;
}


/**
 * @export
 */
export const VmTemplateCpuPerformanceEnum = {
    Medium: 'medium',
    High: 'high',
    Highest: 'highest'
} as const;
export type VmTemplateCpuPerformanceEnum = typeof VmTemplateCpuPerformanceEnum[keyof typeof VmTemplateCpuPerformanceEnum];


export function VmTemplateFromJSON(json: any): VmTemplate {
    return VmTemplateFromJSONTyped(json, false);
}

export function VmTemplateFromJSONTyped(json: any, ignoreDiscriminator: boolean): VmTemplate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cpuCores': json['CpuCores'],
        'cpuGeneration': json['CpuGeneration'],
        'cpuPerformance': !exists(json, 'CpuPerformance') ? undefined : json['CpuPerformance'],
        'creationDate': !exists(json, 'CreationDate') ? undefined : (new Date(json['CreationDate'])),
        'description': !exists(json, 'Description') ? undefined : json['Description'],
        'imageId': json['ImageId'],
        'keypairName': !exists(json, 'KeypairName') ? undefined : json['KeypairName'],
        'ram': json['Ram'],
        'tags': !exists(json, 'Tags') ? undefined : ((json['Tags'] as Array<any>).map(ResourceTagFromJSON)),
        'vmTemplateId': json['VmTemplateId'],
        'vmTemplateName': json['VmTemplateName'],
    };
}

export function VmTemplateToJSON(value?: VmTemplate | null): any {
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
        'CreationDate': value.creationDate === undefined ? undefined : (value.creationDate.toISOString()),
        'Description': value.description,
        'ImageId': value.imageId,
        'KeypairName': value.keypairName,
        'Ram': value.ram,
        'Tags': value.tags === undefined ? undefined : ((value.tags as Array<any>).map(ResourceTagToJSON)),
        'VmTemplateId': value.vmTemplateId,
        'VmTemplateName': value.vmTemplateName,
    };
}
