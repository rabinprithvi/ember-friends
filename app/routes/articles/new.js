import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      return this.store.createRecord('article', {
        friend: this.modelFor('friends/show')
      });
    },
    actions: {
      save() {
          var model = this.controller.get('model');;
          model.save().then(() => {
            this.transitionTo('articles');
          });
        },
        cancel() {
          var model = this.controller.get('model');
          model.rollbackAttributes();
          this.transitionTo('articles');
        },
        willTransition(){
          var model = this.controller.get('model');
          model.rollbackAttributes();
        }
    }
});
