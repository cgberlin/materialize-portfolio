var express = require('express'),
http = require('http'),
app = express();
//Port to be listen, by default 3000
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));     

//Set headers on the communication client server.
app.use(function (req, res, next) {
  
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, X-API-KEY");
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  return next();
});

/**
 * Start Server
 */
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
