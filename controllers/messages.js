module.exports = function (app) {
    var Messages = app.models.Messages;

    app.get('/api/messages', function (req, res) {
        Messages.find({}, function (err, messages) {
            res.send(messages);
        });
    });

};