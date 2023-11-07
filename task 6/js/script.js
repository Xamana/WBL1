const data = [
    { name: 'John', age: 25 },
    { name: 'Nic', age: 23 },
    { name: 'Dic', age: 24 },
    { name: 'Zac', age: 255 },
    { name: 'Mark', age: 256 },
    { name: 'Dark', age: 27 },
    { name: 'Alex', age: 28 },
    { name: 'Shotgun', age: 25 },
    { name: 'AliExpress', age: 25 },
    { name: 'Michael', age: 23 },
    { name: 'Zic', age: 22 },
    { name: 'Zina', age: 21 },
    { name: 'Gun', age: 22 },
    { name: 'Hunter', age: 23 },
    { name: 'Fin', age: 42 },
    { name: 'Finland', age: 22 },
    { name: 'Africa', age: 44 },
];
// ключи, по которым будем сортировать
const keyName = 'name';
const keyAge = 'age'; 
//присваиваем переменной отсортированный массив
const sorted = data.sort((user1, user2) => {
    if(user1[keyAge] === user2[keyAge]){
        return user1[keyName] > user2[keyName] ? 1 : -1;
    }
    return user1[keyAge] > user2[keyAge] ? 1 : -1;
});
console.log(sorted)