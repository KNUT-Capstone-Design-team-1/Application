import Realm from 'realm';
import pillInfoSchema from './pill_info';
import configSchema from './config';

const realmObj = new Realm({
  schema: [pillInfoSchema, configSchema],
  schemaVersion: 10,
});

export default realmObj;
