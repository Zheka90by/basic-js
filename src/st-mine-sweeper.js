import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  let res = []
  for (let row = 0; row < matrix.length; row++) {
    let arr = []
    for (let col = 0; col < matrix[row].length; col++) {
      let counter = 0
      if (matrix[row - 1] !== undefined && matrix[row - 1][col - 1] !== undefined && matrix[row - 1][col - 1] === true) {
        counter++
      }
      if (matrix[row - 1] !== undefined && matrix[row - 1][col] === true) {
        counter++
      }
      if (matrix[row - 1] !== undefined && matrix[row - 1][col + 1] !== undefined && matrix[row - 1][col + 1] === true) {
        counter++
      }
      if (matrix[row][col - 1] !== undefined && matrix[row][col - 1] === true) {
        counter++
      }
      if (matrix[row][col + 1] !== undefined && matrix[row][col + 1] === true) {
        counter++
      }
      if (matrix[row + 1] !== undefined && matrix[row + 1][col - 1] !== undefined && matrix[row + 1][col - 1] === true) {
        counter++
      }
      if (matrix[row + 1] !== undefined && matrix[row + 1][col] === true) {
        counter++
      }
      if (matrix[row + 1] !== undefined && matrix[row + 1][col + 1] !== undefined && matrix[row + 1][col + 1] === true) {
        counter++
      }
      arr.push(counter)
    }
    res.push(arr)
  }
  return res
}
