// function addTwoNumebrs(number1, number2) {
//     console.log(number1+ number2); // num1, num2 are parameters
// }
// addTwoNumebrs(3,4) // 3,4 are arguments

function addTwoNumebrs(number1, number2) {
    // let result = number1+number2
    // return result
    return number1+number2
}
// console.log(addTwoNumebrs(2,4));
/*************************************** */
function LoginUserMessage(username = "sam") {
    if(!username) {             //username === undefined
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(LoginUserMessage("Ishan"));