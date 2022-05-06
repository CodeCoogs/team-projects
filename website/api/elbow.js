let express = require('express');
let router = express.Router();
let elbow = "This is the elbow";

// Stepper motor

//Routes will go here
router.get('/', function(req, res){
   res.send(elbow);
});

module.exports = router;
