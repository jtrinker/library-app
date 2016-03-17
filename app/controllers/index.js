// controllers are useful for properties that don't need to be saved on a server
// but controllers are being deprecated for components
import Ember from 'ember';

export default Ember.Controller.extend({
	headerMessage: 'Coming Soon',
	responseMessage: '',
	emailAddress: '',

	isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	isDisabled: Ember.computed.not('isValid'),

	// actions handle user triggered events that change application state
	actions: {
		saveInvitation() {
			const email = this.get('emailAddress');
			const newInvitation = this.store.createRecord('invitation', {
				email: email
			});

			// save() tries to make a network request
			newInvitation.save();

			this.set('responseMessage', `Thank you! We saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
		}
	}
});
