let express = require('express');
let router = express.Router();
let jsonfile = require("jsonfile");
const jsonPath = './data/fingers.json';

// Johnny five //////////////////////////////
const {Board, Servo} = require("johnny-five");
const board = new Board();
//const thumb = new Servo(10);
/////////////////////////////////////////////

var getDataFromJson = () => {
   return jsonfile.readFileSync(jsonPath);
}

//Routes will go here
router.get('/', function(req, res){
   const jsonData = getDataFromJson();
   res.status(200).send(jsonData);
});

board.on("ready", function() {
   /*
   Ports that work:
   0,2,4,8,9,10,11,12,13

   */
   var thumb = new Servo(0);
   var index = new Servo(12);
   var middle = new Servo(13);
   //var ring = new five.Servo(4);
   //var pinky = new five.Servo(5);
   

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
      //ring.to(curRing);
      //pinky.to(curPinky);
      
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

/*
board.on("ready", () => {
   var thumb = new Servo(8);
   
   console.log('Board ready');
   thumb.to(10);

 });
 */
module.exports = router;
