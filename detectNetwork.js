// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {

	let cardTwoDigit = cardNumber.slice(0, 2);
	let cardThreeDigit = cardNumber.slice(0, 3);
	let cardFourDigit = cardNumber.slice(0, 4);

	if ((cardTwoDigit === '38' || cardTwoDigit === '39') && cardNumber.length === 14) {
		return "Diner's Club";
	} else if ( (cardTwoDigit === '34' || cardTwoDigit === '37') && cardNumber.length === 15) {
		return "American Express";
	} else if ( (cardNumber[0] === '4') && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
		return "Visa";
	} else if ( (parseInt(cardTwoDigit) >= 51 && parseInt(cardTwoDigit) <= 55)  && cardNumber.length === 16) {
		return "MasterCard";
	} else if ( cardFourDigit === "6011" || cardTwoDigit === "65" || (parseInt(cardThreeDigit) >= 644 && parseInt(cardThreeDigit) <= 649) && (cardNumber.length === 16 || cardNumber.length === 19)) {
		return 'Discover';
	} else if ((cardFourDigit === '5018' || cardFourDigit === '5020' || cardFourDigit === '5038' || cardFourDigit === '6304') && (cardNumber.length >= 12 && cardNumber.length <= 19)) {
		return 'Maestro';
	}

  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


console.log(detectNetwork('38345678901234')); //(Diner's Club)
console.log(detectNetwork('39345678901234'));
console.log(detectNetwork('343456789012345'));
console.log(detectNetwork('373456789012345'));