# binary-search.md

+ [binary-search](#binary-search)

## binary-search

https://leetcode.com/problems/binary-search

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // [7], target = 3
    // -1

    // [-10, 5, 8, 13, 400], target = 8
    // 2
```

</blockquote></details>

``` javascript
const search = function(nums, target) {
        let left = 0; // указатель от начала массива
        let right = nums.length - 1; // указатель с конца массива
        let mid; // указатель на середину

        while (left <= right) {
            // находим середину диапазона:
            // 1. вычисляем длину текущего диапазона (right - left)
            // 2. делим на 2 и округляем значение, чтобы получилось целое число (Math.round((right - left) / 2))
            // 3. прибавляем позицию левого указателя
            mid = Math.round((right - left) / 2) + left;

            if (target === nums[mid]) { // если число посередине === искомому числу
                return mid; // возвращаем его индекс
            } else if (target < nums[mid]) { // если искомое число меньше числа посередине
                right = mid - 1; // уменьшаем диапазон поиска (те отбрасываем все числа, которые были правее середины)
            } else { // если искомое число больше числа посередине
                left = mid + 1; // отбрасываем все числа, которые были левее середины
            }
        }

        // если искомого числа нет в массиве, возвращаем -1
        return -1;
    };
```
