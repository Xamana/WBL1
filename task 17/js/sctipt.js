const API_KEY = '09ddad9e-9c5f-4b33-88b3-e3be8c4d8ace';
const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
const token = "eb2f01ef389c40fdfe0496d7ac4c8f2b3ff2ce53";

const options = {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    },
    body: JSON.stringify({query: query})
}
function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

const input = document.querySelector('.input');
const select = document.querySelector('.select_input');
//функция добавляет новые элементы option в select
const changeOptions = (arr) => {
    arr.map((item) => {
        let newOptions = new Option(item.value, item.value)
        select.prepend(newOptions)
    })
}
//функция для отправки запроса на сервер при изменении инпута
const changeInput = debounce( () => {
    let out = []
    const options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({query: input.value})
    }
     fetch(url, options)
    .then(response => response.text())
    .then(result => {
        out = JSON.parse(result)
        changeOptions(out.suggestions)

    })  
    .catch(error => console.log("error", error));
}) 








input.addEventListener('input', changeInput);