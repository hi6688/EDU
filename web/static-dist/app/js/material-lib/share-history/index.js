!function(s){function t(t){for(var e,r,n=t[0],o=t[1],a=t[2],i=0,c=[];i<n.length;i++)r=n[i],Object.prototype.hasOwnProperty.call(u,r)&&u[r]&&c.push(u[r][0]),u[r]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(s[e]=o[e]);for(p&&p(t);c.length;)c.shift()();return f.push.apply(f,a||[]),l()}function l(){for(var t,e=0;e<f.length;e++){for(var r=f[e],n=!0,o=1;o<r.length;o++){var a=r[o];0!==u[a]&&(n=!1)}n&&(f.splice(e--,1),t=i(i.s=r[0]))}return t}var r={},u={195:0},f=[];function i(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return s[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=s,i.c=r,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],n=e.push.bind(e);e.push=t,e=e.slice();for(var o=0;o<e.length;o++)t(e[o]);var p=n;f.push([657,0]),l()}({17:function(t,e){t.exports=jQuery},657:function(t,e,r){"use strict";r.r(e);var n=r(4),o=$("#share-history-table");$(".js-share-tab").on("click",function(){var t=$(this);$.get(t.data("url"),function(t){o.html(t)}),t.parent().addClass("active").siblings().removeClass("active")}),o.on("click",".cancel-share-btn",function(t){var e=$(t.currentTarget),r=$(this);$.post(r.data("url"),{targetUserId:r.attr("targetUserId")},function(t){e.closest(".share-history-record").remove(),Object(n.a)("success",Translator.trans("material.cancel_share.tips"))},"json")}),$(".modal").off("click.modal-pagination"),o.on("click",".pagination li",function(){var t=$(this),e=t.data("page"),r=t.closest(".pagination").data("url");$.get(r,{page:e},function(t){o.html(t)})})}});