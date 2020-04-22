const dbJSON = require("../db/db.json");
const fs = require("fs");
module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.send(dbJSON);
      });

    //   app.post("/api/notes", function(req, res) {
    //     // res.send(dbJSON);
    //     let newNote = {
    //         title: req.body.title,
    //         text: req.body.text
    //     }

    //     fs.appendFile("./db/db.json", newNote);
    //   });
}