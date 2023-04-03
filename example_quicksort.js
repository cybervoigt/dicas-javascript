/**
 * I read a post about quicksort with Javascript,
 * comparing the functions 'splice' and 'push' when coding the QuickSort
 * https://www.linkedin.com/feed/update/urn%3Ali%3Aactivity%3A7046704923937284098/
 * https://pt.wikipedia.org/wiki/Quicksort
 * 
 * 
 * Javascript array methods:
 *  https://www.w3schools.com/js/js_array_methods.asp
 *  - The pop() method removes the last element from an array
 *  - The push() method adds a new element to an array (at the end)
 *  - The shift() method removes the first array element and "shifts" all other elements to a lower index.
 *  - The concat() method creates a new array by merging (concatenating) existing arrays
 *  - The flat() method creates a new array with sub-array elements concatenated to a specified depth.
 *  - The splice() method adds new items to an array.
 *  - The slice() method slices out a piece of an array.
 * 
 */


// create an array with 1000 random items
// Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
const list = [];
while (list.length < 100)
{
    list.push( Math.floor(Math.random() * 10000) );
}

console.log( "ORIGINAL/RANDOM List:", list );


// Let's do it
quick_sort_01( list, 0, list.length-1 );

function quick_sort_01( aList, iBegin, jEnd )
{
    let i = iBegin;
    let j = jEnd;
    const pivot = aList[ Math.floor( (i+j) / 2 ) ];
    while(i < j)
    {
        while(aList[i] < pivot && i < jEnd)
        {
            i++;
        }
        while(aList[j] > pivot && j > iBegin)
        {
            j--;
        }
        if(i <= j)
        {
            // switch...
            var aux = aList[i];
            aList[i] = aList[j];
            aList[j] = aux;
            i++;
            j--;
        }
    }
    if(iBegin < j)
    {
        quick_sort_01(aList, iBegin, j);
    }
    if(i < jEnd)
    {
        quick_sort_01(aList, i, jEnd);
    }
}


console.log( "Q-SORTED List : ", list );


// TODO: quick_sort_02
