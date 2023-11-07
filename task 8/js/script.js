const arrayFunc = [
    () => new Promise((res) => res(1)),
    () => new Promise((res) => res(2)),
    () => new Promise((res) => res(3)),
    () => {return 1},
    () => new Promise((res) => res(5)),
    () => new Promise((res) => res(6)),
    () => new Promise((res) => res(7)),
]
//Функция вызывает асинхронно каждую функцию и записывает результат выполнения в массив
const returnResaultCallFunc = (() => {
    const funcResults = [];
    return async (arr) => {
      for (const item of arr) {
        const res = await item();
        funcResults.push(res);
      }
        return funcResults;
    }
})()

returnResaultCallFunc(arrayFunc).then((v) => console.log(v))


