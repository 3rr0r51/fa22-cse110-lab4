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