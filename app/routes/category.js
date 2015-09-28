import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },
  actions: {
    saveSubcategory(params) {
      var newSubcategory = this.store.createRecord('subcategory', params);
      newSubcategory.save();
      params.category.save();
    }
  }
});
