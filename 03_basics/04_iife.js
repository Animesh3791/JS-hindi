// Immediately Invoked Function Expressions (IIFE)
//Many a time we have a problem from global scope (Declaration, variable), we are using IIFE.


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Animesh')