let id = 1;

export default class ComplaintModel {
  constructor(
    complainaintID,
    officialID,
    title,
    description,
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
    media
  ) {
    this.id = id++;
    this.complainaintID = complainaintID;
    this.officialID = officialID;
    this.title = title;
    this.description = description;
    this.status = "Pending";
    this.dateCreated = new Date().toISOString().split("T")[0];
    this.dateResolved = null;
    this.address = address;
    this.coordinates = coordinates;
    this.pincode = pincode;
    this.city = city;
    this.district = district;
    this.state = state;
    this.country = country;
    this.wardNo = wardNo;
    this.zoneNo = zoneNo;
    this.municipality = municipality;
    this.media = media;
  }
}

//Creating some complaints

var complaints = [
  new ComplaintModel(
    1,
    1,
    "Choked Drainage",
    "The drainage near my house is choked and needs immediate attention.",
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
    [
      {
        type: "image",
        path: "path/to/image",
      },
      {
        type: "image",
        path: "path/to/image",
      },
    ]
  ),

  new ComplaintModel(
    2,
    2,
    "Water Logging",
    "The road near my house is waterlogged and water is overflowing.",
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
    [
      {
        type: "image",
        path: "path/to/image",
      },
      {
        type: "image",
        path: "path/to/image",
      },
      {
        type: "video",
        path: "path/to/video",
      },
    ]
  ),
];
