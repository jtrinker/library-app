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

			// save method on Ember Data Model is a Promise. It promises it is trying to save data.
			// It could be successful or maybe return with error
			newInvitation.save().then((res) => {
				this.set('responseMessage', `Thank you! We saved your email address: ${this.get('emailAddress')}
					 ${res.get('id')}`);
      			this.set('emailAddress', '');
			});
		}
	}
});
