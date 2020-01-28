import * as sut from "../src/index";
import { RequiredParams } from "ajv";

describe("manifest validation", () => {
  test("passes when devMode is a boolean", () => {
    const manifest = {
      packageUrl: "",
      components: [
        {
          name: "",
          description: "",
          iconUrl: "",
          resource: {
            js: "",
            config: ""
          }
        }
      ],
      devMode: true,
      termsOfServiceUrl: "",
      privacyPolicyUrl: "",
      logoUrl: "",
      description: "",
      organization: "",
      organizationUrl: "",
      name: "",
      supportUrl: ""
    };
    expect(sut.validateManifest(manifest)).toHaveLength(0);
  });

  test("passes when all required fields provided", () => {
    const validManifest = {
      name: "My Visualizations",
      organization: "MyOrg",
      description: "My first visualization package.",
      logoUrl: "https://logo",
      organizationUrl: "https://url",
      supportUrl: "https://url",
      privacyPolicyUrl: "https://url",
      termsOfServiceUrl: "https://url",
      packageUrl: "https://url",
      devMode: "DEVMODE_BOOL",
      components: [
        {
          id: "theViz",
          name: "myViz",
          description: "My first Community Visualization",
          iconUrl: "https://url",
          resource: {
            js: "YOUR_GCS_BUCKET/index.js",
            config: "YOUR_GCS_BUCKET/index.json",
            css: "YOUR_GCS_BUCKET/index.css"
          }
        }
      ]
    };
    expect(sut.validateManifest(validManifest)).toHaveLength(0);
  });

  test("throws when missing privacyPolicy", () => {
    const manifestNoPrivacyPolicy = {
      name: "My Visualizations",
      organization: "MyOrg",
      description: "My first visualization package.",
      logoUrl: "https://logo",
      organizationUrl: "https://url",
      supportUrl: "https://url",
      termsOfServiceUrl: "https://url",
      packageUrl: "https://url",
      components: [
        {
          name: "myViz",
          description: "My first Community Visualization",
          iconUrl: "https://url",
          resource: {
            js: "YOUR_GCS_BUCKET/index.js",
            config: "YOUR_GCS_BUCKET/index.json",
            css: "YOUR_GCS_BUCKET/index.css"
          }
        }
      ]
    };
    expect(sut.validateManifest(manifestNoPrivacyPolicy)).not.toHaveLength(0);
    expect(
      sut
        .validateManifest(manifestNoPrivacyPolicy)
        .filter(
          a =>
            (a.params as RequiredParams).missingProperty === "privacyPolicyUrl"
        )
    ).not.toHaveLength(0);
  });
});

describe("config validation", () => {
  test("throws when encountering extra key", () => {
    const configExtraKey = {
      data: [
        {
          id: "concepts",
          label: "concepts",
          elements: [
            {
              id: "dimension",
              label: "Dimensions",
              options: {
                min: 1,
                max: 4
              }
            },
            {
              id: "metric",
              label: "metric",
              type: "WRONG_TYPE",
              options: {
                min: 1,
                max: 1
              }
            }
          ]
        }
      ],
      style: [
        {
          id: "styleSection",
          label: "styling",
          elements: [
            {
              id: "style1",
              tooltip: "This should not exist",
              label: "style1",
              type: "FONT_COLOR"
            }
          ]
        }
      ],
      interactions: [
        {
          id: "onClick",
          supportedActions: ["FILTER"]
        }
      ]
    };
    // TODO - see if there's a better check to do here.
    expect(sut.validateConfig(configExtraKey)).not.toHaveLength(0);
  });

  test("passes when all required fields provided", () => {
    const configAllRequiredKeys = {
      data: [
        {
          id: "concepts",
          label: "concepts",
          elements: [
            {
              id: "dimension",
              label: "Dimensions",
              type: "DIMENSION",
              options: {
                min: 1,
                max: 4,
                supportedTypes: ["TIME", "GEO", "DEFAULT"]
              }
            },
            {
              id: "metric",
              label: "Metric",
              type: "METRIC",
              options: {
                min: 1,
                max: 1
              }
            },
            {
              id: "maxres",
              label: "maxres",
              type: "MAX_RESULTS",
              options: {
                max: 1
              }
            }
          ]
        }
      ],
      style: [
        {
          id: "styleSection",
          label: "styling",
          elements: [
            {
              id: "style1",
              label: "style1",
              type: "FONT_COLOR",
              defaultValue: {
                color: "#000000",
                opacity: undefined
              }
            },
            {
              id: "style2",
              label: "style1",
              type: "FONT_SIZE"
            },
            {
              id: "style3",
              label: "style1",
              type: "FONT_FAMILY"
            },
            {
              id: "style4",
              label: "style1",
              type: "CHECKBOX"
            },
            {
              id: "style5",
              label: "style1",
              type: "TEXTINPUT"
            },
            {
              id: "style5and",
              label: "style1",
              type: "TEXTAREA"
            },
            {
              id: "style6",
              label: "style1",
              type: "SELECT_SINGLE",
              options: [
                {
                  label: "hello",
                  value: "hello"
                },
                {
                  label: "world",
                  value: "world"
                }
              ]
            },
            {
              id: "style7",
              label: "style1",
              type: "SELECT_RADIO",
              options: [
                {
                  label: "hello",
                  value: "hello"
                },
                {
                  label: "world",
                  value: "world"
                }
              ]
            },
            {
              id: "style8",
              label: "style1",
              type: "FILL_COLOR",
              defaultValue: {
                color: "#000000",
                opacity: 0.2
              }
            },
            {
              id: "style9",
              label: "style1",
              type: "BORDER_COLOR"
            },
            {
              id: "style10",
              label: "style1",
              type: "AXIS_COLOR"
            },
            {
              id: "style11",
              label: "style1",
              type: "GRID_COLOR"
            },
            {
              id: "style12",
              label: "style1",
              type: "OPACITY"
            },
            {
              id: "style13",
              label: "style1",
              type: "LINE_WEIGHT"
            },
            {
              id: "style14",
              label: "style1",
              type: "LINE_STYLE"
            },
            {
              id: "style15",
              label: "style1",
              type: "BORDER_RADIUS"
            },
            {
              id: "style16",
              label: "style1",
              type: "INTERVAL"
            }
          ]
        }
      ],
      interactions: [
        {
          id: "onClick",
          supportedActions: ["FILTER"]
        }
      ]
    };
    expect(sut.validateConfig(configAllRequiredKeys)).toHaveLength(0);
  });

  test("allows default values for SELECT_SINGLE & SELECT_RADIO", () => {
    const config = {
      style: [
        {
          id: "id",
          label: "label",
          elements: [
            {
              id: "select-single",
              label: "My Select Single",
              options: [
                { value: "first", label: "First" },
                { value: "second", label: "Second" }
              ],
              defaultValue: "first",
              type: "SELECT_SINGLE"
            },
            {
              id: "select-radio",
              label: "My Select Radio",
              options: [
                { value: "first", label: "First" },
                { value: "second", label: "Second" }
              ],
              defaultValue: "second",
              type: "SELECT_RADIO"
            }
          ]
        }
      ]
    };
    expect(sut.validateConfig(config)).toHaveLength(0);
  });
});
