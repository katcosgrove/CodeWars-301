
#Code Wars Replace All Dots

##Problem Domain
The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task

Fix the bug so we can all go home early.

Notes

String str will never be null.

https://www.codewars.com/kata/fixme-replace-all-dots/train/javascript

##Solution
The first thing I did was run the test to see what it was doing incorrectly. I noticed two things: it was replacing the first character of the string with a dash rather than the first dot, and it wasn't continuing to search. I googled for how to replace ALL in JavaScript, and found I needed to use the 'g' flag. Changed that, ran the test again, found that it did continue, but it was replacing everything with a dash like it couldn't see the dot at all. So I googled to check the escape character for a dot and added a backslash. Test passes.
