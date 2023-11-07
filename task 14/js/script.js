let imageURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/%28Venice%29_Aristide_-_Francesco_Hayez_-_gallerie_Accademia_Venice.jpg/220px-%28Venice%29_Aristide_-_Francesco_Hayez_-_gallerie_Accademia_Venice.jpg';
//функция возвраящяет промис загрузки изображения
const awaitIMG = (url) => {
    return new Promise((resolve, reject) => {
        const img = new Image ();
        img.onload = () => {
            resolve(img);
        }
        img.onerror = () => {
            reject(new Error('Some Error'))
        }
        img.src = url;
    })
}
//Функция выводит в лог информацию о картинке при загрузке
awaitIMG(imageURL)
    .then((img) => {
        console.log(img)
    })
    .catch((err) => {
        console.error(err)
    })
