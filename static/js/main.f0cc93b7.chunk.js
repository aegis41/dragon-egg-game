(this["webpackJsonpdragon-egg-game"]=this["webpackJsonpdragon-egg-game"]||[]).push([[0],{20:function(e,t,a){e.exports=a(31)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),s=a.n(l),c=(a(25),a(26),a(27),a(5)),i=a(6),o=a(8),m=a(7),u=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{style:p},r.a.createElement("h1",null,"Dragon Egg Game"))}}]),a}(n.Component),p={background:"#333333",color:"#FFFFFF",textAlight:"center",padding:"10px"},g=u,d={backgroundColor:"#F8F8F8",borderTop:"1px solid #E7E7E7",textAlign:"center",padding:"20px",position:"fixed",left:"0",bottom:"0",height:"60px",width:"100%"},h={display:"block",padding:"20px",height:"60px",width:"100%"},E=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{style:h}),r.a.createElement("div",{style:d},r.a.createElement("p",null,"\xa92020 Noisy Fan Games. All rights reserved. Designed by Anthony A. Gaff, Developed by Anthony A. Gaff and Joshua Hall")))}}]),a}(n.Component),y=a(19),b=a(14),v=a(10),f=a(17),O=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).getEggSource=function(e){return"../assets/"+e+".png"},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,{className:"egg-image",src:this.getEggSource(this.props.egg),alt:"Plain Egg",fluid:!0})}}]),a}(r.a.Component),w=a(9),k=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"computeEnding",value:function(e){var t={text:"Your egg is ready. You have incubated a ",egg:"egg00"};return this.props.gameOver&&(e.fire.percent>=90?(t.text+="Fire Dragon",t.egg="egg01"):e.water.percent>=90?(t.text+="Water Dragon",t.egg="egg02"):e.air.percent>=90?(t.text+="Air Dragon",t.egg="egg03"):e.earth.percent>=90?(t.text+="Earth Dragon",t.egg="egg04"):e.magic.percent>=90?(t.text+="Magic Dragon",t.egg="egg05"):t.text="Your choices have resulted in an inert egg. Please try again"),t}},{key:"getCardText",value:function(e,t){return e?this.computeEnding(t).text:"You have 30 days to incubate your egg. Choose an element below for each day to see what hatches."}},{key:"render",value:function(){return r.a.createElement(w.a,{bg:"light",className:"mb-3"},r.a.createElement(w.a.Header,null,this.props.label),r.a.createElement(w.a.Body,null,r.a.createElement(w.a.Title,null,"Incubation Chamber"),r.a.createElement(O,{egg:this.computeEnding(this.props.elements).egg}),r.a.createElement(w.a.Text,null,this.getCardText(this.props.gameOver,this.props.elements))))}}]),a}(r.a.Component),j=a(13),D=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(j.a,{onClick:function(){return e.props.handleClick(e.props.type)},size:"lg",block:!0,variant:this.props.type.toLowerCase(),disabled:this.props.disabled},this.props.type)}}]),a}(r.a.Component),x=a(18),C=a(11),A=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(w.a,{bg:"dark",text:"white",className:"mb-3"},r.a.createElement(w.a.Header,null,"Incubation Data"),r.a.createElement(w.a.Body,null,r.a.createElement(w.a.Title,null,"You are on day ",this.props.day," of ",this.props.days),r.a.createElement(C.a,{className:"game-progress",striped:!0,animated:!0,now:this.props.progress}),r.a.createElement(x.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Element"),r.a.createElement("th",null,"Days Used"),r.a.createElement("th",null,"Incubation Percent"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Fire"),r.a.createElement("td",null,this.props.gameData.elements.fire.days),r.a.createElement("td",null,r.a.createElement(C.a,{striped:!0,animated:!0,variant:"fire",now:this.props.gameData.elements.fire.percent,label:"".concat(this.props.gameData.elements.fire.percent,"%")}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Water"),r.a.createElement("td",null,this.props.gameData.elements.water.days),r.a.createElement("td",null,r.a.createElement(C.a,{striped:!0,animated:!0,variant:"water",now:this.props.gameData.elements.water.percent,label:"".concat(this.props.gameData.elements.water.percent,"%")}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Air"),r.a.createElement("td",null,this.props.gameData.elements.air.days),r.a.createElement("td",null,r.a.createElement(C.a,{striped:!0,animated:!0,variant:"air",now:this.props.gameData.elements.air.percent,label:"".concat(this.props.gameData.elements.air.percent,"%")}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Earth"),r.a.createElement("td",null,this.props.gameData.elements.earth.days),r.a.createElement("td",null,r.a.createElement(C.a,{striped:!0,animated:!0,variant:"earth",now:this.props.gameData.elements.earth.percent,label:"".concat(this.props.gameData.elements.earth.percent,"%")}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Water"),r.a.createElement("td",null,this.props.gameData.elements.magic.days),r.a.createElement("td",null,r.a.createElement(C.a,{striped:!0,animated:!0,variant:"magic",now:this.props.gameData.elements.magic.percent,label:"".concat(this.props.gameData.elements.magic.percent,"%")}))))),r.a.createElement(w.a.Text,null,"Track your egg's incubation progress here."),this.props.gameOver?r.a.createElement(j.a,{variant:"primary",onClick:function(){return e.props.startGame()}},"Start a New Game"):null))}}]),a}(r.a.Component),F=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={day:0,gameLength:10,progress:0,gameOver:!1,elements:{fire:{days:0,percent:0},water:{days:0,percent:0},air:{days:0,percent:0},earth:{days:0,percent:0},magic:{days:0,percent:0}}},e}return Object(i.a)(a,[{key:"round",value:function(e,t){return Number(Math.round(e+"e"+t)+"e-"+t)}},{key:"render",value:function(){var e=this,t=["fire","water","air","earth","magic"],a=function(){t.forEach((function(t){var a=e.state.elements[t];a.percent=a.days>0?e.round(a.days/(e.state.day+1)*100,2).toString():0}))},n=function(t){!function(t){var n=e.state.elements;n[t].days++,e.setState({elements:n}),e.setState({day:e.state.day+1}),a(),l(),e.state.day+1>=e.state.gameLength&&e.setState({gameOver:!0})}(t.toLowerCase())},l=function(){var t=e.round((e.state.day+1)/e.state.gameLength*100,2);e.setState({progress:t})};return r.a.createElement(y.a,{className:"game-container",fluid:!0},r.a.createElement(b.a,null,r.a.createElement(v.a,null,r.a.createElement(k,{label:"Your Egg",gameOver:this.state.gameOver,elements:this.state.elements})),r.a.createElement(v.a,null,r.a.createElement(A,{day:this.state.day,progress:this.state.progress,days:this.state.gameLength,gameData:this.state,gameOver:this.state.gameOver,startGame:function(){e.setState({day:0}),e.setState({progress:0}),e.setState({gameOver:!1}),e.setState({elements:{fire:{days:0,percent:0},water:{days:0,percent:0},air:{days:0,percent:0},earth:{days:0,percent:0},magic:{days:0,percent:0}}})}}))),r.a.createElement(b.a,null,r.a.createElement(v.a,null,r.a.createElement(D,{type:"Fire",handleClick:n,disabled:this.state.gameOver})),r.a.createElement(v.a,null,r.a.createElement(D,{type:"Water",handleClick:n,disabled:this.state.gameOver})),r.a.createElement(v.a,null,r.a.createElement(D,{type:"Air",handleClick:n,disabled:this.state.gameOver})),r.a.createElement(v.a,null,r.a.createElement(D,{type:"Earth",handleClick:n,disabled:this.state.gameOver})),r.a.createElement(v.a,null,r.a.createElement(D,{type:"Magic",handleClick:n,disabled:this.state.gameOver}))))}}]),a}(n.Component);a(30);var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(F,null),r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.f0cc93b7.chunk.js.map