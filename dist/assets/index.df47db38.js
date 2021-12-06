import{r as d,c as p,o as T,a as h,b as y,d as g,e as O}from"./vendor.815fcac5.js";const R=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}};R();var A=(e,r)=>{const o=e.__vccOpts||e;for(const[s,t]of r)o[s]=t;return o};const B={name:"App"};function C(e,r,o,s,t,n){const a=d("router-view");return T(),p(a)}var L=A(B,[["render",C]]);const P="modulepreload",f={},v="/",_=function(r,o){return!o||o.length===0?r():Promise.all(o.map(s=>{if(s=`${v}${s}`,s in f)return;f[s]=!0;const t=s.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const a=document.createElement("link");if(a.rel=t?"stylesheet":P,t||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),t)return new Promise((l,u)=>{a.addEventListener("load",l),a.addEventListener("error",u)})})).then(()=>r())},b=()=>_(()=>import("./Home.70e55577.js"),["assets/Home.70e55577.js","assets/Home.9e22a1bd.css","assets/vendor.815fcac5.js","assets/Container.731b20a4.js","assets/Container.fc5016fa.css"]),w=()=>_(()=>import("./Register.113d5cdb.js"),["assets/Register.113d5cdb.js","assets/Register.ab661b16.css","assets/vendor.815fcac5.js","assets/Container.731b20a4.js","assets/Container.fc5016fa.css","assets/randomColor.478579a4.js"]),N=()=>_(()=>import("./Play.af4ca4d2.js"),["assets/Play.af4ca4d2.js","assets/Play.6a88b1ee.css","assets/vendor.815fcac5.js","assets/Container.731b20a4.js","assets/Container.fc5016fa.css","assets/randomColor.478579a4.js"]),k=[{path:"/",name:"Home",component:b,meta:{transition:"slide-left"}},{path:"/register",name:"Register",component:w,meta:{transition:"slide-left"}},{path:"/game",name:"Play",component:N,meta:{transition:"slide-left"}}],G=h({history:y(),routes:k}),I=()=>({position:{x:24,y:5},shooting:!1}),U={setBallPosition({commit:e},r){e("SET_POSITION",r)},clearBallPosition({commit:e}){e("SET_POSITION",{x:24,y:5})},setBallShooting({commit:e},r){e("SET_SHOOTING",r)}},D={SET_POSITION(e,r){e.position=r},SET_SHOOTING(e,r){e.shooting=r}};var $={namespaced:!0,state:I,mutations:D,actions:U};function i(e,r,o){const s=Math.floor(Math.random()*(e.length-1+1))+2,n=e.sort((l,u)=>.5-Math.random()).splice(0,s);return r.filter(l=>n.includes(l)).filter((l,u)=>l!==o)}function m(e){this.game=e,this.frameCount=0,this.score=0,this.scoreByFrames=[],this.calcScore=function(){let r=0;do{if(this.gameOver())break;let o=0;const s=this.game[r];if(s==10)o=10+this.game[r+1]+this.game[r+2];else{const t=this.game[++r];s+t==10?o=10+this.game[r+1]:o=s+t}this.score+=o,this.scoreByFrames.push(this.score),this.frameCount++,r++}while(r<this.game.length);return this.score},this.gameOver=function(){return this.frameCount==10}}function M(e){return Math.random()<e}const S={1:[9],2:[7,8,9],3:[...Array(10).keys()].filter(e=>e>3),4:[6,7,8],5:[6]},c=(e,r,o)=>e<=o&&e>=r,W=()=>({strike:!1,bowls:[...Array(10).keys()],scoreBoard:[],acumulatedScore:[],tempGameScores:[],turn:1,standBy:!1,game:1,gameOver:!1}),F={setStrike({commit:e},r){e("SET_STRIKE",r),r&&e("SET_BOWLS",[])},setTurn({commit:e},r){e("SET_TURN",r)},resetBowls({commit:e}){e("SET_BOWLS",[...Array(10).keys()])},nextGame({commit:e,state:r}){e("SET_GAME",r.game+1)},setStandBy({commit:e},r){e("SET_STAND_BY",r)},setBowls({commit:e,state:r},o){let s=[];e("SET_STRIKE",!1),r.turn===1&&e("SET_TEMP_SCORES",[]),c(o,-5,15)?s=r.bowls.filter(n=>n!==9):c(o,20,35)?s=i(S[1],r.bowls,5):c(o,40,65)?s=i(S[2],r.bowls,2):c(o,60,145)?r.turn===1&&M(.15)?(s=[],e("SET_TURN",r.turn+1),e("SET_STRIKE",!0)):s=i(S[3],r.bowls,0):c(o,150,175)?s=i(S[4],r.bowls,1):c(o,180,195)?s=i(S[5],r.bowls,4):c(o,200,220)?s=r.bowls.filter(n=>n!==6):s=r.bowls,s.length||r.turn===1&&(e("SET_TURN",r.turn+1),e("SET_STRIKE",!0));const t=r.bowls.length-s.length;e("PUSH_TEMP_SCORES",t),e("SET_BOWLS",s),e("SET_TURN",r.turn+1)},setScore({commit:e,state:r},o){const s=r.scoreBoard.find(t=>t.player===o);if(s){const t=new m(s.games.flat());t.calcScore();const n=t.scoreByFrames;e("UPDATE_SCORE_BOARD",{player:o,games:r.tempGameScores}),e("UPDATE_ACC_SCORE",{player:o,score:n})}else{const t=new m(r.tempGameScores);t.calcScore();const n=t.scoreByFrames;e("SET_NEW_SCORE_BOARD",{player:o,games:r.tempGameScores}),e("SET_NEW_ACC_SCORE",{player:o,score:n})}},setGameOver({commit:e},r){e("SET_GAME_OVER",r)},clearAllStates({commit:e}){e("CLEAR_ALL_STATES")}},H={SET_STRIKE(e,r){e.strike=r},SET_GAME(e,r){e.game=r},SET_BOWLS(e,r){e.bowls=r},SET_TURN(e,r){e.turn=r},PUSH_TEMP_SCORES(e,r){e.tempGameScores.push(r)},SET_TEMP_SCORES(e,r){e.tempGameScores=r},SET_NEW_SCORE_BOARD(e,r){const{player:o,games:s}=r,t={player:o,games:[s]};e.scoreBoard.push(t)},UPDATE_SCORE_BOARD(e,r){const{player:o,games:s}=r;e.scoreBoard.find(n=>n.player===o).games.push(s)},SET_NEW_ACC_SCORE(e,r){const{player:o,score:s}=r,t={player:o,score:s};e.acumulatedScore.push(t)},UPDATE_ACC_SCORE(e,r){const{player:o,score:s}=r,t=e.acumulatedScore.find(n=>n.player===o);t.score=s},SET_STAND_BY(e,r){e.standBy=r},SET_GAME_OVER(e,r){e.gameOver=r},CLEAR_ALL_STATES(e){e.strike=!1,e.bowls=[...Array(10).keys()],e.scoreBoard=[],e.acumulatedScore=[],e.turn=1,e.standBy=!1,e.game=1,e.gameOver=!1}};var x={namespaced:!0,state:W,mutations:H,actions:F};const K=()=>({players:[],scores:[],player:{}}),Y={registerUsers({commit:e},r){e("SET_PLAYERS",r)},setCurrentPlayer({commit:e},r){e("SET_CURRENT_PLAYER",r)},clearAllStates({commit:e}){e("CLEAR_ALL_STATES")}},V={SET_PLAYERS(e,r){e.players=r},SET_SCORES(e,r){e.scores=r},SET_CURRENT_PLAYER(e,r){e.player=r},CLEAR_ALL_STATES(e){e.players=[],e.scores=[],e.player={}}};var j={namespaced:!0,state:K,mutations:V,actions:Y};const q=!1;var z=g({modules:{ball:$,player:j,game:x},strict:q,plugins:[]});const E=O(L);E.use(G);E.use(z);E.mount("#app");export{A as _};
