import DS from 'ember-data';

export default DS.Model.extend({
  subcategory: DS.belongsTo('subcategory', {async: true}),
  title: DS.attr(),
  name: DS.attr(),
  email: DS.attr(),
  date: DS.attr(),
  location: DS.attr(),
  details: DS.attr(),
  image: DS.attr(),
});
