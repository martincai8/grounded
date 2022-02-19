const circle = document.querySelector('.circle');
const instructions = document.querySelector('.main-text');
const button = document.querySelector('.garbage');

// change opacity of circle
const changeCircle = () => {
    circle.classList.add("dark-circle");
    setTimeout(() => {
        circle.classList.remove("dark-circle");
    }, 8000);
};

const textChange = () => {
    instructions.innerText = "breathe in";
    setTimeout(() => {
        instructions.innerText = "hold";
        setTimeout(() => {
            instructions.innerText = "slowly breathe out";
        }, 4000);
    }, 4000);
};

button.addEventListener("click", () => {
    changeCircle();
    textChange();
});

