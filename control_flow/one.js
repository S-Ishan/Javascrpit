//FALSY VALUES
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//TRUTHY VALUES
// [],"0", 'false', " ", {}, function(){} 

//==============================================
//Object length by using it like array
const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {  
    console.log("Object is empty")
}

//============================
false == 0      //True
false == ''     //True
0 == ''         //True


// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10                  //5
val1 = null ?? 10               //10
val1 = undefined ?? 15 ?? 25    //15

//Terniary Operator(if else)
const iceTeaPrice = 100
// conditioin ? true : false
iceTeaPrice>90 ? console.log("True") : console.log("False");
