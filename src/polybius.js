// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here

    //write initial input test
    if (!input) {
      return false;
    }

    //Check if encoded message is an even length minus any spaces
    if (encode == false && input.includes(" ")) {
      const splitInput = input.split("");
      const spaceCount = splitInput.filter(
        (character) => character == " "
      ).length;
      const inputDivisible = (input.length - spaceCount) / 2;
      if (!Number.isInteger(inputDivisible)) {
        return false;
      }
    }

    //create array variables for encoded letters
    const alphabetArray = [
      ["a", "f", "l", "q", "v"],
      ["b", "g", "m", "r", "w"],
      ["c", "h", "n", "s", "x"],
      ["d", ["i", "j"], "o", "t", "y"],
      ["e", "k", "p", "u", "z"],
    ];

    if (encode == true) {
      /*Encode message 
    Break message down into an array of characters*/
      const normalizedMsg = input.toLowerCase();
      const splitMsg = normalizedMsg.split("");

      //console.log(splitMsg);

      //Loop through message characters
      const encodedCharacters = splitMsg.map((character) => {
        let characterCode = " ";
        let i = "";
        let j = "";
        //Find corresponding encoded letter

        alphabetArray.forEach((col, index, collection) => {
          i = index + 1;
          col.forEach((currentLetter, index, collection) => {
            j = index + 1;
            //Loop through letter array for i and j characters
            if (typeof currentLetter == "object") {
              currentLetter.forEach((letter) => {
                if (character == letter) {
                  characterCode = `${i}${j}`;
                  return characterCode;
                }
              });
            } else if (character == currentLetter) {
              //Retrieve the i and j index and combine them into a single string
              characterCode = `${i}${j}`;
              return characterCode;
            }
          });
          if (characterCode !== " ") {
            return characterCode;
          }
        });
        return characterCode;
      });

      return encodedCharacters.join("");
    } else {


      /*Decode message 
    Break message down into an array of characters*/
      const msgCodes = [];
      const msgCharacters = [];
      const splitMsg = input.split("");
      for (let i = 0; i < splitMsg.length; i += 2) {
        if (splitMsg[i] == " ") {
          msgCodes.push(` `);
          i--;
        } else {
          msgCodes.push(`${splitMsg[i]}${splitMsg[i + 1]}`);
        }
      }

      //Loop through message codes
      msgCodes.forEach((code) => {
        if (code !== " ") {
          //adding this because Qualified is throwing errors with string.at(index) syntax that isn't an issue locally
          const codeArray = code.split("");
          let i = parseInt(codeArray[0]);
          let j = parseInt(codeArray[1]);
          msgCharacters.push(alphabetArray[i - 1][j - 1]);
        } else {
          msgCharacters.push(" ");
        }
      });
      const result = msgCharacters.join("");
      console.log(result);
      return result;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
