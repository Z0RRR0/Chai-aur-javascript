// Dates

// let myDate = new Date()
// console.log(myDate.toString());          // Sat Sep 28 2024 11:46:17 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());      // Sat Sep 28 2024
// console.log(myDate.toTimeString());      // 11:46:17 GMT+0530 (India Standard Time)
// console.log(myDate.toJSON());            // 2024-09-28T06:16:17.044Z
// console.log(myDate.toISOString());       // 2024-09-28T06:16:17.044Z
// console.log(myDate.toLocaleString());    // 28/9/2024, 11:46:17 am
// console.log(myDate.toUTCString());       // Sat, 28 Sep 2024 06:16:17 GMT

// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0, 24)
// let myCreatedDate = new Date(2024, 0, 24, 5, 4)
let myCreatedDate = new Date("01-14-2024")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.round(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// console.log(`The day is ${newDate.getDay()} and the time is ${newDate.getTime()}`)

newDate.toLocaleString('default', {
    weekday: "long"

})

