module.exports = function (app) {
    var Messages = app.models.Messages;

    app.get('/api/messages', function (req, res) {
        Messages.find({}, function (err, messages) {
            res.send(messages);
        });
    });

    app.get('/api/messages/:id', function (req, res) {
        Messages.findById(req.params.id, function (err, messages) {
            res.send(messages);
        });
    });

};