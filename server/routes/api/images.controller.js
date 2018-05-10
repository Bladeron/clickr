const express = require('express');
const router = express.Router();
const Pic = require('../../models/image.model')
const ExifImage = require('exif').ExifImage;
var Path = require('path');
const uploadCloud = require("../../config/multer");
const upload = require("../../config/local")
const cloudinary = require("cloudinary");

const authRoutes = require('./authentication.controller');
const thrRoutes = require('./threads.controller');

router.post('/', upload.single('file'), function (req, res) {

  var path = req.file.path;
  new ExifImage({ image: path }, function (error, exifData) {
    if (error)
      console.log('Error: ' + error.message);
    else {
      console.log(exifData.gps.GPSLatitude)

      let location = {
        type: 'Point',
        coordinates: [exifData.gps.GPSLatitude,0]
      }
      
      const image = new Pic({
        owner: req.user.id,
        data: exifData ,
        url: req.file.url,
        location: location
      });
    
      
      image.save().then(image => {
        cloudinary.uploader.upload(req.file.path, function (result) { console.log(result) })
        console.log(image)
        return res.json({
          message: 'New image created!',
          image: image
        });
      });
    }
  });

  
  
  
});

module.exports = router;
