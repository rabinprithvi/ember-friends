import FriendsBaseController from './base';

export default FriendsBaseController.extend({
  actions: {
    cancel() {
      this.get('model').rollback();
      this.transitionToRoute('friends.show', this.get('model'));
      return true;
    }
  }
});
