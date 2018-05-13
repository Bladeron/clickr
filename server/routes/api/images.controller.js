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

      function ConvertDMSToDD(degrees, minutes, seconds, direction) {
        var dd = degrees + minutes / 60 + seconds / (60 * 60);

        if (direction == "S" || direction == "W") {
          dd = dd * -1;
        } // Don't do anything for N or E
        return dd;
      }


      let location = {
        type: 'Point',
        coordinates: [ConvertDMSToDD(exifData.gps.GPSLatitude[0], exifData.gps.GPSLatitude[1], exifData.gps.GPSLatitude[2], exifData.gps.GPSLatitudeRef), ConvertDMSToDD(exifData.gps.GPSLongitude[0], exifData.gps.GPSLongitude[1], exifData.gps.GPSLongitude[2], exifData.gps.GPSLongitudeRef)]
      }

      const image = new Pic({
        owner: req.user.id,
        data: exifData,
        url: req.file.url,
        location: location
      });


      image.save().then(image => {
        cloudinary.uploader.upload(req.file.path, function (result) { console.log(result) })
        //console.log(image)
        return res.json({
          message: 'New image created!',
          image: image
        });
      });
    }
  });

});

router.get('/:id', (req, res, next) => {
  Pic
    .findById(req.params.id)
    .exec((err, image) => {
      if (err) { return res.status(500).json(err); }
      if (!image) { return res.status(404).json(err); }

      return res.status(200).json(image);
    });
});

module.exports = router;
