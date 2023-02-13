const configSchema = {
  name: 'config',
  properties: {
    key: {type: 'string', optional: false},
    value: {type: 'string', optional: false},
  },
};

export default configSchema;
