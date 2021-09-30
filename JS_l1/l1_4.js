//Тема «Функции» 
//Задание 1 Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
let firstNumber = prompt("Введите первое число");
let secondNumber = prompt("Введите второе число");
function compare(firstNumber,secondNumber){
     if (firstNumber < secondNumber) {
        return -1;
    } else if (firstNumber > secondNumber) {
        return 1;
    }
    return 0;
}
alert(compare(firstNumber,secondNumber));

//Задание 2 Написать функцию, которая возводит переданное число в указанную степень.
let res = function(){
    num = prompt("Введите число");
    degree = prompt("Введите степень");
    return num ** degree;
}
alert(res());

//задание 3 Написать функцию, которая принимает 2 числа и знак (+ - * /), считает пример и возвращает результат
function calc(number1,number2,symbol){
    switch(symbol){
        case "+":
            return number1 + number2;
            break;
             case "-":
            return number1 - number2;
            break;
             case "*":
            return number1 * number2;
            break;
             case "/":
            return number1 / number2;
            break;
    }
}
let n1 = prompt("Введите первое число");
let n2 = prompt("Введите второе число");
let s = prompt("Введите знак");
alert(calc(+n1,+n2,s));

//Задание 7 Написать функцию, которая принимает от 1 до 5 чисел и возвращает их сумму
let countNumber = prompt("Сколько чисел от 1 до 5 хотите ввести?");
let result = 0;
function sum(countNumber){
    for(let i = 1;i <= countNumber;i++){
        let n = prompt("Введите " + i + "-е число");
        result += +n;
    }
    return result;
}
alert(sum(+countNumber));

//Задание 8 Написать функцию, которая принимает от 1 до 5 чисел и возвращает большее из них
let countNumber2 = prompt("Сколько чисел от 1 до 5 хотите ввести?");
let max = 0;
function maxNumber(countNumber){
    for(let i = 1;i <= countNumber;i++){
        let n = prompt("Введите " + i + "-е число");
        if(+n > max)
        max = +n;
    }
    return max;
}
alert(maxNumber(+countNumber2));












