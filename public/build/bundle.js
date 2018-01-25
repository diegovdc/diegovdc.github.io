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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "http://localhost:8080/public/build";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./es6/mazorca.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("./sass/mazorca.scss");

/***/ }),

/***/ "./es6/micorriza.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tapLogger = __webpack_require__("./node_modules/tap-logger/index.js");

var _tapLogger2 = _interopRequireDefault(_tapLogger);

var _hyperscript = __webpack_require__("./node_modules/hyperscript/index.js");

var _hyperscript2 = _interopRequireDefault(_hyperscript);

var _hyperscriptHelpers = __webpack_require__("./node_modules/hyperscript-helpers/dist/index.js");

var _hyperscriptHelpers2 = _interopRequireDefault(_hyperscriptHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _hh = (0, _hyperscriptHelpers2.default)(_hyperscript2.default),
    div = _hh.div,
    p = _hh.p,
    a = _hh.a,
    h3 = _hh.h3,
    iframe = _hh.iframe,
    h1 = _hh.h1,
    h2 = _hh.h2,
    img = _hh.img,
    audio = _hh.audio;

var intro = 'En los \xFAltimos dos a\xF1os he estado explorando la m\xFAsica hecha de m\xFAsicas. Mi inter\xE9s se ha centrado en la  manera en que una pieza puede relacionarse con otra. Esta relaci\xF3n con la otredad de la pieza puede llevarse hasta el punto en que la misma pieza se vuelve otra para s\xED misma (25 Campanas).\nSe trata de que la relaci\xF3n suceda de modo que una obra pueda transformar a la otra, lo que implica que las obras est\xE1n en s\xED mismas abiertas y en constante transformaci\xF3n,incluso evoluci\xF3n.\nExplorar la interacci\xF3n como sucede a nivel humano, cada obra es c\xF3mo una persona en sus relaciones cambiantes con las otras (una pieza no es la misma en un para una pieza que para otra, del mismo modo en que yo no soy el mismo para una colaboradora que para un amigo)'.split('\n').map(function (par) {
    return p([par]);
});

// const pdfURL = 'https://github.com/diegovdc/mini-echoic-space/blob/master/public/scores/'
var pdfURL = 'https://github.com/diegovdc/mini-echoic-space/raw/master/public/scores/';
var tracks = [{
    name: '25 campanas (para Ramis Lao)',
    track: 'public/tracks/25 campanas (con Ramis Lao).mp3',
    img: '',
    score: pdfURL + '25Campanas-DiegoVillase%C3%B1orDeCortina.pdf',
    description: 'Superposici\xF3n de una pieza sobre s\xED misma (guitarras, Ramis Lao y Diego Villase\xF1or)'
}, {
    name: 'Exploración del Sueño',
    track: 'public/tracks/exploracion-del-sueno-m1.mp3',
    img: '',
    score: '',
    description: 'C\xE1nones sobre una melod\xEDa para ondas senoidales.  Exploraci\xF3n de la s\xEDntesis por contrapunto y de la escritura de melod\xEDas a trav\xE9s de redes de relaciones. Se recomienda ampliamente escuchar esta pieza en un buen equipo de sonido, porque tiene frecuencias graves que de otro modo no sonar\xE1n\''
}, {
    name: '21 clouds & 28 palabras',
    track: 'public/tracks/21 clouds & 28 palabras take 1 (w_ Andrew Jamieson).mp3',
    img: '',
    score: pdfURL + '21%20Nubes%20%2B%2028%20Palabras.pdf',
    description: 'Dos piezas superpuestas e interactuando: 21 nubes (piano, Andrew Jamieson) y 28 palabras (voz, Diego Villase\xF1or).'
}, {
    name: 'Memories of a Wedding',
    track: '',
    img: '',
    score: pdfURL + 'memories-of-a-wedding.pdf',
    description: 'Para dos voces y uno o m\xE1s instrumentos. Serie de ecos para poemas de 4 palabras'
}];

var videos = [{
    name: '{Videcoic One}',
    iframe: iframe('.video-iframe', {
        src: "https://www.youtube.com/embed/s15OA9nZ7AY",
        frameborder: "0",
        allow: "autoplay; encrypted-media",
        allowfullscreen: true
    }),
    score: pdfURL + 'Videcóico%20Uno%20-%20ensamblado.pdf',
    description: 'Combinaci\xF3n de 5 piezas para conformar una sexta como resultado de la intercci\xF3n de las otras 5. "Espiritu penetrando en \xC1rbol", "21 Nubes", "25 Campanas", "28 palabras" y "Memories of a Wedding" (voces, Danishta Rivero y Diego Villase\xF1or, guitarra, Jakob Pek, piano Andrew Jamieson, percusiones Nava Dunkelman, electr\xF3nica Jeannie Aprille Tang y Aaron Oppenheim)'
}];

var app = div('.main', [h1('.main-ttl', ['Diego Villaseñor, ', a({ href: "http://echoic.space" }, ['echoic.space'])]), div('.intro', intro), videos.map(function (v) {
    return div('.video', [h2('.track-ttl', [v.name]), a('.track-score', { href: v.score, target: '_blank' }, ['Partitura']), div('.description', v.description), div('.video-iframe-container', v.iframe)]);
}), tracks.map(function (t) {
    return div('.track', [h2('.track-ttl', [t.name]), t.track !== '' ? audio({ src: t.track, controls: true }) : div(), a('.track-score', { href: t.score, target: '_blank' }, ['Partitura']), div('.description', t.description)]);
})]);
document.getElementById('app').appendChild(_tapLogger2.default.id(app));
if (false) {
    module.hot.accept();
} //permite hacer Hot Module Replacement

/***/ }),

