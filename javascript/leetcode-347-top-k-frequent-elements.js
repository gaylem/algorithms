//* Leetcode 347 - Top K Frequent Elements - Medium

// https://leetcode.com/problems/top-k-frequent-elements/

/* Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

// Initialize object
// Loop through the array
// Add values to object and increment count each time you encounter the value
// while n < k
// Find the max and push to output array, then delete the property
// Keep doing this until k is reached
// return array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

 //* O(n log n) time complexity and O(n) space complexity
var topKFrequent = function (nums, k) {
  const hashmap = {};
  const output = [];

  for (let n of nums) {
    hashmap[n] = (hashmap[n] || 0) + 1;
  }

  // Sort the keys based on frequency
  const sortedKeys = Object.keys(hashmap).sort((a, b) => hashmap[b] - hashmap[a]);

  for (let i = 0; i < k; i++) {
    output.push(parseInt(sortedKeys[i]));
  }

  console.log(output);
  return output;
};

topKFrequent([1, 1, 1, 2, 2, 3], 2);

//* O(n) time and space complexity
var topKFrequentBetter = function (nums, k) {
  const hashmap = {};
  const buckets = new Array(nums.length + 1).fill(null).map(() => []);

  // Count the frequency of each number
  for (let n of nums) {
    hashmap[n] = (hashmap[n] || 0) + 1;
  }

  console.log('hashmap:', hashmap);

  // Place numbers in buckets based on their frequency
  for (let num in hashmap) {
    const frequency = hashmap[num];
    buckets[frequency].push(parseInt(num));
  }

  console.log('buckets:', buckets);

  // Collect the top k frequent numbers
  const output = [];
  for (let i = buckets.length - 1; i >= 0 && output.length < k; i--) {
    if (buckets[i].length > 0) {
      output.push(...buckets[i]);
    }
  }

  console.log('Top k frequent numbers:', output);
  return output;
};

topKFrequent([1, 1, 1, 2, 2, 3], 2);
