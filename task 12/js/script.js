//Объект Book имеет геттеры и сеттеры name, arthor, year, all,
const Book = {
    desc: {
        bookName: 'Война и мир',
        author: 'Лев Толстой',
        year: '1869',
    },
    get name() {
        return this.desc.bookName;
    },
    set name(name) {
        this.desc.bookName = name;
    },
    get author() {
        return this.desc.author;
    },
    set author(author) {
        this.desc.author = author;
    },
    get year() {
        return this.desc.year;
    },
    set year(year) {
        this.desc.year = year;
    },
    get all() {
        return `${this.name} ${this.author} ${this.year}`;
    },
    set all([name = this.desc.bookName, author = this.desc.author, year = this.desc.year]) {
        this.desc.bookName = name;
        this.desc.author = author;
        this.desc.year = year;        
    }
}


Book.all = ['Старик и море', 'Эрнест Хеменгуэй', "1952"]
console.log(Book.all)