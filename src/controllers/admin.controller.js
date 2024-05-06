import AdminModel from "../models/admin.model.js";
import { pincodeRainWarning } from "./getRainDetails.js";
import { sendAlertMessage } from "./sendMail.js";


export default class AdminController {
  static getDashboard(req, res) {
    res.render("admin-dashboard", {
      loggedIn: req.session.loggedIn,
    });
  }

  static sendAlert(req, res) {
    const alertUsers = AdminModel.getAlertUsers();
    alertUsers.forEach((alertUser) => {
      const pincode = alertUser.pincode;
      const users = alertUser.users;
      pincodeRainWarning(pincode).then((rainWarning) => {
        if (!rainWarning) {
          return;
        }
        if (rainWarning >= 0) {
          users.forEach((user) => {
            sendAlertMessage(user);
          });
        }
      });
    });
  }
}
