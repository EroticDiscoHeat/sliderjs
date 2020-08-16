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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js?!./styles.css":
/*!*********************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--5-1!./styles.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".styles__wrapper__1EY2a{\r\n    overflow: hidden;\r\n    width: 500px;\r\n    margin: 0 auto;\r\n}\r\n.styles__sliderTrack__1tWZJ{\r\n    display: flex;\r\n    transition: .2s;\r\n}\r\n.styles__sliderButtons__1J43s{\r\n    text-align: center;\r\n    background-color: white;\r\n}\r\n.styles__sliderButtons__1J43s > button {\r\n    width: 50px;\r\n}\r\n.styles__slider-item__3Ge7T{\r\n    position: relative;\r\n    height: 100%;\r\n    min-width: 100%;\r\n}\r\n.styles__slider-item__3Ge7T:nth-child(5n+4) {\r\n    background-color: black;\r\n    height: 300px;\r\n    width: 500px;\r\n}\r\n.styles__slider-item__3Ge7T:nth-child(5n+5) {\r\n    background-color: yellow;\r\n    height: 400px;\r\n    width: 500px;\r\n}", "",{"version":3,"sources":["styles.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,YAAY;IACZ,cAAc;AAClB;AACA;IACI,aAAa;IACb,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,uBAAuB;AAC3B;AACA;IACI,WAAW;AACf;AACA;IACI,kBAAkB;IAClB,YAAY;IACZ,eAAe;AACnB;AACA;IACI,uBAAuB;IACvB,aAAa;IACb,YAAY;AAChB;AACA;IACI,wBAAwB;IACxB,aAAa;IACb,YAAY;AAChB","file":"styles.css","sourcesContent":[".wrapper{\r\n    overflow: hidden;\r\n    width: 500px;\r\n    margin: 0 auto;\r\n}\r\n.sliderTrack{\r\n    display: flex;\r\n    transition: .2s;\r\n}\r\n.sliderButtons{\r\n    text-align: center;\r\n    background-color: white;\r\n}\r\n.sliderButtons > button {\r\n    width: 50px;\r\n}\r\n.slider-item{\r\n    position: relative;\r\n    height: 100%;\r\n    min-width: 100%;\r\n}\r\n.slider-item:nth-child(5n+4) {\r\n    background-color: black;\r\n    height: 300px;\r\n    width: 500px;\r\n}\r\n.slider-item:nth-child(5n+5) {\r\n    background-color: yellow;\r\n    height: 400px;\r\n    width: 500px;\r\n}"]}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"wrapper": "styles__wrapper__1EY2a",
	"sliderTrack": "styles__sliderTrack__1tWZJ",
	"sliderButtons": "styles__sliderButtons__1J43s",
	"slider-item": "styles__slider-item__3Ge7T"
};
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation */ "./navigation.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);



