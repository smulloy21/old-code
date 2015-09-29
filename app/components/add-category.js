import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveCategory() {
      var params = {
        name: this.get('name'),
        subcategories: [],
        image: this.get('image')
      };
      this.sendAction('saveCategory', params);
    }
  }

});
