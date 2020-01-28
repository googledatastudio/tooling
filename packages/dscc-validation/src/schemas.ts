/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export const manifestSchema = {
  type: "object",
  additionalProperties: false,
  required: [
    "name",
    "organization",
    "description",
    "logoUrl",
    "organizationUrl",
    "supportUrl",
    "privacyPolicyUrl",
    "termsOfServiceUrl",
    "packageUrl",
    "components"
  ],
  properties: {
    name: { type: "string" },
    organization: { type: "string" },
    description: { type: "string" },
    logoUrl: { type: "string" },
    organizationUrl: { type: "string" },
    supportUrl: { type: "string" },
    privacyPolicyUrl: { type: "string" },
    termsOfServiceUrl: { type: "string" },
    packageUrl: { type: "string" },
    devMode: { type: ["string", "boolean"] },
    components: {
      type: "array",
      minItems: 1,
      items: {
        $ref: "#/definitions/component"
      }
    }
  },
  definitions: {
    component: {
      type: "object",
      additionalProperties: false,
      required: ["name", "description", "iconUrl", "resource"],
      properties: {
        id: { type: "string" },
        name: { type: "string" },
        description: { type: "string" },
        iconUrl: { type: "string" },
        resource: { $ref: "#/definitions/resources" }
      }
    },
    resources: {
      type: "object",
      additionalProperties: false,
      required: ["js", "config"],
      properties: {
        js: { type: "string" },
        config: { type: "string" },
        css: { type: "string" }
      }
    }
  }
};

