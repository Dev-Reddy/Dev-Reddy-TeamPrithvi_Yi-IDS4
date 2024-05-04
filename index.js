//IMPORTING NODE MODULES

import express from "express";
import ejsLayouts from "express-ejs-layouts";

// ========================================================

//EXPRESS AND EJS SETUP

//Setting up the express app
const app = express();

//Setting up the view engine
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));

// =========================================================

//MIDDLEWARES

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Static Files Middleware
app.use(express.static(path.join(path.resolve(), "public")));

//EJS Layouts Middleware
app.use(ejsLayouts);

//Session Middleware
app.use(
  session({
    secret: "SecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

//Cookie Parser Middleware
app.use(cookieParser());

// =========================================================

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//EXPORTING THE APP
export default app;
