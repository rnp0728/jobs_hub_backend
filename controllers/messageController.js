const Message = require("../models/Message");
const Chat = require("../models/Chat");
const User = require("../models/User");

module.exports = {
    sendMessage: async (req, res) => {
        const {content, chatId, receiver} = req.body;
        if(!content || !chatId){
            console.log('Invalid Data');
            return res.status(400).json("Invalid Data");

        }
        var newMessage = {
            sender: req.user.id,
            content: content,
            receiver: receiver,
            chat: chatId
        };

        try {

            var message = await Message.create(newMessage);

            message = await message.populate("sender", "username profile email");
            message = await message.populate("chat");
            message = await User.populate(message,{
                path: "chat.users",
                select: "username profile email"
            });

            await Chat.findByIdAndUpdate(req.body.chatId, {latestMessage: message});

            res.json(message);

        } catch (error) {
            res.status(400).json({error: error});
        }
    },
    getAllMessages: async (req, res) =>{
        try{

        }catch (error){

        }
    }
}