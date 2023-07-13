# generate-parentheses.md

+ [generate-parentheses](#generate-parentheses)

## generate-parentheses

https://leetcode.com/problems/generate-parentheses

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // n = 1
    // ["()"]

    // n = 3
    // ["((()))","(()())","(())()","()(())","()()()"]
```

</blockquote></details>

``` javascript
const generateParenthesis = function(n) {
        const result = [];

        const generate = (left, right, str) => {
            if (left > right) return; // если '(' больше чем ')', то строка невалидная

            if (left === 0 && right === 0) { // если мы использовали все количество заданных скобок - строка готова
                result.push(str);
            }

            if (left > 0) generate(left - 1, right, str + '(');
            if (right > 0) generate(left, right - 1, str + ')');
        };

        generate(n, n, '');

        return result;
    };
```


