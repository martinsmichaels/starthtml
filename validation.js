function validation() {
    let name = document.getElementById("fname"),
        email = document.getElementById("email"),
        message = document.getElementById("message"),
        title = document.getElementById("title");

    if(name.value === "" || email.value === "" || message.value === "" || title.value === "" ) {
        document.getElementById("error").innerHTML = "All fields Required";
        return false;
    }
    else if(name.length < 4){
        document.getElementById("error").innerHTML = "input at least four(4) characters for name fleid";
        return false;
    }
    
    else if(message.length < 20){
        document.getElementById("error").innerHTML = "input at least 20 characters for message field";
        return false;
    }
    else {
        return true;
    }
}