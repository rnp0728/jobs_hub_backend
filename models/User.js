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
            default: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1687067359~exp=1687067959~hmac=912a066b34b54d4c2ae3d5e1228e7406e5c623a39885bded5c7b34d76c5d979f',
        },
    },  {timestamps: true}
);


module.exports = mongoose.model("User", UserSchema);
