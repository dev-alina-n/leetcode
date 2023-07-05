# subarray-sum-equals-k.md

+ [subarray-sum-equals-k](#subarray-sum-equals-k)

## subarray-sum-equals-k

https://leetcode.com/problems/subarray-sum-equals-k

<details><summary>Test Cases</summary><blockquote>

``` javascript
 // [1], k = 1;
 // 1

 // [1, 2, 3], k = 3
 // 2

 // [0, 1], k = 5
 // 0
```

</blockquote></details>

``` javascript
const subarraySum = function(nums, k) {
        let sum = 0;
        let count = 0;
        let map = {0: 1}; // (ключ - сумма, значение - сколько раз сумма встретилась)

        for (let i = 0; i < nums.length; i++) {
            sum += nums[i]; // складываем в sum каждый элемент итерации (плюсуем)

            if (map[sum - k]) { // если sum - k существует в map
                count += map[sum - k]; // увеличиваем счетчик на map[sum - k]
            }
            // добавляем текущую sum в map (если текущей sum не существует в map то инициализируем как 1)
            map[sum] = (map[sum] ? map[sum] + 1 : 1);
        }

        return count;
};
```
