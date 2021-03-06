"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAccountRequestToJSON = exports.UpdateAccountRequestFromJSONTyped = exports.UpdateAccountRequestFromJSON = void 0;
const runtime_1 = require("../runtime");
function UpdateAccountRequestFromJSON(json) {
    return UpdateAccountRequestFromJSONTyped(json, false);
}
exports.UpdateAccountRequestFromJSON = UpdateAccountRequestFromJSON;
function UpdateAccountRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'additionalEmails': !(0, runtime_1.exists)(json, 'AdditionalEmails') ? undefined : json['AdditionalEmails'],
        'city': !(0, runtime_1.exists)(json, 'City') ? undefined : json['City'],
        'companyName': !(0, runtime_1.exists)(json, 'CompanyName') ? undefined : json['CompanyName'],
        'country': !(0, runtime_1.exists)(json, 'Country') ? undefined : json['Country'],
        'dryRun': !(0, runtime_1.exists)(json, 'DryRun') ? undefined : json['DryRun'],
        'email': !(0, runtime_1.exists)(json, 'Email') ? undefined : json['Email'],
        'firstName': !(0, runtime_1.exists)(json, 'FirstName') ? undefined : json['FirstName'],
        'jobTitle': !(0, runtime_1.exists)(json, 'JobTitle') ? undefined : json['JobTitle'],
        'lastName': !(0, runtime_1.exists)(json, 'LastName') ? undefined : json['LastName'],
        'mobileNumber': !(0, runtime_1.exists)(json, 'MobileNumber') ? undefined : json['MobileNumber'],
        'phoneNumber': !(0, runtime_1.exists)(json, 'PhoneNumber') ? undefined : json['PhoneNumber'],
        'stateProvince': !(0, runtime_1.exists)(json, 'StateProvince') ? undefined : json['StateProvince'],
        'vatNumber': !(0, runtime_1.exists)(json, 'VatNumber') ? undefined : json['VatNumber'],
        'zipCode': !(0, runtime_1.exists)(json, 'ZipCode') ? undefined : json['ZipCode'],
    };
}
exports.UpdateAccountRequestFromJSONTyped = UpdateAccountRequestFromJSONTyped;
function UpdateAccountRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'AdditionalEmails': value.additionalEmails,
        'City': value.city,
        'CompanyName': value.companyName,
        'Country': value.country,
        'DryRun': value.dryRun,
        'Email': value.email,
        'FirstName': value.firstName,
        'JobTitle': value.jobTitle,
        'LastName': value.lastName,
        'MobileNumber': value.mobileNumber,
        'PhoneNumber': value.phoneNumber,
        'StateProvince': value.stateProvince,
        'VatNumber': value.vatNumber,
        'ZipCode': value.zipCode,
    };
}
exports.UpdateAccountRequestToJSON = UpdateAccountRequestToJSON;
