const circle = document.querySelector('.circle');
const instructions = document.querySelector('.main-text');

// change opacity of circle
const changeCircle = () => {
    circle.classList.add("circle-size");
    setTimeout(() => {
        circle.classList.remove("circle-size");
    }, 6000);
};

function changeText(text, otherText) {
    document.getElementById("instructions").firstChild.data = text;
    document.getElementById("second-line").firstChild.data = otherText;
}

const textChange = () => {
    changeText("breathe in", "");
    setTimeout(() => {
        changeText("hold", "");
        setTimeout(() => {
            changeText("slowly", "breathe out");
        }, 3000);
    }, 3000);
};

window.onload = function onLoad() {
    changeCircle();
    textChange();
}

