/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** *************App Js*********************

 TABLE OF CONTENTS
 ---------------------------
 1. Ready Function
    1a. Preloader
    1b. Login Inputs Animation
    1c. Changing Login Background Images
    1d. Scrollbar
    1e. Datatables
    1f. Editable
    1g. Scroll to Top
 2. Load Function
 3. Full Height Function
 4. Main Jedi Function
    4a. Opening left sidebar on clicking hamburger icon
    4b. Opening top nav on clicking ellipsis icon
    4c. Hovering on Sidebar Left
    4d. Counter Up
    4e. Fullscreen
 5. Resize
 6. Echarts
 7. Fullscreen for Table Status

 ** ***************************************/

/****************************
 -----------------------------
        Ready Function
 -----------------------------
 /****************************/
$(document).ready(function () {
    jedi();

    /****************************
     -----------------------------
              Preloader
     -----------------------------
     /****************************/
    $(".preloader > .youtube-loading-animation").addClass("anime");

    /****************************
     -----------------------------
        Login Inputs Animation
     -----------------------------
     /****************************/
    var input = $(".login-input");

    input.on('blur', function () {
        //console.log("blur");
        if (this.value) {
            $(this).parent('.login__form-group').addClass('focus');
        } else {
            $(this).parent('.login__form-group').removeClass('focus');
        }
    }).on('focus', function () {
        $(this).parent('.login__form-group').addClass('focus');
        $('.login__form-group').removeClass('shake');
    });

    /*********************************
     ---------------------------------
      Changing Login Background Images
     ---------------------------------
     /********************************/
    $(".setting-toggle").on("click", function () {
        $(".setting").toggleClass("closed");
    }), $(".body-bg").on("click", function () {
        var t = "./assets/images/login/" + $(this).attr("data-bg");
        $("body").css("background-image", "url(" + t + ")");
    });

    /*********************************
     ---------------------------------
              Scrollbar
     ---------------------------------
     /********************************/
    $('.notification-scroller').slimscroll({ height: '229px', size: '4px', color: '#878787', disableFadeOut: true, borderRadius: 0 });
    $('.sidebar-scroller').slimscroll({ height: '100%', color: '#878787', disableFadeOut: true, borderRadius: 0, size: '4px', alwaysVisible: false });
    $('.kot-scroller').slimscroll({ height: '100%', color: '#878787', disableFadeOut: true, borderRadius: 0, size: '4px', alwaysVisible: false });
    $('.item-count-scroller').slimscroll({ height: '100%', color: '#878787', disableFadeOut: true, borderRadius: 0, size: '4px', alwaysVisible: false });
    $('.table-status-container-class').slimscroll({ height: '100%', color: '#878787', disableFadeOut: true, borderRadius: 0, size: '4px', alwaysVisible: false });

    /*********************************
     ---------------------------------
                Datatables
     ---------------------------------
     /********************************/
    $("#staff").DataTable();

    /*********************************
     ---------------------------------
                Editable
     ---------------------------------
     /********************************/
    $("#status").editable({
        prepend: "Status",
        source: [{ value: 1, text: 'Active' }, { value: 2, text: 'Inactive' }],
        display: function display(value, sourceData) {
            var colors = { "": "#98a6ad", 1: "#5fbeaa", 2: "#5d9cec" },
                elem = $.grep(sourceData, function (o) {
                return o.value == value;
            });

            if (elem.length) {
                $(this).text(elem[0].text).css("color", colors[value]);
            } else {
                $(this).empty();
            }
        }
    });

    $("#role").editable({
        prepend: "Status",
        source: [{ value: 1, text: 'Active' }, { value: 2, text: 'Inactive' }],
        display: function display(value, sourceData) {
            var colors = { "": "#98a6ad", 1: "#5fbeaa", 2: "#5d9cec" },
                elem = $.grep(sourceData, function (o) {
                return o.value == value;
            });

            if (elem.length) {
                $(this).text(elem[0].text).css("color", colors[value]);
            } else {
                $(this).empty();
            }
        }
    });

    $("#reservation").editable({
        prepend: "Status",
        source: [{ value: 1, text: 'Waiting' }, { value: 2, text: 'Reserved' }, { value: 3, text: 'Cancelled' }],
        display: function display(value, sourceData) {
            var colors = { "": "#98a6ad", 1: "#5fbeaa", 2: "#5d9cec" },
                elem = $.grep(sourceData, function (o) {
                return o.value == value;
            });

            if (elem.length) {
                $(this).text(elem[0].text).css("color", colors[value]);
            } else {
                $(this).empty();
            }
        }
    });

    $("#category").editable({
        prepend: "Status",
        source: [{ value: 1, text: 'Active' }, { value: 2, text: 'Inactive' }],
        display: function display(value, sourceData) {
            var colors = { "": "#98a6ad", 1: "#5fbeaa", 2: "#5d9cec" },
                elem = $.grep(sourceData, function (o) {
                return o.value == value;
            });

            if (elem.length) {
                $(this).text(elem[0].text).css("color", colors[value]);
            } else {
                $(this).empty();
            }
        }
    });

    $("#cuisine").editable({
        prepend: "Status",
        source: [{ value: 1, text: 'Active' }, { value: 2, text: 'Inactive' }],
        display: function display(value, sourceData) {
            var colors = { "": "#98a6ad", 1: "#5fbeaa", 2: "#5d9cec" },
                elem = $.grep(sourceData, function (o) {
                return o.value == value;
            });

            if (elem.length) {
                $(this).text(elem[0].text).css("color", colors[value]);
            } else {
                $(this).empty();
            }
        }
    });

    $("#bar-category").editable({
        prepend: "Status",
        source: [{ value: 1, text: 'Active' }, { value: 2, text: 'Inactive' }],
        display: function display(value, sourceData) {
            var colors = { "": "#98a6ad", 1: "#5fbeaa", 2: "#5d9cec" },
                elem = $.grep(sourceData, function (o) {
                return o.value == value;
            });

            if (elem.length) {
                $(this).text(elem[0].text).css("color", colors[value]);
            } else {
                $(this).empty();
            }
        }
    });

    $("#bar-items").editable({
        prepend: "Status",
        source: [{ value: 1, text: 'Active' }, { value: 2, text: 'Inactive' }],
        display: function display(value, sourceData) {
            var colors = { "": "#98a6ad", 1: "#5fbeaa", 2: "#5d9cec" },
                elem = $.grep(sourceData, function (o) {
                return o.value == value;
            });

            if (elem.length) {
                $(this).text(elem[0].text).css("color", colors[value]);
            } else {
                $(this).empty();
            }
        }
    });

    $("#events").editable({
        prepend: "Status",
        source: [{ value: 1, text: 'Active' }, { value: 2, text: 'Inactive' }],
        display: function display(value, sourceData) {
            var colors = { "": "#98a6ad", 1: "#5fbeaa", 2: "#5d9cec" },
                elem = $.grep(sourceData, function (o) {
                return o.value == value;
            });

            if (elem.length) {
                $(this).text(elem[0].text).css("color", colors[value]);
            } else {
                $(this).empty();
            }
        }
    });

    /*********************************
     ---------------------------------
             Scroll to Top
     ---------------------------------
     /********************************/
    var scrollTimeout;

    $('a.scroll-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
    });

    $(window).scroll(function () {
        clearTimeout(scrollTimeout);

        if ($(window).scrollTop() > 400) {
            scrollTimeout = setTimeout(function () {
                $('a.scroll-top:hidden').fadeIn();
            }, 100);
        } else {
            scrollTimeout = setTimeout(function () {
                $('a.scroll-top:visible').fadeOut();
            }, 100);
        }
    });

    $('#datetimepicker1').datetimepicker();
    $('#datetimepicker').datetimepicker();
    $('input[name="daterange"]').daterangepicker();
    $("#branchOpenTime").datetimepicker({
        format: 'LT'
    });
    $("#branchCloseTime").datetimepicker({
        format: 'LT'
    });

    $("input[name='tch3_22']").TouchSpin({
        min: -1000000000,
        max: 1000000000,
        stepinterval: 50,
        maxboostedstep: 10000000
    });

    $('#left-table').udraggable('option', {
        containment: 'parent',
        grid: [30, 30]
    });
    $('#disable-btn').click(function () {
        $('#left-table').udraggable('disable');
    });

    $('#enable-btn').click(function () {
        $('#left-table').udraggable('enable');
    });

    $("#check_box_switch").bootstrapSwitch();
});

