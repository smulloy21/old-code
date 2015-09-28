import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('category', {path: 'category/:category_id'});
  this.route('subcategory', {path: 'category/subcategory/:subcategory_id'});
  this.route('listing', {path: 'listing/:listing_id'});
  this.route('newListing');
});

export default Router;
