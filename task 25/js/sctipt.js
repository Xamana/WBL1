
//функция создания элемента в дом. Принимает элемент, класс, контент и родителя
const createNewElement = (elem, className, content, parrentId) => {
    let newElement = `
        <${elem} class="${className}">${content}</$>
    `
    document.getElementById(`${parrentId}`).appendChild(newElement);
}
const button = document.querySelector('.input__button')
button.addEventListener('click', () => {
    createNewElement('div','test-element', 'Новый блок', 'form1');
})


