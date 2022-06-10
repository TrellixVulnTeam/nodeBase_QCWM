const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars")
const path = require("path")
const app = express();
//HTTP logger
app.use(morgan("combined"))

// Template Engine
app.engine("hbs", handlebars.engine({ extname: ".hbs" }))
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views"))
//config static file
app.use(express.static(path.join(__dirname, "public")))
const PORT = 3000;

app.get("/", (req, res) => {
    res.render("home")
})

app.listen(PORT, () => {
    console.log("CONNECT TO PORT", PORT)
})