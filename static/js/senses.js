let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let option5 = document.getElementById("option5");

function selectOption1(moveOn) {
    let option1 = document.getElementById("option1");
    let option2 = document.getElementById("option2");
    option1.classList.add("option-selected");
    option2.classList.add("option-to-select");
    if (moveOn) {
        window.location.href = '/resources';
    }
}

function selectOption2(moveOn) {
    let option1 = document.getElementById("option1");
    let option3 = document.getElementById("option3");
    if (option1.classList.contains("option-selected")) {
        let option2 = document.getElementById("option2");
        option2.classList.add("option-selected");
        option3.classList.add("option-to-select");
        if (moveOn) {
            window.location.href = '/senses/1';
        }
    }
}

function selectOption3(moveOn) {
    let option4 = document.getElementById("option4");
    let option2 = document.getElementById("option2");
    if (option2.classList.contains("option-selected")) {
        let option3 = document.getElementById("option3");
        option3.classList.add("option-selected");
        option4.classList.add("option-to-select");
        if (moveOn) {
            window.location.href = '/senses/2';
        }
    }

}

function selectOption4(moveOn) {
    let option5 = document.getElementById("option5");
    let option3 = document.getElementById("option3");
    if (option3.classList.contains("option-selected")) {
        let option4 = document.getElementById("option4");
        option4.classList.add("option-selected");
        option5.classList.add("option-to-select");
        if (moveOn) {
            window.location.href = '/senses/3';
        }
    }

}

function selectOption5(moveOn) {
    let option4 = document.getElementById("option4");
    if (option4.classList.contains("option-selected")) {
        let option5 = document.getElementById("option5");
        option5.classList.add("option-selected");
        if (moveOn) {
            window.location.href = '/senses/4';
        }
    }
}











