let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;

let operate = (num1, operand, num2) => {
    if(operand === "+"){
        add(num1, num2)
    } else if(operand === "-"){
        subtract(num1, num2)
    } else if(operand === "*"){
        multiply(num1, num2)
    } else if(operand === "/"){
        divide(num1, num2)
    }
}

let buttons  = document.querySelectorAll(".btn");
buttons.forEach(button => button.addEventListener("click", clicked));

function clicked(e){
    if(this.id == "clear"){
        clear();
        return
    }
    if(this.id == "delete"){
        deleted();
        return
    }
    let screenLast = document.querySelector(".screen-last");
    let screenCurrent = document.querySelector(".screen-current");
    screenLast.textContent += this.id;
    screenCurrent.textContent += this.id;
}

function clear(){
    let screenLast = document.querySelector(".screen-last");
    let screenCurrent = document.querySelector(".screen-current");

    screenLast.textContent = "";
    screenCurrent.textContent = "";
}

function deleted(){
    let screenCurrent = document.querySelector(".screen-current");
    screenCurrent.textContent = screenCurrent.textContent.slice(0, screenCurrent.textContent.length-1);
}