// Fingers
let slider1 = document.getElementById("thumb");
let output1 = document.getElementById("thumbValue");
let slider2 = document.getElementById("index");
let output2 = document.getElementById("indexValue");
let slider3 = document.getElementById("middle");
let output3 = document.getElementById("middleValue");
let slider4 = document.getElementById("ring");
let output4 = document.getElementById("ringValue");
let slider5 = document.getElementById("pinky");
let output5 = document.getElementById("pinkyValue");
let thumb = 0;
let index = 0;
let middle = 0;
let ring = 0;
let pinky = 0;
// Wrist
let slider6 = document.getElementById("wrist");
let output6 = document.getElementById("wristValue");
let wrist = 0;
// Elbow
let slider7 = document.getElementById("elbow");
let output7 = document.getElementById("elbowValue");
let elbow = 0;
// Shoulder
let slider8 = document.getElementById("shoulder");
let output8 = document.getElementById("shoulderValue");
let shoulder = 0;

// Updates the servo angle back to zero
window.addEventListener('load', async function() {
    await sendFingerValues(thumb, index, middle, ring, pinky);
    await sendWristValue(wrist);
    await sendElbowValue(elbow);
    await sendShoulderValue(shoulder);
})

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
slider6.oninput = async function () {
    output6.innerHTML = this.value;
    wrist = this.value;
    await sendWristValue(wrist);
};

// Slider for elbow
output7.innerHTML = slider7.value;
slider7.oninput = async function () {
    output7.innerHTML = this.value;
    elbow = this.value;
    await sendElbowValue(elbow);
};

// Slider for shoulder
output8.innerHTML = slider8.value;
slider8.oninput = async function () {
    output8.innerHTML = this.value;
    shoulder = this.value;
    await sendShoulderValue(shoulder);
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
        wrist: parseInt(wrist)
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
        elbow: parseInt(elbow)
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
        shoulder: parseInt(shoulder)
    }));
}