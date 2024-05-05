let id = 1;

//Creating the BlogModel class

export default class BlogModel {
  constructor(title, content, author, date, image, data) {
    this.id = id++;
    this.title = title;
    this.content = content;
    this.author = author;
    this.date = date;
    this.image = image;
    this.data = data;
  }
}

//Creating some blogs

var blogs = [
  {
    id: 1,
    title: "Blog 1",
    content: "This is the content of Blog 1",
    author: "John Doe",
    date: "2024-05-05",
    image: "https://via.placeholder.com/150",
    data: "This is the data of Blog 1",
  },
];
