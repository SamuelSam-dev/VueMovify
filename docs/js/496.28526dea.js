"use strict";(self["webpackChunkseries_tracker"]=self["webpackChunkseries_tracker"]||[]).push([[496],{1079:function(e,a,t){t.r(a),t.d(a,{default:function(){return p}});var i=t(3396),l=t(4870),n=t(5815),s=t(1116),r=t(4999),u=t(7877),d=t(678);const c={class:"view"};var g={setup(e){const a=(0,d.yj)(),t=(0,i.Fl)((()=>a.query.p||1)),g=(0,i.Fl)((()=>{const e=a.params.genreId;return"all"===e?`/movies?page=${t.value}`:`/genres/${e}/movies?page=${t.value}`})),o=(0,l.qj)([]),p=(0,l.qj)({data:null});async function w(){await u.h.get(g.value).then((e=>{p.data=e.data.metadata,o.length=0,o.push(...e.data.data)})).catch((()=>{o.push({id:0,title:"Loading Failed",genres:["Loading Failed"],poster:"https://i.pinimg.com/originals/25/32/13/253213c58ce79335d9f5a5c9b17c3627.gif"})}))}return(0,i.YP)([t,g],(async()=>{await w(),window.scrollTo(0,0)})),w(),(e,a)=>((0,i.wg)(),(0,i.iD)("div",c,[(0,i.Wm)(s.Z,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,l.SU)(o),(e=>((0,i.wg)(),(0,i.j4)(n.Z,{key:e["id"],title:e["title"],"img-url":e["poster"],genres:e["genres"],style:{width:"100%"}},null,8,["title","img-url","genres"])))),128))])),_:1}),(0,l.SU)(p).data?((0,i.wg)(),(0,i.j4)(r.Z,{key:0,view:"movies",metadata:(0,l.SU)(p).data},null,8,["metadata"])):(0,i.kq)("",!0)]))}};const o=g;var p=o}}]);
//# sourceMappingURL=496.28526dea.js.map