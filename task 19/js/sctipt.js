const URL = 'https://api.vk.com/method/wall.get';
const owner_id = '-196613718';
const access_token = '58b8083f58b8083f58b8083fc35bae3899558b858b8083f3dfe90be449783d43ff7e7eb';
const domain = 'https://vk.com/cstmmade';
let offset = 0;
let count = 10;
const $comunityName = 'CustomMade';

const fetchData = () => {
    const script = document.createElement('SCRIPT');
    script.src = `https://api.vk.com/method/wall.get?v=5.131&owner_id=${owner_id}&access_token=${access_token}&domain=${domain}&offset=${offset}&count=${count}&callback=callbackFunc`;
    document.getElementsByTagName("head")[0].appendChild(script);
}

//так как vk api при добавлении нового поста вернет новый массив с новыми индексами я не представляю возможним сделать функционал
//удаления посделнего элемента в локал сторэдж и добавления 1 элемента в массив
function callbackFunc(result) { 
    const data = result.response;
    try {
        localStorage.setItem('wall', JSON.stringify(data.items))
    } catch (e) {
        localStorage.removeItem('wall');
        count = 10;
        fetchData()
    }
    addToHtml()
}
//функция добавляет посты в HTML
function addToHtml() {
    if (!localStorage.length) {
        fetchData()
    }
    if (!localStorage.getItem('wall')) {
        localStorage.clear();
        fetchData()
    }
    
    const data = JSON.parse(localStorage.getItem('wall'));
    console.log(data)
    let htmlElement = '';
    data.forEach(item => {
        let photos = ''
        item.attachments.forEach(item => {
            const url = item?.photo?.sizes[2]?.url;
            photos += `
                <img src="${url}" alt="" class="post-img">
            `
        })
        htmlElement += `
            <div class="wall__post">
                <div class="post__header">
                    <div class="community-name">${$comunityName}</div>
                    <div class="post-text">${item.text}</div>
                </div>
                <div class="post__img-block">
                    ${photos}
                </div>  
            </div>
        `
    })
    document.querySelector('.wall').innerHTML = htmlElement;

}

if (localStorage.getItem('wall')) {
    addToHtml()
}


const contentContainer = document.querySelector('.wall');
//При прокрутке до последнего элемента подргужаются новые данные
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    count += 10;
    fetchData()
  }
});

