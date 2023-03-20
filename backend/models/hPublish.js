// hoduno Database schema definition.
// Object: Publish
// What this is: Publish defines 
// Created Nov 20, 2022 Mehrdad Samia 
// All URL fields Should be replace with actual strigified equevalent when portable version get generated.
// 

const mongoose = require('mongoose');
const Title = require('./hTitle');
const HF = require("../../frontend/src/share/hfixes")
const mongID = mongoose.Schema.Types.ObjectId;

const publishSchema = mongoose.Schema(
    {
        caption: String,
        adPhrase: String,
        adURL: String,
        //TODO replace design for country
        targetCountry: [String],        //---- Where this run is available + Taxing or other purpose
        comment: String,
        package: [{type: mongID, ref:'Title'}],                  //---- single title, or multiple as bundle
        count: Number,                  //---- how many of this Title(s) is in this Publish
        imgCover: { type: String, },    //---- URL to cover image. This can override title.imgCover
        imgThumb: { type: String, },    //---- URL to thumbnail cover image. This can overridde title.imgThumb
        baseID: String,
        price: Number,
        run: Number,                    //---- How many times this title has been published
        date: { type: Date, default: () => Date.now() },
        schedule: Date,                 //---- Scheduled launch date 
        publisher: String,              //TODO replace it with publisher object
    },
     {
        timestamps: true,
     }
    );

    module.exports = mongoose.model('Publish', publishSchema);