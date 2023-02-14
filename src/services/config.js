import {ConfigQuery} from '../database/queries';

async function getMisUseAgree() {
  const misUseValue = await ConfigQuery.getConfig('misuseAgree');
  return misUseValue;
}

export {getMisUseAgree};
