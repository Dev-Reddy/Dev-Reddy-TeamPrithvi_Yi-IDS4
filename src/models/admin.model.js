//Description: Admin model schema and some admins

//ID - Unique identifier for the admin
let id = 1;

//Creating the AdminModel class
export default class AdminModel {
  constructor(name, username, email, number, password, photoPath) {
    this.id = id++;
    this.name = name;
    this.username = username;
    this.email = email;
    this.number = number;
    this.password = password;
    this.photoPath = photoPath;
  }

  //Method to sign in an admin
  static signIn(username, password) {
    let admin = admins.find(
      (admin) => admin.username === username && admin.password === password
    );
    return admin;
  }

  //Method to get admin by id

  static getAdminById(id) {
    let admin = admins.find((admin) => admin.id == id);
    return admin;
  }

  //add user to alert list
  static addUserToAlertList(pincode, user) {
    let pin = alertUsers.find((p) => p.pincode == pincode);
    if (pin) {
      pin.users.push(user);
    } else {
      alertUsers.push({
        pincode: pincode,
        users: [user],
      });
    }
  }

  //get all alert users

  static getAlertUsers() {
    return alertUsers;
  }
}

//Creating some admins

let admins = [
  new AdminModel(
    "Admin1",
    "admin1",
    "admin@1.com",
    "1234567890",
    "admin1",
    "https://randomuser.me/api/portraits"
  ),
];

// USER ALERTS

let alertUsers = [
  {
    pincode: 560001,
    users: [
      {
        number: "1234567890",
        email: "user1@ab.com",
        address: "123, 4th cross, 5th main, 6th sector, Bangalore",
      },
      {
        number: "1234567890",
        email: "user@2,com",
        address: "123, 4th cross, 5th main, 6th sector, Bangalore",
      },
    ],
  },
  {
    pincode: 400001,
    users: [
      {
        number: "1234567890",
        email: "sharadreddy11@gmail.com",
        address: "123, 4th cross, 5th main, 6th sector, Mumbai",
      },
      {
        number: "1234567890",
        email: "sdafsf",
        address: "123, 4th cross, 5th main, 6th sector, Mumbai",
      },
    ],
  },
  {
    pincode: 462001,
    users: [
      {
        number: "1234567890",
        email: "sfs",
        address: "123, 4th cross, 5th main, 6th sector, Bhopal",
      },
    ],
  },
  {
    pincode: 793113,
    users: [
      {
        number: "1234567890",
        email: "thedevreddy@gmail.com",
        address: "123, 4th cross, 5th main, 6th sector, Shillong",
      },
      {
        number: "1234567890",
        email: "devreddy4444@gmail.com",
        address: "123, 4th cross, 5th main, 6th sector, Shillong",
      },
    ],
  },
];
