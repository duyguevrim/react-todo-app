(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{178:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),c=n(11),s=n.n(c),a=(n(85),n(86),n(13)),i=n(46),l=n(15),d=n(43),j=n.n(d),b="ADD_TODO",u="DELETE_TODO",m="UPDATE_TODO";var p=n(78),h=n(184),x=n(27),O=n.n(x),g=n(72),f=n(73),y=n(80),v=n(77),N=n(1),F=function(e){Object(y.a)(n,e);var t=Object(v.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{className:"pt-3",children:Object(N.jsxs)("button",{onClick:this.props.myClick,type:"button",children:[this.props.isIncludeIcon?Object(N.jsx)(p.b,{}):null,Object(N.jsx)("span",{children:this.props.title})]})}),Object(N.jsx)("style",{jsx:!0,children:"\n                  button {\n                    display: flex;\n                    align-items: center;\n                    text-align: center;\n                    text-decoration: none;\n                    margin: 2px 0;\n                    border: transparent;\n                    border-radius: 6px;\n                    color: ".concat(this.props.color,";\n                    font-size: 1rem;\n                    padding: .8rem 1.5rem;\n                    font-weight: 600;\n                    background: ").concat(this.props.bgColor,";\n                    cursor: pointer;\n                  }\n\n                  button:hover {\n                    color: ").concat(this.props.bgColor,";\n                    background-color: ").concat(this.props.color,";\n                  }\n                ")})]})}}]),n}(o.Component),w=n(16);function C(e,t){e?w.b.success(t):w.b.error(t)}var k=function(e){var t=e.todo,n=Object(o.useState)(!1),r=Object(l.a)(n,2),c=r[0],s=r[1],d=Object(o.useState)(t.name),b=Object(l.a)(d,2),x=b[0],g=b[1],f=function(){return s(!1)},y=Object(o.useState)(new Date),v=Object(l.a)(y,2),w=v[0],k=v[1],S=Object(a.b)();return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("li",{className:"todo d-flex align-items-center justify-content-between pt-4",children:[Object(N.jsxs)("div",{className:"d-flex pl-1",children:[Object(N.jsx)("span",{className:"bullet bullet-bar bg-success align-self-stretch"}),Object(N.jsxs)("div",{children:[Object(N.jsx)("p",{className:"todo-text m-0 pl-2",children:t.name}),Object(N.jsx)("span",{className:"text-muted font-weight-bold pl-2",children:j()(t.date).format("Do MMM YY")+" ("+j()(t.date,"YYYYMMDD").fromNow()+")"})]})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("a",{onClick:function(){return s(!0)},className:"edit-icon pr-4",children:Object(N.jsx)(p.a,{})}),Object(N.jsx)("a",{onClick:function(){return S((e=t.id,{type:u,payload:e}));var e},className:"delete-icon pr-4",children:Object(N.jsx)(p.c,{})})]}),Object(N.jsxs)(h.a,{centered:!0,dialogClassName:"modal-90w","aria-labelledby":"example-custom-modal-styling-title",show:c,onHide:f,children:[Object(N.jsx)(h.a.Header,{closeButton:!0,children:Object(N.jsx)(h.a.Title,{children:"Update Todo Modal"})}),Object(N.jsxs)(h.a.Body,{className:"p-4",children:[Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("label",{className:"form-title",children:"Todo Content"}),Object(N.jsx)("input",{className:"form-control modal-input",type:"text",onChange:function(e){return g(e.target.value)},value:x})]}),Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("label",{className:"form-title",children:"Todo Date"}),Object(N.jsx)(O.a,{className:"form-control modal-input",selected:w,onChange:function(e){return k(e)}})]})]}),Object(N.jsxs)(h.a.Footer,{children:[Object(N.jsx)(F,{title:"Close",myClick:f,isIncludeIcon:!1,bgColor:"#E1F0FF",color:"#3699FF"}),Object(N.jsx)(F,{title:"Save Changes",myClick:function(){""===x?C(!1,"Bo\u015f todo giri\u015fi yapamazs\u0131n\u0131z. L\xfctfen ge\xe7erli bir todo giriniz..."):(S(function(e){return{type:m,payload:e}}(Object(i.a)(Object(i.a)({},t),{},{name:x,date:w}))),C(!0,"Todo ba\u015far\u0131yla g\xfcncellendi..."),f())},isIncludeIcon:!1,bgColor:"#E1F0FF",color:"#3699FF"})]})]})]}),Object(N.jsx)("style",{jsx:!0,children:"\n                  .modal-90w {\n                    width: 1000px !important;\n\n                  }\n                  .text-muted {\n                    color: #B5B5C3 !important;\n                  }\n                  .bullet.bullet-bar {\n                    width: 4px;\n                    height: auto;\n                  }\n                  .bullet {\n                    display: inline-block;\n                    background-color: #E4E6EF;\n                    width: 10px;\n                    height: 2px;\n                    border-radius: 2rem;\n                    margin-left: 1rem;\n                  }\n                  .bg-success {\n                    background-color: #3699FF !important;\n                  }\n                  .form-title {\n                    font-size: 1.2rem;\n                    font-weight: bold;\n                  }\n                  .modal-input {\n                    padding: 1rem !important;\n                    background: #F3F6F9;\n                    border-color: white;\n                    color: #3F4254;\n                    height: 55px;\n                    border-radius: 0.85rem !important;\n                  }\n                  .delete-icon {\n                    color: #F64E60 !important;\n                    cursor: pointer;\n                    padding-right: 2rem;\n                    font-size: 2em;\n                  }\n                  .edit-icon {\n                    color: #FFA800 !important;\n                    cursor: pointer;\n                    padding-right: 2rem;\n                    font-size: 2em;\n                  }\n                "})]})},S=function(){var e=Object(a.c)((function(e){return e}));return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"pt-5",children:[Object(N.jsxs)("div",{className:"card-custom py-4",children:[Object(N.jsx)("div",{className:"d-flex justify-content-between",children:Object(N.jsx)("h3",{className:"text-dark card-title pl-4",children:"Todo List"})}),Object(N.jsx)("ul",{children:e.map((function(e){return Object(N.jsx)(k,{todo:e},e.id)}))})]}),Object(N.jsx)("style",{jsx:!0,children:"\n                  .text-dark {\n                    color: #181C32 !important;\n                  }\n           \n                  .card-custom {\n                    -webkit-box-shadow: 0px 0px 30px 0px rgb(82 63 105 / 5%);\n                    box-shadow: 0px 0px 30px 0px rgb(82 63 105 / 5%);\n                    border: 0;\n                    background: white;\n                    border-radius: 0.42rem;\n                  }\n                "})]})})},T=n(185);function I(e,t){e?w.b.success(t):w.b.error(t)}var D=function(){var e=Object(o.useState)(),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.b)(),s=Object(o.useState)(new Date),i=Object(l.a)(s,2),d=i[0],j=i[1];return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{className:"d-flex flex-column",children:[Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("label",{className:"font-size-h6",children:"Add Todo"}),Object(N.jsx)("input",{placeholder:"Write your todo...",className:"form-control mt-2",type:"text",onChange:function(e){return r(e.target.value)},value:n})]}),Object(N.jsx)("div",{className:"form-group",children:Object(N.jsx)(O.a,{className:"form-control mt-2",selected:d,onChange:function(e){return j(e)}})}),Object(N.jsx)(F,{title:"Add New Todo",myClick:function(){var e;console.log(n),""===n||void 0===n?I(!1,"Bo\u015f todo giri\u015fi yapamazs\u0131n\u0131z. L\xfctfen ge\xe7erli bir todo giriniz..."):(c((e={id:Object(T.a)(),name:n,date:d},{type:b,payload:e})),I(!0,"Todo ba\u015far\u0131yla eklenmi\u015ftir..."),r(""))},isIncludeIcon:!0,bgColor:"#E1F0FF",color:"#3699FF"}),Object(N.jsx)(w.a,{})]}),Object(N.jsx)("style",{jsx:!0,children:"\n                  .form-control:focus {\n                    border: red !important;\n                  }\n\n                  .font-size-h6 {\n                    font-size: 1.75rem !important;\n                  }\n\n                  .form-control {\n                    padding: 1rem !important;\n                    background: white;\n                    border-color: white;\n                    color: #3F4254;\n                    height: 55px;\n                    border-radius: 0.85rem !important;\n                  }\n                "})]})},z=n.p+"static/media/logo.57147a5d.png",E=function(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"mt-5",children:[Object(N.jsx)("div",{className:"d-flex justify-content-center align-items-center pt-4",children:Object(N.jsx)("img",{alt:"Todo List Icon",src:z,width:"100",height:"100"})}),Object(N.jsx)("h2",{className:"text-center pt-2 font-weight-bold",children:"Todo List"}),Object(N.jsx)("hr",{})]})})};n(175);var B,J=function(){return Object(N.jsxs)("div",{className:"container w-30",children:[Object(N.jsx)(E,{}),Object(N.jsx)(D,{}),Object(N.jsx)(S,{})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,186)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),o(e),r(e),c(e),s(e)}))},M=(n(176),n(177),n(25)),Y=n(79);JSON.parse(localStorage.getItem("todos"))?B=JSON.parse(localStorage.getItem("todos")):(B=[],localStorage.setItem("todos",JSON.stringify(B)));var A=Object(M.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0,n=Object(Y.a)(e);switch(t.type){case b:return n.push(t.payload),localStorage.setItem("todos",JSON.stringify(n)),n;case m:for(var o=-1,r=0;r<n.length&&(o++,n[r].id!=t.payload.id);r++);if(-1!=o)return n[o]=t.payload,localStorage.setItem("todos",JSON.stringify(n)),n;case u:return n=n.filter((function(e){return e.id!=t.payload})),localStorage.setItem("todos",JSON.stringify(n)),n;default:return e}}));s.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsxs)(a.a,{store:A,children:[" ",Object(N.jsx)(J,{})]})}),document.getElementById("root")),L()},85:function(e,t,n){},86:function(e,t,n){}},[[178,1,2]]]);
//# sourceMappingURL=main.1b484247.chunk.js.map