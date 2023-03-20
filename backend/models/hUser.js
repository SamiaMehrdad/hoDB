const mongoose = require('mongoose');
//const HF = require('../../share/hfixes');
const HF = require("../../frontend/src/share/hfixes")


const CardSchema = mongoose.Schema(
  {
    number: { type: Number, length: 16, },
  }
  );

const userSchema = mongoose.Schema(
  {
    type: { type: String, required: true, enum: Object.values(HF.Enum.UserType) },
//first name   

    name: { type: String, required: [true, 'Name can not be empty.'], },
//last name  
    family: { type: String, required: [true, 'Please add a name'], },
//nickname is assign to name as default 
    nickname: {
      type: String,
      default: function () { 
                              return this.name + Math.random()*1000; 
                            } //TODO Check it
    },
//? title as Dr, Mr, Ms, Mrs, Jr, Is it necessary?!
//?    title: { type: String, },
//email address is mandatory
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
    },
//email should be validated
    emailValidation: { //TODO Think about design.
      isVerified: { type: Boolean, default: false, },
      dateOfRegister: { type: Date, default: Date.now, },
      dateOfVerify: { type: Date, },
      verificationCode: { type: String, },
      verificationSentMoment:{ type: Date, },
      isReminderSent: { type: Boolean, default: false, },
    },
    uiLang: Number, // comming from languages enum
//TODO Change this
    language: [{    // array of all languages user have
      type: Number, // select from a predefined list  
    }],
    //TODO Change this
    gender: Number, // 0: Unknown, 1:M,  2:F, 3:NB    
//Age related fields
    age:{
      dob: { type: Date, },
      isVerified: { type: Boolean, default: false, },
    }, 
//Engagement motivator and reminder fields
  reminder: {
    isSent: { type: Boolean, default: false, },
    isNeeded: { type: Boolean, default: false, },
  },   
//The last login moment
    lastLogin: { type: Date, },
//Optional recovery email
    recoveryEmail: {
        type: String,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
    },
//login password, should be stored as coded string
    password: { type: String, required: true, minlength: 6, },
//URL to avatar image
    avatar: {

    },
//...................... 
    role: {     // select from a predefined list  
      type: Number, // enum
      required: true,
    },
//...................... 
    stars: { //TODO Think about design.
      asMaker: Number,
      asPublisher: Number,
    },
    wallet:{ //TODO Think about design.
      normalStones: {type: Number, },  // normal stones are cashable to real money
      lockedStones: {type: Number, },  // locked stones are welcomes and rewards, not cashable to real money
      cash: {type: Number, },          // amount of real money
      currency: {type: Number, default: 1, },      // enum
    },
  },
  //-----------------------
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
