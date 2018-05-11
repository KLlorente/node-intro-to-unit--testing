const expect = require('chai').expect; 

const fizzBuzzer = require('../fizzBuzzer'); 

describe('fizzBuzzer', function () {
	it('should return "fizz-buzz" for multiples of 15', function () {

		const normalCases = [15, 30, 45]; 

		normalCases.forEach(function(input) {
			expect(fizzBuzzer(input)).to.equal('fizz-buzz'); 
		});
	});

	it('should return "buzz" for multiples of 5', function () {

		const normalCases =[5, 10, 25]; 

		normalCases.forEach(function(input) {
			expect(fizzBuzzer(input)).to.equal('buzz'); 
		}); 
	}); 

	it('should return "fizz" for multiples of 3', function () {

		const normalCases = [3, 6, 9]; 

		normalCases.forEach(function (input) {
			expect(fizzBuzzer(input)).to.equal('fizz'); 
		}); 
	});

	it('should raise error if input not numbers', function () {

		const badInputs = ["apple", true, false, function () {}, [1,2,3]];

		badInputs.forEach(function(input) {
			expect(function() {
				fizzBuzzer(input); 
			}).to.throw(Error); 
		});
	});
});