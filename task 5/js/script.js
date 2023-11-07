//эмитация получения json данных
const data = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "userId": 1,
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true
    },
    {
      "userId": 1,
      "id": 11,
      "title": "vero rerum temporibus dolor",
      "completed": true
    },
    {
      "userId": 1,
      "id": 12,
      "title": "ipsa repellendus fugit nisi",
      "completed": true
    },
    {
      "userId": 1,
      "id": 13,
      "title": "et doloremque nulla",
      "completed": false
    },
    {
      "userId": 1,
      "id": 14,
      "title": "repellendus sunt dolores architecto voluptatum",
      "completed": true
    },
    {
      "userId": 1,
      "id": 15,
      "title": "ab voluptatum amet voluptas",
      "completed": true
    },
    {
      "userId": 1,
      "id": 16,
      "title": "accusamus eos facilis sint et aut voluptatem",
      "completed": true
    },
    {
      "userId": 1,
      "id": 17,
      "title": "quo laboriosam deleniti aut qui",
      "completed": true
    },
]
const jsonData = JSON.stringify(data) 

//Класс создаёт 1 узел 
class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}
//Класс создаёт сам односвязный список
class LinkedList {
    constructor() {
        //объявление head и tial нужны для последующего расширения класса,
        //с помошью них можно написать методы добавления в начало и в конец массива или получить последний или первый элемент
        this.head = null;
        this.tail = null;
    }
    //Метод добавляет элемент в конец списка
    add(value) {
        const newNode = new Node(value);
        //если список пуст в хэд и в тейл присваивается нода
        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
    
            return this;
        }
        //текущей ноде задаётся ссылка на новую ноду
        this.tail.next = newNode;
        // так как последняя нода уже не является последней переопределяем её
        this.tail = newNode;

        return this;
    }
}

const JSONToLinkedList = (json) => {
    //получение JSON строки и преобразование её в массив
    const arr = JSON.parse(json);
    //создание нового экземпляра класса
    let result = new LinkedList();
    //цикл пробегает по массиву и записывает в связный список все эдлементы
    for (let i = 0; i < arr.length; i++) {
        result.add(arr[i])
    }
    return result;
}

console.log(JSONToLinkedList(jsonData));