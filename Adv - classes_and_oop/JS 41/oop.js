const { is } = require("express/lib/request");

const user = {
    username: "Luffy",
    loginCount: 8,
    signedIn: true,

    getUSerDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



// console.log(user.username);
// console.log(user.getUSerDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);

    }
    

    return this
}

const userOne = new User("luffy", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);

/*
1 - New Object is Created
2 - called constructor function by 'new' keyword
3 - all arguments injectecd inside 'this' keyword
4 - you got it all then
*/