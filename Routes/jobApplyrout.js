const express = require('express');
const {createjobAppy,getjobApply,getSinglejobApply,getjobApplyByUser,updatejobApply,deletejobApply} = require("../Controllers/jobApplyctl");

// const {getusers,getone} = require('../controllers/user');

// const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validator/Admin/auth');
const router = express.Router();
// const multer=require("multer");
// const path =require("path");
// const AWS =require( 'aws-sdk');
// let upload = multer({
//     limits: {
//         fileSize: 1024 * 1024 * 5,
//     },
//     fileFilter: function (req, file, done) {
//         const allowedFileTypes = ['application/pdf', 'image/jpeg', 'image/png'];
//     if (allowedFileTypes.includes(file.mimetype)) {
//         // if (file.mimetype.startsWith("application/pdf") || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
//             done(null, true);
//         } else {
//             //prevent the upload
//             let newError = new Error("File type is incorrect");
//             newError.name = "MulterError";
//             done(newError, false);
//         }
//     },
// });


router.post('/jobApply/create', createjobAppy);
router.get('/jobApply/getAll',getjobApply);
router.get('/jobApply/getSingle/:id',getSinglejobApply);
router.get('/jobApply/getbyid/:id',getjobApplyByUser);
// router.put("/userprofilepic/:id",upload.single("profilePicture"),require("../controllers/user").profilePicture);
router.put("/jobApply/edit/:id",updatejobApply);
router.delete("/jobApply/delete/:id",deletejobApply);
// router.put("/updateuserPassword/:id",updatePassword);




module.exports = router;