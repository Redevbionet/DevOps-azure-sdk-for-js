// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import process from "node:process";
import { Constants } from "../common/constants.js";

export const diagnosticLevelFromEnv: string | undefined =
  process.env[Constants.CosmosDbDiagnosticLevelEnvVarName];
