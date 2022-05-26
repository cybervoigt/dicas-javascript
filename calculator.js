
/**
 * devPleno course on VanHack platform
 * "simulating like a class"
 * "it's better not use 'this' " :-/
 */


const calculator = function (initialValue) {
    let total = initialValue

    const sum = function (value) {
        total+= value
    }

    const multiply = value => {
        total*= value
    }

    return {
        sum,
        multiply,
        current : function () {
            return total;
        }
    }
}


const calc1 = calculator( 100 )

calc1.sum(99)

console.log(calc1.current())


