var express = require('express');
var app = express();

// reply to request with "Hello World!"
app.get('/toggle_led/:pin', function (req, res) {
pushButton.watch(function (err, value) { //Watch for hardware interrupts on pushButton GPIO, specify callback function
  if (err) { //if an error
    console.error('There was an error', err); //output error message to console
  return;
  }
  LED.writeSync(value); //turn LED on or off depending on the button state (0 or 1)
});

function unexportOnClose() { //function to run when exiting program
  LED.writeSync(0); // Turn LED off
  LED.unexport(); // Unexport LED GPIO to free resources
  pushButton.unexport(); // Unexport Button GPIO to free resources
};

process.on('SIGINT', unexportOnClose)

});



// reply to request with "Hello World!"
app.get('/', function (req, res) {
  res.send('<b> My first node app with resin.io running on PI 3 </b>');
});

app.get('/', function req, res){


});

//start a server on port 80 and log its start to our console
var server = app.listen(80, function () {

  var port = server.address().port;
  console.log('Example app listening on port ', port);

});
