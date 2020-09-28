let videoName = "New | Youttube magic video";
var reqpayload = {
    context: {
      client: {
        clientName: 62,
        clientVersion: '1.20200922.02.01',
        hl: 'en',
        gl: 'IN',
        experimentsToken: ''
      },
      request: {
        returnLogEntry: true,
        internalExperimentFlags: [
          {
            key: 'force_live_chat_merchandise_upsell',
            value: 'false'
          },
          {
            key: 'force_route_delete_playlist_to_outertube',
            value: 'false'
          }
        ],
        sessionInfo: {
          token: 'QVo1MWR5VXpMbUxjWEhhVUl2Q1pTbFEyU3hITnBRQVJyXzhwQzFoQXlqanZILWs0SENBUkZJTGlVdktqSUh3cFVKcEc4M2NrRnZ3MlZxV3VqMW9M'
        }
      },
      user: {
        delegationContext: {
          externalChannelId: 'UCjfjqbyIWpcln-yq8vWM28w',
          roleType: {
            channelRoleType: 'CREATOR_CHANNEL_ROLE_TYPE_OWNER'
          }
        },
        serializedDelegationContext: 'EhhVQ2pmanFieUlXcGNsbi15cTh2V00yOHcqAggI'
      },
      clientScreenNonce: 'MC4xODIzNjk5MTQ2MTkwNDExNw..'
    },
    sortOrder: 'NEWEST',
    searchQuery: '',
    maxReplies: 10,
    channelId: 'UCjfjqbyIWpcln-yq8vWM28w',
    moderationState: 'PUBLISHED',
    commentsFilter: {
      commentCategoryIn: {
        values: [
          'COMMENT_CATEGORY_NOT_ENGAGED'
        ]
      }
    },
    commentsFilterForHeldForReviewTab: {},
    commentsFilterForSpamTab: {}
}
let keys = "AIzaSyBUPetSUmoZL-OhlxA7wSac5XinrygCqMo";
let last_comment = 7;


    //Comment
    fetch(`https://studio.youtube.com/youtubei/v1/comment/get_comments?alt=json&key=` + keys,
    {
        method: "POST",
        body: JSON.stringify(reqpayload),
        headers: {
            "content-type": "application/json",
            "x-goog-authuser": 0,
            "x-goog-visitor-id": "CgszaGFVcERZdUZGTSiD_cH7BQ%3D%3D",
            "x-origin": "https://studio.youtube.com",
            "x-youtube-ad-signals": "dt=1601208440128&flash=0&frm&u_tz=330&u_his=4&u_java&u_h=768&u_w=1360&u_ah=728&u_aw=1360&u_cd=24&u_nplug=3&u_nmime=4&bc=31&bih=277&biw=1360&brdim=0%2C0%2C0%2C0%2C1360%2C0%2C1360%2C728%2C1360%2C277&vis=1&wgl=true&ca_type=image",
            "x-youtube-client-name": 62,
            "x-youtube-client-version": "1.20200922.02.01",
            "x-youtube-page-cl": "333158867",
            "x-youtube-page-label": "youtube.studio.web_20200922_02_RC01",
            "authorization": "SAPISIDHASH 1601209608_44dbcaa5377aadf0c7b57132c505fee083ca1c2e",
            "x-youtube-time-zone": "Asia/Calcutta",
            "x-youtube-utc-offset": 330,

        }

    })
    .then((res) => { return res.json() })
    .then((data) => {    
        let current_comment=data.contents.itemSectionRenderer.contents.length - 1;
        let comment=data.contents.itemSectionRenderer.contents[0].commentThreadRenderer.comment.commentRenderer.contentText.runs[0].text
        let username=data.contents.itemSectionRenderer.contents[0].commentThreadRenderer.comment.commentRenderer.authorText.simpleText;
        console.log(comment + username);
        
    })
    .catch((error) => console.log(error))