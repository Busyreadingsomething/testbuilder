// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
	let len = cardNumber.length;
	let cardVisa = parseInt(cardNumber[0]);
	let cardTwoDigit = parseInt(cardNumber.slice(0, 2));
	let cardThreeDigit = parseInt(cardNumber.slice(0, 3));
	let cardFourDigit = parseInt(cardNumber.slice(0, 4));
	let cardSixDigit = parseInt(cardNumber.slice(0, 6));

	const switchValues = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759]

	if ((switchValues.includes(cardFourDigit) || switchValues.includes(cardSixDigit)) && (len === 16 || len === 18 || len === 19)) {
		return 'Switch';
	} else {
		if ((cardTwoDigit === 38 || cardTwoDigit === 39) && len === 14) {
			return "Diner's Club";
		} else if ((cardTwoDigit === 34 || cardTwoDigit === 37) && len === 15) {
			return "American Express";
		} else if ((cardVisa === 4) && (len === 13 || len === 16 || len === 19)) {
			return "Visa";
		} else if ((cardTwoDigit >= 51 && cardTwoDigit <= 55)  && len === 16) {
			return "MasterCard";
		} else if (cardFourDigit === 6011 || cardTwoDigit === 65 || (cardThreeDigit >= 644 && cardThreeDigit <= 649) && (len === 16 || len === 19)) {
			return 'Discover';
		} else if ((cardFourDigit === 5018 || cardFourDigit === 5020 || cardFourDigit === 5038 || cardFourDigit === 6304) && (len >= 12 && len <= 19)) {
			return 'Maestro';
		} else if (((cardSixDigit >= 622126 && cardSixDigit <= 622925) || (cardThreeDigit >= 624 && cardThreeDigit <= 626) || (cardFourDigit >= 6282 && cardFourDigit <= 6288)) && (len >= 16 && len <= 19)) {
			return 'China UnionPay';
		}		
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