var app = require('./apps');
var port = process.env.PORT || 5000;

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
