# maximum-average-subarray-i.md

+ [maximum-average-subarray-i](#maximum-average-subarray-i)

## maximum-average-subarray-i

https://leetcode.com/problems/maximum-average-subarray-i

<details><summary>Test Cases</summary><blockquote>

``` javascript
 // [3], k = 1;
 // 3

 // [6, 6], k = 2
 // 6

 // [2, 8, 5], k = 3;
 //  5

 // [1,2], k = 1;
 // 2
```

</blockquote></details>

``` javascript
const findMaxAverage = function(nums, k) {
        let max = -Infinity;
        let sum = 0; // для подсчета суммы k элементов
        let windowStart = 0; // начало подмассива с длиной k

        for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
            sum += nums[windowEnd]; // складываем в sum каждый элемент итерации (плюсуем)

            if (windowEnd - windowStart === k - 1) { // если мы достигли элемента с индексом k
                let average = sum / k; // делим получившийся sum на k по условию
                max = Math.max(max, average); // записываем большее из значений в max (сравниваем max / average)

                sum -= nums[windowStart]; // из sum вычитаем первый элемент текущего подмассива
                windowStart++; // сдвигаем указатель на подмассив дальше, чтобы получился новый отрезок сложения
            }
        }

        return max;
    };
```
