# Code Wars

## Details

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example

filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

https://www.codewars.com/kata/list-filtering/javascript

## Thought Process

I knew I could use .filter, and I thought I could return anything that was a number. I tried with regex first, but it acted wonky and I'm still not 100% sure of how to use that correctly, so instead I went with a type match.
