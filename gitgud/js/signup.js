let submit = document.getElementById("submit");
submit.addEventListener("click", createUser);

function createUser() {
    let username = document.getElementById("userName").value;
    let password = document.getElementById("passWord").value;

    
    //download(jsonData, 'data/signup.json', 'text/plain');

}


function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}
