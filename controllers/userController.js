import userModel from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function userRegistration(req, res) {
    const {name, email, password, password_confirmation} = req.body;
    const user = await userModel.findOne({email:email});
    if(user){
        res.send({"status": "error", "message": "User already exists"});
    }else{
        if(name && email && password && password_confirmation){
            if (password === password_confirmation) {
                try {
                    const salt = await bcrypt.genSalt(16);
                    const hashedPassword = await bcrypt.hash(password, salt);
                    const newUser = new userModel({
                        name: name,
                        email: email,
                        password: hashedPassword
                    });
                    await newUser.save();
                    const token = await jwt.sign({ userID: newUser._id }, process.env.SECRET_KEY, { expiresIn: "5d" });

                    res.status(201).json({ "status": "success", "message": "User registered successfully", "token": token });

                } catch (error) {
                    res.send({ "status": "error", "message": "Error in registration" });
                }
            } else {
                res.send({ "status": "error", "message": "Passwords do not match" });
            }
           
        }else{
            res.send({"status": "error", "message": "All fields are required"});
        }
    }
}

async function userLogin(req, res){
    try{
        const {email, password} = req.body;
        const user = await userModel.findOne({email:email})
        if(user){
            const passMatch = await bcrypt.compare(password, user.password);
            if(user.email===email && passMatch){
                const token = await jwt.sign({userID: user._id}, process.env.SECRET_KEY, {expiresIn: "5d"});
                res.send({"status": "success", "message": "User logged in successfully", "token": token});
            }else{
                res.send({"status": "error", "message": "Invalid email or password"});
            }
        }else{  
            res.send({"status": "error", "message": "User does not exist"});
        }
    }catch(error){
        res.send({"status": "error", "message": "Error in login"});
    }
}

async function changePassword(req, res){
    const {password, password_confirmation} = req.body;
    if(password && password_confirmation){
        if(password !== password_confirmation){
            res.send({"status": "error", "message": "Passwords do not match"});
    }else{
        const salt = await bcrypt.genSalt(16);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const user = await userModel.findOneAndUpdate({_id: req.user_id}, {password: hashedPassword});
        res.send({"status": "success", "message": "Password changed successfully"});

    }
    
    }else{
        res.send({"status": "error", "message": "Password and password confirmation are required"});
}
}


export default {userRegistration, userLogin, changePassword};