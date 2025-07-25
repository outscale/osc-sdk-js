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
exports.SnapshotApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class SnapshotApi extends runtime.BaseAPI {
    /**
     * Creates a snapshot. Snapshots are point-in-time images of a volume that you can use to back up your data or to create replicas of this volume.<br /> You can use this method in three different ways: * **Creating from a volume**: You create a snapshot from one of your volumes.<br /> * **Copying a snapshot**: You copy an existing snapshot. The source snapshot can be one of your own snapshots, or a snapshot owned by another account that has granted you permission via the [UpdateSnapshot](#updatesnapshot) method.<br /> * **Importing from a bucket**: You import a snapshot located in an OUTSCALE Object Storage (OOS) bucket. First, the owner of the source snapshot must export it to a bucket by using the [CreateSnapshotExportTask](#createsnapshotexporttask) method. Then, they must grant you permission to read the snapshot via a pre-signed URL. For more information, see [Creating a Pre-Signed URL](https://docs.outscale.com/en/userguide/Creating-a-Pre-Signed-URL.html).  **[NOTE]**<br /> In case of excessive use of the snapshot creation feature on the same volume over a short period of time, 3DS OUTSCALE reserves the right to temporarily block the feature.  For more information, see [About Snapshots](https://docs.outscale.com/en/userguide/About-Snapshots.html).
     */
    createSnapshotRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = (0, models_1.CreateSnapshotRequestToJSON)(requestParameters.createSnapshotRequest);
            const request = {
                path: `/CreateSnapshot`,
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
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.CreateSnapshotResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Creates a snapshot. Snapshots are point-in-time images of a volume that you can use to back up your data or to create replicas of this volume.<br /> You can use this method in three different ways: * **Creating from a volume**: You create a snapshot from one of your volumes.<br /> * **Copying a snapshot**: You copy an existing snapshot. The source snapshot can be one of your own snapshots, or a snapshot owned by another account that has granted you permission via the [UpdateSnapshot](#updatesnapshot) method.<br /> * **Importing from a bucket**: You import a snapshot located in an OUTSCALE Object Storage (OOS) bucket. First, the owner of the source snapshot must export it to a bucket by using the [CreateSnapshotExportTask](#createsnapshotexporttask) method. Then, they must grant you permission to read the snapshot via a pre-signed URL. For more information, see [Creating a Pre-Signed URL](https://docs.outscale.com/en/userguide/Creating-a-Pre-Signed-URL.html).  **[NOTE]**<br /> In case of excessive use of the snapshot creation feature on the same volume over a short period of time, 3DS OUTSCALE reserves the right to temporarily block the feature.  For more information, see [About Snapshots](https://docs.outscale.com/en/userguide/About-Snapshots.html).
     */
    createSnapshot(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createSnapshotRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Exports a snapshot to an OUTSCALE Object Storage (OOS) bucket that belongs to you. This action enables you to create a backup of your snapshot.<br /><br /> You can share this snapshot with others accounts by granting permission to read it via pre-signed URLs. For more information, see [Creating a Pre-Signed URL](https://docs.outscale.com/en/userguide/Creating-a-Pre-Signed-URL.html).<br /><br /> For more information, see [About Snapshots](https://docs.outscale.com/en/userguide/About-Snapshots.html).
     */
    createSnapshotExportTaskRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = (0, models_1.CreateSnapshotExportTaskRequestToJSON)(requestParameters.createSnapshotExportTaskRequest);
            const request = {
                path: `/CreateSnapshotExportTask`,
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
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.CreateSnapshotExportTaskResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Exports a snapshot to an OUTSCALE Object Storage (OOS) bucket that belongs to you. This action enables you to create a backup of your snapshot.<br /><br /> You can share this snapshot with others accounts by granting permission to read it via pre-signed URLs. For more information, see [Creating a Pre-Signed URL](https://docs.outscale.com/en/userguide/Creating-a-Pre-Signed-URL.html).<br /><br /> For more information, see [About Snapshots](https://docs.outscale.com/en/userguide/About-Snapshots.html).
     */
    createSnapshotExportTask(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createSnapshotExportTaskRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Deletes a specified snapshot.<br /> You cannot delete a snapshot that is currently used by an OUTSCALE machine image (OMI). To do so, you first need to delete the corresponding OMI. For more information, see the [DeleteImage](#deleteimage) method.
     */
    deleteSnapshotRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = (0, models_1.DeleteSnapshotRequestToJSON)(requestParameters.deleteSnapshotRequest);
            const request = {
                path: `/DeleteSnapshot`,
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
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.DeleteSnapshotResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Deletes a specified snapshot.<br /> You cannot delete a snapshot that is currently used by an OUTSCALE machine image (OMI). To do so, you first need to delete the corresponding OMI. For more information, see the [DeleteImage](#deleteimage) method.
     */
    deleteSnapshot(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteSnapshotRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Lists one or more snapshot export tasks.
     */
    readSnapshotExportTasksRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = (0, models_1.ReadSnapshotExportTasksRequestToJSON)(requestParameters.readSnapshotExportTasksRequest);
            const request = {
                path: `/ReadSnapshotExportTasks`,
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
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ReadSnapshotExportTasksResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Lists one or more snapshot export tasks.
     */
    readSnapshotExportTasks(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readSnapshotExportTasksRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Lists one or more snapshots that are available to you and the permissions to create volumes from them.
     */
    readSnapshotsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = (0, models_1.ReadSnapshotsRequestToJSON)(requestParameters.readSnapshotsRequest);
            const request = {
                path: `/ReadSnapshots`,
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
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ReadSnapshotsResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Lists one or more snapshots that are available to you and the permissions to create volumes from them.
     */
    readSnapshots(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.readSnapshotsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Modifies the permissions for a specified snapshot.<br /> You must specify either the `Additions` or the `Removals` parameter.<br /> After sharing a snapshot with an account, the other account can create a copy of it that they own. For more information about copying snapshots, see [CreateSnapshot](#createsnapshot).
     */
    updateSnapshotRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const body = (0, models_1.UpdateSnapshotRequestToJSON)(requestParameters.updateSnapshotRequest);
            const request = {
                path: `/UpdateSnapshot`,
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
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.UpdateSnapshotResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Modifies the permissions for a specified snapshot.<br /> You must specify either the `Additions` or the `Removals` parameter.<br /> After sharing a snapshot with an account, the other account can create a copy of it that they own. For more information about copying snapshots, see [CreateSnapshot](#createsnapshot).
     */
    updateSnapshot(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateSnapshotRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.SnapshotApi = SnapshotApi;
