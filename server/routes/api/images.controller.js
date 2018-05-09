const express = require('express');
const router = express.Router();
const upload = require('../../config/multer');
const Pic = require('../../models/image.model')
const ExifImage = require('exif').ExifImage;
var Path = require('path');

const authRoutes = require('./authentication.controller');
const thrRoutes = require('./threads.controller');

router.post('/', upload.single('file'), function (req, res) {
  console.log( req.file)

  const image = new Pic({
    owner: req.user.id,
    data: "",
    url: `/images/${req.file.filename}`,
    location: {
      type: 'Point',
      coordinates: [40, -3]
    }
  });


  image.save().then(image => {
    var path= req.file.path;
    

    new ExifImage({ image: path }, function (error, exifData) {
      if (error)
        console.log('Error: ' + error.message);
      else
        console.log(exifData); // Do something with your data!
    });

    return res.json({
      message: 'New image created!',
      image: image
    });
  });

  
});

module.exports = router;
