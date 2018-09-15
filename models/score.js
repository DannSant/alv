const mongoose = require('mongoose');
var Schema = mongoose.Schema;


var scoreSchema = new Schema({
    name: { type: String, required: [true, "El nombre es necesario"] },
    score: { type: Number, required: [true, 'Score  es necesaria'] }
});



module.exports = mongoose.model("Score", scoreSchema);