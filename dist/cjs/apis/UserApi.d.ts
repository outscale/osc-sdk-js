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
import * as runtime from '../runtime';
import { CreateUserRequest, CreateUserResponse, DeleteUserRequest, DeleteUserResponse, ReadUsersRequest, ReadUsersResponse, UpdateUserRequest, UpdateUserResponse } from '../models';
export interface CreateUserOperationRequest {
    createUserRequest?: CreateUserRequest;
}
export interface DeleteUserOperationRequest {
    deleteUserRequest?: DeleteUserRequest;
}
export interface ReadUsersOperationRequest {
    readUsersRequest?: ReadUsersRequest;
}
export interface UpdateUserOperationRequest {
    updateUserRequest?: UpdateUserRequest;
}
/**
 * UserApi - interface
 *
 * @export
 * @interface UserApiInterface
 */
export interface UserApiInterface {
    /**
     *
     * @param {CreateUserRequest} [createUserRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    createUserRaw(requestParameters: CreateUserOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateUserResponse>>;
    /**
     */
    createUser(requestParameters: CreateUserOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateUserResponse>;
    /**
     *
     * @param {DeleteUserRequest} [deleteUserRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    deleteUserRaw(requestParameters: DeleteUserOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteUserResponse>>;
    /**
     */
    deleteUser(requestParameters: DeleteUserOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteUserResponse>;
    /**
     *
     * @param {ReadUsersRequest} [readUsersRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    readUsersRaw(requestParameters: ReadUsersOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadUsersResponse>>;
    /**
     */
    readUsers(requestParameters: ReadUsersOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadUsersResponse>;
    /**
     *
     * @param {UpdateUserRequest} [updateUserRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    updateUserRaw(requestParameters: UpdateUserOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateUserResponse>>;
    /**
     */
    updateUser(requestParameters: UpdateUserOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateUserResponse>;
}
/**
 *
 */
export declare class UserApi extends runtime.BaseAPI implements UserApiInterface {
    /**
     */
    createUserRaw(requestParameters: CreateUserOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateUserResponse>>;
    /**
     */
    createUser(requestParameters?: CreateUserOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateUserResponse>;
    /**
     */
    deleteUserRaw(requestParameters: DeleteUserOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteUserResponse>>;
    /**
     */
    deleteUser(requestParameters?: DeleteUserOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteUserResponse>;
    /**
     */
    readUsersRaw(requestParameters: ReadUsersOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadUsersResponse>>;
    /**
     */
    readUsers(requestParameters?: ReadUsersOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadUsersResponse>;
    /**
     */
    updateUserRaw(requestParameters: UpdateUserOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateUserResponse>>;
    /**
     */
    updateUser(requestParameters?: UpdateUserOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateUserResponse>;
}