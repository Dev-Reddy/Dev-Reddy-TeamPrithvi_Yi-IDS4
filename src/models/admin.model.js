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
    latitue: 12.9716,
    longitude: 77.5946,
    pincode: 560001,
    city: "Bangalore",
    state: "Karnataka",
    users: [
      {
        name: "User1",
        number: "1234567890",
        email: "user1@ab.com",
        address: "123, 4th cross, 5th main, 6th sector, Bangalore",
      },
      {
        name: "User2",
        number: "1234567890",
        email: "user@2,com",
        address: "123, 4th cross, 5th main, 6th sector, Bangalore",
      },
    ],
  },
  {
    latitue: 19.076,
    longitude: 72.8777,
    city: "Mumbai",
    state: "Maharashtra",
    pincode: 400001,
    users: [
      {
        name: "User3",
        number: "1234567890",
        email: "afs@asd.com",
        address: "123, 4th cross, 5th main, 6th sector, Mumbai",
      },
      {
        name: "User4",
        number: "1234567890",
        email: "sdafsf",
        address: "123, 4th cross, 5th main, 6th sector, Mumbai",
      },
    ],
  },
  {
    latitue: 23.2599,
    longitude: 77.4126,
    city: "Bhopal",
    state: "Madhya Pradesh",
    pincode: 462001,
    users: [
      {
        name: "User5",
        number: "1234567890",
        email: "sfs",
        address: "123, 4th cross, 5th main, 6th sector, Bhopal",
      },
    ],
  },
];
