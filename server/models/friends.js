'use strict';

const config = '../config';
const Promise = require('bluebird');
const request = require('request-promise');
const db = require('../db/database');
var Friends = db.Friends;
var User = db.User;

var addFriend = function (req, res) {
  Friends.create({ 
    user_id: req.body.userId, 
    friend_id: req.body.friendId 
  })
  .then(function(friend) {
    res.json(friend);
  }).catch(function(error) {
    console.error('error updating user: ', error);
    res.json(error);
  });
};

var getFriends = function (req, res) {
  Friends.findAll({ where: { user_id: req.query.user_id }})
    .then(function (friends) {
      var friend_id = friends.map(function (friend) {
        return friend.friend_id;
      });
      return User.findAll({ where: { id: friend_id }})
    })
    .then(function (friends) {
      res.send(friends);
    })
    .catch(function (error) {
      console.error(error);
      res.send(error);
    });
};

var deleteFriend = function (req, res) {
  
};

module.exports = {
  addFriend: addFriend,
  getFriends: getFriends,
  deleteFriend: deleteFriend
};