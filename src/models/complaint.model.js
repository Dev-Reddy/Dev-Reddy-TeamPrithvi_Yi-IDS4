let id = 1;

import GovOfficialModel from "./govOfficial.model.js";

export default class ComplaintModel {
  constructor(
    name,
    contact,
    email,
    address,
    city,
    pincode,
    ward,
    zone,
    district,
    state,
    title,
    description,
    media
  ) {
    this.id = id++;
    this.name = name;
    this.contact = contact;
    this.email = email;
    this.address = address;
    this.city = city;
    this.pincode = pincode;
    this.ward = ward;
    this.zone = zone;
    this.district = district;
    this.state = state;
    this.title = title;
    this.description = description;
    this.media = media;
    this.status = "Pending";
  }

  static add(complaint) {
    const {
      name,
      contact,
      email,
      address,
      city,
      pincode,
      ward,
      zone,
      district,
      state,
      title,
      description,
      media,
    } = complaint;

    const newComplaint = new ComplaintModel(
      name,
      contact,
      email,
      address,
      city,
      pincode,
      ward,
      zone,
      district,
      state,
      title,
      description,
      media
    );

    complaints.push(newComplaint);
    console.log(complaints);

    const official = GovOfficialModel.getGovOfficial(pincode);

    if (!official) {
      return newComplaint;
    }

    if (official.complaints == undefined) {
      official.complaints = [];
      official.complaints.push(newComplaint);
    } else {
      official.complaints.push(newComplaint);
    }

    console.log(official);

    return newComplaint;
  }

  static getAll() {
    return complaints;
  }

  static getComplaintsByPincode(pincode) {
    return complaints.filter((complaint) => complaint.pincode == pincode);
  }

  static getById(id) {
    return complaints.find((complaint) => complaint.id == id);
  }
}

//Creating some complaints

var complaints = [
  new ComplaintModel(
    "John Doe",
    9876543210,
    "asda@gmail.com",
    "123, Main Street",
    "New Delhi",
    110091,
    "1",
    "1",
    "New Delhi",
    "Delhi",
    "Choked Drainage",
    "The drainage near my house is choked and needs immediate attention.",
    "/uploads/complaint/complaint.jpg"
  ),
  new ComplaintModel(
    "Jane Smith",
    9876543210,
    "jane@example.com",
    "456, Park Avenue",
    "Bhopal",
    462001,
    "South",
    "South",
    "Bhopal",
    "Madhya Pradesh",
    "Garbage Dumping",
    "There's illegal garbage dumping in our neighborhood.",
    "/uploads/complaint/complaint.jpg"
  ),
  new ComplaintModel(
    "Alice Johnson",
    9876543220,
    "alice@example.com",
    "789, Hill Road",
    "Mawsynram",
    793109,
    "East Khasi Hills",
    "East",
    "Mawsynram",
    "Meghalaya",
    "Waterlogging",
    "Continuous waterlogging causing inconvenience to residents.",
    "/uploads/complaint/complaint.jpg"
  ),
  new ComplaintModel(
    "Bob Anderson",
    9876543230,
    "bob@example.com",
    "101, Beach Street",
    "Mumbai",
    400001,
    "Colaba",
    "South",
    "Mumbai",
    "Maharashtra",
    "Potholes",
    "Major potholes on the main road need urgent repair.",
    "/uploads/complaint/complaint.jpg"
  ),
  {
    id: 99,
    name: "John Doe",
    contact: 9876543210,
    email: "john@example.com",
    address: "123, Main Street",
    city: "Bhopal",
    pincode: 462001,
    ward: "North",
    zone: "North",
    district: "Bhopal",
    state: "Madhya Pradesh",
    title: "Street Flooded",
    description: "Street near my house is flooded due to heavy rains.",
    media: "/uploads/complaint/complaint.jpg",
    status: "Resolved",
  },
];

// var complaints = [
//   new ComplaintModel(
//     1,
//     1,
//     "Choked Drainage",
//     "The drainage near my house is choked and needs immediate attention.",
//     {
//       latitude: 25.2973,
//       longitude: 91.5827,
//     },
//     "8H3M+M7P, Māwsynrām, Meghalaya 793113",
//     793113,
//     "Mawsynram",
//     "East Khasi Hills",
//     "Meghalaya",
//     "India",
//     1,
//     1,
//     "Mawsynram",
//     [
//       {
//         type: "image",
//         path: "path/to/image",
//       },
//       {
//         type: "image",
//         path: "path/to/image",
//       },
//     ]
//   ),

//   new ComplaintModel(
//     2,
//     2,
//     "Water Logging",
//     "The road near my house is waterlogged and water is overflowing.",
//     {
//       latitude: 28.6084,
//       longitude: 77.2931,
//     },
//     "Mayur Vihar",
//     110091,
//     "New Delhi",
//     "New Delhi",
//     "Delhi",
//     "India",
//     1,
//     1,
//     "New Delhi",
//     [
//       {
//         type: "image",
//         path: "path/to/image",
//       },
//       {
//         type: "image",
//         path: "path/to/image",
//       },
//       {
//         type: "video",
//         path: "path/to/video",
//       },
//     ]
//   ),
// ];
