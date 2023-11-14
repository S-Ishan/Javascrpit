// singleton
// Object.create (using constructor)
// object literals

const mysym = Symbol("key1")

const jsUser = {
    name: "Ishan",
    [mysym]: "Mykey1",   //symbol
    age: 21,
    location : "meerut",
    email: "email.com"
}
// console.log(jsUser.name)
// console.log(jsUser["name"])
// console.log(jsUser[mysym])  //Printing a symbol

//Updating email
jsUser.email = "ishan@chatgpt.com"
// Object.freeze(jsUser)  //no further changes

//functions
jsUser.greetings = function(){
    console.log("Hello JS User");
}
jsUser.greetingsTwo = function() {
    console.log(`Hello JS User ${this.name}`);
}

console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());