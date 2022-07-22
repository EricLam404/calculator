let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;

let operate = (num1, operand, num2) => {
    if(operand === "+"){
        return add(num1, num2)
    } else if(operand === "-"){
        return subtract(num1, num2)
    } else if(operand === "×"){
        return multiply(num1, num2)
    } else if(operand === "÷"){
        return divide(num1, num2)
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


    if(this.classList.contains("operand")){
        if(+screenLast.textContent == screenLast.textContent){
            screenLast.textContent += screenCurrent.textContent + " " + this.id;
            screenCurrent.textContent = "";
        }
        screenLast.textContent = screenLast.textContent.slice(0, screenLast.textContent.length-2);
        screenLast.textContent += screenCurrent.textContent + " " + this.id;
        screenCurrent.textContent = "";
        return
    }
    if(this.classList.contains("equal")){
        if(+screenCurrent.textContent == screenCurrent.textContent){
            if(+screenLast.textContent != screenLast.textContent){
                console.log(operate(split[0], split[1], screenCurrent.textContent))
                screenLast.textContent = operate(split[0], split[1], screenCurrent.textContent);
                screenCurrent.textContent = "";
                return;
            }
        }
    }
    if(+screenCurrent.textContent == screenCurrent.textContent){
        screenCurrent.textContent += this.id;
        screenCurrent.textContent = +screenCurrent.textContent;
    }
}

function clear(){
    let screenLast = document.querySelector(".screen-last");
    let screenCurrent = document.querySelector(".screen-current");

    screenLast.textContent = "";
    screenCurrent.textContent = "";
}

function deleted(){
    let screenCurrent = document.querySelector(".screen-current");
    if(screenCurrent.textContent.length-1 == 0){
        screenCurrent.textContent = 0;
        return
    }
    screenCurrent.textContent = screenCurrent.textContent.slice(0, screenCurrent.textContent.length-1);
}