//** Leetcode 217 - Contains Duplicate - Easy -------------------------------------------// 

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
  console.log(nums);
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

//** Leetcode 242 - Valid Anagram - Easy -------------------------------------------// 

// https://leetcode.com/problems/valid-anagram/description/

/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case? */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// O(s + t) time complexity and O(s) space complexity
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const hashMapS = {};
  const hashMapT = {};

  for (let i = 0; i < s.length; i++) {
    hashMapS[s[i]] ? hashMapS[s[i]]++ : (hashMapS[s[i]] = 1);
    hashMapT[t[i]] ? hashMapT[t[i]]++ : (hashMapT[t[i]] = 1);
  }

  for (const key in hashMapS) {
    if (hashMapS[key] !== hashMapT[key]) return false;
  }

  return true;
};

const s = 'anagram';
const t = 'nagaram';

// const s = "rat";
// const t = "car";

console.log(isAnagram(s, t));

// Alternative O(s + t) time complexity and O(s) space complexity solution

var isAnagramAlt = function (s, t) {
  if (s.length !== t.length) return false;

  const charCount = {};

  // Count occurrences of characters in string s
  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Decrement character counts for string t
  for (const char of t) {
    if (!charCount[char]) return false; // Character not in s
    charCount[char]--;
  }

  // Check if all character counts are zero
  for (const char in charCount) {
    if (charCount[char] !== 0) return false;
  }

  return true;
};

// Sorting and comparing the strings would be O(s log s + t log t) time complexity and O(s + t) space complexity

const isAnagramSorted = function (s, t) {
  const sSorted = s.split('').sort().join('');
  const tSorted = t.split('').sort().join('');

  return sSorted === tSorted;
};

console.log(isAnagramSorted(s, t));

// For unicode characters:

var isAnagramUnicode = function (s, t) {
  if (s.length !== t.length) return false;

  const charCount = new Map();

  // Count occurrences of characters in string s
  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Decrement character counts for string t
  for (const char of t) {
    if (!charCount.has(char)) return false; // Character not in s
    charCount.set(char, charCount.get(char) - 1);
  }

  // Check if all character counts are zero
  for (const [char, count] of charCount) {
    if (count !== 0) return false;
  }

  return true;
};
