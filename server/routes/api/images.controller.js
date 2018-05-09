const express = require('express');
const router  = express.Router();
const upload = require('../../config/multer');
const Pic = require('../../models/image.model')

const authRoutes = require('./authentication.controller');
const thrRoutes  = require('./threads.controller');

router.post('/', upload.single('file'), function (req, res) {
  console.log(req.body)
  
  const image = new Pic ({
    owner: "USUARIO",
    data: exifData,
    path: `/images/${req.file.filename}`,
  });

  image.save((err) => {
    if (err) {
      return res.send(err);
    }

    return res.json({
      message: 'New image created!',
      image: image
    });
  });
});

module.exports = router;
