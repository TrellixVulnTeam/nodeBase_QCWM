const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const route = require("./routes");
const db = require("./config/db")
const app = express();
//HTTP logger
app.use(morgan("combined"));

// Template Engine
app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, 'resources','views'));
//config static file
app.use(express.static(path.join(__dirname, "public")));
//middleware xu ly sumit form
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
const PORT = 3000;

// Routes init
route(app);

//conectio to DB
db.connect();

app.listen(PORT, () => {
  console.log("CONNECT TO PORT", PORT);
});
