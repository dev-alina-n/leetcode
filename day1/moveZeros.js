/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 */

    // []
    // []

    // [1,2,3]
    // [1,2,3]

    // [5,0]
    // [5,0]

    // [4,0,9,0,7]
    // [4,9,7,0,0]


const moveZeroes = function(nums) {
        let counter = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) {  // if current number in the array !== 0
                nums[counter] = nums[i]; // move current number to the beginning of the array
                counter++; // move the counter to the next index
            }
        }

        for (let i = counter; i < nums.length; i++) { // loop through the array starting from the last non-zero element
            nums[i] = 0; // replace the remaining elements with 0
        }

        return nums;
    };

const example = [5,5];
console.log(moveZeroes(example));