/***/ "./node_modules/browser-split/index.js":
/***/ (function(module, exports) {

/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */

/**
 * Splits a string into an array of strings using a regex or string separator. Matches of the
 * separator are not included in the result array. However, if `separator` is a regex that contains
 * capturing groups, backreferences are spliced into the result each time `separator` is matched.
 * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
 * cross-browser.
 * @param {String} str String to split.
 * @param {RegExp|String} separator Regex or string to use for separating the string.
 * @param {Number} [limit] Maximum number of items to include in the result array.
 * @returns {Array} Array of substrings.
 * @example
 *
 * // Basic use
 * split('a b c d', ' ');
 * // -> ['a', 'b', 'c', 'd']
 *
 * // With limit
 * split('a b c d', ' ', 2);
 * // -> ['a', 'b']
 *
 * // Backreferences in result array
 * split('..word1 word2..', /([a-z]+)(\d+)/i);
 * // -> ['..', 'word', '1', ' ', 'word', '2', '..']
 */
module.exports = (function split(undef) {

  var nativeSplit = String.prototype.split,
    compliantExecNpcg = /()??/.exec("")[1] === undef,
    // NPCG: nonparticipating capturing group
    self;

  self = function(str, separator, limit) {
    // If `separator` is not a regex, use `nativeSplit`
    if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
      return nativeSplit.call(str, separator, limit);
    }
    var output = [],
      flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.extended ? "x" : "") + // Proposed for ES6
      (separator.sticky ? "y" : ""),
      // Firefox 3+
      lastLastIndex = 0,
      // Make `global` and avoid `lastIndex` issues by working with a copy
      separator = new RegExp(separator.source, flags + "g"),
      separator2, match, lastIndex, lastLength;
    str += ""; // Type-convert
    if (!compliantExecNpcg) {
      // Doesn't need flags gy, but they don't hurt
      separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
    }
    /* Values for `limit`, per the spec:
     * If undefined: 4294967295 // Math.pow(2, 32) - 1
     * If 0, Infinity, or NaN: 0
     * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
     * If negative number: 4294967296 - Math.floor(Math.abs(limit))
     * If other: Type-convert, then use the above rules
     */
    limit = limit === undef ? -1 >>> 0 : // Math.pow(2, 32) - 1
    limit >>> 0; // ToUint32(limit)
    while (match = separator.exec(str)) {
      // `separator.lastIndex` is not reliable cross-browser
      lastIndex = match.index + match[0].length;
      if (lastIndex > lastLastIndex) {
        output.push(str.slice(lastLastIndex, match.index));
        // Fix browsers whose `exec` methods don't consistently return `undefined` for
        // nonparticipating capturing groups
        if (!compliantExecNpcg && match.length > 1) {
          match[0].replace(separator2, function() {
            for (var i = 1; i < arguments.length - 2; i++) {
              if (arguments[i] === undef) {
                match[i] = undef;
              }
            }
          });
        }
        if (match.length > 1 && match.index < str.length) {
          Array.prototype.push.apply(output, match.slice(1));
        }
        lastLength = match[0].length;
        lastLastIndex = lastIndex;
        if (output.length >= limit) {
          break;
        }
      }
      if (separator.lastIndex === match.index) {
        separator.lastIndex++; // Avoid an infinite loop
      }
    }
    if (lastLastIndex === str.length) {
      if (lastLength || !separator.test("")) {
        output.push("");
      }
    } else {
      output.push(str.slice(lastLastIndex));
    }
    return output.length > limit ? output.slice(0, limit) : output;
  };

  return self;
})();


