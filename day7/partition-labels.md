# partition-labels.md

+ [partition-labels](#partition-labels)

## partition-labels

https://leetcode.com/problems/partition-labels

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // s = "ababcbacadefegdehijhklij"
    // [9,7,8]

    // s = "eccbbbbdec"
    // [10]

    // s = "aaaaaaaarrrb"
    // [8, 3, 1]

    // s = "a"
    // [1]
```

</blockquote></details>

``` javascript
const partitionLabels = function(s) {
        let map = new Map();
        let result = [];
        let size = 0; // размер получившейся подстроки
        let end = 0; // последний индекс на котором встречается один из символов текущей подстроки

        for(let i = 0; i < s.length; i++) {
            map.set(s[i], i); // напр., если s = "aaaaaaaarrrb", то map получится { 'a' => 7, 'r' => 10, 'b' => 11 }
        }

        for(let j = 0; j < s.length; j++) {
            size += 1;
            end = Math.max(end, map.get(s[j]));

            if(j === end) {
                result.push(size);
                size = 0;
            }
        }

        return result;
    };
```


