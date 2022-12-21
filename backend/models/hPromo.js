// hoduno Database schema definition.
// Object: Promo $tones
// What this is: Promo is defined by publisher, showing how users can collect $tones for this title run. 
// Created Dec 5, 2022 Mehrdad Samia 
// All URL fields Should be replace with actual strigified equevalent when portable version get generated.
// 

const mongoose = require('mongoose');
const Title = require('./hTitle');
const HF = require('../../share/hfixes');

const promoSchema = mongoose.Schema({
    publish: { type: mongID, ref: 'Publish', },
    promoAct: {type: String, enum: Object.values(HF.Enum.PromoAct) }, 
    userQuantity: Number, //---- Up to how many people, null means everyone
    stonePerUser: Number,
    validTill: Date,
    isActive: { type: Boolean, default: true, },
},
{
   timestamps: true,
}
);

module.exports = mongoose.model('Promo', promoSchema);