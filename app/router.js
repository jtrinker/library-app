import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // this is default index behavior
  // this.route('index', { path: '/' });
  this.route('about');
  this.route('contact');

  this.route('admin', function() {
    this.route('invitations');
  });
});

export default Router;
