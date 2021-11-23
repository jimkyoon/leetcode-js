// 53. Maximum Subarray
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.

/**
 * @param {number[]} nums
 * @return {number}
 */

const maxSubArray = (nums) => {
  // set the return sum to start with the first number in array
  let sum = nums[0];
  // have current value start with the first number, in this case, sum
  let current = sum;
  // loop through the rest of the array
  for (let i = 1; i < nums.length; i += 1) {
    // check to see if the index number + current value is lower than index number
    if (nums[i] > nums[i] + current) {
      // if it is, set the new current value to the index value
      current = nums[i];
    } else {
      // if not, then we add to the current variable
      current += nums[i];
    }
    // after that is finished, check to see which is bigger, sum or current and then reassign
    sum = Math.max(sum, current);
  }
  return sum;
};
