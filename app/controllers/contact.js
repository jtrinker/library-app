import Ember from 'ember';

export default Ember.Controller.extend({
	emailAddress: '',
	messageBody: '',

	validEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	validMessage: Ember.computed.gte('messageBody.length', 5),

	disableSend: Ember.computed('validEmail', 'validMessage', function() {
		if (this.get('validEmail') === false || this.get('validMessage') === false) {
			return true;
		}
	}),

	actions: {
		sendMessage() {
			this.set('responseMessage', `Thank you for contacting us! We will email you back at ${this.get('emailAddress')}`);
			this.set('emailAddress', '');
			this.set('messageBody', '');
		}
	}

});
