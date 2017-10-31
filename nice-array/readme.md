# Code Wars

## Details

A Nice array is defined to be an array where for every value n in the array, there is also an element n-1 or n+1 in the array.

example:

[2,10,9,3] is Nice array because

2=3-1
10=9+1
3=2+1
9=10-1
Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. You should also return false if input array has no elements.

https://www.codewars.com/kata/59b844528bcb7735560000a0

## Thought Process

Here is the updated whiteboard:

1. Check if the array has items, if not return false
1. loop through each item (n) in the array and do the following
  1. check item against others (call each other m)
    1. if there is an item m such that m+1=n or m-1=n then flag true
  1. After checking each other, if flag returns true move on, otherwise test fails so return false
1. If you make it to the end of the loop, then every item has a pair, so return true
