function _0x26ba(_0x47e092,_0x20f262){const _0x451e83=_0x451e();return _0x26ba=function(_0x26bafb,_0x34a8a5){_0x26bafb=_0x26bafb-0x13d;let _0x48fff8=_0x451e83[_0x26bafb];return _0x48fff8;},_0x26ba(_0x47e092,_0x20f262);}function _0x451e(){const _0x5de46e=['1544LnzOjv','26042148rvrGDF','dirname','join','48162BnmIxC','555708yipXRt','2492785asIJUJ','resolve','execPath','277835jCZrrw','30cyeBHU','curVersion','/wrapper.node','4066296ZBScPy','31969qpODnE'];_0x451e=function(){return _0x5de46e;};return _0x451e();}const _0x949678=_0x26ba;(function(_0x538f9e,_0xae9b32){const _0x4b42bf=_0x26ba,_0x5d95b6=_0x538f9e();while(!![]){try{const _0x47437b=-parseInt(_0x4b42bf(0x146))/0x1+-parseInt(_0x4b42bf(0x141))/0x2*(parseInt(_0x4b42bf(0x147))/0x3)+parseInt(_0x4b42bf(0x142))/0x4+-parseInt(_0x4b42bf(0x143))/0x5+-parseInt(_0x4b42bf(0x14a))/0x6+-parseInt(_0x4b42bf(0x14b))/0x7*(parseInt(_0x4b42bf(0x13d))/0x8)+parseInt(_0x4b42bf(0x13e))/0x9;if(_0x47437b===_0xae9b32)break;else _0x5d95b6['push'](_0x5d95b6['shift']());}catch(_0x1cdd1f){_0x5d95b6['push'](_0x5d95b6['shift']());}}}(_0x451e,0x6f5d6));import _0xc19b2e from'node:path';import _0x43a083 from'node:fs';import{qqVersionConfigInfo}from'@/common/utils/QQBasicInfo';let wrapperNodePath=_0xc19b2e[_0x949678(0x144)](_0xc19b2e[_0x949678(0x13f)](process[_0x949678(0x145)]),'./resources/app/wrapper.node');!_0x43a083['existsSync'](wrapperNodePath)&&(wrapperNodePath=_0xc19b2e[_0x949678(0x140)](_0xc19b2e[_0x949678(0x13f)](process[_0x949678(0x145)]),'resources/app/versions/'+qqVersionConfigInfo[_0x949678(0x148)]+_0x949678(0x149)));const QQWrapper=require(wrapperNodePath);export default QQWrapper;