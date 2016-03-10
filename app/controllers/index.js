// controllers are useful for properties that don't need to be saved on a server
// but controllers are being deprecated for components
import Ember from 'ember';

export default Ember.Controller.extend({
	isDisabled: true,
	emailAddress: '',

	// computed properties are basically object properties that take other properties, stick
	// them into a function, and compute some new value.
	actualEmailAddress: Ember.computed('emailAddress', function() {
		console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
	}),

	// this observer will be called when the value of emailAddress changes
	emailAddressChanged: Ember.observer('emailAddress', function() {
		console.log('observer is called', this.get('emailAddress'));
	})
});
