# group-anagrams.md

+ [group-anagrams](#group-anagrams)

## group-anagrams

https://leetcode.com/problems/group-anagrams

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // [""]
    // [[""]]

    // ["c"]
    // [["c"]]

    // ["a", "b"]
    // [["a"], ["b"]]

    // ["a", "a"]
    // [["a", "a"]]

    // ["eat","tea","tan","ate","nat","bat"]
    // [["bat"],["nat","tan"],["ate","eat","tea"]]
```

</blockquote></details>

``` javascript
const groupAnagrams = function(strs) {
        let res = {}; // объект где будут храниться анаграммы

        for (let el of strs) {
            let sortedStr = el.split('').sort().join(''); // сортируем строку в текущей итерации

            if (!res[sortedStr]) { // если в объекте res по ключу (отсортированная строка) нет значения
                res[sortedStr] = []; // то создаем его и кладем в него пустой массив
            }

            res[sortedStr].push(el); // по ключу (ключом является отсортированная строка) , пушим в значение строку текущей итерации (несортированная строка)
        }

        return Object.values(res); // возвращаем значения res в виде массива
    };
```
