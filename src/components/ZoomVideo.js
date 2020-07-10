import React, { useEffect, useState } from 'react';
import { ZoomMtg } from '@zoomus/websdk';

const ZoomVideo = () => {
  // const [signature, setSignature] = useState();

  const meetConfigs = {
    apiKey: 'aBhZC4SUoSWu9lpCA19bgsExcoSTuxk8e8J0',
    apiSecret: '7Hn3YuZdesUCZ94hmf51W6Y7mFa0DDvNmxOo',
    meetingNumber: 7714758074,
    role: 0, // 0 to join the meeting,  1 to start the meeting
    leaveUrl: '',
    userName: 'test WebSDK',
    password: '9yRCHA'
  };

  const enterMeeting = () => {
    ZoomMtg.init({
      leaveUrl: 'http://mrmoneyinvestimentos.com.br/', // required
      showMeetingHeader: false, // option
      disableInvite: false, // optional
      disableCallOut: false, // optional
      disableRecord: false, // optional
      disableJoinAudio: false, // optional
      audioPanelAlwaysOpen: true, // optional
      showPureSharingContent: false, // optional
      isSupportAV: true, // optional,
      isSupportChat: true, // optional,
      isSupportQA: true, // optional,
      isSupportCC: true, // optional,
      screenShare: true, // optional,
      rwcBackup: '', // optional,
      videoDrag: true, // optional,
      sharingMode: 'both', // optional,
      videoHeader: true, // optional,
      isLockBottom: true, // optional,
      isSupportNonverbal: true, // optional,
      isShowJoiningErrorDialog: true, // optional,
      inviteUrlFormat: '', // optional
      loginWindow: {
        // optional,
        width: 400,
        height: 380
      },
      meetingInfo: [
        // optional
        'topic',
        'host',
        'mn',
        'pwd',
        'telPwd',
        'invite',
        'participant',
        'dc'
      ],
      disableVoIP: false, // optional
      disableReport: false, // optional
      success: () => {
        console.log('init success！！！！');
        ZoomMtg.join({
          meetingNumber: meetConfigs.meetingNumber,
          userName: 'Victor Jordan',
          userEmail: 'victorjordan95@gmail.com',
          passWord: 'Ti9kR2JlL2QwaGU1S0JlRWdRSGU1QT09',
          apiKey: meetConfigs.apiKey,
          signature,
          success(res) {
            console.log(res);
          },
          error(res) {
            console.log(res);
          }
        });
        // ZoomMtg.join({
        //   signature,
        //   meetingNumber: meetConfigs.meetingNumber,
        //   userName: meetConfigs.userName,
        //   userEmail: 'teste@gmail.com',
        //   passWord: meetConfigs.password,
        //   apiKey: meetConfigs.apiKey,
        //   success(res) {
        //     console.log(res);
        //   },
        //   error: error => {
        //     console.log(error);
        //   }
        // });
      },
      error: error => {
        console.log(error);
      }
    });
  };

  const signature = ZoomMtg.generateSignature({
    meetingNumber: 7714758074,
    apiKey: 'aBhZC4SUoSWu9lpCA19bgsExcoSTuxk8e8J0',
    apiSecret: '7Hn3YuZdesUCZ94hmf51W6Y7mFa0DDvNmxOo',
    role: 0,
    success(res) {
      // setSignature(res.result);
    }
  });

  useEffect(() => {
    if (window.location.pathname === '/home') {
      console.log('checkSystemRequirements');
      console.log(JSON.stringify(ZoomMtg.checkSystemRequirements()));
      ZoomMtg.preLoadWasm();
      ZoomMtg.prepareJssdk();
      setTimeout(() => {
        enterMeeting();
      }, 10000);
    }
    return () => {
      document.getElementById('zmmtg-root').remove();
    };
  }, []);

  return (
    <>
      <button onClick={enterMeeting}>Enter</button>
    </>
  );
};

export default ZoomVideo;
