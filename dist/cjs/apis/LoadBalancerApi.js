"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadBalancerApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class LoadBalancerApi extends runtime.BaseAPI {
    /**
     * Creates a load balancer.<br /> The load balancer is created with a unique Domain Name Service (DNS) name. It receives the incoming traffic and routes it to its registered virtual machines (VMs).<br /> By default, this action creates an Internet-facing load balancer, resolving to public IPs. To create an internal load balancer in a Net, resolving to private IPs, use the `LoadBalancerType` parameter.<br /> You must specify either the `Subnets` or the `SubregionNames` parameters.<br /><br /> For more information, see [About Load Balancers](https://docs.outscale.com/en/userguide/About-Load-Balancers.html).
     */
    createLoadBalancerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = (0, models_1.CreateLoadBalancerRequestToJSON)(requestParameters.createLoadBalancerRequest);
            const request = {
                path: `/CreateLoadBalancer`,
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
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.CreateLoadBalancerResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Creates a load balancer.<br /> The load balancer is created with a unique Domain Name Service (DNS) name. It receives the incoming traffic and routes it to its registered virtual machines (VMs).<br /> By default, this action creates an Internet-facing load balancer, resolving to public IPs. To create an internal load balancer in a Net, resolving to private IPs, use the `LoadBalancerType` parameter.<br /> You must specify either the `Subnets` or the `SubregionNames` parameters.<br /><br /> For more information, see [About Load Balancers](https://docs.outscale.com/en/userguide/About-Load-Balancers.html).
     */
    createLoadBalancer(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createLoadBalancerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Adds one or more tags to the specified load balancers.<br /> If a tag with the same key already exists for the load balancer, the tag value is replaced.<br /><br /> For more information, see [About Tags](https://docs.outscale.com/en/userguide/About-Tags.html).
     */
    createLoadBalancerTagsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = (0, models_1.CreateLoadBalancerTagsRequestToJSON)(requestParameters.createLoadBalancerTagsRequest);
            const request = {
                path: `/CreateLoadBalancerTags`,
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
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.CreateLoadBalancerTagsResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Adds one or more tags to the specified load balancers.<br /> If a tag with the same key already exists for the load balancer, the tag value is replaced.<br /><br /> For more information, see [About Tags](https://docs.outscale.com/en/userguide/About-Tags.html).
     */
    createLoadBalancerTags(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createLoadBalancerTagsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Deletes a specified load balancer.
     */
    deleteLoadBalancerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = (0, models_1.DeleteLoadBalancerRequestToJSON)(requestParameters.deleteLoadBalancerRequest);
            const request = {
                path: `/DeleteLoadBalancer`,
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
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.DeleteLoadBalancerResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Deletes a specified load balancer.
     */
    deleteLoadBalancer(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteLoadBalancerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Deletes one or more tags from the specified load balancers.
     */
    deleteLoadBalancerTagsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = (0, models_1.DeleteLoadBalancerTagsRequestToJSON)(requestParameters.deleteLoadBalancerTagsRequest);
            const request = {
                path: `/DeleteLoadBalancerTags`,
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
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.DeleteLoadBalancerTagsResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Deletes one or more tags from the specified load balancers.
     */
    deleteLoadBalancerTags(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteLoadBalancerTagsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * > [WARNING]<br /> > Deprecated: This call is deprecated and will be removed.<br />  Deregisters a specified virtual machine (VM) from a load balancer.
     */
    deregisterVmsInLoadBalancerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = (0, models_1.DeregisterVmsInLoadBalancerRequestToJSON)(requestParameters.deregisterVmsInLoadBalancerRequest);
            const request = {
                path: `/DeregisterVmsInLoadBalancer`,
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
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.DeregisterVmsInLoadBalancerResponseFromJSON)(jsonValue));
        });
    }
    /**
     * > [WARNING]<br /> > Deprecated: This call is deprecated and will be removed.<br />  Deregisters a specified virtual machine (VM) from a load balancer.
     */
    deregisterVmsInLoadBalancer(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deregisterVmsInLoadBalancerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Attaches one or more virtual machines (VMs) to a specified load balancer. You need to specify at least the `BackendIps` or the `BackendVmIds` parameter.<br /> The VMs can be in different Subnets and different Subregions than the load balancer, as long as the VMs and load balancers are all in the public Cloud or all in the same Net. It may take a little time for a VM to be registered with the load balancer. Once the VM is registered with a load balancer, it receives traffic and requests from this load balancer and is called a backend VM.
     */
    linkLoadBalancerBackendMachinesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = (0, models_1.LinkLoadBalancerBackendMachinesRequestToJSON)(requestParameters.linkLoadBalancerBackendMachinesRequest);
            const request = {
                path: `/LinkLoadBalancerBackendMachines`,
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
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.LinkLoadBalancerBackendMachinesResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Attaches one or more virtual machines (VMs) to a specified load balancer. You need to specify at least the `BackendIps` or the `BackendVmIds` parameter.<br /> The VMs can be in different Subnets and different Subregions than the load balancer, as long as the VMs and load balancers are all in the public Cloud or all in the same Net. It may take a little time for a VM to be registered with the load balancer. Once the VM is registered with a load balancer, it receives traffic and requests from this load balancer and is called a backend VM.
     */
    linkLoadBalancerBackendMachines(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.linkLoadBalancerBackendMachinesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Lists the tags associated with one or more specified load balancers.
     */
    readLoadBalancerTagsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = (0, models_1.ReadLoadBalancerTagsRequestToJSON)(requestParameters.readLoadBalancerTagsRequest);
            const request = {
                path: `/ReadLoadBalancerTags`,
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
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ReadLoadBalancerTagsResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Lists the tags associated with one or more specified load balancers.
     */
    readLoadBalancerTags(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readLoadBalancerTagsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Lists one or more load balancers and their attributes.
     */
    readLoadBalancersRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = (0, models_1.ReadLoadBalancersRequestToJSON)(requestParameters.readLoadBalancersRequest);
            const request = {
                path: `/ReadLoadBalancers`,
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
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ReadLoadBalancersResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Lists one or more load balancers and their attributes.
     */
    readLoadBalancers(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readLoadBalancersRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Lists the state of one or more backend virtual machines (VMs) registered with a specified load balancer.
     */
    readVmsHealthRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = (0, models_1.ReadVmsHealthRequestToJSON)(requestParameters.readVmsHealthRequest);
            const request = {
                path: `/ReadVmsHealth`,
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
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ReadVmsHealthResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Lists the state of one or more backend virtual machines (VMs) registered with a specified load balancer.
     */
    readVmsHealth(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readVmsHealthRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * > [WARNING]<br /> > Deprecated: This call is deprecated and will be removed.<br />  Registers one or more virtual machines (VMs) with a specified load balancer.<br /> The VMs can be in different Subnets and different Subregions than the load balancer, as long as the VMs and load balancers are all in the public Cloud or all in the same Net. It may take a little time for a VM to be registered with the load balancer. Once the VM is registered with a load balancer, it receives traffic and requests from this load balancer and is called a backend VM.
     */
    registerVmsInLoadBalancerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = (0, models_1.RegisterVmsInLoadBalancerRequestToJSON)(requestParameters.registerVmsInLoadBalancerRequest);
            const request = {
                path: `/RegisterVmsInLoadBalancer`,
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
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.RegisterVmsInLoadBalancerResponseFromJSON)(jsonValue));
        });
    }
    /**
     * > [WARNING]<br /> > Deprecated: This call is deprecated and will be removed.<br />  Registers one or more virtual machines (VMs) with a specified load balancer.<br /> The VMs can be in different Subnets and different Subregions than the load balancer, as long as the VMs and load balancers are all in the public Cloud or all in the same Net. It may take a little time for a VM to be registered with the load balancer. Once the VM is registered with a load balancer, it receives traffic and requests from this load balancer and is called a backend VM.
     */
    registerVmsInLoadBalancer(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.registerVmsInLoadBalancerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Detaches one or more backend virtual machines (VMs) from a load balancer. You need to specify at least the `BackendIps` or the `BackendVmIds` parameter.
     */
    unlinkLoadBalancerBackendMachinesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = (0, models_1.UnlinkLoadBalancerBackendMachinesRequestToJSON)(requestParameters.unlinkLoadBalancerBackendMachinesRequest);
            const request = {
                path: `/UnlinkLoadBalancerBackendMachines`,
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
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.UnlinkLoadBalancerBackendMachinesResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Detaches one or more backend virtual machines (VMs) from a load balancer. You need to specify at least the `BackendIps` or the `BackendVmIds` parameter.
     */
    unlinkLoadBalancerBackendMachines(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.unlinkLoadBalancerBackendMachinesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Modifies the specified attribute of a load balancer. You can specify only one attribute at a time.<br /><br />  You can set a new SSL certificate to an SSL or HTTPS listener of a load balancer.<br /> This certificate replaces any certificate used on the same load balancer and port.<br /><br />  You can also replace the currently enabled policy for the load balancer with another one.<br /> If the `PolicyNames` parameter is empty, the currently enabled policy is disabled.
     */
    updateLoadBalancerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = (0, models_1.UpdateLoadBalancerRequestToJSON)(requestParameters.updateLoadBalancerRequest);
            const request = {
                path: `/UpdateLoadBalancer`,
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
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.UpdateLoadBalancerResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Modifies the specified attribute of a load balancer. You can specify only one attribute at a time.<br /><br />  You can set a new SSL certificate to an SSL or HTTPS listener of a load balancer.<br /> This certificate replaces any certificate used on the same load balancer and port.<br /><br />  You can also replace the currently enabled policy for the load balancer with another one.<br /> If the `PolicyNames` parameter is empty, the currently enabled policy is disabled.
     */
    updateLoadBalancer(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateLoadBalancerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.LoadBalancerApi = LoadBalancerApi;
