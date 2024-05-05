//ID - Unique identifier for the admin
let id = 1;

//Creating the GovOfficialModel class
export default class GovOfficialModel {
  constructor(
    name,
    username,
    email,
    number,
    password,
    wardNo,
    zoneNo,
    pincode,
    city,
    district,
    state,
    municipality,
    photoPath
  ) {
    this.id = id++;
    this.name = name;
    this.username = username;
    this.email = email;
    this.number = number;
    this.password = password;
    this.wardNo = wardNo;
    this.zoneNo = zoneNo;
    this.pincode = pincode;
    this.city = city;
    this.district = district;
    this.state = state;
    this.municipality = municipality;
    this.photoPath = photoPath;
  }
}

//Creating some GovOfficials

var govOfficials = [
  new GovOfficialModel(
    "Jane Doe",
    "janedoe",
    "jane@doe.com",
    "1234567890",
    "1234",
    "12",
    793113,
    "Mawsynram",
    "East Khasi Hills",
    "Meghalaya",
    "India",
    "https://randomuser.me/api/portraits/w"
  ),
];