/***/ }),

/***/ "./node_modules/class-list/index.js":
/***/ (function(module, exports, __webpack_require__) {

// contains, add, remove, toggle
var indexof = __webpack_require__("./node_modules/indexof/index.js")

module.exports = ClassList

function ClassList(elem) {
    var cl = elem.classList

    if (cl) {
        return cl
    }

    var classList = {
        add: add
        , remove: remove
        , contains: contains
        , toggle: toggle
        , toString: $toString
        , length: 0
        , item: item
    }

    return classList

    function add(token) {
        var list = getTokens()
        if (indexof(list, token) > -1) {
            return
        }
        list.push(token)
        setTokens(list)
    }

    function remove(token) {
        var list = getTokens()
            , index = indexof(list, token)

        if (index === -1) {
            return
        }

        list.splice(index, 1)
        setTokens(list)
    }

    function contains(token) {
        return indexof(getTokens(), token) > -1
    }

    function toggle(token) {
        if (contains(token)) {
            remove(token)
            return false
        } else {
            add(token)
            return true
        }
    }

    function $toString() {
        return elem.className
    }

    function item(index) {
        var tokens = getTokens()
        return tokens[index] || null
    }

    function getTokens() {
        var className = elem.className

        return filter(className.split(" "), isTruthy)
    }

    function setTokens(list) {
        var length = list.length

        elem.className = list.join(" ")
        classList.length = length

        for (var i = 0; i < list.length; i++) {
            classList[i] = list[i]
        }

        delete list[length]
    }
}

function filter (arr, fn) {
    var ret = []
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i])) ret.push(arr[i])
    }
    return ret
}

function isTruthy(value) {
    return !!value
}


/***/ }),

/***/ "./node_modules/hyperscript-helpers/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
var isValidString = function isValidString(param) {
  return typeof param === 'string' && param.length > 0;
};

var startsWith = function startsWith(string, start) {
  return string[0] === start;
};

var isSelector = function isSelector(param) {
  return isValidString(param) && (startsWith(param, '.') || startsWith(param, '#'));
};

var node = function node(h) {
  return function (tagName) {
    return function (first) {
      for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }

      if (isSelector(first)) {
        return h.apply(undefined, [tagName + first].concat(rest));
      } else if (typeof first === 'undefined') {
        return h(tagName);
      } else {
        return h.apply(undefined, [tagName, first].concat(rest));
      }
    };
  };
};

