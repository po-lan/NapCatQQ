const _0x3f5823=_0x1858;function _0x46dc(){const _0x183b29=['onMsgInfoListUpdate','setMsgRead','com.tencent.multimsg','nick','VKZEi','getMsgsByMsgId','YAzBQ','scfiG','sendStatus','peerUid','activateChat','1722536EwmGnV','527945RCnpRO','parse','getMsgsBySeqAndCount','msgId','AQkYX','recallMsg','arkElement','ELMFy','getMsgHistory','pxRKw','22932bEnThC','toString','session','getMsgsIncludeSelf','1409943MAizQi','DAzFQ','VEKKo','getMsgService','dXbuz','转发消息超时','YDONm','bytesData','activateChatAndGetHistory','JSzng','multiForwardMsgWithComment','uid','onLoginSuccess','401766jqWxdh','DiHtL','then','579781XEhbqi','jrxUr','app','vZYdj','HEWdN','senderUid','nrRyh','setMsgEmojiLikes','addListener','XlCfW','AmDOZ','chatType','UcwmX','tWNIJ','sniOT','vfsWY','forEach','1001OXTyJA','catch','LXkac','sendMsg','getMultiMsg','10103568FwAbBv','multiForwardMsg'];_0x46dc=function(){return _0x183b29;};return _0x46dc();}(function(_0x3d7fa9,_0x35dea4){const _0x4fac30=_0x1858,_0x333e3a=_0x3d7fa9();while(!![]){try{const _0x2e4efa=-parseInt(_0x4fac30(0x1c3))/0x1+parseInt(_0x4fac30(0x1c0))/0x2+-parseInt(_0x4fac30(0x1f5))/0x3+parseInt(_0x4fac30(0x1e6))/0x4+parseInt(_0x4fac30(0x1e7))/0x5+parseInt(_0x4fac30(0x1f1))/0x6*(-parseInt(_0x4fac30(0x1d4))/0x7)+parseInt(_0x4fac30(0x1d9))/0x8;if(_0x2e4efa===_0x35dea4)break;else _0x333e3a['push'](_0x333e3a['shift']());}catch(_0x333388){_0x333e3a['push'](_0x333e3a['shift']());}}}(_0x46dc,0x62920));import{selfInfo}from'@/core/data';import{log,logError}from'@/common/utils/log';import{sleep}from'@/common/utils/helper';function _0x1858(_0x1274f5,_0x398186){const _0x46dcea=_0x46dc();return _0x1858=function(_0x185819,_0x45ca22){_0x185819=_0x185819-0x1b6;let _0x485d94=_0x46dcea[_0x185819];return _0x485d94;},_0x1858(_0x1274f5,_0x398186);}import{napCatCore}from'@/core';import{MsgListener}from'@/core/listeners';import{randomUUID}from'crypto';const sendMessagePool={},sendSuccessCBMap={},sentMsgTasks=new Map(),msgListener=new MsgListener();msgListener['onAddSendMsg']=_0x2d65e7=>{const _0x51887b=_0x1858,_0x5722de={'sniOT':function(_0x46f591,_0x1c874c){return _0x46f591(_0x1c874c);},'JYYXF':function(_0x295d1f,_0x21717c){return _0x295d1f instanceof _0x21717c;}};for(const [_0x25043a,_0x4d8de1]of sentMsgTasks){_0x5722de[_0x51887b(0x1d1)](_0x4d8de1,_0x2d65e7),sentMsgTasks['delete'](_0x25043a);}if(sendMessagePool[_0x2d65e7['peerUid']]){const _0x1f595b=sendMessagePool[_0x2d65e7['peerUid']]?.(_0x2d65e7);_0x5722de['JYYXF'](_0x1f595b,Promise)&&_0x1f595b['then']()[_0x51887b(0x1d5)](logError);}},msgListener[_0x3f5823(0x1db)]=_0x39f471=>{const _0x22443e=_0x3f5823,_0x23cfb4={'kPkkg':function(_0x1070c7,_0x1eebfe){return _0x1070c7(_0x1eebfe);},'tWNIJ':function(_0x4378d2,_0x23eb33){return _0x4378d2(_0x23eb33);}};_0x39f471[_0x22443e(0x1d3)](_0x52bad8=>{const _0x6a25e4=_0x22443e,_0x23eacd={'jrxUr':function(_0x563d53,_0x3474aa){return _0x23cfb4['kPkkg'](_0x563d53,_0x3474aa);},'vfsWY':function(_0x4fcf69,_0xfc21bc){const _0x23d7a8=_0x1858;return _0x23cfb4[_0x23d7a8(0x1d0)](_0x4fcf69,_0xfc21bc);}};new Promise((_0x38074e,_0x27a374)=>{const _0x187afa=_0x1858;for(const _0x4ddf17 in sendSuccessCBMap){const _0x5f4c3e=sendSuccessCBMap[_0x4ddf17],_0x52530f=_0x23eacd[_0x187afa(0x1c4)](_0x5f4c3e,_0x52bad8),_0x7f9423=_0x37e108=>{_0x37e108&&delete sendSuccessCBMap[_0x4ddf17];};_0x52530f instanceof Promise?_0x52530f['then'](_0x7f9423):_0x23eacd[_0x187afa(0x1d2)](_0x7f9423,_0x52530f);}})[_0x6a25e4(0x1c2)]()[_0x6a25e4(0x1d5)](log);});},setTimeout(()=>{const _0x4f9073=_0x3f5823;napCatCore[_0x4f9073(0x1bf)](()=>{const _0x20ff50=_0x4f9073;napCatCore[_0x20ff50(0x1cb)](msgListener);});},0x64);export class NTQQMsgApi{static async['setEmojiLike'](_0xa47540,_0x137e1e,_0x4adb8e,_0x2e9207=!![]){const _0x2b5032=_0x3f5823,_0xd10205={'pxRKw':function(_0x1ddbb2,_0x2d1fd6){return _0x1ddbb2>_0x2d1fd6;}};return _0x4adb8e=_0x4adb8e[_0x2b5032(0x1f2)](),napCatCore['session'][_0x2b5032(0x1b6)]()[_0x2b5032(0x1ca)](_0xa47540,_0x137e1e,_0x4adb8e,_0xd10205[_0x2b5032(0x1f0)](_0x4adb8e['length'],0x3)?'2':'1',_0x2e9207);}static async[_0x3f5823(0x1d8)](_0x57b639,_0x57fc6e,_0x21cd2c){const _0x3228c9=_0x3f5823;return napCatCore[_0x3228c9(0x1f3)][_0x3228c9(0x1b6)]()['getMultiMsg'](_0x57b639,_0x57fc6e,_0x21cd2c);}static async[_0x3f5823(0x1e0)](_0x1620e3,_0x2d6bdf){const _0x4e3d49=_0x3f5823;return await napCatCore['session'][_0x4e3d49(0x1b6)]()[_0x4e3d49(0x1e0)](_0x1620e3,_0x2d6bdf);}static async[_0x3f5823(0x1e9)](_0xdeb07a,_0x35cd9d,_0x4a08b8,_0x3d43e1,_0x1aaca8){const _0x33eb22=_0x3f5823;return await napCatCore[_0x33eb22(0x1f3)][_0x33eb22(0x1b6)]()[_0x33eb22(0x1e9)](_0xdeb07a,_0x35cd9d,_0x4a08b8,_0x3d43e1,_0x1aaca8);}static async[_0x3f5823(0x1e5)](_0x1c20d1){}static async[_0x3f5823(0x1bb)](_0x287a6a){}static async[_0x3f5823(0x1dc)](_0x38306d){const _0xca140a=_0x3f5823;return napCatCore[_0xca140a(0x1f3)][_0xca140a(0x1b6)]()[_0xca140a(0x1dc)](_0x38306d);}static async[_0x3f5823(0x1ef)](_0x433bbb,_0x24413a,_0x3a492c){const _0x56c95a=_0x3f5823;return napCatCore['session'][_0x56c95a(0x1b6)]()[_0x56c95a(0x1f4)](_0x433bbb,_0x24413a,_0x3a492c,!![]);}static async['fetchRecentContact'](){}static async[_0x3f5823(0x1ec)](_0x30d1f7,_0x222cc9){const _0x62467d=_0x3f5823;await napCatCore[_0x62467d(0x1f3)][_0x62467d(0x1b6)]()[_0x62467d(0x1ec)]({'chatType':_0x30d1f7[_0x62467d(0x1ce)],'peerUid':_0x30d1f7[_0x62467d(0x1e4)]},_0x222cc9);}static async[_0x3f5823(0x1d7)](_0x511768,_0x5e32bf,_0x3c4882=!![],_0x419986=0x2710){const _0x2b92ea=_0x3f5823,_0x533853={'XlCfW':function(_0x108022,_0x5ed224){return _0x108022>_0x5ed224;},'JSzng':'发送超时','HEWdN':function(_0x211a01,_0xf9d4bc){return _0x211a01(_0xf9d4bc);},'nrRyh':function(_0x5b12f6){return _0x5b12f6();},'VKZEi':function(_0x1c0168,_0x38c672){return _0x1c0168(_0x38c672);},'UcwmX':function(_0x4c882e,_0x2deca7){return _0x4c882e===_0x2deca7;},'XesdB':function(_0xfca957,_0x690772,_0x4d2281){return _0xfca957(_0x690772,_0x4d2281);}},_0x50a2e1=_0x511768[_0x2b92ea(0x1e4)];let _0x2194a7=0x0;const _0x372a12=async()=>{const _0x1e27c4=_0x2b92ea;if(_0x533853[_0x1e27c4(0x1cc)](_0x2194a7,_0x419986))throw _0x533853[_0x1e27c4(0x1bc)];const _0x5d22b8=sendMessagePool[_0x511768['peerUid']];if(_0x5d22b8)return await _0x533853[_0x1e27c4(0x1c7)](sleep,0x1f4),_0x2194a7+=0x1f4,await _0x533853['nrRyh'](_0x372a12);else return;};return await _0x533853[_0x2b92ea(0x1c9)](_0x372a12),new Promise((_0x24dbbc,_0x23c74d)=>{const _0x3dc5af=_0x2b92ea,_0x4e134d={'dXbuz':function(_0x24990a,_0x510dc6){const _0x2616cb=_0x1858;return _0x533853[_0x2616cb(0x1cf)](_0x24990a,_0x510dc6);},'VEKKo':function(_0x4b5282,_0x50c095){const _0x53a278=_0x1858;return _0x533853[_0x53a278(0x1c7)](_0x4b5282,_0x50c095);}};let _0x486aeb=![],_0x3f75c4=null;const _0x5abb83=_0x533853[_0x3dc5af(0x1c9)](randomUUID);sendSuccessCBMap[_0x5abb83]=_0x14f3db=>{const _0x5b63a1=_0x3dc5af;if(_0x14f3db[_0x5b63a1(0x1ea)]===_0x3f75c4?.[_0x5b63a1(0x1ea)]){if(_0x4e134d[_0x5b63a1(0x1b7)](_0x14f3db[_0x5b63a1(0x1e3)],0x2))return delete sendSuccessCBMap[_0x5abb83],_0x486aeb=!![],_0x4e134d[_0x5b63a1(0x1f7)](_0x24dbbc,_0x14f3db),!![];return![];}return![];},sendMessagePool[_0x50a2e1]=async _0x460f71=>{delete sendMessagePool[_0x50a2e1],_0x3f75c4=_0x460f71;},_0x533853['XesdB'](setTimeout,()=>{const _0x1d9ae3=_0x3dc5af;if(_0x486aeb)return;delete sendMessagePool[_0x50a2e1],delete sendSuccessCBMap[_0x5abb83],_0x533853[_0x1d9ae3(0x1df)](_0x23c74d,_0x533853[_0x1d9ae3(0x1bc)]);},_0x419986);const _0xe0e2dc=napCatCore[_0x3dc5af(0x1f3)][_0x3dc5af(0x1b6)]()[_0x3dc5af(0x1d7)]('0',_0x511768,_0x5e32bf,new Map());});}static async['forwardMsg'](_0x5d76cd,_0x3a943c,_0x31d534){const _0x5e3edd=_0x3f5823;return napCatCore['session'][_0x5e3edd(0x1b6)]()['forwardMsg'](_0x31d534,_0x5d76cd,[_0x3a943c],new Map());}static async[_0x3f5823(0x1da)](_0x56e090,_0x395e16,_0x4a0949){const _0x2215ac=_0x3f5823,_0x2964e6={'AQkYX':function(_0x3e650e,_0x38b416){return _0x3e650e!=_0x38b416;},'eShzF':_0x2215ac(0x1dd),'LXkac':function(_0x4381ad,_0x474723){return _0x4381ad==_0x474723;},'YAzBQ':function(_0x2a18e5,_0x277ac4){return _0x2a18e5==_0x277ac4;},'vZYdj':_0x2215ac(0x1b8),'YDONm':function(_0x343a6f){return _0x343a6f();},'dbgaY':function(_0x4972da,_0xa2c0eb,_0x265215){return _0x4972da(_0xa2c0eb,_0x265215);}},_0x55d727=_0x4a0949['map'](_0x3b775a=>{const _0x1703d7=_0x2215ac;return{'msgId':_0x3b775a,'senderShowName':selfInfo[_0x1703d7(0x1de)]};});return new Promise((_0x14ff69,_0x1b20d8)=>{const _0x5dc4da=_0x2215ac,_0x40c8aa={'DiHtL':function(_0x477609,_0x34c0d5){const _0x1600fa=_0x1858;return _0x2964e6[_0x1600fa(0x1eb)](_0x477609,_0x34c0d5);},'DAzFQ':_0x2964e6['eShzF'],'scfiG':function(_0xab8922,_0x4d159b){const _0x56f810=_0x1858;return _0x2964e6[_0x56f810(0x1d6)](_0xab8922,_0x4d159b);},'ELMFy':function(_0x5337eb,_0x5d4083){const _0x3bd290=_0x1858;return _0x2964e6[_0x3bd290(0x1e1)](_0x5337eb,_0x5d4083);},'AmDOZ':function(_0x1446b9,_0xc9bb88){return _0x1446b9(_0xc9bb88);},'fjgkP':_0x2964e6[_0x5dc4da(0x1c6)]};let _0xa2cd9=![];const _0x436a5d=_0x10566f=>{const _0x20a4fc=_0x5dc4da,_0x220568=_0x10566f['elements']['find'](_0x49853b=>_0x49853b[_0x20a4fc(0x1ed)]);if(!_0x220568)return;const _0x216b12=JSON[_0x20a4fc(0x1e8)](_0x220568[_0x20a4fc(0x1ed)][_0x20a4fc(0x1ba)]);if(_0x40c8aa[_0x20a4fc(0x1c1)](_0x216b12[_0x20a4fc(0x1c5)],_0x40c8aa[_0x20a4fc(0x1f6)]))return;_0x40c8aa[_0x20a4fc(0x1e2)](_0x10566f[_0x20a4fc(0x1e4)],_0x395e16[_0x20a4fc(0x1e4)])&&_0x40c8aa[_0x20a4fc(0x1ee)](_0x10566f[_0x20a4fc(0x1c8)],selfInfo[_0x20a4fc(0x1be)])&&(_0xa2cd9=!![],_0x40c8aa[_0x20a4fc(0x1cd)](_0x14ff69,_0x10566f));};sentMsgTasks['set'](_0x2964e6[_0x5dc4da(0x1b9)](randomUUID),_0x436a5d),_0x2964e6['dbgaY'](setTimeout,()=>{!_0xa2cd9&&_0x1b20d8(_0x40c8aa['fjgkP']);},0x1388),napCatCore[_0x5dc4da(0x1f3)][_0x5dc4da(0x1b6)]()[_0x5dc4da(0x1bd)](_0x55d727,_0x56e090,_0x395e16,[],new Map());});}}