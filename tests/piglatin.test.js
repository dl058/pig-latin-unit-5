const { translate, isFirstVowel } = require("../src/piglatin.js");

describe(`At least five(5) tests for words starting with different vowels.`, () => {
  test(`translate("apple") → "appleway"`, () => {
    const result = translate("apple");
    expect(result).toBe("appleway");
  });
  test(`translate("elephant") → "elephantway"`, () => {
    const result = translate("elephant");
    expect(result).toBe("elephantway");
  });
  test(`translate("igloo") → "iglooway"`, () => {
    const result = translate("igloo");
    expect(result).toBe("iglooway");
  });
  test(`translate("octopus") → "octopusway"`, () => {
    const result = translate("octopus");
    expect(result).toBe("octopusway");
  });
  test(`translate("umbrella") → "umbrellaway"`, () => {
    const result = translate("umbrella");
    expect(result).toBe("umbrellaway");
  });
});
// ---------------------------------------------------
describe("At least two (2) tests for words starting with one consonant.", () => {
  test(`translate("giraffe") → "iraffegay"`, () => {
    expect(translate("giraffe")).toBe("iraffegay");
  });
});

describe("isfirstvowel function", () => {
  test("apple returns true", () => {
    expect(isFirstVowel("apple")).toBe(true);
  });
  test("banana returns false", () => {
    expect(isFirstVowel("banana")).toBe(false);
  });
});

// ----------------------------------
describe("At least one (1) test for words starting with two consonants.", () => {
  test(`translate("ghost") → "ostghay"`, () => {
    expect(translate("ghost")).toBe("ostghay");
  });
});
