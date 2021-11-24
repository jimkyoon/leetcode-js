/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLastWord = (s) => {
  // split string into array by spaces and then filter out remaining spaces
  const sArray = s.split(' ').filter((a) => a !== '');
  // grab the last word and return the length of the string
  return sArray[sArray.length - 1].length;
};

module.exports = lengthOfLastWord;
