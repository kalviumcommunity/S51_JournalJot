const mongoose = require('mongoose');

const JournalSchema = new mongoose.Schema({
    id:{type:String,required:true },
    title:{type:String,required:true },
    content:{type:String,required:true },
    date:{type:Date,required:true },
    mood:{type:String,required:true }

},
{
    timestamps: true
})

module.exports = mongoose.model('Journal', JournalSchema);