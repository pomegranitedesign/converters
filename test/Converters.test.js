// Imports
const {
  DecimalConverter,
  BinaryConverter
} = require("../index.js");
const { randomize } = require("../helpers");

// Tests
let assert = require("assert");

// Decimal Converter
describe("Decimal Converter Testing", () => {
  
  it("Should Convert Decimal To Binary", () => {
    let testingValue = "19283";
    let gotResult = new DecimalConverter(testingValue).toBinary();
    let expectedResult = "100101101010011";

    assert.equal(gotResult, expectedResult);
  });

  it("Should Convert Decimal To Octal", () => {
    let testingValue = "144";
    let gotResult = new DecimalConverter(testingValue).toOctal();
    let expectedResult = "220";

    assert.equal(gotResult, expectedResult);
  });

  it("Should Convert Decimal To HexaDecimal", () => {
    let testingValue = "144";
    let gotResult = new DecimalConverter(testingValue).toHexadecimal();
    let expectedResult = "90";

    assert.equal(gotResult, expectedResult);
  });

  it("Should Convert Decimal To Alphabetic Lowercase Letter", () => {
    let testingValue = "0";
    let gotResult = new DecimalConverter(testingValue).toAlphaLower();
    let expectedResult = "a";

    assert.equal(gotResult, expectedResult);
  });

  it("Should Convert Decimal To Alphabetic Uppercase Letter", () => {
    let testingValue = "0";
    let gotResult = new DecimalConverter(testingValue).toAlphaUpper();
    let expectedResult = "A";

    assert.equal(gotResult, expectedResult);
  });

  it("Should Convert Decimal To Alphabetic Character", () => {
    let testingValue = "22";
    let gotResult = new DecimalConverter(testingValue).toAlpha();
    let expectedResult = "w";

    assert.equal(gotResult, expectedResult);
  });

  it("Should Convert Decimal To Alphabetic Numeric Character", () => {
    let testingValue = "0";
    let gotResult = new DecimalConverter(testingValue).toAlphaNumeric();
    let expectedResult = "0";

    assert.equal(gotResult, expectedResult);
  });

});

// Binary Converter
describe("Binary Converter Testing", () => {
  it("Should Convert Binary To Octal", () => {
    let testingValue = "1011";
    let getResult = new BinaryConverter(testingValue).toOctal();
    let expectedResult = "13";

    assert.equal(getResult, expectedResult);
  });

  it("Should Convert Binary To Decimal", () => {
    let testingValue = "1011";
    let getResult = new BinaryConverter(testingValue).toDecimal();
    let expectedResult = "11";

    assert.equal(getResult, expectedResult);
  });

  it("Should Convert Binary To HexaDecimal", () => {
    let testingValue = "1111101111";
    let getResult = new BinaryConverter(testingValue).toHexadecimal();
    let expectedResult = "3ef";

    assert.equal(getResult, expectedResult);
  });

  it("Should Convert Binary To LowerCase Alphabetic Character", () => {
    let testingValue = "11";
    let getResult = new BinaryConverter(testingValue).toAlphaLower();
    let expectedResult = "d";

    assert.equal(getResult, expectedResult);
  });
});