/*!
  Copyright 2018 Google LLC

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  https://www.apache.org/licenses/LICENSE-2.0

  Unless mind by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
import * as parse from 'url-parse';
import * as sut from '../src/index';
import {
  DSInteractionData,
  DSInteractionType,
  Interaction,
  InteractionsById,
  InteractionType,
  ThemeStyle,
} from '../src/index';
jest.mock('url-parse');

const dsInteractions: DSInteractionData[] = [
  {
    id: 'interactionsConfigId',
    value: {
      type: DSInteractionType.FILTER,
      data: {
        concepts: ['qt_h6oibrb6wb', 'qt_i6oibrb6wb'],
        values: [
          ['Afternoon', 'Sunday'],
          ['Afternoon', 'Thursday'],
          ['Morning', 'Tuesday'],
        ],
      },
    },
    supportedActions: [DSInteractionType.FILTER],
  },
];

const interactionsById: InteractionsById = {
  interactionsConfigId: {
    value: {
      type: InteractionType.FILTER,
      data: {
        concepts: ['qt_h6oibrb6wb', 'qt_i6oibrb6wb'],
        values: [
          ['Afternoon', 'Sunday'],
          ['Afternoon', 'Thursday'],
          ['Morning', 'Tuesday'],
        ],
      },
    },
    supportedActions: [InteractionType.FILTER],
  },
};

const theme: ThemeStyle = {
  themeFillColor: {
    color: '#fff',
    opacity: 1,
  },
  themeFontColor: {
    color: '#616161',
    opacity: 1,
  },
  themeFontFamily: 'Roboto',
  themeAccentFillColor: {
    color: '#4285F4',
    opacity: 1,
  },
  themeAccentFontColor: {
    color: '#EFEFEF',
    opacity: 1,
  },
  themeAccentFontFamily: 'Roboto',
  themeSeriesColor: [
    {
      color: '#4285F4',
      opacity: 1,
    },
    {
      color: '#DB4437',
      opacity: 1,
    },
    {
      color: '#F4B400',
      opacity: 1,
    },
    {
      color: '#0F9D58',
      opacity: 1,
    },
    {
      color: '#AB47BC',
      opacity: 1,
    },
    {
      color: '#00ACC1',
      opacity: 1,
    },
    {
      color: '#FF7043',
      opacity: 1,
    },
    {
      color: '#9E9D24',
      opacity: 1,
    },
    {
      color: '#5C6BC0',
      opacity: 1,
    },
    {
      color: '#F06292',
      opacity: 1,
    },
    {
      color: '#00796b',
      opacity: 1,
    },
    {
      color: '#c2185b',
      opacity: 1,
    },
    {
      color: '#7e57c2',
      opacity: 1,
    },
    {
      color: '#03a9f4',
      opacity: 1,
    },
    {
      color: '#8bc34a',
      opacity: 1,
    },
    {
      color: '#fdd835',
      opacity: 1,
    },
    {
      color: '#fb8c00',
      opacity: 1,
    },
    {
      color: '#8d6e63',
      opacity: 1,
    },
    {
      color: '#9e9e9e',
      opacity: 1,
    },
    {
      color: '#607d8b',
      opacity: 1,
    },
  ],
  themeIncreaseColor: {
    color: '#388e3c',
    opacity: 1,
  },
  themeDecreaseColor: {
    color: '#f44336',
    opacity: 1,
  },
  themeGridColor: {
    color: '#e9e9e9',
    opacity: 1,
  },
};

const testDimensionFields = (numRequested: number): sut.Field[] => {
  const fields = [
    {
      id: 'dimensionField1Id',
      name: 'dimensionField1Name',
      description: 'dimensionField1Description',
      type: sut.FieldType.TEXT,
      concept: sut.ConceptType.DIMENSION,
    },
    {
      id: 'dimensionField2Id',
      name: 'dimensionField2Name',
      description: 'dimensionField2Description',
      type: sut.FieldType.BOOLEAN,
      concept: sut.ConceptType.DIMENSION,
    },
  ];
  if (numRequested > fields.length) {
    throw new Error(`Can't support ${numRequested} fields yet.`);
  }
  return fields.splice(0, numRequested);
};

const testMetricFields = (numRequested: number): sut.Field[] => {
  const fields = [
    {
      id: 'metricField1Id',
      name: 'metricField1Name',
      description: 'metricField1Description',
      type: sut.FieldType.NUMBER,
      concept: sut.ConceptType.METRIC,
    },
    {
      id: 'metricField2Id',
      name: 'metricField2Name',
      description: 'metricField2Description',
      type: sut.FieldType.PERCENT,
      concept: sut.ConceptType.METRIC,
    },
  ];
  if (numRequested > fields.length) {
    throw new Error(`Can't support ${numRequested} fields yet.`);
  }
  return fields.splice(0, numRequested);
};

const testStyle = (numRequested: number): sut.StyleEntry[] => {
  const styleElements: sut.ConfigStyle[] = [
    {
      id: 'styleId',
      label: 'styleLabel',
      elements: [
        {
          id: 'styleInnerId1',
          type: sut.ConfigStyleElementType.FILL_COLOR,
          label: 'This is a fill color label',
          defaultValue: '13',
          value: '12',
        },
      ],
    },
    {
      id: 'styleId2',
      label: 'styleLabel2',
      elements: [
        {
          id: 'styleInnerId2',
          type: sut.ConfigStyleElementType.AXIS_COLOR,
          label: 'This is an axis color label',
          defaultValue: '3',
          value: '4',
        },
      ],
    },
  ];
  if (numRequested > styleElements.length) {
    throw new Error(`Can't support ${numRequested} fields yet.`);
  }
  return styleElements.splice(0, numRequested);
};

const testMessage = (
  numDimensions: number,
  numMetrics: number,
  numStyle: number
): sut.Message => {
  const dimensionFields = testDimensionFields(numDimensions);
  const metricFields = testMetricFields(numMetrics);
  const fields = dimensionFields.concat(metricFields);
  const style = testStyle(numStyle);
  return {
    type: sut.MessageType.RENDER,
    config: {
      interactions: dsInteractions,
      data: [
        {
          id: 'configId',
          label: 'configLabel',
          elements: [
            {
              type: sut.ConfigDataElementType.DIMENSION,
              id: 'dimensions',
              label: 'configDimension1Label',
              options: {
                min: 1,
                max: numDimensions,
                supportedTypes: [],
              },
              value: dimensionFields.map((a) => a.id),
            },
            {
              type: sut.ConfigDataElementType.METRIC,
              id: 'metrics',
              label: 'configMetric1Label',
              options: {
                min: 1,
                max: numMetrics,
                supportedTypes: [],
              },
              value: metricFields.map((a) => a.id),
            },
          ],
        },
      ],
      style,
      themeStyle: theme,
    },
    fields,
    dataResponse: {
      tables: [
        {
          id: sut.TableType.DEFAULT,
          fields: fields.map((a) => a.id),
          rows: [1, 2].map((num) => {
            return fields.map((a) => {
              switch (a.type) {
                case sut.FieldType.TEXT:
                  return '' + num;
                case sut.FieldType.NUMBER:
                  return num;
                case sut.FieldType.BOOLEAN:
                  return num % 2 === 0;
                case sut.FieldType.PERCENT:
                  return num / 100.0;
                default:
                  throw new Error(`${a.type} is not supported yet.`);
              }
            });
          }),
        },
      ],
    },
  };
};

test('parseImage all three fields present', () => {
  const input = 'originalurl.com\u00a0\u00a0proxiedurl.com\u00a0\u00a0alt text';
  const expected: sut.ParsedImage = {
    originalUrl: 'originalurl.com',
    proxiedUrl: 'proxiedurl.com',
    altText: 'alt text',
  };
  const actual = sut.parseImage(input);
  expect(actual).toEqual(expected);
});

test('parseImage two fields present', () => {
  const input = 'originalurl.com\u00a0\u00a0proxiedurl.com';
  const expected: sut.ParsedImage = {
    originalUrl: 'originalurl.com',
    proxiedUrl: 'proxiedurl.com',
    altText: undefined,
  };
  const actual = sut.parseImage(input);
  expect(actual).toEqual(expected);
});

test('parseImage one fields present', () => {
  const input = 'originalurl.com';
  const expected: sut.ParsedImage = {
    originalUrl: 'originalurl.com',
    proxiedUrl: undefined,
    altText: undefined,
  };
  const actual = sut.parseImage(input);
  expect(actual).toEqual(expected);
});

test('subscribeToData works', () => {
  const mockParse = parse as any;
  mockParse.mockReturnValueOnce({query: {dscId: 'my-id'}});
  const message = testMessage(1, 1, 1);
  const addEventListenerMock = jest.fn((event, cb) => {
    if (event === 'message') {
      cb({data: message});
    } else {
      throw new Error('unsupported event type for testing');
    }
  });

  const postMessageMock = jest.fn();
  const removeEventListenerMock = jest.fn();

  window.addEventListener = addEventListenerMock;
  window.parent.postMessage = postMessageMock;
  window.removeEventListener = removeEventListenerMock;
  // This is a hack since we can't do `window.frameElement = {...}`
  Object.defineProperty(window, 'frameElement', {
    get: () => ({
      getAttribute: () => '123',
    }),
  });

  const unSub = sut.subscribeToData(
    (actual: sut.TableFormat) => {
      expect(actual).toEqual(sut.tableTransform(message));
    },
    {transform: sut.tableTransform}
  );
  unSub();
  expect(removeEventListenerMock.mock.calls.length).toBeGreaterThan(0);
});

test('tableTransform empty style', () => {
  const expectedFields = {
    dimensions: [
      {
        id: 'dimensionField1Id',
        name: 'dimensionField1Name',
        description: 'dimensionField1Description',
        type: sut.FieldType.TEXT,
        concept: sut.ConceptType.DIMENSION,
      },
      {
        id: 'dimensionField2Id',
        name: 'dimensionField2Name',
        description: 'dimensionField2Description',
        type: sut.FieldType.BOOLEAN,
        concept: sut.ConceptType.DIMENSION,
      },
    ],
    metrics: [
      {
        id: 'metricField1Id',
        name: 'metricField1Name',
        description: 'metricField1Description',
        type: sut.FieldType.NUMBER,
        concept: sut.ConceptType.METRIC,
      },
      {
        id: 'metricField2Id',
        name: 'metricField2Name',
        description: 'metricField2Description',
        type: sut.FieldType.PERCENT,
        concept: sut.ConceptType.METRIC,
      },
    ],
  };
  const expected: sut.TableFormat = {
    interactions: interactionsById,
    fields: expectedFields,
    tables: {
      [sut.TableType.DEFAULT]: {
        headers: [
          {
            ...expectedFields.dimensions[0],
            configId: 'dimensions',
          },
          {
            ...expectedFields.dimensions[1],
            configId: 'dimensions',
          },
          {
            ...expectedFields.metrics[0],
            configId: 'metrics',
          },
          {
            ...expectedFields.metrics[1],
            configId: 'metrics',
          },
        ],
        rows: [['1', false, 1, 0.01], ['2', true, 2, 0.02]],
      },
    },
    style: {},
    theme,
  };
  const actual = sut.tableTransform(testMessage(2, 2, 0));
  expect(actual).toEqual(expected);
});

test('tableTransform works', () => {
  const expectedFields = {
    dimensions: [
      {
        id: 'dimensionField1Id',
        name: 'dimensionField1Name',
        description: 'dimensionField1Description',
        type: sut.FieldType.TEXT,
        concept: sut.ConceptType.DIMENSION,
      },
      {
        id: 'dimensionField2Id',
        name: 'dimensionField2Name',
        description: 'dimensionField2Description',
        type: sut.FieldType.BOOLEAN,
        concept: sut.ConceptType.DIMENSION,
      },
    ],
    metrics: [
      {
        id: 'metricField1Id',
        name: 'metricField1Name',
        description: 'metricField1Description',
        type: sut.FieldType.NUMBER,
        concept: sut.ConceptType.METRIC,
      },
      {
        id: 'metricField2Id',
        name: 'metricField2Name',
        description: 'metricField2Description',
        type: sut.FieldType.PERCENT,
        concept: sut.ConceptType.METRIC,
      },
    ],
  };
  const expected: sut.TableFormat = {
    interactions: interactionsById,
    theme,
    fields: expectedFields,
    tables: {
      [sut.TableType.DEFAULT]: {
        headers: [
          {
            ...expectedFields.dimensions[0],
            configId: 'dimensions',
          },
          {
            ...expectedFields.dimensions[1],
            configId: 'dimensions',
          },
          {
            ...expectedFields.metrics[0],
            configId: 'metrics',
          },
          {
            ...expectedFields.metrics[1],
            configId: 'metrics',
          },
        ],
        rows: [['1', false, 1, 0.01], ['2', true, 2, 0.02]],
      },
    },
    style: {
      styleInnerId1: {
        defaultValue: '13',
        value: '12',
      },
      styleInnerId2: {
        defaultValue: '3',
        value: '4',
      },
    },
  };
  const actual: sut.TableFormat = sut.tableTransform(testMessage(2, 2, 2));
  expect(actual).toEqual(expected);
});

test('objectTransform works', () => {
  const expected: sut.ObjectFormat = {
    interactions: interactionsById,
    fields: {
      dimensions: [
        {
          id: 'dimensionField1Id',
          name: 'dimensionField1Name',
          description: 'dimensionField1Description',
          type: sut.FieldType.TEXT,
          concept: sut.ConceptType.DIMENSION,
        },
        {
          id: 'dimensionField2Id',
          name: 'dimensionField2Name',
          description: 'dimensionField2Description',
          type: sut.FieldType.BOOLEAN,
          concept: sut.ConceptType.DIMENSION,
        },
      ],
      metrics: [
        {
          id: 'metricField1Id',
          name: 'metricField1Name',
          description: 'metricField1Description',
          type: sut.FieldType.NUMBER,
          concept: sut.ConceptType.METRIC,
        },
        {
          id: 'metricField2Id',
          name: 'metricField2Name',
          description: 'metricField2Description',
          type: sut.FieldType.PERCENT,
          concept: sut.ConceptType.METRIC,
        },
      ],
    },
    tables: {
      [sut.TableType.DEFAULT]: [
        {
          dimensions: ['1', false],
          metrics: [1, 0.01],
        },
        {
          dimensions: ['2', true],
          metrics: [2, 0.02],
        },
      ],
    },
    style: {
      styleInnerId1: {
        defaultValue: '13',
        value: '12',
      },
      styleInnerId2: {
        defaultValue: '3',
        value: '4',
      },
    },
    theme,
  };
  const actual: sut.ObjectFormat = sut.objectTransform(testMessage(2, 2, 2));
  expect(actual).toEqual(expected);
});

test('custom transform not supported', () => {
  const message = testMessage(1, 1, 1);
  const addEventListenerMock = jest.fn((event, cb) => {
    if (event === 'message') {
      cb({data: message});
    } else {
      throw new Error('unsupported event type for testing');
    }
  });

  const postMessageMock = jest.fn();
  const removeEventListenerMock = jest.fn();

  window.addEventListener = addEventListenerMock;
  window.parent.postMessage = postMessageMock;
  window.removeEventListener = removeEventListenerMock;

  expect(() => {
    sut.subscribeToData(
      (actual) => {
        expect(actual).toEqual(sut.tableTransform(message));
      },
      {transform: (thing) => thing}
    );
  }).toThrowError('Only the built in transform functions are supported.');
});

test('Error thrown when styleIds are not unique', () => {
  const styleWithReusedIds: sut.ConfigStyle[] = [
    {
      id: 'styleId',
      label: 'styleLabel',
      elements: [
        {
          id: 'styleInnerId1',
          type: sut.ConfigStyleElementType.FILL_COLOR,
          label: 'This is a fill color label',
          defaultValue: '13',
          value: '12',
        },
      ],
    },
    {
      id: 'styleId',
      label: 'styleLabel2',
      elements: [
        {
          id: 'styleInnerId1',
          type: sut.ConfigStyleElementType.FILL_COLOR,
          label: 'This is a fill color label',
          defaultValue: '13',
          value: '12',
        },
      ],
    },
  ];

  const message: sut.Message = testMessage(1, 1, 1);
  message.config.style = styleWithReusedIds;
  expect(() => {
    sut.objectTransform(message);
  }).toThrowError('styleInnerId1');
});

test('If elements are dim met dim dim, they have to be sorted specially.', () => {
  const messageDimMetDimDim: sut.Message = {
    type: sut.MessageType.RENDER,
    config: {
      interactions: dsInteractions,
      themeStyle: theme,
      style: [],
      data: [
        {
          id: 'concepts',
          elements: [
            {
              id: 'index',
              label: 'Index Dimension',
              type: sut.ConfigDataElementType.DIMENSION,
              options: {max: 1, min: 1},
              value: ['qt_6k2n466ktb'],
            },
            {
              id: 'arbitraryMetric',
              label: 'Aribrary Metric',
              type: sut.ConfigDataElementType.METRIC,
              options: {max: 1, min: 1},
              value: ['qt_t43n466ktb'],
            },
            {
              id: 'dateDimension',
              label: 'Date',
              type: sut.ConfigDataElementType.DIMENSION,
              options: {max: 1, min: 1, supportedTypes: ['TIME']},
              value: ['qt_s43n466ktb'],
            },
            {
              id: 'label',
              label: 'Timeline Labels',
              type: sut.ConfigDataElementType.DIMENSION,
              options: {max: 1, min: 1},
              value: ['qt_zc3n466ktb'],
            },
          ],
          label: 'Concepts',
        },
      ],
    },
    fields: [
      {
        id: 'qt_6k2n466ktb',
        name: 'Source',
        type: sut.FieldType.TEXT,
        concept: sut.ConceptType.DIMENSION,
      },
      {
        id: 'qt_s43n466ktb',
        name: 'Date',
        type: sut.FieldType.YEAR_MONTH_DAY,
        concept: sut.ConceptType.DIMENSION,
      },
      {
        id: 'qt_zc3n466ktb',
        name: 'Medium',
        type: sut.FieldType.TEXT,
        concept: sut.ConceptType.DIMENSION,
      },
      {
        id: 'qt_t43n466ktb',
        name: 'Sessions',
        type: sut.FieldType.NUMBER,
        concept: sut.ConceptType.METRIC,
      },
    ],
    dataResponse: {
      tables: [
        {
          id: sut.TableType.DEFAULT,
          fields: [
            'qt_6k2n466ktb',
            'qt_s43n466ktb',
            'qt_zc3n466ktb',
            'qt_t43n466ktb',
          ],
          rows: [
            ['google', '20181126', 'organic', 2105],
            ['google', '20181205', 'organic', 1775],
            ['google', '20181206', 'organic', 1764],
          ],
        },
      ],
    },
  };
  const actual: sut.TableFormat = sut.tableTransform(messageDimMetDimDim);

  const headers = actual.tables[sut.TableType.DEFAULT].headers;
  expect(headers[0].configId === 'index');
  expect(headers[0].configId === 'dateDimension');
  expect(headers[0].configId === 'label');
  expect(headers[0].configId === 'arbitraryMetric');

  const rows = actual.tables[sut.TableType.DEFAULT].rows;
  expect(rows[0][0]).toEqual('google');
  expect(rows[0][3]).toEqual(2105);
});

describe('when window.location mocked', () => {
  const mockParse = parse as any;

  test('finds componentId when defined', () => {
    mockParse.mockReturnValueOnce({query: {dscId: 'my-id'}});
    expect(sut.getComponentId()).toEqual('my-id');
  });

  test('throws with componentId is not defined', () => {
    mockParse.mockReturnValueOnce({query: {}});
    expect(() => sut.getComponentId()).toThrow(
      'dscId must be in the query parameters'
    );
  });
});
