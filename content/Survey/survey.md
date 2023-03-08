---
layout: layouts/survey.njk
title: User Survey
description: The data collected in this survey will be used to enhance your experience of the site 

---




  <form data-netlify="true" name="contact" method ="POST" onSubmit="alert('Thank you for your completing the form. Your data has been received');">
<label for ="age" id="age">Please input your age in years (you must be an adult to complete this form).<label>
<input id="age" required type="number">
<button type="button" onclick="myFunction()">Submit</button>
<p id="demo"></p>
<script>
function myFunction() {
let x = document.getElementById("age").value;
  let text;
  if (isNaN(x) || x < 18 || x > 100) {
    text = "Input not valid. Please enter your age in years";
  } else {
    text = "Thank you. Please continue";
  }
  document.getElementById("demo").innerHTML = text;
}
</script>
<br>
<label class="sr-only" for="fname">First name:</label><br>
    <input type="text" id="fname" name="name" required/><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" required/><br>
    <label for="email">e-mail address:</label><br>
    <input type="email" id="email" placeholder="johnsmith@mail.com"><br>
    <label for="occupation">Choose field of occupation:</label><br>
<select id="occupation" name="Occupation">
  <option value="education">Education</option>
  <option value="retail">Retail</option>
  <option value="hospitality">Hospitality</option>
  <option value="Other">Other</option>
</select><br><br>
<input type="checkbox" value="agree-to-t&C" id="tandc">
<label for="tandc">I agree to my data being collected</label><br>
<br>
    <input type="submit" value="Submit">
  </form> 

