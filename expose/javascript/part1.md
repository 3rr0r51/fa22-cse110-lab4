# Part 1 Answers

1) 20
2) 20

3) 20
4) ERROR. Result is not defined. This is because the variable is now declared with "let" which has block scope. You can only "see" it from within the if statement. This is different from var which is always global or function scoped

5) TypeError. Assignment to constant variable.  Can't change the value of a const variable.
6) Technically it crashed before the second console.log command, but if the code reached here, it would throw the same error as question 4. This is because const has block scope.