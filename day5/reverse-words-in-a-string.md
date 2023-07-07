# reverse-words-in-a-string.md

+ [reverse-words-in-a-string](#reverse-words-in-a-string)

## reverse-words-in-a-string

https://leetcode.com/problems/reverse-words-in-a-string

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // "the sky is blue"
    // "blue is sky the"

    // "  hello world  "
    // "world hello"

    // "good   morning"
    // "morning good"

    // "A"
    // "A"

    // "2"
    // "2"

    // "3 snacks"
    // "snacks 3"
```

</blockquote></details>

``` javascript
const reverseWords = function(s) {
        const sArr = s.split(' '); // создаем массив, разделяя входящую строку по пробелу (те каждый элемент массива - это будет либо слово либо пробел)
        let resStr = '';

        for (let i = sArr.length-1; i >= 0; i--) { // итерируемся по sArr с конца, чтобы развернуть порядок слов
            if (sArr[i] !== '') { // проверяем что текущий элемент итерации - не пустая строка
                resStr += sArr[i] + " "; // кладем в результирующую строку текущее слово + пробел (тк слова должны разделяться одним пробелом)
            }
        }

        // возвращаем результирующую строку, убирая пробел после последнего слова
        return resStr.trim();
    };
```
