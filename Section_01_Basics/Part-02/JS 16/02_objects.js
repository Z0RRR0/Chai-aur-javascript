// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Nami"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Nami",
            lastname: "Vinsomke"
        }
    }
}

// console.log(regularUser["fullname"]["userfullname"]["firstname"])  // OR
// console.log(regularUser.fullname.userfullname.lastname) 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = {...obj1, ...obj2, ...obj4}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// console.log(obj3);


const users = [
    {
        id: 1,
        email: "l@gmail.com"
    },
    {
        id: 1,
        email: "l@gmail.com"
    },
    {
        id: 1,
        email: "l@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    name: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: Instructor} = course

// console.log(courseInstructor);
console.log(Instructor);

// {
//     "name": "luffy",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]