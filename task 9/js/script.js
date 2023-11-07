const toJSON = [
    {name: "nice", age: {name: "nice", age: {name: "nice", age: 5}},}, 
    {name: "nice", age: 5},  
    {name: "nice", age: 5},  
    {name: "nice", age: 5},  
    {name: "nice", age: 5},  
    {name: "nice", age: 5}, 
]
//Функция конвертации Json в строку
function customStringify(arr) {  
    let out = '';
    //функция конвертации объекта в строку
    const returnObject = (obj, i) => {
        let objNode = '';
        objNode += "{"
        for (let item in obj) {
        if (typeof obj[item] === 'object') {
            objNode += `"${item}":${returnObject(obj[item], i)}`
        } else {
            objNode += `"${item}":${typeof obj[item] === 'number'? obj[item]: `"${obj[item]}"`},`
        }
        }
        if (i === arr.length - 1) {
        objNode += "}"
        } else {
        objNode += "},"
        }
        return objNode
    }
    //функция конвертации массива в строку
    const returnArray = (arr) => {
        let node = '';
        node += "["
        for (let item of arr) {
            if (Array.isArray(item)) {
                node += returnArray(item)
            } else {
                node += `${typeof item === 'number'? item: `"${item}"`},`
            }
        }
        if (i === arr.length - 1) {
        node += "]"
        } else {
        node += "],"
        }
    }
    if (Array.isArray(arr)) {
        out += "[";
        for(let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            out += returnObject(arr[i], i)
        } else if (typeof arr[i] === 'string') {
            return arr[i]
        } else if (Array.isArray(arr[i])) {
            out += returnArray(arr[i])
        }
        }
        out += "]";
        return out
    }
}

console.log(customStringify(toJSON))
console.log(JSON.stringify(toJSON))