const marine_heros = ["Garp", "Kobi", "Kizaru"]
const pirates = ["Shirohige", "Shanks", "Dragon"]

// marine_heros.push(pirates)

// console.group(marine_heros)
// console.group(marine_heros[3][1])

// const allHeros = marine_heros.concat(pirates)
// console.log(allHeros);

const all_new_heros = [...marine_heros, ...pirates]

// console.log(all_new_heros);

const another_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_Array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Luffy"));
console.log(Array.from("Luffy"));
console.log(Array.from({name: "Luffy"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log((Array.of(score1, score2, score3)));

