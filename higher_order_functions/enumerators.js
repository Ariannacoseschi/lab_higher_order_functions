const numbers = [1, 2, 3, 4, 5];
const letters = ['a','b','c','d','e'];


const printElement = (arrayElement) => {
    console.log(arrayElement);
}

const printDoubleElement = (arrayElement) => {
    console.log(arrayElement * 2);
}

//for (let i = 0; i < numbers.length; i++){
    //console.log(numbers[i]);
//}

//numbers.forEach(printElement);
//numbers.forEach(printDoubleElement);

const doubledNumbers = numbers.map((number) => {
    return number * 2; 
})

console.log(numbers);
console.log(doubledNumbers);

//users.map(user =>{
//})

const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
});

//Reduce

const total = numbers.reduce((reduce, number) =>{
    console.log(`current value of reducer: ${reducer}`);
    return reduce + number; 
}, 0);

console.log(numbers);
console.log(total);


