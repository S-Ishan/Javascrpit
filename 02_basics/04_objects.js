// const tinderUser1 = new Object()    //Singelton Object
// const tinderUser2 = {}              //Non-Singelton object

const regularUser = {
    email: "Some@gmail.com",
    fullName: {
        userFullname: {
            firstName: "Ishan",
            lastName: "Sharma"
        }
    }
}
// console.log(regularUser.fullName["userFullname"]);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
                        //(target, ...sources)
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

/***********************************************/

// console.log(Object.keys(regularUser))
// console.log(Object.values(regularUser))
// console.log(Object.entries(regularUser))

console.log(regularUser.hasOwnProperty('email'));

/********************************************************* */
//