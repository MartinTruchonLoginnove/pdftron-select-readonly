/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[11],{351:function(ha,da,h){h.r(da);var ca=h(3);ha=h(35);var aa=h(303),fa=h(187),ea=window;h=function(){function h(h){var f=this;this.K4=function(e){return e&&("image"===e.type.split("/")[0].toLowerCase()||e.name&&!!e.name.match(/.(jpg|jpeg|png|gif)$/i))};this.file=h;this.U4=new Promise(function(e){return Object(ca.b)(f,void 0,void 0,function(){var f;return Object(ca.d)(this,function(r){switch(r.label){case 0:return this.K4(this.file)?
[4,Object(fa.b)(h)]:[3,2];case 1:f=r.la(),this.file=new File([f],null===h||void 0===h?void 0:h.name,{type:h.type}),r.label=2;case 2:return e(!0),[2]}})})})}h.prototype.getFileData=function(x){var f=this,e=new FileReader;e.onload=function(e){f.trigger(h.Events.DOCUMENT_LOADING_PROGRESS,[e.loaded,e.loaded]);x(new Uint8Array(e.target.result))};e.onprogress=function(e){e.lengthComputable&&f.trigger(h.Events.DOCUMENT_LOADING_PROGRESS,[e.loaded,0<e.total?e.total:0])};e.readAsArrayBuffer(this.file)};h.prototype.getFile=
function(){return Object(ca.b)(this,void 0,Promise,function(){return Object(ca.d)(this,function(h){switch(h.label){case 0:return[4,this.U4];case 1:return h.la(),ea.utils.isJSWorker?[2,this.file.path]:[2,this.file]}})})};h.Events={DOCUMENT_LOADING_PROGRESS:"documentLoadingProgress"};return h}();Object(ha.b)(h);Object(aa.a)(h);Object(aa.b)(h);da["default"]=h}}]);}).call(this || window)