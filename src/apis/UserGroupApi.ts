/* tslint:disable */
/* eslint-disable */
/**
 * 3DS OUTSCALE API
 * Welcome to the OUTSCALE API documentation.<br /> The OUTSCALE API enables you to manage your resources in the OUTSCALE Cloud. This documentation describes the different actions available along with code examples.<br /><br /> Throttling: To protect against overloads, the number of identical requests allowed in a given time period is limited.<br /> Brute force: To protect against brute force attacks, the number of failed authentication attempts in a given time period is limited.<br /><br /> Note that the OUTSCALE Cloud is compatible with Amazon Web Services (AWS) APIs, but there are [differences in resource names](https://docs.outscale.com/en/userguide/About-the-APIs.html) between AWS and the OUTSCALE API.<br /> You can also manage your resources using the [Cockpit](https://docs.outscale.com/en/userguide/About-Cockpit.html) web interface.<br /><br /> An OpenAPI description of the OUTSCALE API is also available in this [GitHub repository](https://github.com/outscale/osc-api).<br /> # Authentication Schemes ### Access Key/Secret Key The main way to authenticate your requests to the OUTSCALE API is to use an access key and a secret key.<br /> The mechanism behind this is based on AWS Signature Version 4, whose technical implementation details are described in [Signature of API Requests](https://docs.outscale.com/en/userguide/Signature-of-API-Requests.html).<br /><br /> In practice, the way to specify your access key and secret key depends on the tool or SDK you want to use to interact with the API.<br />  > For example, if you use OSC CLI: > 1. You need to create an **~/.osc/config.json** file to specify your access key, secret key, and the Region of your account. > 2. You then specify the `--profile` option when executing OSC CLI commands. >  > For more information, see [Installing and Configuring OSC CLI](https://docs.outscale.com/en/userguide/Installing-and-Configuring-OSC-CLI.html).  See the code samples in each section of this documentation for specific examples in different programming languages.<br /> For more information about access keys, see [About Access Keys](https://docs.outscale.com/en/userguide/About-Access-Keys.html).  > If you try to sign requests with an invalid access key four times in a row, further authentication attempts will be prevented for 1 minute. This lockout time increases 1 minute every four failed attempts, for up to 10 minutes.  ### Login/Password For certain API actions, you can also use basic authentication with the login (email address) and password of your TINA account.<br /> This is useful only in special circumstances, for example if you do not know your access key/secret key and want to retrieve them programmatically.<br /> In most cases, however, you can use the Cockpit web interface to retrieve them.<br />  > For example, if you use OSC CLI: > 1. You need to create an **~/.osc/config.json** file to specify the Region of your account, but you leave the access key value and secret key value empty (`&quot;&quot;`). > 2. You then specify the `--profile`, `--authentication-method`, `--login`, and `--password` options when executing OSC CLI commands.  See the code samples in each section of this documentation for specific examples in different programming languages.  > If you try to sign requests with an invalid password four times in a row, further authentication attempts will be prevented for 1 minute. This lockout time increases 1 minute every four failed attempts, for up to 10 minutes.  ### No Authentication A few API actions do not require any authentication. They are indicated as such in this documentation.<br /> ### Other Security Mechanisms In parallel with the authentication schemes, you can add other security mechanisms to your OUTSCALE account, for example to restrict API requests by IP or other criteria.<br /> For more information, see [Managing Your API Accesses](https://docs.outscale.com/en/userguide/Managing-Your-API-Accesses.html). # Pagination Tutorial You can learn more about the pagination methods for read calls in the dedicated [pagination tutorial](https://docs.outscale.com/en/userguide/Tutorial-Paginating-an-API-Request.html). # Error Codes Reference You can learn more about errors returned by the API in the dedicated [errors page](api-errors.html).
 *
 * The version of the OpenAPI document: 1.33.1
 * Contact: support@outscale.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    AddUserToUserGroupRequest,
    AddUserToUserGroupRequestFromJSON,
    AddUserToUserGroupRequestToJSON,
    AddUserToUserGroupResponse,
    AddUserToUserGroupResponseFromJSON,
    AddUserToUserGroupResponseToJSON,
    CreateUserGroupRequest,
    CreateUserGroupRequestFromJSON,
    CreateUserGroupRequestToJSON,
    CreateUserGroupResponse,
    CreateUserGroupResponseFromJSON,
    CreateUserGroupResponseToJSON,
    DeleteUserGroupRequest,
    DeleteUserGroupRequestFromJSON,
    DeleteUserGroupRequestToJSON,
    DeleteUserGroupResponse,
    DeleteUserGroupResponseFromJSON,
    DeleteUserGroupResponseToJSON,
    ReadUserGroupRequest,
    ReadUserGroupRequestFromJSON,
    ReadUserGroupRequestToJSON,
    ReadUserGroupResponse,
    ReadUserGroupResponseFromJSON,
    ReadUserGroupResponseToJSON,
    ReadUserGroupsPerUserRequest,
    ReadUserGroupsPerUserRequestFromJSON,
    ReadUserGroupsPerUserRequestToJSON,
    ReadUserGroupsPerUserResponse,
    ReadUserGroupsPerUserResponseFromJSON,
    ReadUserGroupsPerUserResponseToJSON,
    ReadUserGroupsRequest,
    ReadUserGroupsRequestFromJSON,
    ReadUserGroupsRequestToJSON,
    ReadUserGroupsResponse,
    ReadUserGroupsResponseFromJSON,
    ReadUserGroupsResponseToJSON,
    RemoveUserFromUserGroupRequest,
    RemoveUserFromUserGroupRequestFromJSON,
    RemoveUserFromUserGroupRequestToJSON,
    RemoveUserFromUserGroupResponse,
    RemoveUserFromUserGroupResponseFromJSON,
    RemoveUserFromUserGroupResponseToJSON,
    UpdateUserGroupRequest,
    UpdateUserGroupRequestFromJSON,
    UpdateUserGroupRequestToJSON,
    UpdateUserGroupResponse,
    UpdateUserGroupResponseFromJSON,
    UpdateUserGroupResponseToJSON,
} from '../models';

export interface AddUserToUserGroupOperationRequest {
    addUserToUserGroupRequest?: AddUserToUserGroupRequest;
}

export interface CreateUserGroupOperationRequest {
    createUserGroupRequest?: CreateUserGroupRequest;
}

export interface DeleteUserGroupOperationRequest {
    deleteUserGroupRequest?: DeleteUserGroupRequest;
}

export interface ReadUserGroupOperationRequest {
    readUserGroupRequest?: ReadUserGroupRequest;
}

export interface ReadUserGroupsOperationRequest {
    readUserGroupsRequest?: ReadUserGroupsRequest;
}

export interface ReadUserGroupsPerUserOperationRequest {
    readUserGroupsPerUserRequest?: ReadUserGroupsPerUserRequest;
}

export interface RemoveUserFromUserGroupOperationRequest {
    removeUserFromUserGroupRequest?: RemoveUserFromUserGroupRequest;
}

export interface UpdateUserGroupOperationRequest {
    updateUserGroupRequest?: UpdateUserGroupRequest;
}

/**
 * UserGroupApi - interface
 * 
 * @export
 * @interface UserGroupApiInterface
 */
