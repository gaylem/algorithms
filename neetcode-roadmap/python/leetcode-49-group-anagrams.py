# Leetcode 49 - Group Anagrams - Easy

# https://leetcode.com/problems/group-anagrams/

"""
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

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

"""

# Initialize an output object
# Loop through the array of strings
# split, sort, join each string
# If the output object does not include the sorted string, add it and assign its value to the unsorted string array
# If it does, then push the unsorted string to the existing array value
# return the values only

#* O(N*K*log(K)) time complexity and O(N*K) space complexity
class Solution(object):
    def group_anagrams(self, strs):
        output = {}
        for s in strs:
            sorted_str = ''.join(sorted(s))
            if sorted_str not in output:
                output[sorted_str] = [s]
            else:
                output[sorted_str].append(s)

        return list(output.values())

# Example usage:
solution = Solution()
result = solution.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
print(result)


#* O(N*K) time and space complexity

from collections import defaultdict

class Solution(object):
  def group_anagrams_better(self, strs):
      anagram_groups = defaultdict(list)

      for s in strs:
          char_count = [0] * 26

          for char in s:
              char_index = ord(char) - ord('a')
              char_count[char_index] += 1

          key = tuple(char_count)
          anagram_groups[key].append(s)

      return list(anagram_groups.values())


#* O(N*K) time and space complexity
from typing import List
import collections

class Solution:
    def group_anagrams_neetcode(self, strs: List[str]) -> List[List[str]]:
        ans = collections.defaultdict(list)

        for s in strs:
            count = [0] * 26
            for c in s:
                count[ord(c) - ord("a")] += 1
            ans[tuple(count)].append(s)
        return list(ans.values())