var TAG_NAMES = ['a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'bgsound', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command', 'content', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'image', 'img', 'input', 'ins', 'isindex', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'listing', 'main', 'map', 'mark', 'marquee', 'math', 'menu', 'menuitem', 'meta', 'meter', 'multicol', 'nav', 'nextid', 'nobr', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'plaintext', 'pre', 'progress', 'q', 'rb', 'rbc', 'rp', 'rt', 'rtc', 'ruby', 's', 'samp', 'script', 'section', 'select', 'shadow', 'slot', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr', 'xmp'];

exports['default'] = function (h) {
  var createTag = node(h);
  var exported = { TAG_NAMES: TAG_NAMES, isSelector: isSelector, createTag: createTag };
  TAG_NAMES.forEach(function (n) {
    exported[n] = createTag(n);
  });
  return exported;
};

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/hyperscript/index.js":
/***/ (function(module, exports, __webpack_require__) {

var split = __webpack_require__("./node_modules/browser-split/index.js")
var ClassList = __webpack_require__("./node_modules/class-list/index.js")

var w = typeof window === 'undefined' ? __webpack_require__(0) : window
var document = w.document
var Text = w.Text

function context () {

  var cleanupFuncs = []

  function h() {
    var args = [].slice.call(arguments), e = null
    function item (l) {
      var r
      function parseClass (string) {
        // Our minimal parser doesn’t understand escaping CSS special
        // characters like `#`. Don’t use them. More reading:
        // https://mathiasbynens.be/notes/css-escapes .

        var m = split(string, /([\.#]?[^\s#.]+)/)
        if(/^\.|#/.test(m[1]))
          e = document.createElement('div')
        forEach(m, function (v) {
          var s = v.substring(1,v.length)
          if(!v) return
          if(!e)
            e = document.createElement(v)
          else if (v[0] === '.')
            ClassList(e).add(s)
          else if (v[0] === '#')
            e.setAttribute('id', s)
        })
      }

      if(l == null)
        ;
      else if('string' === typeof l) {
        if(!e)
          parseClass(l)
        else
          e.appendChild(r = document.createTextNode(l))
      }
      else if('number' === typeof l
        || 'boolean' === typeof l
        || l instanceof Date
        || l instanceof RegExp ) {
          e.appendChild(r = document.createTextNode(l.toString()))
      }
      //there might be a better way to handle this...
      else if (isArray(l))
        forEach(l, item)
      else if(isNode(l))
        e.appendChild(r = l)
      else if(l instanceof Text)
        e.appendChild(r = l)
      else if ('object' === typeof l) {
        for (var k in l) {
          if('function' === typeof l[k]) {
            if(/^on\w+/.test(k)) {
              (function (k, l) { // capture k, l in the closure
                if (e.addEventListener){
                  e.addEventListener(k.substring(2), l[k], false)
                  cleanupFuncs.push(function(){
                    e.removeEventListener(k.substring(2), l[k], false)
                  })
                }else{
                  e.attachEvent(k, l[k])
                  cleanupFuncs.push(function(){
                    e.detachEvent(k, l[k])
                  })
                }
              })(k, l)
            } else {
              // observable
              e[k] = l[k]()
              cleanupFuncs.push(l[k](function (v) {
                e[k] = v
              }))
            }
          }
          else if(k === 'style') {
            if('string' === typeof l[k]) {
              e.style.cssText = l[k]
            }else{
              for (var s in l[k]) (function(s, v) {
                if('function' === typeof v) {
                  // observable
                  e.style.setProperty(s, v())
                  cleanupFuncs.push(v(function (val) {
                    e.style.setProperty(s, val)
                  }))
                } else
                  var match = l[k][s].match(/(.*)\W+!important\W*$/);
                  if (match) {
                    e.style.setProperty(s, match[1], 'important')
                  } else {
                    e.style.setProperty(s, l[k][s])
                  }
              })(s, l[k][s])
            }
          } else if(k === 'attrs') {
            for (var v in l[k]) {
              e.setAttribute(v, l[k][v])
            }
          }
          else if (k.substr(0, 5) === "data-") {
            e.setAttribute(k, l[k])
          } else {
            e[k] = l[k]
          }
        }
      } else if ('function' === typeof l) {
        //assume it's an observable!
        var v = l()
        e.appendChild(r = isNode(v) ? v : document.createTextNode(v))

        cleanupFuncs.push(l(function (v) {
          if(isNode(v) && r.parentElement)
            r.parentElement.replaceChild(v, r), r = v
          else
            r.textContent = v
        }))
      }

      return r
    }
    while(args.length)
      item(args.shift())

    return e
  }

  h.cleanup = function () {
    for (var i = 0; i < cleanupFuncs.length; i++){
      cleanupFuncs[i]()
    }
    cleanupFuncs.length = 0
  }

  return h
}

var h = module.exports = context()
h.context = context

function isNode (el) {
  return el && el.nodeName && el.nodeType
}

function forEach (arr, fn) {
  if (arr.forEach) return arr.forEach(fn)
  for (var i = 0; i < arr.length; i++) fn(arr[i], i)
}

function isArray (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]'
}




/***/ }),

/***/ "./node_modules/indexof/index.js":
/***/ (function(module, exports) {


var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),

/***/ "./node_modules/tap-logger/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Object.assign(function () {
    for (var _len = arguments.length, xs = Array(_len), _key = 0; _key < _len; _key++) {
        xs[_key] = arguments[_key];
    }

    console.log.apply(console, xs);
    return xs[xs.length - 1];
}, {
    id: function id(x) {
        return x;
    },
    l: console.log,
    hola: function hola() {
        return console.log('hola');
    },
    start: function start() {
        return console.log('\n.\n..\n...\n....\n.....\n......\n.......\n........\nStarting:....\n');
    },
    end: function end() {
        return console.log('\nEnding:....\n........\n.......\n......\n.....\n....\n...\n..\n.\n');
    },
    c: function c(msg) {
        return function (x) {
            //curried
            console.log(msg, x);
            return x;
        };
    },
    ap: function ap(fn, x) {
        console.log(fn(x), x);
        return x;
    },
    ap_c: function ap_c(fn) {
        return function (x) {
            console.log(fn(x), x);
            return x;
        };
    }
});

/***/ }),

/***/ "./sass/mazorca.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./es6/mazorca.js");
module.exports = __webpack_require__("./es6/micorriza.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map