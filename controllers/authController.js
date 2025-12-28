const User = require|("../models/user.model.js");
const jwt = require("jsonwebtoken");

//generateToken
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    });
};

//SignUp Controller
exports.registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        if (!name, !email, !password) {
            return res.status(400).json({success: false, message: 'Please provide name, email and password' })
        }
        const existing = await User.findOne ({ email});
        if (existing) return res.status(400).json({success: false, message: 'User already exists'});

        const user = await User.create({name, email, password});

        res.status(201).json({ 
            sucess: true, 
            user: {_id: user._id, 
            name: user.name, email:user. email}, 
            token: generateToken(user._id)});
    } catch (err) {
        console.log(err);
        res.status(500).json({sucess: false, message: 'Servor error'});
    }
};

//Login controller
exports.loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({sucess: false, message: "Invalid credentials"});
        }
        res.json({
            sucess: true,
            user: {_id: user._id, name: user.name, email: user.email},
            token: generateToken(user._id),
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({sucess: false, message: 'Server error' });
    }
};