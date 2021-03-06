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

import { exists, mapValues } from '../runtime';
/**
 * Information about the listener to create.
 * @export
 * @interface ListenerForCreation
 */
export interface ListenerForCreation {
    /**
     * The port on which the back-end VM is listening (between `1` and `65535`, both included).
     * @type {number}
     * @memberof ListenerForCreation
     */
    backendPort: number;
    /**
     * The protocol for routing traffic to back-end VMs (`HTTP` \| `HTTPS` \| `TCP` \| `SSL`).
     * @type {string}
     * @memberof ListenerForCreation
     */
    backendProtocol?: string;
    /**
     * The port on which the load balancer is listening (between `1` and `65535`, both included).
     * @type {number}
     * @memberof ListenerForCreation
     */
    loadBalancerPort: number;
    /**
     * The routing protocol (`HTTP` \| `HTTPS` \| `TCP` \| `SSL`).
     * @type {string}
     * @memberof ListenerForCreation
     */
    loadBalancerProtocol: string;
    /**
     * The OUTSCALE Resource Name (ORN) of the server certificate. For more information, see [Resource Identifiers > OUTSCALE Resource Names (ORNs)](https://docs.outscale.com/en/userguide/Resource-Identifiers.html#_outscale_resource_names_orns).
     * @type {string}
     * @memberof ListenerForCreation
     */
    serverCertificateId?: string;
}

export function ListenerForCreationFromJSON(json: any): ListenerForCreation {
    return ListenerForCreationFromJSONTyped(json, false);
}

export function ListenerForCreationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListenerForCreation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'backendPort': json['BackendPort'],
        'backendProtocol': !exists(json, 'BackendProtocol') ? undefined : json['BackendProtocol'],
        'loadBalancerPort': json['LoadBalancerPort'],
        'loadBalancerProtocol': json['LoadBalancerProtocol'],
        'serverCertificateId': !exists(json, 'ServerCertificateId') ? undefined : json['ServerCertificateId'],
    };
}

export function ListenerForCreationToJSON(value?: ListenerForCreation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'BackendPort': value.backendPort,
        'BackendProtocol': value.backendProtocol,
        'LoadBalancerPort': value.loadBalancerPort,
        'LoadBalancerProtocol': value.loadBalancerProtocol,
        'ServerCertificateId': value.serverCertificateId,
    };
}

