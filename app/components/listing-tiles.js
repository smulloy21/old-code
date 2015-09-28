import Ember from 'ember';

export default Ember.Component.extend({
  mostRecent: ['date:desc'],
  sortedListings: Ember.computed.sort('listings', 'mostRecent'),
});
