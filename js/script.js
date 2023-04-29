const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 100);
});

var navlist = document.getElementById("navlist");

navlist.style.maxHeight = "0px";

function togglemenu(){
    if(navlist.style.maxHeight == "0px")
    {
        navlist.style.maxHeight = "130px";
    }
    else{
        navlist.style.maxHeight = "0px";
    }
}