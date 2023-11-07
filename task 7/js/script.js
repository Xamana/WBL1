const arrayFunc = [
    () => new Promise((res) => res(1)),
    () => new Promise((res) => res(2)),
    () => new Promise((res) => res(3)),
    () => {return 1},
    () => new Promise((res) => res(5)),
    () => new Promise((res) => res(6)),
    () => new Promise((res) => res(7)),
]
//Функция проходится по цикла и асинхранно выодит результат в консоль
const callFunc = (() => {
    return async (arr) => {
      for (const item of arr) {
        const res = await item();
        console.log(res)
      }
    }
})()

callFunc(arrayFunc)