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
const summaryRanges = (nums) => {
    const resArr = [];
    let i = 0, j = 0;

    while (j < nums.length) {
        if (nums[j] + 1 === nums[j + 1]) { // если элементы идут с шагом 1
            j++; // сдвигаем j дальше
        } else {
            if (i === j) { // если число всего одно в диапазоне
                resArr.push(`${nums[i]}`);
            } else { // если начало и конец - разные числа, то это диапазон и мы его пушим
                resArr.push(`${nums[i]}->${nums[j]}`);
            }

            i = ++j; // передвигаем i дальше
        }
    }

    return resArr;
}
```
