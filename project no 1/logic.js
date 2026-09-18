let numbers = document.querySelectorAll(".numb-key");
let answer = document.querySelector("#answer");
let operators = document.querySelectorAll(".operator");
let display = "";
const equal = document.querySelector(".equal");
const ac = document.querySelector("#ac");
const del = document.querySelector("#del");


let firstNumber = 0;
let secondNumber = 0;

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        display = display + number.textContent;
        answer.textContent = display;
    })
})

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        firstNumber = parseInt(answer.textContent);
        answer.textContent = operator.textContent;
        display = "";
        op = answer.textContent;

    })
})

ac.addEventListener(("click"), () => {
    answer.textContent = "00"
    display = "";
});

del.addEventListener(("click"), () => {

    let temp = answer.textContent.split("");
    temp.pop();
    answer.textContent = temp.join("")
    display = answer.textContent;
})
equal.addEventListener("click", () => {
    secondNumber = parseInt(answer.textContent);
    switch (op) {
        case "+":
            answer.textContent = firstNumber + secondNumber;
            display = "";
            break;
        case "-":
            answer.textContent = firstNumber - secondNumber;
            display = "";
            break;
        case "X":
            answer.textContent = firstNumber * secondNumber;
            display = "";
            break;
        case "/":
            answer.textContent = firstNumber / secondNumber;
            display = "";
            break;

        default:
            break;
    }

})
