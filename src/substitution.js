// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here

    //check inputs
    if (!input || !alphabet) {
      return false;
    }
    if (alphabet) {
      if (alphabet.length != 26) {
        return false;
      }
      const alphabetCharacters = alphabet.split("");
      const alphabetSet = new Set(alphabetCharacters);

      const uniqueCharacters = Array.from(alphabetSet);
      const uniqueCharactersCount = [];

      uniqueCharacters.forEach((character) => {
        let characterCount = 0;
        alphabetCharacters.forEach((alphabetChar) => {
          if (character === alphabetChar) {
            characterCount++;
          }
        });
        uniqueCharactersCount.push(characterCount);
      });

      if (uniqueCharactersCount.filter((count) => count > 1).length > 1) {
        return false;
      }
    }

    //create standard alphabet array
    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const letters = standardAlphabet.split("");
    const normalizeAlphabet = alphabet.toLowerCase();
    const splitCodes = normalizeAlphabet.split("");

    //create switch for special characters
    let specialChar;

    //split input message into an array of characters
    const normalizeMsg = input.toLowerCase();
    const inputCharacters = normalizeMsg.split("");
    const inputIndicies = [];

    const resultArray = [];

    if (encode === true) {
      //get input character indicies
      inputCharacters.forEach((character) => {
        if (standardAlphabet.includes(character)) {
          inputIndicies.push(letters.indexOf(character));
        } else {
          switch (character) {
            case "!":
              specialChar = "!";
              break;
            case "@":
              specialChar = "@";
              break;
            case "#":
              specialChar = "#";
              break;
            case "$":
              specialChar = "$";
              break;
            case "%":
              specialChar = "%";
              break;
            case "^":
              specialChar = "^";
              break;
            case "&":
              specialChar = "&";
              break;
            case "*":
              specialChar = "*";
              break;
            case " ":
              specialChar = " ";
              break;
            case ".":
              specialChar = ".";
              break;
            case ",":
              specialChar = ",";
              break;
            case "1":
              specialChar = "1";
              break;
            case "2":
              specialChar = "2";
              break;
            case "3":
              specialChar = "3";
              break;
            case "4":
              specialChar = "4";
              break;
            case "5":
              specialChar = "5";
              break;
            case "6":
              specialChar = "6";
              break;
            case "7":
              specialChar = "7";
              break;
            case "8":
              specialChar = "8";
              break;
            case "9":
              specialChar = "9";
              break;
            case "0":
              specialChar = "0";
          }
          inputIndicies.push(specialChar);
        }
      });

      //create encoded character array
      inputIndicies.forEach((value) => {
        let num = parseInt(value);

        if (isNaN(num)) {
          resultArray.push(value);
        } else {
          resultArray.push(splitCodes[num]);
        }
      });
      //join encoded characters into single message
      const result = resultArray.join("");
      return result;
    } else {
    //get input character indicies
    inputCharacters.forEach((character) => {
      if (alphabet.includes(character)) {
        inputIndicies.push(splitCodes.indexOf(character));
      } else {
        switch (character) {
          case "!":
            specialChar = "!";
            break;
          case "@":
            specialChar = "@";
            break;
          case "#":
            specialChar = "#";
            break;
          case "$":
            specialChar = "$";
            break;
          case "%":
            specialChar = "%";
            break;
          case "^":
            specialChar = "^";
            break;
          case "&":
            specialChar = "&";
            break;
          case "*":
            specialChar = "*";
            break;
          case " ":
            specialChar = " ";
            break;
          case ".":
            specialChar = ".";
            break;
          case ",":
            specialChar = ",";
            break;
          case "1":
            specialChar = "1";
            break;
          case "2":
            specialChar = "2";
            break;
          case "3":
            specialChar = "3";
            break;
          case "4":
            specialChar = "4";
            break;
          case "5":
            specialChar = "5";
            break;
          case "6":
            specialChar = "6";
            break;
          case "7":
            specialChar = "7";
            break;
          case "8":
            specialChar = "8";
            break;
          case "9":
            specialChar = "9";
            break;
          case "0":
            specialChar = "0";
        }
        inputIndicies.push(specialChar);
      }
    });

    //create decoded character array
    inputIndicies.forEach((value) => {
      let num = parseInt(value);

      if (isNaN(num)) {
        resultArray.push(value);
      } else {
        resultArray.push(letters[num]);
      }
    });
    //join encoded characters into single message
    const result = resultArray.join("");
    return result;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
