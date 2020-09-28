let videoName = "";
var reqpayload_comment = {
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
        ]
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
      clientScreenNonce: 'MC4wNTIzMDIxODU0MDEzNDAzNQ..'
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
let last_comment = 0;
let headers={
    "content-type": "application/json",
    "x-goog-authuser": 0,
    "x-goog-visitor-id": "CgszaGFVcERZdUZGTSiD_cH7BQ%3D%3D",
    "x-origin": "https://studio.youtube.com",
    "x-youtube-ad-signals": "dt=1601208440128&flash=0&frm&u_tz=330&u_his=4&u_java&u_h=768&u_w=1360&u_ah=728&u_aw=1360&u_cd=24&u_nplug=3&u_nmime=4&bc=31&bih=277&biw=1360&brdim=0%2C0%2C0%2C0%2C1360%2C0%2C1360%2C728%2C1360%2C277&vis=1&wgl=true&ca_type=image",
    "x-youtube-client-name": 62,
    "x-youtube-client-version": "1.20200922.02.01",
    "x-youtube-page-cl": "333158867",
    "x-youtube-page-label": "youtube.studio.web_20200922_02_RC01",
    "authorization": "SAPISIDHASH 1601221366_a0a63c2b0d3cedb5f39a0c1346aa48ab36242621",
    "x-youtube-time-zone": "Asia/Calcutta",
    "x-youtube-utc-offset": 330,

}

function action(){
    //Get Comments
    fetch(`https://studio.youtube.com/youtubei/v1/comment/get_comments?alt=json&key=` + keys,
    {
        method: "POST",
        body: JSON.stringify(reqpayload_comment),
        headers
    })
    .then((res) => { return res.json() })
    .then((data) => {             
        let current_comment=data.contents.itemSectionRenderer.contents.length - 1;
        let comment=data.contents.itemSectionRenderer.contents[0].commentThreadRenderer.comment.commentRenderer.contentText.runs[0].text
        let username=data.contents.itemSectionRenderer.contents[0].commentThreadRenderer.comment.commentRenderer.authorText.simpleText;
        let title=`${username} says ${comment} | Youtube Magic Video`;
        if (current_comment !== last_comment) {
            let videoName = `${username} says ${comment} | Youtube Magic Video`; 
            var reqpayload_update={
                encryptedVideoId: 'eNmwulmahpk',
                videoReadMask: {
                  videoId: true,
                  timePublishedSeconds: true,
                  category: true,
                  allowComments: true,
                  commentFilter: true,
                  commentsDisabledInternally: true,
                  defaultCommentSortOrder: true,
                  features: {
                    all: true
                  },
                  license: true,
                  audioLanguage: {
                    all: true
                  },
                  uncaptionedReason: true,
                  paidProductPlacement: true,
                  dateRecorded: {
                    all: true
                  },
                  publishing: {
                    all: true
                  },
                  allowRatings: true,
                  allowEmbed: true,
                  music: {
                    all: true
                  },
                  ownedClaimDetails: {
                    all: true
                  },
                  location: {
                    all: true
                  },
                  livestream: {
                    all: true
                  },
                  liveChat: {
                    all: true
                  },
                  premiere: {
                    all: true
                  },
                  gameTitle: {
                    all: true
                  },
                  claimDetails: {
                    all: true
                  },
                  status: true,
                  permissions: {
                    all: true
                  },
                  videoAdvertiserSpecificAgeGates: {
                    all: true
                  },
                  description: true,
                  descriptionFormattedString: {
                    all: true
                  },
                  tags: {
                    all: true
                  },
                  title: true,
                  titleFormattedString: {
                    all: true
                  },
                  videoDurationMs: true,
                  audienceRestriction: {
                    all: true
                  },
                  videoEditorProject: {
                    all: true
                  },
                  inlineEditProcessingStatus: true,
                  draftStatus: true,
                  channelId: true,
                  origin: true,
                  originalFilename: true,
                  videoStreamUrl: true,
                  videoResolutions: {
                    all: true
                  },
                  statusDetails: {
                    all: true
                  },
                  thumbnailEditorState: {
                    all: true
                  },
                  thumbnailDetails: {
                    all: true
                  },
                  privacy: true,
                  scheduledPublishingDetails: {
                    all: true
                  },
                  responseStatus: {
                    all: true
                  },
                  visibility: {
                    all: true
                  },
                  sponsorsOnly: {
                    all: true
                  },
                  unlistedExpired: true,
                  downloadUrl: true,
                  crowdsourcingEnabled: true,
                  lengthSeconds: true,
                  watchUrl: true,
                  timeCreatedSeconds: true,
                  metrics: {
                    all: true
                  },
                  nonMonetizingRestrictions: {
                    all: true
                  }
                },
                title: {
                  newTitle: videoName,
                  shouldSegment: true
                },
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
                        key: 'force_route_delete_playlist_to_outertube',
                        value: 'false'
                      },
                      {
                        key: 'force_live_chat_merchandise_upsell',
                        value: 'false'
                      }
                    ],
                    sessionInfo: {
                      token: 'QVo1MWR5V2lMekJ1SXN4TWM2SHF5aU1EaXY1RjFyOWlsWTluMEJJZWN4MWRObGcwbm11Q1dvSHRWR0lvdDg2d3V1VC1MX1VneVR0Z2dpZjB5MUds'
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
                  clientScreenNonce: 'MC4zODMyNjM3MTIyMzU2MzIxNg..'
                },
                delegationContext: {
                  externalChannelId: 'UCjfjqbyIWpcln-yq8vWM28w',
                  roleType: {
                    channelRoleType: 'CREATOR_CHANNEL_ROLE_TYPE_OWNER'
                  }
                }
            }
            //ModifyTitle          
            fetch(`https://studio.youtube.com/youtubei/v1/video_manager/metadata_update?alt=json&key=` + keys,
                {
                    method: "POST",
                    body: JSON.stringify(reqpayload_update),
                    headers
                })
                .then((res) => { return res.json() })
                .then((data) => {
                    //last_comment = last_comment + 1;
                    last_comment=current_comment
		    console.log("Title changed to " + title);
                    return null;
                })
                .catch((error) => console.log(error))
        } else {
            console.log("No new comment");
        }
    })
    .catch((error) => console.log(error))
}
    

window.setInterval(action,5000);