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
import { BootMode } from './BootMode';
/**
 * One or more filters.
 * @export
 * @interface FiltersVm
 */
export interface FiltersVm {
    /**
     * The architectures of the VMs (`i386` \| `x86_64`).
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    architectures?: Array<string>;
    /**
     * Whether the BSU volumes are deleted when terminating the VMs.
     * @type {boolean}
     * @memberof FiltersVm
     */
    blockDeviceMappingDeleteOnVmDeletion?: boolean;
    /**
     * The device names for the BSU volumes (in the format `/dev/sdX`, `/dev/sdXX`, `/dev/xvdX`, or `/dev/xvdXX`).
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    blockDeviceMappingDeviceNames?: Array<string>;
    /**
     * The link dates for the BSU volumes mapped to the VMs (for example, `2016-01-23T18:45:30.000Z`).
     * @type {Array<Date>}
     * @memberof FiltersVm
     */
    blockDeviceMappingLinkDates?: Array<Date>;
    /**
     * The states for the BSU volumes (`attaching` \| `attached` \| `detaching` \| `detached`).
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    blockDeviceMappingStates?: Array<string>;
    /**
     * The volume IDs of the BSU volumes.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    blockDeviceMappingVolumeIds?: Array<string>;
    /**
     * The boot modes of the VMs.
     * @type {Array<BootMode>}
     * @memberof FiltersVm
     */
    bootModes?: Array<BootMode>;
    /**
     * The idempotency tokens provided when launching the VMs.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    clientTokens?: Array<string>;
    /**
     * The dates when the VMs were launched.
     * @type {Array<Date>}
     * @memberof FiltersVm
     */
    creationDates?: Array<Date>;
    /**
     * The IDs of the OMIs used to launch the VMs.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    imageIds?: Array<string>;
    /**
     * Whether the source/destination checking is enabled (true) or disabled (false).
     * @type {boolean}
     * @memberof FiltersVm
     */
    isSourceDestChecked?: boolean;
    /**
     * The names of the keypairs used when launching the VMs.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    keypairNames?: Array<string>;
    /**
     * The numbers for the VMs when launching a group of several VMs (for example, `0`, `1`, `2`, and so on).
     * @type {Array<number>}
     * @memberof FiltersVm
     */
    launchNumbers?: Array<number>;
    /**
     * Whether the VMs are Spot Instances (spot).
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    lifecycles?: Array<string>;
    /**
     * The IDs of the Nets in which the VMs are running.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    netIds?: Array<string>;
    /**
     * The IDs of the NICs.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    nicAccountIds?: Array<string>;
    /**
     * The descriptions of the NICs.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    nicDescriptions?: Array<string>;
    /**
     * Whether the source/destination checking is enabled (true) or disabled (false).
     * @type {boolean}
     * @memberof FiltersVm
     */
    nicIsSourceDestChecked?: boolean;
    /**
     * Whether the NICs are deleted when the VMs they are attached to are deleted.
     * @type {boolean}
     * @memberof FiltersVm
     */
    nicLinkNicDeleteOnVmDeletion?: boolean;
    /**
     * The device numbers the NICs are attached to.
     * @type {Array<number>}
     * @memberof FiltersVm
     */
    nicLinkNicDeviceNumbers?: Array<number>;
    /**
     * The dates and times (UTC) when the NICs were attached to the VMs.
     * @type {Array<Date>}
     * @memberof FiltersVm
     */
    nicLinkNicLinkNicDates?: Array<Date>;
    /**
     * The IDs of the NIC attachments.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    nicLinkNicLinkNicIds?: Array<string>;
    /**
     * The states of the attachments.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    nicLinkNicStates?: Array<string>;
    /**
     * The account IDs of the owners of the VMs the NICs are attached to.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    nicLinkNicVmAccountIds?: Array<string>;
    /**
     * The IDs of the VMs the NICs are attached to.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    nicLinkNicVmIds?: Array<string>;
    /**
     * The account IDs of the owners of the public IPs associated with the NICs.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    nicLinkPublicIpAccountIds?: Array<string>;
    /**
     * The association IDs returned when the public IPs were associated with the NICs.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    nicLinkPublicIpLinkPublicIpIds?: Array<string>;
    /**
     * The allocation IDs returned when the public IPs were allocated to their accounts.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    nicLinkPublicIpPublicIpIds?: Array<string>;
    /**
     * The public IPs associated with the NICs.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    nicLinkPublicIpPublicIps?: Array<string>;
    /**
     * The Media Access Control (MAC) addresses of the NICs.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    nicMacAddresses?: Array<string>;
    /**
     * The IDs of the Nets where the NICs are located.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    nicNetIds?: Array<string>;
    /**
     * The IDs of the NICs.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    nicNicIds?: Array<string>;
    /**
     * The account IDs of the owner of the public IPs associated with the private IPs.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    nicPrivateIpsLinkPublicIpAccountIds?: Array<string>;
    /**
     * The public IPs associated with the private IPs.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    nicPrivateIpsLinkPublicIpIds?: Array<string>;
    /**
     * Whether the private IPs are the primary IPs associated with the NICs.
     * @type {boolean}
     * @memberof FiltersVm
     */
    nicPrivateIpsPrimaryIp?: boolean;
    /**
     * The private IPs of the NICs.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    nicPrivateIpsPrivateIps?: Array<string>;
    /**
     * The IDs of the security groups associated with the NICs.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    nicSecurityGroupIds?: Array<string>;
    /**
     * The names of the security groups associated with the NICs.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    nicSecurityGroupNames?: Array<string>;
    /**
     * The states of the NICs (`available` \| `in-use`).
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    nicStates?: Array<string>;
    /**
     * The IDs of the Subnets for the NICs.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    nicSubnetIds?: Array<string>;
    /**
     * The Subregions where the NICs are located.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    nicSubregionNames?: Array<string>;
    /**
     * The platforms. Use windows if you have Windows VMs. Otherwise, leave this filter blank.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    platforms?: Array<string>;
    /**
     * The private IPs of the VMs.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    privateIps?: Array<string>;
    /**
     * The product codes associated with the OMI used to create the VMs.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    productCodes?: Array<string>;
    /**
     * The public IPs of the VMs.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    publicIps?: Array<string>;
    /**
     * The IDs of the reservation of the VMs, created every time you launch VMs. These reservation IDs can be associated with several VMs when you launch a group of VMs using the same launch request.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    reservationIds?: Array<string>;
    /**
     * The names of the root devices for the VMs (for example, `/dev/sda1`)
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    rootDeviceNames?: Array<string>;
    /**
     * The root devices types used by the VMs (always `ebs`)
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    rootDeviceTypes?: Array<string>;
    /**
     * The IDs of the security groups for the VMs (only in the public Cloud).
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    securityGroupIds?: Array<string>;
    /**
     * The names of the security groups for the VMs (only in the public Cloud).
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    securityGroupNames?: Array<string>;
    /**
     * The reason codes for the state changes.
     * @type {Array<number>}
     * @memberof FiltersVm
     */
    stateReasonCodes?: Array<number>;
    /**
     * The messages describing the state changes.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    stateReasonMessages?: Array<string>;
    /**
     * The reasons explaining the current states of the VMs. This filter is like the `StateReasonCodes` one.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    stateReasons?: Array<string>;
    /**
     * The IDs of the Subnets for the VMs.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    subnetIds?: Array<string>;
    /**
     * The names of the Subregions of the VMs.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    subregionNames?: Array<string>;
    /**
     * The keys of the tags associated with the VMs.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    tagKeys?: Array<string>;
    /**
     * The values of the tags associated with the VMs.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    tagValues?: Array<string>;
    /**
     * The key/value combination of the tags associated with the VMs, in the following format: &quot;Filters&quot;:{&quot;Tags&quot;:[&quot;TAGKEY=TAGVALUE&quot;]}.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    tags?: Array<string>;
    /**
     * The tenancies of the VMs (`dedicated` \| `default` \| `host`).
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    tenancies?: Array<string>;
    /**
     * One or more IDs of VMs.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    vmIds?: Array<string>;
    /**
     * The IDs of the security groups for the VMs.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    vmSecurityGroupIds?: Array<string>;
    /**
     * The names of the security group for the VMs.
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    vmSecurityGroupNames?: Array<string>;
    /**
     * The state codes of the VMs: `-1` (quarantine), `0` (pending), `16` (running), `32` (shutting-down), `48` (terminated), `64` (stopping), and `80` (stopped).
     * @type {Array<number>}
     * @memberof FiltersVm
     */
    vmStateCodes?: Array<number>;
    /**
     * The state names of the VMs (`pending` \| `running` \| `stopping` \| `stopped` \| `shutting-down` \| `terminated` \| `quarantine`).
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    vmStateNames?: Array<string>;
    /**
     * The VM types (for example, t2.micro). For more information, see [VM Types](https://docs.outscale.com/en/userguide/VM-Types.html).
     * @type {Array<string>}
     * @memberof FiltersVm
     */
    vmTypes?: Array<string>;
}
export declare function FiltersVmFromJSON(json: any): FiltersVm;
export declare function FiltersVmFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiltersVm;
export declare function FiltersVmToJSON(value?: FiltersVm | null): any;
