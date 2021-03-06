# Node-MySQL-Express-Handlebars-ORM(own) Virtual Restaurant Order Logger

## What is Virtual Restaurant Order Logger?

[Virtual Restaurant Order Logger](https://virtual-restaurant-ol.herokuapp.com/) is a restaurant application that lets users input names of foods they want to order. Also, once ordered, users can 'pay' for their order with a click of a button.

## How does Virtual Restaurant Order Logger work?

[Virtual Restaurant Order Logger](https://virtual-restaurant-ol.herokuapp.com/) web application was built using the [Node](https://nodejs.org/en/) runtime environment with several third-party node packages.

- [Express](https://www.npmjs.com/package/express) web API framework was used to create a web server to handle the app's API and HTTP requests.

- [Express-handlebars](https://www.npmjs.com/package/express-handlebars) was used in order to use [Handlebars](https://handlebarsjs.com/) as the app's templating engine, which is configured and set as the app's **view engine** using the [express](https://www.npmjs.com/package/express) web API .

- [mySQL](https://www.npmjs.com/package/mysql) is used to create and make a connection to the [mySQL](https://www.mysql.com/) database.

- [Body-parser](https://www.npmjs.com/package/body-parser) is used for parsing x-www-form-urlencoded and json.

## What does Virtual Restaurant Order Logger do?

To query the app's [mySQL](https://www.mysql.com/) database, the app uses an **ORM object** with several methods that create instances that reference certain parts of the app's database using javaScript. These methods are used by the **models**, which create functions that will interact with the database *after* a query has resolved. The models are in turn used by the **controllers**, which set up logic within the API routes.

The GET HTTP request all of the orders in the app's database be rendered to handlebars as an object with the key-value pair of `orders: data`. 

Once the response object mentioned above is pushed into the handlebars template, [Handlebars](https://handlebarsjs.com/) uses built-in helpers to display the orders on the DOM. 

## How to use Virtual Restaurant Order Logger

Virtual Restaurant Order Logger is hosted on [Heroku](https://heroku.com). Go to [Virtual Restaurant Order Logger](https://virtual-restaurant-ol.herokuapp.com/) to check it out.

## Technologies Used

HTML5

CSS3

JavaScript

[jQuery](https://jquery.com/)

[Handlebars](https://handlebarsjs.com/)) 

[Node.js](https://nodejs.org/en/)

[Express](https://www.npmjs.com/package/express) 

[MySQL](https://www.mysql.com/)

[Heroku](https://heroku.com)

## Credits

[Meyerweb](http://meyerweb.com/eric/tools/css/reset/) CSS reset  

Photo by [Patrick Tomasso](https://unsplash.com/@impatrickt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/waiter?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

> Written with [StackEdit](https://stackedit.io/).