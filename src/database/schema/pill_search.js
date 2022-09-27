import Realm from 'realm';

class Pill_Schema extends Realm.Object {}
Pill_Schema.schema = {
  name: 'Pill',
  properties: {
    ITEM_SEQ: {type: 'string', optional: true},
    ITEM_NAME: {type: 'string', optional: true},
    ENTP_NAME: {type: 'string', optional: true},
    CHARTIN: {type: 'string', optional: true},
    ITEM_IMAGE: {type: 'string', optional: true},
    DRUG_SHAPE: {type: 'string', optional: true},
    COLOR_CLASS1: {type: 'string', optional: true},
    COLOR_CLASS2: {type: 'string', optional: true},
    LINE_FRONT: {type: 'string', optional: true},
    LINE_BACK: {type: 'string', optional: true},
    ITEM_PERMIT_DATE: {type: 'string', optional: true},
    ETC_OTC_CODE: {type: 'string', optional: true},
    MATRIAL_NAME: {type: 'string', optional: true},
    STORAGE_NAME: {type: 'string', optional: true},
    PACK_UNIT: {type: 'string', optional: true},
    NARCOTIC_KIND_CODE: {type: 'string', optional: true},
    NEWDRUG_CLASS_NAME: {type: 'string', optional: true},
    TOTAL_CONTENT: {type: 'string', optional: true},
    MAIN_ITEM_INGR: {type: 'string', optional: true},
    INGR_NAME: {type: 'string', optional: true},
  },
};

let realm = new Realm({schema: [Pill_Schema], schemaVersion: 7});

export default realm;
