webpackJsonp([1],{0:function(l,n,t){l.exports=t("x35b")},"6GLz":function(l,n){function t(l){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+l+"'.")})}t.keys=function(){return[]},t.resolve=t,l.exports=t,t.id="6GLz"},x35b:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e,u=t("3j3K"),o=function(){return function(){}}(),a=t("t4zo"),i=this&&this.__extends||(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,n){l.__proto__=n}||function(l,n){for(var t in n)n.hasOwnProperty(t)&&(l[t]=n[t])},function(l,n){function t(){this.constructor=l}e(l,n),l.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),r=function(){function l(){var l=this;this.txtArea=document.createElement("textarea"),this.html=null,this.pageTitle="test",this.metaDescription="test",this.searchInput="",this.activeTab="TEXT",this.searchCount=-1,this.items=[{value:"ar",name:"ARABIC"},{value:"bg",name:"BULGARIAN"},{value:"zh-CN",name:"CHINESE_SIMPLIFIED"},{value:"closed-zh-tw",name:"CHINESE_TRADITIONAL"},{value:"cs",name:"CZECH"},{value:"da",name:"DANISH"},{value:"nl",name:"DUTCH"},{value:"en",name:"ENGLISH"},{value:"et",name:"ESTONIAN"},{value:"fi",name:"FINNISH"},{value:"fr",name:"FRENCH"},{value:"de",name:"GERMAN"},{value:"el",name:"GREEK"},{value:"hi",name:"HINDI"},{value:"hu",name:"HUNGARIAN"},{value:"it",name:"ITALIAN"},{value:"ja",name:"JAPANESE"},{value:"ko",name:"KOREAN"},{value:"ms",name:"MALAY"},{value:"fa",name:"PERSIAN"},{value:"pl",name:"POLISH"},{value:"pt",name:"PORTUGUESE"},{value:"ro",name:"ROMANIAN"},{value:"ru",name:"RUSSIAN"},{value:"sk",name:"SLOVAK"},{value:"es",name:"SPANISH"},{value:"sv",name:"SWEDISH"},{value:"th",name:"THAI"},{value:"tr",name:"TURKISH"},{value:"uk",name:"UKRAINIAN"}],this.selected_lang="fr",this.toolbarOptions=[[{undo:"undo"},{redo:"redo"}],["bold","italic","underline","strike","blockquote","code-block",{list:"ordered"},{list:"bullet"},{script:"sub"},{script:"super"},{indent:"-1"},{indent:"+1"},{direction:"rtl"},{size:["small",!1,"large","huge"]},{color:[]},{background:[]},{font:[]},{align:[]},"clean"],[{header:1},{header:2}],[{header:[1,2,3,4,5,6,!1]}]],this.options={theme:"snow",modules:{toolbar:{container:"#toolbar",handlers:{redo:function(){this.quill.history.redo()},undo:function(){this.quill.history.undo()},showHtml:function(){return l.showHtmlImpl()}}},history:{delay:100,maxStack:500,userOnly:!0}}}}return l.prototype.ngOnInit=function(){var l=Quill.import("ui/icons");l.undo='<svg viewbox="0 0 18 18"><polygon class="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10"></polygon><path class="ql-stroke" d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"></path></svg>',l.redo='<svg viewbox="0 0 18 18"><polygon class="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10"></polygon><path class="ql-stroke" d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"></path></svg>',Quill.register(l,!0);var n=new Quill("#editor",this.options);this.quill=n,this.registerDividerToQuill(),this.registerPlaceholder(),this.addShowHtml(),this.addTitleAndDescriptionLines(),this.getLine();var t=Quill.import("parchment"),e=new t.Attributor.Class("custom","ql-custom",{scope:t.Scope.INLINE});Quill.register(e,!0);document.querySelector("#custom-button");var u=this;this.quill.on("editor-change",function(){var l=u.quill.getContents().ops[1].insert.length,n=u.quill.getSelection();n&&0==n.index&&u.quill.setSelection(1),n&&n.index==l+1&&u.quill.setSelection(l+2)}),this.quill.on("text-change",function(){var l=u.quill.getSelection();l&&0==l.index&&u.quill.setSelection(1);var n=u.quill.getContents().ops[1].insert.length;l&&l.index==n+1&&u.quill.setSelection(n+2)})},l.prototype.addTitleAndDescriptionLines=function(){this.quill.setContents([{insert:{placeholder:{id:"Title",label:"Title: "}}},{insert:" \n"},{insert:{placeholder:{id:"Description",label:"Meta-Description: "}}},{insert:" "},{insert:{divider:!0}}]),this.quill.setSelection(2)},l.prototype.selectOption=function(l){console.log(l),console.log(this.selected_lang),this.quill.root.setAttribute("lang",this.selected_lang)},l.prototype.getLine=function(){for(var l=Quill.import("parchment"),n=document.getSelection().getRangeAt(0).startContainer,t=l.find(n);"block"!==t.statics.blotName&&t.parent;)t=t.parent;for(var e,u=t.parent.children.iterator(),o=0;(e=u())&&(o++,e!==t););return o},l.prototype.getIndexOf=function(l,n,t){return 0==l.length?null:(t||(n=n.toLowerCase(),l=l.toLowerCase()),l.indexOf(n))},l.prototype.showHtmlImpl=function(){if(""===this.txtArea.style.display){var l=this.txtArea.value;l=this.getHtmlBody(l),this.html="\n<p><br></p>\n"===l?null:l.replace(new RegExp("<p><br/>","g"),"<p>"),this.headCode=this.headCode.replace("<p><br></p>","\t"),l=this.headCode+l}this.txtArea.style.display="none"===this.txtArea.style.display?"":"none"},l.prototype.addShowHtml=function(){var l=this;this.txtArea.style.cssText="height: 100%;width: 100%;margin: 0px;background: rgb(29, 29, 29);box-sizing: border-box;color: rgb(204, 204, 204);font-size: 15px;outline: none;padding: 20px;line-height: 24px;font-family: Consolas, Menlo, Monaco, &quot;Courier New&quot;, monospace;position: absolute;top: 0;bottom: 0;border: none;display:none;resize: none;",this.quill.addContainer("ql-custom").appendChild(this.txtArea);var n=this;this.quill.on("text-change",function(t,e,u){var o=l.quill.root.innerHTML;o=n.removeTitleAndDescription(o),l.txtArea.value=o})},l.prototype.toggleTab=function(l){this.activeTab!==l&&(this.activeTab=l,this.showHtmlImpl(),"TEXT"===l&&this.quill.setSelection(this.quill.getText().length+3))},l.prototype.getHtml=function(l,n,t){var e=" <!DOCTYPE html>\n<html>\n<head>\n  <title>";return e+=l,e+="</title>\n",e=(e+='<meta name="description" content="')+(n=n.replace(/(\r\n|\n|\r)/gm," "))+'">',e+="</head>\n<body>\n",e+=t.toString(),e+="</body>\n</html> "},l.prototype.download=function(l){var n=this.txtArea.value,t="data:text/html;base64,"+btoa(n);if("HTML"===this.activeTab)Object(a.saveAs)(t,"page.html");else{var e=htmlDocx.asBlob(n);Object(a.saveAs)(e,"page.docx")}},l.prototype.removeTitleAndDescription=function(l){this.headCode=l.substring(0,l.indexOf("<hr>")+4),this.headCode=this.headCode.replace("<p><br></p>"," ");var n=l.substring(l.indexOf("<hr>")+4),t=this.quill.getContents().ops[1].insert,e=this.quill.getContents().ops[3].insert;return this.getHtml(t,e,n)},l.prototype.getHtmlBody=function(l){return(new DOMParser).parseFromString(l,"text/html").body.innerHTML},l.prototype.registerDividerToQuill=function(){var l=function(l){function n(){return null!==l&&l.apply(this,arguments)||this}return i(n,l),n.prototype.deleteAt=function(){return!1},n}(Quill.import("blots/block/embed"));l.blotName="divider",l.tagName="hr",Quill.register(l)},l.prototype.doHighlight=function(l,n,t,e){t&&e||(t="<font style='color:blue; background-color:yellow;'>",e="</font>");for(var u="",o=-1,a=n.toLowerCase(),i=l.toLowerCase();l.length>0;)(o=i.indexOf(a,o+1))<0?(u+=l,l=""):l.lastIndexOf(">",o)>=l.lastIndexOf("<",o)&&i.lastIndexOf("/script>",o)>=i.lastIndexOf("<script",o)&&(u+=l.substring(0,o)+t+l.substr(o,n.length)+e,i=(l=l.substr(o+n.length)).toLowerCase(),o=-1);return u},l.prototype.getIndicesOf=function(l,n,t){var e=l.length;if(0==e)return[];var u,o=0,a=[];for(t||(n=n.toLowerCase(),l=l.toLowerCase());(u=n.indexOf(l,o))>-1;)a.push(u),o=u+e;return a},l.prototype.search=function(){console.log(this.headCode);var l=this.getIndicesOf(this.searchInput,this.quill.getText(),!1);console.log(this.quill.getText()),console.log(l);var n=this.quill.getContents().ops[1].insert,t=this.quill.getContents().ops[3].insert,e=n.length+t.length,u=0,o=0;for(o=0;o<l.length;o++)l[o]>=e&&(u++,this.quill.formatText(l[o]+3,this.searchInput.length,"custom",!0));this.searchCount=u},l.prototype.registerPlaceholder=function(){var l=Quill.import("delta"),n=Quill.import("blots/embed"),t=(Quill.import("parchment"),function(l){function n(){return null!==l&&l.apply(this,arguments)||this}return i(n,l),n.create=function(n){var t=l.create.call(this,n);return t.setAttribute("data-id",n.id),t.setAttribute("data-label",n.label),t.setAttribute("style","color: gray; font-style:italic;"),t.innerText=""+n.label,t},n.value=function(l){return l.dataset},n.prototype.length=function(){return 1},n.prototype.deleteAt=function(){return!1},n}(n));t.blotName="placeholder",t.tagName="span",t.className="ql-placeholder-content",Quill.register(t);var e=function(){function n(l,n){this.quill=l,this.onTextChange=this.onTextChange.bind(this),this.onSelectionChange=this.onSelectionChange.bind(this),this.quill.on(Quill.events.TEXT_CHANGE,this.onTextChange),this.quill.on(Quill.events.SELECTION_CHANGE,this.onSelectionChange)}return n.prototype.onTextChange=function(n,t,e){if(e!==Quill.sources.API){var u=this.quill.getContents().diff(t),o=u.ops.filter(function(l){return l.insert&&l.insert.placeholder});if(!o.length)return;var a=u.ops.filter(function(l){return l.retain})[0];a?(this.quill.updateContents(new l([a].concat(o))),this.quill.setSelection(a.retain+1+o.length)):(this.quill.updateContents(new l(o)),this.quill.setSelection(o.length))}},n.prototype.onSelectionChange=function(l,n,t){console.log("a, b, c",l,n,t)},n}();Quill.register("modules/placeholder",e)},l.prototype.removeHighlight=function(){this.searchInput=null,this.searchCount=-1,this.quill.formatText(0,this.quill.getText().length+10,"custom",!1)},l.ctorParameters=function(){return[{type:void 0},{type:void 0}]},l}(),s=t("NVOs"),c=t("2Je8"),d=[['strong[_ngcontent-%COMP%]{font-weight:700!important}.border-right-1[_ngcontent-%COMP%]{border-right:1px solid #000}.parent[_ngcontent-%COMP%]{display:-ms-grid;display:grid;-ms-grid-columns:.2fr 1fr .5fr;grid-template-columns:.2fr 1fr .5fr;-ms-grid-rows:1fr;grid-template-rows:1fr;grid-column-gap:0;grid-row-gap:0}[data-tooltip][_ngcontent-%COMP%]{position:relative;cursor:pointer}[data-tooltip][_ngcontent-%COMP%]:after, [data-tooltip][_ngcontent-%COMP%]:before{line-height:1;font-size:.9em;pointer-events:none;position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;opacity:0}[data-tooltip][_ngcontent-%COMP%]:before{content:"";border:5px solid transparent;z-index:100}[data-tooltip][_ngcontent-%COMP%]:after{content:attr(data-tooltip);text-align:center;min-width:3em;max-width:21em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:6px 8px;border-radius:3px;background:#4621ff;color:#fff;z-index:99}[data-tooltip][_ngcontent-%COMP%]:hover:after, [data-tooltip][_ngcontent-%COMP%]:hover:before{display:block;opacity:1}[data-tooltip][_ngcontent-%COMP%]:not([data-flow])::before, [data-tooltip][data-flow=top][_ngcontent-%COMP%]::before{bottom:100%;border-bottom-width:0;border-top-color:#4621ff}[data-tooltip][_ngcontent-%COMP%]:not([data-flow])::after, [data-tooltip][data-flow=top][_ngcontent-%COMP%]::after{bottom:calc(100% + 5px)}[data-tooltip][_ngcontent-%COMP%]:not([data-flow])::before, [data-tooltip][data-flow=top][_ngcontent-%COMP%]::after, [data-tooltip][data-flow=top][_ngcontent-%COMP%]::before, [tooltip][_ngcontent-%COMP%]:not([data-flow])::after{left:50%;-webkit-transform:translate(-50%,-4px);transform:translate(-50%,-4px)}[data-tooltip][data-flow=bottom][_ngcontent-%COMP%]::before{top:100%;border-top-width:0;border-bottom-color:#4621ff}[data-tooltip][data-flow=bottom][_ngcontent-%COMP%]::after{top:calc(100% + 5px)}[data-tooltip][data-flow=bottom][_ngcontent-%COMP%]::after, [data-tooltip][data-flow=bottom][_ngcontent-%COMP%]::before{left:50%;-webkit-transform:translate(-50%,8px);transform:translate(-50%,8px)}[data-tooltip][data-flow=left][_ngcontent-%COMP%]::before{top:50%;border-right-width:0;border-left-color:#4621ff;left:calc(0em - 5px);-webkit-transform:translate(-8px,-50%);transform:translate(-8px,-50%)}[data-tooltip][data-flow=left][_ngcontent-%COMP%]::after{top:50%;right:calc(100% + 5px);-webkit-transform:translate(-8px,-50%);transform:translate(-8px,-50%)}[data-tooltip][data-flow=right][_ngcontent-%COMP%]::before{top:50%;border-left-width:0;border-right-color:#4621ff;right:calc(0em - 5px);-webkit-transform:translate(8px,-50%);transform:translate(8px,-50%)}[data-tooltip][data-flow=right][_ngcontent-%COMP%]::after{top:50%;left:calc(100% + 5px);-webkit-transform:translate(8px,-50%);transform:translate(8px,-50%)}[data-tooltip=""][_ngcontent-%COMP%]::after, [data-tooltip=""][_ngcontent-%COMP%]::before{display:none!important}#tabs14[_ngcontent-%COMP%]{font:bold 93%/1.5em Verdana;float:left;width:100%;background:#f3f3f3;line-height:normal}#tabs14[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:10px 10px 0 50px;list-style:none}#tabs14[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline;margin:0;padding:0}#tabs14[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{float:left;background:url(tableft14.337797c825a7f076ada7.gif) left top no-repeat;margin:0;padding:0 0 0 4px;text-decoration:none}#tabs14[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;background:url(tabright14.caf14d6ffcd30e8a2426.gif) right top no-repeat;padding:5px 15px 4px 6px;color:#666;float:none}#tabs14[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:#000;background-position:100% -42px}#tabs14[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-position:0 -42px}.ql-span-tab-active[_ngcontent-%COMP%]{background-position:100% -42px!important;color:#000!important}.ql-a-tab-active[_ngcontent-%COMP%]{background-position:0 -42px!important;color:#000!important}.ql-tabs-align-left[_ngcontent-%COMP%]{-webkit-transform:translate(-50px);transform:translate(-50px)}.ql-tabs-align-right[_ngcontent-%COMP%]{-webkit-transform:translate(437px);transform:translate(437px)}#search_bar[_ngcontent-%COMP%]{-webkit-transform:translate(330px,34px);transform:translate(330px,34px)}.search_loop[_ngcontent-%COMP%]{-webkit-transform:translate(-19px,4px);transform:translate(-19px,4px)}.search_count[_ngcontent-%COMP%]{margin:-15px}.ql-disable-toolbar[_ngcontent-%COMP%]{pointer-events:none;-webkit-filter:blur(1px);-moz-filter:blur(1px);-o-filter:blur(1px);-ms-filter:blur(1px);filter:blur(1px);background-color:#ccc}.ql-custom-true[_ngcontent-%COMP%]{color:#ff0}.ql-placeholder-content[_ngcontent-%COMP%]{color:#fff!important;background-color:#000!important}.display_none[_ngcontent-%COMP%]{visibility:hidden}.display_full[_ngcontent-%COMP%]{display:block}input[type=reset][_ngcontent-%COMP%]{background-image:url(https://img.icons8.com/ios-filled/13/000000/x.png);background-position:center center;background-repeat:no-repeat;height:16px;width:16px;border:none;background-color:transparent;cursor:pointer;position:relative;top:0;left:-30px}.language_select[_ngcontent-%COMP%]{-webkit-transform:translate(124px,60px);transform:translate(124px,60px)}']],p=u._5({encapsulation:0,styles:d,data:{}});function _(l){return u._25(0,[(l()(),u._8(0,0,null,null,3,"option",[],null,null,null,null,null)),u._6(1,147456,null,0,s.k,[u.k,u.G,[2,s.l]],{value:[0,"value"]},null),u._6(2,147456,null,0,s.p,[u.k,u.G,[8,null]],{value:[0,"value"]},null),(l()(),u._24(3,null,["",""]))],function(l,n){l(n,1,0,n.context.$implicit.value),l(n,2,0,n.context.$implicit.value)},function(l,n){l(n,3,0,n.context.$implicit.name)})}function g(l){return u._25(0,[(l()(),u._24(-1,null,["\n\n"])),(l()(),u._24(-1,null,["\n\n"])),(l()(),u._24(-1,null,["\n\n\n"])),(l()(),u._8(3,0,null,null,12,"div",[["class","language_select"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n  "])),(l()(),u._8(5,0,null,null,9,"select",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"ngModelChange"],[null,"blur"]],function(l,n,t){var e=!0,o=l.component;"change"===n&&(e=!1!==u._20(l,6).onChange(t.target.value)&&e);"blur"===n&&(e=!1!==u._20(l,6).onTouched()&&e);"change"===n&&(e=!1!==o.selectOption(t.target.value)&&e);"ngModelChange"===n&&(e=!1!==(o.selected_lang=t)&&e);return e},null,null)),u._6(6,16384,null,0,s.l,[u.G,u.k],null,null),u._22(1024,null,s.e,function(l){return[l]},[s.l]),u._6(8,671744,null,0,s.j,[[8,null],[8,null],[8,null],[2,s.e]],{model:[0,"model"]},{update:"ngModelChange"}),u._22(2048,null,s.f,null,[s.j]),u._6(10,16384,null,0,s.g,[s.f],null,null),(l()(),u._24(-1,null,["\n    "])),(l()(),u._2(16777216,null,null,1,null,_)),u._6(13,802816,null,0,c.d,[u.Q,u.N,u.t],{ngForOf:[0,"ngForOf"]},null),(l()(),u._24(-1,null,["\n  "])),(l()(),u._24(-1,null,["\n"])),(l()(),u._24(-1,null,["\n\n\n"])),(l()(),u._8(17,0,null,null,27,"form",[["id","search_bar"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,t){var e=!0;"submit"===n&&(e=!1!==u._20(l,19).onSubmit(t)&&e);"reset"===n&&(e=!1!==u._20(l,19).onReset()&&e);return e},null,null)),u._6(18,16384,null,0,s.n,[],null,null),u._6(19,16384,null,0,s.i,[[8,null],[8,null]],null,null),u._22(2048,null,s.b,null,[s.i]),u._6(21,16384,null,0,s.h,[s.b],null,null),(l()(),u._24(-1,null,["\n  "])),(l()(),u._8(23,0,null,null,20,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n"])),(l()(),u._24(-1,null,["\n    "])),(l()(),u._8(26,0,null,null,5,"input",[["id","searchInput"],["name","search"],["placeholder","Search..."],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,t){var e=!0,o=l.component;"input"===n&&(e=!1!==u._20(l,27)._handleInput(t.target.value)&&e);"blur"===n&&(e=!1!==u._20(l,27).onTouched()&&e);"compositionstart"===n&&(e=!1!==u._20(l,27)._compositionStart()&&e);"compositionend"===n&&(e=!1!==u._20(l,27)._compositionEnd(t.target.value)&&e);"ngModelChange"===n&&(e=!1!==(o.searchInput=t)&&e);return e},null,null)),u._6(27,16384,null,0,s.c,[u.G,u.k,[2,s.a]],null,null),u._22(1024,null,s.e,function(l){return[l]},[s.c]),u._6(29,671744,null,0,s.j,[[2,s.b],[8,null],[8,null],[2,s.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u._22(2048,null,s.f,null,[s.j]),u._6(31,16384,null,0,s.g,[s.f],null,null),(l()(),u._24(-1,null,["\n    "])),(l()(),u._8(33,0,null,null,2,"input",[["alt","clear"],["type","reset"],["value",""]],null,[[null,"click"]],function(l,n,t){var e=!0,u=l.component;"click"===n&&(e=!1!==u.removeHighlight()&&e);return e},null,null)),u._6(34,278528,null,0,c.c,[u.t,u.u,u.k,u.F],{ngClass:[0,"ngClass"]},null),u._21(35,{display_none:0}),(l()(),u._24(-1,null,["\n    "])),(l()(),u._8(37,0,null,null,0,"img",[["class","search_loop"],["src","https://img.icons8.com/material-outlined/20/000000/search--v1.png"]],null,[[null,"click"]],function(l,n,t){var e=!0,u=l.component;"click"===n&&(e=!1!==u.search()&&e);return e},null,null)),(l()(),u._24(-1,null,["\n    "])),(l()(),u._8(39,0,null,null,3,"span",[["class","search_count"]],null,null,null,null,null)),u._6(40,278528,null,0,c.c,[u.t,u.u,u.k,u.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u._21(41,{display_none:0}),(l()(),u._24(42,null,[" (",")"])),(l()(),u._24(-1,null,["\n  "])),(l()(),u._24(-1,null,["\n"])),(l()(),u._24(-1,null,["\n\n\n\n"])),(l()(),u._8(46,0,null,null,150,"div",[],null,null,null,null,null)),(l()(),u._24(-1,null,["\n  "])),(l()(),u._8(48,0,null,null,35,"div",[["id","tabs14"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n    "])),(l()(),u._8(50,0,null,null,32,"ul",[],null,null,null,null,null)),(l()(),u._24(-1,null,["\n      "])),(l()(),u._8(52,0,null,null,21,"div",[["class","ql-tabs-align-left"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n        "])),(l()(),u._8(54,0,null,null,7,"li",[],null,null,null,null,null)),(l()(),u._8(55,0,null,null,6,"a",[["href","#"],["title","Text"]],null,[[null,"click"]],function(l,n,t){var e=!0,u=l.component;"click"===n&&(e=!1!==u.toggleTab("TEXT")&&e);return e},null,null)),u._6(56,278528,null,0,c.c,[u.t,u.u,u.k,u.F],{ngClass:[0,"ngClass"]},null),u._21(57,{"ql-a-tab-active":0}),(l()(),u._8(58,0,null,null,3,"span",[],null,null,null,null,null)),u._6(59,278528,null,0,c.c,[u.t,u.u,u.k,u.F],{ngClass:[0,"ngClass"]},null),u._21(60,{"ql-span-tab-active":0}),(l()(),u._24(-1,null,["Text"])),(l()(),u._24(-1,null,["\n        "])),(l()(),u._8(63,0,null,null,7,"li",[],null,null,null,null,null)),(l()(),u._8(64,0,null,null,6,"a",[["href","#"],["title","Html"]],null,[[null,"click"]],function(l,n,t){var e=!0,u=l.component;"click"===n&&(e=!1!==u.toggleTab("HTML")&&e);return e},null,null)),u._6(65,278528,null,0,c.c,[u.t,u.u,u.k,u.F],{ngClass:[0,"ngClass"]},null),u._21(66,{"ql-a-tab-active":0}),(l()(),u._8(67,0,null,null,3,"span",[],null,null,null,null,null)),u._6(68,278528,null,0,c.c,[u.t,u.u,u.k,u.F],{ngClass:[0,"ngClass"]},null),u._21(69,{"ql-span-tab-active":0}),(l()(),u._24(-1,null,["Html"])),(l()(),u._24(-1,null,["\n\n\n        "])),(l()(),u._24(-1,null,["\n\n\n        "])),(l()(),u._24(-1,null,["\n      "])),(l()(),u._24(-1,null,["\n\n\n      "])),(l()(),u._8(75,0,null,null,6,"div",[["class","ql-tabs-align-right"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n        "])),(l()(),u._8(77,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),u._8(78,0,null,null,2,"a",[["href","http://"],["title","Download"]],null,[[null,"click"]],function(l,n,t){var e=!0,u=l.component;"click"===n&&(e=!1!==u.download("word")&&e);return e},null,null)),(l()(),u._8(79,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u._24(-1,null,["Download"])),(l()(),u._24(-1,null,["\n      "])),(l()(),u._24(-1,null,["\n    "])),(l()(),u._24(-1,null,["\n\n\n  "])),(l()(),u._24(-1,null,["\n  "])),(l()(),u._8(85,0,null,null,108,"div",[["class","parent"],["id","toolbar"]],null,null,null,null,null)),u._6(86,278528,null,0,c.c,[u.t,u.u,u.k,u.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u._21(87,{"ql-disable-toolbar":0}),(l()(),u._24(-1,null,["\n    "])),(l()(),u._8(89,0,null,null,5,"span",[["class","col-2 border-right-1"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n"])),(l()(),u._8(91,0,null,null,0,"button",[["class","ql-undo"],["data-flow","bottom"],["data-tooltip","Undo"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n"])),(l()(),u._8(93,0,null,null,0,"button",[["class","ql-redo"],["data-flow","bottom"],["data-tooltip","Redo"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n"])),(l()(),u._24(-1,null,["\n    "])),(l()(),u._8(96,0,null,null,45,"span",[["class","col-6 border-right-1"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n"])),(l()(),u._8(98,0,null,null,0,"select",[["class","ql-font"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n\n"])),(l()(),u._8(100,0,null,null,0,"select",[["class","ql-size"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n"])),(l()(),u._8(102,0,null,null,0,"button",[["class","ql-bold"],["data-flow","bottom"],["data-tooltip","Bold"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n"])),(l()(),u._8(104,0,null,null,0,"button",[["class","ql-italic"],["data-flow","bottom"],["data-tooltip","Italic"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n"])),(l()(),u._8(106,0,null,null,0,"button",[["class","ql-underline"],["data-flow","bottom"],["data-tooltip","Underline"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n"])),(l()(),u._8(108,0,null,null,0,"button",[["class","ql-strike"],["data-flow","bottom"],["data-tooltip","Strike"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n\n"])),(l()(),u._8(110,0,null,null,0,"select",[["class","ql-color"],["data-flow","bottom"],["data-tooltip","Color"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n"])),(l()(),u._8(112,0,null,null,0,"select",[["class","ql-background"],["data-flow","bottom"],["data-tooltip","Background"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n\n"])),(l()(),u._8(114,0,null,null,0,"button",[["class","ql-script"],["value","sub"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n"])),(l()(),u._8(116,0,null,null,0,"button",[["class","ql-script"],["value","super"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n  "])),(l()(),u._8(118,0,null,null,0,"button",[["class","ql-blockquote"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n"])),(l()(),u._8(120,0,null,null,0,"button",[["class","ql-code-block"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n\n"])),(l()(),u._8(122,0,null,null,0,"button",[["class","ql-list"],["data-flow","bottom"],["data-tooltip","Ordered list"],["value","ordered"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n"])),(l()(),u._8(124,0,null,null,0,"button",[["class","ql-list"],["data-flow","bottom"],["data-tooltip","Unordered list"],["value","bullet"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n"])),(l()(),u._8(126,0,null,null,0,"button",[["class","ql-indent"],["value","-1"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n"])),(l()(),u._8(128,0,null,null,0,"button",[["class","ql-indent"],["value","+1"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n\n"])),(l()(),u._8(130,0,null,null,0,"button",[["class","ql-direction"],["data-flow","bottom"],["data-tooltip","Direction"],["value","rtl"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n"])),(l()(),u._8(132,0,null,null,0,"select",[["class","ql-align"],["data-flow","bottom"],["data-tooltip","Align"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n\n"])),(l()(),u._8(134,0,null,null,0,"button",[["class","ql-image"],["data-flow","bottom"],["data-tooltip","Image"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n"])),(l()(),u._8(136,0,null,null,0,"button",[["class","ql-video"],["data-flow","bottom"],["data-tooltip","Video"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n"])),(l()(),u._8(138,0,null,null,0,"button",[["class","ql-formula"],["data-flow","bottom"],["data-tooltip","Formula"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n\n"])),(l()(),u._8(140,0,null,null,0,"button",[["class","ql-clean"],["data-flow","bottom"],["data-tooltip","Clean"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n"])),(l()(),u._24(-1,null,["\n\n    "])),(l()(),u._8(143,0,null,null,49,"span",[["class","col-4"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n"])),(l()(),u._8(145,0,null,null,0,"button",[["class","ql-header"],["value","1"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n"])),(l()(),u._8(147,0,null,null,0,"button",[["class","ql-header"],["value","2"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n      "])),(l()(),u._8(149,0,null,null,36,"select",[["class","ql-header"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n        "])),(l()(),u._8(151,0,null,null,3,"option",[["value","1"]],null,null,null,null,null)),u._6(152,147456,null,0,s.k,[u.k,u.G,[8,null]],{value:[0,"value"]},null),u._6(153,147456,null,0,s.p,[u.k,u.G,[8,null]],{value:[0,"value"]},null),(l()(),u._24(-1,null,["Heading 1"])),(l()(),u._24(-1,null,["\n        "])),(l()(),u._8(156,0,null,null,3,"option",[["value","2"]],null,null,null,null,null)),u._6(157,147456,null,0,s.k,[u.k,u.G,[8,null]],{value:[0,"value"]},null),u._6(158,147456,null,0,s.p,[u.k,u.G,[8,null]],{value:[0,"value"]},null),(l()(),u._24(-1,null,["Heading 2"])),(l()(),u._24(-1,null,["\n        "])),(l()(),u._8(161,0,null,null,3,"option",[["value","3"]],null,null,null,null,null)),u._6(162,147456,null,0,s.k,[u.k,u.G,[8,null]],{value:[0,"value"]},null),u._6(163,147456,null,0,s.p,[u.k,u.G,[8,null]],{value:[0,"value"]},null),(l()(),u._24(-1,null,["Heading 3"])),(l()(),u._24(-1,null,["\n        "])),(l()(),u._8(166,0,null,null,3,"option",[["value","4"]],null,null,null,null,null)),u._6(167,147456,null,0,s.k,[u.k,u.G,[8,null]],{value:[0,"value"]},null),u._6(168,147456,null,0,s.p,[u.k,u.G,[8,null]],{value:[0,"value"]},null),(l()(),u._24(-1,null,["Heading 4"])),(l()(),u._24(-1,null,["\n        "])),(l()(),u._8(171,0,null,null,3,"option",[["value","5"]],null,null,null,null,null)),u._6(172,147456,null,0,s.k,[u.k,u.G,[8,null]],{value:[0,"value"]},null),u._6(173,147456,null,0,s.p,[u.k,u.G,[8,null]],{value:[0,"value"]},null),(l()(),u._24(-1,null,["Heading 5"])),(l()(),u._24(-1,null,["\n        "])),(l()(),u._8(176,0,null,null,3,"option",[["value","6"]],null,null,null,null,null)),u._6(177,147456,null,0,s.k,[u.k,u.G,[8,null]],{value:[0,"value"]},null),u._6(178,147456,null,0,s.p,[u.k,u.G,[8,null]],{value:[0,"value"]},null),(l()(),u._24(-1,null,["Heading 6"])),(l()(),u._24(-1,null,["\n        "])),(l()(),u._8(181,0,null,null,3,"option",[["value",""]],null,null,null,null,null)),u._6(182,147456,null,0,s.k,[u.k,u.G,[8,null]],{value:[0,"value"]},null),u._6(183,147456,null,0,s.p,[u.k,u.G,[8,null]],{value:[0,"value"]},null),(l()(),u._24(-1,null,["Normal"])),(l()(),u._24(-1,null,["\n      "])),(l()(),u._24(-1,null,["\n"])),(l()(),u._8(187,0,null,null,0,"button",[["class","ql-link"]],null,null,null,null,null)),(l()(),u._24(-1,null,["\n\n      "])),(l()(),u._24(-1,null,["\n\n      "])),(l()(),u._24(-1,null,["\n      "])),(l()(),u._24(-1,null,["\n      "])),(l()(),u._24(-1,null,["\n\n"])),(l()(),u._24(-1,null,["\n  "])),(l()(),u._24(-1,null,["\n  "])),(l()(),u._8(195,0,null,null,0,"div",[["id","editor"]],null,[[null,"click"]],function(l,n,t){var e=!0,u=l.component;"click"===n&&(e=!1!==u.removeHighlight()&&e);return e},null,null)),(l()(),u._24(-1,null,["\n\n\n"])),(l()(),u._24(-1,null,["\n"]))],function(l,n){var t=n.component;l(n,8,0,t.selected_lang),l(n,13,0,t.items);l(n,29,0,"search",t.searchInput),l(n,34,0,l(n,35,0,null==t.searchInput||""==t.searchInput));l(n,40,0,"search_count",l(n,41,0,-1==t.searchCount)),l(n,56,0,l(n,57,0,"TEXT"==t.activeTab)),l(n,59,0,l(n,60,0,"TEXT"==t.activeTab)),l(n,65,0,l(n,66,0,"HTML"==t.activeTab)),l(n,68,0,l(n,69,0,"HTML"==t.activeTab));l(n,86,0,"parent",l(n,87,0,"HTML"==t.activeTab));l(n,152,0,"1");l(n,153,0,"1");l(n,157,0,"2");l(n,158,0,"2");l(n,162,0,"3");l(n,163,0,"3");l(n,167,0,"4");l(n,168,0,"4");l(n,172,0,"5");l(n,173,0,"5");l(n,177,0,"6");l(n,178,0,"6");l(n,182,0,"");l(n,183,0,"")},function(l,n){var t=n.component;l(n,5,0,u._20(n,10).ngClassUntouched,u._20(n,10).ngClassTouched,u._20(n,10).ngClassPristine,u._20(n,10).ngClassDirty,u._20(n,10).ngClassValid,u._20(n,10).ngClassInvalid,u._20(n,10).ngClassPending),l(n,17,0,u._20(n,21).ngClassUntouched,u._20(n,21).ngClassTouched,u._20(n,21).ngClassPristine,u._20(n,21).ngClassDirty,u._20(n,21).ngClassValid,u._20(n,21).ngClassInvalid,u._20(n,21).ngClassPending),l(n,26,0,u._20(n,31).ngClassUntouched,u._20(n,31).ngClassTouched,u._20(n,31).ngClassPristine,u._20(n,31).ngClassDirty,u._20(n,31).ngClassValid,u._20(n,31).ngClassInvalid,u._20(n,31).ngClassPending),l(n,42,0,t.searchCount)})}var h=u._3("app-root",r,function(l){return u._25(0,[(l()(),u._8(0,0,null,null,1,"app-root",[],null,null,null,g,p)),u._6(1,114688,null,0,r,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),f=t("Qbdm"),b=t("Fzro"),m=t("fBew"),v=u._4(o,[r],function(l){return u._18([u._19(512,u.i,u._0,[[8,[h]],[3,u.i],u.x]),u._19(5120,u.v,u._17,[[3,u.v]]),u._19(4608,c.f,c.e,[u.v]),u._19(4608,u.h,u.h,[]),u._19(5120,u.a,u._9,[]),u._19(5120,u.t,u._14,[]),u._19(5120,u.u,u._15,[]),u._19(4608,f.b,f.s,[c.b]),u._19(6144,u.J,null,[f.b]),u._19(4608,f.e,f.f,[]),u._19(5120,f.c,function(l,n,t,e){return[new f.k(l),new f.o(n),new f.n(t,e)]},[c.b,c.b,c.b,f.e]),u._19(4608,f.d,f.d,[f.c,u.z]),u._19(135680,f.m,f.m,[c.b]),u._19(4608,f.l,f.l,[f.d,f.m]),u._19(6144,u.H,null,[f.l]),u._19(6144,f.p,null,[f.m]),u._19(4608,u.O,u.O,[u.z]),u._19(4608,f.g,f.g,[c.b]),u._19(4608,f.i,f.i,[c.b]),u._19(4608,s.o,s.o,[]),u._19(4608,b.c,b.c,[]),u._19(4608,b.g,b.b,[]),u._19(5120,b.i,b.j,[]),u._19(4608,b.h,b.h,[b.c,b.g,b.i]),u._19(4608,b.f,b.a,[]),u._19(5120,b.d,b.k,[b.h,b.f]),u._19(512,c.a,c.a,[]),u._19(1024,u.l,f.q,[]),u._19(1024,u.b,function(l,n){return[f.r(l,n)]},[[2,f.h],[2,u.y]]),u._19(512,u.c,u.c,[[2,u.b]]),u._19(131584,u._7,u._7,[u.z,u._1,u.r,u.l,u.i,u.c]),u._19(2048,u.e,null,[u._7]),u._19(512,u.d,u.d,[u.e]),u._19(512,f.a,f.a,[[3,f.a]]),u._19(512,s.m,s.m,[]),u._19(512,s.d,s.d,[]),u._19(512,b.e,b.e,[]),u._19(512,m.a,m.a,[]),u._19(512,o,o,[])])});Object(u.U)(),Object(f.j)().bootstrapModuleFactory(v)}},[0]);