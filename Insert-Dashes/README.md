# Code Wars

## Details

Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

https://www.codewars.com/kata/insert-dashes/train/javascript

## Thought Process

I knew splitting the numbers into an array would be necessary to make it easy to deal with them. From there, I figured I could tell whether or not a number was odd by testing to see if it was divisible by two, then using splice to add a dash where two consecutive numbers were not divisible by two and using join at the end to return it from an array.

The only problem I ran into was an extra dash at the end if the last number was odd. Originally I fixed this with another if statement to pop the last character off if it was a dash, but I decided to see if comparing i - 1 instead of i + 1 to find out where to put the dash fixed it and surprise, it did! That might not be fool-proof though. Could have gotten lucky with the random tests.
