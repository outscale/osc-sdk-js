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
import { ResourceTag } from './ResourceTag';
/**
 *
 * @export
 * @interface UpdateVmTemplateRequest
 */
export interface UpdateVmTemplateRequest {
    /**
     * A new description for the VM template.
     * @type {string}
     * @memberof UpdateVmTemplateRequest
     */
    description?: string;
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof UpdateVmTemplateRequest
     */
    dryRun?: boolean;
    /**
     * New tags for your VM template.
     * @type {Array<ResourceTag>}
     * @memberof UpdateVmTemplateRequest
     */
    tags?: Array<ResourceTag>;
    /**
     * The ID of the VM template you want to update.
     * @type {string}
     * @memberof UpdateVmTemplateRequest
     */
    vmTemplateId: string;
    /**
     * A new name for your VM template.
     * @type {string}
     * @memberof UpdateVmTemplateRequest
     */
    vmTemplateName?: string;
}
export declare function UpdateVmTemplateRequestFromJSON(json: any): UpdateVmTemplateRequest;
export declare function UpdateVmTemplateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateVmTemplateRequest;
export declare function UpdateVmTemplateRequestToJSON(value?: UpdateVmTemplateRequest | null): any;