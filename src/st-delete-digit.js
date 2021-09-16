import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let res = 0
  let sum = 0
  let arr = Array.from(String(n))

  for (let i = 0; i < arr.length; i++) {
    arr.splice(i, 1)
    sum = arr.reduce((a, b) => a + b)
    if (sum > res) res = sum
    arr = Array.from(String(n))
  }
  return Number(res)
}
