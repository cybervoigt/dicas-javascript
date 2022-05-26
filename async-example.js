
/**
 * exemplo de código "assíncrono"
 * 
 */

const fs = require ('fs')


console.log('line 1')

// slow line...
const content = fs.readFile('./calculator.js', (err,content)=>{
    console.log('===================reading calculator.js')
    console.log(String(content))
})


console.log('line 2')


const readFilePromise = filepath => {
    return new Promise( (resolve,reject) => {
        fs.readFile(filepath, (err,content) => {
            resolve(content)
        })
    } )
}

// slow line...
readFilePromise('./index1.js')
    .then( content => {
        console.log('=================reading index1.js')
        console.log(String(content))
    } )


console.log('line 3')

console.log('line 4')


