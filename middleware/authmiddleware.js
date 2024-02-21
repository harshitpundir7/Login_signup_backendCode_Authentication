import jwt from 'jsonwebtoken'; 
// import userModel from '../models/userModel.js';

async function checkUserAuth(req, res, next){
    const token = req.header('Authorization');
    if(!token){
        return res.status(401).json({message: "Access Denied"});
    }
    try{
        const verified = jwt.verify(token, process.env.SECRET_KEY);
        req.user = verified;
        req.user_id = verified.userID;
        next();
    }catch(err){
        res.status(400).json({message: "Invalid Token"});
    }
}
export default checkUserAuth;