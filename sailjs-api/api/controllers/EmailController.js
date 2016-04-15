/**
 * EmailController
 *
 * @description :: Server-side logic for managing emails
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	sendEmail:function(req, res){
    if(req.body.hasOwnProperty('sender') && req.body.hasOwnProperty('subject') && req.body.hasOwnProperty('message')){
      var actualSubject = "Message Sent From bensoer.com: " + req.body.subject;
      SendGridMailService.sendEmail(req.body.sender, actualSubject, req.body.message, function(result){
        if(result){
          res.ok({ "code" : 200, "message" : "Email Successfully Sent" });
        }else{
          res.serverError();
        }
      });
    }else{
      res.badRequest({ "code": 400, "message" : "Missing Body Attribute" });
    }


  }
};

