const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

//-------------------------------
// MongoDB Connection
//-------------------------------

mongoose
.connect("mongodb://127.0.0.1:27017/authDB")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

//-------------------------------
// User Schema
//-------------------------------

const UserSchema = new mongoose.Schema({

    name: String,

    email: {

        type: String,
        unique: true

    },

    password: String

});

const User = mongoose.model("User", UserSchema);

//-------------------------------
// JWT Secret
//-------------------------------

const SECRET = "mysecretkey";

//-------------------------------
// Register
//-------------------------------

app.post("/register", async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const user = await User.findOne({ email });

        if (user) {

            return res.json({

                message: "Email Already Exists"

            });

        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = new User({

            name,
            email,
            password: hashPassword

        });

        await newUser.save();

        res.json({

            message: "Registration Successful"

        });

    }

    catch (err) {

        res.status(500).json(err);

    }

});

//-------------------------------
// Login
//-------------------------------

app.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.json({

                message: "User Not Found"

            });

        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {

            return res.json({

                message: "Wrong Password"

            });

        }

        const token = jwt.sign(

            {

                id: user._id

            },

            SECRET,

            {

                expiresIn: "1h"

            }

        );

        res.json({

            message: "Login Successful",
            token

        });

    }

    catch (err) {

        res.status(500).json(err);

    }

});

//-------------------------------
// JWT Middleware
//-------------------------------

const auth = (req, res, next) => {

    const token = req.headers.authorization;

    if (!token) {

        return res.json({

            message: "Token Missing"

        });

    }

    try {

        const verify = jwt.verify(token, SECRET);

        req.user = verify;

        next();

    }

    catch (err) {

        res.json({

            message: "Invalid Token"

        });

    }

};

//-------------------------------
// Protected Route
//-------------------------------

app.get("/profile", auth, async (req, res) => {

    const user = await User.findById(req.user.id);

    res.json(user);

});

//-------------------------------

app.listen(5000, () => {

    console.log("Server Running");

});