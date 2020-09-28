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
 
  


window.setInterval(function(){
    fetch(`https://www.youtube.com/comment_service_ajax?action_get_comments=1&pbj=${pbj}&ctoken=${ctoken}&continuation=${continuation}&itct=${itct}`,
   {  
      method: "POST",
      body: formData,
      headers:{
        "x-spf-referer": "https://www.youtube.com/watch?v=eNmwulmahpk",
        "x-spf-previous": "https://www.youtube.com/watch?v=eNmwulmahpk",
        "x-youtube-ad-signals": "dt=1601204904589&flash=0&frm&u_tz=330&u_his=15&u_java&u_h=768&u_w=1360&u_ah=728&u_aw=1360&u_cd=24&u_nplug=3&u_nmime=4&bc=31&bih=150&biw=1343&brdim=0%2C0%2C0%2C0%2C1360%2C0%2C1360%2C728%2C1360%2C150&vis=1&wgl=true&ca_type=image&bid=ANyPxKqCdC9DdYX6N9dXhnurbAyjPopwOIIc7oE_5kZSVPLuzNVsHApfyQzztfBp3NmqSZngldZopURCphARL4cJus_xd4It1g",
        "x-youtube-client-name": 1,
        "x-youtube-client-version": "2.20200925.01.00",
        "x-youtube-device": "cbr=Chrome&cbrver=85.0.4183.121&ceng=WebKit&cengver=537.36&cos=Windows&cosver=10.0",
        "x-youtube-identity-token": "QUFFLUhqbjNkOE8ycENobFJfWEh0VWxWcUZaZlgyeElwZ3w=",
        "x-youtube-page-cl": "333538144",
        "x-youtube-page-label": "youtube.ytfe.desktop_20200924_1_RC0",
        "x-youtube-time-zone": "Asia/Calcutta",
        "x-youtube-utc-offset": 330,
        "x-youtube-variants-checksum": "122acbbceb83a90e0f7b1e64d246da31"
      }
  
   }) 
    .then((res) => {return res.json() })
    .then((data) =>{ 
        let comments_cont=data.response.continuationContents.itemSectionContinuation.contents.length
        let newComment=comments_cont >  last_counts ? true : false
        if(newComment){
            console.log("New Comment");
            last_counts=last_counts+1;
            fetch("http://localhost:3000/changetitle");
        }else{
            console.log("No New Comment");
        }
        console.log("Total Comments:" + comments_cont);
      })
    .catch((error) => console.log(error))
}, 5000);

//$.entities.comments.length

var username=data.entities.channels.filter(function(data){
    return data.channel.title === "UCamebWtCXTlUPJGz1ru6Jgg"
})

console.log(username);