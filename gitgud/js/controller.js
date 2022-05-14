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
// Hand - moves all fingers at once
let slider6 = document.getElementById("hand");
let output6 = document.getElementById("handValue");
let hand = 0;
// Wrist
let slider7 = document.getElementById("wrist");
let output7 = document.getElementById("wristValue");
let wrist = 0;


// Updates the servo angle back to zero
window.addEventListener('load', async function() {
    await sendFingerValues(thumb, index, middle, ring, pinky);
    await sendWristValue(wrist);
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
// Slider for hands
output6.innerHTML = slider6.value;
slider6.oninput = async function () {
    // Move all fingers 
    slider1.value = slider6.value;
    output1.innerHTML = this.value;
    slider2.value = slider6.value;
    output2.innerHTML = this.value;
    slider3.value = slider6.value;
    output3.innerHTML = this.value;
    slider4.value = slider6.value;
    output4.innerHTML = this.value;
    slider5.value = slider6.value;
    output5.innerHTML = this.value;

    output6.innerHTML = this.value;
    hand = this.value;
    await sendFingerValues(hand, hand, hand, hand, hand);
};



// Slider for wrist
output7.innerHTML = slider7.value;
slider7.oninput = async function () {
    output7.innerHTML = this.value;
    wrist = this.value;
    await sendWristValue(wrist);
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

