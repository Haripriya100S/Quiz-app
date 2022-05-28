const exp = require('express')
const app = exp()
const mclient = require("mongodb").MongoClient;

require('dotenv').config()



//import path module
const path = require('path');

//connect build of react app with nodejs
app.use(exp.static(path.join(__dirname, './build')))

//import userApp and ProductApp
const userApp = require('./APIs/userapi');
// const productApp = require('./APIs/productapi');

//db connection url
const DBurl = process.env.DATABASE_CONNECTION_URL;

//connect with mongodb server
mclient.connect(DBurl)
.then((client) => {
    let dbObj = client.db("QuizDb")
    //create collection objects
    let userCollectionObj = dbObj.collection("usercollection");

    //sharing collection objects to API's
    app.set("userCollectionObj", userCollectionObj);
    
    console.log("DB Connection success")
})
.catch(error => console.log('Error in DB Connection', error))

app.use('/user-api', userApp)
// app.use('/product-api', productApp)

//dealing with page refresh
app.use('*', (request, response) => {
    response.sendFile(path.join(__dirname, './build/index.html'))
})

//handling invalid paths
app.use((request, response, next) => {
    response.send(
        {message: `path ${request.url} is Invalid`}
    )
})

//error handling middleware
app.use((error, request, response, next) => {
    response.send(
        {message: "Error occured", reason: ` ${error.message} `})
})

//asign port number
const port = process.env.PORT
app.listen(port, () => console.log(`server listening on port ${port}`));

