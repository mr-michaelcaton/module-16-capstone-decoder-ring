// Write your tests here!
const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("substitution() tests written by Michael", () => {
  describe("error handling", () => {
    it("should return false if given alphabet isn't exactly 26 characters long", () => {
        const inputMsg = "disappointment";
        const alphabet = "plmoknijbuhv";
        const encode = false;
        
        const actual = substitution(inputMsg,alphabet);
      const expected = false;
      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const inputMsg = "Disappointment";
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        const encode = false;

      const actual = substitution(inputMsg, alphabet);
      const expected = "disappointment";
      expect(actual).to.equal(expected);
    });

    it("should return false if there are duplicate characters in the alphabet", () => {
        const inputMsg = "disappointment";
        const alphabet = "pplmoknijbuhv";
        const encode = false;
        const actual = substitution(inputMsg,alphabet);
      const expected = false;
      expect(actual).to.equal(expected);
    });

    it("should return false if either the input message or alphabet are missing", () => {
        const actual = substitution();
      const expected = false;
      expect(actual).to.equal(expected);
    });

  });

  describe("encoding", () => {
    it("maintain spaces in the message after encoding", () => {
        const inputMsg = "my message";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(inputMsg, alphabet);
        const expected = "yp ysii.rs";
    });

});

    describe("decoding", () => {
      it("maintain spaces in the message after decoding", () => {
        const inputMsg = "yp ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const encode = false;

        const expected = "my message";
        const actual = substitution(inputMsg, alphabet, encode);

        expect(actual).to.equal(expected);
      });

  });
});
