const mongoose = require('mongoose');

const sponserSchema = mongoose.Schima({
    name: String,
    logo: String,   // path
    url: String,
    comment: String,    // Will show as hover text or flip text
    donation: Number,
    start: Date,

},
//-----------------------
{
  timestamps: true,
}
);

module.exports = mongoose.model('Sponser', sponserSchema);

