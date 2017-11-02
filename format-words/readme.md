# Code Wars

## Details

Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string. Empty string values should be ignored. Empty arrays or null/nil values being passed into the method should result in an empty string being returned.

formatWords(['ninja', 'samurai', 'ronin']) // should return "ninja, samurai and ronin"

formatWords(['ninja', '', 'ronin']) // should return "ninja and ronin"

formatWords([]) // should return ""

https://www.codewars.com/kata/51689e27fe9a00b126000004

## Thought Process

My first answer involved a for loop in addition to those conditionals, and this is the result of refactoring. I'm not super happy with this answer -- it's really long and involves too much repetitive code in the form of all those conditionals. Once I submitted it I went digging through the other solutions on CodeWars and saw .map come up a lot, but I don't fully understand how to use it. I also saw several regex answers; is this a case where regex would have been the "correct" solution, or just the clever one?
