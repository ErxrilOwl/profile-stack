# profile-stack
Profile stack is a fully inclusive profile site built with a unique set of nodejs and javascript technologies. Currently
the project has the following dependencies:

* Sailjs
* Sailjs Mongo Driver
* Angularjs
* MaterializeCSS

Each projects dependencies have to be done within the appropriate folder as most of them are local nodejs components

To Setup Sailjs:
 1. cd to sailjs-api
 2. npm install sails -g
 3. npm install
 4. You will also have to install mongoDB if you want to use the default setup. See mongoDB docs on howto
 5. If installing mongoDB, install the mongoDB adapter: npm install sails-mongo


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
            connection: 'localMongoDBServer',
            migrate: 'safe'
          },
          connections: {
            localMongoDBServer: {
              adapter: 'sails-mongo',
              host: 'localhost',
              port: 27017,
              user: '<your development db username>',
              password: '<your development db password>',
              database: '<your development db name>'
            }
          },
          cors: {
            origin: '*'
          }
    };
````
production.js <br>

````javascript

    module.exports = {
        models: {
            connection: 'localMongoDBServer',
            migrate: 'safe'
          },
          connections: {
            localMongoDBServer: {
              adapter: 'sails-mongo',
              host: '<your production db host>',
              port: '<your production db port>',
              user: '<your production db username>',
              password: '<your production db password>',
              database: '<your production db name'
            }
          },
          //set the production environment port
          port: 8050,
        
          //set logging level. usualy silent for production
          log: {
            level: 'silent'
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
 * If you are using MongoDB has a database and you are using mongod version 3.0.2 or higher there is a known bug with
 the `sails-mongo` driver that causes the database to be unable to be modified when sails is in production mode. To 
 resolve this issue you need to use an older version of the `sails-mongo` driver. Version `0.10.6` has resolved this 
 bug. You can install this version as so: 
     1. `cd sailsjs-api`
     2. `npm install sails-mongo@0.10.6`