/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { RedisEnterpriseManagementClient } = require("@azure/arm-redisenterprisecache");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv/config");

/**
 * This sample demonstrates how to Gets information about a database in a Redis Enterprise cluster.
 *
 * @summary Gets information about a database in a Redis Enterprise cluster.
 * x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/preview/2025-05-01-preview/examples/RedisEnterpriseDatabasesGet.json
 */
async function redisEnterpriseDatabasesGet() {
  const subscriptionId =
    process.env["REDISENTERPRISE_SUBSCRIPTION_ID"] || "e7b5a9d2-6b6a-4d2f-9143-20d9a10f5b8f";
  const resourceGroupName = process.env["REDISENTERPRISE_RESOURCE_GROUP"] || "rg1";
  const clusterName = "cache1";
  const databaseName = "default";
  const credential = new DefaultAzureCredential();
  const client = new RedisEnterpriseManagementClient(credential, subscriptionId);
  const result = await client.databases.get(resourceGroupName, clusterName, databaseName);
  console.log(result);
}

async function main() {
  await redisEnterpriseDatabasesGet();
}

main().catch(console.error);
