import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('listing', params.listing_id);
  },
  actions: {
    update(listing, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined && params[key]!=="") {
          listing.set(key, params[key]);
        }
      });
      listing.save();
      this.transitionTo('listing', listing.id);
    },
    delete(listing) {
      var subcat = listing.subcategory;
      listing.destroyRecord().then(function() {
        subcat.save();
      });
      this.transitionTo('subcategory', subcat.id);
    }
  }
});
