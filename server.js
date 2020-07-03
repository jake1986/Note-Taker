var express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});

// Notes will not save or delete unless I kill the node and restart the server
// So, in the app launched in Heroku, there are no notes saving or able to be deleted,
// however, when run just through localhost with node server.js, notes
// are saving and able to be deleted, but the server has to be killed
// and restarted in order to see the updated or deleted notes.