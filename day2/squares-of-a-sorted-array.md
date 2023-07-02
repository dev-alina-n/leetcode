# squares-of-a-sorted-array.md

+ [squares-of-a-sorted-array](#squares-of-a-sorted-array)

## squares-of-a-sorted-array

https://leetcode.com/problems/squares-of-a-sorted-array

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // [0, 6, 2]
    // [0, 4, 36]

    // []
    // []

    // [-2, -10, 0]
    // [0, 4, 100]
```

</blockquote></details>

``` javascript
const sortedSquares = function(nums) {
        // возводим каждый элемент в квадрат с помощью метода map и сортируем получившийся массив с помощью sort
        return nums.map(el => el**2).sort((a,b) => a - b);
    };
```
