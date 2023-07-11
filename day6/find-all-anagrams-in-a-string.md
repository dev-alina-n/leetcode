# find-all-anagrams-in-a-string.md

+ [find-all-anagrams-in-a-string](#find-all-anagrams-in-a-string)

## find-all-anagrams-in-a-string

https://leetcode.com/problems/find-all-anagrams-in-a-string

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // s = "cbaebabacd", p = "abc"
    // [0, 6]

    // s = "abab", p = "ab"
    // [0, 1, 2]

    // s = "efcklkchck", p = "ck"
    // [2, 5, 8]

    // s = "a", p = "b"
    // []

    // s = "a", p = "a"
    // [0]
```

</blockquote></details>

``` javascript
const findAnagrams = function(s, p) {
        const charsObj = {};
        const resArr = [];
        let count = p.length; // количество символов необходимых для составления анаграммы
        let left = 0;
        let right = 0;

        // записываем каждую букву в charsObj (ключ - буква, значение - сколько раз она встретилась в p)
        for (let el of p) {
            if (el in charsObj) {
                charsObj[el]++;
            } else {
                charsObj[el] = 1;
            }
        }

        while (right < s.length) {

            // если текущая буква есть в p и нам необходимо ее использовать, то уменьшаем count
            if (charsObj[s[right]] > 0) count--;

            charsObj[s[right]]--; // уменьшаем необходимое количество текущего символа
            right++; // двигаем указатель правее

            // есть анаграмма начинающаяся с левого указателя
            if (count === 0) resArr.push(left);

            if (right - left === p.length) {

                // если символ по левому указателю был нужен для формирования анаграммы, то увеличиваем count
                if (charsObj[s[left]] >= 0) count++;

                charsObj[s[left]]++;
                left++;
            }
        }

        return resArr;
    };
```


