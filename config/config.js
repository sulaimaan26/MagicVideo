const fs = require("fs");
const readline = require("readline");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

module.exports=class Config {
    
    // If modifying these scopes, delete your previously saved credentials
    // at ~/.credentials/youtube-nodejs-quickstart.json
    //var SCOPES = ["https://www.googleapis.com/auth/youtubepartner"]; 
    SCOPES = ["https://www.googleapis.com/auth/youtube.force-ssl"];

    //var TOKEN_DIR =(process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE) +"/credentials/";
    TOKEN_DIR ="C://Users//mohamed//Documents//node//Magic Video//credentials//";
    TOKEN_PATH = this.TOKEN_DIR + "youtube-updater.json";
    VIDEO_ID = "eNmwulmahpk";

   
}


