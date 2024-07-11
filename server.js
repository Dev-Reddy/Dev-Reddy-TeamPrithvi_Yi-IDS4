//Importing the app from index.js
import app from "./index.js";

//Setting up the port
const PORT = process.env.PORT || 3300;

//Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