/****************************
 -----------------------------
         Load Function
 -----------------------------
 /****************************/
$(window).on("load", function () {
    $(".preloader").delay(500).fadeOut("slow");
});

/****************************
 -----------------------------
      Full Height Function
 -----------------------------
 /****************************/
var setWidthHeight = function setWidthHeight() {
    var height = $(window).height();

    $('.full-height').css('height', height);
    $('.content-wrapper').css('min-height', height);
};

/****************************
 -----------------------------
      Main Jedi Function
 -----------------------------
 /****************************/
var $wrapper = $(".wrapper");
var jedi = function jedi() {

    /**********************************************
    Opening left sidebar on clicking hamburger icon
    /**********************************************/
    $(document).on('click', '#toggle_left_sidebar', function (e) {
        //console.log("hello");
        $wrapper.toggleClass('open-left-sidebar');
        return false;
    });

    /**********************************************
       Opening top nav on clicking ellipsis icon
    /**********************************************/
    $(document).on('click', '#toggle_top_nav_for_mobile', function (e) {
        //console.log("hello");
        $wrapper.toggleClass('open-top-nav');
        return false;
    });

    /**********************************************
                Hovering on Sidebar Left
    /**********************************************/
    $(document).on('mouseenter mouseleave', '.wrapper > .sidebar-left', function (e) {
        if (e.type == 'mouseenter') {
            $wrapper.addClass('sidebar-left-on-hover');
        } else {
            $wrapper.removeClass('sidebar-left-on-hover');
        }
    });

    /**********************************************
                     Counter Up
    /**********************************************/
    var counterIncrease = $('.increase-counter');
    if (counterIncrease.length > 0) {
        counterIncrease.counterUp({
            delay: 10,
            time: 4000
        });
    }

    /**********************************************
                     Fullscreen
    /**********************************************/
    $(document).on('click', '.full-screen', function (e) {
        $(this).parents('.panel').toggleClass('fullscreen');
    });

    $(document).on('click', '.sidebar-left .sidebar-left__nav li a', function (e) {
        // console.log("clicked");
        $('.sidebar-left .sidebar-left__nav li a').removeClass('active');
        $(this).addClass('active');
    });

    $(document).on('click', '#screen', function (e) {
        //console.log("hello");
        $(".table-status-container-class").toggleClass('screenfully');
        return false;
    });

    /**********************************************
             Fullscreen for Table Status
    /**********************************************/
    $("#screen-full").on('click', function () {
        if (IsFullScreenCurrently()) {
            GoOutFullscreen();
        } else {
            GoInFullscreen($("#table-status-container").get(0));
        }
    });

    $(document).on('fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange', function () {
        if (IsFullScreenCurrently()) {
            $("#screen-full").text('Exit Fullscreen');
        } else {
            $("#screen-full").text('Fullscreen');
        }
    });

    /**********************************************
                    Accordion js
    /**********************************************/
    $(document).on('show.bs.collapse', '.panel-collapse', function (e) {
        $(this).siblings('.panel-heading').addClass('active-open');
    });

    $(document).on('hide.bs.collapse', '.panel-collapse', function (e) {
        $(this).siblings('.panel-heading').removeClass('active-open');
    });
};

