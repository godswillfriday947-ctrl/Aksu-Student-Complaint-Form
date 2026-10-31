const registerForm = document.querySelector("form");
registerForm.addEventListener("submit", function(event){
    event.preventDefault();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    if(password !==confirmPassword){
        alert("password do not match. please try again.");
        return;
    }
    alert("password check successful!");
});