const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const PicSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  data: {
    type: Object,
    default: {}
  },
  url: String,
  date: {
    type: Date,
    default: Date.now
  },
  location: { type: { type: String }, coordinates: [Number]}
});

PicSchema.index({ location: "2dsphere" });

const Pic = mongoose.model('Pic', PicSchema);
module.exports = Pic;
