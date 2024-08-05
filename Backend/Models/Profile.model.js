const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    Profilename:{type:String, required:true},
    email: {type: String, required: true},
    Nickname:{type:String, required:true},
    Hobbies:{type:String, required:true},
    Description:{type:String, required:true},
    ProfilePic: {type: String, required: true}
},
{
    timestamps:true
})

module.exports = mongoose.model('Profile', ProfileSchema);