let express = require('express');
let router = express.Router();
let fingers = "These are the fingers";

//Routes will go here
router.get('/', function(req, res){
   res.send(fingers);
});

module.exports = router;
