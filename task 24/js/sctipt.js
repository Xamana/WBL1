let ascending = true;
let count = 50
//Так как сайт каждый раз выдаёт рандомные данные чтоб пагинация работала правильно нужно сразу запрашивать все данные (1000)
//Но на сколько я понимаю в нормальных условиях это не правильно по этому я реализовал такое решение
const fetchData = () => {
    const url = `http://www.filltext.com/?rows=${count}&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true`
    try {
        fetch(url)
            .then(response => response.json())
            .then (data => {
                console.log(data);
                printTable(data)
            })
        
    }  catch (err) {
        console.error(err)
    }

}
//Вывод таблицы на страницу
const printTable = (data) => {
    if (!data) return;
    //Заголовок таблицы
    let tableContent = `
        <tr>
            <th class="tHead tName">Name</th>
            <th class="tHead tSurname">Surname</th>
            <th class="tHead tTel">Tel</th>
            <th class="tHead tAdress">Adress</th>
            <th class="tHead tCity">City</th>
            <th class="tHead tState">State</th>
            <th class="tHead tZip">Zip</th>
        </tr>
    `;
    // заполнение таблицы данными
    data.forEach((item) => { 
        let rows = ''
        for (let key in item) {
            rows += `<td class='tdata'>${item[key]}</td>`
        }
        tableContent += `
            <tr >
                ${rows}
            </tr>
        `
    })
    document.querySelector('.table__body').innerHTML = tableContent;
    //фильтрация столбцов по возрастанию и убыванию
    const filterButtons = document.querySelector('tr')
    filterButtons.addEventListener('click', (e) => {
        const target = e.target;
        
        const asotiation = {
            tName: 'fname',
            tSurname: 'lname',
            tTel: 'tel',
            tAdress: 'address',
            tCity: 'city',
            tState: 'state',
            tZip: 'zip',
        }
        const sortFilter = asotiation.tName && asotiation[target.classList[1]];
        if (ascending) {
            ascending = !ascending;
             data.sort((a, b) => a[sortFilter].localeCompare(b[sortFilter]))
            printTable(data)
        } else {
            ascending = !ascending;
            data.sort((a, b) => b[sortFilter].localeCompare(a[sortFilter]))
            printTable(data)
        }

    })
}
// Пагинация
const paginate = () => {
    let totalCount = 1000;
    let pages = Math.ceil(totalCount / count)
    
    const pagination = document.querySelector('.pagination')
    let page = ''
    for (let i = 0; i < pages; i++) {
        page += `<span data-page="${i * count}" id="page${i + 1}" class="pages">${i + 1}</span>`;
    }
    pagination.innerHTML = page

    let main_page = document.getElementById("page1");
    main_page.classList.add("paginator_active");
    let prevPage = 1;
    
    pagination.addEventListener('click', (event) => {
        const target = event.target;
        let id = target.id;
        console.log(id)
        if (target.tagName.toLowerCase() != "span") return;
        let num = id.substr(4);
        main_page.classList.remove("paginator_active");
        main_page = document.getElementById(id);
        main_page.classList.add("paginator_active");
        count = 50 * num
        fetchData()
      })
}

fetchData()
paginate()