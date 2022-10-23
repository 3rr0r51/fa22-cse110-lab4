# Part 2 Answers
Actually before the answers, I just want to roast whoever wrote the example code for using whatever font they're using. I'm just so confused on why someone would pick CURSIVE letters.

1) Printed 3.   So it just prints out the value of i after the for loop ended. This is the number that caused the for loop to exit. It makes sense because  i < prices.length is 3 < 3.  
NOTE: This is a variable that's declared in the for loop, but since it has function scope, we can access it outside the for loop.

2) Printed 150. This was the calculated discounted price from the last loop of the for loop. Again, it has function scope, so we can still read it outside the loop. Discounted price is effectively just the discount applied to the original price.

3) Printed 150. Same concept of scope and loop as Q2, but finalPrice is different from discountedPrice. While discountedPrice has the discount applied, finalPrice takes that value and rounds it to the nearest penny.

4) [ 50, 100, 150 ] This function will return an array of all the prices with the discount applied to them (and rounded to the nearest cent). 
NOTE: discounted.push(finalPrice) just appends final Price to the end of the array


5) ERROR: i is not defined.
 Because we are now using the block-scoped let declaration. The scope of i is now bounded to within the for loop. So it's out of bound now.

6) ERROR: discountedPrice is not defined
Again, same concept as Q5, discountedPrice is now block-scoped so using it in line 13 is out of scope.

7) 150.  This line prints because the variable its calling (finalPrice) is within scope. Yes. It does have a let declaration, but both the declaration and the print function are withing the same block scope. (In this case, it's the function scope). 

8) [ 50, 100, 150 ]   In the end, modifying scope does not affect the function's algorithm and so it behaves exactly like Q4 states.


9) ERROR: i is not defined.    Same logic as Q5, the print function calls a variable that is out of scope because i is block scoped and bound to within the for loop.

10) 3.  While block scoped, the scope of "length" is function scope. The print fuction is in the same block as the variable. (and function scope).

11) Yes, but because we modified the code from previous versions. The important part here is that that array (discounted) is somehow allowed to change despite being a const. Everything else works as normal. (We took out finalPrice because that wouldn't work). Note that line 7 isn't affected when we switched to const because its final value is defined there at the same time(line?) as its declaration. After the for loop ends, we delete it and create a new one for the next loop. This effectively circumnavigates the "no edit" rule.

Now onto discounted. The part that doesn't change is its REFERENCE to the array object. (References are kinda like pointers). We can edit the object itself, but we can't edit the variable's reference to it.  For example, if we did disounted = [];  on line 5, this wouldn't work because we're giving it a new reference.