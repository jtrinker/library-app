import Ember from 'ember';

export default Ember.Controller.extend({
	emailAddress: '',
	messageBody: '',

	validEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	validMessage: Ember.computed.gte('messageBody.length', 5),

	enableSend: Ember.computed.and('validEmail', 'validMessage'),
	disableSend: Ember.computed.not('enableSend')

});
