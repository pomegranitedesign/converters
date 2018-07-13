# coolverters.js
Simple library to convert different based numbers.

## Description
Library to simply convert these types of numbers:
 - _binary_,
 - _octal_,
 - _alphabetic_lowercase_,
 - _alphabetic_uppercase_,
 - _alphabetic_,
 - _alphabetic_with_numbers_.

 - _decimal_,
 - _hex_,
# How to install
```npm i --save coolverters.js```

## Usage
```javascript
// Import the package
const { BinaryConverter } = require("coolverters.js");

let valueToConvert = "1010"; // Define the value to be converted
const Converter = new BinaryConverter(valueToConvert); // Initialize the imported converter.
let convertedValue = Converter.toDecimal(); // Simply choose one of the included methods. 

console.log(convertedValue); // 10.
```
