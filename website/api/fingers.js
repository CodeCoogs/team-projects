let express = require('express');
let jsonfile = require("jsonfile");
let router = express.Router();
const jsonPath = './data/fingers.json';

// Johnny five
var five = require("johnny-five");
var board = new five.Board();

var getDataFromJson = () => {
   return jsonfile.readFileSync(jsonPath);
}

//Routes will go here
router.get('/', function(req, res){
   const jsonData = getDataFromJson();
   res.status(200).send(jsonData);
});

board.on("ready", function() {
   var thumb = new five.Servo(1);
   var index = new five.Servo(2);
   var middle = new five.Servo(3);
   var ring = new five.Servo(4);
   var pinky = new five.Servo(5);


   router.post('/', (req, res) => {
      res.setHeader("Access-Control-Allow-Origin", "*")
      res.setHeader("Access-Control-Allow-Credentials", "true");
      res.setHeader("Access-Control-Max-Age", "1800");
      res.setHeader("Access-Control-Allow-Headers", "content-type");
      res.setHeader( "Access-Control-Allow-Methods", "POST, GET" ); 

     

      const curThumb = req.body.thumb;
      const curIndex = req.body.index;
      const curMiddle = req.body.middle;
      const curRing = req.body.ring;
      const curPinky = req.body.pinky;

      thumb.to(curThumb);
      index.to(curIndex);
      middle.to(curMiddle);
      ring.to(curRing);
      pinky.to(curPinky);

      const newJson = {
         thumb: curThumb,
         index: curIndex,
         middle: curMiddle,
         ring: curRing,
         pinky: curPinky
      };

      jsonfile.writeFile(jsonPath, newJson);
      res.json(newJson);

   });

});
module.exports = router;
