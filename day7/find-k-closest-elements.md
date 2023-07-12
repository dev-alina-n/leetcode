# find-k-closest-elements.md

+ [find-k-closest-elements](#find-k-closest-elements)

## find-k-closest-elements

https://leetcode.com/problems/find-k-closest-elements

<details><summary>Test Cases</summary><blockquote>

``` javascript
 // arr = [1,2,3,4,5], k = 4, x = 3
 // [1,2,3,4]

 // arr = [1,2,3,4,5], k = 4, x = -1
 // [1,2,3,4]

 // arr = [1,2,3], k = 2 , x = 2
 // [1,2]

 // arr = [1,2,3,4,5], k = 3 , x = 4
 // [3,4,5]
 
 // arr = [1,2,3,4,8], k = 3 , x = 6
 // [3,4,8]
```

</blockquote></details>

``` javascript
const findClosestElements = function(arr, k, x) {
        while (arr.length > k) {

            // метод Math.abs() возвращает абсолютное значение числа
            let diffEnd = Math.abs(arr[arr.length-1] - x);
            let diffStart = Math.abs(arr[0] - x);
            
            if (diffEnd < diffStart) {
                arr.shift();
            } else if (diffEnd >= diffStart) {
                arr.pop();
            }
        }

        return arr;
    };
```


