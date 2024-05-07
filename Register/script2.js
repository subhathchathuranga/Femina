function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    var passwordIcon = document.getElementById("password-icon");
    
    if (passwordField.type === "password") {
        passwordField.type = "text";
        passwordIcon.classList.remove("fa-eye-slash");
        passwordIcon.classList.add("fa-eye");
    } else {
        passwordField.type = "password";
        passwordIcon.classList.remove("fa-eye");
        passwordIcon.classList.add("fa-eye-slash");
    }
}

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Here you can add your login logic
    console.log("Username: " + username);
    console.log("Password: " + password);
});