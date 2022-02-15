(()=>{"use strict";var e={396:(e,t,r)=>{e.exports=r.p+"3c43828b10695f2fe8d5.png"},772:(e,t,r)=>{e.exports=r.p+"b7083c053f4f228bbca1.svg"},166:(e,t,r)=>{e.exports=r.p+"e8efa7f43ecd05b0a5e4.png"},249:(e,t,r)=>{e.exports=r.p+"81b809abc125b4b224fd.svg"},607:(e,t,r)=>{e.exports=r.p+"88aadc1362b424266ff7.svg"}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,r),s.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e=r(166),t=r(607),o=r(772),n=r(249),s=r(396);const i=function(e){const t=[],r=[];let o=!1;for(let r=0;r<e;r+=1)t.push("");return{body:t,hit:function(e){t[e]="x"},isSunk:function(){return!1===t.includes("")},setHorizontally:function(){o=!0},isHorizontal:function(){return o},setVertically:function(){o=!1},setLocation:function(e){e.map((e=>r.push(e)))},getLocation:function(){return r}}},c=function(){const e=[];for(let t=0;t<100;t+=1)e.push({isShot:!1,hasShip:!1});function t(e){return Math.floor(Math.random()*e)}function r(t,r){let o=t;if(!1===r.isHorizontal()){if(o+10*r.body.length>99&&r.body.length>1)return!1;for(let t=0;t<r.body.length;t+=1){if(!0===e[o].hasShip)return!1;o+=10}}else{let n=!0;if(t+r.body.length>99&&r.body.length>1)return!1;for(let t=0;t<r.body.length;t+=1){if(!1===n)switch(o){case 10:case 20:case 30:case 40:case 50:case 60:case 70:case 80:case 90:return!1}if(n=!1,!0===e[o].hasShip)return!1;o+=1}}return!0}function o(t,r){const o=[];let n=t;if(!1===r.isHorizontal())for(let t=0;t<r.body.length;t+=1)o.push(n),e[n].hasShip=!0,n+=10;else for(let t=0;t<r.body.length;t+=1)o.push(n),e[n].hasShip=!0,n+=1;return o}const n={carrier:i(5),battleship:i(4),destroyer:i(3),submarine_1:i(2),submarine_2:i(2),patrolBoat_1:i(1),patrolBoat_2:i(1)};let s=Object.keys(n);return{body:e,showShips:!1,receiveAttack:function(t){e[t].isShot=!0},placeShip:o,hasShip:function(t){return e[t].hasShip},allShipsSunk:function(){let t=!0;return e.forEach((e=>{!0===e.hasShip&&!1===e.isShot&&(t=!1)})),t},placeShipsRandomly:function(){e.forEach((e=>{e.isShot=!1,e.hasShip=!1}));const n={carrier:i(5),battleship:i(4),destroyer:i(3),submarine_1:i(2),submarine_2:i(2),patrolBoat_1:i(1),patrolBoat_2:i(1)};Object.keys(n).forEach((e=>{0===t(2)&&n[e].setHorizontally();let s=t(100);for(;!1===r(s,n[e]);)s=t(100);o(s,n[e])}))},areAllShipsSunk:function(){return!!e.find((e=>!0===e.hasShip))&&!e.find((e=>!0===e.hasShip&&!1===e.isShot))},getNextShip:function(){return n[s[0]]},isPlaceable:r,removeShipFromArray:function(){s.splice(0,1)},resetBoard:function(){e.forEach((e=>{e.hasShip=!1,e.isShot=!1})),s=Object.keys(n)}}},a=document.querySelector(".rotate-ship");a.src=n,a.addEventListener("click",(()=>{a.classList.toggle("horizontal")})),document.querySelector(".clear-all").src=s;const l=document.querySelector("#ship-choice-modal");function u(e){return Math.floor(Math.random()*e)}const d=c(),h=document.querySelector(".ships-left__value");function p(e){const t=document.querySelector(".choice-board"),r=t.querySelectorAll(".cell");r.length>0&&r.forEach((e=>{e.remove()}));for(let r=0;r<e.body.length;r+=1){const o=document.createElement("div");o.setAttribute("data-cell",r),o.classList.add("cell"),!0===e.body[r].hasShip&&o.classList.add("has-ship"),t.appendChild(o)}t.querySelectorAll(".cell").forEach((r=>{0!==Number(h.textContent)&&(r.addEventListener("mouseover",(()=>{let o=r.getAttribute("data-cell");const n=e.getNextShip();if(n){a.classList.contains("horizontal")?n.setHorizontally():n.setVertically();for(let e=0;e<n.body.length;e+=1){const e=t.querySelector(`[data-cell = '${o}']`);if(!e)return;if(e.classList.add("ship-show"),!0===n.isHorizontal()){if(o=Number(o)+1,10===o||20===o||30===o||40===o||50===o||60===o||70===o||80===o||90===o)return}else o=Number(o)+10}}})),r.addEventListener("mouseout",(()=>{let o=r.getAttribute("data-cell");const n=e.getNextShip();if(n){a.classList.contains("horizontal")?n.setHorizontally():n.setVertically();for(let e=0;e<n.body.length;e+=1){const e=t.querySelector(`[data-cell = '${o}']`);if(!e)return;if(e.classList.remove("ship-show"),!0===n.isHorizontal()){if(o=Number(o)+1,10===o||20===o||30===o||40===o||50===o||60===o||70===o||80===o||90===o)return}else o=Number(o)+10}}})),r.addEventListener("click",(()=>{const t=Number(r.getAttribute("data-cell")),o=e.getNextShip();o&&(a.classList.contains("horizontal")?o.setHorizontally():o.setVertically(),!0===e.isPlaceable(t,o)&&(e.placeShip(t,o),p(e),e.removeShipFromArray(),h.textContent=Number(h.textContent)-1))})))}))}p(d),document.querySelector(".random-btn").addEventListener("click",(()=>{d.placeShipsRandomly(),h.textContent=0,p(d)})),document.querySelector(".clear-all").addEventListener("click",(()=>{h.textContent=7,d.resetBoard(),p(d)}));const f=document.querySelector(".btn.confirm");function m(e,t){const r=document.querySelector(`#board-${t}`);r.querySelectorAll(".cell").forEach((e=>{e.remove()}));for(let t=0;t<e.body.length;t+=1){const n=document.createElement("div");if(n.classList.add("cell"),n.setAttribute("data-cell-index",t),!0===e.showShips&&!0===e.body[t].hasShip&&n.classList.add("has-ship"),!0===e.body[t].isShot){!0===e.body[t].hasShip&&n.classList.add("has-ship"),n.classList.add("is-shot");const r=document.createElement("img");r.src=o,r.classList.add("fire-img"),n.appendChild(r)}r.appendChild(n)}}function S(e){document.querySelector(`#board-${e}`).querySelectorAll(".cell").forEach((e=>{e.querySelector(".fire-img")||(e.addEventListener("mouseover",(e=>{if(!e.target.classList.contains("has-target-img")){const r=document.createElement("img");r.src=t,r.alt="Target image",r.classList.add("target-img"),e.target.appendChild(r),e.target.classList.add("has-target-img")}})),e.addEventListener("mouseleave",(e=>{const t=e.target.querySelector(".target-img");t&&(t.remove(),e.target.classList.remove("has-target-img"))})))}))}function y(e,t,r){document.querySelector(`#board-${e}`).querySelectorAll("div.cell").forEach((o=>{o.addEventListener("click",(o=>{if(o.currentTarget.classList.contains("is-shot"))return;const n=o.currentTarget.getAttribute("data-cell-index");if(t.receiveAttack(n),m(t,e),!0===t.areAllShipsSunk()&&function(e){const t=document.querySelector("#winner-modal"),r=t.querySelector(".winner-header");t.classList.add("show"),r.textContent=1===e?"You Lost":"🎉 You Won! 🎉",document.querySelector(".play-again-btn").addEventListener("click",(()=>{t.classList.remove("show"),l.classList.remove("hidden")}))}(e),t.hasShip(n))return y(e,t,r),1===e&&setTimeout((()=>{const e=document.querySelector("#board-1");let r=u(100);for(;!0===t.body[r].isShot;)r=u(100);e.querySelector(`[data-cell-index = '${r}']`).click()}),300),void S(2);2===e?setTimeout((()=>{y(1,r,t);const e=document.querySelector("#board-1");let o=u(100);for(;!0===r.body[o].isShot;)o=u(100);e.querySelector(`[data-cell-index = '${o}']`).click()}),300):setTimeout((()=>{y(2,r,t)}),200),S(2)}))}))}function b(e){const t=e;t.showShips=!0;const r=c();r.placeShipsRandomly(),m(t,1),m(r,2),S(2),y(2,r,t)}document.querySelector(".github-icon").src=e,b(d),f.addEventListener("click",(()=>{0===Number(h.textContent)&&(b(d),l.classList.add("hidden"))}))})()})();