# longest-substring-without-repeating-characters.md

+ [longest-substring-without-repeating-characters](#longest-substring-without-repeating-characters)

## longest-substring-without-repeating-characters

https://leetcode.com/problems/longest-substring-without-repeating-characters

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // s = "abcabcbb"
    // 3

    // s = "bbbbb"
    // 1

    // s = ""
    // 0

    // s = " "
    // 1

    // s = "12asd12"
    // 5

    // s = "a!23a!"
    // 4
```

</blockquote></details>

``` javascript
const lengthOfLongestSubstring = function(s) {
        const letters = new Map(); // записываем последний индекс каждой буквы
        let start = 0; // начальный индекс текущей подстроки
        let maxSubstrLength = 0;

        for (let i = 0; i < s.length; i++) {
            if (letters.has(s[i])) {
                start = Math.max(letters.get(s[i]) + 1, start); // Math.max предотвращает движение start назад
            }

            letters.set(s[i], i);
            maxSubstrLength = Math.max(i - start + 1, maxSubstrLength);
        }

        return maxSubstrLength;
    };
```


