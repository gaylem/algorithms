//* Leetcode 49 - Group Anagrams - Easy

// https://leetcode.com/problems/group-anagrams/

/* Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters. */

//* O(N*K*log(K)) time complexity and O(N*K) space complexity
var groupAnagrams = function (strs) {
  const anagramGroups = {};

  for (const str of strs) {
    const sortedStr = str.split('').sort().join('');

    if (!anagramGroups[sortedStr]) {
      anagramGroups[sortedStr] = [str];
    } else {
      anagramGroups[sortedStr].push(str);
    }
  }
  return Object.values(anagramGroups);
};

//* O(N*K) time and space complexity
var groupAnagramsBetter = function (strs) {
  const anagramGroups = {};

  for (const str of strs) {
    const charCount = Array(26).fill(0);

    for (const char of str) {
      const charIndex = char.charCodeAt(0) - 'a'.charCodeAt(0);
      charCount[charIndex]++;
    }
    const key = charCount.join('');
    if (!anagramGroups[key]) {
      anagramGroups[key] = [];
    }
    anagramGroups[key].push(str);
  }
  console.log(anagramGroups);
  return Object.values(anagramGroups);
};


const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
const result = groupAnagramsBetter(strs);
console.log(result);