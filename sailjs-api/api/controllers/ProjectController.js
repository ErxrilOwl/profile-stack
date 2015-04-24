/**
 * ProjectController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  createProject: function(req, res){
    //var jsonString = JSON.stringify(req.body);
    Project.create(req.body).exec(function(err, project){
      if(err){
        return res.send(err);
      }else{
        return res.json(project)
      }
    });

  },
  getAllProjects: function(req, res){
    Project.find({}).populate('links').exec(function(err, results){
      if(err){
        return res.send(err);
      }else{
        return res.json(results);
      }
    })
  },
  getProject: function(req, res){
    Project.findOne({'id' : req.params.projectid}).populate('links').exec(function(err, project){
      if(err){
        return res.send(err);
      }else{
        return res.json(project);
      }
    })
  }
};

