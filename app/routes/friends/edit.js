import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    willTransition(){
      let friend = this.controller.get('model');
      friend.rollback();
    }
  }

});
