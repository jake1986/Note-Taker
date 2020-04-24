var express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

// So for the for app.delete, you'll need to find a way to delete 
// a specific note. In order to do that, when you post a new note, the easiest 
// way is to give each new note an id when you you post it.


// you can use the uuid npm package to give each note a random unique id.
// i have written some notes in there, hopefully it'll help you to complete the assignment. Or we can have a look at 
// what you got done on Friday