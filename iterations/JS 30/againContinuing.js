const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNums = myNumbers.map( (num) => {return num + 10})        // map
// console.log(newNums);

// newNums = myNumbers.forEach( (num) => console.log(num + 10) )  // forEach
// console.log(newNums);

// newNums = myNumbers.filter( (num) => num > 4 )               // filter
// console.log(newNums);

const newNums = myNumbers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter((num) => num >= 40)

console.log(newNums);
