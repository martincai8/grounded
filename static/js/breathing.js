const circle = document.querySelector('.circle');
const instructions = document.querySelector('.main-text');

// change size of circle
const changeCircle = () => {
    circle.classList.add("circle-size");
    setTimeout(() => {
        circle.classList.remove("circle-size");
    }, 3500);
};

// set h1 instruction text
function changeText(text, otherText) {
    var firstLine = document.getElementById("instructions");
    var secondLine = document.getElementById("second-line");

    firstLine.firstChild.data = text;
    if (otherText != "") {
        secondLine.firstChild.data = otherText;
        secondLine.style.display = 'inline-block';
    } else {
        secondLine.style.display = 'none';
    }
};

// change h1 instruction text every 3 seconds
const textChange = () => {
    changeText("breathe in", "");
    setTimeout(() => {
        changeText("hold", "");
        setTimeout(() => {
            changeText("slowly", "breathe out");
        }, 1500);
    }, 2000);
};

// animation loop
const loop = setInterval(() => {
    changeCircle();
    textChange();
}, 6500);

// start the cycle on window load
window.onload = function onLoad() {
    changeCircle();
    textChange();
    loop();
};
