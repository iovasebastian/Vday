const arrResponse = ["No","Actually No","I dont love you","Be gone"];
let buttonNu = document.getElementById("nu");
let buttonDa = document.getElementById("da");
let computedStyle = window.getComputedStyle(buttonDa);
let currentWidth;
let newWidth;
let i = 1;
function no() {
    buttonNu.innerText = arrResponse[i%4];
    currentWidth = parseInt(computedStyle.getPropertyValue("width"), 10);
    newWidth = currentWidth + 10;
    buttonDa.style.width = `${newWidth}px`;
    console.log(buttonDa.style.width);
    i++;
}