import Ember from 'ember';

export default Ember.Component.extend({
  mostRecent: ['date:desc'],
  sortedListings: Ember.computed.sort('subcategory.listings', 'mostRecent'),
  topThree: Ember.observer('subcategory.listings', function() {
    if (this.get('sortedListings').length > 2) {
      'sortedListings'.slice(0, 2);
    }
  }),
});
