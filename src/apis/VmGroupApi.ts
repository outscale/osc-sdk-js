/* tslint:disable */
/* eslint-disable */
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
import {
    CreateVmGroupRequest,
    CreateVmGroupRequestFromJSON,
    CreateVmGroupRequestToJSON,
    CreateVmGroupResponse,
    CreateVmGroupResponseFromJSON,
    CreateVmGroupResponseToJSON,
    DeleteVmGroupRequest,
    DeleteVmGroupRequestFromJSON,
    DeleteVmGroupRequestToJSON,
    DeleteVmGroupResponse,
    DeleteVmGroupResponseFromJSON,
    DeleteVmGroupResponseToJSON,
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    ReadVmGroupsRequest,
    ReadVmGroupsRequestFromJSON,
    ReadVmGroupsRequestToJSON,
    ReadVmGroupsResponse,
    ReadVmGroupsResponseFromJSON,
    ReadVmGroupsResponseToJSON,
    ScaleDownVmGroupRequest,
    ScaleDownVmGroupRequestFromJSON,
    ScaleDownVmGroupRequestToJSON,
    ScaleDownVmGroupResponse,
    ScaleDownVmGroupResponseFromJSON,
    ScaleDownVmGroupResponseToJSON,
    ScaleUpVmGroupRequest,
    ScaleUpVmGroupRequestFromJSON,
    ScaleUpVmGroupRequestToJSON,
    ScaleUpVmGroupResponse,
    ScaleUpVmGroupResponseFromJSON,
    ScaleUpVmGroupResponseToJSON,
    UpdateVmGroupRequest,
    UpdateVmGroupRequestFromJSON,
    UpdateVmGroupRequestToJSON,
    UpdateVmGroupResponse,
    UpdateVmGroupResponseFromJSON,
    UpdateVmGroupResponseToJSON,
} from '../models';

export interface CreateVmGroupOperationRequest {
    createVmGroupRequest?: CreateVmGroupRequest;
}

export interface DeleteVmGroupOperationRequest {
    deleteVmGroupRequest?: DeleteVmGroupRequest;
}

export interface ReadVmGroupsOperationRequest {
    readVmGroupsRequest?: ReadVmGroupsRequest;
}

export interface ScaleDownVmGroupOperationRequest {
    scaleDownVmGroupRequest?: ScaleDownVmGroupRequest;
}

export interface ScaleUpVmGroupOperationRequest {
    scaleUpVmGroupRequest?: ScaleUpVmGroupRequest;
}

export interface UpdateVmGroupOperationRequest {
    updateVmGroupRequest?: UpdateVmGroupRequest;
}

/**
 * VmGroupApi - interface
 * 
 * @export
 * @interface VmGroupApiInterface
 */
