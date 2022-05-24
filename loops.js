
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
console.log('object data = ',result)


result = ''
const children = ["João","Otavio","Antonia"]
for(let x in children)
{
    result += children[x]+' | '
}
console.log('items of an array = ',result)



var qty = 0;
const lastName = 'VOIGT'
for(let x in lastName)
{
    qty+=1;
}
console.log("size of '",lastName,"' is ", qty, ' or ', lastName.length)

/* while example... */
var x = 0;
result = ''
while (x < lastName.length)
{
    let letter = lastName[x]
    result += `| ${x} = ${letter} | \n`
    x++;
}
console.log(result)



/* bubble sort... */
for(let i = 0; i< children.length-1; i++)
{
    for(let j=i; j<children.length; j++)
    {
        if(children[i] > children[j])
        {
            var aux = children[i]
            children[i] = children[j]
            children[j] = aux;
        }
    }
}

result = ''
for (const x of children)
{
    result += 'filho ' + x + "\n"
}
console.log(result)

/* below let an empty line... :-/ */
