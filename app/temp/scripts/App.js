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
 2. Load Function
 3. Full Height Function
 4. Main Jedi Function
    4a. Opening left sidebar on clicking hamburger icon
    4b. Opening top nav on clicking ellipsis icon
    4c. Hovering on Sidebar Left
    4d. Counter Up
    4e. Fullscreen
 5. Resize

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

/***/ })
/******/ ]);