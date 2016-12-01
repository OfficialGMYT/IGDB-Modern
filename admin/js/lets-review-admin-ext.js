/** jquery.onoff - v0.4.0 - 2014-10-30
* https://github.com/timmywil/jquery.onoff
* Copyright (c) 2014 Timmy Willison; Licensed MIT */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?b(require("jquery")):b(a.jQuery)}(this,function(a){"use strict";function b(c,d){if(!(this instanceof b))return new b(c,d);if("input"!==c.nodeName.toLowerCase()||"checkbox"!==c.type)return a.error("OnOff should be called on checkboxes");var e=a.data(c,b.datakey);return e?e:(this.options=d=a.extend({},b.defaults,d),this.elem=c,this.$elem=a(c).addClass(d.className),this.$doc=a(c.ownerDocument||document),d.namespace+=a.guid++,c.id||(c.id="onoffswitch"+g++),this.enable(),a.data(c,b.datakey,this),void 0)}var c="over out down up move enter leave cancel".split(" "),d=a.extend({},a.event.mouseHooks),e={};if(window.PointerEvent)a.each(c,function(b,c){a.event.fixHooks[e[c]="pointer"+c]=d});else{var f=d.props;d.props=f.concat(["touches","changedTouches","targetTouches","altKey","ctrlKey","metaKey","shiftKey"]),d.filter=function(a,b){var c,d=f.length;if(!b.pageX&&b.touches&&(c=b.touches[0]))for(;d--;)a[f[d]]=c[f[d]];return a},a.each(c,function(b,c){if(2>b)e[c]="mouse"+c;else{var f="touch"+("down"===c?"start":"up"===c?"end":c);a.event.fixHooks[f]=d,e[c]=f+" mouse"+c}})}a.pointertouch=e;var g=1,h=Array.prototype.slice;return b.datakey="_onoff",b.defaults={namespace:".onoff",className:"onoffswitch-checkbox"},b.prototype={constructor:b,instance:function(){return this},wrap:function(){var b=this.elem,c=this.$elem,d=this.options,e=c.parent(".onoffswitch");e.length||(c.wrap('<div class="onoffswitch"></div>'),e=c.parent().addClass(b.className.replace(d.className,""))),this.$con=e;var f=c.next('label[for="'+b.id+'"]');f.length||(f=a("<label/>").attr("for",b.id).insertAfter(b)),this.$label=f.addClass("onoffswitch-label");var g=f.find(".onoffswitch-inner");g.length||(g=a("<span/>").addClass("onoffswitch-inner").prependTo(f)),this.$inner=g;var h=f.find(".onoffswitch-switch");h.length||(h=a("<span/>").addClass("onoffswitch-switch").appendTo(f)),this.$switch=h},_handleMove:function(a){if(!this.disabled){this.moved=!0,this.lastX=a.pageX;var b=Math.max(Math.min(this.startX-this.lastX,this.maxRight),0);this.$switch.css("right",b),this.$inner.css("marginLeft",100*-(b/this.maxRight)+"%")}},_startMove:function(b){b.preventDefault();var c,d;"pointerdown"===b.type?(c="pointermove",d="pointerup"):"touchstart"===b.type?(c="touchmove",d="touchend"):(c="mousemove",d="mouseup");var e=this.elem,f=this.$elem,g=this.options.namespace,h=this.$switch,i=h[0],j=this.$inner.add(h).css("transition","none");this.maxRight=this.$con.width()-h.width()-a.css(i,"margin-left",!0)-a.css(i,"margin-right",!0)-a.css(i,"border-left-width",!0)-a.css(i,"border-right-width",!0);var k=e.checked;this.moved=!1,this.startX=b.pageX+(k?0:this.maxRight);var l=this,m=this.$doc.on(c+g,a.proxy(this._handleMove,this)).on(d+g,function(){j.css("transition",""),m.off(g),setTimeout(function(){if(l.moved){var a=l.lastX>l.startX-l.maxRight/2;e.checked!==a&&(e.checked=a,f.trigger("change"))}l.$switch.css("right",""),l.$inner.css("marginLeft","")})})},_bind:function(){this._unbind(),this.$switch.on(a.click,a.proxy(this._startMove,this))},enable:function(){this.wrap(),this._bind(),this.disabled=!1},_unbind:function(){this.$doc.add(this.$switch).off(this.options.namespace)},disable:function(){this.disabled=!0,this._unbind()},unwrap:function(){this.disable(),this.$label.remove(),this.$elem.unwrap().removeClass(this.options.className)},isDisabled:function(){return this.disabled},destroy:function(){this.disable(),a.removeData(this.elem,b.datakey)},option:function(b,c){var d,e=this.options;if(!b)return a.extend({},e);if("string"==typeof b){if(1===arguments.length)return void 0!==e[b]?e[b]:null;d={},d[b]=c}else d=b;a.each(d,a.proxy(function(a,b){switch(a){case"namespace":this._unbind();break;case"className":this.$elem.removeClass(e.className)}switch(e[a]=b,a){case"namespace":this._bind();break;case"className":this.$elem.addClass(b)}},this))}},a.fn.onoff=function(c){var d,e,f,g;return"string"==typeof c?(g=[],e=h.call(arguments,1),this.each(function(){d=a.data(this,b.datakey),d?"_"!==c.charAt(0)&&"function"==typeof(f=d[c])&&void 0!==(f=f.apply(d,e))&&g.push(f):g.push(void 0)}),g.length?1===g.length?g[0]:g:this):this.each(function(){new b(this,c)})},a.OnOff=b});
/*!
 * Farbtastic: jQuery color picker plug-in v1.3u
 *
 * Licensed under the GPL license:
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(e){e.fn.farbtastic=function(f){e.farbtastic(this,f);return this};e.farbtastic=function(f,l){f=e(f).get(0);return f.farbtastic||(f.farbtastic=new e._farbtastic(f,l))};e._farbtastic=function(f,l){var a=this;e(f).html('<div class="farbtastic"><div class="color"></div><div class="wheel"></div><div class="overlay"></div><div class="h-marker marker"></div><div class="sl-marker marker"></div></div>');var k=e(".farbtastic",f);a.wheel=e(".wheel",f).get(0);a.radius=84;a.square=100;a.width=194;navigator.appVersion.match(/MSIE [0-6]\./)&&
e("*",k).each(function(){if(this.currentStyle.backgroundImage!="none"){var b=this.currentStyle.backgroundImage;b=this.currentStyle.backgroundImage.substring(5,b.length-2);e(this).css({backgroundImage:"none",filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='"+b+"')"})}});a.linkTo=function(b){typeof a.callback=="object"&&e(a.callback).unbind("keyup",a.updateValue);a.color=null;if(typeof b=="function")a.callback=b;else if(typeof b=="object"||typeof b=="string"){a.callback=
e(b);a.callback.bind("keyup",a.updateValue);a.callback.get(0).value&&a.setColor(a.callback.get(0).value)}return this};a.updateValue=function(){this.value&&this.value!=a.color&&a.setColor(this.value)};a.setColor=function(b){var c=a.unpack(b);if(a.color!=b&&c){a.color=b;a.rgb=c;a.hsl=a.RGBToHSL(a.rgb);a.updateDisplay()}return this};a.setHSL=function(b){a.hsl=b;a.rgb=a.HSLToRGB(b);a.color=a.pack(a.rgb);a.updateDisplay();return this};a.widgetCoords=function(b){var c=e(a.wheel).offset();return{x:b.pageX-
c.left-a.width/2,y:b.pageY-c.top-a.width/2}};a.mousedown=function(b){if(!document.dragging){e(document).bind("mousemove",a.mousemove).bind("mouseup",a.mouseup);document.dragging=true}var c=a.widgetCoords(b);a.circleDrag=Math.max(Math.abs(c.x),Math.abs(c.y))*2>a.square;a.mousemove(b);return false};a.mousemove=function(b){var c=a.widgetCoords(b);if(a.circleDrag){b=Math.atan2(c.x,-c.y)/6.28;if(b<0)b+=1;a.setHSL([b,a.hsl[1],a.hsl[2]])}else{b=Math.max(0,Math.min(1,-(c.x/a.square)+0.5));c=Math.max(0,Math.min(1,
-(c.y/a.square)+0.5));a.setHSL([a.hsl[0],b,c])}return false};a.mouseup=function(){e(document).unbind("mousemove",a.mousemove);e(document).unbind("mouseup",a.mouseup);document.dragging=false};a.updateDisplay=function(){var b=a.hsl[0]*6.28;e(".h-marker",k).css({left:Math.round(Math.sin(b)*a.radius+a.width/2)+"px",top:Math.round(-Math.cos(b)*a.radius+a.width/2)+"px"});e(".sl-marker",k).css({left:Math.round(a.square*(0.5-a.hsl[1])+a.width/2)+"px",top:Math.round(a.square*(0.5-a.hsl[2])+a.width/2)+"px"});
e(".color",k).css("backgroundColor",a.pack(a.HSLToRGB([a.hsl[0],1,0.5])));if(typeof a.callback=="object"){e(a.callback).css({backgroundColor:a.color,color:a.hsl[2]>0.5?"#000":"#fff"});e(a.callback).each(function(){if(this.value&&this.value!=a.color)this.value=a.color})}else typeof a.callback=="function"&&a.callback.call(a,a.color)};a.pack=function(b){var c=Math.round(b[0]*255),d=Math.round(b[1]*255);b=Math.round(b[2]*255);return"#"+(c<16?"0":"")+c.toString(16)+(d<16?"0":"")+d.toString(16)+(b<16?"0":
"")+b.toString(16)};a.unpack=function(b){if(b.length==7)return[parseInt("0x"+b.substring(1,3))/255,parseInt("0x"+b.substring(3,5))/255,parseInt("0x"+b.substring(5,7))/255];else if(b.length==4)return[parseInt("0x"+b.substring(1,2))/15,parseInt("0x"+b.substring(2,3))/15,parseInt("0x"+b.substring(3,4))/15]};a.HSLToRGB=function(b){var c,d=b[0];c=b[1];b=b[2];c=b<=0.5?b*(c+1):b+c-b*c;b=b*2-c;return[this.hueToRGB(b,c,d+0.33333),this.hueToRGB(b,c,d),this.hueToRGB(b,c,d-0.33333)]};a.hueToRGB=function(b,c,
d){d=d<0?d+1:d>1?d-1:d;if(d*6<1)return b+(c-b)*d*6;if(d*2<1)return c;if(d*3<2)return b+(c-b)*(0.66666-d)*6;return b};a.RGBToHSL=function(b){var c,d,m,g,h=b[0],i=b[1],j=b[2];c=Math.min(h,Math.min(i,j));b=Math.max(h,Math.max(i,j));d=b-c;g=(c+b)/2;m=0;if(g>0&&g<1)m=d/(g<0.5?2*g:2-2*g);c=0;if(d>0){if(b==h&&b!=i)c+=(i-j)/d;if(b==i&&b!=j)c+=2+(j-h)/d;if(b==j&&b!=h)c+=4+(h-i)/d;c/=6}return[c,m,g]};e("*",k).mousedown(a.mousedown);a.setColor("#000000");l&&a.linkTo(l)}})(jQuery);
/*
 * SOL - Searchable Option List jQuery plugin
 * Version 2.0.2
 * https://pbauerochse.github.io/searchable-option-list/
 *
 * Copyright 2015, Patrick Bauerochse
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 *
 */

