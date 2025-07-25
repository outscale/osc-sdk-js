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
import { AccessLog } from './AccessLog';
import { ApplicationStickyCookiePolicy } from './ApplicationStickyCookiePolicy';
import { HealthCheck } from './HealthCheck';
import { Listener } from './Listener';
import { LoadBalancerStickyCookiePolicy } from './LoadBalancerStickyCookiePolicy';
import { ResourceTag } from './ResourceTag';
import { SourceSecurityGroup } from './SourceSecurityGroup';
/**
 * Information about the load balancer.
 * @export
 * @interface LoadBalancer
 */
export interface LoadBalancer {
    /**
     *
     * @type {AccessLog}
     * @memberof LoadBalancer
     */
    accessLog?: AccessLog;
    /**
     * The stickiness policies defined for the load balancer.
     * @type {Array<ApplicationStickyCookiePolicy>}
     * @memberof LoadBalancer
     */
    applicationStickyCookiePolicies?: Array<ApplicationStickyCookiePolicy>;
    /**
     * One or more public IPs of backend VMs.
     * @type {Array<string>}
     * @memberof LoadBalancer
     */
    backendIps?: Array<string>;
    /**
     * One or more IDs of backend VMs for the load balancer.
     * @type {Array<string>}
     * @memberof LoadBalancer
     */
    backendVmIds?: Array<string>;
    /**
     * The DNS name of the load balancer.
     * @type {string}
     * @memberof LoadBalancer
     */
    dnsName?: string;
    /**
     *
     * @type {HealthCheck}
     * @memberof LoadBalancer
     */
    healthCheck?: HealthCheck;
    /**
     * The listeners for the load balancer.
     * @type {Array<Listener>}
     * @memberof LoadBalancer
     */
    listeners?: Array<Listener>;
    /**
     * The name of the load balancer.
     * @type {string}
     * @memberof LoadBalancer
     */
    loadBalancerName?: string;
    /**
     * The policies defined for the load balancer.
     * @type {Array<LoadBalancerStickyCookiePolicy>}
     * @memberof LoadBalancer
     */
    loadBalancerStickyCookiePolicies?: Array<LoadBalancerStickyCookiePolicy>;
    /**
     * The type of load balancer. Valid only for load balancers in a Net.<br />
     * If `LoadBalancerType` is `internet-facing`, the load balancer has a public DNS name that resolves to a public IP.<br />
     * If `LoadBalancerType` is `internal`, the load balancer has a public DNS name that resolves to a private IP.
     * @type {string}
     * @memberof LoadBalancer
     */
    loadBalancerType?: string;
    /**
     * The ID of the Net for the load balancer.
     * @type {string}
     * @memberof LoadBalancer
     */
    netId?: string;
    /**
     * (internet-facing only) The public IP associated with the load balancer.
     * @type {string}
     * @memberof LoadBalancer
     */
    publicIp?: string;
    /**
     * Whether secure cookies are enabled for the load balancer.
     * @type {boolean}
     * @memberof LoadBalancer
     */
    securedCookies?: boolean;
    /**
     * One or more IDs of security groups for the load balancers. Valid only for load balancers in a Net.
     * @type {Array<string>}
     * @memberof LoadBalancer
     */
    securityGroups?: Array<string>;
    /**
     *
     * @type {SourceSecurityGroup}
     * @memberof LoadBalancer
     */
    sourceSecurityGroup?: SourceSecurityGroup;
    /**
     * The ID of the Subnet in which the load balancer was created.
     * @type {Array<string>}
     * @memberof LoadBalancer
     */
    subnets?: Array<string>;
    /**
     * The ID of the Subregion in which the load balancer was created.
     * @type {Array<string>}
     * @memberof LoadBalancer
     */
    subregionNames?: Array<string>;
    /**
     * One or more tags associated with the load balancer.
     * @type {Array<ResourceTag>}
     * @memberof LoadBalancer
     */
    tags?: Array<ResourceTag>;
}
export declare function LoadBalancerFromJSON(json: any): LoadBalancer;
export declare function LoadBalancerFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoadBalancer;
export declare function LoadBalancerToJSON(value?: LoadBalancer | null): any;
