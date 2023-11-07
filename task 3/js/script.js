const isFib = (() => {
    // Обьявление переменной выступающей в роли кэша, чтобы при повторном вызове функции отсчет начинался не с начала а прдолжался
    // или вовсе не начинался если последующее число было меньше предыдущего 
    let fibCache = [0, 1];
    return function (n) {
        // если число меньше или равно 1 то и ответ будет N
        if (n <= 2) return fibCache;

        // Если искомое число фибаначи имеется в кеше мы его просто возвращяем
        if (fibCache[n - 1]) {
            return fibCache;
        }

        // Цикл срабатывающий если кеш пустой или искомое число не найденно в кеше
        for (let i = fibCache.length; i < n; i++) {
            fibCache.push(fibCache[i - 1] + fibCache[i - 2]); 
        }
        //Возвращяем массив чисел фибаначи
        return fibCache;
    };
})();


const findNFib = (n) => {
    const fibArray = isFib(n);
    return fibArray[n-1];
};
const sumFibNums = (n) => {
    const fibArray = isFib(n + 2);
    // на основании функции findNFib можно найти сумму чисел с помощью формулы (n + 2) - 1
    return fibArray[n + 1] - 1;
}


const isSimple = (() => {
    // Обьявление переменной выступающей в роли кэша, чтобы при повторном вызове функции отсчет начинался не с начала а прдолжался
    // или вовсе не начинался если последующее число было меньше предыдущего  
    const isSimpleCache = [];
    return (num) => {
        //Простая оптимизация, при нахожднии в кеше целого числа с подходящим индексом условие вернет его без еще одного выполнения функции
        if (isSimpleCache[num - 1]) {
            console.log("пересчета небыло")
            return isSimpleCache;
        }
        //Функция проверяющяя является ли число простым
        const isPrime = (n) => {
            for (let i = 2; i < n; i++) {
                if (n % i === 0) return false;
            }
            return n;
        }
        //Цикл проверяет является ли число простым и записывает его в кеш, если искомое число больше числа находящегося в кеше, то кеш продолжит заполняться
        //до N-ного числа
        for (let i = (isSimpleCache[isSimpleCache.length - 1] + 1) || 2; isSimpleCache.length < num; i++) {
            if (isPrime(i)) {
                isSimpleCache.push(i);
            }
            
        }
        return isSimpleCache;
    }
   
})();

const findIsSimple = (num) => {
    const simpleArr= isSimple(num);
    return simpleArr[num - 1];
}
const findSumIsSimple = (num) => {
    const simpleArr = isSimple(num);
    let sum = 0;
    for (let i = 0; i < simpleArr.length; i++) {

        sum += simpleArr[i]
    }
    return sum;
}

const MathX = {
    findNFib,
    sumFibNums,
    findIsSimple,
    findSumIsSimple,
}

console.log(MathX.findNFib(10))
console.log(MathX.findNFib(9))
console.log(MathX.findNFib(4))
console.log(MathX.findNFib(8))
console.log(MathX.sumFibNums(30))
