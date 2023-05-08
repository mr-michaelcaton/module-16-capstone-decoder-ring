// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here

    if (shift === 0 || !shift || shift < -25 || shift > 25 || !input) {
      return false;
    }

    //if decoding a message, change the shift value to a negative number
    if (encode == false) {
      shift *= -1;
    }

    //create variables to hold a standard and shifted alphabet
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const characters = alphabet.split("");

    //split the input message into an array of characters
    const normalizedMsg = input.toLowerCase();
    const splitMsg = normalizedMsg.split("");

    //find the index of the message characters in the standard alphabet
    let characterIndicies = [];
    splitMsg.forEach((msgCharacter) =>
      characterIndicies.push(characters.indexOf(msgCharacter))
    );

    //Shift indicies of message characters by the shift value. Write appropriate conditional statements to wrap the indicies. Create two flows: one for encoding (positive shifts), and one for decoding (negative shif
    const encodedIndicies = characterIndicies.map((characterIndex) => {
      let trueShiftValue = 0;
      if (shift >= 0) {
        if (characterIndex !== -1 && characterIndex + shift > 25) {
          trueShiftValue = shift - (25 - characterIndex) - 1;
          characterIndex = trueShiftValue;
          return characterIndex;
        } else if (characterIndex !== -1) {
          characterIndex += shift;
          return characterIndex;
        } else {
          return characterIndex;
        }
      } else if (shift < 0 || encode === false) {
        if (characterIndex !== -1 && characterIndex + shift < 0) {
          trueShiftValue = 25 + (characterIndex + shift + 1);
          characterIndex = trueShiftValue;
          return characterIndex;
        } else if (characterIndex !== -1) {
          characterIndex += shift;
          return characterIndex;
        } else {
          return characterIndex;
        }
      }
    });

    //find the corresponding encoded character at the previous indicies & replace characters in the input message
    const encodedCharacters = encodedIndicies.map((index) => characters[index]);

    splitMsg.forEach((msgCharacter, index, collection) => {
      if (characterIndicies[index] !== -1) {
        splitMsg.splice(index, 1, encodedCharacters[index]);
      }
    });

    //Join the encoded characters into a single message
    const encodedMsg = splitMsg.join("");
    return encodedMsg;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
