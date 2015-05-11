/**
 * EmailController
 *
 * @description :: Server-side logic for managing emails
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	sendEmail:function(req, res){
    if(req.body.hasOwnProperty('sender') && req.body.hasOwnProperty('subject') && req.body.hasOwnProperty('message')){
      SendGridMailService.sendEmail(req.body.sender, req.body.subject, req.body.message, function(result){
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

