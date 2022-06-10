const Course = require("../models/Course");
const { mutipleMongooseToObject, mongooseToObject } = require("../../util/mongoose")
class SiteController {
  index(req, res, next) {
    //CALL BACK
    // Course.find({}, function (err, course) {
    //   if (!err) {
    //     res.json(course);
    //   } else {
    //     next(err)
    //   }
    // });

    //Promise
    Course.find({})
      .then((courses) => {
        courses = mutipleMongooseToObject(courses)
        res.render("home", {
          courses,
        });
      })
      .catch(next);
  }
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
