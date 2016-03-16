// controllers are useful for properties that don't need to be saved on a server
// but controllers are being deprecated for components
import Ember from 'ember';

export default Ember.Controller.extend({
	emailAddress: '',
	isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	isDisabled: Ember.computed.not('isValid'),
	// could also do
	// isDisabled: Ember.computed('emailAddress', function() {
	// 	return this.get('emailAddress') === '';
	// }),

	actualEmailAddress: Ember.computed('emailAddress', function() {
		console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
	}),

	// this observer will be called when the value of emailAddress changes
	emailAddressChanged: Ember.observer('emailAddress', function() {
		console.log('observer is called', this.get('emailAddress'));
	}),

	// actions handle user triggered events that change application state
	actions: {
		saveInvitation() {
			this.set('responseMessage', `Thanks! We added your email address, ${this.get('emailAddress')}, to our list`);
			this.set('emailAddress', '');
		}
	}
});
