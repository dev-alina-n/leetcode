# summary-ranges.md

+ [summary-ranges](#summary-ranges)

## summary-ranges

https://leetcode.com/problems/summary-ranges/

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // []
    // []

    // [1,10]
    // ["1", "10"]

    // [1,2,3,6,9,10]
    // ["1->3", 6, "9->10"]

    // [-1]
    // ["-1"]
```

</blockquote></details>

``` javascript
const summaryRanges = function(nums) {
        let begin = nums[0]; //начало диапазона
        const resArr = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i + 1] - nums[i] !== 1) { // проверяем что элементы идут с шагом 1
                if (nums[i] === begin) { // проверяем что это диапазон из одного числа
                    resArr.push(String(nums[i]));
                } else {
                    resArr.push(`${begin}->${nums[i]}`); // если начало и конец - разные числа, то это диапазон и мы его пушим
                }

                begin = nums[i + 1]; // переставляем begin на начало нового диапазона
            }
        }

        return resArr;
};
```
