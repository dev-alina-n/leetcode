# binary-tree-level-order-traversal.md

+ [binary-tree-level-order-traversal](#binary-tree-level-order-traversal)

## binary-tree-level-order-traversal

https://leetcode.com/problems/binary-tree-level-order-traversal

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // [3,9,20,null,null,15,7]
    // [[3],[9,20],[15,7]]

    // [1]
    // [[1]]

    // []
    // []
```

</blockquote></details>

``` javascript
const levelOrder = function(root) {
        if (!root) return [];

        const result = [];
        const queue = [root];

        while (queue.length) {
            let queueLength = queue.length;
            const row = [];

            for (let i = 0; i < queueLength; i++) { // итерируемся по queue
                let current = queue.shift(); // достаем первый элемент из queue
                row.push(current.val); // пушим его в row

                // если есть поддерево (слева или справо) то добавяем его в очередь
                if (current.left) queue.push(current.left);
                if (current.right) queue.push(current.right);
            }

            result.push(row);
        }

        return result;
    };
```