/*jslint nomen: true */
(function(c,k,m){var l=function(a,b){this.$originalElement=a;this.options=b;this.metadata=this.$originalElement.data("sol-options")};l.prototype={SOL_OPTION_FORMAT:{type:"option",value:void 0,selected:!1,disabled:!1,label:void 0,tooltip:void 0,cssClass:""},SOL_OPTIONGROUP_FORMAT:{type:"optiongroup",label:void 0,tooltip:void 0,disabled:!1,children:void 0},DATA_KEY:"sol-element",WINDOW_EVENTS_KEY:"sol-window-events",defaults:{data:void 0,name:void 0,texts:{noItemsAvailable:"No entries found",selectAll:"Select all", selectNone:"Select none",quickDelete:"&times;",searchplaceholder:"Click here to search",loadingData:"Still loading data...",itemsSelected:"{$a} items selected"},events:{onInitialized:void 0,onRendered:void 0,onOpen:void 0,onClose:void 0,onChange:void 0,onScroll:function(){var a=this.$input.offset().top-this.config.scrollTarget.scrollTop()+this.$input.outerHeight(!1),b=this.$selectionContainer.outerHeight(!1),c=a+b,c=this.config.displayContainerAboveInput||m.documentElement.clientHeight-this.config.scrollTarget.scrollTop()< c,e=this.$innerContainer.outerWidth(!1)-parseInt(this.$selectionContainer.css("border-left-width"),10)-parseInt(this.$selectionContainer.css("border-right-width"),10);c?(a=this.$input.offset().top-b-this.config.scrollTarget.scrollTop()+parseInt(this.$selectionContainer.css("border-bottom-width"),10),this.$container.removeClass("sol-selection-bottom").addClass("sol-selection-top")):this.$container.removeClass("sol-selection-top").addClass("sol-selection-bottom");"block"!==this.$innerContainer.css("display")? e*=1.2:(b=c?"border-bottom-right-radius":"border-top-right-radius",this.$selectionContainer.css(b,"initial"),this.$actionButtons&&this.$actionButtons.css(b,"initial"));this.$selectionContainer.css("top",Math.floor(a)).css("left",Math.floor(this.$container.offset().left)).css("width",e);this.config.displayContainerAboveInput=c}},selectAllMaxItemsThreshold:30,showSelectAll:function(){return this.config.multiple&&this.config.selectAllMaxItemsThreshold&&this.items&&this.items.length<=this.config.selectAllMaxItemsThreshold}, useBracketParameters:!1,multiple:void 0,showSelectionBelowList:!1,allowNullSelection:!1,scrollTarget:void 0,maxHeight:void 0,converter:void 0,asyncBatchSize:300,maxShow:0},init:function(){this.config=c.extend(!0,{},this.defaults,this.options,this.metadata);var a=this._getNameAttribute(),b=this;if(a)return"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),this.config.multiple=this.config.multiple||this.$originalElement.attr("multiple"), this.config.scrollTarget||(this.config.scrollTarget=c(k)),this._registerWindowEventsIfNeccessary(),this._initializeUiElements(),this._initializeInputEvents(),setTimeout(function(){b._initializeData();b.$originalElement.data(b.DATA_KEY,b).removeAttr("name").data("sol-name",a)},0),this.$originalElement.hide(),this.$container.css("visibility","initial").show(),this;this._showErrorLabel("name attribute is required")},_getNameAttribute:function(){return this.config.name||this.$originalElement.data("sol-name")|| this.$originalElement.attr("name")},_showErrorLabel:function(a){a=c('<div style="color: red; font-weight: bold;" />').html(a);this.$container?this.$container.append(a):a.insertAfter(this.$originalElement)},_registerWindowEventsIfNeccessary:function(){k[this.WINDOW_EVENTS_KEY]||(c(m).click(function(a){var b=c(a.target);a=b.closest(".sol-selection-container");var b=b.closest(".sol-inner-container"),d;b.length?d=b.first().parent(".sol-container"):a.length&&(d=a.first().parent(".sol-container"));c(".sol-active").not(d).each(function(a, b){c(b).data(l.prototype.DATA_KEY).close()})}),k[this.WINDOW_EVENTS_KEY]=!0)},_initializeUiElements:function(){var a=this;this.internalScrollWrapper=function(){c.isFunction(a.config.events.onScroll)&&a.config.events.onScroll.call(a)};this.$input=c('<input type="text"/>').attr("placeholder",this.config.texts.searchplaceholder);this.$noResultsItem=c('<div class="sol-no-results"/>').html(this.config.texts.noItemsAvailable).hide();this.$loadingData=c('<div class="sol-loading-data"/>').html(this.config.texts.loadingData); this.$xItemsSelected=c('<div class="sol-results-count"/>');this.$caret=c('<div class="sol-caret-container"><b class="sol-caret"/></div>').click(function(b){a.toggle();b.preventDefault();return!1});var b=c('<div class="sol-input-container"/>').append(this.$input);this.$innerContainer=c('<div class="sol-inner-container"/>').append(b).append(this.$caret);this.$selection=c('<div class="sol-selection"/>');this.$selectionContainer=c('<div class="sol-selection-container"/>').append(this.$noResultsItem).append(this.$loadingData).append(this.$selection); this.$container=c('<div class="sol-container"/>').hide().data(this.DATA_KEY,this).append(this.$selectionContainer).append(this.$innerContainer).insertBefore(this.$originalElement);this.$showSelectionContainer=c('<div class="sol-current-selection"/>');this.config.showSelectionBelowList?this.$showSelectionContainer.insertAfter(this.$innerContainer):this.$showSelectionContainer.insertBefore(this.$innerContainer);this.config.maxHeight&&this.$selection.css("max-height",this.config.maxHeight);var d=this.$originalElement.attr("class"), b=this.$originalElement.attr("style"),e=[],e=[];if(d&&0<d.length)for(e=d.split(/\s+/),d=0;d<e.length;d++)this.$container.addClass(e[d]);if(b&&0<b.length)for(e=b.split(/\;/),d=0;d<e.length;d++)b=e[d].split(/\s*\:\s*/g),2===b.length&&(0<=b[0].toLowerCase().indexOf("height")?this.$innerContainer.css(b[0].trim(),b[1].trim()):this.$container.css(b[0].trim(),b[1].trim()));"block"!==this.$originalElement.css("display")&&this.$container.css("width",this._getActualCssPropertyValue(this.$originalElement,"width")); c.isFunction(this.config.events.onRendered)&&this.config.events.onRendered.call(this,this)},_getActualCssPropertyValue:function(a,b){var c=a.get(0),e=a.css("display");a.css("display","none");if(c.currentStyle)return c.currentStyle[b];if(k.getComputedStyle)return m.defaultView.getComputedStyle(c,null).getPropertyValue(b);a.css("display",e);return a.css(b)},_initializeInputEvents:function(){var a=this,b=this.$input.parents("form").first();if(b&&1===b.length&&!b.data(this.WINDOW_EVENTS_KEY)){var d=function(){var d= [];b.find(".sol-option input").each(function(a,b){var g=c(b),k=g.data("sol-item").selected;g.prop("checked")!==k&&(g.prop("checked",k).trigger("sol-change",!0),d.push(g))});0<d.length&&c.isFunction(a.config.events.onChange)&&a.config.events.onChange.call(a,a,d)};b.on("reset",function(b){d.call(a);setTimeout(function(){d.call(a)},100)});b.data(this.WINDOW_EVENTS_KEY,!0)}this.$input.focus(function(){a.open()}).on("propertychange input",function(b){var c=!0;"propertychange"==b.type&&(c="value"==b.originalEvent.propertyName.toLowerCase()); c&&a._applySearchTermFilter()});this.$container.on("keydown",function(b){var d=b.keyCode;if(!a.$noResultsItem.is(":visible")){var f,g;f=!1;g=a.$selection.find(".sol-option:visible");40===d||38===d?(a._setKeyBoardNavigationMode(!0),f=a.$selection.find(".sol-option.keyboard-selection"),d=38===d?-1:1,d=g.index(f)+d,0>d?d=g.length-1:d>=g.length&&(d=0),f.removeClass("keyboard-selection"),g=c(g[d]).addClass("keyboard-selection"),a.$selection.scrollTop(a.$selection.scrollTop()+g.position().top),f=!0):!0=== a.keyboardNavigationMode&&32===d&&(f=a.$selection.find(".sol-option.keyboard-selection input"),f.prop("checked",!f.prop("checked")).trigger("change"),f=!0);if(f)return b.preventDefault(),!1}}).on("keyup",function(b){27===b.keyCode&&(!0===a.keyboardNavigationMode?a._setKeyBoardNavigationMode(!1):""===a.$input.val()?(a.$caret.trigger("click"),a.$input.trigger("blur")):a.$input.val("").trigger("input"))})},_setKeyBoardNavigationMode:function(a){a?(this.keyboardNavigationMode=!0,this.$selection.addClass("sol-keyboard-navigation")): (this.keyboardNavigationMode=!1,this.$selection.find(".sol-option.keyboard-selection"),this.$selection.removeClass("sol-keyboard-navigation"),this.$selectionContainer.find(".sol-option.keyboard-selection").removeClass("keyboard-selection"),this.$selection.scrollTop(0))},_applySearchTermFilter:function(){if(this.items&&0!==this.items.length){var a=(this.$input.val()||"").toLowerCase();this.$selectionContainer.find(".sol-filtered-search").removeClass("sol-filtered-search");this._setNoResultsItemVisible(!1); 0<a.trim().length&&this._findTerms(this.items,a);c.isFunction(this.config.events.onScroll)&&this.config.events.onScroll.call(this)}},_findTerms:function(a,b){if(a&&c.isArray(a)&&0!==a.length){var d=this;this._setKeyBoardNavigationMode(!1);c.each(a,function(a,c){if("option"===c.type){var f=c.displayElement;-1===(c.label+" "+c.tooltip).trim().toLowerCase().indexOf(b)&&f.addClass("sol-filtered-search")}else d._findTerms(c.children,b),0===c.displayElement.find(".sol-option:not(.sol-filtered-search)").length&& c.displayElement.addClass("sol-filtered-search")});this._setNoResultsItemVisible(0===this.$selectionContainer.find(".sol-option:not(.sol-filtered-search)").length)}},_initializeData:function(){this.config.data?c.isFunction(this.config.data)?this.items=this._fetchDataFromFunction(this.config.data):c.isArray(this.config.data)?this.items=this._fetchDataFromArray(this.config.data):"string"===typeof this.config.data?this._loadItemsFromUrl(this.config.data):this._showErrorLabel("Unknown data type"):this.items= this._detectDataFromOriginalElement();this.items&&this._processDataItems(this.items)},_detectDataFromOriginalElement:function(){if("select"===this.$originalElement.prop("tagName").toLowerCase()){var a=this,b=[];c.each(this.$originalElement.children(),function(d,h){var f=c(h),g=f.prop("tagName").toLowerCase();"option"===g?(f=a._processSelectOption(f))&&b.push(f):"optgroup"===g?(f=a._processSelectOptgroup(f))&&b.push(f):a._showErrorLabel("Invalid element found in select: "+g+". Only option and optgroup are allowed")}); return this._invokeConverterIfNeccessary(b)}if(this.$originalElement.data("sol-data")){var d=this.$originalElement.data("sol-data");return this._invokeConverterIfNeccessary(d)}this._showErrorLabel('Could not determine data from original element. Must be a select or data must be provided as data-sol-data="" attribute')},_processSelectOption:function(a){return c.extend({},this.SOL_OPTION_FORMAT,{value:a.val(),selected:a.prop("selected"),disabled:a.prop("disabled"),cssClass:a.attr("class"),label:a.html(), tooltip:a.attr("title"),element:a})},_processSelectOptgroup:function(a){var b=this,d=c.extend({},this.SOL_OPTIONGROUP_FORMAT,{label:a.attr("label"),tooltip:a.attr("title"),disabled:a.prop("disabled"),children:[]});a=a.children("option");c.each(a,function(a,h){var f=c(h),f=b._processSelectOption(f);d.disabled&&(f.disabled=!0);d.children.push(f)});return d},_fetchDataFromFunction:function(a){return this._invokeConverterIfNeccessary(a(this))},_fetchDataFromArray:function(a){return this._invokeConverterIfNeccessary(a)}, _loadItemsFromUrl:function(a){var b=this;c.ajax(a,{success:function(a){b.items=b._invokeConverterIfNeccessary(a);b.items&&b._processDataItems(b.items)},error:function(c,e,h){b._showErrorLabel("Error loading from url "+a+": "+h)},dataType:"json"})},_invokeConverterIfNeccessary:function(a){return c.isFunction(this.config.converter)?this.config.converter.call(this,this,a):a},_processDataItems:function(a){if(a)if(0===a.length)this._setNoResultsItemVisible(!0),this.$loadingData.remove();else{var b=this, d=0,e=function(){this.$loadingData.remove();this._initializeSelectAll();c.isFunction(this.config.events.onInitialized)&&this.config.events.onInitialized.call(this,this,a)},h=function(){for(var c=0,g;c++<b.config.asyncBatchSize&&d<a.length;)if(g=a[d++],g.type===b.SOL_OPTION_FORMAT.type)b._renderOption(g);else if(g.type===b.SOL_OPTIONGROUP_FORMAT.type)b._renderOptiongroup(g);else{b._showErrorLabel("Invalid item type found "+g.type);return}d>=a.length?e.call(b):setTimeout(h,0)};h.call(this)}else this._showErrorLabel("Data items not present. Maybe the converter did not return any values")}, _renderOption:function(a,b){var d=this,e=b||this.$selection,h,f=c('<div class="sol-label-text"/>').html(0===a.label.trim().length?"&nbsp;":a.label).addClass(a.cssClass),g=this._getNameAttribute();this.config.multiple?(h=c('<input type="checkbox" class="sol-checkbox"/>'),this.config.useBracketParameters&&(g+="[]")):h=c('<input type="radio" class="sol-radio"/>').on("change",function(){d.$selectionContainer.find('input[type="radio"][name="'+g+'"]').not(c(this)).trigger("sol-deselect")}).on("sol-deselect", function(){d._removeSelectionDisplayItem(c(this))});h.on("change",function(a,b){c(this).trigger("sol-change",b)}).on("sol-change",function(a,b){d._selectionChange(c(this),b)}).data("sol-item",a).prop("checked",a.selected).prop("disabled",a.disabled).attr("name",g).val(a.value);f=c('<label class="sol-label"/>').attr("title",a.tooltip).append(h).append(f);f=c('<div class="sol-option"/>').append(f);a.displayElement=f;e.append(f);a.selected&&this._addSelectionDisplayItem(h)},_renderOptiongroup:function(a){var b= this,d=c('<div class="sol-optiongroup-label"/>').attr("title",a.tooltip).html(a.label),e=c('<div class="sol-optiongroup"/>').append(d);a.disabled&&e.addClass("disabled");c.isArray(a.children)&&c.each(a.children,function(a,c){b._renderOption(c,e)});a.displayElement=e;this.$selection.append(e)},_initializeSelectAll:function(){if(!0===this.config.showSelectAll||c.isFunction(this.config.showSelectAll)&&this.config.showSelectAll.call(this)){var a=this,b=c('<a href="#" class="sol-deselect-all"/>').html(this.config.texts.selectNone).click(function(b){a.deselectAll(); b.preventDefault();return!1}),d=c('<a href="#" class="sol-select-all"/>').html(this.config.texts.selectAll).click(function(b){a.selectAll();b.preventDefault();return!1});this.$actionButtons=c('<div class="sol-action-buttons"/>').append(d).append(b).append('<div class="sol-clearfix"/>');this.$selectionContainer.prepend(this.$actionButtons)}},_selectionChange:function(a,b){if(this.$originalElement&&"select"===this.$originalElement.prop("tagName").toLowerCase()){var d=this;this.$originalElement.find("option").each(function(b, f){var e=c(f);e.val()===a.val()&&(e.prop("selected",a.prop("checked")),d.$originalElement.trigger("change"))})}a.prop("checked")?this._addSelectionDisplayItem(a):this._removeSelectionDisplayItem(a);this.config.multiple?this.config.scrollTarget.trigger("scroll"):this.close();var e=this.$showSelectionContainer.children(".sol-selected-display-item");0!=this.config.maxShow&&e.length>this.config.maxShow?(e.hide(),e=this.config.texts.itemsSelected.replace("{$a}",e.length),this.$xItemsSelected.html('<div class="sol-selected-display-item-text">'+ e+"<div>"),this.$showSelectionContainer.append(this.$xItemsSelected),this.$xItemsSelected.show()):(e.show(),this.$xItemsSelected.hide());!b&&c.isFunction(this.config.events.onChange)&&this.config.events.onChange.call(this,this,a)},_addSelectionDisplayItem:function(a){var b=a.data("sol-item"),d=b.displaySelectionItem;d||(d=c('<span class="sol-selected-display-item-text" />').html(b.label),d=c('<div class="sol-selected-display-item"/>').append(d).attr("title",b.tooltip).appendTo(this.$showSelectionContainer), !this.config.multiple&&!this.config.allowNullSelection||a.prop("disabled")||c('<span class="sol-quick-delete"/>').html(this.config.texts.quickDelete).click(function(){a.prop("checked",!1).trigger("change")}).prependTo(d),b.displaySelectionItem=d)},_removeSelectionDisplayItem:function(a){a=a.data("sol-item");var b=a.displaySelectionItem;b&&(b.remove(),a.displaySelectionItem=void 0)},_setNoResultsItemVisible:function(a){a?(this.$noResultsItem.show(),this.$selection.hide(),this.$actionButtons&&this.$actionButtons.hide()): (this.$noResultsItem.hide(),this.$selection.show(),this.$actionButtons&&this.$actionButtons.show())},isOpen:function(){return this.$container.hasClass("sol-active")},isClosed:function(){return!this.isOpen()},toggle:function(){this.isOpen()?this.close():this.open()},open:function(){this.isClosed()&&(this.$container.addClass("sol-active"),this.config.scrollTarget.bind("scroll",this.internalScrollWrapper).trigger("scroll"),c(k).on("resize",this.internalScrollWrapper),c.isFunction(this.config.events.onOpen)&& this.config.events.onOpen.call(this,this))},close:function(){this.isOpen()&&(this._setKeyBoardNavigationMode(!1),this.$container.removeClass("sol-active"),this.config.scrollTarget.unbind("scroll",this.internalScrollWrapper),c(k).off("resize"),this.$input.val(""),this._applySearchTermFilter(),this.config.displayContainerAboveInput=void 0,c.isFunction(this.config.events.onClose)&&this.config.events.onClose.call(this,this))},selectAll:function(){if(this.config.multiple){var a=this.$selectionContainer.find('input[type="checkbox"]:not([disabled], :checked)').prop("checked", !0).trigger("change",!0);this.close();c.isFunction(this.config.events.onChange)&&this.config.events.onChange.call(this,this,a)}},deselectAll:function(){if(this.config.multiple){var a=this.$selectionContainer.find('input[type="checkbox"]:not([disabled]):checked').prop("checked",!1).trigger("change",!0);this.close();c.isFunction(this.config.events.onChange)&&this.config.events.onChange.call(this,this,a)}},getSelection:function(){return this.$selection.find("input:checked")}};l.defaults=l.prototype.defaults; k.SearchableOptionList=l;c.fn.searchableOptionList=function(a){var b=[];this.each(function(){var d=c(this),e=d.data(l.prototype.DATA_KEY);if(e)b.push(e);else{var h=new l(d,a);b.push(h);setTimeout(function(){h.init()},0)}});return 1===b.length?b[0]:b}})(jQuery,window,document);
(function( $ ) {
	'use strict';
	var cbWidgetLd = $('#cb-admin-wrap').find('[id^="cb-cat-"]'),
		cbWidgetLdWds = $('#widgets-right').find('[id^="cb-cat-"]');
	if (! cbWidgetLd.hasClass('cb-sorted') ) {
        cbWidgetLd.addClass('cb-sorted').searchableOptionList();
    }
    if (! cbWidgetLdWds.hasClass('cb-sorted') ) {
        cbWidgetLdWds.addClass('cb-sorted').searchableOptionList();
    }

	$( document ).on( 'widget-added widget-updated', function(event, widget) {
		var cbWidget = widget.find('[id^="cb-cat-"]');
        if (! cbWidget.hasClass('cb-sorted') ) {
            cbWidget.addClass('cb-sorted').searchableOptionList();
        }
	});
})( jQuery );