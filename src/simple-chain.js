import { NotImplementedError } from '../extensions/index.js';

export default {
  chain: [],

  getLength() {
    return this.chain.length
  },

  addLink(value) {
    this.chain.push(`( ${value} )`)
    return this
  },

  removeLink(position) {
    if (position >= this.getLength() || position <= 0 || (typeof (position) !== 'number')) {
      this.chain = []
      throw new Error("You can't remove incorrect link!")
    }
    this.chain.splice(position - 1, 1)
    return this
  },

  reverseChain() {
    this.chain.reverse()
    return this
  },

  finishChain() {
    let res = this.chain.join('~~')
    this.chain = []
    return res
  }
};