(function () {
  var SliderJs = function SliderJs(id, timer, autoplay, showBtns) {
    var position = 0,
        displacement = 0,
        coordinates,
        player,
        playChecker = false;
    var wrap = document.createElement('div');
    var track = document.getElementById(id);
    var items = track.children;

    if (Array.from(items).length === 0) {
      alert("\u0412 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0435 \u0441 id '".concat(id, " \u043D\u0435\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F'"));
    } else {
      track.style.display = 'flex';
      track.style.transition = '.2s';
      wrap.innerHTML = track.outerHTML;
      track.parentNode.replaceChild(wrap, track);
      wrap.className = _styles_css__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper; // debugger
      // Array.from(items).forEach((item) => {
      //     item.setAttribute('onselectstart', 'return false')
      //     item.setAttribute('onmousedown', 'return false')
      // })
      // Array.from(items).forEach((item) => {
      //     item.style = 'height: 100%; min-height: 100%'
      // })
      // debugger

      if (autoplay) {
        player = setInterval(function () {
          if (showBtns) {
            var playBtn = wrap.getElementsByTagName('button')[2];
            playChecker = true;
            playBtn.firstChild.setAttribute('src', "../src/svg/pause-button.svg");
          }

          coordinates = Object(_navigation__WEBPACK_IMPORTED_MODULE_0__["default"])(id, position, displacement, 'btnNext');
          position = coordinates.position;
          displacement = coordinates.displacement;
        }, timer);
      }

      if (showBtns) {
        var btns = document.createElement('div');
        var btnNext = document.createElement('button');
        var btnPrev = document.createElement('button');
        var btnPlay = document.createElement('button');
        var next = document.createElement('img');
        var prev = document.createElement('img');
        var play = document.createElement('img');
        wrap.appendChild(btns);
        btns.className = _styles_css__WEBPACK_IMPORTED_MODULE_1___default.a.sliderButtons;
        btns.appendChild(btnPrev);
        btns.appendChild(btnNext);
        btns.appendChild(btnPlay);
        btnPrev.appendChild(prev);
        btnNext.appendChild(next);
        btnPlay.appendChild(play);
        prev.setAttribute('src', "../src/svg/left-arrow.svg");
        next.setAttribute('src', "../src/svg/right-arrow.svg");
        play.setAttribute('src', "../src/svg/play-button.svg");
        btnNext.addEventListener("click", function () {
          coordinates = Object(_navigation__WEBPACK_IMPORTED_MODULE_0__["default"])(id, position, displacement, 'btnNext');
          position = coordinates.position;
          displacement = coordinates.displacement;
        });
        btnPrev.addEventListener("click", function () {
          coordinates = Object(_navigation__WEBPACK_IMPORTED_MODULE_0__["default"])(id, position, displacement, 'btnPrev');
          position = coordinates.position;
          displacement = coordinates.displacement;
        });
        btnPlay.addEventListener('click', function () {
          if (!playChecker) {
            playChecker = true;
            play.setAttribute('src', "../src/svg/pause-button.svg");
            player = setInterval(function () {
              coordinates = Object(_navigation__WEBPACK_IMPORTED_MODULE_0__["default"])(id, position, displacement, 'btnNext');
              position = coordinates.position;
              displacement = coordinates.displacement;
            }, timer);
          } else {
            playChecker = false;
            play.setAttribute('src', "../src/svg/play-button.svg");
            clearInterval(player);
          }
        });
      }

      var mouseDrag = function mouseDrag() {
        var mouseStart, mouseEnd;
        wrap.addEventListener('mousedown', function (event) {
          if (event.target.parentNode.nodeName !== 'BUTTON') {
            mouseStart = event.clientX;
          }
        });
        wrap.addEventListener('mouseup', function (event) {
          if (event.target.parentNode.nodeName !== 'BUTTON') {
            mouseEnd = event.clientX;

            if (mouseEnd > mouseStart) {
              coordinates = Object(_navigation__WEBPACK_IMPORTED_MODULE_0__["default"])(id, position, displacement, 'btnPrev');
              position = coordinates.position;
              displacement = coordinates.displacement;
            } else {
              coordinates = Object(_navigation__WEBPACK_IMPORTED_MODULE_0__["default"])(id, position, displacement, 'btnNext');
              position = coordinates.position;
              displacement = coordinates.displacement;
            }
          }
        });
      };

      var touchDrag = function touchDrag() {
        var touchStart, touchEnd;
        wrap.addEventListener('touchstart', function (event) {
          touchStart = event.changedTouches[0].clientX;
        });
        wrap.addEventListener('touchend', function (event) {
          touchEnd = event.changedTouches[0].clientX;

          if (touchEnd > touchStart) {
            coordinates = Object(_navigation__WEBPACK_IMPORTED_MODULE_0__["default"])(id, position, displacement, 'btnPrev');
            position = coordinates.position;
            displacement = coordinates.displacement;
          } else {
            coordinates = Object(_navigation__WEBPACK_IMPORTED_MODULE_0__["default"])(id, position, displacement, 'btnNext');
            position = coordinates.position;
            displacement = coordinates.displacement;
          }
        });
      };

      mouseDrag();
      touchDrag();
    }
  };

  window.SliderJs = SliderJs;
})();

