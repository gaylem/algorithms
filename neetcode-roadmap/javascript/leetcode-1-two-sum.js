//* Leetcode 1 - Two Sum - Easy 

// https://leetcode.com/problems/two-sum/

/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity? */

// var twoSum = function (nums, target) {
//   const results = [];
//   const output = [];

//   for (let i = 0; i < nums.length; i++) {
//     results.push(target - nums[i]);
//     if (results.includes(nums[i])) output.push(i);
//   }

//   return output;
// };

//* Brute force - O(n2) time complexity, O(1) space complexity
var twoSum1 = function (nums, target) {
  // nums.length - 1 prevents you from getting an undefined if j goes past the end of the array
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return []; // No solution found!
}

//* Hash Map - O(n) time and space complexity 
function twoSum2(nums, target) {
  // Create a Map
  const numToIndex = new Map();

  for (let i = 0; i < nums.length; i++) {
    // Calculate the difference
    const complement = target - nums[i];
    // Check if the Map contains the difference
    if (numToIndex.has(complement)) {
      // If it does, then return the compliments index and the current index
      return [numToIndex.get(complement), i];
    }
    // If it doesn't, then set it in the Map
    numToIndex.set(nums[i], i);
  }

  return []; // No solution found!
}

// nums = [2, 7, 11, 15];
// target = 9;

// const nums = [3, 2, 4];
// const target = 6;

// console.log(twoSum2(nums, target));

//* Two-Pointer - O(n log n) time complexity and O(n) space complexity
var twoSum3 = function(nums, target) {
  const numsWithIndex = nums.map((num, index) => [num, index]);
  numsWithIndex.sort((a, b) => a[0] - b[0]);
  console.log(numsWithIndex);

  let left = 0,
    right = nums.length - 1;
  
  while (left < right) {
    const sum = numsWithIndex[left][0] + numsWithIndex[right][0];
    if (sum === target) {
      return [numsWithIndex[left][1], numsWithIndex[right][1]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return []; // No solution found!
}

const nums = [3, 2, 4];
const target = 6;

console.log(twoSum3(nums, target));

//! Mistakes I made
// I should have just done a brute force nested loop but I tried to store the difference between the target and each element in an array