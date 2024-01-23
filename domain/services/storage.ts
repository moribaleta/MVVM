import { proxyMap } from 'valtio/utils';

/**
 * in this example storage is considered as an outside service
 * can be changed overtime
 */
const storage = proxyMap<string, boolean>([
  ['note 1', true],
  ['note 2', false],
  ['note 3', true],
]);

export default storage;
