(this["webpackJsonphuji-conf"]=this["webpackJsonphuji-conf"]||[]).push([[0],{113:function(e,t,s){},114:function(e,t,s){},115:function(e,t,s){},116:function(e,t,s){},118:function(e,t,s){},127:function(e,t,s){},128:function(e,t,s){},130:function(e,t,s){},131:function(e,t,s){},132:function(e,t,s){},133:function(e,t,s){},134:function(e,t,s){"use strict";s.r(t);var n=s(1),r=s(38),o=s.n(r),c=(s(113),s(114),s(14)),i=(s(115),"#e7e7e7"),a="#f5f5f5",l="#ececec",b="#e0e0e0",d="#61727f",j="#85bfd0",h="#dbdbdb",u="#e5e5e5",m="#d2d2d2",f="#45717d",x="#e3e3e3",O="#f5f5f5",y="#dbdbdb",g="#4a5465",p="#323842",v="#efefef",C="#dbdbdb",w="#61727f",N="#c7c7c7",P="#00040a",S="#0d1116",k="#1a1f25",D="#323f50",I="#c9d1d9",B="#1b232a",R="#1a1f25",M="#202832",E="#333d4b",A="#7c838d",z="#1c242d",T="#0d1116",W="#90969c",H="#c9d1d9",_="#c9d1d9",F="#161b22",J="#1a1f25",U="#bac1c7",L="#90969c",q=(s(116),s(86)),Q=s(87),K=s(88),Z=s(2),G=function(e){return function(){var t=document.documentElement;"light"===e.theme?(t.style.setProperty("--header-bg",j),t.style.setProperty("--header-border",h)):(t.style.setProperty("--header-bg",B),t.style.setProperty("--header-border",R))}(),Object(Z.jsxs)("div",{className:"header-line",children:[Object(Z.jsx)(q.a,{className:"lock-icon"}),Object(Z.jsx)("div",{className:"title-text",children:"Some Confessions"}),Object(Z.jsxs)("div",{className:"side-icons",children:[Object(Z.jsx)(Q.a,{className:"night-mode",onClick:function(){"light"===e.theme?e.onChangeTheme("dark"):e.onChangeTheme("light")}}),Object(Z.jsx)("span",{className:"space"}),Object(Z.jsx)(K.a,{className:"facebook-link",onClick:function(){return window.open("https://www.facebook.com/ConfessionsHUJI/")}})]})]})},V=(s(118),s(82),s(58)),X=s(59),Y=s(60),$=s(17);var ee=function(e){var t=Object($.f)();return function(){var t=document.documentElement;"light"===e.theme?(t.style.setProperty("--sidebar-bg-color",a),t.style.setProperty("--border-color",l),t.style.setProperty("--sidebar-hover-color",b),t.style.setProperty("--sidebar-text",d)):(t.style.setProperty("--sidebar-bg-color",S),t.style.setProperty("--border-color",k),t.style.setProperty("--sidebar-hover-color",D),t.style.setProperty("--sidebar-text",I))}(),Object(Z.jsx)("div",{className:"side-bar",children:Object(Z.jsx)(V.Navigation,{activeItemId:"/management/members",onSelect:function(e){var s=e.itemId;t.push(s)},items:[{title:"write a confession",itemId:"/",elemBefore:function(){return Object(Z.jsx)(X.a,{name:"home",fontSize:"24px"})}},{title:"reach hotlines",itemId:"/hotlines",elemBefore:function(){return Object(Z.jsx)(Y.a,{name:"hotlines",fontSize:"24px"})}}]})})},te=(s(127),function(e){document.documentElement;var t=Object($.f)();return Object(Z.jsx)("div",{className:"up-nav",children:Object(Z.jsx)(V.Navigation,{activeItemId:"/management/members",onSelect:function(e){var s=e.itemId;t.push(s)},items:[{title:"write a confessions",itemId:"/",elemBefore:function(){return Object(Z.jsx)(X.a,{name:"home"})}},{title:"reach hotlines",itemId:"/hotlines",elemBefore:function(){return Object(Z.jsx)(Y.a,{name:"hotlines"})}}]})})}),se=(s(128),s(196)),ne=s(195),re=s(91),oe=s.n(re),ce=s(6),ie=function(e){return Object(Z.jsx)(ne.a,{item:!0,xs:12,children:Object(Z.jsxs)("div",{className:"confession-box-title",children:[e.icon,Object(Z.jsx)("p",{className:"title",children:e.title})]})})},ae=s(189),le=s(188),be=Object(ae.a)({cssTextField:function(e){return{"& label":{color:e.labelcolor},"& label.Mui-focused":{color:e.labelcolor},"& label.Mui-disabled":{color:e.textboxborder},"& .MuiInputBase-root":{color:e.labelcolor},"& .MuiInput-underline:after":{borderBottomColor:e.textboxborder},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:e.textboxborder},"&:hover fieldset":{borderColor:e.textboxborder},"&.Mui-focused fieldset":{borderColor:e.textboxborder},"&.Mui-disabled fieldset":{borderColor:e.textboxborder}}}}}),de=Object(n.forwardRef)((function(e,t){var s,r,o=Object(n.useState)(""),i=Object(c.a)(o,2),a=i[0],l=i[1];Object(n.useImperativeHandle)(t,(function(){return{clear:function(){l("")}}})),"light"===e.theme?(s=N,r=w):(s=L,r=U);var b=be({labelcolor:r,textboxborder:s});return Object(Z.jsx)(ne.a,{item:!0,xs:12,children:Object(Z.jsx)(le.a,{className:b.cssTextField,fullWidth:!0,multiline:!0,id:"fullWidth",labelcolor:r,textboxborder:s,size:"medium",rows:4,label:"write what's on your mind",variant:"outlined",value:a,name:"entry.638196057",onChange:function(t){l(t.target.value),e.onSaveConfessionText(t.target.value),console.log(t.target.value)}})})})),je=s(76),he=(s(130),s(183)),ue=s(193),me={inputProps:{"aria-label":"confession number switch"}},fe=Object(ce.a)(ue.a)((function(e){var t=e.theme;return{"& .MuiSwitch-switchBase.Mui-checked":{color:"#3e505f","&:hover":{backgroundColor:Object(he.a)("#45717d",t.palette.action.hoverOpacity)}},"& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":{backgroundColor:"#45717d"},"& .MuiSwitch-switchBase":{color:"#c1c6c9"},"& .MuiSwitch-track":{backgroundColor:"#859099"}}})),xe=Object(ae.a)({cssTextField:function(e){return{"& label":{color:e.labelColor},"& label.Mui-focused":{color:e.labelColor},"& label.Mui-disabled":{color:e.textBoxBorder},"& .MuiInputBase-root":{color:e.labelColor},"& .MuiInput-underline:after":{borderBottomColor:e.textBoxBorder},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:e.textBoxBorder},"&:hover fieldset":{borderColor:e.textBoxBorder},"&.Mui-focused fieldset":{borderColor:e.textBoxBorder},"&.Mui-disabled fieldset":{borderColor:e.textBoxBorder}}}}}),Oe=Object(n.forwardRef)((function(e,t){var s,r,o=Object(n.useState)(!0),i=Object(c.a)(o,2),a=i[0],l=i[1],b=Object(n.useState)(""),d=Object(c.a)(b,2),j=d[0],h=d[1];function u(t){h(a?"":t.target.value),e.onCommentToExistingConfession(t.target.value)}Object(n.useImperativeHandle)(t,(function(){return{clear:function(){h(""),l(!!a)}}})),function(){var t=document.documentElement;"light"===e.theme?(t.style.setProperty("--switch-text",p),s=N,r=w):(t.style.setProperty("--switch-text",_),s=L,r=U)}();var m=xe({labelColor:r,textBoxBorder:s});return Object(Z.jsxs)(ne.a,{container:!0,justifyContent:"center",alignItems:"center",className:"switch-box",children:[Object(Z.jsx)("p",{className:"switch-text",children:"comment for an existing confession?"}),Object(Z.jsx)(fe,Object(je.a)(Object(je.a)({},me),{},{onChange:function(e){return function(e){l(!a),u(e)}(e)}})),Object(Z.jsx)(le.a,{className:m.cssTextField,id:"outlined-basic",label:"* number",variant:"outlined",type:"number",disabled:a,onChange:function(e){return u(e)},value:j})]})})),ye=s(70),ge=s.n(ye),pe=function(e){var t,s,r,o,i,a=Object(n.useState)(""),l=Object(c.a)(a,2),b=l[0],d=l[1],j=Object(n.useState)(""),h=Object(c.a)(j,2),p=h[0],v=h[1],C=Object(n.useRef)(),w=Object(n.useRef)();!function(){var n=document.documentElement;"light"===e.theme?(n.style.setProperty("--confession-table-bg",O),n.style.setProperty("--confession-table-border",y),n.style.setProperty("--confession-table-title",g),t=u,s=m,r=g,o=f,i=x):(n.style.setProperty("--confession-table-bg",T),n.style.setProperty("--confession-table-border",W),n.style.setProperty("--confession-table-title",H),t=M,s=E,r=H,o=A,i=z)}();var N=Object(ce.a)(se.a)((function(e){e.theme;return{color:r,boxShadow:"none",border:"1px solid "+i,backgroundColor:t,"&:hover":{backgroundColor:s,color:o,boxShadow:"none"}}}));return Object(Z.jsx)("div",{className:"content-table",children:Object(Z.jsxs)(ne.a,{container:!0,spacing:2,children:[Object(Z.jsx)(ie,{theme:e.theme,title:"Send a Confession",icon:Object(Z.jsx)(ge.a,{})}),Object(Z.jsx)(de,{theme:e.theme,onSaveConfessionText:function(){var e;d(e)},ref:w}),Object(Z.jsx)(Oe,{theme:e.theme,onCommentToExistingConfession:function(e){v(e)},ref:C}),Object(Z.jsx)(ne.a,{item:!0,xs:12,children:Object(Z.jsx)(N,{variant:"contained",fullWidth:!0,onClick:function(){var e=function(e){var t=new FormData,s=e.text;return e.isComment&&(s="\u05d1\u05ea\u05d2\u05d5\u05d1\u05d4 \u05dc"+e.ID+": "+s),t.append("entry.638196057",s),t}({text:b,isComment:""!==p,ID:p});fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSd_Fn2K-cqZophaEL4dW8ZRIcHbfok2dhsLjojCP1H5ekTulQ/formResponse",{body:e,method:"post",mode:"no-cors"}),C.current.clear(),w.current.clear(),v(""),d(""),console.log("im here in change of submition")},endIcon:Object(Z.jsx)(oe.a,{}),children:"submit"})})]})})},ve=(s(131),s(132),s(92)),Ce=s.n(ve),we=s(64),Ne=s.n(we),Pe=s(39),Se=s.n(Pe),ke=s(94),De=s.n(ke),Ie=s(93),Be=s.n(Ie),Re=s(191),Me=s(197),Ee=s(95),Ae=s.n(Ee),ze=s(40),Te=s.n(ze),We=s(192),He=function(e){return function(){var t=document.documentElement;"light"===e.theme?(t.style.setProperty("--confession-table-bg",O),t.style.setProperty("--confession-table-border",y),t.style.setProperty("--confession-table-title",g)):(t.style.setProperty("--confession-table-bg",T),t.style.setProperty("--confession-table-border",W),t.style.setProperty("--confession-table-title",H))}(),Object(Z.jsxs)("div",{className:"content-table",children:[Object(Z.jsx)(ie,{title:"Emergency Hotlines",icon:Object(Z.jsx)(Ce.a,{})}),Object(Z.jsxs)(Re.a,{children:[Object(Z.jsx)(Me.a,{children:Object(Z.jsx)(Se.a,{})}),Object(Z.jsx)(We.a,{className:"list-item-title",primary:"ERAN: Emotional First Aid Services",secondary:Object(Z.jsxs)("span",{className:"emergency-link",children:[Object(Z.jsxs)("a",{href:"tel:*1201",children:[Object(Z.jsx)(Ne.a,{sx:{fontSize:12,marginRight:.5}}),"Phone"]}),Object(Z.jsxs)("a",{href:"https://www.eran.org.il/",target:"_blank",children:[Object(Z.jsx)(Te.a,{sx:{fontSize:12,marginRight:.5}}),"Website"]})]})})]}),Object(Z.jsxs)(Re.a,{children:[Object(Z.jsx)(Me.a,{children:Object(Z.jsx)(Se.a,{})}),Object(Z.jsx)(We.a,{className:"list-item-title",primary:"Sahar: on-line assistance for emotional distress",secondary:Object(Z.jsx)("span",{className:"emergency-link",children:Object(Z.jsxs)("a",{href:"https://sahar.org.il/",target:"_blank",children:[Object(Z.jsx)(Te.a,{sx:{fontSize:12,marginRight:.5}}),"Website"]})})})]}),Object(Z.jsxs)(Re.a,{children:[Object(Z.jsx)(Me.a,{children:Object(Z.jsx)(Se.a,{})}),Object(Z.jsx)(We.a,{className:"list-item-title",primary:"ARCCI: Association of Rape Crisis Centers in Israel",secondary:Object(Z.jsxs)("span",{className:"emergency-link",children:[Object(Z.jsxs)("a",{href:"tel:*1203",children:[Object(Z.jsx)(Be.a,{sx:{fontSize:15,color:"#537faf"}})," Phone"]}),Object(Z.jsxs)("a",{href:"tel:*1202",children:[Object(Z.jsx)(De.a,{sx:{fontSize:15,color:"#e04899"}})," Phone"]}),Object(Z.jsxs)("a",{href:"https://www.1202.org.il/",target:"_blank",children:[Object(Z.jsx)(Te.a,{sx:{fontSize:12,marginRight:.5}}),"Website"]})]})})]}),Object(Z.jsxs)(Re.a,{children:[Object(Z.jsx)(Me.a,{children:Object(Z.jsx)(Se.a,{})}),Object(Z.jsx)(We.a,{className:"list-item-title",primary:"HUJI's Psychological Services",secondary:Object(Z.jsxs)("span",{className:"emergency-link",children:[Object(Z.jsxs)("a",{href:"psyserv@mail.huji.ac.il",children:[Object(Z.jsx)(Ae.a,{sx:{fontSize:12,marginRight:.5}}),"Email"]}),Object(Z.jsxs)("a",{href:"tel:02-5880429",children:[Object(Z.jsx)(Ne.a,{sx:{fontSize:12,marginRight:.5}})," Phone"]}),Object(Z.jsxs)("a",{href:"https://studean.huji.ac.il/book/%D7%A9%D7%99%D7%A8%D7%95%D7%AA-%D7%A4%D7%A1%D7%99%D7%9B%D7%95%D7%9C%D7%95%D7%92%D7%99",target:"_blank",children:[Object(Z.jsx)(Te.a,{sx:{fontSize:12,marginRight:.5}}),"Website"]})]})})]}),Object(Z.jsxs)(Re.a,{children:[Object(Z.jsx)(Me.a,{children:Object(Z.jsx)(Se.a,{})}),Object(Z.jsx)(We.a,{className:"list-item-title",primary:"HUJI's Equal Opportunities",secondary:Object(Z.jsx)("span",{className:"emergency-link",children:Object(Z.jsxs)("a",{href:"https://studean.huji.ac.il/%D7%A9%D7%99%D7%95%D7%95%D7%99%D7%95%D7%9F-%D7%94%D7%96%D7%93%D7%9E%D7%A0%D7%95%D7%99%D7%95%D7%AA",target:"_blank",children:[Object(Z.jsx)(Te.a,{sx:{fontSize:12,marginRight:.5}}),"Website"]})})})]}),Object(Z.jsxs)(Re.a,{children:[Object(Z.jsx)(Me.a,{children:Object(Z.jsx)(Se.a,{})}),Object(Z.jsx)(We.a,{className:"list-item-title",primary:"HUJI's Dean Of Students",secondary:Object(Z.jsx)("span",{className:"emergency-link",children:Object(Z.jsxs)("a",{href:"https://sf_prod_bg.formtitan.com/ftbe37b9791569231113071#/",target:"_blank",children:[Object(Z.jsx)(Te.a,{sx:{fontSize:12,marginRight:.5}}),"Website"]})})})]}),Object(Z.jsxs)(Re.a,{children:[Object(Z.jsx)(Me.a,{children:Object(Z.jsx)(Se.a,{})}),Object(Z.jsx)(We.a,{className:"list-item-title",primary:"Aguda: The Association for LGBTQ Equality in Israel",secondary:Object(Z.jsxs)("span",{className:"emergency-link",children:[Object(Z.jsxs)("a",{href:"tel:*1201",children:[Object(Z.jsx)(Ne.a,{sx:{fontSize:12,marginRight:.5}}),"Phone"]}),Object(Z.jsxs)("a",{href:"https://www.eran.org.il/",target:"_blank",children:[Object(Z.jsx)(Te.a,{sx:{fontSize:12,marginRight:.5}}),"Website"]})]})})]})]})},_e=function(e){return Object(Z.jsxs)("div",{className:"main-table",children:[Object(Z.jsx)($.a,{from:"/huji-conf/",to:"/"}),Object(Z.jsx)($.b,{exact:!0,path:"/",render:function(){return Object(Z.jsx)(pe,{theme:e.theme})}}),Object(Z.jsx)($.b,{exact:!0,path:"/hotlines",render:function(){return Object(Z.jsx)(He,{theme:e.theme})}})]})},Fe=(s(133),function(e){return function(){var t=document.documentElement;"light"===e.theme?(t.style.setProperty("--footer-bg",v),t.style.setProperty("--footer-border",C)):(t.style.setProperty("--footer-bg",F),t.style.setProperty("--footer-border",J))}(),Object(Z.jsx)("div",{className:"footer-main",children:Object(Z.jsxs)("div",{className:"text-width",children:[Object(Z.jsxs)("div",{className:"huji-text",children:["We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with The Hebrew University Of Jerusalem, or any of its subsidiaries or its affiliates. The official HUJI website can be ",Object(Z.jsx)("a",{href:"https://new.huji.ac.il/",children:"here"}),". ",Object(Z.jsx)("br",{})]}),Object(Z.jsx)("div",{className:"admin-text",children:"Confessions are moderated by anonymous admins. This site was developed by Rina Karnauch."}),Object(Z.jsx)("div",{className:"rights-text",children:"All Rights Reserved \xa9 2021"})]})})}),Je=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),s=t[0],r=t[1];return function(){var e=document.documentElement;"light"===s?e.style.setProperty("--bg-color",i):e.style.setProperty("--bg-color",P)}(),Object(Z.jsxs)("div",{children:[Object(Z.jsx)(G,{theme:s,onChangeTheme:function(e){r(e)}}),Object(Z.jsx)(te,{theme:s}),Object(Z.jsxs)("div",{className:"flex-container",children:[Object(Z.jsx)(ee,{theme:s}),Object(Z.jsx)(_e,{theme:s})]}),Object(Z.jsx)(Fe,{theme:s})]})};function Ue(){return Object(Z.jsx)(Je,{})}var Le=s(43);o.a.render(Object(Z.jsx)(Le.a,{children:Object(Z.jsx)(Ue,{})}),document.getElementById("root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.a4ece674.chunk.js.map