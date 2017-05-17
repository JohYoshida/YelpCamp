var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
  {
    name: "Cloud's Rest",
    image: "https://static.pexels.com/photos/25070/pexels-photo-25070.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  },
  {
    name: "Desert Mesa",
    image: "https://static.pexels.com/photos/371572/pexels-photo-371572.jpeg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  },
  {
    name: "Canyon Floor",
    image: "https://static.pexels.com/photos/397850/pexels-photo-397850.jpeg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  }
];

function seedDB(){
  // Remove all campgrounds
  Campground.remove({}, function(err){
    if (err){
      console.log(err);
    } else {
      console.log("Removed all campgrounds!");
      // Add a few campgrounds
      data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
          if (err) {
            console.log(err);
          } else {
            console.log("Added a campground");
            // Create a comment
            Comment.create(
              {
                text: "This place is great but I wish there was internet",
                author: "Homer"
              }, function(err, comment){
                if (err) {
                  console.log(err);
                } else {
                  campground.comments.push(comment);
                  campground.save();
                  console.log("Created new comment");
                }
              });
          }
        });
      });
    }
  });
  
  // Add a few comments
  
}

module.exports = seedDB;