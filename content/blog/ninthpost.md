---
Title: Trouble with Javascript on a web form
Date: 2023-03-12
---
The next challenge was to manipulate data inputted to an HTML form and return it to the result to the site. I thought this would be fairly easy. Since I already had a working JS function, the task basically came down to just extracting the inputs for bill and tiprate and using them as values for the parameters for my function. A quick bit of googling showed me that //getElementById("INPUTID").value// was what I wanted. 

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTsLbrJUZ_D3j1wpN0VAczMM6T2Rpp-t6eMw&usqp=CAU" alt="Javascript image">

However, when I tried to use this, it didn't work. This is where I went wrong. Instead of analysing what exactly was happening, I just thought "it's not doing what I want it to do, therefore it isn't working, therefore try something else". 

What I should have done: 
    I knew that my function was basically because it worked with .njk template inputs. The problem was with extracting the values from the HTML form.
    I should have tried building the function one step at a time and checked the result. Or, tried removing sections of the function and checked the result.
    I should have looked more closely at what exactly the result was and thought about it a bit more instead of rushing to try another possiblity.  