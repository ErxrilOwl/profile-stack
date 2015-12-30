# profile-stack
Profile stack is a fully inclusive profile site built with a unique set of nodejs and javascript technologies. Currently
the project has the following dependencies:

* Sailjs
* Sailjs MySQL Driver
* Angularjs
* MaterializeCSS

Each projects dependencies have to be done within the appropriate folder as most of them are local nodejs components

To Setup Sailjs:
 1. cd to sailjs-api
 2. npm install sails -g
 3. npm install
 4. You will also have to have MySQL installed on your system. See appropriate MySQL documentation on installing
 5. You may have to also install the MySQL Sailjs driver: 'npm install sails-mysql'


To Setup Angularjs:
 1. cd to angularjs-client
 2. npm install
 3. (possibly) bower install
 4. bower install materialize

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
development.js
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
production.js <br>

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
To Setup Ghostjs
 1. Create a config.js
 2. Copy the contents from config.example.js and adjust it appropriatly

####Notes:
 * -DEPRECATED- If you are using MongoDB has a database and you are using mongod version 3.0.2 or higher there is a known bug with
 the `sails-mongo` driver that causes the database to be unable to be modified when sails is in production mode. To 
 resolve this issue you need to use an older version of the `sails-mongo` driver. Version `0.10.6` has resolved this 
 bug. You can install this version as so: 
     1. `cd sailsjs-api`
     2. `npm install sails-mongo@0.10.6`
