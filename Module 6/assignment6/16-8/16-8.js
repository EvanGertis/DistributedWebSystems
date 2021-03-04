// initial entry point
function main(){
    
    initializeCatalog();
    setImageHandlers();
}

function setImageHandlers(){
    var images = document.getElementsByClassName("thumbnail");
    for(var i=0; i <images.length; i++){
        images[i].addEventListener("mouseover",enlargeImageSize);
    }
}

function setButtonHandlers(){
    var buttons = document.getElementsByTagName("input");
    for(var i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", showDescription);
    }
}

function showDescription(e){
    getDescription(e.srcElement.id);
}

var gProduct;
function getDescription(product){
    gProduct = product;
    asyncRequest = new XMLHttpRequest();
    asyncRequest.addEventListener("readystatechange",toggleDescription, false);
    asyncRequest.open("GET","http://localhost/descriptions.php",true);
    asyncRequest.send(null);
}

function toggleDescription() {
    if(asyncRequest.readyState==4 && asyncRequest.status==200){
        var products = JSON.parse(asyncRequest.response).descriptions;
        for(var i=0; i < products.length; i++){
            if(gProduct == products[i].product){
                var productDescription = document.getElementById(gProduct+"-desc")
                if(!productDescription.classList.contains("displayed")){
                    productDescription.innerHTML = products[i].description;
                    productDescription.classList.add("displayed");
                }
                else{
                    productDescription.classList.remove("displayed");
                    productDescription.innerHTML = "";
                }
            }
        }
    }
}

function enlargeImageSize(e){
    if(e.srcElement.className=="thumbnail")
        e.srcElement.className = "product";
}

function decreaseImageSize(image){
    if(image.className=="product")
        image.className = "thumbnail";
}

function initializeCatalog(){
    asyncRequest = new XMLHttpRequest();
    asyncRequest.addEventListener("readystatechange", generateProductCatalog, false);
    asyncRequest.open("GET","http://localhost/summary.php",true);
    asyncRequest.send(null);
}

function generateProductCatalog(){
    if(asyncRequest.readyState==4 && asyncRequest.status==200){
        var tbody = document.getElementById("tbody");
        var products = JSON.parse(asyncRequest.response).products;
        for(var i=0; i < products.length; i++){
            var row =   "<td><input type='button' id='"+products[i].product+"' value='"+products[i].product+"'/></td>"+
                        "<td><img onmouseout='decreaseImageSize(this)' class='thumbnail' src="+products[i].image+" alt=''></td>"+
                        "<td id='"+products[i].product+"-desc'></td>"
            var newRow = tbody.insertRow();
            newRow.innerHTML=row;
        }
    }
    setImageHandlers();
    setButtonHandlers();
}