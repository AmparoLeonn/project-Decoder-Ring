// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


const substitutionModule = (function () {
  let realAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function substitution(input, alphabet, encode = true) { //encode refers to whether you should encode or decode the message. By default it is set to true.
    if (!alphabet) return false;
    if (alphabet.length != 26) return false; //All the characters in the alphabet parameter must be unique. Otherwise, it should return false.
    for (let i = 0; i < input.length; i++) {
      if (alphabet.indexOf(input[i]) != alphabet.lastIndexOf(input[i]))
        return false;
    }    
    if (encode) return subEncode(input, alphabet);
    return subDecode(input, alphabet);
  }

  function subEncode(input, alphabet) {
    let codeMessage = [];
    input = input.toLowerCase();     //input refers to the inputted text to be encoded or decoded
    for (let i = 0; i < input.length; i++) {
      let codeIndex = realAlphabet.indexOf(input[i]);
      let codeLetter = alphabet[codeIndex];
      if (codeIndex < 0) {
        codeMessage.push(input[i]);
      }
      codeMessage.push(codeLetter);
      console.log(codeLetter);
    }
    return codeMessage.join("");
  }

  function subDecode(input, alphabet) {
    let decodeMessage = [];
    for (let i = 0; i < input.length; i++) {
      let decodeIndex = alphabet.indexOf(input[i]);
      let decodeLetter = realAlphabet[decodeIndex];
      if (decodeIndex < 0) {
        decodeMessage.push(input[i]);
      }
      decodeMessage.push(decodeLetter);
    }
    return decodeMessage.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
