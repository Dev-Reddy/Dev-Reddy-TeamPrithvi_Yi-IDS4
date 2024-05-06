import ComplaintModel from "../models/complaint.model.js";

export default class ComplaintController {
  //get complaint form
  static getComplaintForm(req, res) {
    res.render("new-complaint", {
      loggedIn: req.session.loggedIn,
    });
  }

  //add complaint

  static addComplaint(req, res) {
    const complaint = req.body;
    console.log(req.file);
    const media = "/uploads/complaint/" + req.file.filename;
    complaint.media = media;
    ComplaintModel.add(complaint);

    res.redirect("/");
  }
  //get all complaints or complaints by pincode
  static getComplaints(req, res) {
    if (req.query.pincode) {
      const complaints = ComplaintModel.getComplaintsByPincode(
        req.query.pincode
      );
      console.log(complaints);
      res.render("view-complaint", {
        complaints,
        loggedIn: req.session.loggedIn,
      });
      return;
    }
    const complaints = ComplaintModel.getAll();
    console.log(complaints);
    res.render("view-complaint", {
      complaints,
      loggedIn: req.session.loggedIn,
    });
  }

  //get complaint by id

  static getComplaint(req, res) {
    const complaint = ComplaintModel.getById(req.params.id);
    res.render("complaint", {
      complaint,
      loggedIn: req.session.loggedIn,
    });
  }
}
