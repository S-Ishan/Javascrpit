//for of

const arr = [1,2,3,4,5]

for(const num of arr) {
    // console.log(num);
}

const greetings = "Hello World"

for( const greet of greetings) {
    // console.log(greet);
}

//===========MAPS=========
//Unique values, Maintains Order, Non-Iteratable

const map = new Map()
map.set('IN', "India")
map.set('UN', "United Nations")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);
 
//iteration maps using FOR OF

for (const [Key, value] of map) { //destructure array
    console.log(Key, value );
    
}