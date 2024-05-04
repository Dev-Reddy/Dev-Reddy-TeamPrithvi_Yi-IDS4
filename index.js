//EXTERNAL MODULES IMPORT

//Importing express
import express from "express";

//Setting up the express app
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//EXPORTING THE APP
export default app;
