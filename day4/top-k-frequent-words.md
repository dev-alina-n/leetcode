# top-k-frequent-words.md

+ [top-k-frequent-words](#top-k-frequent-words)

## top-k-frequent-words

https://leetcode.com/problems/top-k-frequent-words

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // ["birds"], k = 1
    // ["birds"]

    // ["i","love","leetcode","i","love","coding"], k = 2;
    // ["i","love"]
```

</blockquote></details>

``` javascript
const topKFrequent = function(words, k) {
        let wordsMap = new Map(); // в wordsMap будем хранить { строку: сколько раз она встретилась}

        for (let i = 0; i < words.length; i ++) {
            if (!wordsMap.has(words[i])) { // если строка встретилась впервые
                wordsMap.set(words[i], 1); // добавляем ее в wordsMap
            } else {
                wordsMap.set(words[i], wordsMap.get(words[i])+1); // либо увеличиваем значение на 1
            }
        }
                       // создаем массив вида [["key", "value"], ["key", "value"]]
        const sortedArr = Array.from(wordsMap).sort((a, b) =>
            a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]); // сортируем от максимального к минимальному (по убыванию)

        return sortedArr
            .slice(0,k) // количество элементов заданных числом k
            .map(el => el[0]); // возвращаем массив только со строками
    };
```
