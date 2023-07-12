# lru-cache.md

+ [lru-cache](#lru-cache)

## lru-cache

https://leetcode.com/problems/lru-cache

<details><summary>Test Cases</summary><blockquote>

``` javascript
/**
const obj = new LRUCache(2);
const param_1 = obj.get(3); // -> -1 (нет такого ключа)
obj.put(1,1);
obj.put(2,2);
const param_2 = obj.get(1); // -> 1
const param_3 = obj.get(2); // -> 2
 */
```

</blockquote></details>

``` javascript
const LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

LRUCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        let value = this.cache.get(key);

        this.cache.delete(key);
        this.cache.set(key, value);

        return value;
    } else {
        return -1;
    }
};

LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);

    this.cache.set(key, value);

    if (this.cache.size > this.capacity) {
        this.cache.delete(this.cache.keys().next().value); // keys().next().value возвращает ключ первого элемента
    }
};
```


