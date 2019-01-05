/* Your challenge is to write some tests for the Drink About game.

Drink About is a simple function that will check the age and return a drink appropriate for your age. 
Create a function called whatCanIDrink. This function should take in age as parameter. The function should do the following:

If the age is less than 0, then it should return "Sorry. I can’t tell what drink because that age is incorrect!"
If the age is less than 14, then it should return "Drink Toddy"
If the age is less than 18, then it should return "Drink Coke"
If the age is less than 21, then it should return "Drink Beer"
If the age is less than 130, then it should return "Drink Whisky"
Else return "Sorry. I can’t tell what drink because that age is incorrect!"*/

/*  CHALLENGE ONE - WHAT CAN I DRINK
function whatCanIDrink(age) {
    if (age < 0) {
        return 'Sorry. I can\'t tell what drink because that age is incorrect!';
    }else if ((age >= 0) && (age < 14)) {
        return "Drink Toddy";
    }else if ((age >= 14) && (age < 18)) {
        return "Drink Coke";
    }else if ((age >= 18) && (age < 21)) {
        return "Drink Beer";
    }else if ((age >= 21) && (age < 130)){
        return "Drink Whiskey";
    }else{
       return 'Sorry. I can\'t tell what drink because that age is incorrect!';
    }
}*/

// CHALLENGE TWO - FIZZBUZZ
/*Your challenge is to write some tests for the FizzBuzz game.

FizzBuzz is a classic programming problem that is often asked as an interview question. 
Create a function called fizzBuzz. This function should take in number as a parameter. 
The function should do the following:

If the number is divisible by 3 and 5, then return "FizzBuzz"
If the number is divisible by 3, then return "Fizz"
If the number is divisible by 5, then return "Buzz"
Else just return the number
Write a set of tests that pass in various values to the FizzBuzz function and ensure
that the function meets the above requirements. Make sure that you test all different "types" of
inputs that the function may receive. */

function fizzBuzz(number) {
    if ((number % 3 == 0) && (number % 5 == 0)) {
        return "FizzBuzz";
    }
    else if ((number % 3 == 0)) {
        return "Fizz";
    }
    else if ((number % 5 == 0)) {
        return "Buzz";
    }
    else if (typeof(number) != "number"){
        return "Error!"
    }
    else {
        return number;
    }
}
