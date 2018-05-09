const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const picSchema = new Schema({
  Owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  Data: {
    type: Object,
  },
  url: string,
  date: {
    type: Date,
    default: Date.now
  },
  location: { 
    type: { type: String }, 
    coordinates: [Number] },
});

picSchema.index({ location: "2dsphere" });

const Reply = mongoose.model('Pic', picSchema);
module.exports = Pic;
