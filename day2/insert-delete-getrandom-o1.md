# insert-delete-getrandom-o1.md

+ [insert-delete-getrandom-o1](#insert-delete-getrandom-o1)

## insert-delete-getrandom-o1

https://leetcode.com/problems/insert-delete-getrandom-o1

<details><summary>Test Cases</summary><blockquote>

``` javascript
// const param_1 = obj.insert(5);
// true

// const param_2 = obj.insert(5);
// false

// const param_3 = obj.insert(1);
// true

// const param_4 = obj.remove(3);
// true

// const param_5 = obj.getRandom();
// 1
```

</blockquote></details>

``` javascript
const RandomizedSet = function() {
    this.map = new Map();
};

RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) return false;

    this.map.set(val);
    return true;
};

RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) return false;

    this.map.delete(val);
    return true;
};

RandomizedSet.prototype.getRandom = function() {
    const randomIndex = (Math.floor(Math.random() * this.map.size)) + 1;
    let counter = 1;

    for (const [key, value] of this.map) {
        if (counter === randomIndex) {
            return key;
        } else {
            counter++;
        }
    }
};
```
