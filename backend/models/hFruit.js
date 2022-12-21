// hoduno Database schema definition.
// Object: hFruit
// What this is: hFruit is a title with a UID which is published and belongs to a user or store.
// Created oct 30, 2022 Mehrdad Samia 
// All URL fields Should be replace with actual strigified equevalent when portable version get generated.
// Fields in default node are default values and can be overwritten. These fields should be copied to the overwriting ones and those values should be accessed instead.
// 

const mongoose = require('mongoose');
const User = require('./hUser');

const fruitSchema = mongoose.Schema(
    {
        title: {type: mongoose.Types.ObjectId, ref:"Title"}, // actual title which this is one of those
        owner: {type: mongoose.Types.ObjectId, ref:"User"}, /////TODO edit it
        uid: String, // this should be generated ONE TIME, through FISRT ownership change ( first sell ) using its publish.baseID and a random 10 digits number
        store: {type: mongoose.Types.ObjectId, ref:"Store"},
        publish: {type: mongoose.Types.ObjectId, ref:"Publish"},
        isVergin:{ type: Boolean, default: true, }, // this should change through FISRT ownership change ( first sell )
    },
{
  timestamps: true,
}
);

module.exports = mongoose.model('Fruit', fruitSchema);