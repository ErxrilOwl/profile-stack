/**
 * PingController
 *
 * @description :: Server-side logic for managing Pings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `PingController.ping()`
   */
  ping: function (req, res) {

    var userTest = {
      userPinged : false,
      userMessage : "",
      userStack : null
    }

    var projectTest = {
      projectPinged : false,
      projectMessage : "",
      projectStack : null
    }

    var linkTest = {
      linkPinged : false,
      linkMessage : "",
      linkStack : null
    }


    User.find({}).exec(function(err, results){
      if(err){
        userTest.userMessage = "Error Pinging User Table"
        userTest.userStack = err.stack;
      }else{
        userTest.userMessage = "Pinging of User Table Successful";
      }
      userTest.userPinged = true;
      sendResponse();
    });
    Project.find({}).exec(function(err, results){
      if(err){
        projectTest.projectMessage = "Error Pinging Project Table"
        projectTest.projectStack = err.stack;
      }else{
        projectTest.projectMessage = "Pinging of Project Table Successful";
      }
      projectTest.projectPinged = true;
      sendResponse();
    });
    Link.find({}).exec(function(err, results){
      if(err){
        linkTest.linkMessage = "Error Pinging Link Table"
        linkTest.linkStack = err.stack;
      }else{
        linkTest.linkMessage = "Pinging of Link Table Successful";
      }
      linkTest.linkPinged = true;
      sendResponse();
    });


    function sendResponse(){
      if(userTest.userPinged && projectTest.projectPinged && linkTest.linkPinged){
        return res.json({
          status: "Ping Complete",
          results: {
            user: userTest,
            project: projectTest,
            link: linkTest
          }
        });
      }
    }


  }
};

