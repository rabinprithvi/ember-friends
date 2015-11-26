import ActiveModeAdapter from 'active-model-adapter';

export default ActiveModeAdapter.extend({
	host: config.host,
  namespace: 'api'
});
