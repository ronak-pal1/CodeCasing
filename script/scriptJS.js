var menuCountCheck = false;

// This is for the loading page section

window.addEventListener("load",function(){
    document.getElementById("page-loader-animation-section-id").style.display="none";
});


// This function is for the header menu to turn on and off
function menuFunction(x) {
    x.classList.toggle("change");

    if(menuCountCheck == false)
    {
        document.getElementById("headerNavigationId").style.display="flex";
        menuCountCheck = true;
    }
    else if(menuCountCheck == true)
    {
        document.getElementById("headerNavigationId").style.display="none";
        menuCountCheck = false;
    }

}