let emailNode = document.getElementById("email");
let span_emailNode = document.getElementById("email_err");

function validateEmail(){
    span_emailNode.innerHTML = "";
    let email = emailNode.value;
    let subs = email.substring(email.indexOf('@')+1);
    if(email == ''){
        span_emailNode.innerHTML = "Field Required";
        emailNode.style.border = "2px solid red";
        return false;
    }
    else if(!email.includes('@') || subs==''){
        span_emailNode.innerHTML="Invalid Email ID";
        emailNode.style.border = "2px solid red";
        return false;
    }
    else{
        emailNode.style.border = "2px solid green";
        return true;
    }
}   

let unameNode = document.getElementById("uname");
let span_unameNode = document.getElementById("uname_err");

function validateUname(){
    span_unameNode.innerHTML = "";
    let uname = unameNode.value;
    if(uname == ''){
        span_unameNode.innerHTML = "Field Required";
        unameNode.style.border = "2px solid red";
        return false;
    }
    else if(uname.includes(' ')){
        span_unameNode.innerHTML = "Username cannot have space";
        unameNode.style.border = "2px solid red";
        return false;
    }
    else{
        unameNode.style.border = "2px solid green";
        return true;
    }
}

let passNode = document.getElementById("pass");
let span_passNode = document.getElementById("pass_err");

function validatePass(){
    span_passNode.innerHTML = "";
    let pass = passNode.value;
    var strongReg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])");
    if(pass == ''){
        span_passNode.innerHTML = "Field Required";
        passNode.style.border = "2px solid red";
        return false;
    }
    else if(pass.length < 4 || pass.length > 16){
        span_passNode.innerHTML = "Password should be 4-16 character long";
        passNode.style.border = "2px solid red";
        return false;
    }
    else if(strongReg.test(pass) == false){
        span_passNode.innerHTML = "Password should be alphanumeric";
        passNode.style.border = "2px solid red";
        return false;
    }
    else{
        passNode.style.border = "2px solid green";
        return true;
    }
}

let cpassNode = document.getElementById("cpass");
let span_cpassNode = document.getElementById("cpass_err");

function validateCPass(){
    span_cpassNode.innerHTML = "";
    let cpass = cpassNode.value;
    let pass = passNode.value;
    if(cpass == ''){
        span_cpassNode.innerHTML = "Field Required";
        cpassNode.style.border = "2px solid red";
        return false;
    }
    else if(cpass != pass){
        span_cpassNode.innerHTML = "Passwords doesn't match";
        cpassNode.style.border = "2px solid red";
        return false;
    }
    else{
        cpassNode.style.border = "2px solid green";
        return true;
    }
}

let contactNode = document.getElementById("contact");
let span_contactNode = document.getElementById("contact_err");

function validateContact(){
    span_contactNode.innerHTML = "";
    let contact = contactNode.value;
    if(contact == ''){
        span_contactNode.innerHTML = "Field Required";
        contactNode.style.border = "2px solid red";
        return false;
    }
    else if(contact.length != 10){
        span_contactNode.innerHTML = "Enter only 10 digit contact number";
        contactNode.style.border = "2px solid red";
        return false;
    }
    else{
        contactNode.style.border = "2px solid green";
        return true;
    }
}

function validateForm(){
    let v1 = validateEmail();
    let v2 = validateUname();
    let v3 = validatePass();
    let v4 = validateCPass();
    let v5 = validateContact();
    return(v1 && v2 && v3 && v4 && v5);
}