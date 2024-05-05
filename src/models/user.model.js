// Description: User model schema and some users

//Creating the UserModel class

let id = 1;
export default class UserModel {
  // ------------------------------------------------------------

  //Constructor
  constructor(
    name,
    username,
    email,
    number,
    password,
    coordinates,
    address,
    pincode,
    city,
    district,
    state,
    country,
    wardNo,
    zoneNo,
    municipality,
    verificationType,
    verificationDocument,
    verificationID
  ) {
    this.id = id++;
    this.name = name;
    this.username = username;
    this.email = email;
    this.number = number;
    this.password = password;
    this.coordinates = coordinates;
    this.address = address;
    this.pincode = pincode;
    this.city = city;
    this.district = district;
    this.state = state;
    this.country = country;
    this.wardNo = wardNo;
    this.zoneNo = zoneNo;
    this.municipality = municipality;
    this.verificationType = verificationType;
    this.verificationDocument = verificationDocument;
    this.verificationID = verificationID;
    this.complaints = [];
  }
}

//Creating some users

var users = [
  new UserModel(
    1,
    "John Doe",
    "johndoe",
    "john@doe.com",
    "1234567890",
    "password",
    {
      latitude: 25.2973,
      longitude: 91.5827,
    },
    "8H3M+M7P, Māwsynrām, Meghalaya 793113",
    793113,
    "Mawsynram",
    "East Khasi Hills",
    "Meghalaya",
    "India",
    1,
    1,
    "Mawsynram",
    "Aadhar",
    "https://robohash.org/John.png?set=set4",
    "123456789"
  ),

  new UserModel(
    2,
    "Jane Doe",
    "janedoe",
    "jane@doe.com",
    "1234567890",
    "password",
    {
      latitude: 28.6084,
      longitude: 77.2931,
    },
    "Mayur Vihar",
    110091,
    "New Delhi",
    "New Delhi",
    "Delhi",
    "India",
    1,
    1,
    "New Delhi",
    "Aadhar",
    "https://robohash.org/Jane.png?set=set4",
    "123456789"
  ),
];
