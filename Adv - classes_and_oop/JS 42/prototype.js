//************************* I HAVE DONE THIS MYSELF *************************************

// function trueLengthFn(str){
//     this.str = str;  
// }

// String.prototype.trueLength = function(){
//     let Length = 0;
//     let totalLength = 0;
//     for(let i =0; i <this.length; i++){
//         totalLength++
//         if(this[i] == ' '){
//             continue;
//         } else {
//             Length++
//         }
//     }
//     console.log(`true length: ${Length} & total length: ${totalLength}`)
// }


// let myName = "  Luffy bcccs "
// "ZororRR  OR ZORRRRRO".trueLength()
// myName.trueLength()

// console.log(myName);


//************************* I HAVE DONE THIS MYSELF *************************************


// let myName = "Luffy     "
// let mychannel = "chai    "

// console.log(myName.trueLength);


let myHero = ["Luffy", "Zoro"]


let heroPower = {
    Luffy: "Nica",
    Zoro: "Tatsumaki",

    getDemonPower: function(){
        console.log(`Demon power is ${this.Zoro}`); 
    }
}

Object.prototype.naruto = function(){
    console.log(`naruto is present in all object`);
}

Array.prototype.heyNaruto = function(){
    console.log('Naruto says hero');
}

// heroPower.naruto()
// myHero.naruto()
// myHero.heyNaruto()
// heroPower.heyNaruto()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}


const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assginment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);   
}
anotherUsername.trueLength()
"luffy".trueLength()
"iceTea".trueLength()