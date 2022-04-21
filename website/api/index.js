let express = require('express');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let multer = require('multer');
let upload = multer();
let router = express.Router();

let app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());

let fingers = require('./fingers.js');
let wrist = require('./wrist.js');
let elbow = require('./elbow.js');
let shoulder = require('./shoulder.js');

app.use('/fingers', fingers);
app.use('/wrist', wrist);
app.use('/elbow', elbow);
app.use('/shoulder', shoulder);


app.listen(3000, () => {
    console.log("hi");
});
