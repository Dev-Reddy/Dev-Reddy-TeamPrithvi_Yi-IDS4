// Description: User model schema and some users

//Creating the UserModel class

let id = 1;
export default class UserModel {
  // ------------------------------------------------------------

  //Constructor
  constructor(
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
  ) {
    this.id = ++id;
    this.name = name;
    this.email = email;
    this.number = number;
    this.password = password;
    this.coordinates = coordinates;
    this.address = address;
    this.pincode = pincode;
    this.city = city;
    this.district = district;
    this.state = state;
    this.wardNo = wardNo;
    this.zoneNo = zoneNo;
    this.municipality = municipality;
    this.verificationType = verificationType;
    this.verificationDocument = verificationDocument;
    this.verificationID = verificationID;
    this.complaints = [];
  }

  // ------------------------------------------------------------

  //Methods

  //add a user

  static addUser(
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
  ) {
    const user = new UserModel(
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
    if (!users) {
      users = [];
    }
    users.push(user);
    console.log(users);
    return user;
  }

  static signIn(email, password) {
    console.log(email, password);
    console.log(users);
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    return user;
  }
  static checkUserExists(email) {
    const user = users.find((user) => user.email === email);
    return user;
  }
}

//Creating some users

var users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@doe.com",
    number: "1234567890",
    password: "password",
    coordinates: {
      latitude: 25.2973,
      longitude: 91.5827,
    },
    address: "8H3M+M7P, Māwsynrām, Meghalaya 793113",
    pincode: 793113,
    city: "Mawsynram",
    district: "East Khasi Hills",
    state: "Meghalaya",
    wardNo: 1,
    zoneNo: 1,
    municipality: "Mawsynram",
    verificationType: "Aadhar",
    verificationDocument: "https://robohash.org/John.png?set=set4",
    verificationID: 1234567890,
    complaints: [],
  },
];
