let submit = document.getElementById("submit");
submit.addEventListener("click", validate);

function validate() {
    let username = document.getElementById("userName").value;
    let password = document.getElementById("passWord").value;

    // type in test for both username and password to re-direct you to slider page
    var obj = JSON.parse(localStorage.getItem('signup'));

    if (username == obj.username && password == obj.password) {
        window.location.href = 'controller.html';
    } else {
        document.getElementById("alert").style.display = "flex";
    }
    
}

