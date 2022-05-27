
/**
 * exemplo de código "assíncrono"
 * 
 */

const fs = require ('fs')


/**
 * some functions...
 * 
 */

const functionTest = () => {
    return 'hello...I am a line between the lines 4 and 5.'
}

const readFilePromise = filepath => {

    // example of a Promise... "I Promise a result!"
    return new Promise( function(resolve,reject) {
        fs.readFile(filepath, (err,content) => {
            resolve(content)
        })
    } )
}


const asyncProcessing = async () => {

    try{
        console.log('============ reading README.md')
        const content = await readFilePromise('./README.md')
        return content
    }catch(err){
        console.log('My Error:',err)

    }
}





/**
 *  now starts the output...
 */


console.log('line 1')

// slow line...
const content = fs.readFile('./calculator.js', (err,content)=>{
    // here it's a callback function...
    console.log('===================reading calculator.js')
    console.log(String(content))
})


console.log('line 2')



// slow line...
const myPromise = readFilePromise('./index1.js')

myPromise.then( content => {
        console.log('=================reading index1.js')
        console.log(String(content))
    } )


console.log('line 3')

console.log(functionTest())


console.log('line 4')


asyncProcessing().then( content=>console.log(String(content)) )

console.log('line 5')