/**********************************************
                   Resize
/**********************************************/
$(window).on("resize", function () {
    setWidthHeight();
}).resize();

/**********************************************
                    Echarts
/**********************************************/
var echartsConfig = function echartsConfig() {
    if ($('#e_chart').length > 0) {
        var eChart = echarts.init(document.getElementById('e_chart'));
        var option = {
            color: ['#6d300e', '#e58b25', '#f8b32d', '#f7ce99'],
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(33,33,33,1)',
                borderRadius: 0,
                padding: 10,
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: 'rgba(33,33,33,1)'
                    }
                },
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 12
                }
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                showTitle: false,
                feature: {
                    mark: { show: true },
                    magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
                    restore: { show: true }
                }
            },
            grid: {
                left: '3%',
                right: '10%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017'],
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                }
            }],
            yAxis: [{
                type: 'value',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                splitLine: {
                    show: false
                }
            }],
            series: [{
                name: '1',
                type: 'bar',
                data: [500, 650, 301, 334, 390, 330, 320]
            }, {
                name: '2',
                type: 'bar',
                stack: 'st1',
                data: [120, 132, 101, 134, 90, 230, 210]
            }, {
                name: '3',
                type: 'bar',
                stack: 'st1',
                data: [220, 182, 191, 234, 290, 330, 310]
            }, {
                name: '4',
                type: 'bar',
                stack: 'st1',
                data: [150, 232, 201, 154, 190, 330, 410]
            }]
        };
        eChart.setOption(option);
        eChart.resize();
    }
};

