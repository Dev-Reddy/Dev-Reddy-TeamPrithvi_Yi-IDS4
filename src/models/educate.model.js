let id = 1;

//Creating the EducateModel class

export default class EducateModel {
  constructor(title, briefDesc, author, date, image) {
    this.id = id++;
    this.title = title;
    this.briefDesc = briefDesc;
    this.author = author;
    this.date = date;
    this.image = image;
  }
}

//Creating some educates

var educates = [
  {
    id: 1,
    title: "Educate 1",
    briefDesc: "This is the brief description of Educate 1",
    author: "John Doe",
    date: "2024-05-05",
    image: "https://via.placeholder.com/150",
  },
];
