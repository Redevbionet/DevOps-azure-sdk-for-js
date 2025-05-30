// Copyright (c) Microsoft.
// Licensed under the MIT License. See LICENSE file in the project root for full license information.

/**
 * @summary Simple example of how to publish a component telemetry message
 */

import { DefaultAzureCredential } from "@azure/identity";
import { DigitalTwinsClient } from "@azure/digital-twins-core";
import { inspect } from "node:util";
import { v4 } from "uuid";

async function main(): Promise<void> {
  // AZURE_DIGITALTWINS_URL: The URL to your Azure Digital Twins instance
  const url = process.env.AZURE_DIGITALTWINS_URL;
  if (url === undefined) {
    throw new Error("Required environment variable AZURE_DIGITALTWINS_URL is not set.");
  }

  // DefaultAzureCredential is provided by @azure/identity. It supports
  // different authentication mechanisms and determines the appropriate
  // credential type based of the environment it is executing in. See
  // https://www.npmjs.com/package/@azure/identity for more information on
  // authenticating with DefaultAzureCredential or other implementations of
  // TokenCredential.
  const credential = new DefaultAzureCredential();
  const serviceClient = new DigitalTwinsClient(url, credential);

  // Publish telemetry message
  const digitalTwinId = "<digital twin ID>"; //Digital twin ID must exist in your Azure Digital Twins instance
  const componentPath = "<component path>"; // Component must exist in your Azure Digital Twins instance
  const telemetryPayload = '{"Telemetry1": 5}';
  const response = await serviceClient.publishComponentTelemetry(
    digitalTwinId,
    componentPath,
    telemetryPayload,
    v4()
  );
  console.log(`Publish Component Telemetry response:`);
  console.log(inspect(response));
}

main().catch((err) => {
  console.log("error code: ", err.code);
  console.log("error message: ", err.message);
  console.log("error stack: ", err.stack);
});
