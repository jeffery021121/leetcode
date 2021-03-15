/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}




/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {// l1,l2也是链表
  // 两数相加，返回结果得是一个链表
  // 链表一定要有链头和链尾
  // 操作链尾，返回链头
  let head, tail
  let carry = 0
  while (l1 || l2 || carry) {
    const num1 = l1 ? l1.val : 0
    const num2 = l2 ? l2.val : 0
    const sum = num1 + num2 + carry
    carry = sum >= 10 ? 1 : 0
    const val = sum % 10
    if (!head) {
      head = tail = new ListNode(val)
    } else {
      tail.next = new ListNode(val)
      tail = tail.next
    }

    l1 = l1 && l1.next
    l2 = l2 && l2.next
  }
  return head
}

const arr1 = [9, 9, 9, 9, 9, 9, 9]
const arr2 = [9, 9, 9, 9]

const creatNL = (array) => {
  let head, tail
  let num = 0
  head = tail = new ListNode(array[0])
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (!head) {
      head = tail = new ListNode(element)
    } else {
      tail.next = new ListNode(array[index + 1])
      /*
      第二次的时候这里因为head=tail,
      所以直接执行tail.next赋值，相当于把head.next也赋值了
      h.next
      h.next.next
      h.next.next.next
     */
      tail = tail.next // 这里成链
      /* 
      1 tail = head 
      2 tail = head.next
      3 tail = head.next.next
      3 tail = head.next.next.next
      */
    }
  }
  return head
}

const l1 = creatNL(arr1)
const l2 = creatNL(arr2)

const listNode2Arr = (listNode) => {
  let arr = []
  while (listNode) {
    arr.push(listNode.val)
    listNode = listNode.next
  }
  return arr
}

console.log(listNode2Arr(addTwoNumbers(l1, l2)))



// [7,0,8]
// @lc code=end

