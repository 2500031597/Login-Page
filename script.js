function login() {

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    if (user == "admin" && pass == "1234") {

        document.getElementById("message").innerHTML =
        "Login Successful!";

    } else {

        document.getElementById("message").innerHTML =
        "Invalid Username or Password";
    }
}