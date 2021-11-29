// 66. Plus One
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

/**
 * @param {number[]} digits
 * @return {number[]}
 */

const plusOne = (digits) => {
  // make a copy of digits and reverse
  const returnArray = [...digits].reverse();
  // add 1 to the first number in array
  returnArray[0] += 1;
  // check to see if the first digit is 10
  if (returnArray[0] === 10) {
    // check to see if it's the only number in array
    if (returnArray.length === 1) {
      return [1, 0];
    }
    // set 0 index to 0 and create a holder for 1
    returnArray[0] = 0;
    let holder = 1;
    // iterate through, adding 1 to next digit if needed
    for (let i = 1; i < returnArray.length; i += 1) {
      // add last holder, 0 or 1
      returnArray[i] += holder;
      // check to see if current number is 10, then adjust current value and holder accordingly
      if (returnArray[i] < 10) {
        holder = 0;
      } else {
        returnArray[i] = 0;
        holder = 1;
      }
    }
    // if holder still exists, push 1 to end
    if (holder === 1) returnArray.push(1);
    // check to see last index, if number is 10, then replace last index with 0, and push 1
    if (returnArray[returnArray.length - 1] === 10) {
      returnArray[returnArray.length - 1] = 0;
      returnArray.push(1);
    }
  }
  return returnArray.reverse();
};

module.exports = plusOne;
