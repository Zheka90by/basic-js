import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
    str = String(str);
    let res = "";
    if (!options.repeatTimes) {
        options.repeatTimes = 1;
    }

    if (!options.separator) {
        options.separator = "+";
    }

    if (options.addition === undefined) {
        options.addition = "";
    }

    if (!options.additionRepeatTimes) {
        options.additionRepeatTimes = 1;
    }

    if (!options.additionSeparator) {
        options.additionSeparator = "|";
    }

    for (let i = 0; i < options.repeatTimes; i++) {
        res += str;
        
        for (let j = 0; j < options.additionRepeatTimes; j++) {
            res += options.addition;
            if (j !== options.additionRepeatTimes - 1) {
                res += options.additionSeparator;
            }
        }
        if (i !== options.repeatTimes - 1) {
            res += options.separator;
        }
    }
    return res;
}
