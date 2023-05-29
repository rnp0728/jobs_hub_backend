const User = require("../models/User");
const CryptoJS = require("crypto-js"); 
const jwt = require('jsonwebtoken');

module.exports = {
    //Create User Account
    createUser: async (req, res) => {
        const newUser = new User(
            {
                username: req.body.username,
                email: req.body.email,
                password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET).toString(),
            }
        );
        try {
            const savedUser = await newUser.save();

            res.status(201).json(savedUser);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //Login User

    loginUser: async (req, res) => {
        try {
            const user = await User.findOne({email: req.body.email});

            !user && res.status(401).json("Authentication Failed, Incorrect Login Details");

            const decryptedPassword = CryptoJS.AES.decrypt(user.password, process.env.SECRET);

            const passwordString = decryptedPassword.toString(CryptoJS.enc.Utf8);

            passwordString !== req.body.password && res.status(401).json("Incorrect Password");

            const {password, __v,createdAt, ...userDetails} = user._doc;

            const token = jwt.sign({id: user._id, isAdmin: user.isAdmin, name: user.username, email: user.email, isAgent: user.isAgent}, process.env.JWT_SECRET);

            res.status(200).json({token, userDetails});

        } catch (error) {
            res.status(500);
            
        }
    },
}