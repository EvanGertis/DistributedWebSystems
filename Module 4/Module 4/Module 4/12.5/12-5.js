// GLOBALS
var countVal = 0;

// increments the disabled input to the count value
function count(){
    var counter = document.getElementById("counter");
    var count = document.getElementById("count");
    counter.addEventListener("click", function(){
        count.value = ++countVal;
    })
}

// initial entry point
function main(){
    count();
}
