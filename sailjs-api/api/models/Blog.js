/**
* Blog.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    author: {
      model: 'user'
    },
    title: {
      type: 'string',
      required: true
    },
    date: {
      type: 'datetime',
      required: true
    },
    post: {
      type: 'text',
      required: true
    }
  }
};

