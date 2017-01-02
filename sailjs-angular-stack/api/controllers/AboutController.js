/**
 * AboutController
 *
 * @description :: Server-side logic for managing abouts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  getAllAbouts: function(req, res){
    About.find({}).exec(function(err, results){
      if(err){
        sails.log.error("AboutController:getAllAbouts - Error Getting All Abouts");
        sails.log.error(err);
        return res.send(err);
      }else{
        return res.json(results);
      }
    })
  },
  getAbout: function(req, res){
    About.findOne({'id' : req.params.aboutid}).exec(function(err, user){
      if(err){
        sails.log.error("AboutController:getAbout - Error Getting About");
        sails.log.error(err);
        return res.send(err);
      }else{
        return res.json(user);
      }
    })
  },
};

