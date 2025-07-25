/**
 * 3DS OUTSCALE API
 * Welcome to the OUTSCALE API documentation.<br /> The OUTSCALE API enables you to manage your resources in the OUTSCALE Cloud. This documentation describes the different actions available along with code examples.<br /><br /> Throttling: To protect against overloads, the number of identical requests allowed in a given time period is limited.<br /> Brute force: To protect against brute force attacks, the number of failed authentication attempts in a given time period is limited.<br /><br /> Note that the OUTSCALE Cloud is compatible with Amazon Web Services (AWS) APIs, but there are [differences in resource names](https://docs.outscale.com/en/userguide/About-the-APIs.html) between AWS and the OUTSCALE API.<br /> You can also manage your resources using the [Cockpit](https://docs.outscale.com/en/userguide/About-Cockpit.html) web interface.<br /><br /> An OpenAPI description of the OUTSCALE API is also available in this [GitHub repository](https://github.com/outscale/osc-api).<br /> # Authentication Schemes ### Access Key/Secret Key The main way to authenticate your requests to the OUTSCALE API is to use an access key and a secret key.<br /> The mechanism behind this is based on AWS Signature Version 4, whose technical implementation details are described in [Signature of API Requests](https://docs.outscale.com/en/userguide/Signature-of-API-Requests.html).<br /><br /> In practice, the way to specify your access key and secret key depends on the tool or SDK you want to use to interact with the API.<br />  > For example, if you use OSC CLI: > 1. You need to create an **~/.osc/config.json** file to specify your access key, secret key, and the Region of your account. > 2. You then specify the `--profile` option when executing OSC CLI commands. > > For more information, see [Installing and Configuring OSC CLI](https://docs.outscale.com/en/userguide/Installing-and-Configuring-OSC-CLI.html).  See the code samples in each section of this documentation for specific examples in different programming languages.<br /> For more information about access keys, see [About Access Keys](https://docs.outscale.com/en/userguide/About-Access-Keys.html).  > If you try to sign requests with an invalid access key four times in a row, further authentication attempts will be prevented for 1 minute. This lockout time increases 1 minute every four failed attempts, for up to 10 minutes.  ### Login/Password For certain API actions, you can also use basic authentication with the login (email address) and password of your TINA account.<br /> This is useful only in special circumstances, for example if you do not know your access key/secret key and want to retrieve them programmatically.<br /> In most cases, however, you can use the Cockpit web interface to retrieve them.<br />  > For example, if you use OSC CLI: > 1. You need to create an **~/.osc/config.json** file to specify the Region of your account, but you leave the access key value and secret key value empty (`&quot;&quot;`). > 2. You then specify the `--profile`, `--authentication-method`, `--login`, and `--password` options when executing OSC CLI commands.  See the code samples in each section of this documentation for specific examples in different programming languages.  > If you try to sign requests with an invalid password four times in a row, further authentication attempts will be prevented for 1 minute. This lockout time increases 1 minute every four failed attempts, for up to 10 minutes.  ### No Authentication A few API actions do not require any authentication. They are indicated as such in this documentation.<br /> ### Other Security Mechanisms In parallel with the authentication schemes, you can add other security mechanisms to your OUTSCALE account, for example to restrict API requests by IP or other criteria.<br /> For more information, see [Managing Your API Accesses](https://docs.outscale.com/en/userguide/Managing-Your-API-Accesses.html). # Pagination Tutorial You can learn more about the pagination methods for read calls in the dedicated [pagination tutorial](https://docs.outscale.com/en/userguide/Tutorial-Paginating-an-API-Request.html). # Error Codes Reference You can learn more about errors returned by the API in the dedicated [errors page](api-errors.html).
 *
 * The version of the OpenAPI document: 1.35.4
 * Contact: support@outscale.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import { CreateSecurityGroupRequest, CreateSecurityGroupResponse, DeleteSecurityGroupRequest, DeleteSecurityGroupResponse, ReadSecurityGroupsRequest, ReadSecurityGroupsResponse } from '../models';
export interface CreateSecurityGroupOperationRequest {
    createSecurityGroupRequest?: CreateSecurityGroupRequest;
}
export interface DeleteSecurityGroupOperationRequest {
    deleteSecurityGroupRequest?: DeleteSecurityGroupRequest;
}
export interface ReadSecurityGroupsOperationRequest {
    readSecurityGroupsRequest?: ReadSecurityGroupsRequest;
}
/**
 * SecurityGroupApi - interface
 *
 * @export
 * @interface SecurityGroupApiInterface
 */
