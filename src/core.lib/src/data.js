const _0x4e212e=_0x3f2e;(function(_0x2c95fe,_0x2275f9){const _0x3f2dbc=_0x3f2e,_0x727fdd=_0x2c95fe();while(!![]){try{const _0x5cbc4d=parseInt(_0x3f2dbc(0x189))/0x1*(parseInt(_0x3f2dbc(0x184))/0x2)+parseInt(_0x3f2dbc(0x19b))/0x3*(parseInt(_0x3f2dbc(0x187))/0x4)+parseInt(_0x3f2dbc(0x188))/0x5*(-parseInt(_0x3f2dbc(0x185))/0x6)+parseInt(_0x3f2dbc(0x191))/0x7+-parseInt(_0x3f2dbc(0x18d))/0x8+-parseInt(_0x3f2dbc(0x19c))/0x9*(-parseInt(_0x3f2dbc(0x18b))/0xa)+parseInt(_0x3f2dbc(0x18c))/0xb;if(_0x5cbc4d===_0x2275f9)break;else _0x727fdd['push'](_0x727fdd['shift']());}catch(_0x44c4bf){_0x727fdd['push'](_0x727fdd['shift']());}}}(_0x9041,0x34634));import{isNumeric}from'@/common/utils/helper';import{NTQQGroupApi}from'@/core/apis';export const Credentials={'Skey':'','CreatTime':0x0,'PskeyData':new Map(),'PskeyTime':new Map()};export const WebGroupData={'GroupData':new Map(),'GroupTime':new Map()};function _0x9041(){const _0x1f796b=['values','xGmtJ','601643iAZiix','getGroupMembers','groupCode','toString','from','mBLmM','set','uin','znqnf','forEach','537MPFibU','1549629RApElU','find','getGroups','length','get','2UekIoX','4782XdXzVJ','iQXjF','572RHdGht','1985iDImqa','30587vjOeJR','NapCat未能正常启动，请检查日志查看错误','10eycaTH','2525787TVzRZd','103536nfgwSe','delete'];_0x9041=function(){return _0x1f796b;};return _0x9041();}export const selfInfo={'uid':'','uin':'','nick':'','online':!![]};function _0x3f2e(_0x1715d3,_0xca9706){const _0x90418d=_0x9041();return _0x3f2e=function(_0x3f2e02,_0x262ac7){_0x3f2e02=_0x3f2e02-0x182;let _0x456fb0=_0x90418d[_0x3f2e02];return _0x456fb0;},_0x3f2e(_0x1715d3,_0xca9706);}export const groups=new Map();export function deleteGroup(_0x51d68b){const _0x496828=_0x3f2e;groups[_0x496828(0x18e)](_0x51d68b),groupMembers[_0x496828(0x18e)](_0x51d68b);}export const groupMembers=new Map();export const friends=new Map();export const friendRequests={};export const groupNotifies={};export const napCatError={'ffmpegError':'','httpServerError':'','wsServerError':'','otherError':_0x4e212e(0x18a)};export async function getFriend(_0x342a7c){const _0x57e299=_0x4e212e,_0x1bb04b={'znqnf':function(_0x12775a,_0x166697){return _0x12775a(_0x166697);}};_0x342a7c=_0x342a7c[_0x57e299(0x194)]();if(_0x1bb04b[_0x57e299(0x199)](isNumeric,_0x342a7c)){const _0x5b3522=Array[_0x57e299(0x195)](friends['values']());return _0x5b3522[_0x57e299(0x19d)](_0x26b8ca=>_0x26b8ca['uin']===_0x342a7c);}else return friends[_0x57e299(0x183)](_0x342a7c);}export async function getGroup(_0x411a57){const _0x243381=_0x4e212e;let _0x1579d1=groups[_0x243381(0x183)](_0x411a57[_0x243381(0x194)]());if(!_0x1579d1)try{const _0x2525c7=await NTQQGroupApi[_0x243381(0x19e)]();_0x2525c7[_0x243381(0x182)]&&_0x2525c7[_0x243381(0x19a)](_0x2da519=>{const _0x3d7089=_0x243381;groups[_0x3d7089(0x197)](_0x2da519[_0x3d7089(0x193)],_0x2da519);});}catch(_0x1702d3){return undefined;}return _0x1579d1=groups[_0x243381(0x183)](_0x411a57[_0x243381(0x194)]()),_0x1579d1;}export async function getGroupMember(_0x4d8e2b,_0x4388ee){const _0x15b516=_0x4e212e,_0x59423f={'iQXjF':function(_0x3ce466,_0x118015){return _0x3ce466(_0x118015);},'mBLmM':function(_0x3c72f4){return _0x3c72f4();}};_0x4d8e2b=_0x4d8e2b['toString'](),_0x4388ee=_0x4388ee[_0x15b516(0x194)]();let _0x48e37f=groupMembers[_0x15b516(0x183)](_0x4d8e2b);if(!_0x48e37f)try{_0x48e37f=await NTQQGroupApi[_0x15b516(0x192)](_0x4d8e2b),groupMembers[_0x15b516(0x197)](_0x4d8e2b,_0x48e37f);}catch(_0x32eabc){return null;}const _0x4801e1=()=>{const _0x1f7bdc=_0x15b516;let _0x3fe831=undefined;return _0x59423f[_0x1f7bdc(0x186)](isNumeric,_0x4388ee)?_0x3fe831=Array[_0x1f7bdc(0x195)](_0x48e37f[_0x1f7bdc(0x18f)]())[_0x1f7bdc(0x19d)](_0x3f8275=>_0x3f8275[_0x1f7bdc(0x198)]===_0x4388ee):_0x3fe831=_0x48e37f[_0x1f7bdc(0x183)](_0x4388ee),_0x3fe831;};let _0x552d5f=_0x59423f[_0x15b516(0x196)](_0x4801e1);return!_0x552d5f&&(_0x48e37f=await NTQQGroupApi[_0x15b516(0x192)](_0x4d8e2b),_0x552d5f=_0x59423f[_0x15b516(0x196)](_0x4801e1)),_0x552d5f;}export const uid2UinMap={};export function getUidByUin(_0x151b42){const _0x346a19=_0x4e212e,_0x1a4dc7={'xGmtJ':function(_0x415dfe,_0x12215b){return _0x415dfe===_0x12215b;}};for(const _0x10c72d in uid2UinMap){if(_0x1a4dc7[_0x346a19(0x190)](uid2UinMap[_0x10c72d],_0x151b42))return _0x10c72d;}}export const tempGroupCodeMap={};export const rawFriends=[];export const stat={'packet_received':0x0,'packet_sent':0x0,'message_received':0x0,'message_sent':0x0,'last_message_time':0x0,'disconnect_times':0x0,'lost_times':0x0,'packet_lost':0x0};