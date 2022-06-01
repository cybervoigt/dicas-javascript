/**
 *  "Practice test" of Turing.com platform code tests...
 * 
 * 1) open brackets must be closed by the same type of brackets
 * 2) open brackets must be closed in the correct order
 * 
 * examples:
 * s = "{[())}" => invalid
 * s = "{[](){()}[({})]}()" => valid
 * s = "{[]{}([])}" => valid...
 * 
 * strategic: for each open bracket, I count how many chars there are until the respective close bracket
 * this quantity must be EVEN
 * How to be sure about what is the exact closing bracket? jumping new open and close brackets "inside"...
 * 
 * 
 */


 function findCloseBracket(sx,i,endBracket){
    var result = true;

    var found = false;
    var jump = 0;
    var j = i+1;
    var countInside = 0;
    while (j < sx.length && found==false) {
        if(sx[j] == sx[i]) {
            jump++;
        }
        if(sx[j] == endBracket) {
            if(jump == 0) {
                found = true;
            } else {
                jump--;
                j++;
                countInside++;
            }
        }else{
            j++;
            countInside++;
        }
    }
    if(found==false){
        result = false;
    }else{
        if(countInside > 1 && countInside %2 != 0){
            result = false;
        }
    }
    return result;
}

const isValid = function(s){

    // leap size...
    var result = (s.length%2==0);

    let i = 0;
    while (i < s.length && result == true) {

        switch(s[i]){
            case "{":
                result = findCloseBracket(s,i,"}");
            break;
            case "(":
                result = findCloseBracket(s,i,")");
            break;
            case "[":
                result = findCloseBracket(s,i,"]");
            break;
        }

        i++;
    }

    return result;
}

// {}()[]
//var s = "{}";
var s = "{[((])}]" // invalid
//var s = "{[](){()}[({})]}([])" // valid
//var s = "{[]{}([])}" // valid...
// var s = '('

if (isValid(s)) {
    console.log('is valid... :-))))');
}else{
    console.log('invalid... :-((((');
}

