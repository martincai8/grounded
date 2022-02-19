let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let option5 = document.getElementById("option5");



function selectOption1() {
    let option1 = document.getElementById("option1");
    option1.classList.add("option-selected");

}

function selectOption2() {
    let option1 = document.getElementById("option1");
    if (option1.classList.contains("option-selected")) {
        let option2 = document.getElementById("option2");
        option2.classList.add("option-selected");

    }
}

function selectOption3() {
    let option2 = document.getElementById("option2");
    if (option2.classList.contains("option-selected")) {
        let option3 = document.getElementById("option3");
        option3.classList.add("option-selected");
    }

}

function selectOption4() {
    let option3 = document.getElementById("option3");
    if (option3.classList.contains("option-selected")) {
        let option4 = document.getElementById("option4");
        option4.classList.add("option-selected");
    }

}

function selectOption5() {
    let option4 = document.getElementById("option4");
    if (option4.classList.contains("option-selected")) {
        let option5 = document.getElementById("option5");
        option5.classList.add("option-selected");
    }
}











