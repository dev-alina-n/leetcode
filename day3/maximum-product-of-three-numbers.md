# maximum-product-of-three-numbers.md

+ [maximum-product-of-three-numbers](#maximum-product-of-three-numbers)

## maximum-product-of-three-numbers

https://leetcode.com/problems/maximum-product-of-three-numbers

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // [2, 2, 5]
    // 20

    // [-1, 6, 1, 0, 5]
    // 30
```

</blockquote></details>

``` javascript
const maximumProduct = function(nums) {
        let max1 = -Infinity;
        let max2 = -Infinity;
        let max3 = -Infinity;

        // нужно только 2 минимальных числа потому что 3 отрицательных числа даст минус
        let min2 = Infinity;
        let min1 = Infinity;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > max1) { // если текущий элемент итерации больше max1
                [max1, max2, max3] = [nums[i], max1, max2]; // то записываем вместо max1 - nums[i], вместо max2 - max1, вместо max3 - max2
            } else if (nums[i] > max2) { // если текущий элемент итерации больше max2 (и меньше max1)
                [max2, max3] = [nums[i], max2];  // то записываем вместо max2 - nums[i], вместо max3 - max2
            } else if (nums[i] > max3) {  // если текущий элемент итерации больше max3 (и меньше max1 и max2)
                max3 = nums[i]; // то записываем вместо max3 - nums[i]
            }
            if (nums[i] < min1) { // если текущий элемент итерации меньше чем наше самое минимальное число
                [min2, min1] = [min1, nums[i]]; // то записываем вместо самого минимального числа - nums[i]
            } else if (nums[i] < min2) { // если текущий элемент итерации меньше чем min2
                min2 = nums[i]; // то записываем вместо max3 - nums[i]
            }
        }

        return Math.max(max1 * max2 * max3, max1 * min1 * min2); // возвращаем самое большое произведение чисел с помощью Math.max
    };
```
