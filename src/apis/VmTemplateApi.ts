/* tslint:disable */
/* eslint-disable */
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
import {
    CreateVmTemplateRequest,
    CreateVmTemplateRequestFromJSON,
    CreateVmTemplateRequestToJSON,
    CreateVmTemplateResponse,
    CreateVmTemplateResponseFromJSON,
    CreateVmTemplateResponseToJSON,
    DeleteVmTemplateRequest,
    DeleteVmTemplateRequestFromJSON,
    DeleteVmTemplateRequestToJSON,
    DeleteVmTemplateResponse,
    DeleteVmTemplateResponseFromJSON,
    DeleteVmTemplateResponseToJSON,
    ReadVmTemplatesRequest,
    ReadVmTemplatesRequestFromJSON,
    ReadVmTemplatesRequestToJSON,
    ReadVmTemplatesResponse,
    ReadVmTemplatesResponseFromJSON,
    ReadVmTemplatesResponseToJSON,
    UpdateVmTemplateRequest,
    UpdateVmTemplateRequestFromJSON,
    UpdateVmTemplateRequestToJSON,
    UpdateVmTemplateResponse,
    UpdateVmTemplateResponseFromJSON,
    UpdateVmTemplateResponseToJSON,
} from '../models';

export interface CreateVmTemplateOperationRequest {
    createVmTemplateRequest?: CreateVmTemplateRequest;
}

export interface DeleteVmTemplateOperationRequest {
    deleteVmTemplateRequest?: DeleteVmTemplateRequest;
}

export interface ReadVmTemplatesOperationRequest {
    readVmTemplatesRequest?: ReadVmTemplatesRequest;
}

export interface UpdateVmTemplateOperationRequest {
    updateVmTemplateRequest?: UpdateVmTemplateRequest;
}

/**
 * VmTemplateApi - interface
 * 
 * @export
 * @interface VmTemplateApiInterface
 */
export interface VmTemplateApiInterface {
    /**
     * 
     * @param {CreateVmTemplateRequest} [createVmTemplateRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VmTemplateApiInterface
     */
    createVmTemplateRaw(requestParameters: CreateVmTemplateOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateVmTemplateResponse>>;

    /**
     */
    createVmTemplate(requestParameters: CreateVmTemplateOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateVmTemplateResponse>;

    /**
     * 
     * @param {DeleteVmTemplateRequest} [deleteVmTemplateRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VmTemplateApiInterface
     */
    deleteVmTemplateRaw(requestParameters: DeleteVmTemplateOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteVmTemplateResponse>>;

    /**
     */
    deleteVmTemplate(requestParameters: DeleteVmTemplateOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteVmTemplateResponse>;

    /**
     * 
     * @param {ReadVmTemplatesRequest} [readVmTemplatesRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VmTemplateApiInterface
     */
    readVmTemplatesRaw(requestParameters: ReadVmTemplatesOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadVmTemplatesResponse>>;

    /**
     */
    readVmTemplates(requestParameters: ReadVmTemplatesOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadVmTemplatesResponse>;

    /**
     * 
     * @param {UpdateVmTemplateRequest} [updateVmTemplateRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VmTemplateApiInterface
     */
    updateVmTemplateRaw(requestParameters: UpdateVmTemplateOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateVmTemplateResponse>>;

    /**
     */
    updateVmTemplate(requestParameters: UpdateVmTemplateOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateVmTemplateResponse>;

}

/**
 * 
 */
export class VmTemplateApi extends runtime.BaseAPI implements VmTemplateApiInterface {

    /**
     */
    async createVmTemplateRaw(requestParameters: CreateVmTemplateOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateVmTemplateResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = CreateVmTemplateRequestToJSON(requestParameters.createVmTemplateRequest);

        const request: runtime.RequestOpts = {
            path: `/CreateVmTemplate`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateVmTemplateResponseFromJSON(jsonValue));
    }

    /**
     */
    async createVmTemplate(requestParameters: CreateVmTemplateOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateVmTemplateResponse> {
        const response = await this.createVmTemplateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteVmTemplateRaw(requestParameters: DeleteVmTemplateOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteVmTemplateResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = DeleteVmTemplateRequestToJSON(requestParameters.deleteVmTemplateRequest);

        const request: runtime.RequestOpts = {
            path: `/DeleteVmTemplate`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteVmTemplateResponseFromJSON(jsonValue));
    }

    /**
     */
    async deleteVmTemplate(requestParameters: DeleteVmTemplateOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteVmTemplateResponse> {
        const response = await this.deleteVmTemplateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async readVmTemplatesRaw(requestParameters: ReadVmTemplatesOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadVmTemplatesResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = ReadVmTemplatesRequestToJSON(requestParameters.readVmTemplatesRequest);

        const request: runtime.RequestOpts = {
            path: `/ReadVmTemplates`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => ReadVmTemplatesResponseFromJSON(jsonValue));
    }

    /**
     */
    async readVmTemplates(requestParameters: ReadVmTemplatesOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadVmTemplatesResponse> {
        const response = await this.readVmTemplatesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateVmTemplateRaw(requestParameters: UpdateVmTemplateOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateVmTemplateResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }



        const body: any = UpdateVmTemplateRequestToJSON(requestParameters.updateVmTemplateRequest);

        const request: runtime.RequestOpts = {
            path: `/UpdateVmTemplate`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateVmTemplateResponseFromJSON(jsonValue));
    }

    /**
     */
    async updateVmTemplate(requestParameters: UpdateVmTemplateOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateVmTemplateResponse> {
        const response = await this.updateVmTemplateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}