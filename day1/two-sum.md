# two-sum.md

+ [two-sum](#two-sum)

## two-sum

https://leetcode.com/problems/two-sum/

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // [], 0
    // []

    // [3,3], 6
    // [0,1]

    // [1, 2], 5
    // []

    // [3], 3
    // [0]
```

</blockquote></details>

``` javascript
const twoSum = function(nums, target) {
        const map = {};

        for (let i = 0; i < nums.length; i++) {
            const difference = target - nums[i]; // недостающее до target число

            if (difference in map) {
                // если такое число уже есть в map то возвращаем его индекс и индекс текущего элемента итерации
                return [map[difference], i];
            }

            map[nums[i]] = i; // на каждой итерации добавляем в map число и его индекс
        }

        return [];
    };
```
