function main()
{
    dateInput = document.getElementById("dateInput");
    submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click",function(){
        var date = new Date(dateInput.value);
        var getDate=document.getElementById("getDate");
        getDate.innerHTML = date.getDate();
        var getUTCDate=document.getElementById("getUTCDate");
        getUTCDate.innerHTML = date.getUTCDate();
        var getDay=document.getElementById("getDay");
        getDay.innerHTML = date.getDay();
        var getFullYear=document.getElementById("getFullYear");
        getFullYear.innerHTML = date.getFullYear();
        var getUTCFullYear=document.getElementById("getUTCFullYear");
        getUTCFullYear.innerHTML = date.getUTCFullYear();
        var getHours=document.getElementById("getHours");
        getHours.innerHTML = date.getHours();
        var getUTCHours=document.getElementById("getUTCHours");
        getUTCHours.innerHTML = date.getUTCHours();
        var getMilliseconds=document.getElementById("getMilliseconds");
        getMilliseconds.innerHTML = date.getMilliseconds();
        var getUTCMilliseconds=document.getElementById("getUTCMilliseconds");
        getUTCMilliseconds.innerHTML = date.getUTCMilliseconds();
        var getMinutes=document.getElementById("getMinutes");
        getMinutes.innerHTML = date.getMinutes();
        var getUTCMinutes=document.getElementById("getUTCMinutes");
        getUTCMinutes.innerHTML = date.getUTCMinutes();
        var getMonth=document.getElementById("getMonth");
        getMonth.innerHTML = date.getMonth();
        var getUTCMonth=document.getElementById("getUTCMonth");
        getUTCMonth.innerHTML = date.getUTCMonth();
        var getSeconds=document.getElementById("getSeconds");
        getSeconds.innerHTML = date.getSeconds();
        var getUTCSeconds=document.getElementById("getUTCSeconds");
        getUTCSeconds.innerHTML = date.getUTCSeconds();
    })
};