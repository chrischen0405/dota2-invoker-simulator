(function(){var t={4484:function(t,i,e){"use strict";var s=e(6369),n=function(){var t=this,i=t._self._c;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"container",class:t.isMobile?"mobile-container":""},[[i("div",{staticClass:"score-box"},[i("span",[t._v("正确次数："+t._s(t.totalRightTime))]),i("span",[t._v("当前连击："+t._s(t.comboTime))])]),i("div",{staticClass:"time-box"},[i("span",[t._v(t._s(t.time.toFixed(1)))])]),i("div",{staticClass:"want-skill-box"},[t.wantSkillCode?i("img",{attrs:{src:e(6269)(`./skill${t.wantSkillCode}.png`),alt:t.wantSkillCode}}):t._e(),t.isEndGame?i("p",{on:{click:t.startGame}},[t._v("点击开始训练")]):t._e()]),i("div",{staticClass:"video-box"},[t.skillCode?i("video",{attrs:{autoplay:"autoplay",preload:"auto",playsinline:"",src:e(3104)(`./skill${t.skillCode}.mp4`)}}):t._e()]),i("div",{staticClass:"my-key-list"},[t._l(t.letterList,(function(t,s){return i("div",{key:s,staticClass:"skill-box"},[i("img",{attrs:{src:e(6269)(`./skill${t}.png`),alt:t}})])})),i("div",{staticClass:"skill-box"},[t.skillCode?i("img",{attrs:{src:e(6269)(`./skill${t.skillCode}.png`),alt:t.skillCode}}):t._e()])],2),i("div",{staticClass:"operate-box"},t._l(t.btnList,(function(s,n){return i("div",{key:n,staticClass:"skill-btn",on:{click:function(i){return t.clickBtn(s)}}},[i("img",{attrs:{src:e(6269)(`./skill${s}.png`),alt:s}})])})),0)]],2)])},l=[];e(6699);const o={QQQ:"Y",QQW:"V",QWQ:"V",WQQ:"V",QQE:"G",QEQ:"G",EQQ:"G",WWW:"C",WWQ:"X",WQW:"X",QWW:"X",WWE:"Z",WEW:"Z",EWW:"Z",EEE:"T",EEQ:"F",EQE:"F",QEE:"F",EEW:"D",EWE:"D",WEE:"D",QWE:"B",QEW:"B",WQE:"B",EQW:"B",WEQ:"B",EWQ:"B"},r=["Y","V","G","Z","X","C","T","F","D","B"],a=[69,81,82,87],c={81:"Q",87:"W",69:"E",82:"R"};function u(){return Math.floor(10*Math.random())}var p={name:"App",data(){return{isMobile:!0,totalRightTime:0,comboTime:0,endTime:null,time:0,timer:null,isEndGame:!0,wantSkillCode:"",btnList:["Q","W","E","R"],letterList:[],skillCode:""}},created(){this.changeWantSkillCode()},mounted(){const t=navigator.userAgent;this.isMobile=/mobile/i.test(t),this.watchKeyBoard()},methods:{startGame(){this.totalRightTime=0,this.comboTime=0,this.time=0,this.endTime=new Date((new Date).getTime()+3e4),this.isEndGame=!1,this.runTime()},runTime(){this.timer||(this.timer=window.setInterval((()=>{this.time=(this.endTime-new Date)/1e3,this.time<=0&&(this.time=0,this.endGame())}),100))},endGame(){this.isEndGame=!0,window.clearInterval(this.timer),this.timer=null,alert(`正确次数：${this.totalRightTime}`)},watchKeyBoard(){document.onkeydown=t=>{const i=t.keyCode;if(a.includes(i)){const t=c[i];this.clickBtn(t)}}},clickBtn(t){this.isEndGame||("R"===t?3===this.letterList.length&&(this.skillCode=o[this.letterList.join("")],this.completeSkill()):this.pushLetter(t))},pushLetter(t){3===this.letterList.length&&this.letterList.splice(0,1),this.letterList.push(t)},completeSkill(){this.wantSkillCode===this.skillCode?(this.totalRightTime++,this.comboTime++,this.changeWantSkillCode()):this.comboTime=0},changeWantSkillCode(){let t=r[u()];while(t===this.wantSkillCode)t=r[u()];this.wantSkillCode=t},startAutoPlay(t){this.autoplay(t),window.setInterval((t=>{this.autoplay(t)}),t)},autoplay(t){if(this.isEndGame)return;let i=!1;for(let e in o){if(i)return;if(o[e]===this.wantSkillCode){i=!0;const s=e.split("");window.setTimeout((()=>{this.clickBtn(s[0])}),Math.floor(t/4)),window.setTimeout((()=>{this.clickBtn(s[1])}),Math.floor(t/2)),window.setTimeout((()=>{this.clickBtn(s[2])}),Math.floor(t/4*3)),window.setTimeout((()=>{this.clickBtn("R")}),Math.floor(t))}}}}},m=p,d=e(1001),f=(0,d.Z)(m,n,l,!1,null,null,null),k=f.exports;s.ZP.config.productionTip=!1,new s.ZP({render:t=>t(k)}).$mount("#app")},6269:function(t,i,e){var s={"./skillB.png":251,"./skillC.png":9227,"./skillD.png":619,"./skillE.png":1392,"./skillF.png":2449,"./skillG.png":1317,"./skillQ.png":3606,"./skillR.png":592,"./skillT.png":8331,"./skillV.png":310,"./skillW.png":2651,"./skillX.png":3480,"./skillY.png":7153,"./skillZ.png":1568};function n(t){var i=l(t);return e(i)}function l(t){if(!e.o(s,t)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=l,t.exports=n,n.id=6269},3104:function(t,i,e){var s={"./skillB.mp4":6644,"./skillC.mp4":7661,"./skillD.mp4":535,"./skillF.mp4":8749,"./skillG.mp4":2052,"./skillT.mp4":7304,"./skillV.mp4":7591,"./skillX.mp4":3,"./skillY.mp4":8142,"./skillZ.mp4":5918};function n(t){var i=l(t);return e(i)}function l(t){if(!e.o(s,t)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=l,t.exports=n,n.id=3104},251:function(t,i,e){"use strict";t.exports=e.p+"img/skillB.5dd0d654.png"},9227:function(t,i,e){"use strict";t.exports=e.p+"img/skillC.97b84931.png"},619:function(t,i,e){"use strict";t.exports=e.p+"img/skillD.a0879249.png"},1392:function(t,i,e){"use strict";t.exports=e.p+"img/skillE.3ba2adc9.png"},2449:function(t,i,e){"use strict";t.exports=e.p+"img/skillF.240fc868.png"},1317:function(t,i,e){"use strict";t.exports=e.p+"img/skillG.d5443710.png"},3606:function(t,i,e){"use strict";t.exports=e.p+"img/skillQ.23a03122.png"},592:function(t,i,e){"use strict";t.exports=e.p+"img/skillR.54ba7802.png"},8331:function(t,i,e){"use strict";t.exports=e.p+"img/skillT.09643809.png"},310:function(t,i,e){"use strict";t.exports=e.p+"img/skillV.bc1e084a.png"},2651:function(t,i,e){"use strict";t.exports=e.p+"img/skillW.4bf831a2.png"},3480:function(t,i,e){"use strict";t.exports=e.p+"img/skillX.94dd3ffa.png"},7153:function(t,i,e){"use strict";t.exports=e.p+"img/skillY.1d6db178.png"},1568:function(t,i,e){"use strict";t.exports=e.p+"img/skillZ.70546520.png"},6644:function(t,i,e){"use strict";t.exports=e.p+"media/skillB.e54f238b.mp4"},7661:function(t,i,e){"use strict";t.exports=e.p+"media/skillC.c591891a.mp4"},535:function(t,i,e){"use strict";t.exports=e.p+"media/skillD.c7696c5e.mp4"},8749:function(t,i,e){"use strict";t.exports=e.p+"media/skillF.7acad55e.mp4"},2052:function(t,i,e){"use strict";t.exports=e.p+"media/skillG.30ff56c5.mp4"},7304:function(t,i,e){"use strict";t.exports=e.p+"media/skillT.471c4504.mp4"},7591:function(t,i,e){"use strict";t.exports=e.p+"media/skillV.378d6ba8.mp4"},3:function(t,i,e){"use strict";t.exports=e.p+"media/skillX.46b2c6c3.mp4"},8142:function(t,i,e){"use strict";t.exports=e.p+"media/skillY.1b8cea00.mp4"},5918:function(t,i,e){"use strict";t.exports=e.p+"media/skillZ.aafa9513.mp4"}},i={};function e(s){var n=i[s];if(void 0!==n)return n.exports;var l=i[s]={exports:{}};return t[s](l,l.exports,e),l.exports}e.m=t,function(){var t=[];e.O=function(i,s,n,l){if(!s){var o=1/0;for(u=0;u<t.length;u++){s=t[u][0],n=t[u][1],l=t[u][2];for(var r=!0,a=0;a<s.length;a++)(!1&l||o>=l)&&Object.keys(e.O).every((function(t){return e.O[t](s[a])}))?s.splice(a--,1):(r=!1,l<o&&(o=l));if(r){t.splice(u--,1);var c=n();void 0!==c&&(i=c)}}return i}l=l||0;for(var u=t.length;u>0&&t[u-1][2]>l;u--)t[u]=t[u-1];t[u]=[s,n,l]}}(),function(){e.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(i,{a:i}),i}}(),function(){e.d=function(t,i){for(var s in i)e.o(i,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:i[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}}(),function(){e.p=""}(),function(){var t={143:0};e.O.j=function(i){return 0===t[i]};var i=function(i,s){var n,l,o=s[0],r=s[1],a=s[2],c=0;if(o.some((function(i){return 0!==t[i]}))){for(n in r)e.o(r,n)&&(e.m[n]=r[n]);if(a)var u=a(e)}for(i&&i(s);c<o.length;c++)l=o[c],e.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return e.O(u)},s=self["webpackChunkdota2_invoker_simulator"]=self["webpackChunkdota2_invoker_simulator"]||[];s.forEach(i.bind(null,0)),s.push=i.bind(null,s.push.bind(s))}();var s=e.O(void 0,[998],(function(){return e(4484)}));s=e.O(s)})();
//# sourceMappingURL=app.8c6872d5.js.map