/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */

    // ""
    // true

    // " "
    // true

    // "aA"
    // true

    // "A man, a plan, a canal: Panama"
    // true

    // "race car"
    // true

    // "race a car"
    // false

// const isPalindrome = function(s) {
//         const lowerCasedArr = s.toLowerCase().split('');
//
//         const cleanArr = lowerCasedArr.reduce((acc, el) => {
//             if (el.toLowerCase() !== el.toUpperCase()) {
//                 acc.push(el);
//             }
//             return acc;
//         },[])
//         console.log('+', cleanArr);
//
//         for (let i = 0; i < cleanArr.length; i++){
//             for (let j = cleanArr.length - 1; j > i; j--) {
//                 if (cleanArr[i] !== cleanArr[j]) {
//                     return false
//                 }
//             }
//             }
//             return true;
//     };

    // toReversed()
const isPalindrome = function(s) {
        const cleanStr = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase(); // оставляем в строке только буквы и числа, делаем нижний регистр

        // указатели на начало и конец строки
        let beginningPointer = 0;
        let endPointer = cleanStr.length - 1;

        while (beginningPointer < endPointer) { // используем цикл пока указатели не встретились в середине
            if (cleanStr[beginningPointer] !== cleanStr[endPointer]) return false; // если элементы указателей в какой-то момент не одинаковые значит строка не палиндром
            beginningPointer++;
            endPointer--;
        }

        return true;
    };

const example = "A man, a plan, a canal: Panama";
console.log(isPalindrome(example));



