/**
 * Based on this post, by Erick Wendel
 * https://www.linkedin.com/posts/erickwendel_regularexpressions-regex-100daysofcode-activity-6960582138492542976-dp5O/?utm_source=linkedin_share&utm_medium=member_desktop_web
 */

const word1 = 'hello';
const word2 = 'world';

// solution 0 "You could use named groups and reach strings as variables in complex replaces and matches"
function firstUpper(word) {
    return word.replace(/(?<first>\w{1})(?<rest>.*)/,
    (...args) => {
      const [{ first, rest }] = args.reverse();
      return `${first.toUpperCase()}${rest.toLowerCase()}`;
    }
   );
}
console.log('RegExp:',firstUpper(word1), ' ', firstUpper(word2));


// solution 1 "slowest,complex and unecessary"
function firstUpper01(word) {
    return word.split('').map(
        (char,index) => !index?char.toUpperCase() : char
    ).join('');
}
console.log('01:',firstUpper01(word1), ' ', firstUpper01(word2));


// solution 2 "too complex"
function firstUpper02(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}
console.log('02:',firstUpper02(word1), ' ', firstUpper02(word2));


// solution 3 "also too complex"
function firstUpper03(word) {
    const [first,...rest] = word;
    return first.toUpperCase() + rest.join('');
}
console.log('03:',firstUpper03(word1), ' ', firstUpper03(word2));


// solution 4 "EASIEST"
function firstUpper04(word) {
    return word.replace(/\w{1}/,
        (match) => match.toUpperCase()
        );
}
console.log('EASIEST:',firstUpper04(word1), ' ', firstUpper04(word2));

