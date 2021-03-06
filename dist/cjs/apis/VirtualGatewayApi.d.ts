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
import { CreateVirtualGatewayRequest, CreateVirtualGatewayResponse, DeleteVirtualGatewayRequest, DeleteVirtualGatewayResponse, LinkVirtualGatewayRequest, LinkVirtualGatewayResponse, ReadVirtualGatewaysRequest, ReadVirtualGatewaysResponse, UnlinkVirtualGatewayRequest, UnlinkVirtualGatewayResponse, UpdateRoutePropagationRequest, UpdateRoutePropagationResponse } from '../models';
export interface CreateVirtualGatewayOperationRequest {
    createVirtualGatewayRequest?: CreateVirtualGatewayRequest;
}
export interface DeleteVirtualGatewayOperationRequest {
    deleteVirtualGatewayRequest?: DeleteVirtualGatewayRequest;
}
export interface LinkVirtualGatewayOperationRequest {
    linkVirtualGatewayRequest?: LinkVirtualGatewayRequest;
}
export interface ReadVirtualGatewaysOperationRequest {
    readVirtualGatewaysRequest?: ReadVirtualGatewaysRequest;
}
export interface UnlinkVirtualGatewayOperationRequest {
    unlinkVirtualGatewayRequest?: UnlinkVirtualGatewayRequest;
}
export interface UpdateRoutePropagationOperationRequest {
    updateRoutePropagationRequest?: UpdateRoutePropagationRequest;
}
/**
 * VirtualGatewayApi - interface
 *
 * @export
 * @interface VirtualGatewayApiInterface
 */
export interface VirtualGatewayApiInterface {
    /**
     *
     * @param {CreateVirtualGatewayRequest} [createVirtualGatewayRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VirtualGatewayApiInterface
     */
    createVirtualGatewayRaw(requestParameters: CreateVirtualGatewayOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateVirtualGatewayResponse>>;
    /**
     */
    createVirtualGateway(requestParameters: CreateVirtualGatewayOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateVirtualGatewayResponse>;
    /**
     *
     * @param {DeleteVirtualGatewayRequest} [deleteVirtualGatewayRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VirtualGatewayApiInterface
     */
    deleteVirtualGatewayRaw(requestParameters: DeleteVirtualGatewayOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteVirtualGatewayResponse>>;
    /**
     */
    deleteVirtualGateway(requestParameters: DeleteVirtualGatewayOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteVirtualGatewayResponse>;
    /**
     *
     * @param {LinkVirtualGatewayRequest} [linkVirtualGatewayRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VirtualGatewayApiInterface
     */
    linkVirtualGatewayRaw(requestParameters: LinkVirtualGatewayOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<LinkVirtualGatewayResponse>>;
    /**
     */
    linkVirtualGateway(requestParameters: LinkVirtualGatewayOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<LinkVirtualGatewayResponse>;
    /**
     *
     * @param {ReadVirtualGatewaysRequest} [readVirtualGatewaysRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VirtualGatewayApiInterface
     */
    readVirtualGatewaysRaw(requestParameters: ReadVirtualGatewaysOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadVirtualGatewaysResponse>>;
    /**
     */
    readVirtualGateways(requestParameters: ReadVirtualGatewaysOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadVirtualGatewaysResponse>;
    /**
     *
     * @param {UnlinkVirtualGatewayRequest} [unlinkVirtualGatewayRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VirtualGatewayApiInterface
     */
    unlinkVirtualGatewayRaw(requestParameters: UnlinkVirtualGatewayOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UnlinkVirtualGatewayResponse>>;
    /**
     */
    unlinkVirtualGateway(requestParameters: UnlinkVirtualGatewayOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UnlinkVirtualGatewayResponse>;
    /**
     *
     * @param {UpdateRoutePropagationRequest} [updateRoutePropagationRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VirtualGatewayApiInterface
     */
    updateRoutePropagationRaw(requestParameters: UpdateRoutePropagationOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateRoutePropagationResponse>>;
    /**
     */
    updateRoutePropagation(requestParameters: UpdateRoutePropagationOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateRoutePropagationResponse>;
}
/**
 *
 */
export declare class VirtualGatewayApi extends runtime.BaseAPI implements VirtualGatewayApiInterface {
    /**
     */
    createVirtualGatewayRaw(requestParameters: CreateVirtualGatewayOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateVirtualGatewayResponse>>;
    /**
     */
    createVirtualGateway(requestParameters?: CreateVirtualGatewayOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateVirtualGatewayResponse>;
    /**
     */
    deleteVirtualGatewayRaw(requestParameters: DeleteVirtualGatewayOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteVirtualGatewayResponse>>;
    /**
     */
    deleteVirtualGateway(requestParameters?: DeleteVirtualGatewayOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteVirtualGatewayResponse>;
    /**
     */
    linkVirtualGatewayRaw(requestParameters: LinkVirtualGatewayOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<LinkVirtualGatewayResponse>>;
    /**
     */
    linkVirtualGateway(requestParameters?: LinkVirtualGatewayOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<LinkVirtualGatewayResponse>;
    /**
     */
    readVirtualGatewaysRaw(requestParameters: ReadVirtualGatewaysOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadVirtualGatewaysResponse>>;
    /**
     */
    readVirtualGateways(requestParameters?: ReadVirtualGatewaysOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadVirtualGatewaysResponse>;
    /**
     */
    unlinkVirtualGatewayRaw(requestParameters: UnlinkVirtualGatewayOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UnlinkVirtualGatewayResponse>>;
    /**
     */
    unlinkVirtualGateway(requestParameters?: UnlinkVirtualGatewayOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UnlinkVirtualGatewayResponse>;
    /**
     */
    updateRoutePropagationRaw(requestParameters: UpdateRoutePropagationOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateRoutePropagationResponse>>;
    /**
     */
    updateRoutePropagation(requestParameters?: UpdateRoutePropagationOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateRoutePropagationResponse>;
}
