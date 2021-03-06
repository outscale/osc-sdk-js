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
import * as runtime from '../runtime';
import { CreateNicRequest, CreateNicResponse, DeleteNicRequest, DeleteNicResponse, LinkNicRequest, LinkNicResponse, LinkPrivateIpsRequest, LinkPrivateIpsResponse, ReadNicsRequest, ReadNicsResponse, UnlinkNicRequest, UnlinkNicResponse, UnlinkPrivateIpsRequest, UnlinkPrivateIpsResponse, UpdateNicRequest, UpdateNicResponse } from '../models';
export interface CreateNicOperationRequest {
    createNicRequest?: CreateNicRequest;
}
export interface DeleteNicOperationRequest {
    deleteNicRequest?: DeleteNicRequest;
}
export interface LinkNicOperationRequest {
    linkNicRequest?: LinkNicRequest;
}
export interface LinkPrivateIpsOperationRequest {
    linkPrivateIpsRequest?: LinkPrivateIpsRequest;
}
export interface ReadNicsOperationRequest {
    readNicsRequest?: ReadNicsRequest;
}
export interface UnlinkNicOperationRequest {
    unlinkNicRequest?: UnlinkNicRequest;
}
export interface UnlinkPrivateIpsOperationRequest {
    unlinkPrivateIpsRequest?: UnlinkPrivateIpsRequest;
}
export interface UpdateNicOperationRequest {
    updateNicRequest?: UpdateNicRequest;
}
/**
 * NicApi - interface
 *
 * @export
 * @interface NicApiInterface
 */
export interface NicApiInterface {
    /**
     *
     * @param {CreateNicRequest} [createNicRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NicApiInterface
     */
    createNicRaw(requestParameters: CreateNicOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateNicResponse>>;
    /**
     */
    createNic(requestParameters: CreateNicOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateNicResponse>;
    /**
     *
     * @param {DeleteNicRequest} [deleteNicRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NicApiInterface
     */
    deleteNicRaw(requestParameters: DeleteNicOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteNicResponse>>;
    /**
     */
    deleteNic(requestParameters: DeleteNicOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteNicResponse>;
    /**
     *
     * @param {LinkNicRequest} [linkNicRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NicApiInterface
     */
    linkNicRaw(requestParameters: LinkNicOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<LinkNicResponse>>;
    /**
     */
    linkNic(requestParameters: LinkNicOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<LinkNicResponse>;
    /**
     *
     * @param {LinkPrivateIpsRequest} [linkPrivateIpsRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NicApiInterface
     */
    linkPrivateIpsRaw(requestParameters: LinkPrivateIpsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<LinkPrivateIpsResponse>>;
    /**
     */
    linkPrivateIps(requestParameters: LinkPrivateIpsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<LinkPrivateIpsResponse>;
    /**
     *
     * @param {ReadNicsRequest} [readNicsRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NicApiInterface
     */
    readNicsRaw(requestParameters: ReadNicsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadNicsResponse>>;
    /**
     */
    readNics(requestParameters: ReadNicsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadNicsResponse>;
    /**
     *
     * @param {UnlinkNicRequest} [unlinkNicRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NicApiInterface
     */
    unlinkNicRaw(requestParameters: UnlinkNicOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UnlinkNicResponse>>;
    /**
     */
    unlinkNic(requestParameters: UnlinkNicOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UnlinkNicResponse>;
    /**
     *
     * @param {UnlinkPrivateIpsRequest} [unlinkPrivateIpsRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NicApiInterface
     */
    unlinkPrivateIpsRaw(requestParameters: UnlinkPrivateIpsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UnlinkPrivateIpsResponse>>;
    /**
     */
    unlinkPrivateIps(requestParameters: UnlinkPrivateIpsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UnlinkPrivateIpsResponse>;
    /**
     *
     * @param {UpdateNicRequest} [updateNicRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NicApiInterface
     */
    updateNicRaw(requestParameters: UpdateNicOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateNicResponse>>;
    /**
     */
    updateNic(requestParameters: UpdateNicOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateNicResponse>;
}
/**
 *
 */
export declare class NicApi extends runtime.BaseAPI implements NicApiInterface {
    /**
     */
    createNicRaw(requestParameters: CreateNicOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateNicResponse>>;
    /**
     */
    createNic(requestParameters?: CreateNicOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateNicResponse>;
    /**
     */
    deleteNicRaw(requestParameters: DeleteNicOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteNicResponse>>;
    /**
     */
    deleteNic(requestParameters?: DeleteNicOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteNicResponse>;
    /**
     */
    linkNicRaw(requestParameters: LinkNicOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<LinkNicResponse>>;
    /**
     */
    linkNic(requestParameters?: LinkNicOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<LinkNicResponse>;
    /**
     */
    linkPrivateIpsRaw(requestParameters: LinkPrivateIpsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<LinkPrivateIpsResponse>>;
    /**
     */
    linkPrivateIps(requestParameters?: LinkPrivateIpsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<LinkPrivateIpsResponse>;
    /**
     */
    readNicsRaw(requestParameters: ReadNicsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadNicsResponse>>;
    /**
     */
    readNics(requestParameters?: ReadNicsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadNicsResponse>;
    /**
     */
    unlinkNicRaw(requestParameters: UnlinkNicOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UnlinkNicResponse>>;
    /**
     */
    unlinkNic(requestParameters?: UnlinkNicOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UnlinkNicResponse>;
    /**
     */
    unlinkPrivateIpsRaw(requestParameters: UnlinkPrivateIpsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UnlinkPrivateIpsResponse>>;
    /**
     */
    unlinkPrivateIps(requestParameters?: UnlinkPrivateIpsOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UnlinkPrivateIpsResponse>;
    /**
     */
    updateNicRaw(requestParameters: UpdateNicOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateNicResponse>>;
    /**
     */
    updateNic(requestParameters?: UpdateNicOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateNicResponse>;
}
