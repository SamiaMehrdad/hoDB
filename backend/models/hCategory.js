const mongoose = require('mongoose');

const categorySchema = mongoose.Schema(
    {
        catName: {type: String, required: true,},
        catParent: {type: categorySchema},
        isConfirmed: {type:Boolean, default: false, required: true},
        confirmUser: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        comment: String,
        confirmComment: String,
    },
    {
        timestamps: true,
      }
    );


    module.exports = mongoose.model('Category', categorySchema);