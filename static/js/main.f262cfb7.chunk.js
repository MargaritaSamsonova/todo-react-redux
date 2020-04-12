(this["webpackJsonptodo-redux"]=this["webpackJsonptodo-redux"]||[]).push([[0],{18:function(e,t,a){e.exports={link:"Link_link__la-0y src_btn__nz7d1"}},19:function(e,t,a){e.exports={todos:"TodoList_todos__3bGRA"}},20:function(e,t,a){e.exports={date:"CurrentDate_date__1GfTB"}},22:function(e,t,a){e.exports=a(35)},27:function(e,t,a){e.exports={btn:"src_btn__nz7d1",pointer:"src_pointer__m81wI"}},35:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),c=a(10),o=a.n(c),i=(a(27),a(1)),d=a(2),s=a(17),m=a(21),f=a(36),u=(a(34),a(37)),h=0,p=Object(u.a)("ADD_TODO",(function(e){return{id:++h,text:e,done:!1}})),E=Object(u.a)("TOGGLE_TODO",(function(e){return e})),k=Object(u.a)("DELETE_TODO",(function(e){return e})),_=Object(f.a)((n={},Object(d.a)(n,p,(function(e,t){return[].concat(Object(m.a)(e),[t.payload])})),Object(d.a)(n,k,(function(e,t){return e.filter((function(e){return!(e.id===t.payload)}))})),Object(d.a)(n,E,(function(e,t){return e.map((function(e){return e.id===t.payload?Object(s.a)({},e,{done:!e.done}):e}))})),n),[]),v=function(e){return e.todos},b=a(9),y=a.n(b),x=Object(i.b)()((function(e){var t=e.dispatch;return l.a.createElement("form",{className:y.a.addForm,onSubmit:function(e){e.preventDefault();var a=e.target.text,n=a.value.trim();n&&t(p(n)),a.value=""}},l.a.createElement("div",{className:y.a.inputWrap},l.a.createElement("input",{className:y.a.input,name:"text",type:"text",autocomplete:"off",placeholder:"Add a new task..."})),l.a.createElement("button",{className:y.a.addBtn,type:"submit"}))})),A=a(8),w=a.n(A),g=function(e){var t=e.id,a=e.text,n=e.done,r=e.onTodoClick,c=e.onDeleteClick;return l.a.createElement("li",{className:w.a.todo},l.a.createElement("button",{className:w.a.checkbox,type:"button",onClick:r.bind(null,t)},n&&l.a.createElement("span",{className:w.a.done})),l.a.createElement("div",{className:w.a.text,onClick:r.bind(null,t)},a),l.a.createElement("button",{className:w.a.delete,type:"button",onClick:c.bind(null,t)}))},M=a(18),j=a.n(M),O=Object(u.a)("SET_VISIBILITY_FILTER",(function(e){return e})),Z="SHOW_ALL",T="SHOW_ACTIVE",C="SHOW_DONE",D=Object(f.a)(Object(d.a)({},O,(function(e,t){return t.payload})),Z),H=function(e){return e.visibilityFilter},N=Object(i.b)((function(e,t){return{active:t.filter===H(e)}}),(function(e,t){return{onFilterClick:function(){return e(O(t.filter))}}}))((function(e){var t=e.children,a=e.active,n=e.onFilterClick;return l.a.createElement("button",{className:j.a.link,type:"button",onClick:n,disabled:a},t)})),V=function(){return l.a.createElement("div",null,l.a.createElement(N,{filter:Z},"All"),l.a.createElement(N,{filter:T},"Active"),l.a.createElement(N,{filter:C},"Done"))},F=a(19),I=a.n(F),S=function(e,t){switch(t){case Z:return e;case C:return e.filter((function(e){return e.done}));case T:return e.filter((function(e){return!e.done}));default:throw new Error("Unknown filter: "+t)}},B=Object(i.b)((function(e){return{todos:S(v(e),H(e)),lengthAllTodos:v(e).length}}),(function(e){return{onTodoClick:function(t){return e(E(t))},onDeleteClick:function(t){return e(k(t))}}}))((function(e){var t=e.todos,a=e.lengthAllTodos,n=e.onTodoClick,r=e.onDeleteClick;return a?l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",{className:I.a.todos},t.map((function(e){return l.a.createElement(g,Object.assign({key:e.id},e,{onTodoClick:n,onDeleteClick:r}))}))),l.a.createElement(V,null)):""})),L=a(20),W=a.n(L),G=function(){var e=new Date,t=e.getDate(),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()];return l.a.createElement("div",{className:W.a.date},t," ",a)},J=a(5),z=a.n(J),R=function(){return l.a.createElement("div",{className:z.a.wrapper},l.a.createElement("div",{className:z.a.todo},l.a.createElement("div",{className:z.a.header},l.a.createElement("div",{className:z.a.currentDateContainer},l.a.createElement(G,null)),l.a.createElement("svg",{className:z.a.headerImg,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1277.013 979.85"},l.a.createElement("title",null,"\u043a\u0440\u0443\u0436\u043a\u0430 \u043a\u043e\u0444\u0435"),l.a.createElement("g",{id:"\u0427\u0430\u0448\u043a\u0430"},l.a.createElement("g",{id:"\u0421\u043e\u043b\u043d\u044b\u0448\u043a\u043e"},l.a.createElement("path",{d:"M1545.263,1328.9a479.854,479.854,0,0,0,98.246-291.668c0-266.187-215.786-481.974-481.973-481.974S679.562,771.047,679.562,1037.234A479.854,479.854,0,0,0,777.809,1328.9Z",transform:"translate(-549.604 -355.052)",fill:"#f2d090"}),l.a.createElement("path",{d:"M991.85,1328.9h339.372c100.3-58.479,167.714-167.194,167.714-291.668,0-186.341-151.059-337.4-337.4-337.4s-337.4,151.059-337.4,337.4C824.136,1161.708,891.55,1270.423,991.85,1328.9Z",transform:"translate(-549.604 -355.052)",fill:"#ffd89a"})),l.a.createElement("g",{id:"\u0421\u043e\u043b\u043d\u044b\u0448\u043a\u043e-2","data-name":"\u0421\u043e\u043b\u043d\u044b\u0448\u043a\u043e",opacity:"0.8"},l.a.createElement("path",{d:"M1023.5,574a479.8,479.8,0,0,0-76.014,30.616,484.689,484.689,0,0,0-69.772,42.843A494.635,494.635,0,0,0,816.072,701.3a475.046,475.046,0,0,0-51.651,63.464,483.115,483.115,0,0,0-82.352,228.816c-.217,1.7-.307,3.4-.426,5.107l-.349,5.114-.7,10.23c-.15,1.7-.139,3.414-.2,5.122l-.137,5.125-.273,10.252c-.168,13.674.318,27.357,1.335,41-1.18-13.629-1.83-27.313-1.825-41l.152-10.266.076-5.133c.04-1.711.009-3.425.138-5.132l.578-10.253.289-5.128c.1-1.709.168-3.42.365-5.121A478.868,478.868,0,0,1,1023.5,574Z",transform:"translate(-549.604 -355.052)",fill:"#fcead0"}),l.a.createElement("g",{opacity:"0.8"},l.a.createElement("path",{d:"M920.4,800.01a340.4,340.4,0,0,0-5.464,468.188,333.733,333.733,0,0,1-92.63-235.2,333.036,333.036,0,0,1,56.918-183.152A339.4,339.4,0,0,1,920.4,800.01Z",transform:"translate(-549.604 -355.052)",fill:"#fcead0"}))),l.a.createElement("line",{x1:"1161.712",y1:"973.85",x2:"1215.023",y2:"973.85",fill:"none",stroke:"#331a11","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"12"}),l.a.createElement("polyline",{points:"75.422 973.85 87.895 973.85 1124.841 973.85 1128.257 973.85",fill:"none",stroke:"#331a11","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"12"}),l.a.createElement("line",{x1:"6",y1:"973.85",x2:"45.246",y2:"973.85",fill:"none",stroke:"#331a11","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"12"}),l.a.createElement("path",{d:"M375.722,474.384H821.849a8.958,8.958,0,0,1,8.958,8.958V881.35a85.373,85.373,0,0,1-85.373,85.373h-293.3a85.373,85.373,0,0,1-85.373-85.373V483.342A8.958,8.958,0,0,1,375.722,474.384Z",fill:"#aa5b39"}),l.a.createElement("path",{d:"M1359.5,1206.745",transform:"translate(-549.604 -355.052)",fill:"none",stroke:"#aa5b39","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"70"}),l.a.createElement("path",{d:"M1359.5,1003.062",transform:"translate(-549.604 -355.052)",fill:"none",stroke:"#aa5b39","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"70"}),l.a.createElement("rect",{x:"691.423",y:"602.952",width:"318.808",height:"219.623",rx:"101.895","stroke-width":"70",stroke:"#aa5b39","stroke-linecap":"round","stroke-linejoin":"round",fill:"none"}),l.a.createElement("path",{d:"M1457.729,967.712h-77.318v23.777h74.426c39.713,0,71.907,33.736,71.907,75.351v1.538c0,41.615-32.194,75.35-71.907,75.35h-74.426v19.35h77.318c51.483,0,93.219-43.734,93.219-97.683h0C1550.948,1011.446,1509.212,967.712,1457.729,967.712Z",transform:"translate(-549.604 -355.052)",fill:"#9e5136"}),l.a.createElement("path",{d:"M1469.111,992.979l13.31-21.8a89.327,89.327,0,0,0-24.692-3.471h-77.318v23.777h74.426A69.031,69.031,0,0,1,1469.111,992.979Z",transform:"translate(-549.604 -355.052)",fill:"#874531"}),l.a.createElement("rect",{x:"362.773",y:"551.879",width:"471.534",height:"322.715",rx:"3.5",fill:"#ecd1bd"}),l.a.createElement("path",{d:"M1380.411,910.431v315.715H915.878V910.431h464.533m0-7H915.878a7,7,0,0,0-7,7v315.715a7,7,0,0,0,7,7h464.533a7,7,0,0,0,7-7V910.431a7,7,0,0,0-7-7Z",transform:"translate(-549.604 -355.052)",fill:"#331a11"}),l.a.createElement("path",{d:"M410.271,474.384H789.178A34.316,34.316,0,0,1,823.494,508.7V841.333A100.943,100.943,0,0,1,722.551,942.276H476.9A100.943,100.943,0,0,1,375.955,841.333V508.7A34.316,34.316,0,0,1,410.271,474.384Z",fill:"#f4dac3",opacity:"0.19"}),l.a.createElement("path",{d:"M426.947,474.384h72.86a0,0,0,0,1,0,0V873.96a33.8,33.8,0,0,1-33.8,33.8H460.75a33.8,33.8,0,0,1-33.8-33.8V474.384A0,0,0,0,1,426.947,474.384Z",fill:"#f4ebe6",opacity:"0.28"}),l.a.createElement("path",{d:"M1357.5,829.436a23.024,23.024,0,0,1,23.025,23.025v74.795h77.717c72.732,0,131.694,63.047,131.694,140.819s-58.962,140.819-131.694,140.819H1380.52v18.124a94.757,94.757,0,0,1-94.757,94.757H1011.234a94.757,94.757,0,0,1-94.757-94.757V852.461A23.025,23.025,0,0,1,939.5,829.436H1357.5m0-12H939.5a35.064,35.064,0,0,0-35.025,35.025v374.557a106.878,106.878,0,0,0,106.757,106.757h274.529a106.878,106.878,0,0,0,106.757-106.757v-6.124h65.717a135.513,135.513,0,0,0,56.206-12.132,143.084,143.084,0,0,0,45.68-32.916c26.96-28.828,41.808-67.1,41.808-107.771s-14.848-78.942-41.808-107.77a143.084,143.084,0,0,0-45.68-32.916,135.5,135.5,0,0,0-56.206-12.133H1392.52V852.461a35.064,35.064,0,0,0-35.025-35.025Z",transform:"translate(-549.604 -355.052)",fill:"#331a11"}),l.a.createElement("path",{d:"M1447.292,1002.229l1.974.013a66.664,66.664,0,0,1,46.8,19.385,64.738,64.738,0,0,1,0,92.192,66.663,66.663,0,0,1-46.8,19.384l-1.683.014h-55.172V1002.229h54.881m2.055-12h-68.936v39.387h0v76.212h0v39.388h68.936v-.014c43.13-.292,78.005-34.862,78.005-77.48s-34.875-77.189-78.005-77.48v-.014Z",transform:"translate(-549.604 -355.052)",fill:"#331a11"}),l.a.createElement("path",{d:"M673.247,1328.565a28,28,0,1,1,56.007,0",transform:"translate(-549.604 -355.052)",fill:"none",stroke:"#331a11","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"12"}),l.a.createElement("circle",{cx:"541.203",cy:"252.943",r:"11.775",fill:"#ede6e2"}),l.a.createElement("circle",{cx:"575.716",cy:"63.292",r:"6.924",fill:"#ede6e2"}),l.a.createElement("circle",{cx:"1128.257",cy:"36.104",r:"6.924",fill:"#ede6e2"}),l.a.createElement("circle",{cx:"991.757",cy:"5.182",r:"5.182",fill:"#ede6e2"}),l.a.createElement("circle",{cx:"501.989",cy:"407.225",r:"5.182",fill:"#ede6e2"}),l.a.createElement("path",{d:"M1737.971,728.064a9.7,9.7,0,1,0,9.7,9.7A9.7,9.7,0,0,0,1737.971,728.064Zm0,13.493a3.791,3.791,0,1,1,3.791-3.791A3.791,3.791,0,0,1,1737.971,741.557Z",transform:"translate(-549.604 -355.052)",fill:"#ede6e2"}),l.a.createElement("path",{d:"M1004.442,649.763a16.008,16.008,0,1,0,16.008,16.008A16.008,16.008,0,0,0,1004.442,649.763Zm0,22.263a6.255,6.255,0,1,1,6.255-6.255A6.254,6.254,0,0,1,1004.442,672.026Z",transform:"translate(-549.604 -355.052)",fill:"#ede6e2"}),l.a.createElement("path",{d:"M1421.026,381.454a9.7,9.7,0,1,0,9.7,9.7A9.7,9.7,0,0,0,1421.026,381.454Zm0,13.493a3.791,3.791,0,1,1,3.791-3.791A3.791,3.791,0,0,1,1421.026,394.947Z",transform:"translate(-549.604 -355.052)",fill:"#ede6e2"}),l.a.createElement("path",{d:"M1175.383,671.383a9.7,9.7,0,1,0,9.7,9.7A9.7,9.7,0,0,0,1175.383,671.383Zm0,13.493a3.791,3.791,0,1,1,3.791-3.791A3.791,3.791,0,0,1,1175.383,684.876Z",transform:"translate(-549.604 -355.052)",fill:"#ede6e2"}),l.a.createElement("polygon",{points:"648.374 140.912 641.83 134.722 635.641 141.266 641.83 134.722 635.287 128.532 641.83 134.722 648.02 128.178 641.83 134.722 648.374 140.912",fill:"none",stroke:"#f7f7f7","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"8"}),l.a.createElement("polygon",{points:"1260.484 290.865 1260.293 282.505 1251.933 282.696 1260.293 282.505 1260.102 274.145 1260.293 282.505 1268.653 282.314 1260.293 282.505 1260.484 290.865",fill:"none",stroke:"#f7f7f7","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"8"})),l.a.createElement("g",{id:"\u041b\u0438\u0446\u043e"},l.a.createElement("circle",{cx:"575.716",cy:"674.619",r:"10.441",fill:"#3f3026"}),l.a.createElement("circle",{cx:"631.389",cy:"674.619",r:"10.441",fill:"#3f3026"}),l.a.createElement("path",{d:"M1154.447,1051.551a54.565,54.565,0,0,0-15.172,2.084,4.232,4.232,0,0,0-2.922,5.113,18.68,18.68,0,0,0,36.189,0,4.232,4.232,0,0,0-2.922-5.113A54.572,54.572,0,0,0,1154.447,1051.551Z",transform:"translate(-549.604 -355.052)",fill:"#3f3026"}),l.a.createElement("path",{d:"M1154.536,1056.509a49.043,49.043,0,0,0-17.836,3.138,18.674,18.674,0,0,0,35.671,0A49.037,49.037,0,0,0,1154.536,1056.509Z",transform:"translate(-549.604 -355.052)",fill:"#7f0d0a"})),l.a.createElement("g",{id:"\u041e\u0431\u043b\u0430\u043a\u043e"},l.a.createElement("path",{d:"M1129.314,83.543h124.779a22.92,22.92,0,0,1,22.92,22.92v3.69a24.569,24.569,0,0,1-24.569,24.569H1130.962a24.569,24.569,0,0,1-24.569-24.569v-3.69A22.92,22.92,0,0,1,1129.314,83.543Z",fill:"#ede6e2"}),l.a.createElement("rect",{x:"649.806",y:"19.182",width:"114.178",height:"33.844",rx:"15.702",fill:"#ede6e2"}),l.a.createElement("path",{d:"M1687.814,529.722H1516.2a11.435,11.435,0,0,1-1.406-.092,14.943,14.943,0,0,1-1.647.092c-8.711,0-15.772-7.48-15.772-16.707,0-8.931,6.621-16.2,14.944-16.662a6.341,6.341,0,0,1,.733-.044h72.716c16.684,0,30.209-12.92,30.209-28.857h0c0-15.938-13.525-28.857-30.209-28.857H1272.858c-15.538,0-28.134,12.032-28.134,26.874h0c0,14.842,12.6,26.874,28.134,26.874h115.193c21.075,0,38.159,16.32,38.159,36.451h0c0,20.131-17.084,36.451-38.159,36.451H1196.184c-24.643,0-44.619,19.082-44.619,42.621h0c0,23.539,19.976,42.621,44.619,42.621h139.307c24.218,0,43.851,18.754,43.851,41.888h0c0,23.134-19.633,41.888-43.851,41.888H1157.348c-17.824,0-32.273,15.306-32.273,34.187v47.658h62.61V787.757a8.713,8.713,0,0,1,8.452-8.953h448.526c20.2,0,36.57-15.64,36.57-34.932h0c0-19.293-16.373-34.932-36.57-34.932h-118.28a10.889,10.889,0,0,1-11.13-10.632h0a10.889,10.889,0,0,1,11.13-10.631h161.431c45.663,0,82.68-35.36,82.68-78.978h0C1770.494,565.081,1733.477,529.722,1687.814,529.722ZM1282.434,608c0,8.447-6.464,15.294-14.438,15.294h-64.327c-7.974,0-14.438-6.847-14.438-15.294h0c0-8.447,6.464-15.295,14.438-15.295H1268c7.974,0,14.438,6.848,14.438,15.295Zm435.625-2.333c0,17.615-14.949,31.894-33.39,31.894h-61.035c-18.441,0-33.39-14.279-33.39-31.894h0c0-17.615,14.949-31.895,33.39-31.895h61.035c18.441,0,33.39,14.28,33.39,31.895Z",transform:"translate(-549.604 -355.052)",fill:"#ede6e2"})),l.a.createElement("g",{id:"\u0421\u043b\u043e\u0439_3","data-name":"\u0421\u043b\u043e\u0439 3"},l.a.createElement("path",{d:"M1154.263,829.436v2.772a7.973,7.973,0,0,0,7.72,8.2h17.982c8.821,0,15.972,7.6,15.972,16.971v66.406c0,19.759,15.076,35.776,33.673,35.776s33.672-16.017,33.672-35.776V857.382c0-9.373,7.151-16.971,15.973-16.971s15.972,7.6,15.972,16.971V981.5c0,11.906,9.084,21.558,20.29,21.558s20.29-9.652,20.29-21.558V857.382c0-9.373,7.151-16.971,15.972-16.971a7.973,7.973,0,0,0,7.72-8.2v-2.772Z",transform:"translate(-549.604 -355.052)",fill:"#5b3e2a"}),l.a.createElement("path",{d:"M1339.424,832.965H1313.49c-2.65,0-4.8,1.311-4.8,2.928h0c0,1.617,2.149,2.928,4.8,2.928h.953c3.74,0,6.773,1.85,6.773,4.133v92.268c0,1.193,1.584,2.16,3.539,2.16h0c1.955,0,3.54-.967,3.54-2.16v-87.7c0-4.805-.014-8.7,7.862-8.7h3.267c2.65,0,4.8-1.311,4.8-2.928h0C1344.223,834.276,1342.074,832.965,1339.424,832.965Z",transform:"translate(-549.604 -355.052)",fill:"#a88269",opacity:"0.77"}),l.a.createElement("path",{d:"M1211.927,939.555c4.483,6.452,10.8,10.479,17.815,10.479,13.6,0,24.616-15.118,24.616-33.768V853.588c0-8.847,5.228-16.018,11.677-16.018.157,0,.309.024.465.032",transform:"translate(-549.604 -355.052)",fill:"none",stroke:"#a88269","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"7",opacity:"0.79"}),l.a.createElement("circle",{cx:"775.151",cy:"590.463",r:"3.54",fill:"#a88269",opacity:"0.8"}),l.a.createElement("circle",{cx:"655.891",cy:"572.517",r:"3.54",fill:"#a88269",opacity:"0.81"}),l.a.createElement("path",{d:"M942.214,829.436v.153a4.313,4.313,0,0,0,4.314,4.314h6.051a1.9,1.9,0,0,1,1.9,1.9V947.508a5.033,5.033,0,0,0,5.033,5.033h0a5.033,5.033,0,0,0,5.033-5.033V837.326a3.345,3.345,0,0,1,3.239-3.423,2.816,2.816,0,0,0,2.853-2.816v-1.651Z",transform:"translate(-549.604 -355.052)",fill:"#2f1f13"}),l.a.createElement("circle",{cx:"409.776",cy:"607.665",r:"4.903",fill:"#2f1f13"}),l.a.createElement("path",{d:"M1544.722,1154.8c18.948-20.494,30.942-50.814,30.942-84.645h0c0-38.08-12.875-70.985-34.3-90.605",transform:"translate(-549.604 -355.052)",fill:"none",stroke:"#f4dac3","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"12",opacity:"0.37"}),l.a.createElement("line",{x1:"911.421",y1:"583.415",x2:"850.827",y2:"583.415",fill:"none",opacity:"0.37","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"12",stroke:"#f4dac3"}),l.a.createElement("line",{x1:"967.698",y1:"820.715",x2:"957.844",y2:"826.631",fill:"none",opacity:"0.37","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"12",stroke:"#f4dac3"}),l.a.createElement("line",{x1:"961.988",y1:"598.794",x2:"971.69",y2:"604.955",fill:"none",opacity:"0.37","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"12",stroke:"#f4dac3"})))),l.a.createElement("div",{className:z.a.content},l.a.createElement(x,null),l.a.createElement(B,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=a(6),Q=Object(K.b)({todos:_,visibilityFilter:D}),Y=Object(K.c)(Q);o.a.render(l.a.createElement(i.a,{store:Y},l.a.createElement(l.a.StrictMode,null,l.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){e.exports={wrapper:"App_wrapper__2YirE",todo:"App_todo__1zR9_",header:"App_header__2gf3F",headerImg:"App_headerImg__2jFdi",info:"App_info__K828f",content:"App_content__3ZcbN",currentDateContainer:"App_currentDateContainer__dsDey"}},8:function(e,t,a){e.exports={todo:"Todo_todo__vGT-o",checkbox:"Todo_checkbox__26elE",done:"Todo_done__3KQev",delete:"Todo_delete__3S3R9",text:"Todo_text__QkJq8 src_pointer__m81wI"}},9:function(e,t,a){e.exports={addForm:"AddTodo_addForm__3glbe",inputWrap:"AddTodo_inputWrap__19G8j",input:"AddTodo_input__achh6",addBtn:"AddTodo_addBtn__28_tX src_btn__nz7d1"}}},[[22,1,2]]]);
//# sourceMappingURL=main.f262cfb7.chunk.js.map