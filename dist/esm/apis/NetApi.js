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
import { CreateNetRequestToJSON, CreateNetResponseFromJSON, DeleteNetRequestToJSON, DeleteNetResponseFromJSON, ReadNetsRequestToJSON, ReadNetsResponseFromJSON, UpdateNetRequestToJSON, UpdateNetResponseFromJSON, } from '../models';
/**
 *
 */
export class NetApi extends runtime.BaseAPI {
    /**
     */
    createNetRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = CreateNetRequestToJSON(requestParameters.createNetRequest);
            const request = {
                path: `/CreateNet`,
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
            return new runtime.JSONApiResponse(response, (jsonValue) => CreateNetResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    createNet(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createNetRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    deleteNetRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = DeleteNetRequestToJSON(requestParameters.deleteNetRequest);
            const request = {
                path: `/DeleteNet`,
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
            return new runtime.JSONApiResponse(response, (jsonValue) => DeleteNetResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    deleteNet(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteNetRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    readNetsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = ReadNetsRequestToJSON(requestParameters.readNetsRequest);
            const request = {
                path: `/ReadNets`,
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
            return new runtime.JSONApiResponse(response, (jsonValue) => ReadNetsResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    readNets(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readNetsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    updateNetRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = UpdateNetRequestToJSON(requestParameters.updateNetRequest);
            const request = {
                path: `/UpdateNet`,
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
            return new runtime.JSONApiResponse(response, (jsonValue) => UpdateNetResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    updateNet(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateNetRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
