"use strict";(self["webpackChunkseries_tracker"]=self["webpackChunkseries_tracker"]||[]).push([[185],{720:function(e,a,t){t.d(a,{Z:function(){return f}});var n=t(3396),s=t(7139),i=t(9242),r=t(4870);const l={class:"card__movie-rate"},d=["src"],o={class:"card__loading-placeholder"},c={class:"card__content"},u={class:"card__info"},_={class:"info__title"},g={class:"info__genres"};var v={props:["imgUrl","genres","styles","title","id"],setup(e){const a=e,t=(0,r.iH)((10*Math.random()).toFixed(2)),v=(0,r.iH)(!1);function p(){v.value=!0}return(e,r)=>{const m=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",{class:"card",style:(0,s.j5)(a.styles)},[(0,n._)("span",l,(0,s.zw)(t.value),1),(0,n._)("img",{src:a.imgUrl,alt:"null",class:(0,s.C_)(["card__image",{"card__image-hide":!v.value}]),loading:"lazy",onLoad:p},null,42,d),(0,n.wy)((0,n._)("div",o,"Loading",512),[[i.F8,!v.value]]),(0,n._)("div",c,[(0,n._)("div",u,[(0,n._)("h4",_,(0,s.zw)(a.title),1),(0,n._)("p",g,(0,s.zw)(a.genres.join(" - ")),1)])]),(0,n.Wm)(m,{class:"card__link",to:{name:"movie_info",params:{id:a.id}}},null,8,["to"])],4)}}},p=t(89);const m=(0,p.Z)(v,[["__scopeId","data-v-44d70400"]]);var f=m},6707:function(e,a,t){t.d(a,{Z:function(){return o}});var n=t(3396);const s={class:"container"};function i(e,a){return(0,n.wg)(),(0,n.iD)("div",s,[(0,n.WI)(e.$slots,"default",{},void 0,!0)])}var r=t(89);const l={},d=(0,r.Z)(l,[["render",i],["__scopeId","data-v-1aa20c2c"]]);var o=d},1365:function(e,a,t){t.d(a,{Z:function(){return u}});var n=t(3396),s=t(4870),i=t(7139);const r={class:"pagination"},l={class:"pagination__pages-container"};var d={props:["metadata","view"],setup(e){const a=e,t=(0,n.Fl)((()=>{const e=[],t=Number(a.metadata["current_page"]),n=Number(a.metadata["page_count"]);return t-1>1&&e.push(t-2),t>1&&e.push(t-1),e.push(t),t<n&&e.push(t+1),t+1<n&&e.push(t+2),e}));return(e,d)=>{const o=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("ul",l,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,s.SU)(t),(e=>((0,n.wg)(),(0,n.iD)("li",{key:e},[(0,n.Wm)(o,{class:(0,i.C_)(["page",{active:a.metadata["current_page"]==e}]),to:{name:a.view,query:{p:e}}},{default:(0,n.w5)((()=>[(0,n.Uk)((0,i.zw)(e),1)])),_:2},1032,["class","to"])])))),128))])])}}},o=t(89);const c=(0,o.Z)(d,[["__scopeId","data-v-ca51731a"]]);var u=c},185:function(e,a,t){t.r(a),t.d(a,{default:function(){return q}});var n=t(3396),s=t(4870),i=t(7139);const r={class:"cell-container"};function l(e,a){return(0,n.wg)(),(0,n.iD)("div",r,[(0,n.WI)(e.$slots,"default",{},void 0,!0)])}var d=t(89);const o={},c=(0,d.Z)(o,[["render",l],["__scopeId","data-v-f0ebe15e"]]);var u=c,_={props:["genreId"],setup(e){const a=e;return(e,t)=>{const s=(0,n.up)("router-link");return(0,n.wg)(),(0,n.j4)(s,{to:{name:"movies",params:{genreId:a.genreId}},class:"cell"},{default:(0,n.w5)((()=>[(0,n.WI)(e.$slots,"default")])),_:3},8,["to"])}}};const g=(0,d.Z)(_,[["__scopeId","data-v-5930f6fe"]]);var v=g,p=t(7877);const m=e=>((0,n.dD)("data-v-89570762"),e=e(),(0,n.Cn)(),e),f={class:"header"},w={class:"header__content"},h=m((()=>(0,n._)("h2",{class:"header__title"},"Vue Movify",-1))),k=m((()=>(0,n._)("p",{class:"header__description"}," This is a simple site with a fake movie rate in cards. All ratings in the cards is fake but in the Movie Details not !",-1)));var y={setup(e){const a=(0,s.qj)([]),t=(0,s.iH)(!0),r=(0,s.iH)("Loading");return(0,p.h)({url:"/genres"}).then((e=>{e.data.forEach((e=>a.push(e))),t.value=!1})).catch((()=>{r.value="Loading Failed"})),(e,l)=>((0,n.wg)(),(0,n.iD)("header",f,[(0,n._)("div",w,[h,k,(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,s.SU)(a),(e=>((0,n.wg)(),(0,n.j4)(v,{genreId:e["id"],key:e},{default:(0,n.w5)((()=>[(0,n.Uk)((0,i.zw)(e["name"]),1)])),_:2},1032,["genreId"])))),128)),t.value?((0,n.wg)(),(0,n.j4)(v,{key:0,genreId:"#"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,i.zw)(r.value),1)])),_:1})):(0,n.kq)("",!0)])),_:1})])]))}};const I=(0,d.Z)(y,[["__scopeId","data-v-89570762"]]);var D=I,Z=t(720),j=t(6707),U=t(1365),b=t(678),H={setup(e){const a=(0,b.yj)(),t=(0,n.Fl)((()=>a.query.p||1)),i=(0,s.qj)([]),r=(0,s.qj)({data:null});async function l(){await p.h.get(`/movies?page=${t.value}`).then((e=>{r.data=e.data.metadata,i.length=0,i.push(...e.data.data)})).catch((()=>{i.push({id:0,title:"Loading Failed",genres:["Loading Failed"],poster:"https://i.pinimg.com/originals/25/32/13/253213c58ce79335d9f5a5c9b17c3627.gif"})}))}return(0,n.YP)(t,(async()=>{window.scroll({top:400,left:0,behavior:"smooth"}),await l()}),{immediate:!0}),(0,n.bv)((()=>{document.title="Vue Movify"})),(e,a)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(D),(0,n.Wm)(j.Z,null,{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,s.SU)(i),(e=>((0,n.wg)(),(0,n.j4)(Z.Z,{key:e["id"],title:e["title"],"img-url":e["poster"],genres:e["genres"],style:{width:"100%"},id:e["id"]},null,8,["title","img-url","genres","id"])))),128))])),_:1}),(0,s.SU)(r).data?((0,n.wg)(),(0,n.j4)(U.Z,{key:0,view:"home",metadata:(0,s.SU)(r).data},null,8,["metadata"])):(0,n.kq)("",!0)],64))}};const W=H;var q=W}}]);
//# sourceMappingURL=185.a704f9d8.js.map