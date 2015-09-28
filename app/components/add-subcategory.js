import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveSubcategory() {
      var params = {
        name: this.get('name'),
        category: this.get('category'),
        listings: []
      };
      this.sendAction('saveSubcategory', params);
    }
  }
});