/***/ }),

/***/ "./navigation.js":
/*!***********************!*\
  !*** ./navigation.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Navigation = function Navigation(id, position, displacement, element) {
  var replacePosition;
  var track = document.getElementById(id);
  var items = track.children;
  var itemsWidthMap = [];
  var sumWidth = 0;
  Array.from(items).forEach(function (item) {
    itemsWidthMap.push(item.offsetWidth);
    sumWidth += item.offsetWidth;
  });

  if (element === 'btnPrev') {
    position === 0 ? position = itemsWidthMap.length - 1 : position--;
    displacement += itemsWidthMap[position];
  } else {
    position === itemsWidthMap.length - 1 ? position = 0 : position++;
    displacement -= itemsWidthMap[position];
  }

  track.style.transform = "translateX(".concat(displacement, "px)");
  track.addEventListener('transitionstart', function () {
    if (element === 'btnPrev') {
      if (position === 0) {
        replacePosition = itemsWidthMap.length - 1;
      } else {
        replacePosition = position + 1;
      }
    } else {
      if (position === itemsWidthMap.length - 1) {
        replacePosition = 0;
      } else {
        replacePosition = position - 1;
      }
    }

    items.item(position).style.left = "".concat(-(sumWidth * Math.ceil(displacement / sumWidth)), "px");
  });
  return {
    position: position,
    displacement: displacement
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-1!./styles.css */ "../node_modules/css-loader/dist/cjs.js?!./styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzLmNzcz8xNmM4Il0sIm5hbWVzIjpbIlNsaWRlckpzIiwiaWQiLCJ0aW1lciIsImF1dG9wbGF5Iiwic2hvd0J0bnMiLCJwb3NpdGlvbiIsImRpc3BsYWNlbWVudCIsImNvb3JkaW5hdGVzIiwicGxheWVyIiwicGxheUNoZWNrZXIiLCJ3cmFwIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidHJhY2siLCJnZXRFbGVtZW50QnlJZCIsIml0ZW1zIiwiY2hpbGRyZW4iLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJhbGVydCIsInN0eWxlIiwiZGlzcGxheSIsInRyYW5zaXRpb24iLCJpbm5lckhUTUwiLCJvdXRlckhUTUwiLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwiY2xhc3NOYW1lIiwic3R5bGVzIiwid3JhcHBlciIsInNldEludGVydmFsIiwicGxheUJ0biIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZmlyc3RDaGlsZCIsInNldEF0dHJpYnV0ZSIsIk5hdmlnYXRpb24iLCJidG5zIiwiYnRuTmV4dCIsImJ0blByZXYiLCJidG5QbGF5IiwibmV4dCIsInByZXYiLCJwbGF5IiwiYXBwZW5kQ2hpbGQiLCJzbGlkZXJCdXR0b25zIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsZWFySW50ZXJ2YWwiLCJtb3VzZURyYWciLCJtb3VzZVN0YXJ0IiwibW91c2VFbmQiLCJldmVudCIsInRhcmdldCIsIm5vZGVOYW1lIiwiY2xpZW50WCIsInRvdWNoRHJhZyIsInRvdWNoU3RhcnQiLCJ0b3VjaEVuZCIsImNoYW5nZWRUb3VjaGVzIiwid2luZG93IiwiZWxlbWVudCIsInJlcGxhY2VQb3NpdGlvbiIsIml0ZW1zV2lkdGhNYXAiLCJzdW1XaWR0aCIsImZvckVhY2giLCJpdGVtIiwicHVzaCIsIm9mZnNldFdpZHRoIiwidHJhbnNmb3JtIiwibGVmdCIsIk1hdGgiLCJjZWlsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQ3lGO0FBQ3pGLDhCQUE4QixtRkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUywyQkFBMkIseUJBQXlCLHFCQUFxQix1QkFBdUIsS0FBSyxnQ0FBZ0Msc0JBQXNCLHdCQUF3QixLQUFLLGtDQUFrQywyQkFBMkIsZ0NBQWdDLEtBQUssNENBQTRDLG9CQUFvQixLQUFL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QUFyQixDQUEyQmdELElBQTNCLGFBQXFDLEVBQUVOLFFBQVEsR0FBR08sSUFBSSxDQUFDQyxJQUFMLENBQVVqRSxZQUFZLEdBQUd5RCxRQUF6QixDQUFiLENBQXJDO0FBQ0gsR0FmRDtBQWdCQSxTQUFPO0FBQUMxRCxZQUFRLEVBQUVBLFFBQVg7QUFBcUJDLGdCQUFZLEVBQUVBO0FBQW5DLEdBQVA7QUFDSCxDQXZDRDs7QUF5Q2U4Qix5RUFBZixFOzs7Ozs7Ozs7OztBQ3pDQSxVQUFVLG1CQUFPLENBQUMsb0pBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLDRIQUFpRTs7QUFFbkc7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc3R5bGVzX193cmFwcGVyX18xRVkyYXtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuLnN0eWxlc19fc2xpZGVyVHJhY2tfXzF0V1pKe1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAuMnM7XFxyXFxufVxcclxcbi5zdHlsZXNfX3NsaWRlckJ1dHRvbnNfXzFKNDNze1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4uc3R5bGVzX19zbGlkZXJCdXR0b25zX18xSjQzcyA+IGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbn1cXHJcXG4uc3R5bGVzX19zbGlkZXItaXRlbV9fM0dlN1R7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5zdHlsZXNfX3NsaWRlci1pdGVtX18zR2U3VDpudGgtY2hpbGQoNW4rNCkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbn1cXHJcXG4uc3R5bGVzX19zbGlkZXItaXRlbV9fM0dlN1Q6bnRoLWNoaWxkKDVuKzUpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcclxcbiAgICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcInN0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLFlBQVk7QUFDaEJcIixcImZpbGVcIjpcInN0eWxlcy5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndyYXBwZXJ7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcbi5zbGlkZXJUcmFja3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjJzO1xcclxcbn1cXHJcXG4uc2xpZGVyQnV0dG9uc3tcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLnNsaWRlckJ1dHRvbnMgPiBidXR0b24ge1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG59XFxyXFxuLnNsaWRlci1pdGVte1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4uc2xpZGVyLWl0ZW06bnRoLWNoaWxkKDVuKzQpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG59XFxyXFxuLnNsaWRlci1pdGVtOm50aC1jaGlsZCg1bis1KSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXHJcXG4gICAgaGVpZ2h0OiA0MDBweDtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbn1cIl19XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwid3JhcHBlclwiOiBcInN0eWxlc19fd3JhcHBlcl9fMUVZMmFcIixcblx0XCJzbGlkZXJUcmFja1wiOiBcInN0eWxlc19fc2xpZGVyVHJhY2tfXzF0V1pKXCIsXG5cdFwic2xpZGVyQnV0dG9uc1wiOiBcInN0eWxlc19fc2xpZGVyQnV0dG9uc19fMUo0M3NcIixcblx0XCJzbGlkZXItaXRlbVwiOiBcInN0eWxlc19fc2xpZGVyLWl0ZW1fXzNHZTdUXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vbmF2aWdhdGlvbidcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5jc3MnXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBTbGlkZXJKcyA9IChpZCwgdGltZXIsIGF1dG9wbGF5LCBzaG93QnRucykgPT4ge1xyXG4gICAgICAgIGxldCBwb3NpdGlvbiA9IDAsIGRpc3BsYWNlbWVudCA9IDAsIGNvb3JkaW5hdGVzLCBwbGF5ZXIsIHBsYXlDaGVja2VyID0gZmFsc2VcclxuICAgICAgICBsZXQgd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY29uc3QgdHJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcclxuICAgICAgICBjb25zdCBpdGVtcyA9IHRyYWNrLmNoaWxkcmVuXHJcblxyXG4gICAgICAgIGlmIChBcnJheS5mcm9tKGl0ZW1zKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgYWxlcnQoYNCSINC60L7QvdGC0LXQudC90LXRgNC1INGBIGlkICcke2lkfSDQvdC10YIg0Y3Qu9C10LzQtdC90YLQvtCyINC00LvRjyDQvtGC0L7QsdGA0LDQttC10L3QuNGPJ2ApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdHJhY2suc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgICAgICB0cmFjay5zdHlsZS50cmFuc2l0aW9uID0gJy4ycydcclxuICAgICAgICAgICAgd3JhcC5pbm5lckhUTUwgPSB0cmFjay5vdXRlckhUTUxcclxuICAgICAgICAgICAgdHJhY2sucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQod3JhcCwgdHJhY2spXHJcbiAgICAgICAgICAgIHdyYXAuY2xhc3NOYW1lID0gc3R5bGVzLndyYXBwZXJcclxuICAgICAgICAgICAgLy8gZGVidWdnZXJcclxuICAgICAgICAgICAgLy8gQXJyYXkuZnJvbShpdGVtcykuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ29uc2VsZWN0c3RhcnQnLCAncmV0dXJuIGZhbHNlJylcclxuICAgICAgICAgICAgLy8gICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdvbm1vdXNlZG93bicsICdyZXR1cm4gZmFsc2UnKVxyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAvLyBBcnJheS5mcm9tKGl0ZW1zKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBpdGVtLnN0eWxlID0gJ2hlaWdodDogMTAwJTsgbWluLWhlaWdodDogMTAwJSdcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgLy8gZGVidWdnZXJcclxuICAgICAgICAgICAgaWYgKGF1dG9wbGF5KSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc2hvd0J0bnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBsYXlCdG4gPSB3cmFwLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdidXR0b24nKVsyXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5Q2hlY2tlciA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheUJ0bi5maXJzdENoaWxkLnNldEF0dHJpYnV0ZSgnc3JjJywgYC4uL3NyYy9zdmcvcGF1c2UtYnV0dG9uLnN2Z2ApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gTmF2aWdhdGlvbihpZCwgcG9zaXRpb24sIGRpc3BsYWNlbWVudCwgJ2J0bk5leHQnKVxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gY29vcmRpbmF0ZXMucG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGFjZW1lbnQgPSBjb29yZGluYXRlcy5kaXNwbGFjZW1lbnRcclxuICAgICAgICAgICAgICAgIH0sIHRpbWVyKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc2hvd0J0bnMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBidG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgICAgIGxldCBidG5OZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgICAgIGxldCBidG5QcmV2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgICAgIGxldCBidG5QbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICAgICAgICAgIGxldCBwcmV2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICAgICAgICAgIGxldCBwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuXHJcbiAgICAgICAgICAgICAgICB3cmFwLmFwcGVuZENoaWxkKGJ0bnMpXHJcbiAgICAgICAgICAgICAgICBidG5zLmNsYXNzTmFtZSA9IHN0eWxlcy5zbGlkZXJCdXR0b25zXHJcblxyXG4gICAgICAgICAgICAgICAgYnRucy5hcHBlbmRDaGlsZChidG5QcmV2KVxyXG4gICAgICAgICAgICAgICAgYnRucy5hcHBlbmRDaGlsZChidG5OZXh0KVxyXG4gICAgICAgICAgICAgICAgYnRucy5hcHBlbmRDaGlsZChidG5QbGF5KVxyXG5cclxuICAgICAgICAgICAgICAgIGJ0blByZXYuYXBwZW5kQ2hpbGQocHJldilcclxuICAgICAgICAgICAgICAgIGJ0bk5leHQuYXBwZW5kQ2hpbGQobmV4dClcclxuICAgICAgICAgICAgICAgIGJ0blBsYXkuYXBwZW5kQ2hpbGQocGxheSlcclxuXHJcbiAgICAgICAgICAgICAgICBwcmV2LnNldEF0dHJpYnV0ZSgnc3JjJywgYC4uL3NyYy9zdmcvbGVmdC1hcnJvdy5zdmdgKVxyXG4gICAgICAgICAgICAgICAgbmV4dC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAuLi9zcmMvc3ZnL3JpZ2h0LWFycm93LnN2Z2ApXHJcbiAgICAgICAgICAgICAgICBwbGF5LnNldEF0dHJpYnV0ZSgnc3JjJywgYC4uL3NyYy9zdmcvcGxheS1idXR0b24uc3ZnYClcclxuXHJcbiAgICAgICAgICAgICAgICBidG5OZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBOYXZpZ2F0aW9uKGlkLCBwb3NpdGlvbiwgZGlzcGxhY2VtZW50LCAnYnRuTmV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSBjb29yZGluYXRlcy5wb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYWNlbWVudCA9IGNvb3JkaW5hdGVzLmRpc3BsYWNlbWVudFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGJ0blByZXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcyA9IE5hdmlnYXRpb24oaWQsIHBvc2l0aW9uLCBkaXNwbGFjZW1lbnQsICdidG5QcmV2JylcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGNvb3JkaW5hdGVzLnBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxhY2VtZW50ID0gY29vcmRpbmF0ZXMuZGlzcGxhY2VtZW50XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYnRuUGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXBsYXlDaGVja2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlDaGVja2VyID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5LnNldEF0dHJpYnV0ZSgnc3JjJywgYC4uL3NyYy9zdmcvcGF1c2UtYnV0dG9uLnN2Z2ApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gTmF2aWdhdGlvbihpZCwgcG9zaXRpb24sIGRpc3BsYWNlbWVudCwgJ2J0bk5leHQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSBjb29yZGluYXRlcy5wb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxhY2VtZW50ID0gY29vcmRpbmF0ZXMuZGlzcGxhY2VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRpbWVyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlDaGVja2VyID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAuLi9zcmMvc3ZnL3BsYXktYnV0dG9uLnN2Z2ApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwocGxheWVyKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBtb3VzZURyYWcgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbW91c2VTdGFydCwgbW91c2VFbmRcclxuICAgICAgICAgICAgICAgIHdyYXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUubm9kZU5hbWUgIT09ICdCVVRUT04nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlU3RhcnQgPSBldmVudC5jbGllbnRYXHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB3cmFwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihldmVudC50YXJnZXQucGFyZW50Tm9kZS5ub2RlTmFtZSAhPT0gJ0JVVFRPTicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VFbmQgPSBldmVudC5jbGllbnRYXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1vdXNlRW5kID4gbW91c2VTdGFydCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBOYXZpZ2F0aW9uKGlkLCBwb3NpdGlvbiwgZGlzcGxhY2VtZW50LCAnYnRuUHJldicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGNvb3JkaW5hdGVzLnBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGFjZW1lbnQgPSBjb29yZGluYXRlcy5kaXNwbGFjZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gTmF2aWdhdGlvbihpZCwgcG9zaXRpb24sIGRpc3BsYWNlbWVudCwgJ2J0bk5leHQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSBjb29yZGluYXRlcy5wb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxhY2VtZW50ID0gY29vcmRpbmF0ZXMuZGlzcGxhY2VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHRvdWNoRHJhZyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB0b3VjaFN0YXJ0LCB0b3VjaEVuZFxyXG4gICAgICAgICAgICAgICAgd3JhcC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hTdGFydCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFhcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB3cmFwLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hFbmQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodG91Y2hFbmQgPiB0b3VjaFN0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gTmF2aWdhdGlvbihpZCwgcG9zaXRpb24sIGRpc3BsYWNlbWVudCwgJ2J0blByZXYnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGNvb3JkaW5hdGVzLnBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYWNlbWVudCA9IGNvb3JkaW5hdGVzLmRpc3BsYWNlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gTmF2aWdhdGlvbihpZCwgcG9zaXRpb24sIGRpc3BsYWNlbWVudCwgJ2J0bk5leHQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGNvb3JkaW5hdGVzLnBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYWNlbWVudCA9IGNvb3JkaW5hdGVzLmRpc3BsYWNlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbW91c2VEcmFnKClcclxuICAgICAgICAgICAgdG91Y2hEcmFnKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuU2xpZGVySnMgPSBTbGlkZXJKc1xyXG59KSgpXHJcbiIsImNvbnN0IE5hdmlnYXRpb24gPSAoaWQsIHBvc2l0aW9uLCBkaXNwbGFjZW1lbnQsIGVsZW1lbnQpID0+IHtcclxuICAgIGxldCByZXBsYWNlUG9zaXRpb25cclxuICAgIGNvbnN0IHRyYWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXHJcbiAgICBjb25zdCBpdGVtcyA9IHRyYWNrLmNoaWxkcmVuXHJcbiAgICBjb25zdCBpdGVtc1dpZHRoTWFwID0gW11cclxuICAgIGxldCBzdW1XaWR0aCA9IDBcclxuXHJcbiAgICBBcnJheS5mcm9tKGl0ZW1zKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbXNXaWR0aE1hcC5wdXNoKGl0ZW0ub2Zmc2V0V2lkdGgpXHJcbiAgICAgICAgc3VtV2lkdGggKz0gaXRlbS5vZmZzZXRXaWR0aFxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoZWxlbWVudCA9PT0gJ2J0blByZXYnKSB7XHJcbiAgICAgICAgcG9zaXRpb24gPT09IDAgPyBwb3NpdGlvbiA9IGl0ZW1zV2lkdGhNYXAubGVuZ3RoIC0gMSA6IHBvc2l0aW9uLS1cclxuICAgICAgICBkaXNwbGFjZW1lbnQgKz0gaXRlbXNXaWR0aE1hcFtwb3NpdGlvbl1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcG9zaXRpb24gPT09IGl0ZW1zV2lkdGhNYXAubGVuZ3RoIC0gMSA/IHBvc2l0aW9uID0gMCA6IHBvc2l0aW9uKytcclxuICAgICAgICBkaXNwbGFjZW1lbnQgLT0gaXRlbXNXaWR0aE1hcFtwb3NpdGlvbl1cclxuICAgIH1cclxuXHJcbiAgICB0cmFjay5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2Rpc3BsYWNlbWVudH1weClgXHJcblxyXG4gICAgdHJhY2suYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbnN0YXJ0JywgKCkgPT4ge1xyXG4gICAgICAgIGlmKGVsZW1lbnQgPT09ICdidG5QcmV2Jykge1xyXG4gICAgICAgICAgICBpZihwb3NpdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVwbGFjZVBvc2l0aW9uID0gaXRlbXNXaWR0aE1hcC5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXBsYWNlUG9zaXRpb24gPSBwb3NpdGlvbiArIDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKHBvc2l0aW9uID09PSBpdGVtc1dpZHRoTWFwLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHJlcGxhY2VQb3NpdGlvbiA9IDBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcGxhY2VQb3NpdGlvbiA9IHBvc2l0aW9uIC0gMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGl0ZW1zLml0ZW0ocG9zaXRpb24pLnN0eWxlLmxlZnQgPSBgJHstKHN1bVdpZHRoICogTWF0aC5jZWlsKGRpc3BsYWNlbWVudCAvIHN1bVdpZHRoKSl9cHhgXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtwb3NpdGlvbjogcG9zaXRpb24sIGRpc3BsYWNlbWVudDogZGlzcGxhY2VtZW50fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi9zdHlsZXMuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9