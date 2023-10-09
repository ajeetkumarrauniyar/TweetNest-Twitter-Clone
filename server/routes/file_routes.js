// File upload and download (e.g., Image) routes
// Importing necessary libraries and modules
const express = require('express'); 
const router = express.Router(); // 
const multer = require('multer'); // Importing multer for handling file uploads

// Defining storage configuration for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specifying the destination folder for uploaded files (e.g., 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Using the original filename for the uploaded file
    }
})

// Creating a multer instance with storage configuration
const upload = multer({
    storage: storage, // Setting the storage configuration
    limits: {
        fileSize: 1024 * 1024 * 1 // Limiting file size to 1MB (1,024 KB)
    },
    fileFilter: (req, file, cb) => {
        // Defining a file filter to accept only specific image file types (jpeg, jpg, png)
        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
            cb(null, true); // Accepting the file if it matches the supported types
        } else {
            cb(null, false); // Rejecting the file if it doesn't match the supported types
            return res.status(400).json({ error: "Supported File Types: .jpeg, .jpg, .png" }); // Returning an error message for unsupported file types
        }
    }
});

//Uploading File
router.post('/uploadFile', upload.single('file'), function (req, res){
    res.json({'fileName': req.file.filename});
});

//Downloading File
const downloadFile = (req, res) => {
    const fileName = req.params.fileName;
    const path = _basedir + "/uploads";

    res.download(path+fileName, (error)=>{
        if(error){
            res.status(500).send({message: "File cannot be downloaded"+ error})
        }
    })
}
router.get('/files/:filename', downloadFile);


// Exporting the router 
module.exports = router; 