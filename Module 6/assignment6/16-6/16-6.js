var asyncRequest; // variable to hold XMLHttpRequest object

// set up and send the asynchronous request to get the XML file
function getImages(file) {
    // attempt to create XMLHttpRequest object and make the request
    try {
        asyncRequest = new XMLHttpRequest(); // create request object

        // register event handler
        asyncRequest.addEventListener(
            "readystatechange", processResponse, false);
        asyncRequest.open("GET", "http://localhost/router.php?file="+file, true); // prepare the request
        asyncRequest.send(null); // send the request
    } // end try
    catch (exception) {
        alert("Request Failed");
    } // end catch
} // end function getImages

// parses the XML response; dynamically creates an undordered list and
// populates it with the response data; displays the list on the page
function processResponse() {
    // if request completed successfully and responseXML is non-null
    if (asyncRequest.readyState == 4 && asyncRequest.status == 200 &&
        asyncRequest.responseXML) {
        clearImages(); // prepare to display a new set of images

        // get the covers from the responseXML
        var covers = asyncRequest.responseXML.getElementsByTagName(
            "cover")
        // get base URL for the images
        var baseUrl = asyncRequest.responseXML.getElementsByTagName(
            "baseurl").item(0).firstChild.nodeValue;

        // get the placeholder div element named covers
        var output = document.getElementById("covers");

        // create an unordered list to display the images
        var imagesUL = document.createElement("ul");

        // place images in unordered list
        for (var i = 0; i < covers.length; ++i) {
            var cover = covers.item(i); // get a cover from covers array

            // get the image filename
            var image = cover.getElementsByTagName("image").
                item(0).firstChild.nodeValue;

            // create li and img element to display the image
            var imageLI = document.createElement("li");
            var imageTag = document.createElement("img");
            var imageTitle = document.createElement("h2");

            // set img element's src attribute
            imageTag.setAttribute("src", baseUrl + escape(image));
            imageLI.appendChild(imageTag); // place img in li
            imageLI.appendChild(imageTitle);
            imagesUL.appendChild(imageLI); // place li in ul
            imageTitle.style.display="none";
            title = cover.getElementsByTagName("title").
                item(0).firstChild.nodeValue;
            imageTitle.innerHTML = title;
            imageTag.addEventListener("mouseover",showTitle,false);
            imageTag.addEventListener("mouseout",showTitle,false);
        } // end for statement

        output.appendChild(imagesUL); // append ul to covers div
    } // end if
} // end function processResponse

function showTitle(e){
    var titleDisplayStyleProperty = e.target.nextSibling.style.display;
    if(titleDisplayStyleProperty=="none")
        e.target.nextSibling.style.display = "";
    else
        e.target.nextSibling.style.display = "none";
}

function hideTitle(e){
    e.target.nextSibling.style.display = "none";
}

// clears the covers div
function clearImages() {
    var covers = document.getElementById("covers");
    removeAllChildNodes(covers);
} // end function clearImages

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// register event listeners
function registerListeners() {
    document.getElementById("all").addEventListener(
        "click", function () { getImages("all.xml"); }, false);
    document.getElementById("simply").addEventListener(
        "click", function () { getImages("simply.xml"); }, false);
    document.getElementById("howto").addEventListener(
        "click", function () { getImages("howto.xml"); }, false);
    document.getElementById("dotnet").addEventListener(
        "click", function () { getImages("dotnet.xml"); }, false);
    document.getElementById("javaccpp").addEventListener(
        "click", function () { getImages("javaccpp.xml"); }, false);
    document.getElementById("none").addEventListener(
        "click", clearImages, false);
} // end function registerListeners

window.addEventListener("load", registerListeners, false);