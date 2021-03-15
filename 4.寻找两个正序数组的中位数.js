/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
// 寻找两个数组合并以后的中位数
// 合并，排序，根据奇偶计算结果
let arr = [...nums1,...nums2]
let brr = arr.sort((a,b)=>(a-b))
let result
const length = brr.length
if(length%2 === 0){
  result = brr[length / 2] + brr[length / 2 -1 ]
}
console.log(brr)
};
let nums1 = [1, 2, 3, 4, 5, 6]
let nums2 = [1, 2, 3, 4, 5, 6]
findMedianSortedArrays(nums1, nums2)
// @lc code=end

