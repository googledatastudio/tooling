const cc = DataStudioApp.createCommunityConnector();

// https://devsite.googleplex.com/datastudio/connector/reference#isadminuser
const isAdminUser: IsAdminUser = () => {
  return false;
};

// https://devsite.googleplex.com/datastudio/connector/reference#getconfig
const getConfig: GetConfig = () => {
  const config = cc.getConfig();

  config
    .newInfo()
    .setId('generalInfo')
    .setText(
      'This is the template connector created by https://github.com/googledatastudio/dscc-gen'
    );

  config
    .newSelectSingle()
    .setId('units')
    .setName('Units')
    .setHelpText('Metric or Imperial Units')
    .setAllowOverride(true)
    .addOption(
      config
        .newOptionBuilder()
        .setLabel('Metric')
        .setValue('metric')
    )
    .addOption(
      config
        .newOptionBuilder()
        .setLabel('Imperial')
        .setValue('imperial')
    );

  return config.build();
};

const getFields = (): Fields => {
  const fields = cc.getFields();
  const types = cc.FieldType;
  const aggregations = cc.AggregationType;

  fields
    .newDimension()
    .setId('id')
    .setName('Id')
    .setType(types.TEXT);

  fields
    .newMetric()
    .setId('distance')
    .setName('Distance')
    .setType(types.NUMBER)
    .setAggregation(aggregations.SUM);

  return fields;
};

// https://devsite.googleplex.com/datastudio/connector/reference#getschema
const getSchema: GetSchema = () => {
  return {schema: getFields().build()};
};

// https://devsite.googleplex.com/datastudio/connector/reference#getdata
const getData: GetData = (request) => {
  // Calling `UrlFetchApp.fetch()` makes this connector require authentication.
  UrlFetchApp.fetch('https://google.com');

  const requestedFields = getFields().forIds(
    request.fields.map((field) => field.name)
  );

  // Convert from miles to kilometers if 'metric' units were picked.
  let unitMultiplier = 1;
  if (request.configParams.units === 'metric') {
    unitMultiplier = 1.60934;
  }

  const rows: GetDataRows = [];
  for (let i = 0; i < 100; i++) {
    const rowValues: GetDataRowValue[] = [];
    requestedFields.asArray().forEach((field) => {
      switch (field.getId()) {
        case 'id':
          return rowValues.push('id_' + i);
        case 'distance':
          return rowValues.push(i * unitMultiplier);
        default:
          return rowValues.push('');
      }
    });
    const row: GetDataRow = {values: rowValues};
    rows.push(row);
  }

  return {
    schema: requestedFields.build(),
    rows: rows,
  };
};
