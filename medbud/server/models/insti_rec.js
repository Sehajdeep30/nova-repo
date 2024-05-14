const mongoose = require('mongoose');

const { Schema } = mongoose;

const instiRecSchema = new Schema({
  instiId: {
    type: String,
    required: true,
  },
  instiName: {
    type: String,
    required: true,
  },
});

const InstiRec = mongoose.model('InstiRec', instiRecSchema);

module.exports = InstiRec;
