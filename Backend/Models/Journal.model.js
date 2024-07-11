const mongoose = require('mongoose');

const JournalSchema = new mongoose.Schema({
    title:{type:String,required:true },
    content:{type:String,required:true },
    date:{type:Date,required:true },
    email : {type:String,required:true },
    imageUrl: {type:String}
},
{
    timestamps: true
})

module.exports = mongoose.model('Journal', JournalSchema);