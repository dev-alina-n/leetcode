# maximize-distance-to-closest-person.md

+ [maximize-distance-to-closest-person](#maximize-distance-to-closest-person)

## maximize-distance-to-closest-person

https://leetcode.com/problems/maximize-distance-to-closest-person

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // [0, 1]
    // [1]

    // [1, 0, 0, 0, 1]
    // 2

    // [0, 0, 0, 1]
    // 3
```

</blockquote></details>

``` javascript
const maxDistToClosest = function(seats) {
    const zerosArr = seats.join('').split('1'); // убираем из массива seats единицы и объединяем каждый промежуток с 0 в отдельный элемент массива (напр., [1,0,0,0,1,0,1] -> ['','000','0',''])
    const freeSeatsLength = zerosArr.map(el => el.length > 0 ? Math.ceil(el.length / 2) : 0); // считаем длину свободных мест между занятыми креслами. Math.ceil округляет в большую сторону, те если 3 / 2 то Math.ceil отдаст 2
    return Math.max( // выбираем наибольшее значение
            zerosArr.shift().length,
            zerosArr.pop().length,
            ...freeSeatsLength
        )
    };
```


