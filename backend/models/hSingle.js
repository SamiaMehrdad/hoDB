const HF = require('../../share/hfixes')
const User = require('./hUser')
const Category = require('./hCategory')


const singleSchema = mongoose.Schema(
    {
      value: {type: Number, },        //----  this value can be used to make 'RANGE' type games.
      isQuestion: { type: Boolean, }, //----  true/false : This is question/answer.
      caption: { type: String, },     //----  can be used instead of image, can be blank.
      image: { type: String },        //----  URL to image. can be large in width to implant multi imaging
    },
    {
      timestamps: true,
    }
  );

  module.exports = mongoose.model('Single', singleSchema);