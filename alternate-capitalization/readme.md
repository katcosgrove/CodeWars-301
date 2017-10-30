# Code Wars

## Details

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

https://www.codewars.com/kata/59cfc000aeb2844d16000075

## Thought Process

This one was weirdly frustrating for me. Since the last few have involved regex, I kinda went down a rabbit hole trying to figure out how to do it with regex. I could have sworn I remembered seeing flags for even or odd positions, but apparently I was wrong. Gave up on that line of inquiry.

My first solution involved split(), two variables, and a for loop. It worked, but it was kinda long. This is shorter, but I'm still not happy with it. 
