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
        return res.send(err);
      }else{
        return res.json(user)
      }
    });

  },
  getAllUsers: function(req, res){
    User.find({}).exec(function(err, results){
      if(err){
        return res.send(err);
      }else{
        return res.json(results);
      }
    })
  },
  getUser: function(req, res){
    User.findOne({'id' : req.params.userid}).exec(function(err, user){
      if(err){
        return res.send(err);
      }else{
        return res.json(user);
      }
    })
  },
  getUserProjects: function(req, res){
    User.findOne({'id' : req.params.userid}).populate('projects').exec(function(err, results){
      if(err){
        return res.send(err);
      }else{
        return res.json({ projects: results.projects});
      }
    })
  },
  getUserBlogs: function(req, res){
    User.findOne({'id' : req.params.userid}).populate('blogs').exec(function(err, results){
      if(err){
        return res.send(err);
      }else{
        return res.json({ blogs: results.blogs});
      }
    })
  },
  getRecentProjects: function(req, res){
    Project.find({where: { user: req.params.userid}, limit: req.params.limit, sort: 'date DESC'}).exec(function(err, results){
      if(err){
        return res.send(err);
      }else{
        return res.json(results);
      }
    })
  }
};

