//Importing the app from index.js
import app from "./index.js";

//Setting up the port
const PORT = process.env.PORT || 3300;
const host = process.env.HOST || "0.0.0.0";

//Starting the server
app.listen(PORT, host, () => {
  console.log(`Server is running on port ${PORT}`);
});