export const configSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    data: {
      type: "array",
      items: {
        $ref: "#/definitions/dataSection"
      }
    },
    style: {
      type: "array",
      items: {
        $ref: "#/definitions/styleSection"
      }
    },
    interactions: {
      type: "array",
      maxItems: 1,
      items: {
        $ref: "#/definitions/interactionElement"
      }
    }
  },
  definitions: {
    dataSection: {
      type: "object",
      additionalProperties: false,
      required: ["id", "label", "elements"],
      properties: {
        id: { type: "string" },
        label: { type: "string" },
        elements: {
          type: "array",
          items: {
            anyOf: [
              { $ref: "#/definitions/dimensionElement" },
              { $ref: "#/definitions/metricElement" },
              { $ref: "#/definitions/maxResultsElement" }
            ]
          }
        }
      }
    },
    metricElement: {
      type: "object",
      additionalProperties: false,
      required: ["id", "label", "type"],
      properties: {
        id: { type: "string" },
        label: { type: "string" },
        type: {
          type: "string",
          enum: ["METRIC"]
        },
        options: {
          $ref: "#/definitions/dataOptions"
        }
      }
    },
    dimensionElement: {
      type: "object",
      additionalProperties: false,
      required: ["id", "label", "type"],
      properties: {
        id: { type: "string" },
        label: { type: "string" },
        type: {
          type: "string",
          enum: ["DIMENSION"]
        },
        options: {
          $ref: "#/definitions/dimensionOptions"
        }
      }
    },
    maxResultsElement: {
      type: "object",
      additionalProperties: false,
      required: ["id", "label", "type", "options"],
      properties: {
        id: { type: "string" },
        label: { type: "string" },
        type: {
          type: "string",
          enum: ["MAX_RESULTS"]
        },
        options: {
          $ref: "#/definitions/maxResultsOptions"
        }
      }
    },
    dataOptions: {
      type: "object",
      additionalProperties: false,
      properties: {
        min: { type: "number" },
        max: { type: "number" }
      }
    },
    dimensionOptions: {
      type: "object",
      additionalProperties: false,
      properties: {
        min: { type: "number" },
        max: { type: "number" },
        supportedTypes: {
          type: "array",
          items: {
            type: "string",
            enum: ["TIME", "GEO", "DEFAULT"]
          }
        }
      }
    },
    maxResultsOptions: {
      type: "object",
      required: ["max"],
      additionalProperties: false,
      properties: {
        max: { type: "number" }
      }
    },
    styleSection: {
      type: "object",
      required: ["id", "label", "elements"],
      additionalProperties: false,
      properties: {
        id: { type: "string" },
        label: { type: "string" },
        elements: {
          type: "array",
          items: {
            anyOf: [
              { $ref: "#/definitions/fontSize" },
              { $ref: "#/definitions/fontFamily" },
              { $ref: "#/definitions/checkbox" },
              { $ref: "#/definitions/textInput" },
              { $ref: "#/definitions/textArea" },
              { $ref: "#/definitions/opacity" },
              { $ref: "#/definitions/lineWeight" },
              { $ref: "#/definitions/lineStyle" },
              { $ref: "#/definitions/borderRadius" },
              { $ref: "#/definitions/interval" },
              { $ref: "#/definitions/fontColor" },
              { $ref: "#/definitions/fillColor" },
              { $ref: "#/definitions/borderColor" },
              { $ref: "#/definitions/axisColor" },
              { $ref: "#/definitions/gridColor" },
              { $ref: "#/definitions/selectSingle" },
              { $ref: "#/definitions/selectRadio" }
            ]
          }
        }
      }
    },
    fontSize: {
      type: "object",
      additionalProperties: false,
      required: ["id", "label", "type"],
      properties: {
        id: { type: "string" },
        label: { type: "string" },
        type: {
          type: "string",
          enum: ["FONT_SIZE"]
        },
        defaultValue: { type: "string" }
      }
    },
    fontFamily: {
      type: "object",
      additionalProperties: false,
      required: ["id", "label", "type"],
      properties: {
        id: { type: "string" },
        label: { type: "string" },
        type: {
          type: "string",
          enum: ["FONT_FAMILY"]
        },
        defaultValue: { type: "string" }
      }
    },
    checkbox: {
      type: "object",
      additionalProperties: false,
      required: ["id", "label", "type"],
      properties: {
        id: { type: "string" },
        label: { type: "string" },
        type: {
          type: "string",
          enum: ["CHECKBOX"]
        },
        defaultValue: { type: "string" }
      }
    },
    textInput: {
      type: "object",
      additionalProperties: false,
      required: ["id", "label", "type"],
      properties: {
        id: { type: "string" },
        label: { type: "string" },
        type: {
          type: "string",
          enum: ["TEXTINPUT"]
        },
        defaultValue: { type: "string" }
      }
    },
    textArea: {
      type: "object",
      additionalProperties: false,
      required: ["id", "label", "type"],
      properties: {
        id: { type: "string" },
        label: { type: "string" },
        type: {
          type: "string",
          enum: ["TEXTAREA"]
        },
        defaultValue: { type: "string" }
      }
    },
    opacity: {
      type: "object",
      additionalProperties: false,
      required: ["id", "label", "type"],
      properties: {
        id: { type: "string" },
        label: { type: "string" },
        type: {
          type: "string",
          enum: ["OPACITY"]
        },
        defaultValue: { type: "string" }
      }
    },
    lineWeight: {
      type: "object",
      additionalProperties: false,
      required: ["id", "label", "type"],
      properties: {
        id: { type: "string" },
        label: { type: "string" },
        type: {
          type: "string",
          enum: ["LINE_WEIGHT"]
        },
        defaultValue: { type: "string" }
      }
    },
    lineStyle: {
      type: "object",
      additionalProperties: false,
      required: ["id", "label", "type"],
      properties: {
        id: { type: "string" },
        label: { type: "string" },
        type: {
          type: "string",
          enum: ["LINE_STYLE"]
        },
        defaultValue: { type: "string" }
      }
    },
    borderRadius: {
      type: "object",
      additionalProperties: false,
      required: ["id", "label", "type"],
      properties: {
        id: { type: "string" },
        label: { type: "string" },
        type: {
          type: "string",
          enum: ["BORDER_RADIUS"]
        },
        defaultValue: { type: "string" }
      }
    },
    interval: {
      type: "object",
      additionalProperties: false,
      required: ["id", "label", "type"],
      properties: {
        id: { type: "string" },
        label: { type: "string" },
        type: {
          type: "string",
          enum: ["INTERVAL"]
        },
        defaultValue: { type: "string" }
      }
    },
    fontColor: {
      type: "object",
      additionalProperties: false,
      required: ["id", "label", "type"],
      properties: {
        id: { type: "string" },
        label: { type: "string" },
        type: {
          type: "string",
          enum: ["FONT_COLOR"]
        },
        defaultValue: {
          type: "object",
          additionalProperties: false,
          required: ["color"],
          properties: {
            color: { type: "string" },
            opacity: { type: ["number", "null"] }
          }
        }
      }
    },
    fillColor: {
      type: "object",
      additionalProperties: false,
      required: ["id", "label", "type"],
      properties: {
        id: { type: "string" },
        label: { type: "string" },
        type: {
          type: "string",
          enum: ["FILL_COLOR"]
        },
        defaultValue: {
          type: "object",
          additionalProperties: false,
          required: ["color"],
          properties: {
            color: { type: "string" },
            opacity: { type: ["number", "null"] }
          }
        }
      }
    },
    borderColor: {
      type: "object",
      additionalProperties: false,
      required: ["id", "label", "type"],
      properties: {
        id: { type: "string" },
        label: { type: "string" },
        type: {
          type: "string",
          enum: ["BORDER_COLOR"]
        },
        defaultValue: {
          type: "object",
          additionalProperties: false,
          required: ["color"],
          properties: {
            color: { type: "string" },
            opacity: { type: ["number", "null"] }
          }
        }
      }
    },
    axisColor: {
      type: "object",
      additionalProperties: false,
      required: ["id", "label", "type"],
      properties: {
        id: { type: "string" },
        label: { type: "string" },
        type: {
          type: "string",
          enum: ["AXIS_COLOR"]
        },
        defaultValue: {
          type: "object",
          additionalProperties: false,
          required: ["color"],
          properties: {
            color: { type: "string" },
            opacity: { type: ["number", "null"] }
          }
        }
      }
    },
    gridColor: {
      type: "object",
      additionalProperties: false,
      required: ["id", "label", "type"],
      properties: {
        id: { type: "string" },
        label: { type: "string" },
        type: {
          type: "string",
          enum: ["GRID_COLOR"]
        },
        defaultValue: {
          type: "object",
          additionalProperties: false,
          required: ["color"],
          properties: {
            color: { type: "string" },
            opacity: { type: ["number", "null"] }
          }
        }
      }
    },
    selectSingle: {
      type: "object",
      additionalProperties: false,
      required: ["id", "label", "type", "options"],
      properties: {
        id: { type: "string" },
        label: { type: "string" },
        type: {
          type: "string",
          enum: ["SELECT_SINGLE"]
        },
        options: {
          type: "array",
          items: {
            $ref: "#/definitions/styleElementOptions"
          }
        },
        defaultValue: {
          type: "string"
        }
      }
    },
    selectRadio: {
      type: "object",
      additionalProperties: false,
      required: ["id", "label", "type", "options"],
      properties: {
        id: { type: "string" },
        label: { type: "string" },
        type: {
          type: "string",
          enum: ["SELECT_RADIO"]
        },
        options: {
          type: "array",
          items: {
            $ref: "#/definitions/styleElementOptions"
          }
        },
        defaultValue: {
          type: "string"
        }
      }
    },
    styleElementOptions: {
      type: "object",
      required: ["label", "value"],
      properties: {
        label: { type: "string" },
        value: { type: "string" }
      }
    },
    interactionElement: {
      type: "object",
      additionalProperties: false,
      required: ["id", "supportedActions"],
      properties: {
        id: { type: "string" },
        supportedActions: {
          type: "array",
          items: {
            type: "string",
            enum: ["FILTER"]
          }
        }
      }
    }
  }
};
