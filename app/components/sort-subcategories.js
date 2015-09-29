import Ember from 'ember';

export default Ember.Component.extend({
  alphabetical: ['name:asc'],
  sortedSubcategories: Ember.computed.sort('model.subcategories', 'alphabetical'),
});
