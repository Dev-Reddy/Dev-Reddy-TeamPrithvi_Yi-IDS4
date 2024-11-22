//Importing user model
import AdminModel from "../models/admin.model.js";
import UserModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { sendSOSMail } from "./sendMail.js";

//creating user controller class
class UserController {
  //render signin page

  static getSignIn(req, res) {
    res.render("signin", {
      loggedIn: req.session.loggedIn,
    });
  }

  //sign in user

  static signIn(req, res) {
    const { email, password } = req.body;
    const user = UserModel.signIn(email, password);
    if (!user) {
      return res.status(400).send("Invalid credentials");
    } else {
      //1. Create a token
      const token = jwt.sign(
        {
          userID: user.id,
          email: user.email,
        },
        "ApagTT16lOfH2T2wIhhHImFe7Afs3wD9",
        {
          expiresIn: "15d",
        }
      );
      req.session.token = token;
      req.session.userID = user.id;
      req.session.pincode = user.pincode;
      req.session.loggedIn = true;
      //2. Send the token to the client
      return res.status(200).redirect("/");
    }
  }

  //sign out user

  static signOut(req, res) {
    req.session.destroy((err) => {
      if (err) {
        return res.status(400).send("Could not sign out");
      } else {
        return res.status(200).redirect("/");
      }
    });
  }

  //render signup page

  static getSignUp(req, res) {
    res.render("signup", {
      loggedIn: req.session.loggedIn,
    });
  }

  //sign up user

  static async signUp(req, res) {
    const {
      name,
      email,
      number,
      password,
      address,
      pincode,
      city,
      district,
      state,
      wardNo,
      zoneNo,
      municipality,
      verificationType,
      verificationID,
    } = req.body;

    if (UserModel.checkUserExists(email)) {
      return res.status(400).redirect("/user/signin");
    }

    const coordinateAddress = `india+${pincode}`;
    const geoLocationData = await fetch(
      `https://geocode.maps.co/search?q=${coordinateAddress}&api_key=66366662de130938126976jscf35868`
    )
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.log(err));

    const coordinates = {
      latitude: geoLocationData[0].lat,
      longitude: geoLocationData[0].lon,
    };

    const verificationDocument = "uploads/document/" + req.file.filename;
    const user = UserModel.addUser(
      name,
      email,
      number,
      password,
      coordinates,
      address,
      pincode,
      city,
      district,
      state,
      wardNo,
      zoneNo,
      municipality,
      verificationType,
      verificationDocument,
      verificationID
    );

    if (!user) {
      return res.status(400).send("Could not sign up");
    } else {
      console.log(user);
      const token = jwt.sign(
        {
          userID: user.id,
          email: user.email,
          pincode: user.pincode,
        },
        "ApagTT16lOfH2T2wIhhHImFe7Afs3wD9",
        {
          expiresIn: "15d",
        }
      );
      req.session.token = token;
      req.session.userID = user.id;
      req.session.pincode = user.pincode;
      req.session.loggedIn = true;
      const alertUser = {
        number: user.number,
        email: user.email,
        address: user.address,
      };
      AdminModel.addUserToAlertList(pincode, alertUser);
      //2. Send the token to the client
      return res.status(200).redirect("/");
    }
  }

  static alert(req, res) {
    const { name, number, location, pincode } = req.body;
    console.log("Body ", req.body);
    console.log(req.headers);
    if (req.headers["geolocation"]) {
      const geolocation = JSON.parse(req.headers["geolocation"]);
      const coordinatesObj = {
        latitude: geolocation.latitude,
        longitude: geolocation.longitude,
      };
      const coordinates = JSON.stringify(coordinatesObj);
      console.log("Coordinates ", coordinates);
      sendSOSMail(pincode, name, number, location, coordinates);
      return res.status(200).redirect("/");
    }
    console.log("No Coordinates");
    sendSOSMail(pincode, name, number, location);
    return res.status(200).redirect("/");
  }
}

//exporting user controller

export default UserController;
