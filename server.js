//Jordan Stein
var express = require('express');
var app = express();

var Usergrid = require('usergrid');

var dataClient = new Usergrid.client({
    orgName:'binley', //your Apigee organization name
    appName:'sandbox'
});     

// GET request
app.get('/gets', function (req, res) {
    console.log("Got a GET request for the homepage");

    var options = {
        endpoint:'movies', //the collection to query
        qs:{ql:req.query.sql} //the query string - note the use of the 'ql' property
    };

    // Call request to initiate the API call
    dataClient.request(options, function (err, data) {
        if (err) {
            //error - GET failed
            res.send("The data you entered was not found.");
        } else {
            res.send(data);
            //data will contain raw results from API call
            //success - GET worked
        }
    });
})

// POST request
app.post('/posts', function (req, res) {
    console.log("Got a POST request for the homepage");
  
    // error checking to ensure user entered the correct headers for post
    if (typeof(req.headers.name) != 'string'){
        res.send("missing 'name' in headers");
        return;
    }
    if (typeof(req.headers.year) != 'string'){
        res.send("missing 'year' in headers");
        return;
    }
    if (typeof(req.headers.actor1) != 'string'){
        res.send("missing 'actor1' in headers");
        return;
    }
    if (typeof(req.headers.actor2) != 'string'){
        res.send("missing 'actor2' in headers");
        return;
    }
    if (typeof(req.headers.actor3) != 'string'){
        res.send("missing 'actor3' in headers");
        return;
    }
  
    var options = {
        method: 'POST',
        endpoint:'movies', //the collection to query
      //qs:{ql:"select *"} //the query string - note the use of the 'ql' property
        body: { type: 'movies',
        name: req.headers.name,
        releaseYear: req.headers.year,
        actors : [
            {name : req.headers.actor1},
            {name : req.headers.actor2},
            {name : req.headers.actor3}
        ] 
    }}

// Call request to initiate the API call
    dataClient.request(options, function (err, data) {
        if (err) {
            //error - GET failed
            res.send("The data you entered was not found.");
        } else {
            res.send(data);
            //data will contain raw results from API call
            //success - GET worked
        }
    });
})

// DELETE request
app.delete('/deletes', function (req, res) {
    console.log("Got a DELETES request for the homepage");
    
    if (typeof(req.headers.uuid) != 'string')
        res.send("missing uuid of movie to be deleted in headers");
    
    //options for the request
    var options = {
      endpoint:"movies/"+req.headers.uuid,
      method:"DELETE",
      //qs:{ql:"limit=5"}
    }
    
    dataClient.request(options,function (error,result) {
      if (error) { 
       // Error
      } else { 
        // Success
        res.send(result);
      }
    });   
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port
  
    console.log("Example app listening at http://%s:%s", host, port)
  })