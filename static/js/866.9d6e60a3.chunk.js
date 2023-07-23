"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[866],{8866:function(n,e,t){t.r(e),t.d(e,{Contacts:function(){return W}});var r,o,i,a,s,c,d,l,p,x,u,f,b,h,m,g=t(9434),Z=t(5280),v=t(9439),j=t(2791),y=t(3498),w=t(5729),z=t(4456),k=t(9145),P=t(168),C=t(7691),A=C.ZP.form(r||(r=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 280px;\n  margin: 0 auto;\n  padding: 32px;\n  border: 2px solid #082911;\n  border-radius: 4px;\n"]))),_=C.ZP.label(o||(o=(0,P.Z)(["\n  position: relative;\n  font-weight: 500;\n  font-size: 16px;\n  color: #082911;\n"]))),I=C.ZP.input(i||(i=(0,P.Z)(["\n  display: block;\n  width: 240px;\n  padding-top: 11px;\n  padding-bottom: 11px;\n  padding-left: 35px;\n  margin-top: 4px;\n  outline: none;\n  border: 2px solid #082911;\n  border-radius: 4px;\n\n  &:first-child {\n    margin-bottom: 16px;\n  }\n"]))),M=C.ZP.button(a||(a=(0,P.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 8px;\n  border: 2px solid #3f51b5;\n  border-radius: 4px;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n  color: #decea9;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: #3f51b5;\n    background-color: #decea9;\n  }\n"]))),H=t(3329),D=function(){var n=(0,j.useState)(""),e=(0,v.Z)(n,2),t=e[0],r=e[1],o=(0,j.useState)(""),i=(0,v.Z)(o,2),a=i[0],s=i[1],c=(0,g.v9)(Z.Af),d=(0,g.I0)(),l=function(){r(""),s("")};return(0,H.jsxs)(A,{onSubmit:function(n){if(n.preventDefault(),c.some((function(n){return n.name.toLowerCase()===t.toLowerCase()})))return l(),(0,w.nz)(t);var e={name:t,number:a};d((0,y.ky)(e)),l()},children:[(0,H.jsxs)(_,{children:["Name",(0,H.jsx)(I,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:function(n){return r(n.target.value)}}),(0,H.jsx)(z.H9,{})]}),(0,H.jsxs)(_,{children:["Number",(0,H.jsx)(I,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:a,onChange:function(n){return s(n.target.value)}}),(0,H.jsx)(z.rJ,{})]}),(0,H.jsxs)(M,{type:"submit",children:["Add contact",(0,H.jsx)(k.Z,{sx:{marginLeft:"5px"}})]})]})},F=t(7247),L=C.ZP.div(s||(s=(0,P.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 400px;\n"]))),V=C.ZP.p(c||(c=(0,P.Z)(["\n  font-weight: 500;\n  font-size: 16px;\n  color: #082911;\n  cursor: pointer;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    text-shadow: 0px 0px 10px #decea9;\n  }\n"]))),q=C.ZP.button(d||(d=(0,P.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid #3f51b5;\n  border-radius: 4px;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n  color: #decea9;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    transform: scale(1.01);\n    color: #3f51b5;\n    background-color: #decea9;\n  }\n  padding: 4px;\n  margin-left: 8px;\n"]))),N=function(n){var e=n.id,t=n.name,r=n.number,o=(0,g.I0)();return(0,H.jsxs)(L,{children:[(0,H.jsxs)(V,{children:[t,": ",r]}),(0,H.jsx)(q,{type:"button",onClick:function(){return o((0,y.GK)(e))},children:(0,H.jsx)(F.Z,{})})]})},S=C.ZP.li(l||(l=(0,P.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),J=C.ZP.ul(p||(p=(0,P.Z)(["\n  margin-top: 16px;\n"]))),T=function(){var n=(0,g.I0)(),e=(0,g.v9)(Z.Hz).isLoggedIn,t=(0,g.v9)(Z.DI);return(0,j.useEffect)((function(){e&&n((0,y.yF)())}),[e,n]),(0,H.jsx)(J,{children:t.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,H.jsx)(S,{children:(0,H.jsx)(N,{id:e,name:t,number:r})},e)}))})},B=t(2723),E=C.ZP.label(x||(x=(0,P.Z)(["\n  position: relative;\n  font-weight: 500;\n  font-size: 16px;\n  display: block;\n  width: 240px;\n  margin: 0 auto;\n  text-align: center;\n  color: #082911;\n"]))),G=C.ZP.input(u||(u=(0,P.Z)(["\n  display: block;\n  width: 200px;\n  padding-top: 11px;\n  padding-bottom: 11px;\n  padding-left: 35px;\n  margin-top: 4px;\n  outline: none;\n  border: 2px solid #082911;\n  border-radius: 4px;\n  margin-right: auto;\n  margin-left: auto;\n"]))),K=function(){var n=(0,g.v9)(Z.AD),e=(0,g.I0)();return(0,H.jsxs)(E,{children:["Find contacts by name",(0,H.jsx)(G,{type:"text",name:"filter",title:"The ability to filter the contact book",required:!0,value:n,onChange:function(n){return e((0,B.T)(n.target.value))}}),(0,H.jsx)(z.cR,{})]})},R=t(3466),U=C.ZP.section(f||(f=(0,P.Z)(["\n  padding: 20px;\n  background-color: #f0f4f8;\n  border-radius: 8px;\n  margin-bottom: 20px;\n"]))),$=C.ZP.h1(b||(b=(0,P.Z)(["\n  text-align: center;\n  margin-bottom: 20px;\n  color: #3f51b5;\n  font-size: 32px;\n"]))),O=C.ZP.h2(h||(h=(0,P.Z)(["\n  text-align: center;\n  margin-bottom: 16px;\n  color: #3f51b5;\n  font-size: 24px;\n"]))),Q=C.ZP.p(m||(m=(0,P.Z)(["\n  text-align: center;\n  font-weight: 500;\n  font-size: 18px;\n  color: #082911;\n  margin-top: 20px;\n"]))),W=function(){var n=(0,g.v9)(Z.xU),e=(0,g.v9)(Z.Af);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(U,{children:[(0,H.jsx)($,{children:"Phonebook"}),(0,H.jsx)(D,{})]}),(0,H.jsxs)(U,{children:[(0,H.jsx)(O,{children:"My Contacts"}),(0,H.jsx)(K,{}),n&&(0,H.jsx)(R.Z,{}),(0,H.jsx)(T,{}),0===e.length&&(0,H.jsx)(Q,{children:"Please add new contact"})]})]})}},9145:function(n,e,t){var r=t(4836);e.Z=void 0;var o=r(t(5649)),i=t(3329),a=(0,o.default)((0,i.jsx)("path",{d:"M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM21 6h-3V3h-2v3h-3v2h3v3h2V8h3z"}),"AddIcCall");e.Z=a},7247:function(n,e,t){var r=t(4836);e.Z=void 0;var o=r(t(5649)),i=t(3329),a=(0,o.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=a}}]);
//# sourceMappingURL=866.9d6e60a3.chunk.js.map