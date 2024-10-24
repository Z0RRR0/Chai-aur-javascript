const user = {
    username: "Luffy",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to our website`)
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "Zoro"
// user.welcomeMessage()

// console.log(this);

// function sake(){
//     let username = "Luffy"
//     console.log(this.username);
// }

// sake()

// const sake = function() {
//     let username = "Luffy"
//     console.log(this.username);
// }

const sake =  () => {
    let username = "Luffy"
    console.log(this);
}


// sake()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Luffy"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()