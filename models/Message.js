const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
    sender:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    content: {
        type: String,
        trim: true,
    },
    receiver:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    chat: {
        type: String,
        ref: "Chat",
        required: true
    }
}, {timestamp: true});

module.exports = mongoose.model("Message", messageSchema);