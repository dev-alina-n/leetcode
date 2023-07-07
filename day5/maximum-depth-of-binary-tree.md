# maximum-depth-of-binary-tree.md

+ [maximum-depth-of-binary-tree](#maximum-depth-of-binary-tree)

## maximum-depth-of-binary-tree

https://leetcode.com/problems/maximum-depth-of-binary-tree

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // [3,9,20,null,null,15,7]
    // 3

    // [1,null,2]
    // 2

    // []
    // 0
```

</blockquote></details>

``` javascript
const maxDepth = function(root) {
        if (root === null) return 0; // если поддерево пустое - возвращаем 0

        let leftDepth = maxDepth(root.left); // вызываем нашу функцию для left child
        let rightDepth = maxDepth(root.right); // вызываем нашу функцию для right child

        // выбираем наибольшее значение между левым и правым поддеревом и добавляем 1 (тк считаем еще и текущую ноду)
        return Math.max(leftDepth, rightDepth) + 1;
    };
```
