var express = require('express');
var app = express();

var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED = new Gpio(4, 'out');
var blinkInterval = setInterval(blinkLED, 250);

// reply to request with "Hello World!"
app.get('/toggle_led/:pin', function (req, res) {
  if (LED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
    LED.writeSync(1); //set pin state to 1 (turn LED on)
  }
  else {
    LED.writeSync(0); //set pin state to 0 (turn LED off)
  }

  clearInterval(blinkInterval); // Stop blink intervals
  LED.writeSync(0); // Turn LED off
  LED.unexport(); // Unexport GPIO to free resources

  setTimeout(endBlink, 5000);

});

// reply to request with "Hello World!"
app.get('/about', function (req, res) {
  res.send('<b> This is a resin io test </b>');
});

// reply to request with "Hello World!"
app.get('/', function (req, res) {
  res.send('<b> My first node app with resin.io running on PI 3 </b>');
});


//start a server on port 80 and log its start to our console
var server = app.listen(80, function () {

  var port = server.address().port;
  console.log('Example app listening on port ', port);

});
