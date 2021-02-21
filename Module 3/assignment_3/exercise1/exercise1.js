// function populateTable(x){
//     var table = document.getElementById("power-table")
//     var row = table.insertRow(0);
//     var c1 = row.insertCell(0); 
//     var c2 = row.insertCell(1);
//     var c3 = row.insertCell(2);
//     var c4 = row.insertCell(3);

//     c1.innerHTML = "<th>iteration</th>"
//     c2.innerHTML = "<th>x</th>"
//     c3.innerHTML = "<th>exponent</th>"
//     c4.innerHTML = "<th>value</th>"

//     for(var i=0; i<5; i++){
//         console.log(power(x,i));
//         row = table.insertRow(0);
//         c1 = row.insertCell(0);
//         c2 = row.insertCell(1);
//         c3 = row.insertCell(2);
//         c4 = row.insertCell(3);
//         c1.innerHTML = ""+i;
//         c2.innerHTML = ""+x;
//         c3.innerHTML = ""+i;
//         c4.innerHTML = ""+power(x,i);
//     }
// }

var button = document.getElementById("button");
button.addEventListener("click",main)

function power(x,e){
    if(e==0)
        return 1;
    return x*power(x,e-1);
}

function main(){
    var value = document.getElementById("value").value;
    var exponent = document.getElementById("exponent").value;
    var result = power(value,exponent);
    var resultCell = document.getElementById("result");
    resultCell.innerHTML = result;
}