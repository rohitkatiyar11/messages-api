// load the things we need
var mongoose = require('mongoose');


var messagesSchema = new mongoose.Schema({
  name: { type: String },
  message: { type: String }
});

// create the model for users and expose it to our app
exports.MessagesSchema = module.exports.MessagesSchema = messagesSchema;
exports.boot = module.exports.boot = function (app) {
    mongoose.model('Messages', messagesSchema);
    return app.models.Messages = mongoose.model('Messages');
};