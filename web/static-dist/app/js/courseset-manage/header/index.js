!function(n){var a={};function r(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/static-dist/",r(r.s=624)}({136:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(e,t){$("body").on("click",e,function(e){function n(){cd.confirm({title:Translator.trans(t.title),content:Translator.trans(t.hint),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",function(){$.post(a.data("url"),function(e){e.success?(cd.message({type:"success",message:Translator.trans(t.success),delay:"1000"}),location.reload()):cd.message({type:"danger",message:Translator.trans(t.fail)+":"+e.message,delay:"5000"})})})}var a=$(e.target);a.data("preUrl")?$.post(a.data("preUrl"),function(e){var t;e.success?(t=cd.loading({isFixed:!0}),$("#modal").html(t).modal({backdrop:"static",keyboard:!1}).load(a.data("saveUrl"))):n()}):n()})}},624:function(e,t,n){"use strict";n.r(t);var a=n(136),r=$(".js-origin-header"),s=$(".js-origin-header-content"),o=$(".js-new-header");$(".js-shrink-item").on("click",".js-shrink-courseset",function(e){$(e.currentTarget).addClass("hidden"),r.animate({height:"40px"},function(){s.animate({opacity:"0"},"fast"),o.removeClass("hidden").animate({opacity:"1"},"fast")})}),o.on("click",".js-show-courseset",function(e){$(e.currentTarget);r.animate({height:"122px"},function(){s.animate({opacity:"1"},"fast"),o.animate({opacity:"0"},"fast").addClass("hidden"),$(".js-shrink-courseset").removeClass("hidden")})}),Object(a.a)(".js-courseset-publish-btn",{title:"course_set.manage.publish_title",hint:"course_set.manage.publish_hint",success:"course_set.manage.publish_success_hint",fail:"course_set.manage.publish_fail_hint"})}});