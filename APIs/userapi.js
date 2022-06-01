const exp = require('express');
const userApp = exp.Router()
const expressAsyncHandler = require("express-async-handler")
const bcryptjs = require("bcryptjs");
// const res = require('express/lib/response');
userApp.use(exp.json())
//import jsonwebtoken to create token
const jwt = require("jsonwebtoken");


require("dotenv").config()

//user API routes------------
//create route to handle '/getusers' path
userApp.get("/getusers", expressAsyncHandler(async(request, response) => {
    let userCollectionObj = request.app.get("userCollectionObj");
    //get all users
    let users = await userCollectionObj.find().toArray();
    //send response
    response.send({message: "All users list", payload: users})
}));

//create route to user login
userApp.post("/login", expressAsyncHandler(async(request, response) => {
    let userCollectionObj = request.app.get("userCollectionObj");
    //get user credentials obj from client
    let userCredObj = request.body;
    //search by username for user
    let userOfdb = await userCollectionObj.findOne({username: userCredObj.username}) 
    //if user not existed
    if(userOfdb == null){
        response.send({message: "Invalid user"})
    }
    //if username existed
    else{
        //compare password
        let status = await bcryptjs.compare(userCredObj.password, userOfdb.password);
        if (status===false){
            response.send({message: "Invalid password"})
        }
        else{
            //create token
            let token = jwt.sign({username:userOfdb.username}, process.env.SECRET_KEY, {expiresIn:60})
            
            //send token
            response.send({message: "login success", payload: token, userObj: userOfdb})
        }
    }
}));


//create a route to 'create-user'
userApp.post("/create-user", expressAsyncHandler(async(request, response) => {
    let userCollectionObj = request.app.get("userCollectionObj");
    //get userObj from client
    let newUserObj = request.body;
    //serach by user by username
    let userOfdb = await userCollectionObj.findOne({username: newUserObj.username})
    //if user  existed
    if(userOfdb != null) {
        response.send({message: "user exists already"})
    }
    else{
        //hash password
        let hashedPwd = await bcryptjs.hash(newUserObj.password, 6);
        //replace plain password with hashed password in newUserObj
        newUserObj.password = hashedPwd;
        //insert newuserobj
        await userCollectionObj.insertOne(newUserObj);
        //send response
        response.send({message: "new user created successfully"}) 
    }
}))

userApp.put("/update-user", expressAsyncHandler(async(request,response)=>{
    let userCollectionObj = request.app.get("userCollectionObj");
    //get userObj from client
    let modifiedUserObj = request.body;

    //update
    await userCollectionObj.updateOne({ username : modifiedUserObj.username}, {$set: {...modifiedUserObj}})
    //send response
    response.send({message: "userObj modified"})
}));

//create route for removing user
userApp.delete('/remove-user/:username', expressAsyncHandler(async(request,response)=>{
    //get collection object
    let userCollectionObj = request.app.get("userCollectionObj");
    //get username from client
    let delusername = request.params.username
    let deluserObj = await userCollectionObj.findOne({username: delusername})
    if (deluserObj == null){
        response.send({message: "user not exist"})
    }
    else{
        await userCollectionObj.deleteOne({username: delusername});
        response.send({message: "user deleted"})
    }
}))



userApp.get('/taketest', expressAsyncHandler(async(request, response) => {
    let userCollectionObj = request.app.get("userCollectionObj");
    let users = await userCollectionObj.find().toArray();
    //send response
    response.send({message: "All Questions list", payload: users})
}))
module.exports = userApp;
