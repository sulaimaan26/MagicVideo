var express = require('express');
var app = express();
var cors = require('cors');
var Auth = require("./config/auth");
var Action = require("./helper/action");
const fs = require("fs");
var os = require('os');

let VIDEO_ID = "5ReRV_K5akU";

let auth =new Auth();
let action= new Action(VIDEO_ID);

app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).send("<h1> Server Running successfully </h1>")
})
app.get("/changetitle",(req,res)=>{
    //Load client secrets from a local file.
    fs.readFile("client_secret.json", function processClientSecrets(err, content) {
        if (err) {
            console.log("Error loading client secret file: " + err);
            res.status(400).send({message:"Title Updated successfully"})
            return;
        }
        // Authorize a client with the loaded credentials, then call the YouTube API.
        auth.authorize(JSON.parse(content), action.getVideoComment);
        res.status(200).send({message:"Title Updated successfully"})
    });
})

app.get("/info",(req,res)=>{
    res.send({
        type:os.type(),
        release:os.release(),
        platform:os.platform()
    })

})

let PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log("Listening in Port 3000");
})

console.log("running");





