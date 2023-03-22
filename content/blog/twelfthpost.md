---
title: Getting value (or text or index) from a dropdown menu
date: 2023-03-16
---
In Wednesday's lesson on JS we were asked to write a simple function which would give a message of "You have ordered a (size) (drink)."

I managed to do this fairly quickly so I decided to try to write a function which would take the values for size and drink from a dropdown menu. Once again, this took me longer than it probably should have. 

The HTML was pretty straightforward and the JS seemed fairly simple too, once I had found the relevant page on StackOverflow. Once again, however, I tried endless slightly different variations of //getElementById//etc etc. The error message I was getting most of the time was "drink" is not defined. I just couldn't figure it out: I had blatantly defined "drink" in my code and had quadruple checked it for typos.

Anyway, I got up this morning and realised that for some reason the last two lines of code were outside my function. The amazing code is <a href="/JSTasks/Drinks-order" alt="drinks order JS"> here </a>

<strong>Lessons: Read the error message;
                 Think about scope;
                 Sleep on it; </strong>