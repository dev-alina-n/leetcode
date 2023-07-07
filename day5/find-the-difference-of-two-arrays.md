# find-the-difference-of-two-arrays.md

+ [find-the-difference-of-two-arrays](#find-the-difference-of-two-arrays)

## find-the-difference-of-two-arrays

https://leetcode.com/problems/find-the-difference-of-two-arrays

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // [1,1,1,2,3] [1,2]
    // [[3], []]

    // [4,5,6] [5,7,9]
    // [[4,6], [7,9]]
```

</blockquote></details>

``` javascript
const findDifference = function(nums1, nums2) {
        const set1 = new Set(nums1); // оставляем только уникальные значения из nums1
        const set2 = new Set(nums2); // оставляем только уникальные значения из nums2

        for (let el of nums1) { // итерируемся по первому массиву
            if (set2.has(el)) { // если во втором сете уже есть такое значение
                // удаляем это значение из обоих сетов
                set1.delete(el);
                set2.delete(el);
            }
        }

        // возвращаем массивы из set1 и set2, тк там остались только те элементы, которые не встречались в других массивах
        return [Array.from(set1), Array.from(set2)];
    };
```
