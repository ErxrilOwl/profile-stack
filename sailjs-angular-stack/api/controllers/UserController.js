/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  createUser: function(req, res){
    //var jsonString = JSON.stringify(req.body);
    User.create(req.body).exec(function(err, user){
      if(err){
        sails.log.error("UserController:create - Error Creating User");
        sails.log.error(err);
        return res.send(err);
      }else{
        return res.json(user)
      }
    });

  },
  getAllUsers: function(req, res){
    User.find({}).exec(function(err, results){
      if(err){
        sails.log.error("UserController:getAllUsers - Error Getting All Users");
        sails.log.error(err);
        return res.send(err);
      }else{
        return res.json(results);
      }
    })
  },
  getUser: function(req, res){
    User.findOne({'id' : req.params.userid}).exec(function(err, user){
      if(err){
        sails.log.error("UserController:getUser - Error Getting User");
        sails.log.error(err);
        return res.send(err);
      }else{
        return res.json(user);
      }
    })
  },
  getUserProjects: function(req, res){
    User.findOne({'id' : req.params.userid}).populate('projects').exec(function(err, results){
      if(err){
        sails.log.error("UserController:getUserProjects - Error Getting User Projects");
        sails.log.error(err);
        return res.send(err);
      }else{
        return res.json({ projects: results.projects});
      }
    })
  },
  getUserBlogs: function(req, res){
    User.findOne({'id' : req.params.userid}).populate('blogs').exec(function(err, results){
      if(err){
        sails.log.error("UserController:getUserBlogs - Error Getting User Blogs");
        sails.log.error(err);
        return res.send(err);
      }else{
        return res.json({ blogs: results.blogs});
      }
    })
  },
  getUserAbouts: function(req, res){
    User.findOne({'id' : req.params.userid}).populate('about').exec(function(err, results){
      if(err){
        sails.log.error("UserController:getUserAbouts - Error Getting User Abouts");
        sails.log.error(err);
        return res.send(err);
      }else{
        return res.json({ about: results.about});
      }
    })
  },
  getRecentProjects: function(req, res){
    Project.find({where: { user: req.params.userid}, limit: req.params.limit, sort: 'startdate DESC'}).populate('links').exec(function(err, results){
      if(err){
        sails.log.error("UserController:getUserProjects - Error Getting Recent Projects");
        sails.log.error(err);
        return res.send(err);
      }else{
        return res.json(results);
      }
    })
  }
};

