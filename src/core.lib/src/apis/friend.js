function _0xb09b(_0x3902ca,_0x5bd42c){const _0x4432f1=_0x4432();return _0xb09b=function(_0xb09bf5,_0x163f10){_0xb09bf5=_0xb09bf5-0xb6;let _0x2f0a8f=_0x4432f1[_0xb09bf5];return _0x2f0a8f;},_0xb09b(_0x3902ca,_0x5bd42c);}const _0x22e06b=_0xb09b;function _0x4432(){const _0x5d96e2=['3870748zQAcfX','获取好友列表完成','VzHxy','session','getBuddyList','addListener','friendUid','5990952OFepUu','buddyList','uin','getBuddyService','IKnOp','1OsKycs','approvalFriendRequest','delete','5ANtKHN','onBuddyListChange','set','getFriends','4134708lpobqD','bFlpM','handleFriendRequest','3395020wMKrke','1282540pXHNdP','1587980qMWvIt','4329102uMLkSV','NEgwk','CXwZd','push','开始获取好友列表','CmzzQ','275ewzTTo','then','reqTime','获取好友列表超时','LqKrS','24NDNFRX'];_0x4432=function(){return _0x5d96e2;};return _0x4432();}(function(_0x5c5445,_0x34db48){const _0x1f5785=_0xb09b,_0x5998d9=_0x5c5445();while(!![]){try{const _0x4c6061=parseInt(_0x1f5785(0xce))/0x1*(-parseInt(_0x1f5785(0xd9))/0x2)+-parseInt(_0x1f5785(0xb6))/0x3+parseInt(_0x1f5785(0xd8))/0x4*(-parseInt(_0x1f5785(0xd1))/0x5)+parseInt(_0x1f5785(0xc9))/0x6+-parseInt(_0x1f5785(0xc2))/0x7*(parseInt(_0x1f5785(0xc1))/0x8)+parseInt(_0x1f5785(0xd5))/0x9+parseInt(_0x1f5785(0xda))/0xa*(parseInt(_0x1f5785(0xbc))/0xb);if(_0x4c6061===_0x34db48)break;else _0x5998d9['push'](_0x5998d9['shift']());}catch(_0x3de18b){_0x5998d9['push'](_0x5998d9['shift']());}}}(_0x4432,0xcc13f));import{BuddyListener,napCatCore}from'@/core';import{logDebug}from'@/common/utils/log';import{uid2UinMap}from'@/core/data';import{randomUUID}from'crypto';const buddyChangeTasks=new Map(),buddyListener=new BuddyListener();buddyListener[_0x22e06b(0xd2)]=_0x44e19c=>{const _0x534c33=_0x22e06b,_0x89e98e={'IKnOp':function(_0x3ec822,_0x54d3ab){return _0x3ec822(_0x54d3ab);}};for(const [_0x31e6d8,_0x57b237]of buddyChangeTasks){_0x89e98e[_0x534c33(0xcd)](_0x57b237,_0x44e19c),buddyChangeTasks[_0x534c33(0xd0)](_0x31e6d8);}},setTimeout(()=>{napCatCore['onLoginSuccess'](()=>{const _0x4da5d6=_0xb09b;napCatCore[_0x4da5d6(0xc7)](buddyListener);});},0x64);export class NTQQFriendApi{static async[_0x22e06b(0xd4)](_0xcf1309=![]){const _0x456b1b=_0x22e06b,_0x24a8ae={'NEgwk':function(_0x1f1149,_0x340ce1){return _0x1f1149(_0x340ce1);},'CXwZd':function(_0x589eae,_0x1076b3,_0x42c9b6){return _0x589eae(_0x1076b3,_0x42c9b6);},'CmzzQ':function(_0x46db28,_0x194f6d,_0x5670e2){return _0x46db28(_0x194f6d,_0x5670e2);},'bFlpM':_0x456b1b(0xc3),'LqKrS':function(_0x15932a,_0x388f1a,_0x2dde37){return _0x15932a(_0x388f1a,_0x2dde37);},'VzHxy':function(_0x437d5c){return _0x437d5c();}};return new Promise((_0xe4cc26,_0x40d77a)=>{const _0x2de5e1=_0x456b1b,_0x479a40={'gBqCh':function(_0x203a44,_0x3e206c,_0x1887eb){const _0x4a2ec3=_0xb09b;return _0x24a8ae[_0x4a2ec3(0xbb)](_0x203a44,_0x3e206c,_0x1887eb);},'urBaJ':_0x24a8ae[_0x2de5e1(0xd6)]};let _0x5e864e=![];_0x24a8ae[_0x2de5e1(0xc0)](setTimeout,()=>{const _0x5c22d5=_0x2de5e1;!_0x5e864e&&(_0x24a8ae['NEgwk'](logDebug,_0x5c22d5(0xbf)),_0x24a8ae[_0x5c22d5(0xb7)](_0x40d77a,_0x5c22d5(0xbf)));},0x1388);const _0x238ccd=[],_0x40a6f5=_0x186eeb=>{const _0x457a7c=_0x2de5e1;for(const _0x596ae0 of _0x186eeb){for(const _0xa4b72b of _0x596ae0[_0x457a7c(0xca)]){_0x238ccd[_0x457a7c(0xb9)](_0xa4b72b),uid2UinMap[_0xa4b72b['uid']]=_0xa4b72b[_0x457a7c(0xcb)];}}_0x5e864e=!![],_0x479a40['gBqCh'](logDebug,_0x479a40['urBaJ'],_0x238ccd),_0xe4cc26(_0x238ccd);};buddyChangeTasks[_0x2de5e1(0xd3)](_0x24a8ae[_0x2de5e1(0xc4)](randomUUID),_0x40a6f5),napCatCore[_0x2de5e1(0xc5)][_0x2de5e1(0xcc)]()[_0x2de5e1(0xc6)](_0xcf1309)[_0x2de5e1(0xbd)](_0x2a6d53=>{const _0x4bf9e1=_0x2de5e1;_0x24a8ae[_0x4bf9e1(0xb8)](logDebug,_0x4bf9e1(0xba),_0x2a6d53);});});}static async[_0x22e06b(0xd7)](_0xde3646,_0x2d48fd){const _0x2d5293=_0x22e06b;napCatCore['session']['getBuddyService']()?.[_0x2d5293(0xcf)]({'friendUid':_0xde3646[_0x2d5293(0xc8)],'reqTime':_0xde3646[_0x2d5293(0xbe)],'accept':_0x2d48fd});}}