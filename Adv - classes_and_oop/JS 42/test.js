function xyz(name){
    this.name = name
    // this.age = age
    let a = ()=>{
        console.log(`this is name: ${name}`);
        // console.log(`this is name: ${age}`);
    }
    a()

    xyz.prototype.abc = ()=>{
        console.log('Hello');
    }
}

// xyz("Luffy", 19)
// xyz("Zoro", 21)

let efg = "Luffyas       "
// efg.abc()


String.prototype.lmn = function(){
    // console.log(this);
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}

efg.lmn()

String.prototype.replaceM = function(){
    // this.replace(/M/m,'t')
    console.log(`Word after replacing 'm' with 't': ${this.replace(/M/m,'t')}`);
    
}

// "Mony".replaceM()
let namae = "Mommy"
namae.replaceM()

// console.log(namae[0].replace('t'));
