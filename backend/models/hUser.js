const mongoose = require('mongoose');

const CardSchema = mongoose.Schema(
  {
    number: { type: Number, length: 16, },
  }
  );

const userSchema = mongoose.Schema(
  {
//....................... first name   
    name: {
      type: String,
      required: [true, 'Name can not be empty.'],
    },
//....................... family name  
    family: {
      type: String,
      required: [true, 'Please add a name'],
    },
//....................... nickname should be assign to name as default in runtime
    nickname: {
      type: String,
      
    },
//....................... title as Dr, Mr, Ms, Mrs, Jr, 
    title: {
      type: String,
    },
//.......................
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
    },
//.......................
    emailValidation: {

      verified: {
        type: Boolean,
        default: false, 
      },
      dateOfRegister: { 
        type: Date,
        default: Date.now,
      },
      dateOfVerify: {
        type: Date,
      },

    },
//......................
    recoveryEmail: {
        type: String,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
    },

    password: {
      type: String,
      required: [true, 'Please add a password'],
      minlength: 6,
    },

    avatar: {

    },

    role: {
      type: Number,
      required: true,
    },

  },
  //-----------------------
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Users', userSchema);
