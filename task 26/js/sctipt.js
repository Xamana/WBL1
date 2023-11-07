
//функция рекурсивного обхода дом дерева
function traverseDOM(element, action) {
    action(element); // Выполняем действие с текущим элементом
    const children = element.children;
    for (let i = 0; i < children.length; i++) {
      traverseDOM(children[i], action); // Рекурсивно обходим потомков
    }
}

const form = document.querySelector('.form');

traverseDOM(form, console.log)