export interface SecurityGroupApiInterface {
    /**
     * Creates a security group.<br /> This action creates a security group either in the public Cloud or in a specified Net. By default, a default security group for use in the public Cloud and a default security group for use in a Net are created.<br /> When launching a virtual machine (VM), if no security group is explicitly specified, the appropriate default security group is assigned to the VM. Default security groups include a default rule granting VMs network access to each other.<br /> When creating a security group, you specify a name. Two security groups for use in the public Cloud or for use in a Net cannot have the same name.<br /> You can have up to 500 security groups in the public Cloud. You can create up to 500 security groups per Net.<br /> To add or remove rules, use the [CreateSecurityGroupRule](#createsecuritygrouprule) method.<br /><br /> For more information, see [About Security Groups](https://docs.outscale.com/en/userguide/About-Security-Groups.html).
     * @param {CreateSecurityGroupRequest} [createSecurityGroupRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityGroupApiInterface
     */
    createSecurityGroupRaw(requestParameters: CreateSecurityGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateSecurityGroupResponse>>;
    /**
     * Creates a security group.<br /> This action creates a security group either in the public Cloud or in a specified Net. By default, a default security group for use in the public Cloud and a default security group for use in a Net are created.<br /> When launching a virtual machine (VM), if no security group is explicitly specified, the appropriate default security group is assigned to the VM. Default security groups include a default rule granting VMs network access to each other.<br /> When creating a security group, you specify a name. Two security groups for use in the public Cloud or for use in a Net cannot have the same name.<br /> You can have up to 500 security groups in the public Cloud. You can create up to 500 security groups per Net.<br /> To add or remove rules, use the [CreateSecurityGroupRule](#createsecuritygrouprule) method.<br /><br /> For more information, see [About Security Groups](https://docs.outscale.com/en/userguide/About-Security-Groups.html).
     */
    createSecurityGroup(requestParameters: CreateSecurityGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateSecurityGroupResponse>;
    /**
     * Deletes a specified security group.<br /> You can specify either the name of the security group or its ID.<br /> This action fails if the specified group is associated with a virtual machine (VM) or referenced by another security group.
     * @param {DeleteSecurityGroupRequest} [deleteSecurityGroupRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityGroupApiInterface
     */
    deleteSecurityGroupRaw(requestParameters: DeleteSecurityGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteSecurityGroupResponse>>;
    /**
     * Deletes a specified security group.<br /> You can specify either the name of the security group or its ID.<br /> This action fails if the specified group is associated with a virtual machine (VM) or referenced by another security group.
     */
    deleteSecurityGroup(requestParameters: DeleteSecurityGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteSecurityGroupResponse>;
    /**
     * Lists one or more security groups.<br /> You can specify either the name of the security groups or their IDs.
     * @param {ReadSecurityGroupsRequest} [readSecurityGroupsRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityGroupApiInterface
     */
    readSecurityGroupsRaw(requestParameters: ReadSecurityGroupsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadSecurityGroupsResponse>>;
    /**
     * Lists one or more security groups.<br /> You can specify either the name of the security groups or their IDs.
     */
    readSecurityGroups(requestParameters: ReadSecurityGroupsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadSecurityGroupsResponse>;
}
/**
 *
 */
export declare class SecurityGroupApi extends runtime.BaseAPI implements SecurityGroupApiInterface {
    /**
     * Creates a security group.<br /> This action creates a security group either in the public Cloud or in a specified Net. By default, a default security group for use in the public Cloud and a default security group for use in a Net are created.<br /> When launching a virtual machine (VM), if no security group is explicitly specified, the appropriate default security group is assigned to the VM. Default security groups include a default rule granting VMs network access to each other.<br /> When creating a security group, you specify a name. Two security groups for use in the public Cloud or for use in a Net cannot have the same name.<br /> You can have up to 500 security groups in the public Cloud. You can create up to 500 security groups per Net.<br /> To add or remove rules, use the [CreateSecurityGroupRule](#createsecuritygrouprule) method.<br /><br /> For more information, see [About Security Groups](https://docs.outscale.com/en/userguide/About-Security-Groups.html).
     */
    createSecurityGroupRaw(requestParameters: CreateSecurityGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateSecurityGroupResponse>>;
    /**
     * Creates a security group.<br /> This action creates a security group either in the public Cloud or in a specified Net. By default, a default security group for use in the public Cloud and a default security group for use in a Net are created.<br /> When launching a virtual machine (VM), if no security group is explicitly specified, the appropriate default security group is assigned to the VM. Default security groups include a default rule granting VMs network access to each other.<br /> When creating a security group, you specify a name. Two security groups for use in the public Cloud or for use in a Net cannot have the same name.<br /> You can have up to 500 security groups in the public Cloud. You can create up to 500 security groups per Net.<br /> To add or remove rules, use the [CreateSecurityGroupRule](#createsecuritygrouprule) method.<br /><br /> For more information, see [About Security Groups](https://docs.outscale.com/en/userguide/About-Security-Groups.html).
     */
    createSecurityGroup(requestParameters?: CreateSecurityGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateSecurityGroupResponse>;
    /**
     * Deletes a specified security group.<br /> You can specify either the name of the security group or its ID.<br /> This action fails if the specified group is associated with a virtual machine (VM) or referenced by another security group.
     */
    deleteSecurityGroupRaw(requestParameters: DeleteSecurityGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteSecurityGroupResponse>>;
    /**
     * Deletes a specified security group.<br /> You can specify either the name of the security group or its ID.<br /> This action fails if the specified group is associated with a virtual machine (VM) or referenced by another security group.
     */
    deleteSecurityGroup(requestParameters?: DeleteSecurityGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteSecurityGroupResponse>;
    /**
     * Lists one or more security groups.<br /> You can specify either the name of the security groups or their IDs.
     */
    readSecurityGroupsRaw(requestParameters: ReadSecurityGroupsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadSecurityGroupsResponse>>;
    /**
     * Lists one or more security groups.<br /> You can specify either the name of the security groups or their IDs.
     */
    readSecurityGroups(requestParameters?: ReadSecurityGroupsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadSecurityGroupsResponse>;
}
