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
 * 
 * @export
 * @interface CreateVolumeRequest
 */
export interface CreateVolumeRequest {
    /**
     * If true, checks whether you have the required permissions to perform the action.
     * @type {boolean}
     * @memberof CreateVolumeRequest
     */
    dryRun?: boolean;
    /**
     * The number of I/O operations per second (IOPS). This parameter must be specified only if you create an `io1` volume. The maximum number of IOPS allowed for `io1` volumes is `13000`.
     * @type {number}
     * @memberof CreateVolumeRequest
     */
    iops?: number;
    /**
     * The size of the volume, in gibibytes (GiB). The maximum allowed size for a volume is 14901 GiB. This parameter is required if the volume is not created from a snapshot (`SnapshotId` unspecified). 
     * @type {number}
     * @memberof CreateVolumeRequest
     */
    size?: number;
    /**
     * The ID of the snapshot from which you want to create the volume.
     * @type {string}
     * @memberof CreateVolumeRequest
     */
    snapshotId?: string;
    /**
     * The Subregion in which you want to create the volume.
     * @type {string}
     * @memberof CreateVolumeRequest
     */
    subregionName: string;
    /**
     * The type of volume you want to create (`io1` \| `gp2` \| `standard`). If not specified, a `standard` volume is created.<br />
     * For more information about volume types, see [About Volumes > Volume Types and IOPS](https://docs.outscale.com/en/userguide/About-Volumes.html#_volume_types_and_iops).
     * @type {string}
     * @memberof CreateVolumeRequest
     */
    volumeType?: string;
}

export function CreateVolumeRequestFromJSON(json: any): CreateVolumeRequest {
    return CreateVolumeRequestFromJSONTyped(json, false);
}

export function CreateVolumeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateVolumeRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dryRun': !exists(json, 'DryRun') ? undefined : json['DryRun'],
        'iops': !exists(json, 'Iops') ? undefined : json['Iops'],
        'size': !exists(json, 'Size') ? undefined : json['Size'],
        'snapshotId': !exists(json, 'SnapshotId') ? undefined : json['SnapshotId'],
        'subregionName': json['SubregionName'],
        'volumeType': !exists(json, 'VolumeType') ? undefined : json['VolumeType'],
    };
}

export function CreateVolumeRequestToJSON(value?: CreateVolumeRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'DryRun': value.dryRun,
        'Iops': value.iops,
        'Size': value.size,
        'SnapshotId': value.snapshotId,
        'SubregionName': value.subregionName,
        'VolumeType': value.volumeType,
    };
}

