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

## Sailjs / Angularjs Stack

1. cd to `sailjs-angular-stack
2. cd to `assets`
3. execute `bower install` to install bower components and dependencies
4. within the folder create a `config.js` file with the following information:

````javascript
 (function(){

     var app = angular.module('myApp');

     app.constant('BASEURL', ''); //leave as empty string
     app.constant('USERID', '1'); //id of user once created in sails api

     app.constant('GHOSTID', "ghost-frontend");
     app.constant("GHOSTSECRET", "<ghost-frontend-secret>");

 }());
````
This will allow the Angularjs client to search for the correct information
in the sails API and also talk to the ghost-blog API

To setup the ghost-blog with the angularjs profile site may take a number of steps depending on the version. The current
version 0.11.3 requires DB adjustments be made in order to allow angularjs to access the ghost-blog public api. The following
links may be of use:

* [http://api.ghost.org/docs/client-authentication](http://api.ghost.org/docs/client-authentication)
* [http://api.ghost.org/docs/ajax-calls-from-an-external-website](http://api.ghost.org/docs/ajax-calls-from-an-external-website)
* [http://support.ghost.org/public-api-beta/](http://support.ghost.org/public-api-beta/)

Basically, you will need to go into the ghost-blog database and add the domain of the angularjs site as a valid domain.
You will then need to get the secret key from the database for the ghost-frontend client and add it into the `config.js`
file explained above.

5. cd to the parent folder `sailjs-angular-stack`
6. execute `npm install sails -g`
7. execute `npm install`
8. You may also have to install the MySQL Sailjs driver: `npm install sails-mysql`
9. cd to the `sailjs-angular-stack/config` folder and create a `local.js` file. Add
the following configuration for sendgrid:

````javascript
module.exports.local = {
  sendgrid: {
    apikey: "<your sendgrid api key>",
    toemail: "<email your emails will be sent to on the contact page>"
  }
}
````
This will be used to send emails on the contact page of the site

10. cd to the `env` folder within the current folder and create both a `production.js`
and `development.js` file. Fill each file with the appropriate information listed
below

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

````javascript
/** config/env/production.js **/
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
          //set which ip to listen on
          host: 'localhost' // or 127.0.0.1 or 192.168.0.123 etc

          //set logging level. usualy silent for production
          log: {
            level: 'verbose'
          },
          cors: {
            origin: '<your domain>'
          }
    };
````

11. cd to the `sailjs-angular-stack` directory
12. execute `sails lift` to start the entire stack in development mode. Append `--prod` to the end to load in prod mode

##Ghost Blog
To Setup Ghostjs

1. cd into `ghost-0.6.4to0.7.9to0.11.3`
2. execute `npm install --production`
3. Create a config.js
4. Copy the contents from config.example.js and adjust it appropriatly
5. Start ghost blog in development mode by calling `node index.js`. Calling `npm start --production` will start in production mode

## Notes:
 * -DEPRECATED- If you are using MongoDB has a database and you are using mongod version 3.0.2 or higher there is a known bug with
 the `sails-mongo` driver that causes the database to be unable to be modified when sails is in production mode. To 
 resolve this issue you need to use an older version of the `sails-mongo` driver. Version `0.10.6` has resolved this 
 bug. You can install this version as so: 
     1. `cd sailsjs-api`
     2. `npm install sails-mongo@0.10.6`
