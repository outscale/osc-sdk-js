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
import { exists } from '../runtime';
export function QuotaFromJSON(json) {
    return QuotaFromJSONTyped(json, false);
}
export function QuotaFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountId': !exists(json, 'AccountId') ? undefined : json['AccountId'],
        'description': !exists(json, 'Description') ? undefined : json['Description'],
        'maxValue': !exists(json, 'MaxValue') ? undefined : json['MaxValue'],
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'quotaCollection': !exists(json, 'QuotaCollection') ? undefined : json['QuotaCollection'],
        'shortDescription': !exists(json, 'ShortDescription') ? undefined : json['ShortDescription'],
        'usedValue': !exists(json, 'UsedValue') ? undefined : json['UsedValue'],
    };
}
export function QuotaToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'AccountId': value.accountId,
        'Description': value.description,
        'MaxValue': value.maxValue,
        'Name': value.name,
        'QuotaCollection': value.quotaCollection,
        'ShortDescription': value.shortDescription,
        'UsedValue': value.usedValue,
    };
}
