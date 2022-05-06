// Fingers
let slider1 = document.getElementById("range1");
let output1 = document.getElementById("value1");
let slider2 = document.getElementById("range2");
let output2 = document.getElementById("value2");
let slider3 = document.getElementById("range3");
let output3 = document.getElementById("value3");
let slider4 = document.getElementById("range4");
let output4 = document.getElementById("value4");
let slider5 = document.getElementById("range5");
let output5 = document.getElementById("value5");
let thumb = 0;
let index = 0;
let middle = 0;
let ring = 0;
let pinky = 0;
// Wrist
let slider6 = document.getElementById("range6");
let output6 = document.getElementById("value6");
let wrist = 0;
// Elbow
let slider7 = document.getElementById("range7");
let output7 = document.getElementById("value7");
let elbow = 0;
// Shoulder
let slider8 = document.getElementById("range8");
let output8 = document.getElementById("value8");
let shoulder = 0;



// Update the current slider value (each time you drag the slider handle)
// Sliders for fingers
output1.innerHTML = slider1.value;
slider1.oninput =  async function () {
    output1.innerHTML = this.value;
    thumb = this.value;
    await sendFingerValues(thumb, index, middle, ring, pinky);
};
output2.innerHTML = slider2.value;
slider2.oninput = async function () {
    output2.innerHTML = this.value;
    index = this.value;
    await sendFingerValues(thumb, index, middle, ring, pinky);

};
output3.innerHTML = slider3.value;
slider3.oninput = async function () {
    output3.innerHTML = this.value;
    middle = this.value;
    await sendFingerValues(thumb, index, middle, ring, pinky);

};
output4.innerHTML = slider4.value;
slider4.oninput = async function () {
    output4.innerHTML = this.value;
    ring = this.value;
    await sendFingerValues(thumb, index, middle, ring, pinky);
};

output5.innerHTML = slider5.value;
slider5.oninput = async function () {
    output5.innerHTML = this.value;
    pinky = this.value;
    await sendFingerValues(thumb, index, middle, ring, pinky);
};

// Slider for wrist
output6.innerHTML = slider6.value;
slider6.oninput = /*async*/ function () {
    output6.innerHTML = this.value;
    pinky = this.value;
    //await sendWristValue(wrist);
};

// Slider for elbow
output7.innerHTML = slider7.value;
slider7.oninput = /*async*/ function () {
    output7.innerHTML = this.value;
    pinky = this.value;
    //await sendElbowValue(elbow);
};

// Slider for shoulder
output8.innerHTML = slider8.value;
slider8.oninput = /*async*/ function () {
    output8.innerHTML = this.value;
    pinky = this.value;
    //await sendShoulderValue(shoulder);
};

// Sends post request to /fingers end point
async function sendFingerValues(thumb, index, middle, ring, pinky){
    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:3000/fingers";

    // open a connection
    xhr.open("POST", url, true);

    // Set the request header i.e. which type of content you are sending
    xhr.setRequestHeader('Content-type','application/json');

    // Send the data
    xhr.send(JSON.stringify({
        thumb: parseInt(thumb),
        index: parseInt(index),
        middle: parseInt(middle),
        ring: parseInt(ring),
        pinky: parseInt(pinky)
    }));
}

// Sends post request to /wrist end point
async function sendWristValue(wrist){
    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:3000/wrist";

    // open a connection
    xhr.open("POST", url, true);

    // Set the request header i.e. which type of content you are sending
    xhr.setRequestHeader('Content-type','application/json');

    // Send the data
    xhr.send(JSON.stringify({
        wrist: parseInt(wrist),
    }));
}

// Sends post request to /elbow end point
async function sendElbowValue(elbow){
    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:3000/elbow";

    // open a connection
    xhr.open("POST", url, true);

    // Set the request header i.e. which type of content you are sending
    xhr.setRequestHeader('Content-type','application/json');

    // Send the data
    xhr.send(JSON.stringify({
        elbow: parseInt(elbow),
    }));
}

// Sends post request to /elbow end point
async function sendShoulderValue(shoulder){
    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:3000/shoulder";

    // open a connection
    xhr.open("POST", url, true);

    // Set the request header i.e. which type of content you are sending
    xhr.setRequestHeader('Content-type','application/json');

    // Send the data
    xhr.send(JSON.stringify({
        shoulder: parseInt(shoulder),
    }));
}