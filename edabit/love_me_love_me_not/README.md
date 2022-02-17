## Loves Me, Loves Me Not...

*"Loves me, loves me not"* is a traditional game in which a person plucks off all the petals of a flower *one by one*, saying the phrase *"Loves me"* and *"Loves me not"* when determining whether the one that they love, loves them back.

Given a number of petals, return a string which repeats the phrases _"Loves me"_ and _"Loves me not"_ for every alternating petal, and return the _last phrase_ in **all caps**.
Remember to put a _comma_ and _space_ between phrases.

### Examples
``` ruby
loves_me(3) ➞ "Loves me, Loves me not, LOVES ME"
loves_me(6) ➞ "Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT"
loves_me(1) ➞ "LOVES ME"
```