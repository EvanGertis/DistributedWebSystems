var diceButton = document.getElementById("dice-button");
diceButton.addEventListener("click", rollDice);

function rollDice(){
    var dieValue1 = document.getElementById("die-1-value");
    var dieValue2 = document.getElementById("die-2-value");
    var dieImage1 = document.getElementById("die-1");
    var dieImage2 = document.getElementById("die-2");

    var max = 6;
    var d1 = getRandomInt(max);
    var d2 = getRandomInt(max);

    dieValue1.innerHTML = d1;
    dieValue2.innerHTML = d2;

    dieImage1.src = "die"+d1+".png";
    dieImage2.src = "die"+d2+".png";
}

function getRandomInt(max){
    return Math.floor(1+Math.random()*Math.floor(max));
}