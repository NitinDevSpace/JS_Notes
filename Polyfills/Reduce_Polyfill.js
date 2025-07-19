// const arr = []
// const sum = arr.reduce((acc, curr) => acc + curr)
// console.log("typeerror",sum)

if(!Array.prototype.myReduce){
   Array.prototype.myReduce = function(callback, initialValue){
    if(typeof callback !== "function"){
      throw new TypeError(`${callback} is not a function`)
    }
      console.log("arguments length:",arguments.length)
      if(this.length === 0 && arguments.length === 1){ // no initial value passed ; called with one argument
        throw new TypeError('Reduce of empty array with no initial value')
      }
      // set the initial value
      let acc = arguments.length === 1 ? this[0] : initialValue
    //   let acc = initialValue ||this[0] // wrong implementation if initialValue is 0
      const startIndex = arguments.length === 1 ? 1 : 0
      for(let i = startIndex; i < this.length; i++){
        if(i in this){
            acc = callback(acc, this[i], i, this)
        }
      }
      return acc
   } 
}


const arr = [1,2,3,4,5]// 1 -> 3 -> 6 -> 10 -> 15
console.log(arr.myreduce((acc, curr) => acc + curr, 0))
console.log(arr.myreduce((acc, curr) => acc + curr, 0))



// <============== Flatten Array ===========>
    /**
 * I/p: [1, 2, [3, 4, [5, 6, [9,12]], 7], 8]
 * O/p: [1, 2, 3, 4, 5, 6, 7, 8]
 * I?p" {a: 1, b: {c: 2, d: {e: 3, f: 4}}
 */

function flattenArray(arr){
   return arr.reduce((flatArray,item)=>{
    // logic to flatten the array
    if(Array.isArray(item)){
        // flatten it
        flatArray.push(...flattenArray(item))
    } else{
        // push the item to flatArray
        flatArray.push(item)
    }
    return flatArray
   },[]) 
}