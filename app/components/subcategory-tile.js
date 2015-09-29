import Ember from 'ember';

export default Ember.Component.extend({
  mostRecent: ['date:desc'],
  sortedListings: Ember.computed.sort('subcategory.listings', 'mostRecent'),
  recentListings: Ember.computed('subcategory.listings.[]', function() {
    var recent = [this.get('sortedListings').objectAt(0), this.get('sortedListings').objectAt(1), this.get('sortedListings').objectAt(2)];
    return recent;
  }),
});
