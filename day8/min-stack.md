# min-stack.md

+ [min-stack](#min-stack)

## min-stack

https://leetcode.com/problems/min-stack

<details><summary>Test Cases</summary><blockquote>

``` javascript
const obj = new MinStack();
obj.push(4)
obj.push(9)
obj.push(7);
obj.pop();
const param_1 = obj.top(); // -> 9
const param_2 = obj.getMin(); // -> 4
```

</blockquote></details>

``` javascript
const MinStack = function() {
    this.stack = [];
    this.min = [];
};

MinStack.prototype.push = function(val) {
    this.stack.push(val);

    if (!this.min.length || val <= this.min[this.min.length - 1]) this.min.push(val);
};

MinStack.prototype.pop = function() {
    const removedValue = this.stack.pop();

    if (removedValue === this.min[this.min.length - 1]) this.min.pop();
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1];
};

```


