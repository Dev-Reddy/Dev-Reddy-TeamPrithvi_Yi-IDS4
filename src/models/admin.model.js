//Description: Admin model schema and some admins

//ID - Unique identifier for the admin
let id = 1;

//Creating the AdminModel class
export default class AdminModel {
  constructor(id, name, username, email, number, password, photoPath) {
    this.id = id++;
    this.name = name;
    this.username = username;
    this.email = email;
    this.number = number;
    this.password = password;
    this.photoPath = photoPath;
  }
}
