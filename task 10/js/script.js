//эмитация JSON 
const data = [
    {name: "nice", age: {name: "nice", age: {name: "nice", age: 5}},}, 
    {name: "nice", age: 5},  
    {name: "nice", age: 5},  
    {name: "nice", age: 5},  
    {name: "nice", age: 5},  
    {name: "nice", age: 5}, 
]

const json = JSON.stringify(data);
//кастомная функция парсющяя строку в объект
function customParse(str) {
    //индекс символа в строке
    let i = 0;
    // пермеменные для поиска числа
    let nfirstchars = '-0123456789.';
    let nchars = '-0123456789.eE';

    //функция проверки является ли символ пробелом переводом строки или табуляцией
    const isWhiteSpace = (c) => {
        return c==' ' || c=='\r' || c=='\n' || c=='\t'
    };
    //функция проверяет ялвяется ли символ пробелом и пропускает его
    const skipWhiteSpace = () => {
        while (i < str.length && isWhiteSpace(str.charAt(i))) i++;
    };
    // функция вызывается если в строке есть массив и конвертирует часть строки в массив
    function parseArray () {
        i++
        skipWhiteSpace();
        //проверка если массив пустой
        if (str.charAt(i + 1) == ']') {
            i++;
            return []
        }
        const arr = []
        let c;
        //цикл массив всеми элементами
        while(true) {
            let value = parseValue();
            arr.push(value);
            skipWhiteSpace();
            c = str.charAt(i);
            if (c == ',') {
                i++;
                skipWhiteSpace();
            } else break;
        }
        //вывод в консоль ошибки если массив не имеет закрывающей квадратной ковычки
        if (c != ']'){
            throw 'Expecting ]';
        }
        i++;
        return arr;
    };
    //Функция парсит JSON строку в строку 
    function parseString(quote) {
        i++;
        let c;
        let out = '';
        while((c = str.charAt(i)) != quote) {
            //проверка является ли символ регулярным выражением
            if (c == '\\') {
                i++;
                c = str.charAt(i)
                if (c == 'r') s += '\r';
                else if (c == 'n') s += '\n';
                else if (c == 't') s += '\t';
                else if (c == 'f') s += '\f';
                else out += c;
            } else out += c;
            i++;
        }
        i++;
        return out;
    };
    //Функция проверяет является ли строка числом и возвращяет его
    function parseNumber() {
        const startIndex = i;
        while(nchars.indexOf(str.charAt(i)) != -1) {
            i++
        }
        return new Number(str.substring(startIndex, i));
    };
    //Функция проверяет является ли число всеми остальными типами типо true false NaN undefined
    function parseLiteral(literal, value) {
        if (literal.length > str.length - i) {
            throw "Expecting " + literal;
        }
        for (let j = 0; j < literal.length; j++) { 
            if (literal.charAt(j) != str.charAt(i++)) {
                throw "Expecting " + literal;
            }
        }
        return value
    };
    //Функция парсит строку в объект 
    function parseObject() {
        i++;
        skipWhiteSpace();
        // проверка на пустой объект
        if (str.charAt(i) === '}') {
            i++;
            return {};
        }
        let obj = {}
        let c;
        //Цикл заполняющий объект элементами
        while(true) {
            let name = parseValue();
            skipWhiteSpace();
            c = str.charAt(i);
            if (c != ':') throw "Expecting :";
            i++;
            skipWhiteSpace();
            let value = parseValue();
            skipWhiteSpace();
            
            obj[name] = value;
            c = str.charAt(i);
            // проверка есть ли в объекте следующий элемент при его отсутствии цикл прекращяется
            if (c == ',') {
                i++;
                skipWhiteSpace();
            } else if ((c != ',')) {
                break
            };
        }
        // если объект не имеет закрывающей скобки выводится ошибка
        if ( c != '}' ) {
            Response.Write(str.substring(i));
            throw "Expecting }";
        }
        i++;
        return obj
    }
    // главная функция парсящяя JSON строку в объект/массив
    function parseValue() {
        skipWhiteSpace()
        if (i === str.length) return null;
        let c = str.charAt(i);
        if (c == '{') return parseObject();
        else if (c == '[') return parseArray();
        else if (c == '\"') return parseString('\"');
        else if (c == '\'') return parseString('\'');
        else if (nfirstchars.indexOf(c) != -1) return parseNumber();
        else if (c == 't') return parseLiteral('true',true);
        else if (c == 'f') return parseLiteral('false',false);
        else if (c == 'n') return parseLiteral('null',null);
        else if (c == 'N') return parseLiteral('NaN',NaN);
        else if (c == 'u') return parseLiteral('undefined',undefined);
        throw "Invalid json";
        
    }
    return parseValue();
}

console.log(asd.parse(json))

console.log(customParse(json))
