# valid-parentheses.md

+ [valid-parentheses](#valid-parentheses)

## valid-parentheses

https://leetcode.com/problems/valid-parentheses

<details><summary>Test Cases</summary><blockquote>

``` javascript
 // "()"
 // true

 // "}"
 // false

 // ""
 // false

 // "})]"
 // false

 // "(] [] {)"
 // false

 // "]["
 // false

 // "({})"
 // true
```

</blockquote></details>

``` javascript
const isValid = function(s) {
    if (!s.length || s.length % 2 !== 0) return false; // если строка пустая или состоит из нечетного количества элементов
    const bracketsArr = []; // массив для хранения закрывающих скобок

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '('){
            bracketsArr.push(')');
        } else if (s[i] === '{') {
            bracketsArr.push('}');
        } else if (s[i] === '[') {
            bracketsArr.push(']');
        } else if (s[i] !== bracketsArr.pop()) { // если мы удаляем последнюю скобку в массиве и она не равна текущему элементу итерации то вся входящая строка не валидна
            return false;
        }
    }

    return !bracketsArr.length; // если bracketsArr - пустой, значит входящая строка была валидной тк каждая скобка имела закрывающую пару
};
```
