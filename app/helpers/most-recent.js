import Ember from 'ember';

export function mostRecent(sortedListings) {
  var string = "";
  for (var i=0; i<3; i++) {
    string += "<li>" + sortedListings[i].name + "</li><br>";
  }
  return string;
}

export default Ember.Helper.helper(mostRecent);
