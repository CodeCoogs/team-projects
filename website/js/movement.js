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
let pointer = 0;
let middle = 0;
let ring = 0;
let pinky = 0;


// Update the current slider value (each time you drag the slider handle)
output1.innerHTML = slider1.value;
slider1.oninput =  async function () {
    //console.log(this.value);
    output1.innerHTML = this.value;
    thumb = this.value;
    //await sendValue(this.value);
};
output2.innerHTML = slider2.value;
slider2.oninput = function () {
    output2.innerHTML = this.value;
    pointer = this.value;
};
output3.innerHTML = slider3.value;
slider3.oninput = function () {
    console.log(this.value);
    output3.innerHTML = this.value;
    middle = this.value;
};
output4.innerHTML = slider4.value;
slider4.oninput = function () {
    output4.innerHTML = this.value;
    ring = this.value;
};

output5.innerHTML = slider4.value;
slider5.oninput = function () {
    output5.innerHTML = this.value;
    pinky = this.value;
};




async function sendValue(data){
    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:3000/fingers";

    // open a connection
    xhr.open("POST", url, true);

    // Set the request header i.e. which type of content you are sending
    xhr.setRequestHeader('Content-type','application/json');
    
    xhr.send(JSON.stringify({
        value: parseInt(data)
    }));
}
