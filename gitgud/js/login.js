    let submit = document.getElementById("submit");
    submit.addEventListener("click", validate);

    function validate() {
        let username = document.getElementById("userName").value;
        let password = document.getElementById("passWord").value;

        // type in test for both username and password to re-direct you to slider page
        if (username == "test" && password == "test") {
            window.location.href = 'movement.html';
        } else {
            document.getElementById("alert").style.display = "flex";
        }
        
    }
