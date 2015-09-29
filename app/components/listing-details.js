import Ember from 'ember';

export default Ember.Component.extend({
  editMe: false,
  actions: {
    showEditMe() {
      this.set('editMe', true);
    },
    hideEditMe() {
      this.set('editMe', false)
    },
    update(listing) {
      var params = {
        name: this.get('name'),
        title: this.get('title'),
        email: this.get('email'),
        location: this.get('location'),
        details: this.get('details'),
        image: this.get('image'),
      };
      this.set('editMe', false);
      this.sendAction('update', listing, params)
    },
    delete(listing) {
      this.set('editMe', false); 
      this.sendAction('delete', listing)
    }
  }
});
