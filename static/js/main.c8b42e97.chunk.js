(this["webpackJsonpdragon-egg-game"]=this["webpackJsonpdragon-egg-game"]||[]).push([[0],{22:function(e,t,a){e.exports=a(33)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(17),c=a.n(l),s=(a(27),a(28),a(29),a(5)),o=a(6),i=a(8),m=a(7),u=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("header",{style:p},n.a.createElement("h1",null,"Dragon Egg Game"))}}]),a}(r.Component),p={background:"#333333",color:"#FFFFFF",textAlight:"center",padding:"10px"},d=u,g={backgroundColor:"#F8F8F8",borderTop:"1px solid #E7E7E7",textAlign:"center",padding:"20px",position:"fixed",left:"0",bottom:"0",height:"60px",width:"100%"},h={display:"block",padding:"20px",height:"60px",width:"100%"},E=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{style:h}),n.a.createElement("div",{style:g},n.a.createElement("p",null,"\xa92020 Noisy Fan Games. All rights reserved. Designed by Anthony A. Gaff, Developed by Anthony A. Gaff and Joshua Hall")))}}]),a}(r.Component),f=a(15),y=a(21),b=a(20),v=a(14),O=a(10),w=a(18),j=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).getEggSource=function(e){return"https://raw.githubusercontent.com/aegis41/dragon-egg-game/master/public/assets/"+e.toLowerCase()+".png"},e}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement(w.a,{className:"egg-image",src:this.getEggSource(this.props.egg).toLowerCase(),alt:"Plain Egg",fluid:!0})}}]),a}(n.a.Component),k=a(9),C=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement(k.a,{bg:"light",className:"mb-3"},n.a.createElement(k.a.Header,null,this.props.label),n.a.createElement(k.a.Body,null,n.a.createElement(k.a.Title,null,"Incubation Chamber"),n.a.createElement(j,{egg:this.props.egg}),n.a.createElement(k.a.Text,null,this.props.cardText)))}}]),a}(n.a.Component),D=a(13),x=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(D.a,{onClick:function(){return e.props.handleClick(e.props.type)},size:"lg",block:!0,variant:this.props.type.toLowerCase(),disabled:this.props.disabled},this.props.type)}}]),a}(n.a.Component),S=a(19),A=a(11),F=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(k.a,{bg:"dark",text:"white",className:"mb-3"},n.a.createElement(k.a.Header,null,"Incubation Data"),n.a.createElement(k.a.Body,null,n.a.createElement(k.a.Title,null,"You are on day ",this.props.day," of ",this.props.days),n.a.createElement(A.a,{className:"game-progress",striped:!0,animated:!0,now:this.props.progress}),n.a.createElement(S.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Element"),n.a.createElement("th",null,"Days Used"),n.a.createElement("th",null,"Incubation Percent"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Fire"),n.a.createElement("td",null,this.props.gameData.elements.fire.days),n.a.createElement("td",null,n.a.createElement(A.a,{striped:!0,animated:!0,variant:"fire",now:this.props.gameData.elements.fire.percent,label:"".concat(this.props.gameData.elements.fire.percent,"%")}))),n.a.createElement("tr",null,n.a.createElement("td",null,"Water"),n.a.createElement("td",null,this.props.gameData.elements.water.days),n.a.createElement("td",null,n.a.createElement(A.a,{striped:!0,animated:!0,variant:"water",now:this.props.gameData.elements.water.percent,label:"".concat(this.props.gameData.elements.water.percent,"%")}))),n.a.createElement("tr",null,n.a.createElement("td",null,"Air"),n.a.createElement("td",null,this.props.gameData.elements.air.days),n.a.createElement("td",null,n.a.createElement(A.a,{striped:!0,animated:!0,variant:"air",now:this.props.gameData.elements.air.percent,label:"".concat(this.props.gameData.elements.air.percent,"%")}))),n.a.createElement("tr",null,n.a.createElement("td",null,"Earth"),n.a.createElement("td",null,this.props.gameData.elements.earth.days),n.a.createElement("td",null,n.a.createElement(A.a,{striped:!0,animated:!0,variant:"earth",now:this.props.gameData.elements.earth.percent,label:"".concat(this.props.gameData.elements.earth.percent,"%")}))),n.a.createElement("tr",null,n.a.createElement("td",null,"Magic"),n.a.createElement("td",null,this.props.gameData.elements.magic.days),n.a.createElement("td",null,n.a.createElement(A.a,{striped:!0,animated:!0,variant:"magic",now:this.props.gameData.elements.magic.percent,label:"".concat(this.props.gameData.elements.magic.percent,"%")}))))),n.a.createElement(k.a.Text,null,"Track your egg's incubation progress here."),this.props.gameOver?n.a.createElement(D.a,{variant:"primary",onClick:function(){return e.props.startGame()}},"Start a New Game"):null))}}]),a}(n.a.Component),N=[{outcome:"Fire",tests:[{fire:90}]},{outcome:"Water",tests:[{water:90}]},{outcome:"Air",tests:[{air:90}]},{outcome:"Earth",tests:[{earth:90}]},{outcome:"Magic",tests:[{magic:90}]},{outcome:"Smoke",tests:[{fire:40},{air:40}]},{outcome:"Steam",tests:[{fire:40},{water:40}]},{outcome:"Lava",tests:[{fire:30},{earth:40}]},{outcome:"Star",tests:[{fire:30},{magic:30}]},{outcome:"Ice",tests:[{air:30},{water:50}]},{outcome:"Dust",tests:[{air:30},{earth:40}]},{outcome:"Invisible",tests:[{air:30},{magic:50}]},{outcome:"Lunar",tests:[{water:20},{magic:40}]},{outcome:"Mud",tests:[{water:30},{earth:40}]},{outcome:"Skeletal",tests:[{earth:40},{magic:45}]},{outcome:"Dragon Lord",tests:[{fire:20},{water:20},{air:20},{earth:20},{magic:20}]}],L={day:0,gameLength:10,progress:0,gameOver:!1,elements:{fire:{days:0,percent:0},water:{days:0,percent:0},air:{days:0,percent:0},earth:{days:0,percent:0},magic:{days:0,percent:0}}},T=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state=JSON.parse(JSON.stringify(L)),e}return Object(o.a)(a,[{key:"round",value:function(e,t){return Number(Math.round(e+"e"+t)+"e-"+t)}},{key:"computeOutcome",value:function(e){var t=N.filter((function(t){var a=[];return t.tests.forEach((function(t){for(var r=0,n=Object.entries(t);r<n.length;r++){var l=Object(y.a)(n[r],2),c=l[0],s=l[1];a.push(e[c].percent>=s)}})),!!a.every((function(e){return!0===e}))}));return t.length>0?t:[{outcome:"inert"}]}},{key:"getCardText",value:function(){if(this.state.gameOver&&this.state.outcomes){var e,t=this.state.outcomes[0].outcome;return console.log(t),e="Dragon Lord"===t?"!!":"inert"===t?" egg.":" dragon.","Your egg is ready. You have incubated a ".concat(t.toUpperCase()).concat(e)}return"You have 30 days to incubate your egg. Choose an element below for each day to see what hatches."}},{key:"getEgg",value:function(){return this.state.gameOver&&this.state.outcomes?this.state.outcomes[0].outcome.replace(" ","-"):"egg"}},{key:"render",value:function(){var e=this,t=["fire","water","air","earth","magic"],a=function(a){return t.forEach((function(t){a[t].percent=a[t].days>0?e.round(a[t].days/e.state.day*100,2):0})),a},r=function(t){!function(t){var r=e.state,n=e.state.elements;n[t].days++,r.elements=n,r.day++,r.elements=a(r.elements),r.progress=l(r.day,r.gameLength),r.day>=r.gameLength&&(r.gameOver=!0,r.outcomes=e.computeOutcome(r.elements)),e.setState(Object(f.a)({},r))}(t.toLowerCase())},l=function(t,a){return e.round(t/a*100,2)};return n.a.createElement(b.a,{className:"game-container",fluid:!0},n.a.createElement(v.a,null,n.a.createElement(O.a,null,n.a.createElement(C,{label:"Your Egg",cardText:this.getCardText(),egg:this.getEgg()})),n.a.createElement(O.a,null,n.a.createElement(F,{day:this.state.day,progress:this.state.progress,days:this.state.gameLength,gameData:this.state,gameOver:this.state.gameOver,startGame:function(){var t=JSON.parse(JSON.stringify(L));e.setState(Object(f.a)({},t))}}))),n.a.createElement(v.a,null,n.a.createElement(O.a,null,n.a.createElement(x,{type:"Fire",handleClick:r,disabled:this.state.gameOver})),n.a.createElement(O.a,null,n.a.createElement(x,{type:"Water",handleClick:r,disabled:this.state.gameOver})),n.a.createElement(O.a,null,n.a.createElement(x,{type:"Air",handleClick:r,disabled:this.state.gameOver})),n.a.createElement(O.a,null,n.a.createElement(x,{type:"Earth",handleClick:r,disabled:this.state.gameOver})),n.a.createElement(O.a,null,n.a.createElement(x,{type:"Magic",handleClick:r,disabled:this.state.gameOver}))))}}]),a}(r.Component);a(32);var G=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(d,null),n.a.createElement(T,null),n.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.c8b42e97.chunk.js.map