---
title: JS with an HTML form
date: 2023-03-14
---

Eventually I noticed an error message on CodePen to the effect that //toFixed()// was not a function or something. After a bit of googling I realised that I had to use //toFixed()// inside the previous operation, i.e.: //const final = (bill * tipRate / 100).toFixed(2);// rather than as it's own function operating on a result.

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaYL_GeLjwLKd5pe3hvmC35bJYJ36U0YaCSg&usqp=CAU" alt="Chain image">

Having done this, I finally got a result on my site. Unfortunately, however, the result was a concatenation of //Bill// and //tip// rather than an addition. Because I was pretty confident that I knew exactly what was wrong, it should shave been easy to solve. It took much longer than I thought and probably longer than it should have. There were just too many solutions offered on Stack Overflow etc. However, one of the most common suggestions was to use //Number(bill)// instead of simply //bill//. This was one of the first solutions I tried but it didn't work. I should have tested this idea more carefully and more comprehensively. Did I just have a typo? Did I try using //Number()// in the wrong place?

Anyway, the final challenge is to get the result added to the form screen in the right way. At the moment it just returns a new screen with the result. 