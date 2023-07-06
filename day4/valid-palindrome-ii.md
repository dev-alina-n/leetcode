# valid-palindrome-ii.md

+ [valid-palindrome-ii](#valid-palindrome-ii)

## valid-palindrome-ii

https://leetcode.com/problems/valid-palindrome-ii

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // "a"
    // true

    // "aba"
    // true

    // "abha"
    // true

    //"abhsa"
    // false
```

</blockquote></details>

``` javascript
const isPalindrome = (s, left, right) => {
        while (left < right) {
            if (s[left] !== s[right]) return false;

            left++;
            right--;
        }

        return true;
    }

const validPalindrome = function(s) {
    let left = 0; // указатель на начало строки
    let right = s.length-1; // указатель на конец строки

    while (left < right) {
        if (s[left] !== s[right]) { // если элемент вначале не равен элементу вконце

            // вызываем isPalindrome сдвигая левый указатель правее или указатель конца левее (тк по условию мы можем убрать один элемент)
            return isPalindrome(s, left+1, right) || isPalindrome(s, left, right-1);
        }

        left++;
        right--;
    }

    return true;
};
```
