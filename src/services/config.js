import {ConfigQuery} from '../database/queries';

function getMisUseAgree() {
  return ConfigQuery.getConfig('misuseAgree');
}

function updateMisUseAgree(value = 'decline') {
  return ConfigQuery.updateConfig({key: 'misuseAgree', value});
}

export {getMisUseAgree, updateMisUseAgree};
