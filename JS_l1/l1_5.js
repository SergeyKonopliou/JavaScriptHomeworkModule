//Тема «Рекурсия» 
//Задание 1 Написать функцию, которая вычисляет факториал заданного числа
function factorial(number){
    if(number == 0) return 0;
    else if(number == 1) return 1;
    else return number * factorial(number - 1);
}
alert(factorial(prompt("Введите число")));

//Задание 2 Написать функцию, которая выводит все числа из заданного пользователем диапазона в прямом порядке. И еще одну функцию – для вывода в обратном порядке.
let line = "";
let reverse = "";
function lineOrder(startN,endN){
    if(+startN + 1 == +endN) return line += +startN + " " + +endN;
    else return +startN + " " + lineOrder(+startN + 1,+endN);
}
function reverseOrder(startN,endN){
    if(+endN - 1 == +startN) return reverse += +endN + " " + +startN;
    else return +endN + " " + reverseOrder(+startN,+endN - 1);
}
let str = prompt("Введите начало и конец диапазона");
let range = str.split(" ");
if(range[0] == range[1]) alert(range[0]);
else{
    alert(lineOrder(range[0],range[1]));
    alert(reverseOrder(range[0],range[1]))
}

//Задание 3 Написать функцию, которая выводит переданное ей число задом наперед. Например: число 1234 вывести как 4321
let number2 = prompt("Введите число");





