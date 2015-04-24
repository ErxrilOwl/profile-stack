# profile-stack
Profile stack is a fully inclusive profile site built with a unique set of nodejs and javascript technologies. Currently
the project has the following dependencies:

* Sailjs
* Angularjs
* MaterializeCSS

Each projects dependencies have to be done within the appropriate folder as most of them are local nodejs components

To Setup Sailjs:
 1. cd to sailjs-api
 2. npm install sailjs -g

To Setup Angularjs:
 1. cd to angularjs-client
 2. npm install
 3. (possibly) bower install
 4. bower install materialize

 Additionaly, you will need to create a `CONSTANTS.js` file to store database data needed by the sailjs-api project. This
 file is places at the project root outside of both the angularjs-client and sailjs-api folders. This file may be used
 in angular at some point or be used in other added projects to come. Within the `CONSTANTS.js` file enter the following
 information:

 ````javascript
 exports.username = "<db-username>";
 exports.password = "<db-password>";
 exports.db = "<db-name>";
 exports.host = "<db-host>";
 exports.port = <db-host-port>;
 ````