const loginform = document.querySelector("form");
loginform.addEventListener("submit" , function(event){
    event.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    if (email=== ""|| password===""){
        alert("please enter your email and password.");
        return;
    }
    alert("login Form Submitted!")
})