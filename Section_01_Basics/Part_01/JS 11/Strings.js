const name = "Luffy"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('luffy-ly-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length)
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf('y'))

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = "    luffy    "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://luffy.com/luffy%20zoro"

console.log(url.replace('%20', '-'))

console.log(url.includes('luffy'))

const abc = gameName.split('y');
console.log(abc);
