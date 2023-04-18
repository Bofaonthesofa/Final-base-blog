---
title: Prime Numbers
date: 2023-03-25
---

I thought I should make more effort with pseudocode. So, here is my attempt to tackle task 8 from: https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php#EDITOR.

    - create function with parameter. <br>
    - first deal with special cases: <br>
            if the value is 1 return 'This is not a prime number' <br>
            if the value is 2 return 'This is not a prime number <br>
    - create a loop which goes from 2 to the number inputted. Or, for the sake of efficiency, half the value of the number. <br>
    - if the input can be divided by any of those numbers (numb % x ===0) then it isn't a prime number. <br>
    - otherwise it is a prime number. 