//Jordan Stein
var express = require('express');
var app = express();

var Usergrid = require('usergrid');

var dataClient = new Usergrid.client({
    orgName:'binley', //your Apigee organization name
    appName:'sandbox'
});     
      
var options = {
  endpoint:"users", //the collection to query
  qs:{ql:"status = 'active' &limit=5"} //the query string - note the use of the 'ql' property
};

// Call request to initiate the API call
dataClient.request(options, function (err, data) {
    if (err) {
        //error - GET failed
    } else {
        //data will contain raw results from API call
        //success - GET worked
    }
});


// GET request
app.get('/gets', function (req, res) {
  console.log("Got a GET request for the homepage");
  
  var headers = req.headers;
  var query = req.query;
  var result={};

  for(var key in headers) result[key]=headers[key];
  for(var key in query) result[key]=query[key];
  if (result != '{}')
  res.send(result);
  else res.send("No header or query parameters were sent.");
})


// POST request
app.post('/posts', function (req, res) {
  console.log("Got a POST request for the homepage");
  
  var headers = req.headers;
  var query = req.query;
  var result={};

  for(var key in headers) result[key]=headers[key];
  for(var key in query) result[key]=query[key];
  if (result != '{}')
  res.send(result);
  else res.send("No header or query parameters were sent.");
})

// PUT request
app.put('/puts', function (req, res) {
  console.log("Got a PUTS request for the homepage");
  
  var headers = req.headers;
  var query = req.query;
  var result={};

  for(var key in headers) result[key]=headers[key];
  for(var key in query) result[key]=query[key];
  if (result != '{}')
  res.send(result);
  else res.send("No header or query parameters were sent.");
});

// DELETE request
app.delete('/deletes', function (req, res) {
  console.log("Got a DELETES request for the homepage");
  
  var headers = req.headers;
  var query = req.query;
  var result={};

  for(var key in headers) result[key]=headers[key];
  for(var key in query) result[key]=query[key];
  if (result != '{}')
  res.send(result);
  else res.send("No header or query parameters were sent.");
})


var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port
  
    console.log("Example app listening at http://%s:%s", host, port)
  })