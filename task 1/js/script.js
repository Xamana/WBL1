const button = document.querySelector('.input__button');

const palindromeCheck = () => {
    //Получаем проверяемую строку
    const str = document.querySelector('.input').value;
    //С помощью регулярного выражения избавляемся от всех ненужных нам символов таких как точки запятые и тому подобное,
    //потом избавляемся от пробелов
    const strWithout = str.replace(/[^ a-zа-яё\d]/uig, '').replaceAll(' ', '');
    //Приводим получившеюся строку к однеому виду
    const palindrome = String(strWithout).toLocaleLowerCase();
    //Присваиваем константе поле в которое будем выводить результат выполнения функции
    const $out = document.querySelector('.response');
    //Условие проверяющее является ли строка палиндромом
    if (palindrome == palindrome.split('').reverse().join('')){
        $out.innerHTML = `${str}: является палиндромом`;
    } else {
        $out.innerHTML = `${str}: НЕ является палиндромом`;
    }
}

button.addEventListener('click', palindromeCheck);

