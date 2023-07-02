# reverse-linked-list.md

+ [reverse-linked-list](#reverse-linked-list)

## reverse-linked-list

https://leetcode.com/problems/reverse-linked-list

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // []
    // []

    // [1]
    // [1]

    // [2,5,9]
    // [9,5,2]
```

</blockquote></details>

``` javascript
const reverseList = function(head) {
        // два указателя для того чтобы запоминать предыдущий элемент и следующий
        let next = null;
        let previous = null;

        while(head) { // если head === false то мы дошли до конца списка
            next = head.next; //запоминаем следующий элемент
            head.next = previous; // теперь меняем указатель next со следующего элемента на предыдущий

            previous = head; // сдвигаем указатель предыдущего элемента дальше
            head = next; // сдвигаемся на следующий элемент
        }

        return previous;
    };
```
