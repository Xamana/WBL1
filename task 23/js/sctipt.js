
//простая функция проверки пароля
const passwordStrengthAnalyzer = (pass) => {
    //начальные данные
    const password = pass;
    const lowLetters = "qwertyuiopasdfghjklzxcvbnm";
    const upperLetters = "QWERTYUIOPLKJHGFDSAZXCVBNM";
    const nums = "0123456789";
    const special = "!@#$%^&*()_-+=\\|/.,:;[]{}";
    let isLow = false;
    let isUpper = false;
    let isNums = false;
    let isSpecial = false;
    //проверка на разнообразность вводимых символов
    for (let i = 0; i < password.length; i++) {
        if (!isLow && lowLetters.indexOf(password[i]) !== -1) isLow = true;
        else if (!isUpper && upperLetters.indexOf(password[i]) !== -1) isUpper = true;
        else if (!isNums && nums.indexOf(password[i]) !== -1) isNums = true;
        else if (!isSpecial && special.indexOf(password[i]) !== -1) isSpecial = true;
    }
    // Рейтинг пароля
    let rating = 0;
    let complexity = '';
    if (isLow) rating++;
    if (isUpper) rating++;
    if (isNums) rating++;
    if (isSpecial) rating++;
    //Поверка сложности пароля
    if (password.length < 6 && rating < 3) complexity = 'Простой';
    else if (password.length >= 8 && rating < 3) complexity = "Средний";
    else if (password.length >= 8 && rating >= 3) complexity = "Сложный";
    else if (password.length >= 6 && rating == 1) complexity = "Простой";
    else if (password.length >= 6 && rating > 1 && rating < 4) complexity = "Средний";
    else if (password.length >= 6 && rating == 4) complexity = "Сложный";
    //рекомендации по усложнению пароля
    let recomended = '';
    if (password.length < 6) recomended = 'У вас слишком короткий пароль';
    else if (rating < 3) {
        if (!isLow) recomended = 'Добавьте строчных букв';
        else if (!isUpper) recomended = 'Добавьте заглавных букв';
        else if (!isSpecial) recomended = 'Добавьте специальных символов';
        else if (!isNums) recomended = 'Добавьте цифер';
    } 
    if (!recomended) {
        return `У вас сложный пароль`
    }
    return `У вас ${complexity} пароль. ${recomended}.`
}

const button = document.querySelector('.input__button')

button.addEventListener('click', () => {
    const inputValue = document.querySelector('.input').value;
    const rating = passwordStrengthAnalyzer(inputValue);
    document.querySelector('.response').innerText = rating;
})