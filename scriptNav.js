var header = document.getElementById("header");
var navigationHeader = document.getElementById("nagivation_header");
var mainContainer = document.getElementById("mainContainer");
var showSideBar = false;

function sideBarOpenClose() {
    showSideBar = !showSideBar;
    if (showSideBar) {
        navigationHeader.style.marginLeft = "0vw";
        navigationHeader.style.animationName = "showSideBar";
        mainContainer.style.filter = "blur(3px)"
    } else {
        navigationHeader.style.marginLeft = "-100vw";
        navigationHeader.style.animationName = "";

        mainContainer.style.filter = "blur(0px)"
    }
}

function sideBarClose() {
    if (showSideBar) {
        sideBarOpenClose()
    }
}

window.addEventListener('resize', function (event) {
    if (window.innerWidth > 770 && showSideBar) {
        sideBarOpenClose()
    }
});