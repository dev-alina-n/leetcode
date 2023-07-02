# merge-two-sorted-lists.md

+ [merge-two-sorted-lists](#merge-two-sorted-lists)

## merge-two-sorted-lists

https://leetcode.com/problems/merge-two-sorted-lists

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // [1,2,5], [0,2,4]
    // [0,1,2,2,4,5]

    // [1], []
    // [1]

    // [], []
    // []
```

</blockquote></details>

``` javascript
const mergeTwoLists = function(list1, list2) {
        let node = new ListNode(); // создаем связный список
        let pointer = node;

        while (list1 && list2) { // если list1 или list2 === false то мы дошли до конца списка
            if (list1.val < list2.val) { // если значение в list1 меньше чем в list2
                pointer.next = list1;  // добавляем значение в наш новый связный список
                list1 = list1.next; // переходим к следующему элементу в list1
            } else {
                pointer.next = list2; // добавляем значение в наш новый связный список
                list2 = list2.next; // переходим к следующему элементу в list2
            }

            pointer = pointer.next; // перемещаем указатель дальше
        }

        pointer.next = list1 || list2; // перемещаем указатель на непустой связный список

        return node.next; // возвращаем node.next, тк head был инициализирован как null
};
```
