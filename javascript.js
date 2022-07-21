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