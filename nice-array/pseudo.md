# 08-nice-array

## Pseudo Code

**Note**

Kat and I white boarded this originally, but upon looking at the example given realized that the description of the problem is incorrect, so our solution won't work.

Here is the updated whiteboard:

1. Check if the array has items, if not return false
1. loop through each item (n) in the array and do the following
  1. check item against others (call each other m)
    1. if there is an item m such that m+1=n or m-1=n then flag true
  1. After checking each other, if flag returns true move on, otherwise test fails so return false
1. If you make it to the end of the loop, then every item has a pair, so return true
