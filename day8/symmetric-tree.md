# symmetric-tree.md

+ [symmetric-tree](#symmetric-tree)

## symmetric-tree

https://leetcode.com/problems/symmetric-tree

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // root = [1,2,2,3,4,4,3]
    // true

    // root = [1,2,2,null,3,null,3]
    // false

    // root = [1,null, null]
    // true

    // root = [null]
    // true
```

</blockquote></details>

``` javascript
const isSymmetric = function(root) {
        const isMirror = (node1, node2) => {
            if (node1 === null && node2 === null) return true;
            if (node1 === null || node2 === null) return false;

            return (node1.val === node2.val) && isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);
        }

        return isMirror(root.left, root.right);
    };
```


