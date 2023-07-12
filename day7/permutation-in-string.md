# permutation-in-string.md

+ [permutation-in-string](#permutation-in-string)

## permutation-in-string

https://leetcode.com/problems/permutation-in-string

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // s1 = "ab", s2 = "eidbaooo"
    // true

    // s1 = "ab", s2 = "eidboaoo"
    // false

    // s1 = "a", s2 = "b"
    // false

    // s1 = "a", s2 = "a"
    // true
```

</blockquote></details>

``` javascript
const checkInclusion = function(s1, s2) {
        if (s1.length > s2.length) return false;

        let map = new Map(); // храним сколько повторялся каждый символ в s1
        let left = 0;
        let right = 0;
        let count = s1.length;

        for (let el of s1) {
            if (map.has(el)){
                map.set(el, map.get(el) + 1);
            } else {
                map.set(el, 1);
            }
        }

        while (right < s2.length) {
            if (map.get(s2[right]) > 0) count--;

            map.set(s2[right], (map.get(s2[right] || 0) - 1));

            if (count === 0) return true; // если count === 0 значит мы нашли нужные символы

            if ((right - left + 1) >= s1.length) { // если размер диапазона больше или равен s1
                if (map.get(s2[left]) >= 0) count++;

                map.set(s2[left], map.get(s2[left] || 0) + 1);

                left++;
            }

            right++;
        }

        return false;
    };
```


