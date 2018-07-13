/*

  Created By: Dmitriy Shin.
  Date: July 9, 2018.
  
*/

function convert(input, source, target) {
  // This function has to be tested the last.
}

// Helpers
//////////
let Alphabet = {
  binary:        '01',
  octal:         '01234567',
  decimal:       '0123456789',
  hexa_decimal:  '0123456789abcdef',
  alpha_lower:   'abcdefghijklmnopqrstuvwxyz',
  alpha_upper:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  alpha:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  alpha_numeric: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

class DecimalConverter {
  constructor(decimal) {
    this.decimal = decimal;
  }
  
  // Methods
  toBinary() {
    let stringifiedDecimal = (+this.decimal.toString()).toString(2);

    return stringifiedDecimal;
  }

  toOctal() {
    let stringifiedDecimal = (+this.decimal.toString()).toString(8); // Convert the decimal to a string with base 8.

    return stringifiedDecimal;
  }

  toHexadecimal() {
    let stringifiedDecimal = (+this.decimal.toString()).toString(16); // Convert the decimal to a string with base 16.

    return stringifiedDecimal.toUpperCase();
  }

  toAlphaLower() {
    let stringifiedDecimal = this.decimal.toString();
    let alphaLowerArray = Object.keys(Alphabet.alpha_lower).map(key => {
      return Alphabet.alpha_lower[key];
    }); // Create an array of alphabetic lowercase characters of an Alphabet object.

    return stringifiedDecimal <= alphaLowerArray.length ? alphaLowerArray[stringifiedDecimal] : "An Error Occured...";
  }

  toAlphaUpper() {
    let stringifiedDecimal = this.decimal.toString();
    let alphaLowerArray = Object.keys(Alphabet.alpha_upper).map(key => {
      return Alphabet.alpha_upper[key];
    }); // Create an array of alphabetic uppercase characters of an Alphabet object.

    return stringifiedDecimal <= alphaLowerArray.length ? alphaLowerArray[stringifiedDecimal] : "An Error Occured...";
  }

  toAlpha() {
    let stringifiedDecimal = this.decimal.toString();
    let alphaLowerArray = Object.keys(Alphabet.alpha).map(key => {
      return Alphabet.alpha[key];
    }); // Create an array of alphabetic characters of an Alphabet object.

    return stringifiedDecimal <= alphaLowerArray.length ? alphaLowerArray[stringifiedDecimal] : "An Error Occured...";
  }

  toAlphaNumeric() {
    let stringifiedDecimal = this.decimal.toString();
    let alphaLowerArray = Object.keys(Alphabet.alpha_numeric).map(key => {
      return Alphabet.alpha_numeric[key];
    }); // Create an array of alphanumeric characters of an Alphabet object.

    return stringifiedDecimal <= alphaLowerArray.length ? alphaLowerArray[stringifiedDecimal] : "An Error Occured...";
  }
}

class BinaryConverter {
  constructor(binaryNumber) {
    this.binaryNumber = binaryNumber;
  }

  // Methods
  toOctal() {
    let result = parseInt(this.binaryNumber, 2).toString(8);

    return result;
  }

  toDecimal() {
    let result = parseInt(this.binaryNumber, 2).toString(10);

    return result;
  }

  toHexadecimal() {
    let result = parseInt(this.binaryNumber, 2).toString(16).toUpperCase();

    return result;
  }

  toAlphaLower() {
    let binaryToDecimal = this.toDecimal(); // Convert the binary to decimal.
    let alphabetLength = Alphabet.alpha_lower.length; // get the length of the lowercase characters.
    
    if(binaryToDecimal > alphabetLength) {
      return `An Error Occured`;
    } else {
      return Object
        .keys(Alphabet.alpha_lower)
        .map(key => {
          return Alphabet.alpha_lower[key];
        })[binaryToDecimal];
    }
  }

  toAlphaUpper() {
    let binaryToDecimal = this.toDecimal(); // Convert the binary to decimal.
    let alphabetLength = Alphabet.alpha_upper.length; // get the length of the lowercase characters.
    
    if(binaryToDecimal > alphabetLength) {
      return `An Error Occured`;
    } else {
      return Object
        .keys(Alphabet.alpha_upper)
        .map(key => {
          return Alphabet.alpha_upper[key];
        })[binaryToDecimal];
    }
  }

  toAlpha() {
    let binaryToDecimal = this.toDecimal(); // Convert the binary to decimal.
    let alphabetLength = Alphabet.alpha_upper.length; // get the length of the lowercase characters.
    
    if(binaryToDecimal > alphabetLength) {
      return `An Error Occured`;
    } else {
      return Object
        .keys(Alphabet.alpha)
        .map(key => {
          return Alphabet.alpha[key];
        })[binaryToDecimal];
    }
  }

  toAlphaNumeric() {
    let binaryToDecimal = this.toDecimal(); // Convert the binary to decimal.
    let alphabetLength = Alphabet.alpha_numeric.length; // get the length of the lowercase characters.
    
    if(binaryToDecimal > alphabetLength) {
      return `An Error Occured`;
    } else {
      return Object
        .keys(Alphabet.alpha_numeric)
        .map(key => {
          return Alphabet.alpha_numeric[key];
        })[binaryToDecimal];
    }
  }
}

class OctalConverter {
  constructor(octal) {
    this.octal = octal;
  }

  // Methods
  toBinary() {
    return parseInt(this.octal, 8).toString(2);
  }

  toDecimal() {
    return parseInt(this.octal, 8).toString(10);
  }

  toHexadecimal() {
    return parseInt(this.octal, 8).toString(16).toUpperCase();
  }

  toAlphaLower() {
    let decimal = this.toDecimal(); // Convert Octal to Decimal
    let lowerCaseAlphabet = Object
      .keys(Alphabet.alpha_lower)
      .map(key => {
        return Alphabet.alpha_lower[key];
      });

    return lowerCaseAlphabet[decimal];
  }
}

module.exports = {
  DecimalConverter,
  BinaryConverter,
  OctalConverter
};
