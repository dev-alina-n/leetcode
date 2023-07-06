# intersection-of-two-arrays-ii.md

+ [intersection-of-two-arrays-ii](#intersection-of-two-arrays-ii)

## intersection-of-two-arrays-ii

https://leetcode.com/problems/intersection-of-two-arrays-ii

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // [1] [1]
    // [1]

    // [2,2,3] [2,2,5]
    // [2,2]

    // [5,3,7] [4,3,1,7,5]
    // [3,5,7]
```

</blockquote></details>

``` javascript
const intersect = function(nums1, nums2) {
    let result = [];

        // создаем объект где ключи - числа входящего массива, а значения - сколько раз это число встретилось
        let map = nums1.reduce((acc, el) => {
            // если число уже нам встречалось, то увеличиваем значение на 1, в ином случае создаем ключ со значением 1
            acc[el] = acc[el] ? acc[el] + 1 : 1;

            return acc;
        }, {});

        for (let i = 0; i < nums2.length; i++) {
            const current = nums2[i]; // текущий элемент итерации

            if (map[current] && map[current] > 0) { // нашли пересекающийся элемент двух массивов
                result.push(current); // пушим его в result
                map[current] -= 1; // уменьшаем количество раз которое встретилось число на 1 (тк например число может встретиться в одном массиве 3 раза, в другом - 4)
            }
        }

    return result;
    };
```
