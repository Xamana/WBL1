
//функция задаёт сили элементу в зависимости от типа анимации 
function animateElement(element, animationType) {
    element.style.transition = 'all 1s';
    if (animationType === 'move') {
      element.style.transform = 'translateX(100px)';
    } else if (animationType === 'resize') {
      element.style.width = '200px';
    }
}

const input = document.querySelector('.input');
const button = document.querySelector('.input__button');

button.addEventListener('click', ()=> animateElement(input, 'move'))
