/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const obj = {}
  for (let index = 0; index < nums.length; index++) {
    const item = nums[index];
    const other = target - item
    if (obj[other] !== undefined) {
      return [obj[other], index]
    } else {
      obj[item] = index
    }
  }
  return []
};
// @lc code=end

