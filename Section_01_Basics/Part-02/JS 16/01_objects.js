// singleton

// object literals
// Object.create

const mySym = Symbol("key1")


const JsUser = {
    name: "Luffy",
    "full name": "Roronoa Luffy",
    [mySym]: "mykey1",
    age: 18,
    location: "LogueTown",
    email: "Luffy@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "Luffy@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Luakdj.ccpsnca"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
