'use strict'

const express = require('express');
const router = express.Router();
const multer  = require('multer');
// const upload = multer({ dest: 'uploads/' });


// router.post('/upload-profile', upload.single('profilePicture'), function(req, res, next){
//     console.log('FILE', req.file);
//     console.log('FILES', req.files);
//     res.send("Uploaded");
// })
var app = express()

const userCtrl = require('../controllers/usersCtrl');
const commonCtrl = require('../controllers/commonCtrl');
const {pathToUpload} = require('../config');
const storage = multer.diskStorage({
    destination:
    function(req, file, cd){
        const pathToDestination = path.join(__dirname, "../../uploads")
        cb(null, pathToUpload);
    },
    filename: function(req, file, cb){
    console.log('file', file.mimeType);
    const mimetype = file.mimeType.split('/')[1];
    console.log('mymentype', mimeType);
    cb(null, `${Date.now()}-${file.originalname}`)
}
})
const upload= multer({storage:storage});

router.get('/users', userCtrl.getUsers, commonCtrl.responseToJSON('users'));

// router.get('/users', userCtrl.getUsers, function(req, res, next) {
//   res.json(req.resources['users']);
// });
router.post('/users', userCtrl.createUsers, commonCtrl.responseToJSON('users'));
router.delete('/users/:userId', userCtrl.getUserById, userCtrl.deleteUser, commonCtrl.responseToJSON('users'));
router.put('/users/:userId', userCtrl.updateUser, commonCtrl.responseToJSON('users'));

module.exports = router;
