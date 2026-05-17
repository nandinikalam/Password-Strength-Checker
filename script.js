function checkPassword(){

    let password =
    document.getElementById("password").value;

    let strength = 0;

    // Length Check
    if(password.length >= 8){
        strength++;
    }

    // Uppercase Check
    if(/[A-Z]/.test(password)){
        strength++;
    }

    // Lowercase Check
    if(/[a-z]/.test(password)){
        strength++;
    }

    // Number Check
    if(/[0-9]/.test(password)){
        strength++;
    }

    // Special Character Check
    if(/[!@#$%^&*]/.test(password)){
        strength++;
    }

    let result =
    document.getElementById("result");

    if(strength <= 2){
        result.innerHTML = "Weak Password";
        result.style.color = "red";
    }

    else if(strength <= 4){
        result.innerHTML = "Medium Password";
        result.style.color = "orange";
    }

    else{
        result.innerHTML = "Strong Password";
        result.style.color = "green";
    }
}