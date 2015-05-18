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
 2. npm install sailjs -g
 3. npm install
 4. You will also have to install mongoDB if you want to use the default setup. See mongoDB docs on howto
 5. If installing mongoDB, install the mongoDB adapter: npm install sails-mongo


To Setup Angularjs:
 1. cd to angularjs-client
 2. npm install
 3. (possibly) bower install
 4. bower install materialize

Additionaly within the `sailjs-api/config` folder you will need to create a `local.js` file as this will contain
your configurations for your MongoDB if you are using the default pre-configured settings.

````javascript
module.exports.local = {
  someMongodbServer: {
    host: "localhost",
    port: 27017,
    user: "",
    password: "",
    database: "PROFILE"
  },
  sendgrid: {
    apikey: "<your sendgrid api key>",
    toemail: "<email your emails will be sent to on the contact page>"
  }
}
````
Alternatively you can also put this information in the environment folders located at `sailjs-api/config/env`. Note though
these files are not included in the .gitignore

####Notes:
 * If you are using MongoDB has a database and you are using mongod version 3.0.2 or higher there is a known bug with
 the `sails-mongo` driver that causes the database to be unable to be modified when sails is in production mode. To 
 resolve this issue you need to use an older version of the `sails-mongo` driver. Version `0.10.6` has resolved this 
 bug. You can install this version as so: 
     1. `cd sailsjs-api`
     2. `npm install sails-mongo@0.10.6`