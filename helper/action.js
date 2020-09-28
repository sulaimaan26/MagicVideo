const { google } = require("googleapis");

module.exports = class Action {

    constructor(VIDEO_ID){
        this.VIDEO_ID=VIDEO_ID;
    }

    makeAuthCall = (auth,title) => {
        youtube.videos.list(
            {
                auth: auth,
                id: this.VIDEO_ID,
                part: "id,snippet,statistics",
            },
            (err, response) => {
                if (err) {
                    console.log(`some shit went wrong ${err}`);
                    return;
                }

                if (response.data.items[0]) {
                    // We have found the video and the details
                    console.log(`We found the video, now updating...`);
                    this.updateVideoTitle(auth,response.data.items[0], title);
                }
            }
        );
    };

    updateVideoTitle = (auth,video,title) => {
        // get the number of views
        //let views = video.statistics.viewCount;
        //let likes = video.statistics.likeCount;
        //let commentCount = video.statistics.commentCount;

        video.snippet.title = title
        console.log(`Updating title to ${video.snippet.title}`);

        youtube.videos.update(
            {
                auth: auth,
                part: "snippet,statistics",
                resource: video,
            },
            (err, response) => {
                if (err) {
                    console.log(`There was an error updating ${err}`);
                    return;
                }
                if (response.data.items) {
                    console.log("Done");
                }
            }
        );
    };

    getVideoComment = (auth) => {
        youtube.commentThreads.list(
            {
                auth: auth,
                part: "snippet,replies",
                videoId: this.VIDEO_ID
            },
            (err, response) => {    
                if (err) {
                    console.log(`There was an error fetching comment ${err}`);
                    return;
                }
                if (response.data.items) {            
                    let comment = response.data.items[0].snippet.topLevelComment.snippet.textDisplay
                    let authorDisplayName = response.data.items[0].snippet.topLevelComment.snippet.authorDisplayName
                    let msg = `${authorDisplayName} says ${comment} | Youtube Magic Video`
                    this.makeAuthCall(auth, msg);
                    console.log("Done");
                }
            }
        );
    };


}


