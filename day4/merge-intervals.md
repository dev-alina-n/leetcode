# merge-intervals.md

+ [merge-intervals](#merge-intervals)

## merge-intervals

https://leetcode.com/problems/merge-intervals

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // [[1,3]]
    // [[1,3]]

    // [[1,4],[4,5]]
    // [[1,5]]

    // [[1,3],[2,6],[8,10],[15,18]]
    // [[1,6],[8,10],[15,18]]
    
    // [[1,4], [4,8], [10,15], [15,20]]
    // [[1,8], [10,20]]
```

</blockquote></details>

``` javascript
const merge = function(intervals) {
        // сортируем массив чтобы диапазоны шли от меньшего к большему
        intervals = intervals.sort((a, b) => a[0] - b[0]);

        let previous = intervals[0]; // указатель на предыдущий массив
        const result = [previous];

        for (let el of intervals){
            if (el[0] <= previous[1]){ // если начало текущего диапазона <= концу предыдущего диапазона
                previous[1] = Math.max(previous[1], el[1]); // проверяем что больше конец предыдущего диапазона или конец текущего и записываем это значение в качестве конца текущего диапазона
            } else {
                result.push(el); // пушим текущий диапазон полностью в результирующий массив
                previous = el; // передвигаем previous дальше
            }
        }

        return result;
    };
```
