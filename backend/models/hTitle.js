// hoduno Database schema definition.
// Object: Title
// What this is: Title defines 
// Created oct 1, 2022 Mehrdad Samia 
// All URL fields Should be replace with actual strigified equevalent when portable version get generated.
// Fields in default node are default values and can be overwritten. These fields should be copied to the overwriting ones and those values should be accessed instead.
//* include index: { unique: true } in a high search demand field
//* include select: false to fields like password to prevent returning in queries

const mongoose = require('mongoose')
const HF = require('../../share/hfixes')
const User = require('./hUser')
const Category = require('./hCategory')



const titleSchema = mongoose.Schema(
  {
   maker: User,
   name: { type: String, },           //----  Name or Title of this title! :-)
   category: [Category],              //----  Title can belongs to one or more categories
   description: { type: String, },    //----  There is also another description associated with specific run
   comment: { type: String, },        //----  Only visible to the maker
   finishDate: {type: Date, default: null}, //---- If not null, this item is not editable anymore
   deleteDate: {type: Date, default: null}, //---- If not null, this title is deleted by maker
   totalQ: { type: Number, },         //----  How many questions this title has
   style: { type: Number, },          //----  enum HF.title.style exclusive
   genre: { type: Number, },          //----  enum HF.title.genre exclusive
   rating: { type: Number, },         //----  enum HF.title.rating inclusive
   settings: {type: Number, },        //----  code of locked/enabled game settings. ** Move this to RUN
   useLeitner:{type: Boolean, default: false,},
   defaults:{
        shuffleMode: {type: String, enum: Object.values(HF.Enum.ShuffleMode)}, 
        imgCover: { type: String, },  //----  URL to cover image. This can be overridden by runCoverImg
        imgThumb: { type: String, },  //----  URL to thumbnail cover image. This can be overridden by runThumbnail
   },
   imgHome: [{ type: String, }],      //----  Array of URLs to home page images
   imgBack: [{ type: String, }],      //----  Array of URLs to main page background images
   musicIntro: { type: String, },     //----  This music will be played in home page
   musicBack: { type: String, },      //----  This music will be played as background during the game
   musicFinish: { type: String, },    //----  This music will be played after game is finished 
   soundClock: [{ type: String, }],   //----  These sounds will be play in order for timer tick
   soundAsk: [{ type: String, }],     //----  These sounds will be play randomly to indicate asking start moment
   beepCorrect: [{ type: String }],  //----  URL to beep sounds if correct.
   beepWrong: [{ type: String }],    //----  URL to beep sounds if wrong.
   sysIsPortable: {type: Boolean, default: false}, //--- Check/Set this value says URLs are actual values or Addresses
        //----  Array of Items of this title
   items: [{type: mongID, ref:'Item'},], //check it
   hintPrice: {type: Number,},        //---- Player should pay this to get a hint on any item 
  },
  {
    timestamps: true,
  }
);

// Things that are defined in Run document, instead of Title Document
// 1- shuffleType
// 2- 

/* // TEST
const Item = mongoose.model('Item', itemSchema);
const Title = mongoose.model('Title', titleSchema);
module.exports = { 
  Item, 
  Title 
};
*/ // TEST ENDS

module.exports = mongoose.model('Title', titleSchema);
