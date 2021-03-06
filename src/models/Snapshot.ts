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
import {
    PermissionsOnResource,
    PermissionsOnResourceFromJSON,
    PermissionsOnResourceFromJSONTyped,
    PermissionsOnResourceToJSON,
} from './PermissionsOnResource';
import {
    ResourceTag,
    ResourceTagFromJSON,
    ResourceTagFromJSONTyped,
    ResourceTagToJSON,
} from './ResourceTag';

/**
 * Information about the snapshot.
 * @export
 * @interface Snapshot
 */
export interface Snapshot {
    /**
     * The account alias of the owner of the snapshot.
     * @type {string}
     * @memberof Snapshot
     */
    accountAlias?: string;
    /**
     * The account ID of the owner of the snapshot.
     * @type {string}
     * @memberof Snapshot
     */
    accountId?: string;
    /**
     * The date and time of creation of the snapshot.
     * @type {string}
     * @memberof Snapshot
     */
    creationDate?: string;
    /**
     * The description of the snapshot.
     * @type {string}
     * @memberof Snapshot
     */
    description?: string;
    /**
     * 
     * @type {PermissionsOnResource}
     * @memberof Snapshot
     */
    permissionsToCreateVolume?: PermissionsOnResource;
    /**
     * The progress of the snapshot, as a percentage.
     * @type {number}
     * @memberof Snapshot
     */
    progress?: number;
    /**
     * The ID of the snapshot.
     * @type {string}
     * @memberof Snapshot
     */
    snapshotId?: string;
    /**
     * The state of the snapshot (`in-queue` \| `completed` \| `error`).
     * @type {string}
     * @memberof Snapshot
     */
    state?: string;
    /**
     * One or more tags associated with the snapshot.
     * @type {Array<ResourceTag>}
     * @memberof Snapshot
     */
    tags?: Array<ResourceTag>;
    /**
     * The ID of the volume used to create the snapshot.
     * @type {string}
     * @memberof Snapshot
     */
    volumeId?: string;
    /**
     * The size of the volume used to create the snapshot, in gibibytes (GiB).
     * @type {number}
     * @memberof Snapshot
     */
    volumeSize?: number;
}

export function SnapshotFromJSON(json: any): Snapshot {
    return SnapshotFromJSONTyped(json, false);
}

export function SnapshotFromJSONTyped(json: any, ignoreDiscriminator: boolean): Snapshot {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountAlias': !exists(json, 'AccountAlias') ? undefined : json['AccountAlias'],
        'accountId': !exists(json, 'AccountId') ? undefined : json['AccountId'],
        'creationDate': !exists(json, 'CreationDate') ? undefined : json['CreationDate'],
        'description': !exists(json, 'Description') ? undefined : json['Description'],
        'permissionsToCreateVolume': !exists(json, 'PermissionsToCreateVolume') ? undefined : PermissionsOnResourceFromJSON(json['PermissionsToCreateVolume']),
        'progress': !exists(json, 'Progress') ? undefined : json['Progress'],
        'snapshotId': !exists(json, 'SnapshotId') ? undefined : json['SnapshotId'],
        'state': !exists(json, 'State') ? undefined : json['State'],
        'tags': !exists(json, 'Tags') ? undefined : ((json['Tags'] as Array<any>).map(ResourceTagFromJSON)),
        'volumeId': !exists(json, 'VolumeId') ? undefined : json['VolumeId'],
        'volumeSize': !exists(json, 'VolumeSize') ? undefined : json['VolumeSize'],
    };
}

export function SnapshotToJSON(value?: Snapshot | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'AccountAlias': value.accountAlias,
        'AccountId': value.accountId,
        'CreationDate': value.creationDate,
        'Description': value.description,
        'PermissionsToCreateVolume': PermissionsOnResourceToJSON(value.permissionsToCreateVolume),
        'Progress': value.progress,
        'SnapshotId': value.snapshotId,
        'State': value.state,
        'Tags': value.tags === undefined ? undefined : ((value.tags as Array<any>).map(ResourceTagToJSON)),
        'VolumeId': value.volumeId,
        'VolumeSize': value.volumeSize,
    };
}

