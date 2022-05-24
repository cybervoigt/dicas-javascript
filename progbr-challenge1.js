
/** Instagram progbr
 *  what is going to be printed?
 * */

const student1 = {id:10,name:"Richard"}
const student2 = {name:"Richard",id:10}
const student3 = {id:10,name:"Richard"}

// false
console.log(JSON.stringify(student1) == JSON.stringify(student2))

// true
console.log(JSON.stringify(student1) == JSON.stringify(student3))

