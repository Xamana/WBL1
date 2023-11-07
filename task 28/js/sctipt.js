//Функция использует темплейт и вставляет его в родительский элемент

function reUseTemplate(templateId, parentSelector) {
    const template = document.getElementById(templateId);
    const clone = document.importNode(template.content, true);
    const parent = document.querySelector(parentSelector);
    parent.appendChild(clone);
}

reUseTemplate('goods-template', '.form');
reUseTemplate('goods-template', '.form');
reUseTemplate('goods-template', '.form');
reUseTemplate('goods-template', '.form');

