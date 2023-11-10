//* Leetcode 217 - Contains Duplicate - Easy 

// https://leetcode.com/problems/contains-duplicate/description/ 

/* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 
Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// O(n log n) time complexity, O(1) space complexity
const containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }
  return false;
};

// O(n) time and space complexity
const setSolution = function (nums) {
  let testSet = new Set(nums);
  return testSet.size !== nums.length;
};

nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));

//! Mistakes I Made
// Didn't read question thoroughly and mixed up which result should be true vs false


