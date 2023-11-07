
//функция проверки максимального объёма localStorage
const calclkulateLocalStorageSize = () => {
    if (localStorage && !localStorage.getItem('size')) {
        let i = 0;
        try {
            // Test up to 10 MB
            for (i = 250; i <= 10000; i += 250) {
                localStorage.setItem('test', new Array((i * 1024) + 1).join('a'));
            }
        } catch (e) {
            localStorage.removeItem('test');
            localStorage.setItem('size', i - 250);   
            console.log(localStorage) 
            return localStorage.getItem('size');       
        }
    }
    
}

const button = document.querySelector('.input__button')

button.addEventListener('click', calclkulateLocalStorageSize)


