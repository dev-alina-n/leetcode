# longest-subarray-of-1s-after-deleting-one-element.md

+ [longest-subarray-of-1s-after-deleting-one-element](#longest-subarray-of-1s-after-deleting-one-element)

## longest-subarray-of-1s-after-deleting-one-element

https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // [1]
    // 0

    // [0,0]
    // 0

    // [0,1,1,0,0,1]
    // 2
```

</blockquote></details>

``` javascript
const longestSubarray = function(nums) {
        let start = 0; // указатель на первый элемент диапазона
        let timesToDelete = 1; // по условию мы можем удалить только 1 элемент массива
        let maxLength = 0; // длина самого длинного диапазона(подмассива)

        for(let i = 0; i < nums.length; i++){
            if (nums[i] === 0) timesToDelete--; // если мы встречаем 0 в текущем элементе, то уменьшаем timesToDelete на 1, те удаляем текущий элемент

            while(timesToDelete < 0){ // если timesToDelete < 0, то мы дошли до конца диапазона и удалили один 0
                if (nums[start] === 0) timesToDelete++; // если первый элемент диапазона === 0, мы увеличиваем timesToDelete на 1, чтобы мы имели возможность удалить ноль из нового диапазона
                start++; // сдвигаем первый элемент диапазона правее
            }

            maxLength = Math.max(maxLength, i - start); // смотрим что больше прошлый maxLength или длина текущего диапазона
        }

        return maxLength;
    };
```