export interface UserGroupApiInterface {
    /**
     * 
     * @param {AddUserToUserGroupRequest} [addUserToUserGroupRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserGroupApiInterface
     */
    addUserToUserGroupRaw(requestParameters: AddUserToUserGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<AddUserToUserGroupResponse>>;

    /**
     */
    addUserToUserGroup(requestParameters: AddUserToUserGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<AddUserToUserGroupResponse>;

    /**
     * 
     * @param {CreateUserGroupRequest} [createUserGroupRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserGroupApiInterface
     */
    createUserGroupRaw(requestParameters: CreateUserGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateUserGroupResponse>>;

    /**
     */
    createUserGroup(requestParameters: CreateUserGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateUserGroupResponse>;

    /**
     * 
     * @param {DeleteUserGroupRequest} [deleteUserGroupRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserGroupApiInterface
     */
    deleteUserGroupRaw(requestParameters: DeleteUserGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteUserGroupResponse>>;

    /**
     */
    deleteUserGroup(requestParameters: DeleteUserGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteUserGroupResponse>;

    /**
     * 
     * @param {ReadUserGroupRequest} [readUserGroupRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserGroupApiInterface
     */
    readUserGroupRaw(requestParameters: ReadUserGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadUserGroupResponse>>;

    /**
     */
    readUserGroup(requestParameters: ReadUserGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadUserGroupResponse>;

    /**
     * 
     * @param {ReadUserGroupsRequest} [readUserGroupsRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserGroupApiInterface
     */
    readUserGroupsRaw(requestParameters: ReadUserGroupsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadUserGroupsResponse>>;

    /**
     */
    readUserGroups(requestParameters: ReadUserGroupsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadUserGroupsResponse>;

    /**
     * 
     * @param {ReadUserGroupsPerUserRequest} [readUserGroupsPerUserRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserGroupApiInterface
     */
    readUserGroupsPerUserRaw(requestParameters: ReadUserGroupsPerUserOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadUserGroupsPerUserResponse>>;

    /**
     */
    readUserGroupsPerUser(requestParameters: ReadUserGroupsPerUserOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadUserGroupsPerUserResponse>;

    /**
     * 
     * @param {RemoveUserFromUserGroupRequest} [removeUserFromUserGroupRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserGroupApiInterface
     */
    removeUserFromUserGroupRaw(requestParameters: RemoveUserFromUserGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<RemoveUserFromUserGroupResponse>>;

    /**
     */
    removeUserFromUserGroup(requestParameters: RemoveUserFromUserGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<RemoveUserFromUserGroupResponse>;

    /**
     * 
     * @param {UpdateUserGroupRequest} [updateUserGroupRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserGroupApiInterface
     */
    updateUserGroupRaw(requestParameters: UpdateUserGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateUserGroupResponse>>;

    /**
     */
    updateUserGroup(requestParameters: UpdateUserGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateUserGroupResponse>;

}

/**
 * 
 */
export class UserGroupApi extends runtime.BaseAPI implements UserGroupApiInterface {

    /**
     */
    async addUserToUserGroupRaw(requestParameters: AddUserToUserGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<AddUserToUserGroupResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = AddUserToUserGroupRequestToJSON(requestParameters.addUserToUserGroupRequest);

        const request: runtime.RequestOpts = {
            path: `/AddUserToUserGroup`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => AddUserToUserGroupResponseFromJSON(jsonValue));
    }

    /**
     */
    async addUserToUserGroup(requestParameters: AddUserToUserGroupOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<AddUserToUserGroupResponse> {
        const response = await this.addUserToUserGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async createUserGroupRaw(requestParameters: CreateUserGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateUserGroupResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = CreateUserGroupRequestToJSON(requestParameters.createUserGroupRequest);

        const request: runtime.RequestOpts = {
            path: `/CreateUserGroup`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateUserGroupResponseFromJSON(jsonValue));
    }

    /**
     */
    async createUserGroup(requestParameters: CreateUserGroupOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateUserGroupResponse> {
        const response = await this.createUserGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteUserGroupRaw(requestParameters: DeleteUserGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteUserGroupResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = DeleteUserGroupRequestToJSON(requestParameters.deleteUserGroupRequest);

        const request: runtime.RequestOpts = {
            path: `/DeleteUserGroup`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteUserGroupResponseFromJSON(jsonValue));
    }

    /**
     */
    async deleteUserGroup(requestParameters: DeleteUserGroupOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteUserGroupResponse> {
        const response = await this.deleteUserGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async readUserGroupRaw(requestParameters: ReadUserGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadUserGroupResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = ReadUserGroupRequestToJSON(requestParameters.readUserGroupRequest);

        const request: runtime.RequestOpts = {
            path: `/ReadUserGroup`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => ReadUserGroupResponseFromJSON(jsonValue));
    }

    /**
     */
    async readUserGroup(requestParameters: ReadUserGroupOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadUserGroupResponse> {
        const response = await this.readUserGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async readUserGroupsRaw(requestParameters: ReadUserGroupsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadUserGroupsResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = ReadUserGroupsRequestToJSON(requestParameters.readUserGroupsRequest);

        const request: runtime.RequestOpts = {
            path: `/ReadUserGroups`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => ReadUserGroupsResponseFromJSON(jsonValue));
    }

    /**
     */
    async readUserGroups(requestParameters: ReadUserGroupsOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadUserGroupsResponse> {
        const response = await this.readUserGroupsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async readUserGroupsPerUserRaw(requestParameters: ReadUserGroupsPerUserOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadUserGroupsPerUserResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = ReadUserGroupsPerUserRequestToJSON(requestParameters.readUserGroupsPerUserRequest);

        const request: runtime.RequestOpts = {
            path: `/ReadUserGroupsPerUser`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => ReadUserGroupsPerUserResponseFromJSON(jsonValue));
    }

    /**
     */
    async readUserGroupsPerUser(requestParameters: ReadUserGroupsPerUserOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadUserGroupsPerUserResponse> {
        const response = await this.readUserGroupsPerUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async removeUserFromUserGroupRaw(requestParameters: RemoveUserFromUserGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<RemoveUserFromUserGroupResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = RemoveUserFromUserGroupRequestToJSON(requestParameters.removeUserFromUserGroupRequest);

        const request: runtime.RequestOpts = {
            path: `/RemoveUserFromUserGroup`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => RemoveUserFromUserGroupResponseFromJSON(jsonValue));
    }

    /**
     */
    async removeUserFromUserGroup(requestParameters: RemoveUserFromUserGroupOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<RemoveUserFromUserGroupResponse> {
        const response = await this.removeUserFromUserGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateUserGroupRaw(requestParameters: UpdateUserGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateUserGroupResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = UpdateUserGroupRequestToJSON(requestParameters.updateUserGroupRequest);

        const request: runtime.RequestOpts = {
            path: `/UpdateUserGroup`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateUserGroupResponseFromJSON(jsonValue));
    }

    /**
     */
    async updateUserGroup(requestParameters: UpdateUserGroupOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateUserGroupResponse> {
        const response = await this.updateUserGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

}