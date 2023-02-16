import {ConfigQuery} from '../database/queries';

function initConfig() {
  const configKeys = ConfigQuery.getAllConfig().map(v => v.key);
  const essentialConfigs = ['misuseAgree', 'searchAgree'];

  essentialConfigs.forEach(v => {
    if (!configKeys.includes(v)) {
      ConfigQuery.addConfig({key: v, value: 'decline'});
    }
  });
}

function getMisUseAgree() {
  return ConfigQuery.getConfig('misuseAgree')[0];
}

function updateMisUseAgree(value = 'decline') {
  return ConfigQuery.updateConfig({key: 'misuseAgree', value});
}

export {initConfig, getMisUseAgree, updateMisUseAgree};
