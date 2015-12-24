/**
 * ProjectController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  createProject: function(req, res){
    Project.create(req.body).exec(function(err, project){
      if(err){
        sails.log.error("ProjectController:createProject - Error Creating Project");
        sails.log.error(err);
        return res.send(err);
      }else{
        return res.json(project)
      }
    });

  },
  getAllProjects: function(req, res){
    Project.find({}).populate('links').exec(function(err, results){
      if(err){
        sails.log.error("ProjectController:getAllProjects - Error Getting All Projects");
        sails.log.error(err);
        return res.send(err);
      }else{
        return res.json(results);
      }
    })
  },
  getProject: function(req, res){
    Project.findOne({'id' : req.params.projectid}).populate('links').exec(function(err, project){
      if(err){
        sails.log.error("ProjectController:getProject - Error Getting Project");
        sails.log.error(err);
        return res.send(err);
      }else{
        return res.json(project);
      }
    })
  }
};

