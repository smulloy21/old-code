import Ember from 'ember';

export default Ember.Component.extend({
  mostRecent: ['date:desc'],
  sortedListings: Ember.computed.sort('subcategory.listings', 'mostRecent'),
  recentListings: Ember.computed('subcategory.listings.[]', function() {
    var recent = [];
    recent.push(this.get('sortedListings').objectAt(0));
    recent.push(this.get('sortedListings').objectAt(1));
    recent.push(this.get('sortedListings').objectAt(2));
    return recent;
  }),
});
