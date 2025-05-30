/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const CommunicationIdentityCreateRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationIdentityCreateRequest",
    modelProperties: {
      customId: {
        constraints: {
          MinLength: 1,
        },
        serializedName: "customId",
        type: {
          name: "String",
        },
      },
      createTokenWithScopes: {
        serializedName: "createTokenWithScopes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      expiresInMinutes: {
        defaultValue: 1440,
        constraints: {
          InclusiveMaximum: 1440,
          InclusiveMinimum: 60,
        },
        serializedName: "expiresInMinutes",
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const CommunicationIdentityAccessTokenResult: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "CommunicationIdentityAccessTokenResult",
      modelProperties: {
        identity: {
          serializedName: "identity",
          type: {
            name: "Composite",
            className: "CommunicationIdentity",
          },
        },
        accessToken: {
          serializedName: "accessToken",
          type: {
            name: "Composite",
            className: "CommunicationIdentityAccessToken",
          },
        },
      },
    },
  };

export const CommunicationIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationIdentity",
    modelProperties: {
      customId: {
        serializedName: "customId",
        type: {
          name: "String",
        },
      },
      lastTokenIssuedAt: {
        serializedName: "lastTokenIssuedAt",
        type: {
          name: "DateTime",
        },
      },
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const CommunicationIdentityAccessToken: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationIdentityAccessToken",
    modelProperties: {
      token: {
        serializedName: "token",
        required: true,
        type: {
          name: "String",
        },
      },
      expiresOn: {
        serializedName: "expiresOn",
        required: true,
        type: {
          name: "DateTime",
        },
      },
    },
  },
};

export const CommunicationErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "CommunicationError",
        },
      },
    },
  },
};

export const CommunicationError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationError",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String",
        },
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String",
        },
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CommunicationError",
            },
          },
        },
      },
      innerError: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "CommunicationError",
        },
      },
    },
  },
};

export const TeamsUserExchangeTokenRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TeamsUserExchangeTokenRequest",
    modelProperties: {
      token: {
        serializedName: "token",
        required: true,
        type: {
          name: "String",
        },
      },
      appId: {
        serializedName: "appId",
        required: true,
        type: {
          name: "String",
        },
      },
      userId: {
        serializedName: "userId",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const CommunicationIdentityAccessTokenRequest: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "CommunicationIdentityAccessTokenRequest",
      modelProperties: {
        scopes: {
          serializedName: "scopes",
          required: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "String",
              },
            },
          },
        },
        expiresInMinutes: {
          defaultValue: 1440,
          constraints: {
            InclusiveMaximum: 1440,
            InclusiveMinimum: 60,
          },
          serializedName: "expiresInMinutes",
          type: {
            name: "Number",
          },
        },
      },
    },
  };

export const TeamsExtensionAssignmentResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TeamsExtensionAssignmentResponse",
    modelProperties: {
      objectId: {
        serializedName: "objectId",
        required: true,
        type: {
          name: "String",
        },
      },
      tenantId: {
        serializedName: "tenantId",
        required: true,
        type: {
          name: "String",
        },
      },
      principalType: {
        serializedName: "principalType",
        required: true,
        type: {
          name: "String",
        },
      },
      clientIds: {
        serializedName: "clientIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
    },
  },
};

export const TeamsExtensionAssignmentCreateOrUpdateRequest: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "TeamsExtensionAssignmentCreateOrUpdateRequest",
      modelProperties: {
        principalType: {
          serializedName: "principalType",
          required: true,
          type: {
            name: "String",
          },
        },
        clientIds: {
          serializedName: "clientIds",
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "String",
              },
            },
          },
        },
      },
    },
  };

export const EntraAssignmentCreateOrUpdateRequest: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "EntraAssignmentCreateOrUpdateRequest",
      modelProperties: {
        tenantId: {
          serializedName: "tenantId",
          required: true,
          type: {
            name: "String",
          },
        },
        principalType: {
          serializedName: "principalType",
          required: true,
          type: {
            name: "String",
          },
        },
        clientIds: {
          serializedName: "clientIds",
          required: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "String",
              },
            },
          },
        },
      },
    },
  };

export const EntraAssignmentsResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EntraAssignmentsResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EntraAssignment",
            },
          },
        },
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const EntraAssignment: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EntraAssignment",
    modelProperties: {
      objectId: {
        serializedName: "objectId",
        required: true,
        type: {
          name: "String",
        },
      },
      tenantId: {
        serializedName: "tenantId",
        required: true,
        type: {
          name: "String",
        },
      },
      principalType: {
        serializedName: "principalType",
        required: true,
        type: {
          name: "String",
        },
      },
      clientIds: {
        serializedName: "clientIds",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
    },
  },
};
