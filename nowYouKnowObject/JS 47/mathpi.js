const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log((Math.PI));
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bani");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "price"));

Object.defineProperty(chai, 'price', {
    // writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(chai, "price"));

for (const [keys, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${keys} ; ${value}`);
    }
}