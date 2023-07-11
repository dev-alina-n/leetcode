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
const isValid = function(str) {
    const map = {
        '}' : '{',
        ']': '[',
        ')': '(',
    };
    const bracketsArr = [];

    for (let i = 0; i < str.length; i++) {
        if (map[str[i]]) { // если текущий элемент - закрывающая скобка
            let top = bracketsArr.length === 0 ? "#" : bracketsArr.pop();
            if (map[str[i]] !== top) {
                return false;
            }
        } else { // если текущий элемент - открывающая скобка
            bracketsArr.push(str[i]); 
        }
    }
    
    return bracketsArr.length === 0;
};
```
