const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "Swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);   
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

for (const key in map) {
    // console.log(key);
}


const pirates = {
    'Captain': 'Monkey D Luffy',
    'Vice-Captain': 'Roronoa Zoro',
    'Cook': 'Vinsomke Sanji',
    'Doctor': 'Tony-Tony Chopper',
    'Navigator': 'CatBuglar Nami',
    'Singer': 'Brook',
    'Sniper': 'Ussopp',
    'Engineer': 'Franky',
    'Helmsman': 'Jinbe',
    'Archeologist': 'Nico Robin'
}

// console.log();
for (const key in pirates) {
    //    console.log(`${key} is ${pirates[key]}`);
}

// console.log("\n\nfor of\n");


const Pirates = new Map
Pirates.set('Captain',"Monkey D Luffy")
Pirates.set('Vice-Captain',"Roronoa Zoro")
Pirates.set('Sniper',"Ussopp")
Pirates.set('Navigator',"CatBuglar Nami")
Pirates.set('Cook',"Vinsmoke Sanji")
Pirates.set('Doctor',"Tony-Tony Chopper")
Pirates.set('Archeologist',"Nico Robin")
Pirates.set('Engineer',"Franky")
Pirates.set('Singer',"Brook")
Pirates.set('Helmsman',"Jinbe")

for (const [Key, value] of Pirates) {
    // console.log(Key,"-> ", value);
}











const programming = ["js", "rb", "py", "java", "cpp"]

for (const key of programming) {
    // console.log(`${key} is ${programming[key]}`);
    // console.log(`${key} is ${value}`);

    for (let i=0; i<key.length; i++) {

        for(let j=0; j< key.length; j++) {
            
                // console.log(key[j]);
                
        } break;
        // const store = key[i]
    }
    
}






const arr = ["js", "rb", "py", "java", "cpp"]

for (let item of arr) {
    // console.log(item.split('').join(',')); // Split each string into characters and join with commas
  }


  

const Programming = ["js", "rb", "py", "java", "cpp"]

for (const item of Programming) {
    const pub = item.split('');
  //    console.log(key);
  pub.forEach( (key, index, arr) => {
    console.log(key, index, arr);
    
  } ) 
}
