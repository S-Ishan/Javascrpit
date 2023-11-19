
//+++++++++++++++++++THIS-CONTEXT+++++++++++++++++++++++++++++
const user = {
    username: "Ishan",
    price: 999,

    welcomeMessage: function() {
        console.log(this)
        console.log(`${this.username} welcome to website`);
    }

}
// user.welcomeMessage()
//++++++++++++++++++++===THIS-INSIDE-FUNCTION++++++++++++++

// const chai = function() {
//     let username = "Ishan"
    // console.log(this.username); //undefined
// }

const chai = () => {
    let username = "Ishan"
    console.log(this); 
}
console.log(chai());

//++++++++++Arrow-FUNCTIONS+++++++++++++++++++++

// const addTwo = (num1, num2) => (num1 + num2)
// const addTwo = (num1, num2) => num1 + num2
const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3,4));
