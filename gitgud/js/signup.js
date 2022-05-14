
let submit = document.getElementById("submit");
submit.addEventListener("click", createUser);

function createUser() {
    let username = document.getElementById("userName").value;
    let password = document.getElementById("passWord").value;

    if (username.length > 1 && password.length > 1) {
        const jsonData = {
            username: username,
            password: password
        };

        localStorage.setItem('signup', JSON.stringify(jsonData));
        window.location.href = 'login.html';

    }

  
}
