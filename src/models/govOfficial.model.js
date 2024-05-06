//ID - Unique identifier for the admin
let id = 1;

//Creating the GovOfficialModel class
export default class GovOfficialModel {
  constructor(
    name,
    email,
    number,
    password,
    wardNo,
    zoneNo,
    pincode,
    city,
    district,
    state
  ) {
    this.id = id++;
    this.name = name;
    this.email = email;
    this.number = number;
    this.password = password;
    this.wardNo = wardNo;
    this.zoneNo = zoneNo;
    this.pincode = pincode;
    this.city = city;
    this.district = district;
    this.state = state;
    this.complaints = [];
  }

  static getGovOfficial(pincode) {
    return govOfficials.find((official) => official.pincode == pincode);
  }

  
}

//Creating some GovOfficials

// var govOfficials = [
//   new GovOfficialModel(
//     "Jane Doe",
//     "janedoe",
//     "jane@doe.com",

//     "1234567890",
//     "1234",
//     "12",
//     793113,
//     "Mawsynram",
//     "East Khasi Hills",
//     "Meghalaya",
//     "India",
//     "https://randomuser.me/api/portraits/w"
//   ),
// ];

var govOfficials = [
  new GovOfficialModel(
    "Jane Doe",
    "jane@doe.com",
    "123",
    "a",
    "1234",
    "12",
    793113,
    "Mawsynram",
    "East Khasi Hills",
    "Meghalaya"
  ),
];
