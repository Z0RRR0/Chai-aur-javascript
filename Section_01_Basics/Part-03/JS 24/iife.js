// Immediately Invoked Function Expressions (IIFE)


(function sake() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Luffy')
