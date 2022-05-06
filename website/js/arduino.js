var five = require("johnny-five");
var board = new five.Board();

//let slider1 = document.getElementById("range1");

board.on("ready", function() {

  var servo = new five.Servo(8);

  //output1.innerHTML = slider1.value;
  //slider1.oninput = function () {
  
  servo.to(i);
  
});
