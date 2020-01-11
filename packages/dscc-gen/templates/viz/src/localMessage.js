/**
 * This file provides the mock "data" received
 * by your visualization code when you develop
 * locally.
 *
 */
window.message = {
  type: 'RENDER',
  config: {
    data: [
      {
        id: 'concepts',
        label: 'concepts',
        elements: [
          {
            id: 'dimension1',
            label: 'first dimension',
            type: 'DIMENSION',
            options: {
              min: 1,
              max: 3,
              supportedTypes: ['GEO'],
            },
            value: ['qt_k8hcjxtq4b'],
          },
          {
            id: 'metric',
            label: 'metric',
            type: 'METRIC',
            options: {
              min: 1,
              max: 3,
            },
            value: ['qt_c12xgxtq4b'],
          },
        ],
      },
    ],
    style: [],
    interactions: [
      {
        id: 'interactionsConfigId',
        supportedActions: ['FILTER'],
        value: {
          type: 'NONE',
        },
      },
    ],
  },
  fields: [
    {
      id: 'qt_k8hcjxtq4b',
      name: 'Birth Year',
      type: 'TEXT',
      concept: 'DIMENSION',
    },
    {
      id: 'qt_c12xgxtq4b',
      name: 'Mass',
      type: 'NUMBER',
      concept: 'METRIC',
    },
  ],
  dataResponse: {
    tables: [
      {
        id: 'DEFAULT',
        fields: ['qt_k8hcjxtq4b', 'qt_c12xgxtq4b'],
        rows: [
          ['unknown', 1701], ['41.9BBY', 220], ['52BBY', 186], ['92BBY', 171], ['15BBY', 140], ['19BBY', 126], ['53BBY', 113], ['200BBY', 112], ['72BBY', 84], ['24BBY', 84], ['41BBY', 83], ['22BBY', 80], ['54BBY', 80], ['102BBY', 80], ['29BBY', 80], ['66BBY', 79], ['37BBY', 79], ['31BBY', 79], ['31.5BBY', 78.2], ['57BBY', 77], ['21BBY', 77], ['82BBY', 75], ['47BBY', 75], ['112BBY', 75], ['44BBY', 74], ['58BBY', 56.2], ['48BBY', 55], ['40BBY', 50], ['46BBY', 45], ['33BBY', 32], ['8BBY', 20], ['896BBY', 17], ['62BBY', null], ['91BBY', null], ['67BBY', null], ['600BBY', null], ['64BBY', null]
        ],
      },
    ],
  },
};