var echartsConfig1 = function echartsConfig1() {
    if ($('#e_chart_1').length > 0) {
        var eChart_1 = echarts.init(document.getElementById('e_chart_1'));
        var option = {
            color: ['#007153', '#4aa23c', '#0098a3'],
            series: [{
                name: '漏斗图',
                type: 'funnel',
                x: '0%',
                y: 20,
                //x2: 80,
                y2: 60,
                width: '100%',
                height: '80%',
                // height: {totalHeight} - y - y2,
                min: 0,
                max: 100,
                minSize: '0%',
                maxSize: '100%',
                sort: 'descending', // 'ascending', 'descending'
                gap: 0,

                data: [{ value: 60 }, { value: 40 }, { value: 80 }].sort(function (a, b) {
                    return a.value - b.value;
                }),
                roseType: true,
                label: {
                    normal: {
                        formatter: function formatter(params) {
                            return params.name + ' ' + params.value + '%';
                        },
                        position: 'center'
                    }
                },
                itemStyle: {
                    normal: {
                        borderWidth: 0,
                        shadowBlur: 5,
                        shadowOffsetX: 0,
                        shadowOffsetY: 5,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }

            }]
        };

        eChart_1.setOption(option);
        eChart_1.resize();
    }
    if ($('#e_chart_2').length > 0) {
        var eChart_2 = echarts.init(document.getElementById('e_chart_2'));
        var option1 = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            color: ['#007153', '#4aa23c', '#0098a3', '#f7ce99'],
            series: [{
                name: 'task',
                type: 'pie',
                radius: '60%',
                center: ['50%', '50%'],
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)",
                    backgroundColor: 'rgba(33,33,33,1)',
                    borderRadius: 0,
                    padding: 10,
                    textStyle: {
                        color: '#fff',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: 12
                    }
                },
                data: [{ value: 335, name: 'task 1', selected: true }, { value: 310, name: 'task 2' }, { value: 734, name: 'task 3' }, { value: 135, name: 'task 4' }],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        };
        eChart_2.setOption(option1);
        eChart_2.resize();
    }
    if ($('#e_chart_3').length > 0) {
        var eChart_3 = echarts.init(document.getElementById('e_chart_3'));
        var colors = ['#007153', '#f7ce99'];
        var option3 = {
            color: colors,

            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(33,33,33,1)',
                borderRadius: 0,
                padding: 10,
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: 'rgba(33,33,33,1)'
                    }
                },
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 12
                }
            },
            grid: {
                show: false,
                top: 30,
                bottom: 10,
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                axisPointer: {
                    label: {
                        formatter: function formatter(params) {
                            return params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                        }
                    }
                },
                data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
            }, {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                axisPointer: {
                    label: {
                        formatter: function formatter(params) {
                            return params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                        }
                    }
                },
                data: ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"]
            }],
            yAxis: [{
                type: 'value',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                splitLine: {
                    show: false
                }
            }],
            series: [{
                name: '2015',
                type: 'line',
                xAxisIndex: 1,
                smooth: true,
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            }, {
                name: '2016',
                type: 'line',
                smooth: true,
                data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
            }]
        };

        eChart_3.setOption(option3);
        eChart_3.resize();
    }
    if ($('#e_chart_4').length > 0) {
        var eChart_4 = echarts.init(document.getElementById('e_chart_4'));
        var option4 = {
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(33,33,33,1)',
                borderRadius: 0,
                padding: 10,
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: 'rgba(33,33,33,1)'
                    }
                },
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 12
                }
            },
            grid: {
                left: '10%',
                right: '10%',
                bottom: '15%'
            },
            yAxis: {
                type: 'category',
                data: ['Adjacent to subway', 'Away from subway'],
                nameTextStyle: {
                    color: '#878787',
                    fontSize: 14
                },
                axisLine: {
                    show: false
                },

                axisTick: {
                    show: false
                },
                axisLabel: {
                    rotate: 90,
                    textStyle: {
                        color: '#878787'
                    }
                },
                splitLine: {
                    show: false
                }
            },

            xAxis: {
                type: 'value',

                nameTextStyle: {
                    color: '#878787',
                    fontSize: 14
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#878787'
                    }
                },
                splitLine: {
                    show: false
                }

            },
            series: [{
                name: 'boxplot',
                type: 'boxplot',
                data: [[216, 599.5, 694, 504, 980], [216, 599.5, 694, 504, 980]],
                itemStyle: {
                    normal: {
                        borderColor: {
                            type: 'linear',
                            x: 1,
                            y: 0,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0,
                                color: '#007153' // 0%
                            }, {
                                offset: 1,
                                color: '#4aa23c' // 100%
                            }],
                            globalCoord: false //
                        },
                        borderWidth: 2,
                        color: {
                            type: 'linear',
                            x: 1,
                            y: 0,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0,
                                color: '#007153' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#4aa23c' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                },
                tooltip: {
                    formatter: function formatter(param) {
                        return ['upper: ' + param.data[5], 'Q3: ' + param.data[4], 'median: ' + param.data[3], 'Q1: ' + param.data[2], 'lower: ' + param.data[1]].join('<br/>');
                    }
                }
            }]
        };
        eChart_4.setOption(option4);
        eChart_4.resize();
    }
};

echartsConfig();
echartsConfig1();

/**********************************************
        Fullscreen for Table Status
/**********************************************/
/* Get into full screen */
function GoInFullscreen(element) {
    if (element.requestFullscreen) element.requestFullscreen();else if (element.mozRequestFullScreen) element.mozRequestFullScreen();else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();else if (element.msRequestFullscreen) element.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
    if (document.exitFullscreen) document.exitFullscreen();else if (document.mozCancelFullScreen) document.mozCancelFullScreen();else if (document.webkitExitFullscreen) document.webkitExitFullscreen();else if (document.msExitFullscreen) document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
    var full_screen_element = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || null;

    // If no element is in full-screen
    if (full_screen_element === null) return false;else return true;
}

/***/ })
/******/ ]);