

const closures = (() => {
    let defaultName = 'michael';
    let defaultAge = 22; 
    return (name = defaultName, age = defaultAge) => {
        return `${name} ${age}`;
    }
})()

const michael = closures();
const somebody = closures('daniel', 30);

console.log(michael);
console.log(somebody);