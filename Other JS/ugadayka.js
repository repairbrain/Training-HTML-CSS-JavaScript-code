/*Напиши программу, которая загадывает целое число до 50, и просит пользователя число отгадать. Каждый раз, когда пользовател вводит число,
 которое ближе к ответу, чем предыдущее предположение пользователя, программа выдает prompt для следующего числа с сообщением
  "теплее", если новое предположение отдаляется от задуманного числа, программа выводит prompt с сообщением "холоднее". 
  После отгадывания числа программа с помощью alert показывает количество попыток, за сколько было угадано число. 
  Максимальное число попыток: 10 (должно быть настраиваемым). После этого игра считается проиграной, о чем сообщается в alert окошке.*/

var randomNumber = Math.floor(Math.random() * 51);
// для того чтобы узнать загаданное число 
console.log("randomNumber is ", randomNumber);
var userInput = prompt("Введи число от 0 до 50");
var userNumber = parseInt(userInput, 10);
var CurrentDifferenceOfNumber = 0;
var StartedDifferenceOfNumber = Math.abs(userNumber - randomNumber);
for (var tryNumber = 1; tryNumber <= 10; tryNumber += 1) {
    if (tryNumber === 10) {
        alert("Ты не угадал число за 10 попыток, неудачник!");
    } else if (userNumber === randomNumber) {
        alert("Ты угадал число за " + tryNumber + " попыток, хитрец!");
        break;
    } else {
        if (StartedDifferenceOfNumber > CurrentDifferenceOfNumber) {
            StartedDifferenceOfNumber = Math.abs(userNumber - randomNumber);
            userInput = prompt("Уже теплее. Введи число от 0 до 50");
            userNumber = parseInt(userInput, 10);
            CurrentDifferenceOfNumber = Math.abs(userNumber - randomNumber);
        } else {
            StartedDifferenceOfNumber = Math.abs(userNumber - randomNumber);
            userInput = prompt("Холоднее. Введи число от 0 до 50");
            userNumber = parseInt(userInput, 10);
            CurrentDifferenceOfNumber = Math.abs(userNumber - randomNumber);
        }
    }
}