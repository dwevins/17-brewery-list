import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model() {
    return fetch(`tiy-brewery-proxy.herokuapp.com/v2/breweries?key=${config.beerKey}&established=2015`)
      .then((res) => res.json());
  }
});
