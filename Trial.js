// function counter() {
//     let count = 0
//     return function() {
//         count += 1
//         return count
//        }
// }

// const count = counter()
// console.log(count()) // 1
// console.log(count()) // 2
// console.log(count()) // 3
// console.log(count()) // 4
// console.log(count()) // 5

// const count2 = counter()
// console.log(count2()) // 1
// console.log(count2()) // 2      


// let cnt = 0 // This  wont work as you are not using closure the count only increases when the function is called is called not the variable
// function counter() {
    
//     return cnt++
// }

//  counter()
// console.log(counter()) // 1
// console.log(counter()) // 2
// console.log(counter()) // 3
// console.log(counter()) // 4
// console.log(counter()) // 5

// const count2 = counter()
// console.log(count2) // 6
// console.log(count2) // 6      