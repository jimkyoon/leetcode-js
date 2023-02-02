// 1. Two Sum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// hash table version
// time complexity O(n) | space complexity O(n)
const twoSum = (nums, target) => {
  // memo will keep track of complementary numbers
  const memo = {};
  for (let i = 0; i < nums.length; i += 1) {
    const complement = target - nums[i];
    // if the memo object has the complement, return the value and current index
    if (complement in memo) return [memo[complement], i];
    // else, store in memo the current number and its index
    memo[nums[i]] = i;
  }
  // return string if none are found
  return 'None found';
};

// // 2 loops version
// // time complexity O(n^2) | space complexity O(1)
// const twoSum = (nums, target) => {
//   // loop through the nums array
//   for (let i = 0; i < nums.length; i += 1) {
//     const firstNumber = nums[i];
//     // loop through the second array
//     for (let j = i + 1; j < nums.length; j += 1) {
//       const secondNumber = nums[j];
//       // check to see if i and j add up to the target
//       // if they do, return indicies
//       if (firstNumber + secondNumber === target) return [i, j];
//     }
//   }
//   // if the loops finish, then return none found
//   return 'None found';
// };

module.exports = twoSum;
