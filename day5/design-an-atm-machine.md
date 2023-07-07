# design-an-atm-machine.md

+ [design-an-atm-machine](#design-an-atm-machine)

## design-an-atm-machine

https://leetcode.com/problems/design-an-atm-machine

``` javascript
const ATM = function() {
    this.bankNotesAmounts = new Array(5).fill(0); // [0,0,0,0,0]
    this.bankNotesDenominations = [20, 50, 100, 200, 500];
};

ATM.prototype.deposit = function(banknotesCount) {
    for (let i = 0; i < banknotesCount.length; i++) { // итерируемся по входящему массиву
        this.bankNotesAmounts[i] += banknotesCount[i]; // добавляем к существующему количеству банкнот внесенные деньги
    }
};

ATM.prototype.withdraw = function(amount) {
    let remain = amount; // сколько денег осталось отдать
    let usedBankNotes = new Array(5).fill(0); // результирующий массив
    let temp = [...this.bankNotesAmounts];

    for (let i = 4; i >= 0; i--) { // итерируемся от самой крупной валюты к меньшей

        // если оставшееся количество денег данного номинала в банкомате > 0 и количество необходимых для выдачи денег >= текущему номиналу итерации
        if (temp[i] > 0 && remain >= this.bankNotesDenominations[i]) {

            // считаем сколько банкнот нужно выдать и округляем значение в меньшую сторону
            const bankNote = Math.floor(remain / this.bankNotesDenominations[i]);

            // находим сколько банкнот мы можем отдать
            const maxCanUse = Math.min(temp[i], bankNote);

            usedBankNotes[i] = maxCanUse; // складываем в результирующий массив количество отданных банкнот текущего номинала
            temp[i] -= maxCanUse; // вычитаем из массива с количеством доступных в банкомате денег количество отданных наличных
            remain -= maxCanUse * this.bankNotesDenominations[i]; // вычитаем сумму отданных денег из remain

            if (remain === 0) { // если мы отдали нужную сумму денег
                this.bankNotesAmounts = temp; // обновляем количество денег в банкомате с учетом выданных
                return usedBankNotes;
            }
        }
    }

    // если remain не равен 0 - значит нет подходящих комбинаций валют и возвращаем -1 по условию
    return [-1];
};
```
