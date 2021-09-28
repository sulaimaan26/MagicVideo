var reqpayload={}

var formData = new FormData();

let last_counts=7;

formData.append('session_token', 'QUFFLUhqa0VSREV2QVZJZW9lMU1zYkwxR3pHLXpjN0pyd3xBQ3Jtc0tuOHI0X3BFLWxocUVzOWloYkh3OU9aVG9PeExiX3UyTDRreDhTM3V4SHY0WjRhRjZJaG02X0p6aW1BQkhaR2RISm5CV3lMTVNYcjNaWk1PNk1oYkNkM1NKRDJ3Uzd4OTJaa2czVDlPYmdwTkVndGtXNUs1MzBfRnlLUVJfZy1neHhuVzJzeDNqQVJCbXVtbDZ6YlU3d01nWXN2QkE=');
  
let action_get_comments = 1
let pbj = 1
let ctoken = "EiYSC2VObXd1bG1haHBrwAEAyAEA4AEBogINKP___________wFAABgG"
let continuation = "EiYSC2VObXd1bG1haHBrwAEAyAEA4AEBogINKP___________wFAABgG"
let itct = "CNABEMm3AiITCIio_5yUiewCFejwOAYderQDyw=="
var key="AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8";
 
  
//Commecnt Query $.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand.continuationItems[0].commentThreadRenderer.comment.commentRenderer.contentText.runs[0].text


window.setInterval(async function(){
    var myHeaders = new Headers();
myHeaders.append("sec-ch-ua", "\"Google Chrome\";v=\"93\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"93\"");
myHeaders.append("X-Origin", "https://www.youtube.com");
myHeaders.append("sec-ch-ua-mobile", "?0");
myHeaders.append("Authorization", "SAPISIDHASH 1632727694_da2c57f09a2fad08df92e775ade3c59bc393131c");
myHeaders.append("sec-ch-ua-arch", "\"x86\"");
myHeaders.append("sec-ch-ua-full-version", "\"93.0.4577.82\"");
myHeaders.append("sec-ch-ua-platform-version", "\"10.0.0\"");
myHeaders.append("X-Youtube-Client-Name", "1");
myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36");
myHeaders.append("X-Youtube-Client-Version", "2.20210924.00.00");
myHeaders.append("X-Goog-AuthUser", "2");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("sec-ch-ua-model", "");
myHeaders.append("X-Goog-Visitor-Id", "CgtWQVdaTlZISDlVOCiE5cWKBg%3D%3D");
myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
myHeaders.append("Accept", "*/*");

var raw = JSON.stringify({
  "context": {
    "client": {
      "hl": "en",
      "gl": "IN",
      "remoteHost": "103.163.248.143",
      "deviceMake": "",
      "deviceModel": "",
      "visitorData": "CgtWQVdaTlZISDlVOCiE5cWKBg%3D%3D",
      "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36,gzip(gfe)",
      "clientName": "WEB",
      "clientVersion": "2.20210924.00.00",
      "osName": "Windows",
      "osVersion": "10.0",
      "originalUrl": "https://www.youtube.com/watch?v=5ReRV_K5akU",
      "platform": "DESKTOP",
      "clientFormFactor": "UNKNOWN_FORM_FACTOR",
      "configInfo": {
        "appInstallData": "CITlxYoGEP7WrQUQk9WtBRCw1K0FEJ2y_RIQkfj8EhDYvq0F"
      },
      "userInterfaceTheme": "USER_INTERFACE_THEME_DARK",
      "timeZone": "Asia/Calcutta",
      "browserName": "Chrome",
      "browserVersion": "93.0.4577.82",
      "screenWidthPoints": 1360,
      "screenHeightPoints": 160,
      "screenPixelDensity": 1,
      "screenDensityFloat": 1,
      "utcOffsetMinutes": 330,
      "connectionType": "CONN_CELLULAR_4G",
      "mainAppWebInfo": {
        "graftUrl": "https://www.youtube.com/watch?v=5ReRV_K5akU",
        "webDisplayMode": "WEB_DISPLAY_MODE_BROWSER",
        "isWebNativeShareAvailable": true
      }
    },
    "user": {
      "lockedSafetyMode": false
    },
    "request": {
      "useSsl": true,
      "internalExperimentFlags": [],
      "consistencyTokenJars": []
    },
    "clickTracking": {
      "clickTrackingParams": "CNwBELsvGAIiEwiVtaXN0J7zAhVVzY8KHQYOCTw="
    },
    "adSignalsInfo": {
      "params": [
        {
          "key": "dt",
          "value": "1632727685551"
        },
        {
          "key": "flash",
          "value": "0"
        },
        {
          "key": "frm",
          "value": "0"
        },
        {
          "key": "u_tz",
          "value": "330"
        },
        {
          "key": "u_his",
          "value": "1"
        },
        {
          "key": "u_h",
          "value": "768"
        },
        {
          "key": "u_w",
          "value": "1360"
        },
        {
          "key": "u_ah",
          "value": "728"
        },
        {
          "key": "u_aw",
          "value": "1360"
        },
        {
          "key": "u_cd",
          "value": "24"
        },
        {
          "key": "u_java",
          "value": "false"
        },
        {
          "key": "u_nplug",
          "value": "3"
        },
        {
          "key": "u_nmime",
          "value": "4"
        },
        {
          "key": "bc",
          "value": "31"
        },
        {
          "key": "bih",
          "value": "160"
        },
        {
          "key": "biw",
          "value": "1344"
        },
        {
          "key": "brdim",
          "value": "0,0,0,0,1360,0,1360,728,1360,160"
        },
        {
          "key": "vis",
          "value": "1"
        },
        {
          "key": "wgl",
          "value": "true"
        },
        {
          "key": "ca_type",
          "value": "image"
        }
      ],
      "bid": "ANyPxKqJLeh6KxgY9bddedH9Y-LyQ7nUBe5neK6FO4jF3cHZ3c_uY1uXHUS5ECEP0MCg9zdq3XKYcSM7NwPKhndrmXEHw-fFQg"
    }
  },
  "continuation": "Eg0SCzVSZVJWX0s1YWtVGAYyJSIRIgs1UmVSVl9LNWFrVTAAeAJCEGNvbW1lbnRzLXNlY3Rpb24%3D"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

try {
    let response = await fetch("https://www.youtube.com/youtubei/v1/next?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8", requestOptions)
   
    let res = await response.json()
    console.log(res);
    let commentcount = res.onResponseReceivedEndpoints[1].reloadContinuationItemsCommand.continuationItems.length
    console.log("Comment Count:"+ commentcount )
    if(commentcount > last_counts){
        fetch("https://magicvideoservice.herokuapp.com/changetitle")
        console.log("New Comment found");
        console.log("Last comment count"+ last_counts);
        last_counts = last_counts+1;
    }
} catch (error) {
    console.log('error', error)
}

}, 5000);

//$.entities.comments.length

// var username=data.entities.channels.filter(function(data){
//     return data.channel.title === "UCamebWtCXTlUPJGz1ru6Jgg"
// })

//console.log(username);