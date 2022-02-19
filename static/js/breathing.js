const circle = document.querySelector('.circle');
const instructions = document.querySelector('.main-text');

// change size of circle
const changeCircle = () => {
    circle.classList.add("circle-size");
    setTimeout(() => {
        circle.classList.remove("circle-size");
    }, 4500);
};

// set h1 instruction text
function changeText(text, otherText) {
    document.getElementById("instructions").firstChild.data = text;
    document.getElementById("second-line").firstChild.data = otherText;
};

// change h1 instruction text every 3 seconds
const textChange = () => {
    changeText("breathe in", "");
    setTimeout(() => {
        changeText("hold", "");
        setTimeout(() => {
            changeText("slowly", "breathe out");
        }, 1500);
    }, 3000);
};

// animation loop
const loop = setInterval(() => {
    changeCircle();
    textChange();
}, 7500);

// start the cycle on window load
window.onload = function onLoad() {
    changeCircle();
    textChange();
    loop();
};
