const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String, required: true,
        },
        phone: {
            type: String, required: false,
        },
        location: {
            type: String, required: false,
        },
        isAdmin: {type: Boolean, default: false},
        isAgent: {type: Boolean, default: false},
        userType: {
            type: String, default: "user"
        },
        skills:{
            type: Array, default: []
        },
        profile: {
            type: String,
            required: true,
            default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlwgT43LjLiOsOKgrNiDwHJH4jupqqgMvw1OfGpe8UcUlZF-AQLt_L0HauH6XE4-ZlEyvkxFKQF5U&usqp=CAU&ec=48665699',
        },
    },  {timestamps: true}
);


module.exports = mongoose.model("User", UserSchema);
