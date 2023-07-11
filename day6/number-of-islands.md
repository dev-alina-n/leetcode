# number-of-islands.md

+ [number-of-islands](#number-of-islands)

## number-of-islands

https://leetcode.com/problems/number-of-islands

<details><summary>Test Cases</summary><blockquote>

``` javascript
/** grid = [
 ["1","1","1","1","0"],
 ["1","1","0","1","0"],
 ["1","1","0","0","0"],
 ["0","0","0","0","0"]
 ]

 Output: 1
 */


/** grid = [
 ["1","1","0","0","0"],
 ["1","1","0","0","0"],
 ["0","0","1","0","0"],
 ["0","0","0","1","1"]
 ]

 Output: 3
 */


/** grid = [
 ["1","1","0","1","1"],
 ["1","1","0","0","0"],
 ["1","0","1","1","0"],
 ["0","1","0","1","1"]
 ]

 Output: 4
 */
```

</blockquote></details>

``` javascript
// берем элемент с "1" -> превращаем в 0
const teraform = (rowIn, colIn, grid) => {
        if (grid[rowIn] === undefined || grid[rowIn][colIn] === undefined || grid[rowIn][colIn] === "0") return;

        grid[rowIn][colIn] = "0";

        // тоже самое с элементами снизу/сверху/справа/слева
        teraform(rowIn + 1, colIn, grid);
        teraform(rowIn - 1, colIn, grid);
        teraform(rowIn, colIn + 1, grid);
        teraform(rowIn, colIn  - 1, grid);
    }

const numIslands = function(grid) {
    let countIslands = 0;

    for (let rowIndex in grid) {
        for (let colIndex in grid[rowIndex]) {
            if (grid[rowIndex][colIndex] === '1'){
                countIslands++;
                teraform(parseInt(rowIndex), parseInt(colIndex), grid);
            }
        }
    }

    return countIslands;
};
```


