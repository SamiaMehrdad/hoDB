// hoduno Database schema definition.
// Object: Item
// What this is: Item defines 
// Created oct 1, 2022 Mehrdad Samia 
// All URL fields Should be replace with actual strigified equevalent when portable version get generated.
// Fields in default node are default values and can be overwritten. These fields should be copied to the overwriting ones and those values should be accessed instead.
//* include index: { unique: true } in a high search demand field
//* include select: false to fields like password to prevent returning in queries

const mongoose = require('mongoose')
const HF = require("../../frontend/src/share/hfixes")
const User = require('./hUser')
const Category = require('./hCategory')
const mongID = mongoose.Schema.Types.ObjectId;

  const itemSchema = mongoose.Schema(
      {
        match: [{type: mongID, ref:'Single'}],//----  Can be One for Q/A PAIR style, or more for MULTI style, but ONLY one mate can be signed as Question.
        order: {type: Number, },          //----  order of appiearance, if apply.
        reason: { type: String, },        //----  a text describing why this is related to others, used for mystery types.
        adverseList: [{ type: Number }],  //----  list of all items which never can be in the same screen with this.
        alliesList: [{ type: Number }],   //----  list of all related items, for multi choice scenarios.
        narration: { type: String },      //----  URL to audio that will be played with this item.  
        hint: { type: String },           //---- 
      },
      {
        timestamps: true,
      }
      );

  module.exports = mongoose.model('Item', itemSchema);