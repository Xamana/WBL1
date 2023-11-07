//размер колстека в хроме 12541

//рекурсивный вызов функции заполняет колстек
const findCallStackSize = () => {
    let i = 0
    const fillCallStack = () => {
        i++;
        fillCallStack();
    }

    try {
        fillCallStack();
    } catch (e) {
        console.log(`максимальное колличество выозвов в call stack: ${i}`)
    }
}

findCallStackSize()