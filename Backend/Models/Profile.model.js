const mongoose = require('mongoose');
const { default: Profile } = require('../../Frontend/src/Components/Profile');

const ProfileSchema = new mongoose.Schema({
    profilename:{type:String, required:true},
    nickname:{type:String, required:true},
    hobbies:{type:String, required:true},
    description:{type:String, required:true}
},
{
    timestamps:true
})

module.exports = mongoose.model('Profile', ProfileSchema);