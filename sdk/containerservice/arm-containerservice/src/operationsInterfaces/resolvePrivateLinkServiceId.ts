/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type {
  PrivateLinkResource,
  ResolvePrivateLinkServiceIdPostOptionalParams,
  ResolvePrivateLinkServiceIdPostResponse,
} from "../models/index.js";

/** Interface representing a ResolvePrivateLinkServiceId. */
export interface ResolvePrivateLinkServiceId {
  /**
   * Gets the private link service ID for the specified managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param parameters Parameters required in order to resolve a private link service ID.
   * @param options The options parameters.
   */
  post(
    resourceGroupName: string,
    resourceName: string,
    parameters: PrivateLinkResource,
    options?: ResolvePrivateLinkServiceIdPostOptionalParams,
  ): Promise<ResolvePrivateLinkServiceIdPostResponse>;
}
