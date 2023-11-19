// const myNums = [1,2,3,4,5,6,7,8,9,10]

//map returns value
// const newNums = myNums.map( (num) => num+10)

//Chaining Method
// const newNums = myNums
                // .map((num) => num * 10)
                // .map((num) => num + 1)
                // .filter((num) => num >= 40)
                
//console.log(newNums);
                
 //Reduce METHOD
                
const myNums = [1,2,3] 

const Total = myNums.reduce(function (acc, currval) {
    console.log(`aacc: ${acc} currval: ${currval}`);
    return acc + currval
}, 0)

const myTotal = myNums.reduce( (acc, currval) => acc+currval, 0)
console.log(myTotal);