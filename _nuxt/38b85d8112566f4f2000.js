(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{194:function(t,e,n){var content=n(391);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("741ab3b0",content,!0,{sourceMap:!1})},390:function(t,e,n){"use strict";var r=n(194);n.n(r).a},391:function(t,e,n){(t.exports=n(27)(!1)).push([t.i,"\ntr {\n\theight: 32px !important;\n}\ntd, th {\n\tpadding: 0 0 0 8px !important;\n\theight: 32px !important\n}\ntd:last-child, th:last-child {\n\tpadding: 0 8px !important;\n}\n.row-header {\n\twidth: 100px;\n\twhite-space: nowrap;\n}\n",""])},411:function(t,e,n){"use strict";n.r(e);n(141),n(39),n(26);var r=n(3),c=n(139),o=n(137),l=n(147),x=n(146),v={data:function(){return{headers:[{text:"Case",align:"left",value:"index"},{text:"Count",align:"right",value:"count"},{text:"Time",align:"right",value:"averageTime"},{text:"Insp.",align:"right",value:"averageInspection"},{text:"Exec.",align:"right",value:"averageExecution"}],stats:[],cases:x.d.map(function(t){var e=Object(c.a)(t,2);return{name:e[0],id:e[1],count:null,averageTime:0,averageTimeText:"",averageInspection:0,averageInspectionText:"",averageExecution:0,averageExecutionText:""}})}},computed:{},mounted:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.f)();case 2:this.stats=t.sent,this.cases=this.cases.map(function(t,n){var r=t.name,c=t.id,l=e.stats.find(function(s){return s.id===n}),x=l?l.times/l.count:1/0,v=l?l.inspectionTimes/l.count:1/0,d=l?l.executionTimes/l.count:1/0;return{index:n,name:r,id:c,count:l?l.count:0,averageTime:x,averageTimeText:Object(o.f)(x),averageInspection:v,averageInspectionText:Object(o.f)(v),averageExecution:d,averageExecutionText:Object(o.f)(d)}});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),head:function(){return{title:"PLL Stats"}}},d=(n(390),n(15)),component=Object(d.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","grid-list-md":"","text-xs-center":""}},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.cases,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[n("th",{staticClass:"row-header text-xs-left"},[null===e.item.id?n("span",[t._v(t._s(e.item.name))]):n("a",{attrs:{href:"http://algdb.net/puzzle/333/pll/"+e.item.id,target:"_blank",rel:"noopener"}},[t._v("\n\t\t\t\t\t"+t._s(e.item.name)+"\n\t\t\t\t")])]),t._v(" "),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.count))]),t._v(" "),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.averageTimeText))]),t._v(" "),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.averageInspectionText))]),t._v(" "),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.averageExecutionText))])]}}])})],1)},[],!1,null,null,null);e.default=component.exports}}]);