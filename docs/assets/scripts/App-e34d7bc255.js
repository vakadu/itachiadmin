!function(e){function t(o){if(a[o])return a[o].exports;var n=a[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var a={};t.m=e,t.c=a,t.d=function(e,a,o){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,a){"use strict";function o(){return null!==(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||null)}$(document).ready(function(){l(),$(".preloader > .youtube-loading-animation").addClass("anime");$(".login-input").on("blur",function(){this.value?$(this).parent(".login__form-group").addClass("focus"):$(this).parent(".login__form-group").removeClass("focus")}).on("focus",function(){$(this).parent(".login__form-group").addClass("focus"),$(".login__form-group").removeClass("shake")}),$(".setting-toggle").on("click",function(){$(".setting").toggleClass("closed")}),$(".body-bg").on("click",function(){var e="./assets/images/login/"+$(this).attr("data-bg");$("body").css("background-image","url("+e+")")}),$(".notification-scroller").slimscroll({height:"229px",size:"4px",color:"#878787",disableFadeOut:!0,borderRadius:0}),$(".sidebar-scroller").slimscroll({height:"100%",color:"#878787",disableFadeOut:!0,borderRadius:0,size:"4px",alwaysVisible:!1}),$(".kot-scroller").slimscroll({height:"100%",color:"#878787",disableFadeOut:!0,borderRadius:0,size:"4px",alwaysVisible:!1}),$(".item-count-scroller").slimscroll({height:"100%",color:"#878787",disableFadeOut:!0,borderRadius:0,size:"4px",alwaysVisible:!1}),$(".table-status-container-class").slimscroll({height:"100%",color:"#878787",disableFadeOut:!0,borderRadius:0,size:"4px",alwaysVisible:!1}),$("#staff").DataTable(),$("#status").editable({prepend:"Status",source:[{value:1,text:"Active"},{value:2,text:"Inactive"}],display:function(e,t){var a=$.grep(t,function(t){return t.value==e});a.length?$(this).text(a[0].text).css("color",{"":"#98a6ad",1:"#5fbeaa",2:"#5d9cec"}[e]):$(this).empty()}}),$("#role").editable({prepend:"Status",source:[{value:1,text:"Active"},{value:2,text:"Inactive"}],display:function(e,t){var a=$.grep(t,function(t){return t.value==e});a.length?$(this).text(a[0].text).css("color",{"":"#98a6ad",1:"#5fbeaa",2:"#5d9cec"}[e]):$(this).empty()}}),$("#reservation").editable({prepend:"Status",source:[{value:1,text:"Waiting"},{value:2,text:"Reserved"},{value:3,text:"Cancelled"}],display:function(e,t){var a=$.grep(t,function(t){return t.value==e});a.length?$(this).text(a[0].text).css("color",{"":"#98a6ad",1:"#5fbeaa",2:"#5d9cec"}[e]):$(this).empty()}}),$("#category").editable({prepend:"Status",source:[{value:1,text:"Active"},{value:2,text:"Inactive"}],display:function(e,t){var a=$.grep(t,function(t){return t.value==e});a.length?$(this).text(a[0].text).css("color",{"":"#98a6ad",1:"#5fbeaa",2:"#5d9cec"}[e]):$(this).empty()}}),$("#cuisine").editable({prepend:"Status",source:[{value:1,text:"Active"},{value:2,text:"Inactive"}],display:function(e,t){var a=$.grep(t,function(t){return t.value==e});a.length?$(this).text(a[0].text).css("color",{"":"#98a6ad",1:"#5fbeaa",2:"#5d9cec"}[e]):$(this).empty()}}),$("#bar-category").editable({prepend:"Status",source:[{value:1,text:"Active"},{value:2,text:"Inactive"}],display:function(e,t){var a=$.grep(t,function(t){return t.value==e});a.length?$(this).text(a[0].text).css("color",{"":"#98a6ad",1:"#5fbeaa",2:"#5d9cec"}[e]):$(this).empty()}}),$("#bar-items").editable({prepend:"Status",source:[{value:1,text:"Active"},{value:2,text:"Inactive"}],display:function(e,t){var a=$.grep(t,function(t){return t.value==e});a.length?$(this).text(a[0].text).css("color",{"":"#98a6ad",1:"#5fbeaa",2:"#5d9cec"}[e]):$(this).empty()}}),$("#events").editable({prepend:"Status",source:[{value:1,text:"Active"},{value:2,text:"Inactive"}],display:function(e,t){var a=$.grep(t,function(t){return t.value==e});a.length?$(this).text(a[0].text).css("color",{"":"#98a6ad",1:"#5fbeaa",2:"#5d9cec"}[e]):$(this).empty()}});var e;$("a.scroll-top").click(function(){return $("html, body").animate({scrollTop:0},500),!1}),$(window).scroll(function(){clearTimeout(e),e=$(window).scrollTop()>400?setTimeout(function(){$("a.scroll-top:hidden").fadeIn()},100):setTimeout(function(){$("a.scroll-top:visible").fadeOut()},100)}),$("#datetimepicker1").datetimepicker(),$("#datetimepicker").datetimepicker(),$('input[name="daterange"]').daterangepicker(),$("#branchOpenTime").datetimepicker({format:"LT"}),$("#branchCloseTime").datetimepicker({format:"LT"}),$("input[name='tch3_22']").TouchSpin({min:-1e9,max:1e9,stepinterval:50,maxboostedstep:1e7}),$("#left-table").udraggable("option",{containment:"parent",grid:[30,30]}),$("#disable-btn").click(function(){$("#left-table").udraggable("disable")}),$("#enable-btn").click(function(){$("#left-table").udraggable("enable")}),$("#check_box_switch").bootstrapSwitch()}),$(window).on("load",function(){$(".preloader").delay(500).fadeOut("slow")});var n=$(".wrapper"),l=function(){$(document).on("click","#toggle_left_sidebar",function(e){return n.toggleClass("open-left-sidebar"),!1}),$(document).on("click","#toggle_top_nav_for_mobile",function(e){return n.toggleClass("open-top-nav"),!1}),$(document).on("mouseenter mouseleave",".wrapper > .sidebar-left",function(e){"mouseenter"==e.type?n.addClass("sidebar-left-on-hover"):n.removeClass("sidebar-left-on-hover")});var e=$(".increase-counter");e.length>0&&e.counterUp({delay:10,time:4e3}),$(document).on("click",".full-screen",function(e){$(this).parents(".panel").toggleClass("fullscreen")}),$(document).on("click",".sidebar-left .sidebar-left__nav li a",function(e){$(".sidebar-left .sidebar-left__nav li a").removeClass("active"),$(this).addClass("active")}),$(document).on("click","#screen",function(e){return $(".table-status-container-class").toggleClass("screenfully"),!1}),$("#screen-full").on("click",function(){o()?document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():function(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}($("#table-status-container").get(0))}),$(document).on("fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange",function(){o()?$("#screen-full").text("Exit Fullscreen"):$("#screen-full").text("Fullscreen")}),$(document).on("show.bs.collapse",".panel-collapse",function(e){$(this).siblings(".panel-heading").addClass("active-open")}),$(document).on("hide.bs.collapse",".panel-collapse",function(e){$(this).siblings(".panel-heading").removeClass("active-open")})};$(window).on("resize",function(){!function(){var e=$(window).height();$(".full-height").css("height",e),$(".content-wrapper").css("min-height",e)}()}).resize();!function(){if($("#e_chart").length>0){var e=echarts.init(document.getElementById("e_chart"));e.setOption({color:["#6d300e","#e58b25","#f8b32d","#f7ce99"],tooltip:{trigger:"axis",backgroundColor:"rgba(33,33,33,1)",borderRadius:0,padding:10,axisPointer:{type:"cross",label:{backgroundColor:"rgba(33,33,33,1)"}},textStyle:{color:"#fff",fontStyle:"normal",fontWeight:"normal",fontFamily:"'Roboto', sans-serif",fontSize:12}},toolbox:{show:!0,orient:"vertical",left:"right",top:"center",showTitle:!1,feature:{mark:{show:!0},magicType:{show:!0,type:["line","bar","stack","tiled"]},restore:{show:!0}}},grid:{left:"3%",right:"10%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["2011","2012","2013","2014","2015","2016","2017"],axisLine:{show:!1},axisLabel:{textStyle:{color:"#878787"}}}],yAxis:[{type:"value",axisLine:{show:!1},axisLabel:{textStyle:{color:"#878787"}},splitLine:{show:!1}}],series:[{name:"1",type:"bar",data:[500,650,301,334,390,330,320]},{name:"2",type:"bar",stack:"st1",data:[120,132,101,134,90,230,210]},{name:"3",type:"bar",stack:"st1",data:[220,182,191,234,290,330,310]},{name:"4",type:"bar",stack:"st1",data:[150,232,201,154,190,330,410]}]}),e.resize()}}(),function(){if($("#e_chart_1").length>0){var e=echarts.init(document.getElementById("e_chart_1")),t={color:["#007153","#4aa23c","#0098a3"],series:[{name:"漏斗图",type:"funnel",x:"0%",y:20,y2:60,width:"100%",height:"80%",min:0,max:100,minSize:"0%",maxSize:"100%",sort:"descending",gap:0,data:[{value:60},{value:40},{value:80}].sort(function(e,t){return e.value-t.value}),roseType:!0,label:{normal:{formatter:function(e){return e.name+" "+e.value+"%"},position:"center"}},itemStyle:{normal:{borderWidth:0,shadowBlur:5,shadowOffsetX:0,shadowOffsetY:5,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};e.setOption(t),e.resize()}if($("#e_chart_2").length>0){var a=echarts.init(document.getElementById("e_chart_2"));a.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},color:["#007153","#4aa23c","#0098a3","#f7ce99"],series:[{name:"task",type:"pie",radius:"60%",center:["50%","50%"],tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)",backgroundColor:"rgba(33,33,33,1)",borderRadius:0,padding:10,textStyle:{color:"#fff",fontStyle:"normal",fontWeight:"normal",fontFamily:"'Roboto', sans-serif",fontSize:12}},data:[{value:335,name:"task 1",selected:!0},{value:310,name:"task 2"},{value:734,name:"task 3"},{value:135,name:"task 4"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}),a.resize()}if($("#e_chart_3").length>0){var o=echarts.init(document.getElementById("e_chart_3")),n={color:["#007153","#f7ce99"],tooltip:{trigger:"axis",backgroundColor:"rgba(33,33,33,1)",borderRadius:0,padding:10,axisPointer:{type:"cross",label:{backgroundColor:"rgba(33,33,33,1)"}},textStyle:{color:"#fff",fontStyle:"normal",fontWeight:"normal",fontFamily:"'Roboto', sans-serif",fontSize:12}},grid:{show:!1,top:30,bottom:10,containLabel:!0},xAxis:[{type:"category",axisTick:{alignWithLabel:!0},axisLine:{show:!1},axisLabel:{textStyle:{color:"#878787"}},axisPointer:{label:{formatter:function(e){return e.value+(e.seriesData.length?"："+e.seriesData[0].data:"")}}},data:["2016-1","2016-2","2016-3","2016-4","2016-5","2016-6","2016-7","2016-8","2016-9","2016-10","2016-11","2016-12"]},{type:"category",axisTick:{alignWithLabel:!0},axisLine:{show:!1},axisLabel:{textStyle:{color:"#878787"}},axisPointer:{label:{formatter:function(e){return e.value+(e.seriesData.length?"："+e.seriesData[0].data:"")}}},data:["2015-1","2015-2","2015-3","2015-4","2015-5","2015-6","2015-7","2015-8","2015-9","2015-10","2015-11","2015-12"]}],yAxis:[{type:"value",axisLine:{show:!1},axisLabel:{textStyle:{color:"#878787"}},splitLine:{show:!1}}],series:[{name:"2015",type:"line",xAxisIndex:1,smooth:!0,data:[2.6,5.9,9,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6,2.3]},{name:"2016",type:"line",smooth:!0,data:[3.9,5.9,11.1,18.7,48.3,69.2,231.6,46.6,55.4,18.4,10.3,.7]}]};o.setOption(n),o.resize()}if($("#e_chart_4").length>0){var l=echarts.init(document.getElementById("e_chart_4"));l.setOption({tooltip:{trigger:"axis",backgroundColor:"rgba(33,33,33,1)",borderRadius:0,padding:10,axisPointer:{type:"cross",label:{backgroundColor:"rgba(33,33,33,1)"}},textStyle:{color:"#fff",fontStyle:"normal",fontWeight:"normal",fontFamily:"'Roboto', sans-serif",fontSize:12}},grid:{left:"10%",right:"10%",bottom:"15%"},yAxis:{type:"category",data:["Adjacent to subway","Away from subway"],nameTextStyle:{color:"#878787",fontSize:14},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{rotate:90,textStyle:{color:"#878787"}},splitLine:{show:!1}},xAxis:{type:"value",nameTextStyle:{color:"#878787",fontSize:14},axisLine:{show:!1},axisLabel:{textStyle:{color:"#878787"}},splitLine:{show:!1}},series:[{name:"boxplot",type:"boxplot",data:[[216,599.5,694,504,980],[216,599.5,694,504,980]],itemStyle:{normal:{borderColor:{type:"linear",x:1,y:0,x2:0,y2:0,colorStops:[{offset:0,color:"#007153"},{offset:1,color:"#4aa23c"}],globalCoord:!1},borderWidth:2,color:{type:"linear",x:1,y:0,x2:0,y2:0,colorStops:[{offset:0,color:"#007153"},{offset:1,color:"#4aa23c"}],globalCoord:!1}}},tooltip:{formatter:function(e){return["upper: "+e.data[5],"Q3: "+e.data[4],"median: "+e.data[3],"Q1: "+e.data[2],"lower: "+e.data[1]].join("<br/>")}}}]}),l.resize()}}()}]);