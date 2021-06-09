// Домашка #16 — DOM Events

//1. Напишите код, который будет выводить alert с надписью Привет! при нажатии на кнопку.
document.getElementById('task1').onclick = function (){
    alert("Привет!")
}



// 2. Напишите код, который будет менять текст в инпуте при нажатии на кнопку
// (изначально в инпуте уже должно быть задан текст).
document.getElementById('task2').onclick = function (event){
    event.target.value = "Хорошего дня!"
}



// 3. Напишите код, который будет выводить alert с содержимым инпута
// (изначально в инпуте уже должно быть задан текст).
document.getElementById('task3').onclick = function (event){
    alert(event.target.value)
}



// 4. Напишите код, который будет выводить alert  с содержимым инпута, возведенным в квадрат
// (для этого вам нужно создать инпут, в который пользователь будет вводить число).

document.getElementById('task4').onkeyup = function (event){
    let userNumber = event.target.value

    alert( "Результат = "  + userNumber * userNumber)

    event.target.value = "Результат = " + userNumber * userNumber;
}



// 5. Вам необходимо создать два инпута с заданными значениями и кнопку,
// при нажатии на которую будет осуществляться обмен содержимым между двумя инпутами
// (значение первого инпута должно записаться во второй, а значение второго — в первый).

document.getElementById('task5Button').onclick = function (){
    let cat = document.getElementById('task5Cat').value;
    let dog = document.getElementById('task5Dog').value;

    if(cat === "Кот" && dog === "Пёс"){

        document.getElementById('task5Cat').value = "Пёс";
        document.getElementById('task5Dog').value = "Кот";

    } else if (cat === "Пёс" && dog === "Кот"){

        document.getElementById('task5Cat').value = "Кот";
        document.getElementById('task5Dog').value = "Пёс";
    }
}



// 6. Напишите код, который будет при нажатии на кнопку менять текст в ней.

document.getElementById('task6').onclick = function (event){
    if(event.target.innerHTML === 'Кот') {

        event.target.innerHTML = 'Пёс';

    } else {

        event.target.innerHTML = 'Кот';
    }
}


// 7. Напишите код, который будет при нажатии на кнопку менять цвет текста в инпуте
// (изначально в инпуте уже должно быть задан текст).

document.getElementById('task7').onclick = function (event){

    if(event.target.style.color === 'black') {

        event.target.style.color = 'pink'

    } else {

        event.target.style.color = 'black'
    }
}
