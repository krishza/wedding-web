/*-- js for toggle menu ---*/
var MenuItems = document.getElementById('MenuItems');
MenuItems.style.maxHeight = '0px';

function menutoggle() {
    if (MenuItems.style.maxHeight == '0px') {
        MenuItems.style.maxHeight = '800px';
    } else {
        MenuItems.style.maxHeight = '0px';
    }
}



/*------------------------gallery--------------------*/
window.addEventListener("load", () => {
    for (let i of document.querySelectorAll(".gallery img")) {
        i.onclick = () => i.classList.toggle("full");
    }
});
