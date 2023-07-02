# string-compression.md

+ [string-compression](#string-compression)

## string-compression

https://leetcode.com/problems/string-compression/

<details><summary>Test Cases</summary><blockquote>

``` javascript
    // []
    // 0 ([])

    // ["a", "b", "b", "c"]
    // 4 (["a", "b", "2", "c"])

    // ["a"]
    // 1 (["a"])

    // ["b","b","b","b","b","b","b","b","b","b"]
    // 3 (["b","1","0","b","b","b","b","b","b","b"])
```

</blockquote></details>

``` javascript
const compress = (chars) => {
    let s = ""; // строка с результатом
    let counter = 1; // подсчет количества встретившихся символов

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === chars[i+1]) { // если символы одни и те же увеличиваем счетчик
            counter++;
        } else { // если диапазон повторяющихся символов подошел к концу
            if (counter === 1) { // если символ встретился только 1 раз, то в строку-результат добавляем только символ без цифры
                s += chars[i];
            } else if (counter >= 10) { // если символ встретился 10 и больше раз
                const separatelyCounter = counter.toString().split(''); // число счетчика превращаем в отдельные цифры  ("12" -> ["1", "2"])
                s += chars[i];  // добавляем в строку-результат символ

                for (let j = 0; j < separatelyCounter.length; j++){
                 s += separatelyCounter[j]; // добавляем в строку-результат наши отдельные цифры по порядку
                }
            } else {
                s += chars[i] + counter.toString(); // если символ встретился > 1 и < 10 раз, то добавляем в результирующую строку этот символ и счетчик
            }

            counter = 1;  // возвращаем счетчик к изначальному значению, чтобы считать следующий диапазон
        }

        for (let ind = 0; ind < s.length; ind++) {
            chars[ind] = s[ind]; // модифицируем входящий массив так, чтобы его первые элементы были равны элементам нашей результирующей строки
        }
    }

    return s.length;
}
```
