//global variables
var element;
var email;
var asyncRequest;

// initial entry point.
function main(){
    var name        = document.getElementById("name") 
    var email       = document.getElementById("email");
    var comments    = document.getElementById("comments");
    var thingsLiked = document.getElementById("thingsliked");
    
    // check for focus event
    name.addEventListener("focus", ensureNotEmpty);
    email.addEventListener("focus",ensureNotEmpty);
    comments.addEventListener("focus",ensureNotEmpty);
    thingsLiked.addEventListener("focus",ensureNotEmpty);

    // check for blur event
    name.addEventListener("blur", ensureNotEmpty);
    email.addEventListener("blur",ensureNotEmpty);
    comments.addEventListener("blur",ensureNotEmpty);
    thingsLiked.addEventListener("blur",ensureNotEmpty);
}

function ensureNotEmpty(event){
    var selectedElement = document.getElementById(event.srcElement.id); 
    if(event.type == "focus"){
        element = document.getElementById(event.srcElement.id);
    }
    if(event.type == "blur" && element == selectedElement){
        if(selectedElement.value){
            removeWarning(selectedElement);
        }
        else{
            if(warningDoesNotExist(element)){
                createWarning(element);
            }
        }

        if(selectedElement.id=="email"){
            checkEmailFormat(selectedElement);
            checkEmailList(selectedElement);
        }
    }
}

function createWarning(element){
    var id = element.id+"-warning";
    var label   = document.createElement("label");
    label.innerHTML = " |Please do not leave blank|";
    label.id    = id;
    element.parentNode.appendChild(label);
}

function removeWarning(element){
    var id = element.id+"-warning";
    warning = document.getElementById(id);
    if(warning && element.value)
        warning.remove();
}

function warningDoesNotExist(element){
    var id = element.id+"-warning";
    return !document.getElementById(id);
}


function checkEmailFormat(emailElement){
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(pattern.test(emailElement.value)){
        emailWarning = document.getElementById("email-format-warning");
        if(emailWarning)
            emailElement.parentNode.removeChild(emailElement);
    }
    else{
        addEmailWarning(emailElement, " |Invalid email|");
    }
}

function addEmailWarning(emailElement, warning){
    if(!document.getElementById("email-format-warning")){
        var label   = document.createElement("label");
        label.innerHTML = warning;
        label.id    = "email-format-warning";
        emailElement.parentNode.appendChild(label);
    }
}

function addBlackListEmailWarning(emailElement, warning){
    if(!document.getElementById("email-blacklist-warning")){
        var label   = document.createElement("label");
        label.innerHTML = warning;
        label.id    = "email-blacklist-warning";
        emailElement.parentNode.appendChild(label);
    }
}

function checkEmailList(emailElement){
    email = emailElement;
    asyncRequest = new XMLHttpRequest();
    asyncRequest.addEventListener("readystatechange",processResponse, false);
    asyncRequest.open("GET","http://localhost/16-7.php",true);
    asyncRequest.send(null);
}

function processResponse(){
    if(asyncRequest.readyState==4 && asyncRequest.status==200 && asyncRequest.responseXML){
        var emails = asyncRequest.responseXML.getElementsByTagName("email");
        var removeWarning = false;
        for(var i=0; i < emails.length;i++){
            removeWarning = true;
            if(email.value==emails[i].textContent){
                addBlackListEmailWarning(email, " |black listed|");
                removeWarning = false;
            }
        }
        if(removeWarning && document.getElementById("email-blacklist-warning")){
            document.getElementById("email-blacklist-warning").remove();
        }
    }
}