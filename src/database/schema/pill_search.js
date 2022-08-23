import Realm from 'realm';

class Pill_Schema extends Realm.Object {}
Pill_Schema.schema = {
  name: 'Pill',
  properties: {
    image: {type: 'string', optional: true},
    name: {type: 'string', optional: true},
    effect: {type: 'string', optional: true},
    dosage: {type: 'string', optional: true},
    caution: {type: 'string', optional: true},
    take: {type: 'string', optional: true},
    maker: {type: 'string', optional: true},
  },
};

let realm = new Realm({schema: [Pill_Schema], schemaVersion: 7});

export default realm;
