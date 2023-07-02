# string-compression.md

+ [string-compression](#string-compression)

## string-compression

https://leetcode.com/problems/string-compression/

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // []
    // 0 ([])

    // ["a", "b", "b", "c"]
    // 4 (["a", "b", "2", "c"])

    // ["a"]
    // 1 (["a"])

    // ["b","b","b","b","b","b","b","b","b","b"]
    // 3 (["b","1","0","b","b","b","b","b","b","b"])
```

</blockquote></details>

``` javascript
const compress = (chars) => {
    let s = "";
    let counter = 1;

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === chars[i+1]) {
            counter++;
        } else {
            if (counter === 1) {
                s += chars[i];
            } else if (counter >= 10) {
                const separatelyCounter = counter.toString().split('');
                s += chars[i];

                for (let j = 0; j < separatelyCounter.length; j++){
                 s += separatelyCounter[j];
                }
            } else {
                s += chars[i] + counter.toString();
            }
            counter = 1;
        }
        
        for (let ind = 0; ind < s.length; ind++) {
            chars[ind] = s[ind];
        }
    }
    
    return s.length;
}
```
