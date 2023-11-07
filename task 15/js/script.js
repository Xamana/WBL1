const data = new Promise (resolve => resolve('hi'))
//функция получает агрумент и выводит результат выполнения аргумента
const awaitingFunc = async (func) => {
    const result = await func
    return result
}

awaitingFunc(data)