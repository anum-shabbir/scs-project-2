var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExample) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExample
      });
    });
  });

  // Load Users page and pass in an example by id
  app.get("/dashboard", function(req, res) {
    db.Events.findAll({}).then(function(dbEvents) {
      res.render("dashboard", {
        Events: dbEvents
      });
    });
  });

  app.get("/cms", function(req, res) {
    db.Events.findAll({}).then(function(dbCms) {
      res.render("cms", {
        events: dbCms
      });
    });
  });

  app.get("/authors", function(req, res) {
    db.Events.findAll({}).then(function(dbCms) {
      res.render("authors", {
        events: dbCms
      });
    });
  });

  app.get("/events/:id", function(req, res) {
    db.Events.findOne({ where: { id: req.params.id } }).then(function(dbDash) {
      res.render("events", {
        event: dbDash
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
