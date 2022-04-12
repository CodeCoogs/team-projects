let express = require('express');
let router = express.Router();
let elbow = "This is the elbow";

//Routes will go here
router.get('/', function(req, res){
   res.send(elbow);
});

module.exports = router;
