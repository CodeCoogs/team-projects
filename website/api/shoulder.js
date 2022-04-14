let express = require('express');
let router = express.Router();
let shoulder = "This is the shoulder";

//Routes will go here
router.get('/', function(req, res){
   res.send(shoulder);
});

module.exports = router;
