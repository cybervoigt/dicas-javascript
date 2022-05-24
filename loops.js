
var result = ''

let i = 15

// simple loop...
for(let i=0; i<10; i++)
{
    result+= 'i='+i+"\n"
}
console.log(result)


// here i equals 15
console.log('the var i continues with the value ',i)


/* editing again, more examples of JS loops... :-) */
result = ''
const person = {firstName:'Hello',lastName:'World',email:'hello@world.hw'}
for(let x in person)
{
    result += person[x]+' | '
}
console.log('person data = ',result)




/* below let an empty line... :-/ */
