# find-the-prefix-common-array-of-two-arrays.md

+ [find-the-prefix-common-array-of-two-arrays](#find-the-prefix-common-array-of-two-arrays)

## find-the-prefix-common-array-of-two-arrays

https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // A = [1,3,2,4], B = [3,1,2,4]
    // [0, 2, 3, 4]

    // A = [5, 1, 8, 9], B = [5, 1, 7, 4]
    // [1, 2, 2, 2]

    // A = [1], B = [3]
    // [0]

    // A = [2,3,1], B = [3,1,2]
    // [0, 1, 3]
```

</blockquote></details>

``` javascript
const findThePrefixCommonArray = function(A, B) {
        const set = new Set();
        const resArr = [];
        let common = 0;

        for (let i = 0; i < A.length; i++) {
            const sizeBeforeIteration = set.size; // запимываем длину сета до добавления новых элементов

            // на каждой итерации кладем текущий элемент из A и B в сет
            set.add(A[i]);
            set.add(B[i]);

            // считаем количество добавленных общих элементов
            common += 2 - (set.size - sizeBeforeIteration);
            resArr.push(common);
        }

        return resArr;
    };
```


