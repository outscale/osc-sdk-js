/* tslint:disable */
/* eslint-disable */
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
import {
    CreateCaRequest,
    CreateCaRequestFromJSON,
    CreateCaRequestToJSON,
    CreateCaResponse,
    CreateCaResponseFromJSON,
    CreateCaResponseToJSON,
    DeleteCaRequest,
    DeleteCaRequestFromJSON,
    DeleteCaRequestToJSON,
    DeleteCaResponse,
    DeleteCaResponseFromJSON,
    DeleteCaResponseToJSON,
    ReadCasRequest,
    ReadCasRequestFromJSON,
    ReadCasRequestToJSON,
    ReadCasResponse,
    ReadCasResponseFromJSON,
    ReadCasResponseToJSON,
    UpdateCaRequest,
    UpdateCaRequestFromJSON,
    UpdateCaRequestToJSON,
    UpdateCaResponse,
    UpdateCaResponseFromJSON,
    UpdateCaResponseToJSON,
} from '../models';

export interface CreateCaOperationRequest {
    createCaRequest?: CreateCaRequest;
}

export interface DeleteCaOperationRequest {
    deleteCaRequest?: DeleteCaRequest;
}

export interface ReadCasOperationRequest {
    readCasRequest?: ReadCasRequest;
}

export interface UpdateCaOperationRequest {
    updateCaRequest?: UpdateCaRequest;
}

/**
 * CaApi - interface
 * 
 * @export
 * @interface CaApiInterface
 */
export interface CaApiInterface {
    /**
     * 
     * @param {CreateCaRequest} [createCaRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CaApiInterface
     */
    createCaRaw(requestParameters: CreateCaOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateCaResponse>>;

    /**
     */
    createCa(requestParameters: CreateCaOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateCaResponse>;

    /**
     * 
     * @param {DeleteCaRequest} [deleteCaRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CaApiInterface
     */
    deleteCaRaw(requestParameters: DeleteCaOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteCaResponse>>;

    /**
     */
    deleteCa(requestParameters: DeleteCaOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteCaResponse>;

    /**
     * 
     * @param {ReadCasRequest} [readCasRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CaApiInterface
     */
    readCasRaw(requestParameters: ReadCasOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadCasResponse>>;

    /**
     */
    readCas(requestParameters: ReadCasOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadCasResponse>;

    /**
     * 
     * @param {UpdateCaRequest} [updateCaRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CaApiInterface
     */
    updateCaRaw(requestParameters: UpdateCaOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateCaResponse>>;

    /**
     */
    updateCa(requestParameters: UpdateCaOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateCaResponse>;

}

/**
 * 
 */
export class CaApi extends runtime.BaseAPI implements CaApiInterface {

    /**
     */
    async createCaRaw(requestParameters: CreateCaOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CreateCaResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuthSec authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }


        const body: any = CreateCaRequestToJSON(requestParameters.createCaRequest);

        const request: runtime.RequestOpts = {
            path: `/CreateCa`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateCaResponseFromJSON(jsonValue));
    }

    /**
     */
    async createCa(requestParameters: CreateCaOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CreateCaResponse> {
        const response = await this.createCaRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteCaRaw(requestParameters: DeleteCaOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DeleteCaResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuthSec authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }


        const body: any = DeleteCaRequestToJSON(requestParameters.deleteCaRequest);

        const request: runtime.RequestOpts = {
            path: `/DeleteCa`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteCaResponseFromJSON(jsonValue));
    }

    /**
     */
    async deleteCa(requestParameters: DeleteCaOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DeleteCaResponse> {
        const response = await this.deleteCaRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async readCasRaw(requestParameters: ReadCasOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ReadCasResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuthSec authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }


        const body: any = ReadCasRequestToJSON(requestParameters.readCasRequest);

        const request: runtime.RequestOpts = {
            path: `/ReadCas`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => ReadCasResponseFromJSON(jsonValue));
    }

    /**
     */
    async readCas(requestParameters: ReadCasOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ReadCasResponse> {
        const response = await this.readCasRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateCaRaw(requestParameters: UpdateCaOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<UpdateCaResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuthSec authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }


        const body: any = UpdateCaRequestToJSON(requestParameters.updateCaRequest);

        const request: runtime.RequestOpts = {
            path: `/UpdateCa`,
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

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateCaResponseFromJSON(jsonValue));
    }

    /**
     */
    async updateCa(requestParameters: UpdateCaOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<UpdateCaResponse> {
        const response = await this.updateCaRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
