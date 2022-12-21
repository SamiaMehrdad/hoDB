const mongoose = require('mongoose');

const categorySchema = mongoose.Schema(
    {
        catName: {type: String, required: true,},
        catParent: {type: categorySchema},
        isConfirmed: Boolean,
        comment: String,
        confirmComment: String,

    },
    {
        timestamps: true,
      }
    );


    module.exports = mongoose.model('Category', categorySchema);