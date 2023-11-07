const button = document.querySelector('.input__button');

const strangeNumberCheck = (n) => {
    let sumDividers = 1;
    // Чтоб не переполнять стек вызовов слишком сильно эта праверка не позволяет вписывать число больше 'безопасного числа'
    if (!Number.isSafeInteger(n)) {
        console.error('invalid Number')
        return false;
    }
    // В цикле присутствует небольшая проверка i * 2 что позваляет как минимум в 2 раза уменьшить колличество итераций 
    for (let i = 2; i * 2 <= n; i++) {
        if (!(i * 2 <= n)) break;
        if (n % i == 0) {
            sumDividers += i;
        }
    }
    // Проверка на странное число
    if (sumDividers === n) {
        return true;
    } else {
        return false;
    }
}
button.addEventListener('click', () => {
    const num = Number(document.querySelector('.input').value);
    document.querySelector('.response').innerText = String(strangeNumberCheck(num));
});

