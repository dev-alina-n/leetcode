# merge-k-sorted-lists.md

+ [merge-k-sorted-lists](#merge-k-sorted-lists)

## merge-k-sorted-lists

https://leetcode.com/problems/merge-k-sorted-lists

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // lists = [[1,4,5],[1,3,4],[2,6]]
    // [1,1,2,3,4,4,5,6]

    // lists = []
    // []

    // lists = [[]]
    // []
```

</blockquote></details>

``` javascript
const mergeLists = (l1, l2) => {
        let dummy = new ListNode();
        let current = dummy;

        while (l1 && l2) {
            if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }

            current = current.next;
        }

        current.next = l1 || l2;
        return dummy.next;
    };

// мержим по 2 LL пока не останется всего 1 (lists.length === 1)
const mergeKLists = function(lists) {
    if (!lists.length) return null;

    while (lists.length > 1) {
        let list1 = lists.shift(); // напр., на первой итерации, если lists = [[1,4,5],[1,3,4],[2,6]], то list1 = 1 -> 4 -> 5
        let list2 = lists.shift(); //  напр., на первой итерации, если lists = [[1,4,5],[1,3,4],[2,6]], то list2 = 1 -> 3 -> 4
        let merged = mergeLists(list1, list2); // 1 -> 1 -> 3 -> 4 -> 4 -> 5

        lists.push(merged);
    }

    return lists[0];
};
```


