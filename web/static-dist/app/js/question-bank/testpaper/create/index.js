!function(c){function t(t){for(var e,i,s=t[0],n=t[1],a=t[2],o=0,r=[];o<s.length;o++)i=s[o],Object.prototype.hasOwnProperty.call(d,i)&&d[i]&&r.push(d[i][0]),d[i]=0;for(e in n)Object.prototype.hasOwnProperty.call(n,e)&&(c[e]=n[e]);for(h&&h(t);r.length;)r.shift()();return u.push.apply(u,a||[]),l()}function l(){for(var t,e=0;e<u.length;e++){for(var i=u[e],s=!0,n=1;n<i.length;n++){var a=i[n];0!==d[a]&&(s=!1)}s&&(u.splice(e--,1),t=o(o.s=i[0]))}return t}var i={},d={280:0},u=[];function o(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return c[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=c,o.c=i,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(i,s,function(t){return e[t]}.bind(null,s));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],s=e.push.bind(e);e.push=t,e=e.slice();for(var n=0;n<e.length;n++)t(e[n]);var h=s;u.push([737,0]),l()}({737:function(t,e,i){"use strict";i.r(e);var s=i(18),n=i.n(s),a=i(11),o=i.n(a),r=i(0),c=i.n(r),l=i(1),d=i.n(l),u=i(144);i(388);new(function(){function e(t){c()(this,e),this.$form=t,this.$description=this.$form.find('[name="description"]'),this.$questionForm=$("#testpaper-items-manager"),this.validator=null,this.difficultySlider=null,this.scoreSlider=null,this.$scoreModal=$(".js-score-modal"),this.$modal=$("#testpaper-confirm-modal"),this.sections=[],this.questionsCount=0,this.$typeNav=this.$form.find("#testpaper-question-nav"),new u.a(this.$questionForm),this._initEvent(),this._initValidate(),this._initScoreValidator(),this._initTypeSort()}return d()(e,[{key:"_initEvent",value:function(){var i=this;this.$form.on("click",".js-request-save",function(t){return i._confirmSave(t)}),this.$modal.on("click",".js-confirm-submit",function(t){return i._submitSave(t)}),this.$typeNav.on("click","li",function(t){return i._changeNav(t)}),this.$form.on("click",'[data-role="item-delete-btn"]',function(t){return i.deleteQuestion(t)}),this.$form.on("click",'[data-role="batch-delete-btn"]',function(t){return i.batchDelete(t)}),this.$form.on("click",'[data-role="set-score-btn"]',function(t){return i.showScoreModal(t)}),this.$form.on("click",".js-pick-modal",function(t){return i.showPickModal(t)}),this.$form.on("lengthChange",'[data-role="question-body"]',function(t){return i.changeQuestionCount(t)}),this.$scoreModal.on("click",".js-batch-score-confirm",function(t){return i.batchSetScore(t)}),$(".modal").on("selectQuestion",function(t,e){return i.selectQuestion(t,e)}),this.initSortList()}},{key:"_confirmSave",value:function(){var t,s,e=this._validateScore();this.validator.form()&&e&&(this.questionsCount=0,this.questions=[],this.sections=[],t=this._calTestpaperStats(),s="",$.each(t,function(t,e){var i="<tr>";i+="<td>".concat(e.name,"</td>"),i+="<td>".concat(e.count,"</td>"),i+="<td>".concat(e.score.toFixed(1),"</td>"),s+=i+="</tr>"}),this.$modal.find(".detail-tbody").html(s),this.$modal.modal("show"))}},{key:"_calTestpaperStats",value:function(){var r={},c=this,e=1;this.$typeNav.find("li").each(function(){var n=$(this).find("a").data("type"),t=$(this).find("a").data("name"),a=1,o=[];r[n]={name:t,count:0,score:0,missScore:0},c.$questionForm.find("#testpaper-table-"+n).find(".js-item").each(function(){var t,e=$(this).data("type"),i={id:$(this).data("id"),seq:a++},s=[];"material"==e?$(this).nextUntil(".js-item").each(function(){var t=c.getItemQuestion(this);s.push(t),r[n].count++,r[n].score+=t.score}):(t=c.getItemQuestion(this),s.push(t),r[n].score+=t.score,r[n].count++),i.questions=s,o.push(i)}),0<o.length&&c.sections.push({name:t,seq:e++,items:o})});var i={name:Translator.trans("activity.testpaper_manage.question_total_score"),count:0,score:0};return $.each(r,function(t,e){i.count+=e.count,i.score+=e.score}),r.total=i,c.questionsCount=i.count,r}},{key:"getItemQuestion",value:function(t){var e=o()($(t).find(".js-question-score").attr("data-score")),i={id:$(t).data("questionId"),score:e};return 0<$(t).find(".js-miss-score").length&&(i.miss_score=o()($(t).find(".js-miss-score").data("missScore"))),i}},{key:"_validateScore",value:function(){var i=!0;return 0===this.$form.find(".js-question-score").length&&(cd.message({type:"danger",message:Translator.trans("activity.testpaper_manage.question_required_error_hint")}),i=!1),this.$form.find(".js-question-score").each(function(){var t=$(this).closest("tr").data("type"),e=$(this).data("score");"0"==e&&"material"!==t&&(cd.message({type:"danger",message:Translator.trans("activity.testpaper_manage.question_score_empty_hint")}),i=!1),/^(([1-9]{1}\d{0,2})|([0]{1}))(\.(\d){1})?$/.test(e)||"material"===t||(cd.message({type:"danger",message:Translator.trans("activity.testpaper_manage.question_score_error_hint")}),i=!1)}),i}},{key:"_changeNav",value:function(t){var e=$(t.currentTarget),i=e.children().data("type");this.currentType=i,this.$typeNav.find("li").removeClass("active"),e.addClass("active"),this.$form.find(".js-question-table").addClass("hide"),this.$form.find("#testpaper-table-"+i).removeClass("hide"),this.$form.find('[data-role="batch-select"]').prop("checked",!1),this.$form.find('[data-role="batch-item"]').prop("checked",!1)}},{key:"deleteQuestion",value:function(t){t.stopPropagation();var e=$(t.currentTarget),i=e.closest("tr").data("id"),s=e.closest("tbody");s.find('[data-id="'+i+'"]').remove(),e.closest("tr").remove(),s.trigger("lengthChange"),this.refreshSeqs(s.data("type"))}},{key:"batchDelete",value:function(t){var e=$(t.currentTarget).parents(".js-question-table").find("tbody"),i=this;this.$form.find('[data-role="batch-item"]:checked').each(function(){var t=$(this).val();"material"===$(this).closest("tr").data("type")&&i.$form.find('[data-parent-id="'+t+'"]').remove(),$(this).closest("tr").remove()}),e.trigger("lengthChange")}},{key:"showScoreModal",value:function(){var e,i,t=this.$form.find('[data-role="batch-item"]:checked');0<t.length&&(e=this,i=["choice","uncertain_choice","material"],t.each(function(){var t=e.$scoreModal.find(".js-miss-score-field");-1!==$.inArray($(this).closest("tr").data("type"),i)?t.removeClass("hidden"):t.addClass("hidden")}),this.$scoreModal.modal("show"))}},{key:"batchSetScore",value:function(){var t,e,i,s;this.scoreValidator.form()&&(t=this.$scoreModal.find('input[name="score"]'),e=this.$scoreModal.find('input[name="missScore"]'),i={score:o()(t.val()),missScore:""==e.val()?0:o()(e.val())},(s=this).$form.find('[data-role="batch-item"]:checked').each(function(){s.setScore($(this).parents("tr"),i)}),cd.message({type:"success",message:Translator.trans("subject.score_update_success")}),this.$scoreModal.modal("hide"),t.val(""),e.val(""))}},{key:"setScore",value:function(t,e){var i,s=t.find(".js-question-score");s.text(e.score),s.attr("data-score",e.score),0<t.find(".js-miss-score").length&&((i=t.find(".js-miss-score")).text(e.missScore),i.attr("data-miss-score",e.missScore))}},{key:"refreshSeqs",value:function(t){var s=1,e=this.$form.find("#testpaper-table-"+t);e.find("tbody tr").each(function(t,e){var i=$(e);i.hasClass("is-sub-question")||(i.find("td.seq").html(s),s++)}),e.find('[name="questionLength"]').val(0<s-1?s-1:null)}},{key:"changeQuestionCount",value:function(t){var e=$(t.currentTarget),i=e.data("type"),s=0,s="material"===i?e.find("tr.is-sub-question").length:e.find("tr").length;$(".js-count-"+i).html("("+s+")")}},{key:"showPickModal",value:function(t){var e=[],i=$(t.currentTarget);this.$form.find('[name="itemIds[]"]').each(function(){e.push($(this).val())});var s=$("#modal").modal();$.get(i.data("url"),{exclude_ids:e.join(",")},function(t){s.html(t)})}},{key:"selectQuestion",value:function(t,e){var i=this.$form.find(".js-pick-modal").data("pickUrl"),s=this;$.post(i,{typeQuestions:e},function(t){t&&$.each(t,function(t,e){var i=s.$questionForm.find("#testpaper-table-"+t).find(".testpaper-table-tbody");i.append(e),i.trigger("lengthChange"),s.refreshSeqs(t)})})}},{key:"_initEditor",value:function(t){var e,i=this;0<this.$description.length&&((e=CKEDITOR.replace(this.$description.attr("id"),{toolbar:"Simple",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:this.$description.data("imageUploadUrl"),height:100})).on("change",function(){i.$description.val(e.getData())}),e.on("blur",function(){i.$description.val(e.getData()),t.form()}))}},{key:"_initValidate",value:function(){this.validator=this.$form.validate({rules:{name:{required:!0,maxlength:50,trim:!0},description:{maxlength:500,trim:!0}},messages:{name:{required:Translator.trans("activity.testpaper_manage.input_title_hint"),maxlength:Translator.trans("site.maxlength_hint",{length:50})},description:{required:Translator.trans("activity.testpaper_manage.input_description_hint"),maxlength:Translator.trans("site.maxlength_hint",{length:500})}}}),this._initEditor(this.validator)}},{key:"_initScoreValidator",value:function(){this.scoreValidator=$("#batch-set-score-form").validate({onkeyup:!1,rules:{score:{required:!0,max:999,min:0,es_score:!0},missScore:{required:!1,max:999,min:0,noMoreThan:"#score",es_score:!0}},messages:{missScore:{noMoreThan:Translator.trans("subject.miss_score_no_more_than_score")}}}),$.validator.addMethod("noMoreThan",function(t,e,i){return""==t||o()(t)<=o()($(i).val())},"Please enter a lesser value.")}},{key:"_submitSave",value:function(t){var e,i,s=$(t.currentTarget);2e3<this.questionsCount?cd.message({type:"danger",message:Translator.trans("activity.testpaper_manage.questions_length_hint")}):(s.button("loading").addClass("disabled"),e={name:this.$form.find("#name-field").val(),description:this.$form.find("#description-field").val()},i=n()(this.sections),$.post(this.$form.data("url"),{baseInfo:e,sections:i},function(t){t.goto&&(window.location.href=t.goto)}))}},{key:"_initTypeSort",value:function(){var a;$("#testpaper-question-nav").sortable({handle:".js-move-icon",itemSelector:".question-type-table",placeholder:'<li class="question-type-table question-type-placehoder"></li>',onDrop:function(t){t.removeClass("dragged").removeAttr("style"),$("body").removeClass("dragging")},onDragStart:function(t,e,i){var s=t.offset(),n=e.rootGroup.pointer;a={left:n.left-s.left,top:n.top-s.top},i(t,e)},onDrag:function(t,e){var i=t.height(),s=t.width();t.css({left:e.left-a.left,top:e.top-a.top}),$(".question-type-placehoder").css({height:i,width:s})}})}},{key:"initSortList",value:function(){var a,n=this,t=this.$form.find("tbody"),e=t.hasClass("js-homework-table")?"":"<td></td>",i='<tr class="question-placehoder js-placehoder"><td></td><td></td><td></td><td></td><td></td><td></td><td></td>'.concat(e,"</tr>");t.sortable({containerPath:"> tr",containerSelector:"tbody",itemSelector:"tr.is-question",placeholder:i,exclude:".notMoveHandle",onDragStart:function(t,e,i){t.hasClass("have-sub-questions")||$(".js-have-sub").removeClass("is-question");var s=t.offset(),n=e.rootGroup.pointer;a={left:n.left-s.left,top:n.top-s.top},i(t,e)},onDrag:function(t,e){var i=t.height();t.css({left:e.left-a.left,top:e.top-a.top}),$(".js-placehoder").css({height:i})},onDrop:function(t,e,i){var s;i(t,e),t.hasClass("have-sub-questions")?(s=t.parents("tbody")).find("tr.is-question").each(function(){var t=$(this);s.find("[data-id="+t.data("id")+"].is-sub-question").detach().insertAfter(t)}):$(".js-have-sub").addClass("is-question"),n.refreshSeqs(t.data("type"))}})}}]),e}())($("#testpaper-form"))}});