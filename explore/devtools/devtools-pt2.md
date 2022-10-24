So the function calculateSum is most likely concatenating num1 and num2 instead of adding. This is probably because both nums read their values from a input text box so their values are probably strings. 
All you need to do is to convert BOTH variables into an integer for it to work. I'm using parseInt().

NOTE: This will cause decimal values to get casted into into an integer. If you want to avoid that, use parseFloat().
Note: You will get NaN values if you input something that isn't a number.