import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  members = members.filter(el => typeof el === 'string').map(el => el.trim());
  let str = ''
  for (let member of members) { 
    if (member.charAt(0) == member.charAt(0)) {
      str += member.charAt(0).toUpperCase()
    }
  }
  return str.split('').sort().join('')
}
