// hoduno Database schema definition.
// Object: Review
// What this is: Reviwing titles by users
// Created Nov 28, 2022 Mehrdad Samia 
// All URL fields Should be replace with actual strigified equevalent when portable version get generated.
// 

const mongoose = require('mongoose');
const HF = require('../../share/hfixes');

const ReviewSchema = mongoose.Schema(
    {
        stars: { type: Number, required: true, max: HF.Review.MaxStars },
        comment: {type: String, maxLength: HF.Review.MaxTextLen },

    },
    {
        timestamps: true,
    }
     );

     module.exports = mongoose.model('Review', ReviewSchema);