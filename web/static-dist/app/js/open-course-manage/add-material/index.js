!function(s){function t(t){for(var e,n,r=t[0],a=t[1],i=t[2],o=0,l=[];o<r.length;o++)n=r[o],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&l.push(c[n][0]),c[n]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(s[e]=a[e]);for(d&&d(t);l.length;)l.shift()();return f.push.apply(f,i||[]),u()}function u(){for(var t,e=0;e<f.length;e++){for(var n=f[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(f.splice(e--,1),t=o(o.s=n[0]))}return t}var n={},c={217:0},f=[];function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return s[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=s,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],r=e.push.bind(e);e.push=t,e=e.slice();for(var a=0;a<e.length;a++)t(e[a]);var d=r;f.push([796,0]),u()}({17:function(t,e){t.exports=jQuery},796:function(t,e,n){"use strict";n.r(e);var r=n(64),a=n.n(r),i=n(18),o=n.n(i),l=n(0),s=n.n(l),u=n(1),c=n.n(u),f=n(63),d=n(4),v=n(16),m=n(98);new(function(){function t(){s()(this,t),this.$form=$("#course-material-form"),this.initForm(),this.bindEvent(),this.initFileChooser()}return c()(t,[{key:"initForm",value:function(){var t=this,e=this.$form.validate({currentDom:".js-add-file-list",ajax:!0,rules:{link:"url",fileId:"required"},messages:{link:Translator.trans("activity.download_manage.link_error_hint"),fileId:Translator.trans("activity.download_manage.materials_error_hint")},submitHandler:function(t){var e=$(t),n=this.settings,r=$(n.currentDom);r.button("loading"),$.post(e.attr("action"),e.serializeArray()).done(function(t){Object(d.a)("success",Translator.trans("activity.download_manage.materials_or_link_success")),$("#material-list").append(t),r.button("reset"),e.find("#materials").val(""),e.find("#link").val(""),e.find("#verifyLink").val(""),e.find("#media").val(""),e.find("#file-summary").val(""),e.find(".js-current-file").text("")}).fail(function(){r.button("reset"),Object(d.a)("warning",Translator.trans("activity.download_manage.materials_or_link_fail"))})}});$(".js-add-file-list").click(function(){e.form()?t.$form.submit():($("#link").val(""),$("#materials-error").remove(),Object(d.a)("danger",Translator.trans("activity.download_manage.materials_or_link_error_hint")))}),this.$form.data("validator",e)}},{key:"bindEvent",value:function(){var e=this;this.$form.on("click",".js-btn-delete",function(t){return e.deleteItem(t)}),this.$form.on("click",".js-video-import",function(){return e.addLink()})}},{key:"deleteItem",value:function(t){var e=$(t.currentTarget),n=e.closest("li");confirm(Translator.trans("activity.download_manage.materials_or_link_confirm_delete"))&&$.post(e.data("url"),function(){n.remove(),Object(d.a)("success",Translator.trans("activity.download_manage.materials_or_link_delete"))})}},{key:"addLink",value:function(){var t=$("#verifyLink"),e=$("#link").val(),n=$("#materials");this.$form.data("validator").valid()&&e?(n.val(0),t.val(e)):($("#link").val(""),t.val(""),n.val("")),$(".js-current-file").text(t.val())}},{key:"initFileChooser",value:function(){(new f.a).on("select",function(t){var e=$("#media"),n=$("#materials");e.val(o()(t)),Object(m.b)(),$(".js-current-file").text(t.name);var r=Object(v.d)(e.val())?a()(null):JSON.parse(e.val());n.val(r.id)})}}]),t}())}});