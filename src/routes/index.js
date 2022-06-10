const newsRouter = require("./news");
const siteRouter = require("./site");
const courseController = require("./courses")
function route(app) {
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
  app.use("/khoa-hoc", courseController)
}
module.exports = route;
