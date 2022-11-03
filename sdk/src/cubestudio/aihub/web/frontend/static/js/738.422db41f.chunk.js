"use strict";(self.webpackChunkcbapp_frontend=self.webpackChunkcbapp_frontend||[]).push([[738],{32738:function(e,n,a){a.d(n,{a:function(){return R},Z:function(){return T}});var t=a(44925),r=a(4942),l=a(1413),i=a(93433),s=a(29439),c=a(88977),o=a(10007),u=a(97709),d=a(73031),m=a(12513),f=a(2e4),h=a(75262),p=a(4519),g=a(43077),x=a.n(g),v=a(74860),b=a(20558),j=a(7517),Z=a(2556);function y(e){var n,a=Math.random().toString(36).substring(2),t=(0,p.useState)(e.options||[]),r=(0,s.Z)(t,2),l=r[0],i=r[1],c=(0,p.useState)(e.value||""),u=(0,s.Z)(c,2),d=u[0],m=u[1];(0,p.useEffect)((function(){var n=e.isOpenSearchMatch?(e.options||[]).filter((function(e){return-1!==e.indexOf(d)})):e.options||[];i(n)}),[e.options]),(0,p.useEffect)((function(){m(e.value||"")}),[e.value]);var f=function(n){m(n),e.onChange&&e.onChange(n)},h=function(e){var n=d,a=e.indexOf(d);if(-1===a)return(0,Z.jsx)("span",{children:e});var t=e.substring(0,a),r=e.substring(a+d.length);return(0,Z.jsxs)("span",{children:[t,(0,Z.jsx)("span",{className:"highlight",children:n}),r]})},g=function(e){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return function(){for(var t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];clearTimeout(n),n=setTimeout((function(){e&&e.apply(null,[].concat(r))}),a)}}(e.onScrollButtom);return(0,Z.jsxs)("div",{className:"select-down-modern",children:[e.labelName?(0,Z.jsx)("label",{htmlFor:a,className:"pb4 mb0 fs12 d-b",children:e.labelName}):null,(0,Z.jsxs)("div",{className:"p-r d-f ac",style:{width:e.width||"100%"},children:[(0,Z.jsx)(o.Z,{style:{width:"100%"},disabled:e.disabled,id:a,placeholder:e.placeholder||"",maxLength:e.maxLength||200,onChange:function(e){return f(e.target.value)},onKeyPress:function(a){13===a.nativeEvent.keyCode&&(n.blur&&n.blur(),e.onSearch&&e.onSearch(a.currentTarget.value))},value:d,ref:function(e){return n=e}}),(0,Z.jsx)(j.Z,{className:"p-a r0 mr8"})]}),l.length?(0,Z.jsxs)("ul",{className:"select-option shadow",onScroll:function(n){n.stopPropagation();var a=n.currentTarget,t=a.scrollTop,r=a.clientHeight;a.scrollHeight-r-t<20&&e.onScrollButtom&&g()},style:{maxHeight:"".concat(e.maxHeight,"px")},children:[e.loading?(0,Z.jsx)("div",{className:"p-s z9 ta-r",style:{right:"".concat(0,"px"),top:"".concat(0,"px")},children:(0,Z.jsx)("div",{className:"d-il p-a",style:{right:"".concat(8,"px"),top:"".concat(0,"px")}})}):null,l.map((function(n,a){return(0,Z.jsx)("li",{className:"ellip1",onMouseDown:function(){return function(n){f(n),e.onClick&&e.onClick(n)}(n)},children:h(n)},a)}))]}):null]})}var k=a(28501),C=a(3571),N=a(10089),S=a(96903);function w(e){var n=(0,p.useState)(!1),a=(0,s.Z)(n,2),t=(a[0],a[1],(0,p.useState)(!1)),r=(0,s.Z)(t,2),l=(r[0],r[1]),c=(0,p.useState)(""),o=(0,s.Z)(c,2),u=(o[0],o[1],(0,p.useState)([])),d=(0,s.Z)(u,2),m=(d[0],d[1],(0,p.useState)(!0)),f=(0,s.Z)(m,2),h=(f[0],f[1],(0,p.useState)([])),g=(0,s.Z)(h,2),x=g[0],v=g[1];var b=function(e,n,a){var t=function(e){var n=null;return void 0!=window.createObjectURL?n=window.createObjectURL(e):void 0!=window.URL?n=window.URL.createObjectURL(e):void 0!=window.webkitURL&&(n=window.webkitURL.createObjectURL(e)),n}(e),r=Math.random().toString(36).substring(2);return"video"===a?(0,Z.jsxs)("div",{className:"p-r",children:[(0,Z.jsx)("span",{onClick:function(){var e=(0,i.Z)(x);e.splice(n,1),v(e)},className:"d-il p-a plr8 ptb2 bg-fail",style:{top:0,right:0,borderBottomLeftRadius:6,zIndex:9},children:(0,Z.jsx)(k.Z,{style:{color:"#fff"}})}),(0,Z.jsx)("video",{className:"w100 mb8",src:t,controls:!0})]},r):"audio"===a?(0,Z.jsxs)("div",{className:"d-f ac mb8",children:[(0,Z.jsx)("audio",{className:"w100 flex1",src:t,controls:!0}),(0,Z.jsx)("span",{onClick:function(){var e=(0,i.Z)(x);e.splice(n,1),v(e)},className:"d-il plr8 ptb2 bg-fail",style:{borderRadius:6},children:(0,Z.jsx)(k.Z,{style:{color:"#fff"}})})]},r):e};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("div",{children:x.map((function(e,n){return b(e,n,"video")}))}),(0,Z.jsxs)(S.Z.Dragger,{fileList:x,showUploadList:!1,customRequest:function(n){console.log(n.file);var a=[].concat((0,i.Z)(x),[n.file]);v(a),e.onChange&&e.onChange(a)},beforeUpload:function(n){var a=e.maxCount||1;if(x.length>=a)return N.ZP.error("\u8d85\u51fa\u6587\u4ef6\u6570\u91cf\u9650\u5236"),!1;var t=n.size/1024/1024<2;return t||N.ZP.error("\u6587\u4ef6\u5927\u5c0f\u5e94\u5c0f\u4e8e 2MB"),t},onChange:function(n){if(console.log(n),"uploading"!==n.file.status)return"done"===n.file.status&&(l(!1),v(n.fileList),e.onChange&&e.onChange(n.fileList)),"removed"===n.file.status?(v(n.fileList),void(e.onChange&&e.onChange(n.fileList))):void 0;l(!0)},children:[(0,Z.jsx)("p",{className:"ant-upload-drag-icon",children:(0,Z.jsx)(C.Z,{})}),(0,Z.jsx)("p",{className:"ant-upload-text",children:"\u70b9\u51fb\u6216\u62d6\u62fd\u6587\u4ef6\u4e0a\u4f20"})]})]})}var _=a(31662),I=a(32064);function F(e){var n=(0,p.useState)(!1),a=(0,s.Z)(n,2),t=(a[0],a[1],(0,p.useState)(!1)),r=(0,s.Z)(t,2),l=r[0],c=r[1],o=(0,p.useState)(""),u=(0,s.Z)(o,2),d=(u[0],u[1],(0,p.useState)([])),m=(0,s.Z)(d,2),f=m[0],h=m[1],g=(0,p.useState)(!0),x=(0,s.Z)(g,2);x[0],x[1];return(0,Z.jsxs)("div",{className:"d-f fw",children:[f.map((function(n,a){var t=Math.random().toString(36).substring(2);return(0,Z.jsxs)("div",{className:"image-card s0 mr16 mb16",children:[(0,Z.jsx)("div",{className:"image-close",onClick:function(){var n=(0,i.Z)(f);n.splice(a,1),h(n),e.onChange&&e.onChange(n)},children:(0,Z.jsx)(_.Z,{style:{color:"#fff"}})}),(0,Z.jsx)("img",{src:n,alt:"file",style:{width:"100%"}})]},t)})),f.length<(e.maxCount||1)?(0,Z.jsx)(S.Z,{name:"file",listType:"picture-card",className:"file-uploader",showUploadList:!1,method:"POST",customRequest:function(n){console.log(n.file),function(e,n){var a=new FileReader;a.addEventListener("load",(function(){return n(a.result)})),a.readAsDataURL(e)}(n.file,(function(n){var a=[].concat((0,i.Z)(f),[n]);h(a),c(!1),e.onChange&&e.onChange(a)}))},beforeUpload:function(e){var n="image/jpeg"===e.type||"image/png"===e.type;n||N.ZP.error("\u4ec5\u652f\u6301 JPG/PNG \u683c\u5f0f\u56fe\u7247");var a=e.size/1024/1024<2;return a||N.ZP.error("\u56fe\u7247\u5927\u5c0f\u5e94\u5c0f\u4e8e 2MB"),n&&a},onChange:function(e){console.log(e),"uploading"!==e.file.status?"done"===e.file.status&&c(!1):c(!0)},children:(0,Z.jsxs)("div",{children:[l?(0,Z.jsx)(I.Z,{}):(0,Z.jsx)(b.Z,{}),(0,Z.jsx)("div",{style:{marginTop:8},children:"\u4e0a\u4f20\u56fe\u7247"})]})}):null]})}function L(e){var n=Math.random().toString(36).substring(2),a=function(n){e.onChange&&e.onChange(n)};return(0,Z.jsxs)("div",{className:["checkbox-box-normalize mr16 d-il",e.className].join(" "),children:[void 0===e.checked?(0,Z.jsx)("input",{id:n,trigger:"core",type:"checkbox",disabled:e.disabled,name:e.name||"",value:e.value,defaultChecked:e.defaultChecked||!1,onChange:a}):(0,Z.jsx)("input",{id:n,trigger:"core",type:"checkbox",disabled:e.disabled,name:e.name||"",value:e.value,checked:e.checked,onChange:a}),(0,Z.jsx)("span",{className:"checkbox-hook ta-c",children:(0,Z.jsx)("span",{className:"checkbox-hook-in fs12 op0",children:"\u2713"})}),(0,Z.jsx)("label",{htmlFor:n,className:"p-r z10 pl8",children:e.label||""})]})}var V=function(e){return function(n){var a=Math.random().toString(36).substring(2),t=function(e,n){if(Array.isArray(e))return-1!==e.indexOf(n)},r=function(e){var a=e.target,t=a.value,r=a.checked,l=[],s=[];if(l=n.values?(0,i.Z)(n.values):(0,i.Z)((null===n||void 0===n?void 0:n.defaultValue)||[]),r)s=[].concat((0,i.Z)(l),[t]);else{var c=l.indexOf(t);-1!==c&&(l.splice(c,1),s=(0,i.Z)(l))}n.onChange&&n.onChange(s)};return(0,Z.jsx)("div",{className:n.className||"",children:n.option.map((function(i,s){var c={defaultChecked:t(n.defaultValue||[],i.value),checked:t(n.values||[],i.value),name:a,label:i.label,value:i.value,disabled:i.disabled||n.disabled,display:i.display,onChange:r};return(0,p.createElement)(e,(0,l.Z)((0,l.Z)({},c),{},{key:s}))}))})}};L.Group=V(L),L.GroupFontIn=V((function(e){var n=Math.random().toString(36).substring(2),a=function(n){e.onChange&&e.onChange(n),console.log(n)};return(0,Z.jsxs)("div",{className:["checkbox-box-fontstyle d-il mr16 mb8",e.className].join(" "),children:[void 0===e.checked?(0,Z.jsx)("input",{id:n,trigger:"core",type:"checkbox",disabled:e.disabled,className:"d-n",name:e.name,value:e.value,defaultChecked:e.defaultChecked||!1,onChange:a}):(0,Z.jsx)("input",{id:n,trigger:"core",type:"checkbox",disabled:e.disabled,className:"d-n",name:e.name,value:e.value,checked:e.checked,onChange:a}),(0,Z.jsx)("label",{htmlFor:n,className:"checkbox-fontstyle mb0",children:(0,Z.jsx)("span",{className:"m0",children:e.label||""})})]})})),L.GroupBorder=V((function(e){var n=Math.random().toString(36).substring(2),a=function(n){e.onChange&&e.onChange(n)};return(0,Z.jsxs)("div",{className:"trigger-box-border d-il mr16 mb8",children:[void 0===e.checked?(0,Z.jsx)("input",{id:n,trigger:"core",type:"checkbox",disabled:e.disabled,className:"d-n",name:e.name,value:e.value,defaultChecked:e.defaultChecked||!1,onChange:a}):(0,Z.jsx)("input",{id:n,trigger:"core",type:"checkbox",disabled:e.disabled,className:"d-n",name:e.name,value:e.value,checked:e.checked,onChange:a}),(0,Z.jsx)("label",{htmlFor:n,className:"trigger-border mb0",children:(0,Z.jsx)("span",{className:"m0",children:e.label||""})})]})})),L.GroupImageIn=V((function(e){var n=Math.random().toString(36).substring(2),a=function(n){e.onChange&&e.onChange(n)};return(0,Z.jsxs)("div",{className:["checkbox-box-imgstyle d-il mr16 mb8",e.className].join(" "),children:[void 0===e.checked?(0,Z.jsx)("input",{id:n,trigger:"core",type:"checkbox",disabled:e.disabled,className:"d-n",name:e.name,value:e.value,defaultChecked:e.defaultChecked||!1,onChange:a}):(0,Z.jsx)("input",{id:n,trigger:"core",type:"checkbox",disabled:e.disabled,className:"d-n",name:e.name,value:e.value,checked:e.checked,onChange:a}),(0,Z.jsxs)("label",{htmlFor:n,className:"checkbox-imgstyle mb0",children:[(0,Z.jsx)("img",{src:"".concat(e.value),alt:""}),(0,Z.jsx)("p",{className:"m0",children:e.label}),(0,Z.jsx)("div",{className:"checkbox-mark",children:(0,Z.jsx)("span",{children:"\u2713"})})]})]})}));var M=["key","name"];function R(e){return e.reduce((function(e,n){return e+(n||"").split("").reduce((function(e,n){return e+n.charCodeAt(0)}),0)}),0)}function T(e){var n=(0,p.useState)(0),a=(0,s.Z)(n,2),g=a[0],j=a[1],k=(0,p.useState)(e.config),C=(0,s.Z)(k,2),N=C[0],S=C[1],_=(0,p.useRef)(e.config),I=function(e){_.current=e,S(e)},V=(0,p.useState)(e.configGroup),T=(0,s.Z)(V,2),U=T[0],O=T[1],H=(0,p.useRef)(e.configGroup),P=function(e){H.current=e,O(e)},G=function(n,a){var t=function(n,a){return a.filter((function(e){return e.dep.includes(n)})).map((function(n){var a=R(n.dep.map((function(n){var a;return null===(a=e.form)||void 0===a?void 0:a.getFieldValue(n)})).filter((function(e){return!(void 0===e||null===e)})));return{effect:n.effect,option:n.effectOption[a]||[]}}))}(n,a);t.forEach((function(n){var a;null===(a=e.form)||void 0===a||a.setFieldsValue((0,r.Z)({},n.effect,void 0)),function(e,n){var a=_.current?(0,i.Z)(_.current):[];if(a)for(var t=0;t<a.length;t++){var r=a[t];r.name===e&&(a[t]=(0,l.Z)((0,l.Z)({},r),n))}I(a)}(n.effect,{options:n.option}),function(e,n){for(var a=H.current?(0,i.Z)(H.current):[],t=0;t<a.length;t++){for(var r=(0,i.Z)(a[t].config),s=0;s<r.length;s++){var c=r[s];c.name===e&&(r[s]=(0,l.Z)((0,l.Z)({},c),n))}a[t]=(0,l.Z)((0,l.Z)({},a[t]),{},{config:r})}P(a)}(n.effect,{options:n.option})}))};(0,p.useEffect)((function(){if(e.formChangeRes&&e.linkageConfig){var n=e.formChangeRes.currentChange;G(Object.keys(n)[0],e.linkageConfig)}}),[e.formChangeRes]),(0,p.useEffect)((function(){var n;I(e.config),P(e.configGroup);var a=(null===(n=e.form)||void 0===n?void 0:n.getFieldsValue())||{};Object.entries(a).forEach((function(n){var a=(0,s.Z)(n,2),t=a[0];void 0!==a[1]&&G(t,e.linkageConfig||[])}))}),[e.configGroup,e.config]);var z=function(){j(g+1)},E=function(e,n){return(0,Z.jsx)(c.Z.Item,(0,l.Z)((0,l.Z)({label:e.label,name:e.name,rules:e.rules,initialValue:e.defaultValue,extra:e.description?(0,Z.jsx)("span",{dangerouslySetInnerHTML:{__html:e.description}}):null},n),{},{children:(0,Z.jsx)(F,{})}),"dynamicForm_".concat(e.name))},A=function(e,n){return(0,Z.jsx)(c.Z.Item,(0,l.Z)((0,l.Z)({label:e.label,name:e.name,rules:e.rules,initialValue:e.defaultValue,extra:e.description?(0,Z.jsx)("span",{dangerouslySetInnerHTML:{__html:e.description}}):null},n),{},{children:(0,Z.jsx)(w,{})}),"dynamicForm_".concat(e.name))},D=function(e,n){return(0,Z.jsx)(c.Z.Item,(0,l.Z)((0,l.Z)({label:e.label,name:e.name,rules:e.rules,initialValue:e.defaultValue,extra:e.description?(0,Z.jsx)("span",{dangerouslySetInnerHTML:{__html:e.description}}):null},n),{},{children:(0,Z.jsx)(w,{type:"video"})}),"dynamicForm_".concat(e.name))},B=function(e,n){return(0,Z.jsx)(c.Z.Item,(0,l.Z)((0,l.Z)({label:e.label,name:e.name,rules:e.rules,initialValue:e.defaultValue,extra:e.description?(0,Z.jsx)("span",{dangerouslySetInnerHTML:{__html:e.description}}):null},n),{},{children:(0,Z.jsx)(w,{type:"audio"})}),"dynamicForm_".concat(e.name))},q=function(e,n){return(0,Z.jsx)(c.Z.Item,(0,l.Z)((0,l.Z)({label:e.label,name:e.name,rules:e.rules,initialValue:e.defaultValue,extra:e.description?(0,Z.jsx)("span",{dangerouslySetInnerHTML:{__html:e.description}}):null},n),{},{children:(0,Z.jsx)(o.Z,{disabled:e.disable,placeholder:"\u8bf7\u8f93\u5165".concat(e.label)})}),"dynamicForm_".concat(e.name))},K=function(e,n){var a=(e.options||[]).map((function(e){return e.label}));return(0,Z.jsx)(c.Z.Item,(0,l.Z)((0,l.Z)({label:e.label,name:e.name,rules:e.rules,initialValue:e.defaultValue,extra:e.description?(0,Z.jsx)("span",{dangerouslySetInnerHTML:{__html:e.description}}):null},n),{},{children:(0,Z.jsx)(y,{isOpenSearchMatch:!0,disabled:e.disable,placeholder:"\u8bf7\u9009\u62e9".concat(e.label),options:a})}),"dynamicForm_".concat(e.name))},J=function(e,n){return(0,Z.jsx)(c.Z.Item,(0,l.Z)((0,l.Z)({label:e.label,name:e.name,rules:e.rules,initialValue:e.defaultValue,extra:e.description?(0,Z.jsx)("span",{dangerouslySetInnerHTML:{__html:e.description}}):null},n),{},{children:(0,Z.jsx)(o.Z.TextArea,{autoSize:{minRows:4},disabled:e.disable,placeholder:"\u8bf7\u8f93\u5165".concat(e.label)})}),"dynamicForm_".concat(e.name))},Q=function(n,a){var t=n.options||[];return(0,Z.jsx)(c.Z.Item,(0,l.Z)((0,l.Z)({label:n.label,name:n.name,rules:n.rules,initialValue:n.defaultValue,extra:n.description?(0,Z.jsx)("span",{dangerouslySetInnerHTML:{__html:n.description}}):null},a),{},{children:(0,Z.jsx)(h.Z,{onClick:function(){var n;console.log("click",null===(n=e.form)||void 0===n?void 0:n.getFieldsValue())},style:{width:"100%"},mode:n.multiple?"multiple":void 0,onChange:function(a){n.data.retry_info&&e.onRetryInfoChange&&e.onRetryInfoChange(a)},showSearch:!0,disabled:n.disable,optionFilterProp:"label",placeholder:"\u8bf7\u9009\u62e9".concat(n.label),options:t})}),"dynamicForm_".concat(n.name))},W=function(e,n){var a=e.options||[];return(0,Z.jsx)(c.Z.Item,(0,l.Z)((0,l.Z)({label:e.label,name:e.name,rules:e.rules,initialValue:e.defaultValue,extra:e.description?(0,Z.jsx)("span",{dangerouslySetInnerHTML:{__html:e.description}}):null},n),{},{children:(0,Z.jsx)(L.GroupImageIn,{option:a})}),"dynamicForm_".concat(e.name))},X=function(e,n){var a=e.options||[];return(0,Z.jsx)(c.Z.Item,(0,l.Z)((0,l.Z)({label:e.label,name:e.name,rules:e.rules,initialValue:e.defaultValue},n),{},{children:(0,Z.jsx)(u.ZP.Group,{options:a})}),"dynamicForm_".concat(e.name))},Y=function(e,n){return(0,Z.jsx)(c.Z.Item,(0,l.Z)((0,l.Z)({label:e.label,name:"fromDate",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u65f6\u95f4"}]},n),{},{children:(0,Z.jsx)(d.Z,{showTime:!0,disabledDate:function(e){return e&&e>x()().endOf("day")}})}),"dynamicForm_".concat(e.name))},$=function(e,n){return(0,Z.jsx)(c.Z.Item,(0,l.Z)((0,l.Z)({label:e.label,name:"fromDate",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u65f6\u95f4"}]},n),{},{children:(0,Z.jsx)(d.Z,{showTime:!0,disabledDate:function(e){return e&&e>x()().endOf("day")}})}),"dynamicForm_".concat(e.name))},ee=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(e.type){case"imageSelect":return W(e,n);case"imageUpload":return E(e,n);case"fileUpload":return A(e,n);case"videoUpload":return D(e,n);case"audioUpload":return B(e,n);case"input":case"match-input":return q(e,n);case"input-select":return K(e,n);case"textArea":return J(e,n);case"select":return Q(e,n);case"datePicker":return Y(e,n);case"rangePicker":return $(e,n);case"radio":return X(e,n);default:return null}},ne=function(e){return(e||[]).map((function(e){return e.list&&e.list.length?(0,Z.jsx)(c.Z.List,{name:e.name,children:function(n,a){var r=a.add,i=a.remove;return(0,Z.jsxs)(Z.Fragment,{children:[n.map((function(n){var a=n.key,r=n.name,s=(0,t.Z)(n,M);return(0,Z.jsxs)("div",{className:"bor b-side pt32 plr16 mb16",children:[e.list&&e.list.map((function(e){return ee(e,(0,l.Z)((0,l.Z)({},s),{},{name:[r,e.name]}))})),(0,Z.jsx)(c.Z.Item,{wrapperCol:{offset:5},children:(0,Z.jsx)(m.Z,{danger:!0,onClick:function(){return i(r)},block:!0,icon:(0,Z.jsx)(v.Z,{}),children:"\u5220\u9664\u8be5\u9879"})})]},a)})),(0,Z.jsx)(c.Z.Item,{noStyle:!0,className:"w100",children:(0,Z.jsx)(m.Z,{type:"dashed",className:"w100",onClick:function(){return r()},block:!0,icon:(0,Z.jsx)(b.Z,{}),children:"\u589e\u52a0\u4e00\u9879"})})]})}},"dynamicForm_".concat(e.name)):ee(e)}))};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(c.Z.Item,{name:e.primaryKey||"id",noStyle:!0,hidden:!0,children:(0,Z.jsx)(o.Z,{})},"dynamicForm_id"),U&&U.length?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(f.Z,{current:g,children:(U||[]).map((function(e,n){return(0,Z.jsx)(f.Z.Step,{title:e.group},n)}))}),(0,Z.jsx)("div",{className:"pt32",children:(U||[]).map((function(e,n){return(0,Z.jsx)("div",{className:[g===n?"p-r z9":"p-a z-99 v-h l-10000"].join(" "),children:ne(e.config)},n)}))}),(0,Z.jsxs)("div",{className:"ta-c pt32",children:[g>0&&(0,Z.jsx)(m.Z,{onClick:function(){j(g-1)},children:"\u4e0a\u4e00\u6b65"}),g<(U||[]).length-1&&(0,Z.jsx)(m.Z,{type:"primary",className:"ml16",onClick:function(){if(e.form){var n=U[g].config.map((function(e){return e.name}));e.form.validateFields(n).then((function(){z()})).catch((function(e){console.log(e)}))}else z()},children:"\u4e0b\u4e00\u6b65"}),(0,Z.jsx)("div",{children:g===(U||[]).length-1&&(0,Z.jsx)("div",{className:"pt8 c-hint-b",children:"\u70b9\u51fb\u786e\u5b9a\u5b8c\u6210\u63d0\u4ea4"})})]})]}):ne(N||[])]})}}}]);
//# sourceMappingURL=738.422db41f.chunk.js.map