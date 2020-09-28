let videoName="New | Youttube magic video";
var reqpayload = {
    encryptedVideoId: 'eNmwulmahpk',
    videoReadMask: {
        channelId: true,
        videoId: true,
        lengthSeconds: true,
        premiere: {
            all: true
        },
        status: true,
        thumbnailDetails: {
            all: true
        },
        title: true,
        draftStatus: true,
        downloadUrl: true,
        watchUrl: true,
        permissions: {
            all: true
        },
        timeCreatedSeconds: true,
        timePublishedSeconds: true,
        origin: true,
        livestream: {
            all: true
        },
        privacy: true,
        features: {
            all: true
        },
        responseStatus: {
            all: true
        },
        statusDetails: {
            all: true
        },
        description: true,
        metrics: {
            all: true
        },
        titleFormattedString: {
            all: true
        },
        descriptionFormattedString: {
            all: true
        },
        inlineEditProcessingStatus: true,
        videoResolutions: {
            all: true
        },
        category: true,
        allowComments: true,
        commentFilter: true,
        commentsDisabledInternally: true,
        defaultCommentSortOrder: true,
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
        liveChat: {
            all: true
        },
        gameTitle: {
            all: true
        },
        claimDetails: {
            all: true
        },
        videoAdvertiserSpecificAgeGates: {
            all: true
        },
        tags: {
            all: true
        },
        videoDurationMs: true,
        audienceRestriction: {
            all: true
        },
        videoEditorProject: {
            all: true
        },
        originalFilename: true,
        videoStreamUrl: true,
        thumbnailEditorState: {
            all: true
        },
        scheduledPublishingDetails: {
            all: true
        },
        visibility: {
            all: true
        },
        sponsorsOnly: {
            all: true
        },
        unlistedExpired: true,
        crowdsourcingEnabled: true,
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
                token: 'QVo1MWR5VmZIRGFzUjRoTXVlVlVseHhpYmFaZ0JGOGhVUmFxdlhWM1h5NzJta0xvRmVmVTJEYVpMODlDaGpoUFprQldhbFJaSUlQV283QWZMMjJs'
            }
        },
        user: {
            delegationContext: {
                roleType: {
                    channelRoleType: 'CREATOR_CHANNEL_ROLE_TYPE_OWNER'
                },
                externalChannelId: 'UCjfjqbyIWpcln-yq8vWM28w'
            },
            serializedDelegationContext: 'EhhVQ2pmanFieUlXcGNsbi15cTh2V00yOHcqAggI'
        },
        clientScreenNonce: 'MC43MTkxMjE2ODgzNDYxNDU1'
    },
    delegationContext: {
        roleType: {
            channelRoleType: 'CREATOR_CHANNEL_ROLE_TYPE_OWNER'
        },
        externalChannelId: 'UCjfjqbyIWpcln-yq8vWM28w'
    }
}
 let keys="AIzaSyBUPetSUmoZL-OhlxA7wSac5XinrygCqMo";

fetch(`https://studio.youtube.com/youtubei/v1/video_manager/metadata_update?alt=json&key=` + keys,
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

        console.log(data);
    })
    .catch((error) => console.log(error))
