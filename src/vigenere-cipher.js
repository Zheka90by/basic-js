import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
export default class VigenereCipheringMachine {
  constructor(direct = true) {
    this.stright = direct;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw Error('Incorrect arguments!')
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    /*     let n = Math.ceil(message.length / key.length)
        message = message.toUpperCase();
        key = key.toUpperCase();
        let pos = 0
        let res = []
    
        for (let i = 0; i < message.length; i++) {
          let messagePos = alphabet.indexOf(message[i]);
          let keyPos = alphabet.indexOf(key[i]);
          pos = (messagePos + keyPos) % n
          res.push(alphabet[pos])
        } */
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw Error('Incorrect arguments!')
    }
    encryptedMessage = encryptedMessage.toUpperCase()
    key = key.toUpperCase()
    /*   
          let n = Math.ceil(encryptedMessage.length / key.length)
          encryptedMessage = encryptedMessage.toUpperCase();
          key = key.toUpperCase();
          let pos = 0
          let res = []
      
          for (let i = 0; i < encryptedMessage.length; i++) {
            let messagePos = alphabet.indexOf(encryptedMessage[i]);
            let keyPos = alphabet.indexOf(key[i]);
            pos = (messagePos + n - keyPos) % n
            res.push(alphabet[pos])
          } */
  }
}

