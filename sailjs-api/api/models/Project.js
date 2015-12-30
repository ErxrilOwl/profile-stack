/**
* Project.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    user:{
      model: 'user'
    },
    title: {
      type: 'string',
      required: true
    },
    startdate:{
      type: 'date',
      required: true
    },
    enddate: {
      type: 'date'
    },
    description: {
      type: 'array',
      required: true
    },
    languages: {
      type: 'array'
    },
    imgurl: {
      type: 'string',
      required: true
    },
    links : {
      collection: 'link',
      via: 'project'
    }
  }
};

