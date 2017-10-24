#Code 301 Code Wars

## Abbreviate a name

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot seperating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F

https://www.codewars.com/kata/abbreviate-a-two-word-name/javascript

##Thought Process

I first split the string being passed to the function at spaces, then used a template literal to concatenate the first letter of each string with a period between them.

I CAN make it work with regex, but I don't really understand what I'm doing with it so I thought it best to avoid submitting things I don't understand for now. :p
