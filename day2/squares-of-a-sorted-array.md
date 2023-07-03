# squares-of-a-sorted-array.md

+ [squares-of-a-sorted-array](#squares-of-a-sorted-array)

## squares-of-a-sorted-array

https://leetcode.com/problems/squares-of-a-sorted-array

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // [0, 2, 6]
    // [0, 4, 36]

    // []
    // []

    // [-2, -10, 0]
    // [0, 4, 100]
```

</blockquote></details>

``` javascript
const sortedSquares = function(nums) {
        let resArr = new Array(nums.length); // создаем новый массив с той же длиной что и у входящего массива nums
        let start = 0; // указатель на начало массива
        let end = resArr.length - 1; // указатель на конец массива

        for (let i = end; i >= 0; i--) { // двигаемся по resArr массиву с конца
            const squaredStart = nums[start] ** 2;  // возводим в квадрат элемент в начале массива nums
            const squaredEnd = nums[end] ** 2; // возводим в квадрат элемент в конце массива nums

            if (squaredStart > squaredEnd) { // если элемент в квадрате из начала массива больше чем элемент в квадрате с конца массива
                resArr[i] = squaredStart; // то записываем значение в resArr массив начиная с конца
                start++; // сдвигаем указатель правее
            } else { // если элемент в квадрате из конца массива больше чем элемент в квадрате из начала массива
                resArr[i] = squaredEnd;
                end--; // сдвигаем указатель левее
            }
        }

        return resArr;
    };
```
