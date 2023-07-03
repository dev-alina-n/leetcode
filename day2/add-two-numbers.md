# add-two-numbers.md

+ [add-two-numbers](#add-two-numbers)

## add-two-numbers

https://leetcode.com/problems/add-two-numbers

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // [1], [1]
    // [2]

    // [1, 2, 3], [4,5,6]
    // [5, 7, 9]
```

</blockquote></details>

``` javascript
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

    let resList = new ListNode();
    let head = resList;
    let carry = 0;
    let sum = 0;

    while (l1 || l2 || sum) {
        if (l1){ // если не дошли до конца l1
            sum += l1.val; // к переменной sum прибавляем текущее значение l1
            l1 = l1.next; // переходим к следующему элементу
        }
        if (l2) { // если не дошли до конца l2 то переходим к следующему элементу
            sum += l2.val; // к переменной sum прибавляем текущее значение l2
            l2 = l2.next; // переходим к следующему элементу
        }

        if (sum > 9) { // если sum = 10 и больше
            carry = 1; // запоминаем единицу в carry
            sum = sum - 10; // в sum оставляем вторую цифру (например, sum = 15 -> оставляем 5)
        }

        head.next = new ListNode(sum); // кладем нашу ноду в resList
        head = head.next; // переходим к следующему элементу в resList

        sum = carry; // кладем в sum число которое мы запомнили для следующего сложения(carry)
        carry = 0;
    }

    return resList.next;
```
