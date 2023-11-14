//Two ways of declarig a function
//1+++++++++++++++
function AddOne(num) {
    return num+1
}
AddOne(5)  // Function can be called before declaration



//2+++++++++++
const addTwo = function(num){
    return num+2
}
addTwo(5)   //Calling function before declaration will give error