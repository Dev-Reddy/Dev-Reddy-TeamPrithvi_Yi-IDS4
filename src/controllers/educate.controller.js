export default class EducateController {
  static getAll(req, res) {
    res.status(200).render("educate", {
      loggedIn: req.session.loggedIn,
    });
  }

  static getOne(req, res) {
    res.status(200).render("blog", {
      loggedIn: req.session.loggedIn,
    });
  }
}
