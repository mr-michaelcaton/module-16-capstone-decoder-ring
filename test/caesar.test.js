// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

/*
Happy Path:
When given a message, shift amount, and encode/decode boolean, the function should return a altered message.

Constraints:
If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false.
Spaces should be maintained throughout, as should other nonalphabetic symbols.
Capital letters can be ignored.
If a letter is shifted so that it goes "off" the alphabet (e.g., a shift of 3 on the letter z), it should wrap around to the front of the alphabet (e.g., z becomes c).
*/

describe("caesar submission tests written by Michael", () => {
  it("should return false if any arguments are not given", () => {
    const actual = caesar();
    expect(actual).to.equal(false);
  });

  it("should return false if the character shift value is less than -25 or greater than 25", () => {
    const inputMsg = "Hello! How are you?";
    const inputShiftCount = -30;
    const inputDecodeBoolean = false;

    const actual = caesar(inputMsg, inputShiftCount, inputDecodeBoolean);
    expect(actual).to.equal(false);
  });

  it("should ignore capital letters in the encoded/decoded message", () => {
    const inputMsg = "ABcdefg";
    const inputShiftCount = 1;
    const inputDecodeBoolean = false;

    const actual = caesar(inputMsg, inputShiftCount);
    const expected = "bcdefgh";
    expect(actual).to.equal(expected);

  });

  it("should maintain spaces throughout the message", () => {
    const inputMsg = "ABc def g";
    const inputShiftCount = 1;
    const inputDecodeBoolean = false;

    const actual = caesar(inputMsg, inputShiftCount);
    const expected = "bcd efg h";
    expect(actual).to.equal(expected);

  });

  it("should maintain nonalphabetic characters throughout the message", () => {
    const inputMsg = "message!"
    const inputShiftCount = 3;
    const expected = "phvvdjh!"

    const actual = caesar(inputMsg,inputShiftCount);
    expect(actual).to.equal(expected);
  });
});
