var five = require("johnny-five");
var board = new five.Board();



board.on("ready", function() {

  var thumb = new five.Servo(1);
  var index = new five.Servo(2);
  var middle = new five.Servo(3);
  var ring = new five.Servo(4);
  var pinky = new five.Servo(5);
  
  function updateClickLabels() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            thumb.to(response.thumb);
            index.to(response.index);
            middle.to(response.middle);
            ring.to(response.ring);
            pinky.to(response.pinky);
        }
    };
    xhttp.open("GET", "/fingers", true);
    xhttp.send();
}
  
  
});
