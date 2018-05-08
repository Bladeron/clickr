const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const CollectionSchema = new Schema({
  name: string,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  content: string,
});

const User = mongoose.model('Collection', CollectionSchema);
module.exports = Collection;