const User = require("../models/User");

const CryptoJS = require("crypto-js");


module.exports = {
    updateUser: async (req, res) => {
        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET).toString();
        }

        try {
            const UpdateUser = await User.findByIdAndUpdate(
                req.user.id, {
                    $set: req.body
                }, {new: true}
            );

            const {password, __v, createdAt, ...others} = UpdateUser._doc;

            res.status(200).json({...others});

        } catch (error) {
            res.status(500).json(error);
        }
    },

    updatePassword: async (req, res) => {
        try {
            const savedUser = await User.findByIdAndUpdate(req.user.id, {'password': CryptoJS.AES.encrypt(req.body.password, process.env.SECRET).toString()});

            res.status(200).json(savedUser);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    deleteUser: async (req, res) => {
        try {
            
            await User.findByIdAndDelete(req.user.id);
            res.status(200).json("Account deleted Successfully");

        } catch (error) {
            res.status(500).jason(error);
        }
    },

    getUser: async (req, res) => {
        try {
            
            const user = await User.findById(req.user.id);
            const {password, __v, createdAt, updatedAt, ...userData} = user._doc;
            res.status(200).json(userData);

        } catch (error) {
            res.status(500).jason(error);
        }
    },

    getAllUsers: async (req, res) => {
        try {
            
            const allUsers = await User.find({});
            res.status(200).json(allUsers);

        } catch (error) {
            res.status(500).jason(error);
        }
    }

}