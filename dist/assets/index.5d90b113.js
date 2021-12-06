import{p,r as T,o as h,c as y,a as g,b as O,d as R,e as A}from"./vendor.ae8944e4.js";const B=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}};B();function f(e){return Math.random()<e}var C=(e,r)=>{const o=e.__vccOpts||e;for(const[s,t]of r)o[s]=t;return o};const L={name:"App",setup(){p("probability",f)}};function P(e,r,o,s,t,n){const a=T("router-view");return h(),y(a)}var b=C(L,[["render",P]]);const v="modulepreload",m={},w="/bowling-2d/",_=function(r,o){return!o||o.length===0?r():Promise.all(o.map(s=>{if(s=`${w}${s}`,s in m)return;m[s]=!0;const t=s.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const a=document.createElement("link");if(a.rel=t?"stylesheet":v,t||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),t)return new Promise((l,u)=>{a.addEventListener("load",l),a.addEventListener("error",u)})})).then(()=>r())},N=()=>_(()=>import("./Home.db27114e.js"),["assets/Home.db27114e.js","assets/Home.9e22a1bd.css","assets/vendor.ae8944e4.js","assets/Container.a413be35.js","assets/Container.fc5016fa.css"]),k=()=>_(()=>import("./Register.04758c57.js"),["assets/Register.04758c57.js","assets/Register.ab661b16.css","assets/Container.a413be35.js","assets/Container.fc5016fa.css","assets/vendor.ae8944e4.js","assets/randomColor.478579a4.js"]),G=()=>_(()=>import("./Play.6a49d8f8.js"),["assets/Play.6a49d8f8.js","assets/Play.6426fdd9.css","assets/vendor.ae8944e4.js","assets/Container.a413be35.js","assets/Container.fc5016fa.css","assets/randomColor.478579a4.js"]),I=[{path:"/",name:"Home",component:N,meta:{transition:"slide-left"}},{path:"/register",name:"Register",component:k,meta:{transition:"slide-left"}},{path:"/game",name:"Play",component:G,meta:{transition:"slide-left"}}],U=g({history:O(),routes:I}),D=()=>({position:{x:24,y:5},shooting:!1}),$={setBallPosition({commit:e},r){e("SET_POSITION",r)},clearBallPosition({commit:e}){e("SET_POSITION",{x:24,y:5})},setBallShooting({commit:e},r){e("SET_SHOOTING",r)}},M={SET_POSITION(e,r){e.position=r},SET_SHOOTING(e,r){e.shooting=r}};var W={namespaced:!0,state:D,mutations:M,actions:$};function i(e,r,o){const s=Math.floor(Math.random()*(e.length-1+1))+2,n=e.sort((l,u)=>.5-Math.random()).splice(0,s);return r.filter(l=>n.includes(l)).filter((l,u)=>l!==o)}function d(e){this.game=e,this.frameCount=0,this.score=0,this.scoreByFrames=[],this.calcScore=function(){let r=0;do{if(this.gameOver())break;let o=0;const s=this.game[r];if(s==10)o=10+this.game[r+1]+this.game[r+2];else{const t=this.game[++r];s+t==10?o=10+this.game[r+1]:o=s+t}this.score+=o,this.scoreByFrames.push(this.score),this.frameCount++,r++}while(r<this.game.length);return this.score},this.gameOver=function(){return this.frameCount==10}}const S={1:[9],2:[7,8,9],3:[...Array(10).keys()].filter(e=>e>3),4:[6,7,8],5:[6]},c=(e,r,o)=>e<=o&&e>=r,F=()=>({strike:!1,bowls:[...Array(10).keys()],scoreBoard:[],acumulatedScore:[],tempGameScores:[],turn:1,standBy:!1,game:1,gameOver:!1}),H={setStrike({commit:e},r){e("SET_STRIKE",r),r&&e("SET_BOWLS",[])},setTurn({commit:e},r){e("SET_TURN",r)},resetBowls({commit:e}){e("SET_BOWLS",[...Array(10).keys()])},nextGame({commit:e,state:r}){e("SET_GAME",r.game+1)},setStandBy({commit:e},r){e("SET_STAND_BY",r)},setBowls({commit:e,state:r},o){let s=[];e("SET_STRIKE",!1),r.turn===1&&e("SET_TEMP_SCORES",[]),c(o,-5,15)?s=r.bowls.filter(n=>n!==9):c(o,20,35)?s=i(S[1],r.bowls,5):c(o,40,65)?s=i(S[2],r.bowls,2):c(o,60,145)?r.turn===1&&f(.15)?(s=[],e("SET_TURN",r.turn+1),e("SET_STRIKE",!0)):s=i(S[3],r.bowls,0):c(o,150,175)?s=i(S[4],r.bowls,1):c(o,180,195)?s=i(S[5],r.bowls,4):c(o,200,220)?s=r.bowls.filter(n=>n!==6):s=r.bowls,s.length||r.turn===1&&(e("SET_TURN",r.turn+1),e("SET_STRIKE",!0));const t=r.bowls.length-s.length;e("PUSH_TEMP_SCORES",t),e("SET_BOWLS",s),e("SET_TURN",r.turn+1)},setScore({commit:e,state:r},o){const s=r.scoreBoard.find(t=>t.player===o);if(s){const t=new d(s.games.flat());t.calcScore();const n=t.scoreByFrames;e("UPDATE_SCORE_BOARD",{player:o,games:r.tempGameScores}),e("UPDATE_ACC_SCORE",{player:o,score:n})}else{const t=new d(r.tempGameScores);t.calcScore();const n=t.scoreByFrames;e("SET_NEW_SCORE_BOARD",{player:o,games:r.tempGameScores}),e("SET_NEW_ACC_SCORE",{player:o,score:n})}},setGameOver({commit:e},r){e("SET_GAME_OVER",r)},clearAllStates({commit:e}){e("CLEAR_ALL_STATES")}},x={SET_STRIKE(e,r){e.strike=r},SET_GAME(e,r){e.game=r},SET_BOWLS(e,r){e.bowls=r},SET_TURN(e,r){e.turn=r},PUSH_TEMP_SCORES(e,r){e.tempGameScores.push(r)},SET_TEMP_SCORES(e,r){e.tempGameScores=r},SET_NEW_SCORE_BOARD(e,r){const{player:o,games:s}=r,t={player:o,games:[s]};e.scoreBoard.push(t)},UPDATE_SCORE_BOARD(e,r){const{player:o,games:s}=r;e.scoreBoard.find(n=>n.player===o).games.push(s)},SET_NEW_ACC_SCORE(e,r){const{player:o,score:s}=r,t={player:o,score:s};e.acumulatedScore.push(t)},UPDATE_ACC_SCORE(e,r){const{player:o,score:s}=r,t=e.acumulatedScore.find(n=>n.player===o);t.score=s},SET_STAND_BY(e,r){e.standBy=r},SET_GAME_OVER(e,r){e.gameOver=r},CLEAR_ALL_STATES(e){e.strike=!1,e.bowls=[...Array(10).keys()],e.scoreBoard=[],e.acumulatedScore=[],e.turn=1,e.standBy=!1,e.game=1,e.gameOver=!1}};var K={namespaced:!0,state:F,mutations:x,actions:H};const Y=()=>({players:[],scores:[],player:{}}),V={registerUsers({commit:e},r){e("SET_PLAYERS",r)},setCurrentPlayer({commit:e},r){e("SET_CURRENT_PLAYER",r)},clearAllStates({commit:e}){e("CLEAR_ALL_STATES")}},j={SET_PLAYERS(e,r){e.players=r},SET_SCORES(e,r){e.scores=r},SET_CURRENT_PLAYER(e,r){e.player=r},CLEAR_ALL_STATES(e){e.players=[],e.scores=[],e.player={}}};var q={namespaced:!0,state:Y,mutations:j,actions:V};const z=!1;var J=R({modules:{ball:W,player:q,game:K},strict:z,plugins:[]});const E=A(b);E.use(U);E.use(J);E.mount("#app");export{C as _};