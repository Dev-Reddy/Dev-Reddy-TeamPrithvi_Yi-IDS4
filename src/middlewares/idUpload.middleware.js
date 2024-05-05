// Desc: Middleware to upload the resume file

//Import multer
import multer from "multer";

//Route to controller path - app.post("/apply/:id", fileUpload, applicationValidateRequest, applicantController.applyForJob);

// Multer configuration
//Stores the resume in the public/uploads folder

const storageConfig = multer.diskStorage({
  //destination to store the file

  destination: (req, file, cb) => {
    console.log("storageConfig");
    cb(null, "public/uploads/document");
  },

  //name of the file
  filename: (req, file, cb) => {
    const name =
      req.body.name +
      "_" +
      req.body.verificationType +
      "_" +
      Date.now() +
      "_" +
      file.originalname;
    cb(null, name);
  },
});

//Middleware to upload the resume file
export const idDocumentUpload = multer({ storage: storageConfig }).single(
  "veficationDocument"
);
