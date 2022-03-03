## Who Is The Hero I ?

Ten mathematicians are flying on a balloon over the Pacific ocean.
When they are crossing the equator they decide to celebrate this event and open a bottle of champagne.
Unfortunately, the cork makes a hole in the balloon.

Hydrogen is leaking out and the balloon is descending now.
Soon it will fall into the ocean and all the balloonists will be eaten by hungry sharks.

But not everything is lost yet.
One of the balloonists can sacrifice himself jumping out, so that his friends would live a little longer.

Only one problem still exists: *"Who is the one to get out"*.

There is a fair way to solve this problem.
First, each of them writes an integer ai  not less than 1 and not more than 10. Then they calculate the magic number  `N`  that is the **number of positive integer divisors of the product a1 * a2 * ... * a10**.
For example, the number of positive integer divisors of 6 is 4 *(they are 1,2,3,6)*.

The hero *(a mathematician who will be thrown out)* is determined according to the last digit of  `N`.
Can you find out who is the hero?

### Task

Given an argument  `namesAndNumbers`. It's an object that contains 10 men's names and the numbers. Like this:
``` ruby
{John:1,Tom:2,...,Voile:1}
```
Your task is to calculate the last digit of the number of positive integer divisors of the product of 10 numbers, and return a string like this:
```ruby
"Good-Bye, Hero <Hero's name here>! We'll take care of your children and your wife."
```
Still not understand the task?
Look at the following example ;-)

### Example

For  `namesAndNumbers =`

``` ruby
{ John:1, Tom:2, Jerry:6, Mike:1, Abc:3, Def:1, Ghi:1, Jkl:1, Mno:1, Voile:1}
```
the output should be:

``` ruby
"Good-Bye, Hero Voile! We'll take care of your children and your wife."
```
Because:
```ruby
The product of 10 numbers is:
1 x 2 x 6 x 1 x 3 x 1 x 1 x 1 x 1 x 1 = 36

The positive integer divisors of 36 are:
1,2,3,4,6,9,12,18,36 -> N = 9

The last digit of N is 9

So, the 9th(0-based) man Voile is the hero.
```
### Note

-   `herosAndNumbers`  is always a valid object. It always contains *10 names* and *10 numbers*. All of the numbers are *positive integers* less than or equal to 10.