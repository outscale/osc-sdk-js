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
/**
 * One or more filters.
 * @export
 * @interface FiltersVmGroup
 */
export interface FiltersVmGroup {
    /**
     * The descriptions of the VM groups.
     * @type {Array<string>}
     * @memberof FiltersVmGroup
     */
    descriptions?: Array<string>;
    /**
     * The IDs of the security groups.
     * @type {Array<string>}
     * @memberof FiltersVmGroup
     */
    securityGroupIds?: Array<string>;
    /**
     * The IDs of the Subnets.
     * @type {Array<string>}
     * @memberof FiltersVmGroup
     */
    subnetIds?: Array<string>;
    /**
     * The keys of the tags associated with the VM groups.
     * @type {Array<string>}
     * @memberof FiltersVmGroup
     */
    tagKeys?: Array<string>;
    /**
     * The values of the tags associated with the VM groups.
     * @type {Array<string>}
     * @memberof FiltersVmGroup
     */
    tagValues?: Array<string>;
    /**
     * The key/value combination of the tags associated with the VMs, in the following format: &quot;Filters&quot;:{&quot;Tags&quot;:[&quot;TAGKEY=TAGVALUE&quot;]}.
     * @type {Array<string>}
     * @memberof FiltersVmGroup
     */
    tags?: Array<string>;
    /**
     * The number of VMs in the VM group.
     * @type {Array<number>}
     * @memberof FiltersVmGroup
     */
    vmCounts?: Array<number>;
    /**
     * The IDs of the VM groups.
     * @type {Array<string>}
     * @memberof FiltersVmGroup
     */
    vmGroupIds?: Array<string>;
    /**
     * The names of the VM groups.
     * @type {Array<string>}
     * @memberof FiltersVmGroup
     */
    vmGroupNames?: Array<string>;
    /**
     * The IDs of the VM templates.
     * @type {Array<string>}
     * @memberof FiltersVmGroup
     */
    vmTemplateIds?: Array<string>;
}
export declare function FiltersVmGroupFromJSON(json: any): FiltersVmGroup;
export declare function FiltersVmGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiltersVmGroup;
export declare function FiltersVmGroupToJSON(value?: FiltersVmGroup | null): any;