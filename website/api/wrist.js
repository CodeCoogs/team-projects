let express = require('express');
let router = express.Router();
let wrist = "This is the wrist";

//Routes will go here
router.get('/', function(req, res){
   res.send(wrist);
});

module.exports = router;
