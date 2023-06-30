/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 */

    // [], 0
    // []

    // [3,3], 6
    // [0,1]

    // [1, 2], 5
    // []

    // [3], 3
    // [0]

const twoSum = function(nums, target) {
        const map = {};

        for (let i = 0; i < nums.length; i++) {
            const difference = target - nums[i]; // недостающее до target число

            if (difference in map) {
                // если такое число уже есть в map то возвращаем его индекс и индекс текущего элемента итерации
                return [map[difference], i];
            }

            map[nums[i]] = i; // на каждой итерации добавляем в map число и его индекс
        }

        return [];
    };

const example = [0, 9, 2,7,11,15];

console.log(twoSum(example, 9))
