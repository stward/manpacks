# manpacks
Manpacks front page - built with expressjs

To get this app running, have express.js and mongodb installed, run npm install from the root directory, and then "npm start" from the console. The app runs entirely using express.js, with some backend connection to a MongoDB database.

Notes:

I deliberated on whether to store selected testimonials in a database, or to draw directly from twitter. Since the real website
appears to be down, a lot of twitter comments aren't that great, so I opted to go the database route. Included in the installation
is a .json file with four sample comments, including the two in the original image file. The database query is configured to get 
two random comments, and display them on the page in the "testimonials" section.

The comments may be installed as a database collection by running the following command from the root directory:

```
mongoimport --db manpacks --collection testimonials --file data/testimonials.json --jsonArray
```
