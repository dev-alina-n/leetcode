# validate-binary-search-tree.md

+ [validate-binary-search-tree](#validate-binary-search-tree)

## validate-binary-search-tree

https://leetcode.com/problems/validate-binary-search-tree

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // root = [2,1,3]
    // true

    // root = [5,1,4,null,null,3,6]
    // false

    // [null]
    // true
```

</blockquote></details>

``` javascript
const isValidBST = function(root, min = null, max = null) {
        if (root === null) return true; // если пустое дерево
        if ((min && min.val >= root.val) || (max && max.val <= root.val)) return false;

        return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
    };
```


