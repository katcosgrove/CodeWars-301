# Code Wars

## Details

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

https://www.codewars.com/kata/disemvowel-trolls/javascript

## Thought Process

My first version of this answer was kind of a clusterfuck, involving splitting the string into an array and using a million if statements in a for loop. It was ugly, long, and I wasn't happy with it, so I tried using regex. The first regex solution used AaEeIiOoUu, but then I found a flag that tells it to ignore case.

I had already done this one in my spare time, so I did not do the whiteboarding directly. Instead, I kinda hinted Jeff through getting to my regex solution, since I didn't think it would be okay to just give him the answer. 
