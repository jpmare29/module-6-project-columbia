# project-1-group-8-columbia

Project Title:
HOME of FOODIES


![2022-04-16](https://user-images.githubusercontent.com/74988217/163678184-765b0a1b-370a-4f73-b823-d0e64185d4a6.png)


[Link to Deployed Page](https://jpmare29.github.io/project-1-group-8-columbia/){:target="_blank"}

## user story

AS A food nerd
I WANT go on a website or an app to search for food recipes.
WHEN I type in an ingredient or recipe name
THEN I am presented with an page of recipe cards that I can click on 
or move between pages
WHEN I click on a recipe
THEN I am presented with that recipe a list of ingredients
and a link to detailed instructions

Project Description:
When the user opens the page the first function that is called in the 
populateHistory() function. This function reads local storage for the 'history'
object. The value for this key is a 2D array containing subarrays which have the
name of a clicked recipe and the url link as it's 0 index and
1 index values respectively. After it reads local storage it then emptys the div
containing any previously populated recipes since this function will be called
again after the user clicks on a recipe card.
If there is no object with the key 'history' in local storage the following
conditional statement will not run. If the user has however clicked
on any recipe cards even after closing the page the rest of the function
will execute a forEach loop on the array stored in the browser.
This function will create a new div, a new anchor, update the anchor's href with the url
of the recipe, update the anchor's text with the name of the recipe,
append the anchor to the new div, and then finally append the new div to the
search history section of the page. Since this is a forEach loop it will continue
executing until the array has been completely scanned. The search history section
can be accessed by clicking the respective button in the nav bar at the top
of the page. All of these navs allow their sections to be viewed through use
of the jQuery toggle() function.

Next there is an event listener waiting for the main for to be submitted.
Once the form is submitted the first thing the formSubmitHandler function
does is prevent it's default behavior of reloading the page upon submit.
Next the value of the entered text is read and then interpolated into the 
url that will be fetched to execute the api call. Then the text from the form 
is cleared. Finally the url created in the first part is fetched to execute the 
call to the Edamam API. This call will return a promise that will contain an object
that will be parsed with the .json() method. This will in turn return an object
containing all of the data that the API will return after being called.

The returned object is then scanned of it desired data using the appropirate keys
to access the parts of the object that will be used. In this case the hits key 
was used to access the array of 20 recipes that are returned in the call.
This array contains objects representing recipes containing key/value pairs
that either have a single data attribute or further nested objects or arrays.
The array/objects were accessed programatically to populate the mini recipe cards
on each page by accessing different sections of the array using different indexes
as starting points. Those starting points were used to access the desired recipe
from the array and populate the data into the card in the html file.
The variables associated to those cards were stored in an array and processed
using the forEach method, the index of the array was incremented at the end
of each loop to access all of the recipes.

When the user clicks on any of the recipe cards the function to display
the final recipe is called through accessing the index
of the displayed recipe card with was stored as a data-number attribute
during the forEach loop. This index was used to access the master array
and populate the final recipe page. The function to store the selected recipe
in local storage is called and finally the populateHistory function 
is called again to update the display. All of these different pages
were shown and hidden using a combination of the jQuery hide()/show()/toggle()
functions. When the user finds a recipe they like they can share it via the embedded
Twitter button, which utilizes the Twitter API.

User Persona:
ages 2 - ∞
This application is for people of all ages.
No age discrimination here! if you love food, this application is for you.
well, we take that back, you have to be at least 2. we are #FDNYSmart!

APIs used:

1. EDAMAM => gives us our recipe array/object

2. TWITER => allow us to share to twiter

CSS Frameworks used:

Bootstrap

Bulma
