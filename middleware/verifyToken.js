const User = require("../models/User");
const jwt = require('jsonwebtoken');

//VERIFY TOKEN
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;

    if(authHeader){
        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
            if(err) res.status(403).json('Invalid Token, Authorization Failed');
            
            req.user = user;

            console.log(user);

            next();
        });
    }else{
        return res.status(401).json("You are not Authorized");
    }
}


//Verify & Authorize the user
const verifyAndAuthorize = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id){
            next();
        }else{
            res.status(403).json("You are restricted from performing this operation")
        }
    });
}

//Verify an Admin
const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.isAdmin){
            next();
        }else{
            res.status(403).json("You are restricted from performing this operation")
        }
    });
}

//Verify an Admin
const verifyAdminOrAgent = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.isAdmin || req.user.isAgent){
            next();
        }else{
            res.status(403).json("You are restricted from performing this operation")
        }
    });
}

const verifyAgent = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.isAgent){
            next();
        }else{
            res.status(403).json("You are restricted from performing this operation")
        }
    });
}
module.exports = {verifyToken, verifyAndAuthorize, verifyAdmin, verifyAgent, verifyAdminOrAgent};
