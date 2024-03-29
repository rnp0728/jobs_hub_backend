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
        const user = await User.findById(req.user.id);

        !user && res.status(401).json("User not Found");

        var existingPassword = CryptoJS.AES.decrypt(user.password, process.env.SECRET).toString(CryptoJS.enc.Utf8);
        var password = req.body.password;
        if(password !== existingPassword){
            return res.status(401).json('Currrent Password didn\'t match with Your password');
        }
        console.log('Success');
        try {
            const savedUser = await User.findByIdAndUpdate(req.user.id, {'password': CryptoJS.AES.encrypt(req.body.newPassword, process.env.SECRET).toString()});

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

    deleteUserByAdmin: async (req, res) => {
        try {

            if(req.user.id === req.params.id && req.user.isAdmin){
                return res.status(402).json('Unable to delete an Admin\'s Account!');
            }
            
            await User.findByIdAndDelete(req.params.id);
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
    },

    searchUsers: async (req, res) => {
        try {
          const searchedUsers = await User.aggregate([{
            $search: {
              index: "users",
              text: {
                query: req.params.key,
                path: {
                  wildcard: "*",
                },
              },
            },
          }]);
          console.log(searchedUsers);
          res.status(200).json(searchedUsers);
        } catch (error) {
          res.status(500).json(error);
        }
      },

}