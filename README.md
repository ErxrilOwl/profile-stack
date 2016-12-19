# profile-stack
Profile stack is a fully inclusive profile site built with a unique set of nodejs and javascript technologies. Currently
the project has the following dependencies:

* Sailjs
* Sailjs MySQL Driver
* Angularjs
* MaterializeCSS
* Ghost Blog

Each projects dependencies have to be done within the appropriate folder as most of them are local nodejs components

#Setup

##Angularjs

To Setup Angularjs:
 1. cd to angularjs-client
 2. npm install
 3. (possibly) bower install
 4. bower install materialize
 5. Create the appropriate js files mentioned below
 6. Start angularjs in development mode with 'npm start'

 To setup angularjs you will need to create a config.js file within the `app` folder to store directory constants and
 ghost-blog credentials for connecting to the blog page

 The file should look something like this:
 
````javascript
 (function(){

     var app = angular.module('myApp');

     app.constant('BASEURL', 'http://<sailsjs-api-url>:<portnumber>');
     app.constant('USERID', '1'); //id of user once created in sails api

     app.constant('GHOSTID', "ghost-frontend");
     app.constant("GHOSTSECRET", "<ghost-frontend-secret>");

 }());
````
To setup the ghost-blog with the angularjs profile site may take a number of steps depending on the version. The current
version 0.7.9 requires DB adjustments be made in order to allow angularjs to access the ghost-blog public api. The following
links may be of use:

* [http://api.ghost.org/docs/client-authentication](http://api.ghost.org/docs/client-authentication)
* [http://api.ghost.org/docs/ajax-calls-from-an-external-website](http://api.ghost.org/docs/ajax-calls-from-an-external-website)
* [http://support.ghost.org/public-api-beta/](http://support.ghost.org/public-api-beta/)

Basically, you will need to go into the ghost-blog database and add the domain of the angularjs site as a valid domain.
You will then need to get the secret key from the database for the ghost-frontend client and add it into the `config.js`
file explained above.

##Sailsjs

To Setup Sailjs:
 1. cd to sailjs-api
 2. npm install sails -g
 3. npm install
 4. You will also have to have MySQL installed on your system. See appropriate MySQL documentation on installing
 5. You may have to also install the MySQL Sailjs driver: 'npm install sails-mysql'
 6. Create the appropriate js files mentioned below
 7. Start sails in development mode with `sails lift`

Additionaly within the `sailjs-api/config` folder you will need to create a `local.js` file as this will contain
your configurations for sendgrid.

````javascript
module.exports.local = {
  sendgrid: {
    apikey: "<your sendgrid api key>",
    toemail: "<email your emails will be sent to on the contact page>"
  }
}
````
You will also need to create and setup your `development.js` and `production,js` environment files. These will go
 into the `config/env` folder you will have to create <br>
<b>development.js</b>
````javascript
/** config/env/development.js **/
    module.exports = {
        models: {
            connection: 'mysqlDBServer',
            migrate: 'safe'
          },
          connections: {
            mysqlDBServer : {
            adapter: "sails-mysql",
            host: '<host url>',
            user: '<mysql username>',
            password: '<mysql password>',
            database: '<mysql database>'
          },
          cors: {
            origin: '*'
          },
          log: {
            level: 'silly'
          },
    };
````
<b>production.js</b> <br>

````javascript

    module.exports = {
        models: {
            connection: 'mysqlDBServer',
            migrate: 'safe'
          },
          connections: {
             mysqlDBServer : {
                adapter: "sails-mysql",
                host: '<host url>',
                user: '<mysql username>',
                password: '<mysql password>',
                database: '<mysql database>'
          },
          //set the production environment port
          port: 8050,
        
          //set logging level. usualy silent for production
          log: {
            level: 'verbose'
          },
          cors: {
            origin: '<your domain>'
          }
    };
````

##Ghost Blog
To Setup Ghostjs

1. cd into `ghost-0.6.4to0.7.9to0.11.3`
2. execute `npm install --production`
3. Create a config.js
4. Copy the contents from config.example.js and adjust it appropriatly
5. Start ghost blog in development mode by calling `node index.js`. Calling `npm start --production` will start in production mode

####Notes:
 * -DEPRECATED- If you are using MongoDB has a database and you are using mongod version 3.0.2 or higher there is a known bug with
 the `sails-mongo` driver that causes the database to be unable to be modified when sails is in production mode. To 
 resolve this issue you need to use an older version of the `sails-mongo` driver. Version `0.10.6` has resolved this 
 bug. You can install this version as so: 
     1. `cd sailsjs-api`
     2. `npm install sails-mongo@0.10.6`
