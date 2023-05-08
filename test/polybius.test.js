// Write your tests here!

const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("polybius() tests written by Michael", () => {
  describe("error handling", () => {
    it("should return false if no input is given", () => {
      const actual = polybius();
      const expected = false;
      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const inputMsg = "hiYA";
      const inputDecodeBoolean = false;

      const actual = polybius(inputMsg);
      const expected = "32424511";
      expect(actual).to.equal(expected);
    });

    it("should return false if length of returned string, excluding spaces, is an odd number", () => {
      const inputMsg = "2345 2351343411225";
      const expected = false;
      const inputDecodeBoolean = false;
      const actual = polybius(inputMsg, inputDecodeBoolean);

      expect(actual).to.equal(expected);
    });

    it(" result should be a string", () => {
        const inputMsg = "Hiya";

        const actual = polybius(inputMsg);
        const expected = "string";
        expect(typeof actual).to.equal(expected);
      });
  });

  describe("encoding", () => {
    it("should encode i and j to 42 ", () => {
      const inputMsg = "Hiya";
      const inputDecodeBoolean = false;

      const actual = polybius(inputMsg);
      const expected = "32424511";
      expect(actual).to.equal(expected);
    });

    it("maintain spaces in the message after encoding", () => {
      const inputMsg = "my message";
      const actual = polybius(inputMsg);
      const expected = "2345 23513434112251";

      expect(actual).to.equal(expected);
    });

    describe("decoding", () => {
      it("maintain spaces in the message after decoding", () => {
        const inputMsg = "2345 23513434112251";
        const expected = "my message";
        const inputDecodeBoolean = false;
        const actual = polybius(inputMsg, inputDecodeBoolean);

        expect(actual).to.equal(expected);
      });

      it("should decode 42 to (i/j)", () => {
        const inputMsg = "32424511";
        const inputDecodeBoolean = false;

        const actual = polybius(inputMsg, false);
        const expected = "hi,jya";
        expect(actual).to.equal(expected);
      });
    });
  });
});
