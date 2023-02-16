import {ConfigQuery} from '../database/queries';

function initConfig() {
  const configKeys = ConfigQuery.getAllConfig().map(v => v.key);
  const essentialConfigs = ['serviceAgree', 'searchAgree'];

  essentialConfigs.forEach(v => {
    if (!configKeys.includes(v)) {
      ConfigQuery.addConfig({key: v, value: 'decline'});
    }
  });
}

function getserviceAgree() {
  return ConfigQuery.getConfig('serviceAgree')[0];
}

function updateserviceAgree(value = 'decline') {
  return ConfigQuery.updateConfig({key: 'serviceAgree', value});
}

export {initConfig, getserviceAgree, updateserviceAgree};