export interface VmGroupApiInterface {
    /**
     * > [WARNING]<br /> > This feature is currently under development and may not function properly.<br />  Creates a group of virtual machines (VMs) containing the same characteristics as a specified VM template, and then launches them.<br /> You can create up to 100 VM groups in your account.
     * @param {CreateVmGroupRequest} [createVmGroupRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VmGroupApiInterface
     */
    createVmGroupRaw(requestParameters: CreateVmGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateVmGroupResponse>>;

    /**
     * > [WARNING]<br /> > This feature is currently under development and may not function properly.<br />  Creates a group of virtual machines (VMs) containing the same characteristics as a specified VM template, and then launches them.<br /> You can create up to 100 VM groups in your account.
     */
    createVmGroup(requestParameters: CreateVmGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateVmGroupResponse>;

    /**
     * > [WARNING]<br /> > This feature is currently under development and may not function properly.<br />  Deletes a specified VM group.
     * @param {DeleteVmGroupRequest} [deleteVmGroupRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VmGroupApiInterface
     */
    deleteVmGroupRaw(requestParameters: DeleteVmGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteVmGroupResponse>>;

    /**
     * > [WARNING]<br /> > This feature is currently under development and may not function properly.<br />  Deletes a specified VM group.
     */
    deleteVmGroup(requestParameters: DeleteVmGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteVmGroupResponse>;

    /**
     * > [WARNING]<br /> > This feature is currently under development and may not function properly.<br />  Lists one or more group of virtual machines (VMs).
     * @param {ReadVmGroupsRequest} [readVmGroupsRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VmGroupApiInterface
     */
    readVmGroupsRaw(requestParameters: ReadVmGroupsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadVmGroupsResponse>>;

    /**
     * > [WARNING]<br /> > This feature is currently under development and may not function properly.<br />  Lists one or more group of virtual machines (VMs).
     */
    readVmGroups(requestParameters: ReadVmGroupsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadVmGroupsResponse>;

    /**
     * > [WARNING]<br /> > This feature is currently under development and may not function properly.<br />  Deletes virtual machines (VMs) from a VM group.<br /> The oldest VMs are the first to be deleted.
     * @param {ScaleDownVmGroupRequest} [scaleDownVmGroupRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VmGroupApiInterface
     */
    scaleDownVmGroupRaw(requestParameters: ScaleDownVmGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ScaleDownVmGroupResponse>>;

    /**
     * > [WARNING]<br /> > This feature is currently under development and may not function properly.<br />  Deletes virtual machines (VMs) from a VM group.<br /> The oldest VMs are the first to be deleted.
     */
    scaleDownVmGroup(requestParameters: ScaleDownVmGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ScaleDownVmGroupResponse>;

    /**
     * > [WARNING]<br /> > This feature is currently under development and may not function properly.<br />  Creates additional virtual machines (VMs) in a VM group.<br /> The new VMs use the current version of the VM template.
     * @param {ScaleUpVmGroupRequest} [scaleUpVmGroupRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VmGroupApiInterface
     */
    scaleUpVmGroupRaw(requestParameters: ScaleUpVmGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ScaleUpVmGroupResponse>>;

    /**
     * > [WARNING]<br /> > This feature is currently under development and may not function properly.<br />  Creates additional virtual machines (VMs) in a VM group.<br /> The new VMs use the current version of the VM template.
     */
    scaleUpVmGroup(requestParameters: ScaleUpVmGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ScaleUpVmGroupResponse>;

    /**
     * > [WARNING]<br /> > This feature is currently under development and may not function properly.<br />  Modifies the specified attributes of a group of virtual machines (VMs).
     * @param {UpdateVmGroupRequest} [updateVmGroupRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VmGroupApiInterface
     */
    updateVmGroupRaw(requestParameters: UpdateVmGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateVmGroupResponse>>;

    /**
     * > [WARNING]<br /> > This feature is currently under development and may not function properly.<br />  Modifies the specified attributes of a group of virtual machines (VMs).
     */
    updateVmGroup(requestParameters: UpdateVmGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateVmGroupResponse>;

}

/**
 * 
 */
export class VmGroupApi extends runtime.BaseAPI implements VmGroupApiInterface {

    /**
     * > [WARNING]<br /> > This feature is currently under development and may not function properly.<br />  Creates a group of virtual machines (VMs) containing the same characteristics as a specified VM template, and then launches them.<br /> You can create up to 100 VM groups in your account.
     */
    async createVmGroupRaw(requestParameters: CreateVmGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateVmGroupResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = CreateVmGroupRequestToJSON(requestParameters.createVmGroupRequest);

        const request: runtime.RequestOpts = {
            path: `/CreateVmGroup`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: body,
        }
        if (this.configuration && this.configuration.awsV4SignerParameters) {
            const SignUrl = this.configuration.basePath + request.path;
            const SignBody = JSON.stringify(request.body);
            const signer = new runtime.AwsV4Signer(this.configuration.awsV4SignerParameters);
            const signResult = await signer.sign('POST', SignUrl, headerParameters, SignBody);
            //request.url = signResult.url;
            //request.method = signResult.method;
            request.headers = signResult.headers;
        }
        const response = await this.request(request, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateVmGroupResponseFromJSON(jsonValue));
    }

    /**
     * > [WARNING]<br /> > This feature is currently under development and may not function properly.<br />  Creates a group of virtual machines (VMs) containing the same characteristics as a specified VM template, and then launches them.<br /> You can create up to 100 VM groups in your account.
     */
    async createVmGroup(requestParameters: CreateVmGroupOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateVmGroupResponse> {
        const response = await this.createVmGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * > [WARNING]<br /> > This feature is currently under development and may not function properly.<br />  Deletes a specified VM group.
     */
    async deleteVmGroupRaw(requestParameters: DeleteVmGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteVmGroupResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = DeleteVmGroupRequestToJSON(requestParameters.deleteVmGroupRequest);

        const request: runtime.RequestOpts = {
            path: `/DeleteVmGroup`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: body,
        }
        if (this.configuration && this.configuration.awsV4SignerParameters) {
            const SignUrl = this.configuration.basePath + request.path;
            const SignBody = JSON.stringify(request.body);
            const signer = new runtime.AwsV4Signer(this.configuration.awsV4SignerParameters);
            const signResult = await signer.sign('POST', SignUrl, headerParameters, SignBody);
            //request.url = signResult.url;
            //request.method = signResult.method;
            request.headers = signResult.headers;
        }
        const response = await this.request(request, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteVmGroupResponseFromJSON(jsonValue));
    }

    /**
     * > [WARNING]<br /> > This feature is currently under development and may not function properly.<br />  Deletes a specified VM group.
     */
    async deleteVmGroup(requestParameters: DeleteVmGroupOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteVmGroupResponse> {
        const response = await this.deleteVmGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * > [WARNING]<br /> > This feature is currently under development and may not function properly.<br />  Lists one or more group of virtual machines (VMs).
     */
    async readVmGroupsRaw(requestParameters: ReadVmGroupsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadVmGroupsResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = ReadVmGroupsRequestToJSON(requestParameters.readVmGroupsRequest);

        const request: runtime.RequestOpts = {
            path: `/ReadVmGroups`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: body,
        }
        if (this.configuration && this.configuration.awsV4SignerParameters) {
            const SignUrl = this.configuration.basePath + request.path;
            const SignBody = JSON.stringify(request.body);
            const signer = new runtime.AwsV4Signer(this.configuration.awsV4SignerParameters);
            const signResult = await signer.sign('POST', SignUrl, headerParameters, SignBody);
            //request.url = signResult.url;
            //request.method = signResult.method;
            request.headers = signResult.headers;
        }
        const response = await this.request(request, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReadVmGroupsResponseFromJSON(jsonValue));
    }

    /**
     * > [WARNING]<br /> > This feature is currently under development and may not function properly.<br />  Lists one or more group of virtual machines (VMs).
     */
    async readVmGroups(requestParameters: ReadVmGroupsOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadVmGroupsResponse> {
        const response = await this.readVmGroupsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * > [WARNING]<br /> > This feature is currently under development and may not function properly.<br />  Deletes virtual machines (VMs) from a VM group.<br /> The oldest VMs are the first to be deleted.
     */
    async scaleDownVmGroupRaw(requestParameters: ScaleDownVmGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ScaleDownVmGroupResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = ScaleDownVmGroupRequestToJSON(requestParameters.scaleDownVmGroupRequest);

        const request: runtime.RequestOpts = {
            path: `/ScaleDownVmGroup`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: body,
        }
        if (this.configuration && this.configuration.awsV4SignerParameters) {
            const SignUrl = this.configuration.basePath + request.path;
            const SignBody = JSON.stringify(request.body);
            const signer = new runtime.AwsV4Signer(this.configuration.awsV4SignerParameters);
            const signResult = await signer.sign('POST', SignUrl, headerParameters, SignBody);
            //request.url = signResult.url;
            //request.method = signResult.method;
            request.headers = signResult.headers;
        }
        const response = await this.request(request, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScaleDownVmGroupResponseFromJSON(jsonValue));
    }

    /**
     * > [WARNING]<br /> > This feature is currently under development and may not function properly.<br />  Deletes virtual machines (VMs) from a VM group.<br /> The oldest VMs are the first to be deleted.
     */
    async scaleDownVmGroup(requestParameters: ScaleDownVmGroupOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ScaleDownVmGroupResponse> {
        const response = await this.scaleDownVmGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * > [WARNING]<br /> > This feature is currently under development and may not function properly.<br />  Creates additional virtual machines (VMs) in a VM group.<br /> The new VMs use the current version of the VM template.
     */
    async scaleUpVmGroupRaw(requestParameters: ScaleUpVmGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ScaleUpVmGroupResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = ScaleUpVmGroupRequestToJSON(requestParameters.scaleUpVmGroupRequest);

        const request: runtime.RequestOpts = {
            path: `/ScaleUpVmGroup`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: body,
        }
        if (this.configuration && this.configuration.awsV4SignerParameters) {
            const SignUrl = this.configuration.basePath + request.path;
            const SignBody = JSON.stringify(request.body);
            const signer = new runtime.AwsV4Signer(this.configuration.awsV4SignerParameters);
            const signResult = await signer.sign('POST', SignUrl, headerParameters, SignBody);
            //request.url = signResult.url;
            //request.method = signResult.method;
            request.headers = signResult.headers;
        }
        const response = await this.request(request, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScaleUpVmGroupResponseFromJSON(jsonValue));
    }

    /**
     * > [WARNING]<br /> > This feature is currently under development and may not function properly.<br />  Creates additional virtual machines (VMs) in a VM group.<br /> The new VMs use the current version of the VM template.
     */
    async scaleUpVmGroup(requestParameters: ScaleUpVmGroupOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ScaleUpVmGroupResponse> {
        const response = await this.scaleUpVmGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * > [WARNING]<br /> > This feature is currently under development and may not function properly.<br />  Modifies the specified attributes of a group of virtual machines (VMs).
     */
    async updateVmGroupRaw(requestParameters: UpdateVmGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateVmGroupResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = UpdateVmGroupRequestToJSON(requestParameters.updateVmGroupRequest);

        const request: runtime.RequestOpts = {
            path: `/UpdateVmGroup`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: body,
        }
        if (this.configuration && this.configuration.awsV4SignerParameters) {
            const SignUrl = this.configuration.basePath + request.path;
            const SignBody = JSON.stringify(request.body);
            const signer = new runtime.AwsV4Signer(this.configuration.awsV4SignerParameters);
            const signResult = await signer.sign('POST', SignUrl, headerParameters, SignBody);
            //request.url = signResult.url;
            //request.method = signResult.method;
            request.headers = signResult.headers;
        }
        const response = await this.request(request, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateVmGroupResponseFromJSON(jsonValue));
    }

    /**
     * > [WARNING]<br /> > This feature is currently under development and may not function properly.<br />  Modifies the specified attributes of a group of virtual machines (VMs).
     */
    async updateVmGroup(requestParameters: UpdateVmGroupOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateVmGroupResponse> {
        const response = await this.updateVmGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
