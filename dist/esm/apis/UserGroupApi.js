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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as runtime from '../runtime';
import { AddUserToUserGroupRequestToJSON, AddUserToUserGroupResponseFromJSON, CreateUserGroupRequestToJSON, CreateUserGroupResponseFromJSON, DeleteUserGroupRequestToJSON, DeleteUserGroupResponseFromJSON, ReadUserGroupRequestToJSON, ReadUserGroupResponseFromJSON, ReadUserGroupsPerUserRequestToJSON, ReadUserGroupsPerUserResponseFromJSON, ReadUserGroupsRequestToJSON, ReadUserGroupsResponseFromJSON, RemoveUserFromUserGroupRequestToJSON, RemoveUserFromUserGroupResponseFromJSON, UpdateUserGroupRequestToJSON, UpdateUserGroupResponseFromJSON, } from '../models';
/**
 *
 */
export class UserGroupApi extends runtime.BaseAPI {
    /**
     */
    addUserToUserGroupRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = AddUserToUserGroupRequestToJSON(requestParameters.addUserToUserGroupRequest);
            const request = {
                path: `/AddUserToUserGroup`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: body,
            };
            if (this.configuration && this.configuration.awsV4SignerParameters) {
                const SignUrl = this.configuration.basePath + request.path;
                const SignBody = JSON.stringify(request.body);
                const signer = new runtime.AwsV4Signer(this.configuration.awsV4SignerParameters);
                const signResult = yield signer.sign('POST', SignUrl, headerParameters, SignBody);
                //request.url = signResult.url;
                //request.method = signResult.method;
                request.headers = signResult.headers;
            }
            const response = yield this.request(request, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => AddUserToUserGroupResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    addUserToUserGroup(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.addUserToUserGroupRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    createUserGroupRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = CreateUserGroupRequestToJSON(requestParameters.createUserGroupRequest);
            const request = {
                path: `/CreateUserGroup`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: body,
            };
            if (this.configuration && this.configuration.awsV4SignerParameters) {
                const SignUrl = this.configuration.basePath + request.path;
                const SignBody = JSON.stringify(request.body);
                const signer = new runtime.AwsV4Signer(this.configuration.awsV4SignerParameters);
                const signResult = yield signer.sign('POST', SignUrl, headerParameters, SignBody);
                //request.url = signResult.url;
                //request.method = signResult.method;
                request.headers = signResult.headers;
            }
            const response = yield this.request(request, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => CreateUserGroupResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    createUserGroup(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createUserGroupRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    deleteUserGroupRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = DeleteUserGroupRequestToJSON(requestParameters.deleteUserGroupRequest);
            const request = {
                path: `/DeleteUserGroup`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: body,
            };
            if (this.configuration && this.configuration.awsV4SignerParameters) {
                const SignUrl = this.configuration.basePath + request.path;
                const SignBody = JSON.stringify(request.body);
                const signer = new runtime.AwsV4Signer(this.configuration.awsV4SignerParameters);
                const signResult = yield signer.sign('POST', SignUrl, headerParameters, SignBody);
                //request.url = signResult.url;
                //request.method = signResult.method;
                request.headers = signResult.headers;
            }
            const response = yield this.request(request, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => DeleteUserGroupResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    deleteUserGroup(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteUserGroupRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    readUserGroupRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = ReadUserGroupRequestToJSON(requestParameters.readUserGroupRequest);
            const request = {
                path: `/ReadUserGroup`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: body,
            };
            if (this.configuration && this.configuration.awsV4SignerParameters) {
                const SignUrl = this.configuration.basePath + request.path;
                const SignBody = JSON.stringify(request.body);
                const signer = new runtime.AwsV4Signer(this.configuration.awsV4SignerParameters);
                const signResult = yield signer.sign('POST', SignUrl, headerParameters, SignBody);
                //request.url = signResult.url;
                //request.method = signResult.method;
                request.headers = signResult.headers;
            }
            const response = yield this.request(request, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => ReadUserGroupResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    readUserGroup(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readUserGroupRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    readUserGroupsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = ReadUserGroupsRequestToJSON(requestParameters.readUserGroupsRequest);
            const request = {
                path: `/ReadUserGroups`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: body,
            };
            if (this.configuration && this.configuration.awsV4SignerParameters) {
                const SignUrl = this.configuration.basePath + request.path;
                const SignBody = JSON.stringify(request.body);
                const signer = new runtime.AwsV4Signer(this.configuration.awsV4SignerParameters);
                const signResult = yield signer.sign('POST', SignUrl, headerParameters, SignBody);
                //request.url = signResult.url;
                //request.method = signResult.method;
                request.headers = signResult.headers;
            }
            const response = yield this.request(request, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => ReadUserGroupsResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    readUserGroups(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readUserGroupsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    readUserGroupsPerUserRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = ReadUserGroupsPerUserRequestToJSON(requestParameters.readUserGroupsPerUserRequest);
            const request = {
                path: `/ReadUserGroupsPerUser`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: body,
            };
            if (this.configuration && this.configuration.awsV4SignerParameters) {
                const SignUrl = this.configuration.basePath + request.path;
                const SignBody = JSON.stringify(request.body);
                const signer = new runtime.AwsV4Signer(this.configuration.awsV4SignerParameters);
                const signResult = yield signer.sign('POST', SignUrl, headerParameters, SignBody);
                //request.url = signResult.url;
                //request.method = signResult.method;
                request.headers = signResult.headers;
            }
            const response = yield this.request(request, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => ReadUserGroupsPerUserResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    readUserGroupsPerUser(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readUserGroupsPerUserRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    removeUserFromUserGroupRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = RemoveUserFromUserGroupRequestToJSON(requestParameters.removeUserFromUserGroupRequest);
            const request = {
                path: `/RemoveUserFromUserGroup`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: body,
            };
            if (this.configuration && this.configuration.awsV4SignerParameters) {
                const SignUrl = this.configuration.basePath + request.path;
                const SignBody = JSON.stringify(request.body);
                const signer = new runtime.AwsV4Signer(this.configuration.awsV4SignerParameters);
                const signResult = yield signer.sign('POST', SignUrl, headerParameters, SignBody);
                //request.url = signResult.url;
                //request.method = signResult.method;
                request.headers = signResult.headers;
            }
            const response = yield this.request(request, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => RemoveUserFromUserGroupResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    removeUserFromUserGroup(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.removeUserFromUserGroupRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    updateUserGroupRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = UpdateUserGroupRequestToJSON(requestParameters.updateUserGroupRequest);
            const request = {
                path: `/UpdateUserGroup`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: body,
            };
            if (this.configuration && this.configuration.awsV4SignerParameters) {
                const SignUrl = this.configuration.basePath + request.path;
                const SignBody = JSON.stringify(request.body);
                const signer = new runtime.AwsV4Signer(this.configuration.awsV4SignerParameters);
                const signResult = yield signer.sign('POST', SignUrl, headerParameters, SignBody);
                //request.url = signResult.url;
                //request.method = signResult.method;
                request.headers = signResult.headers;
            }
            const response = yield this.request(request, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => UpdateUserGroupResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    updateUserGroup(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateUserGroupRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}