//IMPORTING NODE MODULES

import express from "express";
import ejsLayouts from "express-ejs-layouts";
import path from "path";
import session from "express-session";
import cookieParser from "cookie-parser";

//IMPORTING ROUTERS
import homeRouter from "./src/router/home.routes.js";
import userRouter from "./src/router/user.routes.js";
import rainStatusRouter from "./src/router/rain-status.routes.js";
import adminRouter from "./src/router/admin.routes.js";
import complaintRouter from "./src/router/complaint.routes.js";

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

app.use("/", homeRouter);

// =========================================================

//ROUTES

app.use("/user", userRouter);
app.use("/rain-status", rainStatusRouter);
app.use("/admin", adminRouter);
app.use("/complaint", complaintRouter);

//EXPORTING THE APP
export default app;
