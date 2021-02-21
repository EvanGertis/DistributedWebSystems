//Initial Entry point
function main(){
    var formElement = document.getElementById("amepersand");

    formElement.addEventListener("blur",function(e){
        var text = formElement.value;
        text = text.replace("&","and");
        formElement.value = text;
    })
}