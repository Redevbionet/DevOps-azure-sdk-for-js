// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { CommonClientOptions } from "@azure/core-client";

/**
 * Valid string index types supported by the Form Recognizer service and SDK clients.
 */
export type StringIndexType = (typeof StringIndexType)[keyof typeof StringIndexType];

/**
 * Supported values of StringIndexType.
 */
// eslint-disable-next-line @typescript-eslint/no-redeclare
export const StringIndexType = {
  /**
   * UTF-16 code units
   */
  Utf16CodeUnit: "utf16CodeUnit",
  /**
   * Unicode code points
   */
  UnicodeCodePoint: "unicodeCodePoint",
} as const;

/**
 * Default settings for Form Recognizer clients.
 *
 * @internal
 */
export const DEFAULT_GENERATED_CLIENT_OPTIONS = {
  stringIndexType: StringIndexType.Utf16CodeUnit,
} as const;

/**
 * Configurable options for DocumentAnalysisClient.
 */
export interface DocumentAnalysisClientOptions extends CommonClientOptions {
  /**
   * The unit of string offset/length values that the service returns.
   *
   * In JavaScript, strings are indexed by UTF-16 code units. Do _NOT_ set this value unless you are certain you need
   * Unicode code-point units instead.
   *
   * Default: "utf16CodeUnit"
   */
  stringIndexType?: StringIndexType;
  /**
   * The audience (scope) to use for authentication with Azure Active Directory.
   *
   * Setting this option is only necessary
   * - if you are using Entra Id
   *   (and)
   * - if you are using a cloud other than the `AzurePublicCloud` ("https://cognitiveservices.azure.com")
   *
   * The authentication scope will be set from this audience.
   * See {@link KnownFormRecognizerAudience} for known audience values.
   */
  audience?: string;
}

/**
 * Configurable options for DocumentModelAdministrationClient.
 */
export interface DocumentModelAdministrationClientOptions extends CommonClientOptions {
  /**
   * The audience (scope) to use for authentication with Azure Active Directory.
   *
   * Setting this option is only necessary
   * - if you are using Entra Id
   *   (and)
   * - if you are using a cloud other than the `AzurePublicCloud` ("https://cognitiveservices.azure.com")
   *
   * The authentication scope will be set from this audience.
   * See {@link KnownFormRecognizerAudience} for known audience values.
   */
  audience?: string;
}
