/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  register: function(req, res){
    //var jsonString = JSON.stringify(req.body);
    return res.json(req.body);
  }
};

