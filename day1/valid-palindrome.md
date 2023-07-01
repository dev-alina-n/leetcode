# valid-palindrome.md

+ [valid-palindrome](#valid-palindrome)

## valid-palindrome

https://leetcode.com/problems/valid-palindrome/

<details><summary>Test Cases</summary><blockquote>

``` javascript
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
```

</blockquote></details>

``` javascript
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
    
    
    const isPalindromeV2 = function(s) {
    const cleanStr = s.toLowerCase().split('').reduce((acc, el) => { // делаем нижний регистр и превращаем строку в массив
        if ((el.charCodeAt(0) > 96 && el.charCodeAt(0) < 123) || (47 < el.charCodeAt(0) && el.charCodeAt(0) < 58)) { //оставляем в строке только буквы и числа
            acc += el;
        }
        return acc;
    }, "");

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
```
