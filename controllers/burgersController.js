var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.burger.findAll({}).then(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  db.burger.create({
    burger: req.body.burger,
    eaten: req.body.burger
  }).then(function(){
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  db.burger.update({
    eaten: req.body.eaten
  }, { where: {
      id: req.params.id
  }
  }).then(function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  db.burger.destory({where: {
    id: req.params.id}}).then(function(){
    res.redirect("/");      
    })
});

// Export routes for server.js to use.
module.exports = router;
