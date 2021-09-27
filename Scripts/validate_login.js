let uname_Node = document.getElementById("uname");
let span_uname_Node = document.getElementById("uname_err");
function validateUname(){
    span_uname_Node.innerHTML = "";
    let uname = uname_Node.value;
    if(uname == ''){
        span_uname_Node.innerHTML = "Field Required";
        uname_Node.style.border = "2px solid red";
        return false;
    }
    else{
        uname_Node.style.border = "2px solid green";
        return true;
    }
}

let pass_Node = document.getElementById("pass");
let span_pass_Node = document.getElementById("pass_err");
function validatePass(){
    span_pass_Node.innerHTML = "";
    let pass = pass_Node.value;
    if(pass == ''){
        span_pass_Node.innerHTML = "Field Required";
        pass_Node.style.border = "2px solid red";
        return false;
    }
    else{
        pass_Node.style.border = "2px solid green";
        return true;
    }
}

function validateForm(){
    let v1 = validateUname();
    let v2 = validatePass();
    return(v1 && v2);
}