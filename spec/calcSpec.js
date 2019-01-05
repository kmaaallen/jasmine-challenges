/*CHALLENGE ONE - WHAT CAN I DRINK FUNCTION

describe("whatCanIDrink", function(){
    describe("Age tests", function(){
        it("should return Sorry message", function(){
            expect(whatCanIDrink(-1)).toBe("Sorry. I can't tell what drink because that age is incorrect!");
        })
        it("should return toddy", function(){
            expect(whatCanIDrink(10)).toBe("Drink Toddy");
        })
        it("should return coke", function(){
            expect(whatCanIDrink(15)).toBe("Drink Coke");
        })
        it("should return beer", function(){
            expect(whatCanIDrink(20)).toBe("Drink Beer");
        })
        it("should return whiskey", function(){
            expect(whatCanIDrink(56)).toBe("Drink Whiskey");
        })
        it("should return sorry message if not within the number range", function(){
            expect(whatCanIDrink(150)).toBe("Sorry. I can't tell what drink because that age is incorrect!");
        })
    })
})*/

//view source code as specs in solution code slightly different FOR CHALLENGE ONE

/*CHALLLENGE TWO - FIZZBUZZ
Your challenge is to write some tests for the FizzBuzz game.

FizzBuzz is a classic programming problem that is often asked as an interview question. 
Create a function called fizzBuzz. This function should take in number as a parameter. The function should do the following:

If the number is divisible by 3 and 5, then return "FizzBuzz"
If the number is divisible by 3, then return "Fizz"
If the number is divisible by 5, then return "Buzz"
Else just return the number
Write a set of tests that pass in various values to the FizzBuzz function and ensure that the function
meets the above requirements. Make sure that you test all different "types" of inputs that the function may receive.*/

describe ("fizzBuzz", function(){
    it("should return FizzBuzz when the number is divisible by 3 and 5", function(){
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    })
    it("should return Fizz when number is divisible by 3", function(){
        expect(fizzBuzz(9)).toBe("Fizz");
    })
    it("should return Buzz when number is divisible by 5", function(){
        expect(fizzBuzz(25)).toBe("Buzz");
    })
    it("should return number when number is not divisible by 3 or 5", function(){
        expect(fizzBuzz(101)).toBe(101);
    })
    it("should return error when a number is not given as a parameter", function(){
        expect(fizzBuzz("hello")).toBe("Error!");
    })
})