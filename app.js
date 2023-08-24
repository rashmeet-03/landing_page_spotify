let x = document.querySelector(".main-content");
let y = document.querySelector(".install");
window.addEventListener("resize", function () {
    if (x.clientWidth < 310) {
        y.innerHTML = '<i class="fa-regular fa-circle-down" style="margin-right: 5px;"></i>';
    }
    if (x.clientWidth > 310) {
        y.innerHTML = '<i class="fa-regular fa-circle-down" style="margin-right: 5px;"></i>Install App';
    }
});
if (x.clientWidth < 310) {
    y.innerHTML = ' <i class="fa-regular fa-circle-down" style="margin-right: 5px;"></i>';
}
if (x.clientWidth > 310) {
    y.innerHTML = '<i class="fa-regular fa-circle-down" style="margin-right: 5px;"></i>Install App';
}
function openNav() {
    document.getElementById("mySidebar").style.width = "340px";
    document.getElementById("main").style.display = "none";
    document.getElementById("mySidebar").style.display = "block"
    document.getElementsByClassName("main-content").style.marginLeft = "0";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.display = "block";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementsByClassName("main-content").style.marginLeft = "45px";
}