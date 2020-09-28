var reqpayload={
  context: {
    client: {
      hl: 'en',
      gl: 'IN',
      visitorData: 'CgszaGFVcERZdUZGTSjW1sH7BQ%3D%3D',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36,gzip(gfe)',
      clientName: 'WEB',
      clientVersion: '2.20200925.01.00',
      osName: 'Windows',
      osVersion: '10.0',
      browserName: 'Chrome',
      browserVersion: '85.0.4183.121',
      screenWidthPoints: 1360,
      screenHeightPoints: 186,
      screenPixelDensity: 1,
      utcOffsetMinutes: 330,
      userInterfaceTheme: 'USER_INTERFACE_THEME_DARK',
      connectionType: 'CONN_CELLULAR_4G'
    },
    request: {
      sessionId: '6877054928526749936',
      internalExperimentFlags: [],
      consistencyTokenJars: []
    },
    user: {},
    clientScreenNonce: 'MC4yODg5NTA1MTA0NzI3Mzg4',
    clickTracking: {
      clickTrackingParams: 'CAkQovoBGAIiEwipouiOkonsAhUj3HMBHSVLAo8='
    }
  },
  notificationsMenuRequestType: 'NOTIFICATIONS_MENU_REQUEST_TYPE_INBOX'
}

var key="AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8";
var last_count=6;
fetch("https://www.youtube.com/youtubei/v1/notification/get_notification_menu?key="+key,
 {  
    method: "POST",
    body: JSON.stringify(reqpayload),
    headers:{
        authorization: "SAPISIDHASH 1601203549_624aacee47a0c2ea5586d98906920851b0070eaf",
        "x-goog-authuser" : 0
    }

 }) 
  .then((res) => { return res.json() })
  .then((data) =>{ 
      //console.log(data)
      let notification=data.actions[0].openPopupAction.popup.multiPageMenuRenderer.sections[0].multiPageMenuNotificationSectionRenderer.items
      console.log("Total comments" + notification.length);

      let newNotification=notification.length > last_count ? false : true;

      console.log(newNotification);
      if(newNotification){
        //fetch("http://localhost:3000/changetitle")
      }
      //console.log(data.actions[0].openPopupAction.popup.multiPageMenuRenderer.sections[0].multiPageMenuNotificationSectionRenderer)
    })
  .catch((error) => console.log(error))


//   $.actions[0].openPopupAction.popup.multiPageMenuRenderer.sections[0].multiPageMenuNotificationSectionRenderer.items[0].notificationRenderer.shortMessage