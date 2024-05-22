import express from 'express';
import mongoose, { Mongoose } from 'mongoose';
import 'dotenv/config';

import bcrypt from 'bcrypt'; //for password encryption
import { nanoid } from 'nanoid'; //for random string generating in username in case of same username

// Access token 
import jwt from 'jsonwebtoken';


//  Schema below 
//      |||
//      VVV
import User from './Schema/User.js';


const server = express();
let PORT = 3124;

// email and password validation regex
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password


// Password hashing

// enable json sharing in server
server.use(express.json());

mongoose.connect(process.env.DB_LOCATION, {
    autoIndex: true
})





// Format user data to return to user for the session 


    // user.save().then((u) => {
                
    //     // !!!!!!!!!!!!!!!!!!!!!!!
    //     // make sure to remove console log after testing
    //     return res.status(200).json({user: u})      ->instead of returning entire user data here we will return formated data 
    // })  

    const formatDatatoSend = (user) =>{
        // .id is a special id assigned by the mongodb which is being used to create unique access token
        const access_token = jwt.sign({ id: user._id}, process.env.SECRET_ACCESS_KEY)

        return {
            profile_img: user.personal_info.profile_img,
            username: user.personal_info.username,
            fullname: user.personal_info.fullname,
            access_token:access_token
        }
    }









// function to avoid duplicate username 

const generateUsername = async(email) =>{
    let username = email.split("@")[0];
    let isUsernameNotUnique = await User.exists({"personal_info.username":username}).then((result) => result)

    isUsernameNotUnique ? username += nanoid().substring(0, 5) : "";
    return username

}

server.post("/signup",(req, res) => {
    // signup form validation
    let { fullname, email, password } =req.body
    //validating  the data from frontend
    if(fullname.length < 3){
        // invalidation status code
        return res.status(403).json({"error":"Full name must be at least 3 letter long"})
     }
    // length of email=0 -> then true
    if(!email.length){
        return res.status(403).json({"error":"Add Email"})
    }
    // check if email pattern is true from emailRegex var -> not run this
    // if false themn run the if statement
    if(!emailRegex.test(email)){

        return res.status(403).json({"error":"Email is invalid"})
    }
    if(!passwordRegex.test(password)){
        return res.status(403).json({"error":"Password should be 6 to 20 characters long with a numeric, 1 lower and 1 upper case letter."})
    }

    
    //bcrypt hashing
    //hashed password is saved in db
    bcrypt.hash(password, 10, async(err, hashed_password) =>{
        // spliting ex@gmail.com -> [ex,gmail] ->ex   
        let username = await generateUsername(email);

        // Creating user object
        // setting a user variable to User schema from user.js file
        let user = new User({
            personal_info: { fullname, email, password: hashed_password, username }
        })

        //access user var and call save method of mongoose 
        // after save return console log to check


        user.save().then((u) => {
            
            // // !!!!!!!!!!!!!!!!!!!!!!!
            // // complete console log for testing
            // return res.status(200).json({user: u})
            return res.status(200).json(formatDatatoSend(u))
        })

        //error catching after using .then
        .catch(err => {

            // Error E11000 by mongodb saying duplication of email
            if(err.code == 11000){
                return res.status(500).json({"error":"Email already exists"})
            }

            return res.status(500).json({"error":err.message})
        })


        //     testing purpose
        // console.log(hashed_password)

    })

    // return res.status(200).json({"status":"okay"})

})

server.listen(PORT, () => {
    console.log('listening on port -> ' + PORT)
})