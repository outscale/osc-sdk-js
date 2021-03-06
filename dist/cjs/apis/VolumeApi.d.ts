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
import { CreateVolumeRequest, CreateVolumeResponse, DeleteVolumeRequest, DeleteVolumeResponse, LinkVolumeRequest, LinkVolumeResponse, ReadVolumesRequest, ReadVolumesResponse, UnlinkVolumeRequest, UnlinkVolumeResponse, UpdateVolumeRequest, UpdateVolumeResponse } from '../models';
export interface CreateVolumeOperationRequest {
    createVolumeRequest?: CreateVolumeRequest;
}
export interface DeleteVolumeOperationRequest {
    deleteVolumeRequest?: DeleteVolumeRequest;
}
export interface LinkVolumeOperationRequest {
    linkVolumeRequest?: LinkVolumeRequest;
}
export interface ReadVolumesOperationRequest {
    readVolumesRequest?: ReadVolumesRequest;
}
export interface UnlinkVolumeOperationRequest {
    unlinkVolumeRequest?: UnlinkVolumeRequest;
}
export interface UpdateVolumeOperationRequest {
    updateVolumeRequest?: UpdateVolumeRequest;
}
/**
 * VolumeApi - interface
 *
 * @export
 * @interface VolumeApiInterface
 */
export interface VolumeApiInterface {
    /**
     *
     * @param {CreateVolumeRequest} [createVolumeRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VolumeApiInterface
     */
    createVolumeRaw(requestParameters: CreateVolumeOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateVolumeResponse>>;
    /**
     */
    createVolume(requestParameters: CreateVolumeOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateVolumeResponse>;
    /**
     *
     * @param {DeleteVolumeRequest} [deleteVolumeRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VolumeApiInterface
     */
    deleteVolumeRaw(requestParameters: DeleteVolumeOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteVolumeResponse>>;
    /**
     */
    deleteVolume(requestParameters: DeleteVolumeOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteVolumeResponse>;
    /**
     *
     * @param {LinkVolumeRequest} [linkVolumeRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VolumeApiInterface
     */
    linkVolumeRaw(requestParameters: LinkVolumeOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<LinkVolumeResponse>>;
    /**
     */
    linkVolume(requestParameters: LinkVolumeOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<LinkVolumeResponse>;
    /**
     *
     * @param {ReadVolumesRequest} [readVolumesRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VolumeApiInterface
     */
    readVolumesRaw(requestParameters: ReadVolumesOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadVolumesResponse>>;
    /**
     */
    readVolumes(requestParameters: ReadVolumesOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadVolumesResponse>;
    /**
     *
     * @param {UnlinkVolumeRequest} [unlinkVolumeRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VolumeApiInterface
     */
    unlinkVolumeRaw(requestParameters: UnlinkVolumeOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UnlinkVolumeResponse>>;
    /**
     */
    unlinkVolume(requestParameters: UnlinkVolumeOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UnlinkVolumeResponse>;
    /**
     *
     * @param {UpdateVolumeRequest} [updateVolumeRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VolumeApiInterface
     */
    updateVolumeRaw(requestParameters: UpdateVolumeOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateVolumeResponse>>;
    /**
     */
    updateVolume(requestParameters: UpdateVolumeOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateVolumeResponse>;
}
/**
 *
 */
export declare class VolumeApi extends runtime.BaseAPI implements VolumeApiInterface {
    /**
     */
    createVolumeRaw(requestParameters: CreateVolumeOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateVolumeResponse>>;
    /**
     */
    createVolume(requestParameters?: CreateVolumeOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateVolumeResponse>;
    /**
     */
    deleteVolumeRaw(requestParameters: DeleteVolumeOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteVolumeResponse>>;
    /**
     */
    deleteVolume(requestParameters?: DeleteVolumeOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteVolumeResponse>;
    /**
     */
    linkVolumeRaw(requestParameters: LinkVolumeOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<LinkVolumeResponse>>;
    /**
     */
    linkVolume(requestParameters?: LinkVolumeOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<LinkVolumeResponse>;
    /**
     */
    readVolumesRaw(requestParameters: ReadVolumesOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadVolumesResponse>>;
    /**
     */
    readVolumes(requestParameters?: ReadVolumesOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadVolumesResponse>;
    /**
     */
    unlinkVolumeRaw(requestParameters: UnlinkVolumeOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UnlinkVolumeResponse>>;
    /**
     */
    unlinkVolume(requestParameters?: UnlinkVolumeOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UnlinkVolumeResponse>;
    /**
     */
    updateVolumeRaw(requestParameters: UpdateVolumeOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateVolumeResponse>>;
    /**
     */
    updateVolume(requestParameters?: UpdateVolumeOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateVolumeResponse>;
}
