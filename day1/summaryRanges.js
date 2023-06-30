/**
 * You are given a sorted unique integer array nums.
 *
 * A range [a,b] is the set of all integers from a to b (inclusive).
 *
 * Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
 *
 * Each range [a,b] in the list should be output as:
 *
 * "a->b" if a != b
 * "a" if a == b
 */

    // []
    // []

    // [1,10]
    // ["1", "10"]

    // [1,2,3,6,9,10]
    // ["1->3", 6, "9->10"]

    // [-1]
    // ["-1"]

const summaryRanges = function(nums) {
        let begin = nums[0]; //начало диапазона
        const resArr = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i + 1] - nums[i] !== 1) { // проверяем что элементы идут с шагом 1
                if (nums[i] === begin) { // проверяем что это диапазон из одного числа
                    resArr.push(String(nums[i]));
                } else {
                    resArr.push(`${begin}->${nums[i]}`); // если начало и конец - разные числа, то это диапазон и мы его пушим
                }

                begin = nums[i + 1]; // переставляем begin на начало нового диапазона
            }
        }

        return resArr;
};

const example = [1, 1, 7, 7];
console.log(summaryRanges(example));

