
/**
 * Examplo from here:
 * https://stackoverflow.com/questions/313893/how-to-measure-time-taken-by-a-function-to-execute
 */

const doSomething = function(){
    console.log('ola mundo...')
}

console.time('doSomething')
    
doSomething()   // <---- The function you're measuring time for 
    
console.timeEnd('doSomething')
