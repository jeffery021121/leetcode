/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
let s = "dvdf"
var lengthOfLongestSubstring = function (s) {
  let array = s.split('')
  let arr = [] // 滑块
  let max = 0 // 结果
  let cutLength = 0 // 控制值，要砍掉的小数组的长度
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    if (arr.includes(element)) {// arr中存在该字母
      // 记录长度
      cutLength = arr.indexOf(element)
      max = Math.max(max, cutLength, arr.length)
      // 操作数组，移除相同元素及其之前的元素
      arr = arr.splice(cutLength + 1)
    }
    // 无论如何新元素是要推入的
    arr.push(element)

  }
  max = Math.max(max, cutLength, arr.length)
  console.log('max:', max)
  return max
};

lengthOfLongestSubstring(s)
// @lc code=end

