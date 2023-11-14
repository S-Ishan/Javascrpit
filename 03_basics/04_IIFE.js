// Immediately Invoked Function Expressions(IIFE)
//  to avoid global scope pollution
// SYNTAX ---->  ()();

//Named IIFE
(function chai1() {
    console.log(`DB CONNECTED`);
})();

//Un-named IIFE=============

(() => {
    console.log(`DB CONNECTED 2`)
})();

//=============

((name) => {
    console.log(`DB CONNECTED 2 ${name}`)
})('Ishan');

