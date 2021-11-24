// 27. Remove Element
// Given an array nums and a value val, remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const removeElement = (nums, val) => {
  // two pointers
  let index = 0;
  let tally = 0;
  while (index < nums.length) {
    // if current value in array isnt target, set the last place via tally to the current value and increment tally
    if (nums[index] !== val) {
      // removed next line since prompt only asked to return the length of remaining non target numbers
      // nums[tally] = nums[index];
      tally += 1;
    }
    // go to next value
    index += 1;
  }
  // return the tally of values after "filtering"
  return tally;
};

module.exports = removeElement;
