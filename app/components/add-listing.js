import Ember from 'ember';

export default Ember.Component.extend({
  alphabetical: ['name:asc'],
  sortedCategories: Ember.computed.sort('model.categories', 'alphabetical'),
  actions: {
    saveListing(subcategory) {
      var params = {
        name: this.get('name'),
        title: this.get('title'),
        email: this.get('email'),
        date: new Date(),
        location: this.get('location'),
        details: this.get('details'),
        image: this.get('image'),
        subcategory: subcategory,
      };
      this.sendAction('saveListing', params);
    }
  }
});
