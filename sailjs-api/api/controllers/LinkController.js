/**
 * LinkController
 *
 * @description :: Server-side logic for managing links
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  createLink:function(req,res){
    Link.create(req.body).exec(function(err, link){
      if(err){
        return res.send(err);
      }else{
        return res.json(link);
      }
    })
  },
  getAllLinks:function(req,res){
    Link.find({}).exec(function(err, links){
      if(err){
        return res.send(err);
      }else{
        return res.json(links);
      }
    })
  },
  getLink:function(req,res){
    Link.findOne({ 'id' : req.params.linkid }).exec(function(err, link){
      if(err){
        return res.notFound(err);
      }else{
        return res.json(link);
      }
    })
  }
};

