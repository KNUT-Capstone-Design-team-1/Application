import Realm from 'realm';

class PillInfo extends Realm.Object {}
PillInfo.schema = {
  name: 'pillInfo',
  properties: {
    ITEM_SEQ: {type: 'string', optional: true},
    ITEM_NAME: {type: 'string', optional: true},
    ENTP_NAME: {type: 'string', optional: true},
    DRUG_SHAPE: {type: 'string', optional: true},
    CHARTN: {type: 'string', optional: true},
    MAIN_ITEM_INGR: {type: 'string', optional: true},
    INGR_NAME: {type: 'string', optional: true},
    MATERIAL_NAME: {type: 'string', optional: true},
    PACK_UNIT: {type: 'string', optional: true},
    VALID_TERM: {type: 'string', optional: true},
    STORAGE_METHOD: {type: 'string', optional: true},
    ITEM_IMAGE: {type: 'string', optional: true},
  },
};

let realm = new Realm({schema: [PillInfo], schemaVersion: 9});

export default realm;
