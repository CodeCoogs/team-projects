const express = require('express');
const PORT = 3000;
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let multer = require('multer');
let upload = multer();
let router = express.Router();
let app = express();
var cors = require('cors');

app.use(cors());
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


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
