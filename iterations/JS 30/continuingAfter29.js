// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const strawHats = [
    { title: 'Captain', name: 'Monkey D Luffy', bounty: 100, age: 19 },
    { title: 'Vice-Captain', name: 'Roronoa Zoro', bounty: 75, age: 21 },
    { title: 'Sniper', name: 'God Ussopp', bounty: 35, age: 19 },
    { title: 'Navigator', name: 'Nami', bounty: 33, age: 19 },
    { title: 'Cook', name: 'Sanji', bounty: 68, age: 21 },
    { title: 'Doctor', name: 'Tony-Tony Chopper', bounty: 5, age: 16 },
    { title: 'Archeologist', name: 'Nico Robin', bounty: 45, age: 28 },
    { title: 'Engineer', name: 'Franky', bounty: 29, age: 28 },
    { title: 'Singer', name: 'Brook', bounty: 58, age: 150 },
    { title: 'Helmsman', name: 'Jinbe', bounty: 71, age: 32 },
];
let Pirates = strawHats.filter( (prt) => prt.age === 19 )

Pirates = strawHats.filter( (prt) => {
    return prt.bounty >= 60 && prt.age === 19
} )
console.log(Pirates);