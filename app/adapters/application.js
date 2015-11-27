import ActiveModeAdapter from 'active-model-adapter';
import config from '../config/environment';

export default ActiveModeAdapter.extend({
//	host: config.host,
  namespace: 'api/v2'
});
