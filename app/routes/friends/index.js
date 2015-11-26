import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('friend');
  },
  actions: {
    destroy(friend){
      friend.destroyRecord();
      return false;
    }
  }
});
