
//var constants = require('../../../CONSTANTS');

module.exports = {
    sendEmail: function(sender,subject,message, callback){
        var sendgrid = require('sendgrid')(sails.config.local.sendgrid.apikey);

        var params = {
          to : sails.config.local.sendgrid.toemail,
          from: sender,
          subject : subject,
          text : message
        }

        //var email = sendgrid.Email(params);
        sendgrid.send(params, function(err, json){
          if (err) {
            console.error(err);
            callback(false);
          }else{
            console.log(json);
            callback(true);
          }

        });
    }
}
