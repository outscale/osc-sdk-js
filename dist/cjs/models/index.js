"use strict";
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
/* eslint-disable */
__exportStar(require("./AcceptNetPeeringRequest"), exports);
__exportStar(require("./AcceptNetPeeringResponse"), exports);
__exportStar(require("./AccepterNet"), exports);
__exportStar(require("./AccessKey"), exports);
__exportStar(require("./AccessKeySecretKey"), exports);
__exportStar(require("./AccessLog"), exports);
__exportStar(require("./Account"), exports);
__exportStar(require("./ActionsOnNextBoot"), exports);
__exportStar(require("./AddUserToUserGroupRequest"), exports);
__exportStar(require("./AddUserToUserGroupResponse"), exports);
__exportStar(require("./ApiAccessPolicy"), exports);
__exportStar(require("./ApiAccessRule"), exports);
__exportStar(require("./ApplicationStickyCookiePolicy"), exports);
__exportStar(require("./BackendVmHealth"), exports);
__exportStar(require("./BlockDeviceMappingCreated"), exports);
__exportStar(require("./BlockDeviceMappingImage"), exports);
__exportStar(require("./BlockDeviceMappingVmCreation"), exports);
__exportStar(require("./BlockDeviceMappingVmUpdate"), exports);
__exportStar(require("./BootMode"), exports);
__exportStar(require("./BsuCreated"), exports);
__exportStar(require("./BsuToCreate"), exports);
__exportStar(require("./BsuToUpdateVm"), exports);
__exportStar(require("./Ca"), exports);
__exportStar(require("./Catalog"), exports);
__exportStar(require("./CatalogEntry"), exports);
__exportStar(require("./Catalogs"), exports);
__exportStar(require("./CheckAuthenticationRequest"), exports);
__exportStar(require("./CheckAuthenticationResponse"), exports);
__exportStar(require("./ClientGateway"), exports);
__exportStar(require("./ConsumptionEntry"), exports);
__exportStar(require("./CreateAccessKeyRequest"), exports);
__exportStar(require("./CreateAccessKeyResponse"), exports);
__exportStar(require("./CreateAccountRequest"), exports);
__exportStar(require("./CreateAccountResponse"), exports);
__exportStar(require("./CreateApiAccessRuleRequest"), exports);
__exportStar(require("./CreateApiAccessRuleResponse"), exports);
__exportStar(require("./CreateCaRequest"), exports);
__exportStar(require("./CreateCaResponse"), exports);
__exportStar(require("./CreateClientGatewayRequest"), exports);
__exportStar(require("./CreateClientGatewayResponse"), exports);
__exportStar(require("./CreateDedicatedGroupRequest"), exports);
__exportStar(require("./CreateDedicatedGroupResponse"), exports);
__exportStar(require("./CreateDhcpOptionsRequest"), exports);
__exportStar(require("./CreateDhcpOptionsResponse"), exports);
__exportStar(require("./CreateDirectLinkInterfaceRequest"), exports);
__exportStar(require("./CreateDirectLinkInterfaceResponse"), exports);
__exportStar(require("./CreateDirectLinkRequest"), exports);
__exportStar(require("./CreateDirectLinkResponse"), exports);
__exportStar(require("./CreateFlexibleGpuRequest"), exports);
__exportStar(require("./CreateFlexibleGpuResponse"), exports);
__exportStar(require("./CreateImageExportTaskRequest"), exports);
__exportStar(require("./CreateImageExportTaskResponse"), exports);
__exportStar(require("./CreateImageRequest"), exports);
__exportStar(require("./CreateImageResponse"), exports);
__exportStar(require("./CreateInternetServiceRequest"), exports);
__exportStar(require("./CreateInternetServiceResponse"), exports);
__exportStar(require("./CreateKeypairRequest"), exports);
__exportStar(require("./CreateKeypairResponse"), exports);
__exportStar(require("./CreateListenerRuleRequest"), exports);
__exportStar(require("./CreateListenerRuleResponse"), exports);
__exportStar(require("./CreateLoadBalancerListenersRequest"), exports);
__exportStar(require("./CreateLoadBalancerListenersResponse"), exports);
__exportStar(require("./CreateLoadBalancerPolicyRequest"), exports);
__exportStar(require("./CreateLoadBalancerPolicyResponse"), exports);
__exportStar(require("./CreateLoadBalancerRequest"), exports);
__exportStar(require("./CreateLoadBalancerResponse"), exports);
__exportStar(require("./CreateLoadBalancerTagsRequest"), exports);
__exportStar(require("./CreateLoadBalancerTagsResponse"), exports);
__exportStar(require("./CreateNatServiceRequest"), exports);
__exportStar(require("./CreateNatServiceResponse"), exports);
__exportStar(require("./CreateNetAccessPointRequest"), exports);
__exportStar(require("./CreateNetAccessPointResponse"), exports);
__exportStar(require("./CreateNetPeeringRequest"), exports);
__exportStar(require("./CreateNetPeeringResponse"), exports);
__exportStar(require("./CreateNetRequest"), exports);
__exportStar(require("./CreateNetResponse"), exports);
__exportStar(require("./CreateNicRequest"), exports);
__exportStar(require("./CreateNicResponse"), exports);
__exportStar(require("./CreatePolicyRequest"), exports);
__exportStar(require("./CreatePolicyResponse"), exports);
__exportStar(require("./CreatePolicyVersionRequest"), exports);
__exportStar(require("./CreatePolicyVersionResponse"), exports);
__exportStar(require("./CreateProductTypeRequest"), exports);
__exportStar(require("./CreateProductTypeResponse"), exports);
__exportStar(require("./CreatePublicIpRequest"), exports);
__exportStar(require("./CreatePublicIpResponse"), exports);
__exportStar(require("./CreateRouteRequest"), exports);
__exportStar(require("./CreateRouteResponse"), exports);
__exportStar(require("./CreateRouteTableRequest"), exports);
__exportStar(require("./CreateRouteTableResponse"), exports);
__exportStar(require("./CreateSecurityGroupRequest"), exports);
__exportStar(require("./CreateSecurityGroupResponse"), exports);
__exportStar(require("./CreateSecurityGroupRuleRequest"), exports);
__exportStar(require("./CreateSecurityGroupRuleResponse"), exports);
__exportStar(require("./CreateServerCertificateRequest"), exports);
__exportStar(require("./CreateServerCertificateResponse"), exports);
__exportStar(require("./CreateSnapshotExportTaskRequest"), exports);
__exportStar(require("./CreateSnapshotExportTaskResponse"), exports);
__exportStar(require("./CreateSnapshotRequest"), exports);
__exportStar(require("./CreateSnapshotResponse"), exports);
__exportStar(require("./CreateSubnetRequest"), exports);
__exportStar(require("./CreateSubnetResponse"), exports);
__exportStar(require("./CreateTagsRequest"), exports);
__exportStar(require("./CreateTagsResponse"), exports);
__exportStar(require("./CreateUserGroupRequest"), exports);
__exportStar(require("./CreateUserGroupResponse"), exports);
__exportStar(require("./CreateUserRequest"), exports);
__exportStar(require("./CreateUserResponse"), exports);
__exportStar(require("./CreateVirtualGatewayRequest"), exports);
__exportStar(require("./CreateVirtualGatewayResponse"), exports);
__exportStar(require("./CreateVmGroupRequest"), exports);
__exportStar(require("./CreateVmGroupResponse"), exports);
__exportStar(require("./CreateVmTemplateRequest"), exports);
__exportStar(require("./CreateVmTemplateResponse"), exports);
__exportStar(require("./CreateVmsRequest"), exports);
__exportStar(require("./CreateVmsResponse"), exports);
__exportStar(require("./CreateVolumeRequest"), exports);
__exportStar(require("./CreateVolumeResponse"), exports);
__exportStar(require("./CreateVpnConnectionRequest"), exports);
__exportStar(require("./CreateVpnConnectionResponse"), exports);
__exportStar(require("./CreateVpnConnectionRouteRequest"), exports);
__exportStar(require("./CreateVpnConnectionRouteResponse"), exports);
__exportStar(require("./DedicatedGroup"), exports);
__exportStar(require("./DeleteAccessKeyRequest"), exports);
__exportStar(require("./DeleteAccessKeyResponse"), exports);
__exportStar(require("./DeleteApiAccessRuleRequest"), exports);
__exportStar(require("./DeleteApiAccessRuleResponse"), exports);
__exportStar(require("./DeleteCaRequest"), exports);
__exportStar(require("./DeleteCaResponse"), exports);
__exportStar(require("./DeleteClientGatewayRequest"), exports);
__exportStar(require("./DeleteClientGatewayResponse"), exports);
__exportStar(require("./DeleteDedicatedGroupRequest"), exports);
__exportStar(require("./DeleteDedicatedGroupResponse"), exports);
__exportStar(require("./DeleteDhcpOptionsRequest"), exports);
__exportStar(require("./DeleteDhcpOptionsResponse"), exports);
__exportStar(require("./DeleteDirectLinkInterfaceRequest"), exports);
__exportStar(require("./DeleteDirectLinkInterfaceResponse"), exports);
__exportStar(require("./DeleteDirectLinkRequest"), exports);
__exportStar(require("./DeleteDirectLinkResponse"), exports);
__exportStar(require("./DeleteExportTaskRequest"), exports);
__exportStar(require("./DeleteExportTaskResponse"), exports);
__exportStar(require("./DeleteFlexibleGpuRequest"), exports);
__exportStar(require("./DeleteFlexibleGpuResponse"), exports);
__exportStar(require("./DeleteImageRequest"), exports);
__exportStar(require("./DeleteImageResponse"), exports);
__exportStar(require("./DeleteInternetServiceRequest"), exports);
__exportStar(require("./DeleteInternetServiceResponse"), exports);
__exportStar(require("./DeleteKeypairRequest"), exports);
__exportStar(require("./DeleteKeypairResponse"), exports);
__exportStar(require("./DeleteListenerRuleRequest"), exports);
__exportStar(require("./DeleteListenerRuleResponse"), exports);
__exportStar(require("./DeleteLoadBalancerListenersRequest"), exports);
__exportStar(require("./DeleteLoadBalancerListenersResponse"), exports);
__exportStar(require("./DeleteLoadBalancerPolicyRequest"), exports);
__exportStar(require("./DeleteLoadBalancerPolicyResponse"), exports);
__exportStar(require("./DeleteLoadBalancerRequest"), exports);
__exportStar(require("./DeleteLoadBalancerResponse"), exports);
__exportStar(require("./DeleteLoadBalancerTagsRequest"), exports);
__exportStar(require("./DeleteLoadBalancerTagsResponse"), exports);
__exportStar(require("./DeleteNatServiceRequest"), exports);
__exportStar(require("./DeleteNatServiceResponse"), exports);
__exportStar(require("./DeleteNetAccessPointRequest"), exports);
__exportStar(require("./DeleteNetAccessPointResponse"), exports);
__exportStar(require("./DeleteNetPeeringRequest"), exports);
__exportStar(require("./DeleteNetPeeringResponse"), exports);
__exportStar(require("./DeleteNetRequest"), exports);
__exportStar(require("./DeleteNetResponse"), exports);
__exportStar(require("./DeleteNicRequest"), exports);
__exportStar(require("./DeleteNicResponse"), exports);
__exportStar(require("./DeletePolicyRequest"), exports);
__exportStar(require("./DeletePolicyResponse"), exports);
__exportStar(require("./DeletePolicyVersionRequest"), exports);
__exportStar(require("./DeletePolicyVersionResponse"), exports);
__exportStar(require("./DeleteProductTypeRequest"), exports);
__exportStar(require("./DeleteProductTypeResponse"), exports);
__exportStar(require("./DeletePublicIpRequest"), exports);
__exportStar(require("./DeletePublicIpResponse"), exports);
__exportStar(require("./DeleteRouteRequest"), exports);
__exportStar(require("./DeleteRouteResponse"), exports);
__exportStar(require("./DeleteRouteTableRequest"), exports);
__exportStar(require("./DeleteRouteTableResponse"), exports);
__exportStar(require("./DeleteSecurityGroupRequest"), exports);
__exportStar(require("./DeleteSecurityGroupResponse"), exports);
__exportStar(require("./DeleteSecurityGroupRuleRequest"), exports);
__exportStar(require("./DeleteSecurityGroupRuleResponse"), exports);
__exportStar(require("./DeleteServerCertificateRequest"), exports);
__exportStar(require("./DeleteServerCertificateResponse"), exports);
__exportStar(require("./DeleteSnapshotRequest"), exports);
__exportStar(require("./DeleteSnapshotResponse"), exports);
__exportStar(require("./DeleteSubnetRequest"), exports);
__exportStar(require("./DeleteSubnetResponse"), exports);
__exportStar(require("./DeleteTagsRequest"), exports);
__exportStar(require("./DeleteTagsResponse"), exports);
__exportStar(require("./DeleteUserGroupPolicyRequest"), exports);
__exportStar(require("./DeleteUserGroupPolicyResponse"), exports);
__exportStar(require("./DeleteUserGroupRequest"), exports);
__exportStar(require("./DeleteUserGroupResponse"), exports);
__exportStar(require("./DeleteUserPolicyRequest"), exports);
__exportStar(require("./DeleteUserPolicyResponse"), exports);
__exportStar(require("./DeleteUserRequest"), exports);
__exportStar(require("./DeleteUserResponse"), exports);
__exportStar(require("./DeleteVirtualGatewayRequest"), exports);
__exportStar(require("./DeleteVirtualGatewayResponse"), exports);
__exportStar(require("./DeleteVmGroupRequest"), exports);
__exportStar(require("./DeleteVmGroupResponse"), exports);
__exportStar(require("./DeleteVmTemplateRequest"), exports);
__exportStar(require("./DeleteVmTemplateResponse"), exports);
__exportStar(require("./DeleteVmsRequest"), exports);
__exportStar(require("./DeleteVmsResponse"), exports);
__exportStar(require("./DeleteVolumeRequest"), exports);
__exportStar(require("./DeleteVolumeResponse"), exports);
__exportStar(require("./DeleteVpnConnectionRequest"), exports);
__exportStar(require("./DeleteVpnConnectionResponse"), exports);
__exportStar(require("./DeleteVpnConnectionRouteRequest"), exports);
__exportStar(require("./DeleteVpnConnectionRouteResponse"), exports);
__exportStar(require("./DeregisterVmsInLoadBalancerRequest"), exports);
__exportStar(require("./DeregisterVmsInLoadBalancerResponse"), exports);
__exportStar(require("./DhcpOptionsSet"), exports);
__exportStar(require("./DirectLink"), exports);
__exportStar(require("./DirectLinkInterface"), exports);
__exportStar(require("./DirectLinkInterfaces"), exports);
__exportStar(require("./DisableOutscaleLoginForUsersRequest"), exports);
__exportStar(require("./DisableOutscaleLoginForUsersResponse"), exports);
__exportStar(require("./DisableOutscaleLoginPerUsersRequest"), exports);
__exportStar(require("./DisableOutscaleLoginPerUsersResponse"), exports);
__exportStar(require("./DisableOutscaleLoginRequest"), exports);
__exportStar(require("./DisableOutscaleLoginResponse"), exports);
__exportStar(require("./EnableOutscaleLoginForUsersRequest"), exports);
__exportStar(require("./EnableOutscaleLoginForUsersResponse"), exports);
__exportStar(require("./EnableOutscaleLoginPerUsersRequest"), exports);
__exportStar(require("./EnableOutscaleLoginPerUsersResponse"), exports);
__exportStar(require("./EnableOutscaleLoginRequest"), exports);
__exportStar(require("./EnableOutscaleLoginResponse"), exports);
__exportStar(require("./ErrorResponse"), exports);
__exportStar(require("./Errors"), exports);
__exportStar(require("./FiltersAccessKeys"), exports);
__exportStar(require("./FiltersApiAccessRule"), exports);
__exportStar(require("./FiltersApiLog"), exports);
__exportStar(require("./FiltersCa"), exports);
__exportStar(require("./FiltersCatalogs"), exports);
__exportStar(require("./FiltersClientGateway"), exports);
__exportStar(require("./FiltersDedicatedGroup"), exports);
__exportStar(require("./FiltersDhcpOptions"), exports);
__exportStar(require("./FiltersDirectLink"), exports);
__exportStar(require("./FiltersDirectLinkInterface"), exports);
__exportStar(require("./FiltersExportTask"), exports);
__exportStar(require("./FiltersFlexibleGpu"), exports);
__exportStar(require("./FiltersImage"), exports);
__exportStar(require("./FiltersInternetService"), exports);
__exportStar(require("./FiltersKeypair"), exports);
__exportStar(require("./FiltersListenerRule"), exports);
__exportStar(require("./FiltersLoadBalancer"), exports);
__exportStar(require("./FiltersNatService"), exports);
__exportStar(require("./FiltersNet"), exports);
__exportStar(require("./FiltersNetAccessPoint"), exports);
__exportStar(require("./FiltersNetPeering"), exports);
__exportStar(require("./FiltersNic"), exports);
__exportStar(require("./FiltersProductType"), exports);
__exportStar(require("./FiltersPublicIp"), exports);
__exportStar(require("./FiltersQuota"), exports);
__exportStar(require("./FiltersRouteTable"), exports);
__exportStar(require("./FiltersSecurityGroup"), exports);
__exportStar(require("./FiltersServerCertificate"), exports);
__exportStar(require("./FiltersService"), exports);
__exportStar(require("./FiltersSnapshot"), exports);
__exportStar(require("./FiltersSubnet"), exports);
__exportStar(require("./FiltersSubregion"), exports);
__exportStar(require("./FiltersTag"), exports);
__exportStar(require("./FiltersUserGroup"), exports);
__exportStar(require("./FiltersUsers"), exports);
__exportStar(require("./FiltersVirtualGateway"), exports);
__exportStar(require("./FiltersVm"), exports);
__exportStar(require("./FiltersVmGroup"), exports);
__exportStar(require("./FiltersVmTemplate"), exports);
__exportStar(require("./FiltersVmType"), exports);
__exportStar(require("./FiltersVmsState"), exports);
__exportStar(require("./FiltersVolume"), exports);
__exportStar(require("./FiltersVpnConnection"), exports);
__exportStar(require("./FlexibleGpu"), exports);
__exportStar(require("./FlexibleGpuCatalog"), exports);
__exportStar(require("./HealthCheck"), exports);
__exportStar(require("./Image"), exports);
__exportStar(require("./ImageExportTask"), exports);
__exportStar(require("./InlinePolicy"), exports);
__exportStar(require("./InternetService"), exports);
__exportStar(require("./Keypair"), exports);
__exportStar(require("./KeypairCreated"), exports);
__exportStar(require("./LinkFlexibleGpuRequest"), exports);
__exportStar(require("./LinkFlexibleGpuResponse"), exports);
__exportStar(require("./LinkInternetServiceRequest"), exports);
__exportStar(require("./LinkInternetServiceResponse"), exports);
__exportStar(require("./LinkLoadBalancerBackendMachinesRequest"), exports);
__exportStar(require("./LinkLoadBalancerBackendMachinesResponse"), exports);
__exportStar(require("./LinkManagedPolicyToUserGroupRequest"), exports);
__exportStar(require("./LinkManagedPolicyToUserGroupResponse"), exports);
__exportStar(require("./LinkNic"), exports);
__exportStar(require("./LinkNicLight"), exports);
__exportStar(require("./LinkNicRequest"), exports);
__exportStar(require("./LinkNicResponse"), exports);
__exportStar(require("./LinkNicToUpdate"), exports);
__exportStar(require("./LinkPolicyRequest"), exports);
__exportStar(require("./LinkPolicyResponse"), exports);
__exportStar(require("./LinkPrivateIpsRequest"), exports);
__exportStar(require("./LinkPrivateIpsResponse"), exports);
__exportStar(require("./LinkPublicIp"), exports);
__exportStar(require("./LinkPublicIpLightForVm"), exports);
__exportStar(require("./LinkPublicIpRequest"), exports);
__exportStar(require("./LinkPublicIpResponse"), exports);
__exportStar(require("./LinkRouteTable"), exports);
__exportStar(require("./LinkRouteTableRequest"), exports);
__exportStar(require("./LinkRouteTableResponse"), exports);
__exportStar(require("./LinkVirtualGatewayRequest"), exports);
__exportStar(require("./LinkVirtualGatewayResponse"), exports);
__exportStar(require("./LinkVolumeRequest"), exports);
__exportStar(require("./LinkVolumeResponse"), exports);
__exportStar(require("./LinkedPolicy"), exports);
__exportStar(require("./LinkedVolume"), exports);
__exportStar(require("./Listener"), exports);
__exportStar(require("./ListenerForCreation"), exports);
__exportStar(require("./ListenerRule"), exports);
__exportStar(require("./ListenerRuleForCreation"), exports);
__exportStar(require("./LoadBalancer"), exports);
__exportStar(require("./LoadBalancerLight"), exports);
__exportStar(require("./LoadBalancerStickyCookiePolicy"), exports);
__exportStar(require("./LoadBalancerTag"), exports);
__exportStar(require("./Location"), exports);
__exportStar(require("./Log"), exports);
__exportStar(require("./MaintenanceEvent"), exports);
__exportStar(require("./MinimalPolicy"), exports);
__exportStar(require("./ModelResponseContext"), exports);
__exportStar(require("./NatService"), exports);
__exportStar(require("./Net"), exports);
__exportStar(require("./NetAccessPoint"), exports);
__exportStar(require("./NetPeering"), exports);
__exportStar(require("./NetPeeringState"), exports);
__exportStar(require("./NetToVirtualGatewayLink"), exports);
__exportStar(require("./Nic"), exports);
__exportStar(require("./NicForVmCreation"), exports);
__exportStar(require("./NicLight"), exports);
__exportStar(require("./OsuApiKey"), exports);
__exportStar(require("./OsuExportImageExportTask"), exports);
__exportStar(require("./OsuExportSnapshotExportTask"), exports);
__exportStar(require("./OsuExportToCreate"), exports);
__exportStar(require("./PermissionsOnResource"), exports);
__exportStar(require("./PermissionsOnResourceCreation"), exports);
__exportStar(require("./Phase1Options"), exports);
__exportStar(require("./Phase2Options"), exports);
__exportStar(require("./Placement"), exports);
__exportStar(require("./Policy"), exports);
__exportStar(require("./PolicyEntities"), exports);
__exportStar(require("./PolicyVersion"), exports);
__exportStar(require("./PrivateIp"), exports);
__exportStar(require("./PrivateIpLight"), exports);
__exportStar(require("./PrivateIpLightForVm"), exports);
__exportStar(require("./ProductType"), exports);
__exportStar(require("./PublicIp"), exports);
__exportStar(require("./PublicIpLight"), exports);
__exportStar(require("./PutUserGroupPolicyRequest"), exports);
__exportStar(require("./PutUserGroupPolicyResponse"), exports);
__exportStar(require("./PutUserPolicyRequest"), exports);
__exportStar(require("./PutUserPolicyResponse"), exports);
__exportStar(require("./Quota"), exports);
__exportStar(require("./QuotaTypes"), exports);
__exportStar(require("./ReadAccessKeysRequest"), exports);
__exportStar(require("./ReadAccessKeysResponse"), exports);
__exportStar(require("./ReadAccountsRequest"), exports);
__exportStar(require("./ReadAccountsResponse"), exports);
__exportStar(require("./ReadAdminPasswordRequest"), exports);
__exportStar(require("./ReadAdminPasswordResponse"), exports);
__exportStar(require("./ReadApiAccessPolicyRequest"), exports);
__exportStar(require("./ReadApiAccessPolicyResponse"), exports);
__exportStar(require("./ReadApiAccessRulesRequest"), exports);
__exportStar(require("./ReadApiAccessRulesResponse"), exports);
__exportStar(require("./ReadApiLogsRequest"), exports);
__exportStar(require("./ReadApiLogsResponse"), exports);
__exportStar(require("./ReadCasRequest"), exports);
__exportStar(require("./ReadCasResponse"), exports);
__exportStar(require("./ReadCatalogRequest"), exports);
__exportStar(require("./ReadCatalogResponse"), exports);
__exportStar(require("./ReadCatalogsRequest"), exports);
__exportStar(require("./ReadCatalogsResponse"), exports);
__exportStar(require("./ReadClientGatewaysRequest"), exports);
__exportStar(require("./ReadClientGatewaysResponse"), exports);
__exportStar(require("./ReadConsoleOutputRequest"), exports);
__exportStar(require("./ReadConsoleOutputResponse"), exports);
__exportStar(require("./ReadConsumptionAccountRequest"), exports);
__exportStar(require("./ReadConsumptionAccountResponse"), exports);
__exportStar(require("./ReadDedicatedGroupsRequest"), exports);
__exportStar(require("./ReadDedicatedGroupsResponse"), exports);
__exportStar(require("./ReadDhcpOptionsRequest"), exports);
__exportStar(require("./ReadDhcpOptionsResponse"), exports);
__exportStar(require("./ReadDirectLinkInterfacesRequest"), exports);
__exportStar(require("./ReadDirectLinkInterfacesResponse"), exports);
__exportStar(require("./ReadDirectLinksRequest"), exports);
__exportStar(require("./ReadDirectLinksResponse"), exports);
__exportStar(require("./ReadEntitiesLinkedToPolicyRequest"), exports);
__exportStar(require("./ReadEntitiesLinkedToPolicyResponse"), exports);
__exportStar(require("./ReadFlexibleGpuCatalogRequest"), exports);
__exportStar(require("./ReadFlexibleGpuCatalogResponse"), exports);
__exportStar(require("./ReadFlexibleGpusRequest"), exports);
__exportStar(require("./ReadFlexibleGpusResponse"), exports);
__exportStar(require("./ReadImageExportTasksRequest"), exports);
__exportStar(require("./ReadImageExportTasksResponse"), exports);
__exportStar(require("./ReadImagesRequest"), exports);
__exportStar(require("./ReadImagesResponse"), exports);
__exportStar(require("./ReadInternetServicesRequest"), exports);
__exportStar(require("./ReadInternetServicesResponse"), exports);
__exportStar(require("./ReadKeypairsRequest"), exports);
__exportStar(require("./ReadKeypairsResponse"), exports);
__exportStar(require("./ReadLinkedPoliciesFilters"), exports);
__exportStar(require("./ReadLinkedPoliciesRequest"), exports);
__exportStar(require("./ReadLinkedPoliciesResponse"), exports);
__exportStar(require("./ReadListenerRulesRequest"), exports);
__exportStar(require("./ReadListenerRulesResponse"), exports);
__exportStar(require("./ReadLoadBalancerTagsRequest"), exports);
__exportStar(require("./ReadLoadBalancerTagsResponse"), exports);
__exportStar(require("./ReadLoadBalancersRequest"), exports);
__exportStar(require("./ReadLoadBalancersResponse"), exports);
__exportStar(require("./ReadLocationsRequest"), exports);
__exportStar(require("./ReadLocationsResponse"), exports);
__exportStar(require("./ReadManagedPoliciesLinkedToUserGroupRequest"), exports);
__exportStar(require("./ReadManagedPoliciesLinkedToUserGroupResponse"), exports);
__exportStar(require("./ReadNatServicesRequest"), exports);
__exportStar(require("./ReadNatServicesResponse"), exports);
__exportStar(require("./ReadNetAccessPointServicesRequest"), exports);
__exportStar(require("./ReadNetAccessPointServicesResponse"), exports);
__exportStar(require("./ReadNetAccessPointsRequest"), exports);
__exportStar(require("./ReadNetAccessPointsResponse"), exports);
__exportStar(require("./ReadNetPeeringsRequest"), exports);
__exportStar(require("./ReadNetPeeringsResponse"), exports);
__exportStar(require("./ReadNetsRequest"), exports);
__exportStar(require("./ReadNetsResponse"), exports);
__exportStar(require("./ReadNicsRequest"), exports);
__exportStar(require("./ReadNicsResponse"), exports);
__exportStar(require("./ReadPoliciesFilters"), exports);
__exportStar(require("./ReadPoliciesRequest"), exports);
__exportStar(require("./ReadPoliciesResponse"), exports);
__exportStar(require("./ReadPolicyRequest"), exports);
__exportStar(require("./ReadPolicyResponse"), exports);
__exportStar(require("./ReadPolicyVersionRequest"), exports);
__exportStar(require("./ReadPolicyVersionResponse"), exports);
__exportStar(require("./ReadPolicyVersionsRequest"), exports);
__exportStar(require("./ReadPolicyVersionsResponse"), exports);
__exportStar(require("./ReadProductTypesRequest"), exports);
__exportStar(require("./ReadProductTypesResponse"), exports);
__exportStar(require("./ReadPublicCatalogRequest"), exports);
__exportStar(require("./ReadPublicCatalogResponse"), exports);
__exportStar(require("./ReadPublicIpRangesRequest"), exports);
__exportStar(require("./ReadPublicIpRangesResponse"), exports);
__exportStar(require("./ReadPublicIpsRequest"), exports);
__exportStar(require("./ReadPublicIpsResponse"), exports);
__exportStar(require("./ReadQuotasRequest"), exports);
__exportStar(require("./ReadQuotasResponse"), exports);
__exportStar(require("./ReadRegionsRequest"), exports);
__exportStar(require("./ReadRegionsResponse"), exports);
__exportStar(require("./ReadRouteTablesRequest"), exports);
__exportStar(require("./ReadRouteTablesResponse"), exports);
__exportStar(require("./ReadSecurityGroupsRequest"), exports);
__exportStar(require("./ReadSecurityGroupsResponse"), exports);
__exportStar(require("./ReadServerCertificatesRequest"), exports);
__exportStar(require("./ReadServerCertificatesResponse"), exports);
__exportStar(require("./ReadSnapshotExportTasksRequest"), exports);
__exportStar(require("./ReadSnapshotExportTasksResponse"), exports);
__exportStar(require("./ReadSnapshotsRequest"), exports);
__exportStar(require("./ReadSnapshotsResponse"), exports);
__exportStar(require("./ReadSubnetsRequest"), exports);
__exportStar(require("./ReadSubnetsResponse"), exports);
__exportStar(require("./ReadSubregionsRequest"), exports);
__exportStar(require("./ReadSubregionsResponse"), exports);
__exportStar(require("./ReadTagsRequest"), exports);
__exportStar(require("./ReadTagsResponse"), exports);
__exportStar(require("./ReadUnitPriceRequest"), exports);
__exportStar(require("./ReadUnitPriceResponse"), exports);
__exportStar(require("./ReadUserGroupPoliciesRequest"), exports);
__exportStar(require("./ReadUserGroupPoliciesResponse"), exports);
__exportStar(require("./ReadUserGroupPolicyRequest"), exports);
__exportStar(require("./ReadUserGroupPolicyResponse"), exports);
__exportStar(require("./ReadUserGroupRequest"), exports);
__exportStar(require("./ReadUserGroupResponse"), exports);
__exportStar(require("./ReadUserGroupsPerUserRequest"), exports);
__exportStar(require("./ReadUserGroupsPerUserResponse"), exports);
__exportStar(require("./ReadUserGroupsRequest"), exports);
__exportStar(require("./ReadUserGroupsResponse"), exports);
__exportStar(require("./ReadUserPoliciesRequest"), exports);
__exportStar(require("./ReadUserPoliciesResponse"), exports);
__exportStar(require("./ReadUserPolicyRequest"), exports);
__exportStar(require("./ReadUserPolicyResponse"), exports);
__exportStar(require("./ReadUsersRequest"), exports);
__exportStar(require("./ReadUsersResponse"), exports);
__exportStar(require("./ReadVirtualGatewaysRequest"), exports);
__exportStar(require("./ReadVirtualGatewaysResponse"), exports);
__exportStar(require("./ReadVmGroupsRequest"), exports);
__exportStar(require("./ReadVmGroupsResponse"), exports);
__exportStar(require("./ReadVmTemplatesRequest"), exports);
__exportStar(require("./ReadVmTemplatesResponse"), exports);
__exportStar(require("./ReadVmTypesRequest"), exports);
__exportStar(require("./ReadVmTypesResponse"), exports);
__exportStar(require("./ReadVmsHealthRequest"), exports);
__exportStar(require("./ReadVmsHealthResponse"), exports);
__exportStar(require("./ReadVmsRequest"), exports);
__exportStar(require("./ReadVmsResponse"), exports);
__exportStar(require("./ReadVmsStateRequest"), exports);
__exportStar(require("./ReadVmsStateResponse"), exports);
__exportStar(require("./ReadVolumesRequest"), exports);
__exportStar(require("./ReadVolumesResponse"), exports);
__exportStar(require("./ReadVpnConnectionsRequest"), exports);
__exportStar(require("./ReadVpnConnectionsResponse"), exports);
__exportStar(require("./RebootVmsRequest"), exports);
__exportStar(require("./RebootVmsResponse"), exports);
__exportStar(require("./Region"), exports);
__exportStar(require("./RegisterVmsInLoadBalancerRequest"), exports);
__exportStar(require("./RegisterVmsInLoadBalancerResponse"), exports);
__exportStar(require("./RejectNetPeeringRequest"), exports);
__exportStar(require("./RejectNetPeeringResponse"), exports);
__exportStar(require("./RemoveUserFromUserGroupRequest"), exports);
__exportStar(require("./RemoveUserFromUserGroupResponse"), exports);
__exportStar(require("./ResourceLoadBalancerTag"), exports);
__exportStar(require("./ResourceTag"), exports);
__exportStar(require("./Route"), exports);
__exportStar(require("./RouteLight"), exports);
__exportStar(require("./RoutePropagatingVirtualGateway"), exports);
__exportStar(require("./RouteTable"), exports);
__exportStar(require("./ScaleDownVmGroupRequest"), exports);
__exportStar(require("./ScaleDownVmGroupResponse"), exports);
__exportStar(require("./ScaleUpVmGroupRequest"), exports);
__exportStar(require("./ScaleUpVmGroupResponse"), exports);
__exportStar(require("./SecureBootAction"), exports);
__exportStar(require("./SecurityGroup"), exports);
__exportStar(require("./SecurityGroupLight"), exports);
__exportStar(require("./SecurityGroupRule"), exports);
__exportStar(require("./SecurityGroupsMember"), exports);
__exportStar(require("./ServerCertificate"), exports);
__exportStar(require("./Service"), exports);
__exportStar(require("./SetDefaultPolicyVersionRequest"), exports);
__exportStar(require("./SetDefaultPolicyVersionResponse"), exports);
__exportStar(require("./Snapshot"), exports);
__exportStar(require("./SnapshotExportTask"), exports);
__exportStar(require("./SourceNet"), exports);
__exportStar(require("./SourceSecurityGroup"), exports);
__exportStar(require("./StartVmsRequest"), exports);
__exportStar(require("./StartVmsResponse"), exports);
__exportStar(require("./StateComment"), exports);
__exportStar(require("./StopVmsRequest"), exports);
__exportStar(require("./StopVmsResponse"), exports);
__exportStar(require("./Subnet"), exports);
__exportStar(require("./Subregion"), exports);
__exportStar(require("./Tag"), exports);
__exportStar(require("./UnitPriceEntry"), exports);
__exportStar(require("./UnlinkFlexibleGpuRequest"), exports);
__exportStar(require("./UnlinkFlexibleGpuResponse"), exports);
__exportStar(require("./UnlinkInternetServiceRequest"), exports);
__exportStar(require("./UnlinkInternetServiceResponse"), exports);
__exportStar(require("./UnlinkLoadBalancerBackendMachinesRequest"), exports);
__exportStar(require("./UnlinkLoadBalancerBackendMachinesResponse"), exports);
__exportStar(require("./UnlinkManagedPolicyFromUserGroupRequest"), exports);
__exportStar(require("./UnlinkManagedPolicyFromUserGroupResponse"), exports);
__exportStar(require("./UnlinkNicRequest"), exports);
__exportStar(require("./UnlinkNicResponse"), exports);
__exportStar(require("./UnlinkPolicyRequest"), exports);
__exportStar(require("./UnlinkPolicyResponse"), exports);
__exportStar(require("./UnlinkPrivateIpsRequest"), exports);
__exportStar(require("./UnlinkPrivateIpsResponse"), exports);
__exportStar(require("./UnlinkPublicIpRequest"), exports);
__exportStar(require("./UnlinkPublicIpResponse"), exports);
__exportStar(require("./UnlinkRouteTableRequest"), exports);
__exportStar(require("./UnlinkRouteTableResponse"), exports);
__exportStar(require("./UnlinkVirtualGatewayRequest"), exports);
__exportStar(require("./UnlinkVirtualGatewayResponse"), exports);
__exportStar(require("./UnlinkVolumeRequest"), exports);
__exportStar(require("./UnlinkVolumeResponse"), exports);
__exportStar(require("./UpdateAccessKeyRequest"), exports);
__exportStar(require("./UpdateAccessKeyResponse"), exports);
__exportStar(require("./UpdateAccountRequest"), exports);
__exportStar(require("./UpdateAccountResponse"), exports);
__exportStar(require("./UpdateApiAccessPolicyRequest"), exports);
__exportStar(require("./UpdateApiAccessPolicyResponse"), exports);
__exportStar(require("./UpdateApiAccessRuleRequest"), exports);
__exportStar(require("./UpdateApiAccessRuleResponse"), exports);
__exportStar(require("./UpdateCaRequest"), exports);
__exportStar(require("./UpdateCaResponse"), exports);
__exportStar(require("./UpdateDedicatedGroupRequest"), exports);
__exportStar(require("./UpdateDedicatedGroupResponse"), exports);
__exportStar(require("./UpdateDirectLinkInterfaceRequest"), exports);
__exportStar(require("./UpdateDirectLinkInterfaceResponse"), exports);
__exportStar(require("./UpdateFlexibleGpuRequest"), exports);
__exportStar(require("./UpdateFlexibleGpuResponse"), exports);
__exportStar(require("./UpdateImageRequest"), exports);
__exportStar(require("./UpdateImageResponse"), exports);
__exportStar(require("./UpdateListenerRuleRequest"), exports);
__exportStar(require("./UpdateListenerRuleResponse"), exports);
__exportStar(require("./UpdateLoadBalancerRequest"), exports);
__exportStar(require("./UpdateLoadBalancerResponse"), exports);
__exportStar(require("./UpdateNetAccessPointRequest"), exports);
__exportStar(require("./UpdateNetAccessPointResponse"), exports);
__exportStar(require("./UpdateNetRequest"), exports);
__exportStar(require("./UpdateNetResponse"), exports);
__exportStar(require("./UpdateNicRequest"), exports);
__exportStar(require("./UpdateNicResponse"), exports);
__exportStar(require("./UpdateRoutePropagationRequest"), exports);
__exportStar(require("./UpdateRoutePropagationResponse"), exports);
__exportStar(require("./UpdateRouteRequest"), exports);
__exportStar(require("./UpdateRouteResponse"), exports);
__exportStar(require("./UpdateRouteTableLinkRequest"), exports);
__exportStar(require("./UpdateRouteTableLinkResponse"), exports);
__exportStar(require("./UpdateServerCertificateRequest"), exports);
__exportStar(require("./UpdateServerCertificateResponse"), exports);
__exportStar(require("./UpdateSnapshotRequest"), exports);
__exportStar(require("./UpdateSnapshotResponse"), exports);
__exportStar(require("./UpdateSubnetRequest"), exports);
__exportStar(require("./UpdateSubnetResponse"), exports);
__exportStar(require("./UpdateUserGroupRequest"), exports);
__exportStar(require("./UpdateUserGroupResponse"), exports);
__exportStar(require("./UpdateUserRequest"), exports);
__exportStar(require("./UpdateUserResponse"), exports);
__exportStar(require("./UpdateVmGroupRequest"), exports);
__exportStar(require("./UpdateVmGroupResponse"), exports);
__exportStar(require("./UpdateVmRequest"), exports);
__exportStar(require("./UpdateVmResponse"), exports);
__exportStar(require("./UpdateVmTemplateRequest"), exports);
__exportStar(require("./UpdateVmTemplateResponse"), exports);
__exportStar(require("./UpdateVolumeRequest"), exports);
__exportStar(require("./UpdateVolumeResponse"), exports);
__exportStar(require("./UpdateVpnConnectionRequest"), exports);
__exportStar(require("./UpdateVpnConnectionResponse"), exports);
__exportStar(require("./User"), exports);
__exportStar(require("./UserGroup"), exports);
__exportStar(require("./VgwTelemetry"), exports);
__exportStar(require("./VirtualGateway"), exports);
__exportStar(require("./Vm"), exports);
__exportStar(require("./VmGroup"), exports);
__exportStar(require("./VmState"), exports);
__exportStar(require("./VmStates"), exports);
__exportStar(require("./VmTemplate"), exports);
__exportStar(require("./VmType"), exports);
__exportStar(require("./Volume"), exports);
__exportStar(require("./VpnConnection"), exports);
__exportStar(require("./VpnOptions"), exports);
__exportStar(require("./With"), exports);
