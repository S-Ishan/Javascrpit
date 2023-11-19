const coding = ["js", "ruby", "java", "python"]

coding.forEach( function (item) {
    // console.log(item);
} )

coding.forEach((item) => {
    // console.log(item)
} )

function printMe (item) {
    // console.log(item);
}

coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})
// forEach doesn't return any value.
//====================MAP REDUCE===================
//     TO return Values USE FILTER
const myNums = [1,2,3,4,5,6,,8,9,10]
const newNums = myNums.filter( (nums) => nums > 4)
console.log(newNums);