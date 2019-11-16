const EventEmitter = require("events").EventEmitter;
const emitter = new EventEmitter();

const sendEmailOnRegistration = require("./send_email_on_registration");
// const someOtherListener = require('./some_other_listener');
// const doSomethingEntirelyDifferent = require('./do_something_entirely_different');

emitter.on("user-registered", sendEmailOnRegistration);

module.exports = emitter;
