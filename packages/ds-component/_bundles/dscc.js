(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("dscc", [], factory);
	else if(typeof exports === 'object')
		exports["dscc"] = factory();
	else
		root["dscc"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/querystringify/index.js":
/*!**********************************************!*\
  !*** ./node_modules/querystringify/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */
function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}

/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */
function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //
    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = []
    , value
    , key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encodeURIComponent(key);
      value = encodeURIComponent(value);

      //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //
      if (key === null || value === null) continue;
      pairs.push(key +'='+ value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),

/***/ "./node_modules/requires-port/index.js":
/*!*********************************************!*\
  !*** ./node_modules/requires-port/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),

/***/ "./node_modules/url-parse/index.js":
/*!*****************************************!*\
  !*** ./node_modules/url-parse/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var required = __webpack_require__(/*! requires-port */ "./node_modules/requires-port/index.js")
  , qs = __webpack_require__(/*! querystringify */ "./node_modules/querystringify/index.js")
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , whitespace = '[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]'
  , left = new RegExp('^'+ whitespace +'+');

/**
 * Trim a given string.
 *
 * @param {String} str String to trim.
 * @public
 */
function trimLeft(str) {
  return (str ? str : '').toString().replace(left, '');
}

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address) {          // Sanitize what is left of the address
    return address.replace('\\', '/');
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var globalVar;

  if (typeof window !== 'undefined') globalVar = window;
  else if (typeof global !== 'undefined') globalVar = global;
  else if (typeof self !== 'undefined') globalVar = self;
  else globalVar = {};

  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  address = trimLeft(address);
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  if (relative === '') return base;

  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  address = trimLeft(address);

  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = qs;

module.exports = Url;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/*!
  Copyright 2018 Google LLC

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
var parse = __webpack_require__(/*! url-parse */ "./node_modules/url-parse/index.js");
var types_1 = __webpack_require__(/*! ./types */ "./src/types.ts");
// Make all exported types available to external users.
__export(__webpack_require__(/*! ./types */ "./src/types.ts"));
/**
 * Returns the width (in pixels) of the vis's iframe.
 *
 * Usage:
 * ```
 * var myWidth = dscc.getWidth();
 * console.log('My width is: ', myWidth);
 * ```
 */
exports.getWidth = function () { return document.body.clientWidth; };
/**
 * Returns the height (in pixels) of the vis's iframe.
 *
 * Usage:
 * ```
 * var myHeight = dscc.getHeight();
 * console.log('My height is: ', myHeight);
 * ```
 */
exports.getHeight = function () { return document.documentElement.clientHeight; };
/**
 * Returns the componentId of the vis. Component ids uniquely identify a vis to
 * Data Studio.
 *
 * Usage:
 * ```
 * var myComponentId = dscc.getComponentId();
 * console.log('My componentId is: ', myComponentId);
 * ```
 */
exports.getComponentId = function () {
    var query = parse(window.location.href, true).query;
    if (query.dscId) {
        return query.dscId;
    }
    else {
        throw new Error('dscId must be in the query parameters. ' +
            'This is a bug in ds-component, please file a bug: ' +
            'https://github.com/googledatastudio/ds-component/issues/new');
    }
};
/**
 * Parses a `'\u00a0\u00a0'` delimited string into component parts. If any parts
 * are missing, they will be returned as undefined.
 *
 * Usage:
 * ```
 * const myImage = parseImage('originalurl.com\u00a0\u00a0proxiedurl.com\u00a0\u00a0alt text');
 *
 * expect(myImage).toEqual({
 *   originalUrl: 'originalurl.com',
 *   proxiedUrl: 'proxiedurl.com',
 *   altText: 'alt text',
 * });
 * ```
 */
exports.parseImage = function (value) {
    var _a = value.split('\u00a0\u00a0'), originalUrl = _a[0], proxiedUrl = _a[1], altText = _a[2];
    return {
        altText: altText,
        originalUrl: originalUrl,
        proxiedUrl: proxiedUrl,
    };
};
/**
 * Returns the fields indexed by their Data Studio id.
 */
var fieldsById = function (message) {
    return message.fields.reduce(function (acc, field) {
        acc[field.id] = field;
        return acc;
    }, {});
};
/**
 * Zips two arrays together into a new array. Uses the length of the shortest
 * array.
 *
 * Usage:
 * ```
 * const a = [1, 2, 3];
 * const b = ['a', 'b', 'c', 'd'];
 * const zipped = zip2(a, b);
 * expect(zipped).toEqual([[1, 'a'], [2, 'b'], [3, 'c']]);
 * ```
 */
var zip2 = function (t, u) {
    if (t.length < u.length) {
        return t.map(function (tEntry, idx) { return [tEntry, u[idx]]; });
    }
    else {
        return u.map(function (uEntry, idx) { return [t[idx], uEntry]; });
    }
};
// `.sort` isn't stable, but if you compare items, and when they are equal use
// the original index, it is then stable.
var stableSort = function (arr, compare) {
    return arr
        .map(function (item, index) { return ({ item: item, index: index }); })
        .sort(function (a, b) { return compare(a.item, b.item) || a.index - b.index; })
        .map(function (_a) {
        var item = _a.item;
        return item;
    });
};
var dimensionOrMetric = function (cde) {
    return cde.type === types_1.ConfigDataElementType.DIMENSION ||
        cde.type === types_1.ConfigDataElementType.METRIC;
};
var toNum = function (cdet) {
    return cdet === types_1.ConfigDataElementType.DIMENSION ? -1 : 1;
};
/**
 * Flattens the configIds from a message into a single array. The config Ids
 * will be repeated for the `METRIC`/`DIMENSION` selections. i.e. for a `METRIC`
 * named `"metrics"` of `{min: 2, max:3}`, the value metrics will be repeated 2
 * to 3 times depending on what values the user selects.
 *
 * Note: this is relying on the fact that the postMessage from DataStudio has
 * the fields sorted to be dimensions, followed by metrics.
 */
var flattenConfigIds = function (message) {
    var configDataElements = [];
    message.config.data.forEach(function (configData) {
        configData.elements.forEach(function (configDataElement) {
            configDataElements.push(configDataElement);
        });
    });
    var dimnsAndMets = configDataElements.filter(dimensionOrMetric);
    var sorted = stableSort(dimnsAndMets, function (a, b) { return toNum(a.type) - toNum(b.type); });
    var configIds = [];
    sorted.forEach(function (configDataElement) {
        configDataElement.value.forEach(function () { return configIds.push(configDataElement.id); });
    });
    return configIds;
};
/**
 * Joins a single table row with the matching `ConfigId`
 */
var joinObjectRow = function (configIds) { return function (row) {
    var objectRow = {};
    zip2(row, configIds).forEach(function (_a) {
        var rowVal = _a[0], configId = _a[1];
        if (objectRow[configId] === undefined) {
            objectRow[configId] = [];
        }
        objectRow[configId].push(rowVal);
    }, {});
    return objectRow;
}; };
/**
 * Formats tables into the `ObjectTables` format.
 */
var objectFormatTable = function (message) {
    var _a;
    var configIds = flattenConfigIds(message);
    var objectTables = (_a = {}, _a[types_1.TableType.DEFAULT] = [], _a);
    message.dataResponse.tables.forEach(function (table) {
        var objectRows = table.rows.map(joinObjectRow(configIds));
        objectTables[table.id] = objectRows;
    });
    return objectTables;
};
/**
 * Formats tables into the `Tables` format.
 */
var tableFormatTable = function (message) {
    var _a;
    var fieldsBy = exports.fieldsByConfigId(message);
    var configIds = flattenConfigIds(message);
    var configIdIdx = {};
    var headers = configIds.map(function (configId) {
        if (configIdIdx[configId] === undefined) {
            configIdIdx[configId] = 0;
        }
        else {
            configIdIdx[configId]++;
        }
        var idx = configIdIdx[configId];
        var field = fieldsBy[configId][idx];
        var heading = __assign({}, field, { configId: configId });
        return heading;
    });
    var tableTables = (_a = {},
        _a[types_1.TableType.DEFAULT] = { headers: [], rows: [] },
        _a);
    message.dataResponse.tables.forEach(function (table) {
        tableTables[table.id] = {
            headers: headers,
            rows: table.rows,
        };
    });
    return tableTables;
};
/**
 * Returns the fields indexed by their config id. Since many fields can be in
 * the same `METRIC`/`DIMENSION` selection, `configId` is mapped to `Field[]`.
 */
exports.fieldsByConfigId = function (message) {
    var fieldsByDSId = fieldsById(message);
    var fieldsBy = {};
    message.config.data.forEach(function (configData) {
        configData.elements.forEach(function (configDataElement) {
            fieldsBy[configDataElement.id] = configDataElement.value.map(function (dsId) { return fieldsByDSId[dsId]; });
        });
    });
    return fieldsBy;
};
/**
 * Flattens the style entries into a single object. `styleId`s should be unique.
 */
var flattenStyle = function (message) {
    var styleById = {};
    (message.config.style || []).forEach(function (styleEntry) {
        styleEntry.elements.forEach(function (configStyleElement) {
            if (styleById[configStyleElement.id] !== undefined) {
                throw new Error("styleIds must be unique. Your styleId: '" + configStyleElement.id + "' is used more than once.");
            }
            styleById[configStyleElement.id] = {
                value: configStyleElement.value,
                defaultValue: configStyleElement.defaultValue,
            };
        });
    }, {});
    return styleById;
};
var themeStyle = function (message) {
    return message.config.themeStyle;
};
var mapInteractionTypes = function (dsInteraction) {
    switch (dsInteraction) {
        case types_1.DSInteractionType.FILTER:
            return types_1.InteractionType.FILTER;
    }
};
var transformDSInteraction = function (message) {
    var dsInteractions = message.config.interactions;
    // TODO - remove once interactions are live.
    if (dsInteractions === undefined) {
        return {};
    }
    return dsInteractions.reduce(function (acc, dsInteraction) {
        var interactions = dsInteraction.supportedActions.map(mapInteractionTypes);
        var value = {
            type: mapInteractionTypes(dsInteraction.value.type),
            data: dsInteraction.value.data,
        };
        acc[dsInteraction.id] = {
            value: value,
            supportedActions: interactions,
        };
        return acc;
    }, {});
};
/**
 * The transform to use for data in a Table format. i.e. `[[1, 2, 3], [4, 5, 6]]`
 */
exports.tableTransform = function (message) { return ({
    tables: tableFormatTable(message),
    fields: exports.fieldsByConfigId(message),
    style: flattenStyle(message),
    theme: themeStyle(message),
    interactions: transformDSInteraction(message),
}); };
/**
 * The transform to use for data in an object format. i.e. `[{name: 'john', views: 3}, {name: 'suzie', views: 5}]`
 */
exports.objectTransform = function (message) { return ({
    tables: objectFormatTable(message),
    fields: exports.fieldsByConfigId(message),
    style: flattenStyle(message),
    theme: themeStyle(message),
    interactions: transformDSInteraction(message),
}); };
/*
 * Subscribes to messages from Data Studio. Calls `cb` for every new
 * [[MessageType.RENDER]] message. Returns a function that will unsubscribe
 * `callback` from further invocations.
 *
 * Usage - tableTransform:
 * ```
 * var unsubscribe = dscc.subscribeToData(function(message) {
 *   console.log(message.tables)
 *   console.log(message.fields)
 *   console.log(message.style)
 * }, {transform: dscc.tableTransform});
 *
 * setTimeout(function() {
 *   unsubscribe();
 * }, 3000)
 * ```

 * Usage - objectTransform:
 * ```
 * var unsubscribe = dscc.subscribeToData(function(message) {
 *   console.log(message.tables)
 *   console.log(message.fields)
 *   console.log(message.style)
 * }, {transform: dscc.objectTransform});
 *
 * setTimeout(function() {
 *   unsubscribe();
 * }, 3000)
 * ```
 */
exports.subscribeToData = function (cb, options) {
    if (options.transform === exports.tableTransform ||
        options.transform === exports.objectTransform) {
        var onMessage_1 = function (message) {
            if (message.data.type === types_1.MessageType.RENDER) {
                cb(options.transform(message.data));
            }
            else {
                console.error("MessageType: " + message.data.type + " is not supported by this version of the library.");
            }
        };
        window.addEventListener('message', onMessage_1);
        var componentId = exports.getComponentId();
        // Tell DataStudio that the viz is ready to get events.
        var vizReadyMessage = {
            componentId: componentId,
            type: types_1.ToDSMessageType.VIZ_READY,
        };
        window.parent.postMessage(vizReadyMessage, '*');
        return function () { return window.removeEventListener('message', onMessage_1); };
    }
    else {
        throw new Error("Only the built in transform functions are supported.");
    }
};
/*
 * Does the thing that interactions should do.
 */
exports.sendInteraction = function (actionId, interaction, data) {
    var componentId = exports.getComponentId();
    var interactionMessage = {
        type: types_1.ToDSMessageType.INTERACTION,
        id: actionId,
        data: data,
        componentId: componentId,
    };
    window.parent.postMessage(interactionMessage, '*');
};
/*
 * Clears an interaction
 */
exports.clearInteraction = function (actionId, interaction) {
    exports.sendInteraction(actionId, interaction, undefined);
};


/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConceptType;
(function (ConceptType) {
    ConceptType["METRIC"] = "METRIC";
    ConceptType["DIMENSION"] = "DIMENSION";
})(ConceptType = exports.ConceptType || (exports.ConceptType = {}));
var MessageType;
(function (MessageType) {
    MessageType["RENDER"] = "RENDER";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var FieldType;
(function (FieldType) {
    FieldType["YEAR"] = "YEAR";
    FieldType["YEAR_QUARTER"] = "YEAR_QUARTER";
    FieldType["YEAR_MONTH"] = "YEAR_MONTH";
    FieldType["YEAR_WEEK"] = "YEAR_WEEK";
    FieldType["YEAR_MONTH_DAY"] = "YEAR_MONTH_DAY";
    FieldType["YEAR_MONTH_DAY_HOUR"] = "YEAR_MONTH_DAY_HOUR";
    FieldType["QUARTER"] = "QUARTER";
    FieldType["MONTH"] = "MONTH";
    FieldType["WEEK"] = "WEEK";
    FieldType["MONTH_DAY"] = "MONTH_DAY";
    FieldType["DAY_OF_WEEK"] = "DAY_OF_WEEK";
    FieldType["DAY"] = "DAY";
    FieldType["HOUR"] = "HOUR";
    FieldType["MINUTE"] = "MINUTE";
    FieldType["DURATION"] = "DURATION";
    FieldType["COUNTRY"] = "COUNTRY";
    FieldType["COUNTRY_CODE"] = "COUNTRY_CODE";
    FieldType["CONTINENT"] = "CONTINENT";
    FieldType["CONTINENT_CODE"] = "CONTINENT_CODE";
    FieldType["SUB_CONTINENT"] = "SUB_CONTINENT";
    FieldType["SUB_CONTINENT_CODE"] = "SUB_CONTINENT_CODE";
    FieldType["REGION"] = "REGION";
    FieldType["REGION_CODE"] = "REGION_CODE";
    FieldType["CITY"] = "CITY";
    FieldType["CITY_CODE"] = "CITY_CODE";
    FieldType["METRO_CODE"] = "METRO_CODE";
    FieldType["LATITUDE_LONGITUDE"] = "LATITUDE_LONGITUDE";
    FieldType["NUMBER"] = "NUMBER";
    FieldType["PERCENT"] = "PERCENT";
    FieldType["TEXT"] = "TEXT";
    FieldType["BOOLEAN"] = "BOOLEAN";
    FieldType["URL"] = "URL";
    FieldType["IMAGE"] = "IMAGE";
    FieldType["CURRENCY_AED"] = "CURRENCY_AED";
    FieldType["CURRENCY_ALL"] = "CURRENCY_ALL";
    FieldType["CURRENCY_ARS"] = "CURRENCY_ARS";
    FieldType["CURRENCY_AUD"] = "CURRENCY_AUD";
    FieldType["CURRENCY_BDT"] = "CURRENCY_BDT";
    FieldType["CURRENCY_BGN"] = "CURRENCY_BGN";
    FieldType["CURRENCY_BOB"] = "CURRENCY_BOB";
    FieldType["CURRENCY_BRL"] = "CURRENCY_BRL";
    FieldType["CURRENCY_CAD"] = "CURRENCY_CAD";
    FieldType["CURRENCY_CDF"] = "CURRENCY_CDF";
    FieldType["CURRENCY_CHF"] = "CURRENCY_CHF";
    FieldType["CURRENCY_CLP"] = "CURRENCY_CLP";
    FieldType["CURRENCY_CNY"] = "CURRENCY_CNY";
    FieldType["CURRENCY_COP"] = "CURRENCY_COP";
    FieldType["CURRENCY_CRC"] = "CURRENCY_CRC";
    FieldType["CURRENCY_CZK"] = "CURRENCY_CZK";
    FieldType["CURRENCY_DKK"] = "CURRENCY_DKK";
    FieldType["CURRENCY_DOP"] = "CURRENCY_DOP";
    FieldType["CURRENCY_EGP"] = "CURRENCY_EGP";
    FieldType["CURRENCY_ETB"] = "CURRENCY_ETB";
    FieldType["CURRENCY_EUR"] = "CURRENCY_EUR";
    FieldType["CURRENCY_GBP"] = "CURRENCY_GBP";
    FieldType["CURRENCY_HKD"] = "CURRENCY_HKD";
    FieldType["CURRENCY_HRK"] = "CURRENCY_HRK";
    FieldType["CURRENCY_HUF"] = "CURRENCY_HUF";
    FieldType["CURRENCY_IDR"] = "CURRENCY_IDR";
    FieldType["CURRENCY_ILS"] = "CURRENCY_ILS";
    FieldType["CURRENCY_INR"] = "CURRENCY_INR";
    FieldType["CURRENCY_IRR"] = "CURRENCY_IRR";
    FieldType["CURRENCY_ISK"] = "CURRENCY_ISK";
    FieldType["CURRENCY_JMD"] = "CURRENCY_JMD";
    FieldType["CURRENCY_JPY"] = "CURRENCY_JPY";
    FieldType["CURRENCY_KRW"] = "CURRENCY_KRW";
    FieldType["CURRENCY_LKR"] = "CURRENCY_LKR";
    FieldType["CURRENCY_LTL"] = "CURRENCY_LTL";
    FieldType["CURRENCY_MNT"] = "CURRENCY_MNT";
    FieldType["CURRENCY_MVR"] = "CURRENCY_MVR";
    FieldType["CURRENCY_MXN"] = "CURRENCY_MXN";
    FieldType["CURRENCY_MYR"] = "CURRENCY_MYR";
    FieldType["CURRENCY_NOK"] = "CURRENCY_NOK";
    FieldType["CURRENCY_NZD"] = "CURRENCY_NZD";
    FieldType["CURRENCY_PAB"] = "CURRENCY_PAB";
    FieldType["CURRENCY_PEN"] = "CURRENCY_PEN";
    FieldType["CURRENCY_PHP"] = "CURRENCY_PHP";
    FieldType["CURRENCY_PKR"] = "CURRENCY_PKR";
    FieldType["CURRENCY_PLN"] = "CURRENCY_PLN";
    FieldType["CURRENCY_RON"] = "CURRENCY_RON";
    FieldType["CURRENCY_RSD"] = "CURRENCY_RSD";
    FieldType["CURRENCY_RUB"] = "CURRENCY_RUB";
    FieldType["CURRENCY_SAR"] = "CURRENCY_SAR";
    FieldType["CURRENCY_SEK"] = "CURRENCY_SEK";
    FieldType["CURRENCY_SGD"] = "CURRENCY_SGD";
    FieldType["CURRENCY_THB"] = "CURRENCY_THB";
    FieldType["CURRENCY_TRY"] = "CURRENCY_TRY";
    FieldType["CURRENCY_TWD"] = "CURRENCY_TWD";
    FieldType["CURRENCY_TZS"] = "CURRENCY_TZS";
    FieldType["CURRENCY_UAH"] = "CURRENCY_UAH";
    FieldType["CURRENCY_USD"] = "CURRENCY_USD";
    FieldType["CURRENCY_UYU"] = "CURRENCY_UYU";
    FieldType["CURRENCY_VEF"] = "CURRENCY_VEF";
    FieldType["CURRENCY_VND"] = "CURRENCY_VND";
    FieldType["CURRENCY_YER"] = "CURRENCY_YER";
    FieldType["CURRENCY_ZAR"] = "CURRENCY_ZAR";
})(FieldType = exports.FieldType || (exports.FieldType = {}));
var TableType;
(function (TableType) {
    TableType["DEFAULT"] = "DEFAULT";
    TableType["COMPARISON"] = "COMPARISON";
    TableType["SUMMARY"] = "SUMMARY";
})(TableType = exports.TableType || (exports.TableType = {}));
var ConfigDataElementType;
(function (ConfigDataElementType) {
    /**
     * Renders a metric field element.
     */
    ConfigDataElementType["METRIC"] = "METRIC";
    /**
     * Renders a dimension field element.
     */
    ConfigDataElementType["DIMENSION"] = "DIMENSION";
    /**
     * Renders a sort field element.
     *
     * Sort has an order dropdown.
     */
    ConfigDataElementType["SORT"] = "SORT";
    /**
     * Renders a dropdown that affects the maximum number of results returned.
     */
    ConfigDataElementType["MAX_RESULTS"] = "MAX_RESULTS";
})(ConfigDataElementType = exports.ConfigDataElementType || (exports.ConfigDataElementType = {}));
var ConfigStyleElementType;
(function (ConfigStyleElementType) {
    /**
     * Renders a text input box.
     */
    ConfigStyleElementType["TEXTINPUT"] = "TEXTINPUT";
    /**
     * A single select dropdown.
     */
    ConfigStyleElementType["SELECT_SINGLE"] = "SELECT_SINGLE";
    /**
     * Renders a checkbox.
     *
     * Default value: `false`
     */
    ConfigStyleElementType["CHECKBOX"] = "CHECKBOX";
    /**
     * Renders the font color selector.
     *
     * Acceptable default values: HEX color value. E.g. `"#888888"`.
     *
     * Default value: `"#000"`.
     */
    ConfigStyleElementType["FONT_COLOR"] = "FONT_COLOR";
    /**
     * Renders the font size selector.
     *
     * Default value: `"14px"`.
     */
    ConfigStyleElementType["FONT_SIZE"] = "FONT_SIZE";
    /**
     * Renders the font family selector.
     *
     * Default value: `""`
     */
    ConfigStyleElementType["FONT_FAMILY"] = "FONT_FAMILY";
    /**
     * Renders a fill color selector.
     *
     * Acceptable default values: HEX color value.
     */
    ConfigStyleElementType["FILL_COLOR"] = "FILL_COLOR";
    /**
     * Renders a border color selector.
     *
     * Acceptable default values: HEX color value.
     */
    ConfigStyleElementType["BORDER_COLOR"] = "BORDER_COLOR";
    /**
     * Renders an axis color selector.
     *
     * Acceptable default values: HEX color value.
     */
    ConfigStyleElementType["AXIS_COLOR"] = "AXIS_COLOR";
    /**
     * Renders a grid color selector.
     *
     * Acceptable default values: HEX color value.
     */
    ConfigStyleElementType["GRID_COLOR"] = "GRID_COLOR";
    /**
     * Renders an opacity selector.
     */
    ConfigStyleElementType["OPACITY"] = "OPACITY";
    /**
     * Renders a line weight picker.
     */
    ConfigStyleElementType["LINE_WEIGHT"] = "LINE_WEIGHT";
    /**
     * Renders a line style picker.
     *
     * Acceptable default values: `"solid"`, `"dashed"`, `"dotted"`, or `"double"`.
     */
    ConfigStyleElementType["LINE_STYLE"] = "LINE_STYLE";
    /**
     * Renders a border radius selector.
     */
    ConfigStyleElementType["BORDER_RADIUS"] = "BORDER_RADIUS";
    /**
     * Renders an interval selector.
     */
    ConfigStyleElementType["INTERVAL"] = "INTERVAL";
    /**
     * Renders a radio select with pre-defined values.
     */
    ConfigStyleElementType["SELECT_RADIO"] = "SELECT_RADIO";
})(ConfigStyleElementType = exports.ConfigStyleElementType || (exports.ConfigStyleElementType = {}));
var DSInteractionType;
(function (DSInteractionType) {
    DSInteractionType["FILTER"] = "FILTER";
})(DSInteractionType = exports.DSInteractionType || (exports.DSInteractionType = {}));
var ToDSMessageType;
(function (ToDSMessageType) {
    ToDSMessageType["VIZ_READY"] = "vizReady";
    ToDSMessageType["INTERACTION"] = "vizAction";
})(ToDSMessageType = exports.ToDSMessageType || (exports.ToDSMessageType = {}));
var InteractionType;
(function (InteractionType) {
    InteractionType["FILTER"] = "FILTER";
})(InteractionType = exports.InteractionType || (exports.InteractionType = {}));


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kc2NjL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kc2NjL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RzY2MvLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmdpZnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZHNjYy8uL25vZGVfbW9kdWxlcy9yZXF1aXJlcy1wb3J0L2luZGV4LmpzIiwid2VicGFjazovL2RzY2MvLi9ub2RlX21vZHVsZXMvdXJsLXBhcnNlL2luZGV4LmpzIiwid2VicGFjazovL2RzY2MvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2RzY2MvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZHNjYy8uL3NyYy90eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVB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QixDQUFDLEVBckZXLHNCQUFzQixHQUF0Qiw4QkFBc0IsS0FBdEIsOEJBQXNCLFFBcUZqQztBQStDRCxJQUFZLGlCQUVYO0FBRkQsV0FBWSxpQkFBaUI7SUFDM0Isc0NBQWlCO0FBQ25CLENBQUMsRUFGVyxpQkFBaUIsR0FBakIseUJBQWlCLEtBQWpCLHlCQUFpQixRQUU1QjtBQXlHRCxJQUFZLGVBR1g7QUFIRCxXQUFZLGVBQWU7SUFDekIseUNBQXNCO0lBQ3RCLDRDQUF5QjtBQUMzQixDQUFDLEVBSFcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFHMUI7QUEyQ0QsSUFBWSxlQUVYO0FBRkQsV0FBWSxlQUFlO0lBQ3pCLG9DQUFpQjtBQUNuQixDQUFDLEVBRlcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFFMUIiLCJmaWxlIjoiZHNjYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZHNjY1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkc2NjXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRzY2NcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAsIHVuZGVmO1xuXG4vKipcbiAqIERlY29kZSBhIFVSSSBlbmNvZGVkIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIFVSSSBlbmNvZGVkIHN0cmluZy5cbiAqIEByZXR1cm5zIHtTdHJpbmd8TnVsbH0gVGhlIGRlY29kZWQgc3RyaW5nLlxuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGRlY29kZShpbnB1dCkge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoaW5wdXQucmVwbGFjZSgvXFwrL2csICcgJykpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBBdHRlbXB0cyB0byBlbmNvZGUgYSBnaXZlbiBpbnB1dC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIHN0cmluZyB0aGF0IG5lZWRzIHRvIGJlIGVuY29kZWQuXG4gKiBAcmV0dXJucyB7U3RyaW5nfE51bGx9IFRoZSBlbmNvZGVkIHN0cmluZy5cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBlbmNvZGUoaW5wdXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGlucHV0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogU2ltcGxlIHF1ZXJ5IHN0cmluZyBwYXJzZXIuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHF1ZXJ5IFRoZSBxdWVyeSBzdHJpbmcgdGhhdCBuZWVkcyB0byBiZSBwYXJzZWQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gcXVlcnlzdHJpbmcocXVlcnkpIHtcbiAgdmFyIHBhcnNlciA9IC8oW149PyZdKyk9PyhbXiZdKikvZ1xuICAgICwgcmVzdWx0ID0ge31cbiAgICAsIHBhcnQ7XG5cbiAgd2hpbGUgKHBhcnQgPSBwYXJzZXIuZXhlYyhxdWVyeSkpIHtcbiAgICB2YXIga2V5ID0gZGVjb2RlKHBhcnRbMV0pXG4gICAgICAsIHZhbHVlID0gZGVjb2RlKHBhcnRbMl0pO1xuXG4gICAgLy9cbiAgICAvLyBQcmV2ZW50IG92ZXJyaWRpbmcgb2YgZXhpc3RpbmcgcHJvcGVydGllcy4gVGhpcyBlbnN1cmVzIHRoYXQgYnVpbGQtaW5cbiAgICAvLyBtZXRob2RzIGxpa2UgYHRvU3RyaW5nYCBvciBfX3Byb3RvX18gYXJlIG5vdCBvdmVycmlkZW4gYnkgbWFsaWNpb3VzXG4gICAgLy8gcXVlcnlzdHJpbmdzLlxuICAgIC8vXG4gICAgLy8gSW4gdGhlIGNhc2UgaWYgZmFpbGVkIGRlY29kaW5nLCB3ZSB3YW50IHRvIG9taXQgdGhlIGtleS92YWx1ZSBwYWlyc1xuICAgIC8vIGZyb20gdGhlIHJlc3VsdC5cbiAgICAvL1xuICAgIGlmIChrZXkgPT09IG51bGwgfHwgdmFsdWUgPT09IG51bGwgfHwga2V5IGluIHJlc3VsdCkgY29udGludWU7XG4gICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtIGEgcXVlcnkgc3RyaW5nIHRvIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIE9iamVjdCB0aGF0IHNob3VsZCBiZSB0cmFuc2Zvcm1lZC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBwcmVmaXggT3B0aW9uYWwgcHJlZml4LlxuICogQHJldHVybnMge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIHF1ZXJ5c3RyaW5naWZ5KG9iaiwgcHJlZml4KSB7XG4gIHByZWZpeCA9IHByZWZpeCB8fCAnJztcblxuICB2YXIgcGFpcnMgPSBbXVxuICAgICwgdmFsdWVcbiAgICAsIGtleTtcblxuICAvL1xuICAvLyBPcHRpb25hbGx5IHByZWZpeCB3aXRoIGEgJz8nIGlmIG5lZWRlZFxuICAvL1xuICBpZiAoJ3N0cmluZycgIT09IHR5cGVvZiBwcmVmaXgpIHByZWZpeCA9ICc/JztcblxuICBmb3IgKGtleSBpbiBvYmopIHtcbiAgICBpZiAoaGFzLmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YWx1ZSA9IG9ialtrZXldO1xuXG4gICAgICAvL1xuICAgICAgLy8gRWRnZSBjYXNlcyB3aGVyZSB3ZSBhY3R1YWxseSB3YW50IHRvIGVuY29kZSB0aGUgdmFsdWUgdG8gYW4gZW1wdHlcbiAgICAgIC8vIHN0cmluZyBpbnN0ZWFkIG9mIHRoZSBzdHJpbmdpZmllZCB2YWx1ZS5cbiAgICAgIC8vXG4gICAgICBpZiAoIXZhbHVlICYmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWYgfHwgaXNOYU4odmFsdWUpKSkge1xuICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSBlbmNvZGVVUklDb21wb25lbnQoa2V5KTtcbiAgICAgIHZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblxuICAgICAgLy9cbiAgICAgIC8vIElmIHdlIGZhaWxlZCB0byBlbmNvZGUgdGhlIHN0cmluZ3MsIHdlIHNob3VsZCBiYWlsIG91dCBhcyB3ZSBkb24ndFxuICAgICAgLy8gd2FudCB0byBhZGQgaW52YWxpZCBzdHJpbmdzIHRvIHRoZSBxdWVyeS5cbiAgICAgIC8vXG4gICAgICBpZiAoa2V5ID09PSBudWxsIHx8IHZhbHVlID09PSBudWxsKSBjb250aW51ZTtcbiAgICAgIHBhaXJzLnB1c2goa2V5ICsnPScrIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFpcnMubGVuZ3RoID8gcHJlZml4ICsgcGFpcnMuam9pbignJicpIDogJyc7XG59XG5cbi8vXG4vLyBFeHBvc2UgdGhlIG1vZHVsZS5cbi8vXG5leHBvcnRzLnN0cmluZ2lmeSA9IHF1ZXJ5c3RyaW5naWZ5O1xuZXhwb3J0cy5wYXJzZSA9IHF1ZXJ5c3RyaW5nO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENoZWNrIGlmIHdlJ3JlIHJlcXVpcmVkIHRvIGFkZCBhIHBvcnQgbnVtYmVyLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly91cmwuc3BlYy53aGF0d2cub3JnLyNkZWZhdWx0LXBvcnRcbiAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gcG9ydCBQb3J0IG51bWJlciB3ZSBuZWVkIHRvIGNoZWNrXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvdG9jb2wgUHJvdG9jb2wgd2UgbmVlZCB0byBjaGVjayBhZ2FpbnN0LlxuICogQHJldHVybnMge0Jvb2xlYW59IElzIGl0IGEgZGVmYXVsdCBwb3J0IGZvciB0aGUgZ2l2ZW4gcHJvdG9jb2xcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlcXVpcmVkKHBvcnQsIHByb3RvY29sKSB7XG4gIHByb3RvY29sID0gcHJvdG9jb2wuc3BsaXQoJzonKVswXTtcbiAgcG9ydCA9ICtwb3J0O1xuXG4gIGlmICghcG9ydCkgcmV0dXJuIGZhbHNlO1xuXG4gIHN3aXRjaCAocHJvdG9jb2wpIHtcbiAgICBjYXNlICdodHRwJzpcbiAgICBjYXNlICd3cyc6XG4gICAgcmV0dXJuIHBvcnQgIT09IDgwO1xuXG4gICAgY2FzZSAnaHR0cHMnOlxuICAgIGNhc2UgJ3dzcyc6XG4gICAgcmV0dXJuIHBvcnQgIT09IDQ0MztcblxuICAgIGNhc2UgJ2Z0cCc6XG4gICAgcmV0dXJuIHBvcnQgIT09IDIxO1xuXG4gICAgY2FzZSAnZ29waGVyJzpcbiAgICByZXR1cm4gcG9ydCAhPT0gNzA7XG5cbiAgICBjYXNlICdmaWxlJzpcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gcG9ydCAhPT0gMDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZXF1aXJlZCA9IHJlcXVpcmUoJ3JlcXVpcmVzLXBvcnQnKVxuICAsIHFzID0gcmVxdWlyZSgncXVlcnlzdHJpbmdpZnknKVxuICAsIHNsYXNoZXMgPSAvXltBLVphLXpdW0EtWmEtejAtOSstLl0qOlxcL1xcLy9cbiAgLCBwcm90b2NvbHJlID0gL14oW2Etel1bYS16MC05ListXSo6KT8oXFwvXFwvKT8oW1xcU1xcc10qKS9pXG4gICwgd2hpdGVzcGFjZSA9ICdbXFxcXHgwOVxcXFx4MEFcXFxceDBCXFxcXHgwQ1xcXFx4MERcXFxceDIwXFxcXHhBMFxcXFx1MTY4MFxcXFx1MTgwRVxcXFx1MjAwMFxcXFx1MjAwMVxcXFx1MjAwMlxcXFx1MjAwM1xcXFx1MjAwNFxcXFx1MjAwNVxcXFx1MjAwNlxcXFx1MjAwN1xcXFx1MjAwOFxcXFx1MjAwOVxcXFx1MjAwQVxcXFx1MjAyRlxcXFx1MjA1RlxcXFx1MzAwMFxcXFx1MjAyOFxcXFx1MjAyOVxcXFx1RkVGRl0nXG4gICwgbGVmdCA9IG5ldyBSZWdFeHAoJ14nKyB3aGl0ZXNwYWNlICsnKycpO1xuXG4vKipcbiAqIFRyaW0gYSBnaXZlbiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBTdHJpbmcgdG8gdHJpbS5cbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gdHJpbUxlZnQoc3RyKSB7XG4gIHJldHVybiAoc3RyID8gc3RyIDogJycpLnRvU3RyaW5nKCkucmVwbGFjZShsZWZ0LCAnJyk7XG59XG5cbi8qKlxuICogVGhlc2UgYXJlIHRoZSBwYXJzZSBydWxlcyBmb3IgdGhlIFVSTCBwYXJzZXIsIGl0IGluZm9ybXMgdGhlIHBhcnNlclxuICogYWJvdXQ6XG4gKlxuICogMC4gVGhlIGNoYXIgaXQgTmVlZHMgdG8gcGFyc2UsIGlmIGl0J3MgYSBzdHJpbmcgaXQgc2hvdWxkIGJlIGRvbmUgdXNpbmdcbiAqICAgIGluZGV4T2YsIFJlZ0V4cCB1c2luZyBleGVjIGFuZCBOYU4gbWVhbnMgc2V0IGFzIGN1cnJlbnQgdmFsdWUuXG4gKiAxLiBUaGUgcHJvcGVydHkgd2Ugc2hvdWxkIHNldCB3aGVuIHBhcnNpbmcgdGhpcyB2YWx1ZS5cbiAqIDIuIEluZGljYXRpb24gaWYgaXQncyBiYWNrd2FyZHMgb3IgZm9yd2FyZCBwYXJzaW5nLCB3aGVuIHNldCBhcyBudW1iZXIgaXQnc1xuICogICAgdGhlIHZhbHVlIG9mIGV4dHJhIGNoYXJzIHRoYXQgc2hvdWxkIGJlIHNwbGl0IG9mZi5cbiAqIDMuIEluaGVyaXQgZnJvbSBsb2NhdGlvbiBpZiBub24gZXhpc3RpbmcgaW4gdGhlIHBhcnNlci5cbiAqIDQuIGB0b0xvd2VyQ2FzZWAgdGhlIHJlc3VsdGluZyB2YWx1ZS5cbiAqL1xudmFyIHJ1bGVzID0gW1xuICBbJyMnLCAnaGFzaCddLCAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV4dHJhY3QgZnJvbSB0aGUgYmFjay5cbiAgWyc/JywgJ3F1ZXJ5J10sICAgICAgICAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IGZyb20gdGhlIGJhY2suXG4gIGZ1bmN0aW9uIHNhbml0aXplKGFkZHJlc3MpIHsgICAgICAgICAgLy8gU2FuaXRpemUgd2hhdCBpcyBsZWZ0IG9mIHRoZSBhZGRyZXNzXG4gICAgcmV0dXJuIGFkZHJlc3MucmVwbGFjZSgnXFxcXCcsICcvJyk7XG4gIH0sXG4gIFsnLycsICdwYXRobmFtZSddLCAgICAgICAgICAgICAgICAgICAgLy8gRXh0cmFjdCBmcm9tIHRoZSBiYWNrLlxuICBbJ0AnLCAnYXV0aCcsIDFdLCAgICAgICAgICAgICAgICAgICAgIC8vIEV4dHJhY3QgZnJvbSB0aGUgZnJvbnQuXG4gIFtOYU4sICdob3N0JywgdW5kZWZpbmVkLCAxLCAxXSwgICAgICAgLy8gU2V0IGxlZnQgb3ZlciB2YWx1ZS5cbiAgWy86KFxcZCspJC8sICdwb3J0JywgdW5kZWZpbmVkLCAxXSwgICAgLy8gUmVnRXhwIHRoZSBiYWNrLlxuICBbTmFOLCAnaG9zdG5hbWUnLCB1bmRlZmluZWQsIDEsIDFdICAgIC8vIFNldCBsZWZ0IG92ZXIuXG5dO1xuXG4vKipcbiAqIFRoZXNlIHByb3BlcnRpZXMgc2hvdWxkIG5vdCBiZSBjb3BpZWQgb3IgaW5oZXJpdGVkIGZyb20uIFRoaXMgaXMgb25seSBuZWVkZWRcbiAqIGZvciBhbGwgbm9uIGJsb2IgVVJMJ3MgYXMgYSBibG9iIFVSTCBkb2VzIG5vdCBpbmNsdWRlIGEgaGFzaCwgb25seSB0aGVcbiAqIG9yaWdpbi5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xudmFyIGlnbm9yZSA9IHsgaGFzaDogMSwgcXVlcnk6IDEgfTtcblxuLyoqXG4gKiBUaGUgbG9jYXRpb24gb2JqZWN0IGRpZmZlcnMgd2hlbiB5b3VyIGNvZGUgaXMgbG9hZGVkIHRocm91Z2ggYSBub3JtYWwgcGFnZSxcbiAqIFdvcmtlciBvciB0aHJvdWdoIGEgd29ya2VyIHVzaW5nIGEgYmxvYi4gQW5kIHdpdGggdGhlIGJsb2JibGUgYmVnaW5zIHRoZVxuICogdHJvdWJsZSBhcyB0aGUgbG9jYXRpb24gb2JqZWN0IHdpbGwgY29udGFpbiB0aGUgVVJMIG9mIHRoZSBibG9iLCBub3QgdGhlXG4gKiBsb2NhdGlvbiBvZiB0aGUgcGFnZSB3aGVyZSBvdXIgY29kZSBpcyBsb2FkZWQgaW4uIFRoZSBhY3R1YWwgb3JpZ2luIGlzXG4gKiBlbmNvZGVkIGluIHRoZSBgcGF0aG5hbWVgIHNvIHdlIGNhbiB0aGFua2Z1bGx5IGdlbmVyYXRlIGEgZ29vZCBcImRlZmF1bHRcIlxuICogbG9jYXRpb24gZnJvbSBpdCBzbyB3ZSBjYW4gZ2VuZXJhdGUgcHJvcGVyIHJlbGF0aXZlIFVSTCdzIGFnYWluLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbG9jIE9wdGlvbmFsIGRlZmF1bHQgbG9jYXRpb24gb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gbG9sY2F0aW9uIG9iamVjdC5cbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gbG9sY2F0aW9uKGxvYykge1xuICB2YXIgZ2xvYmFsVmFyO1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgZ2xvYmFsVmFyID0gd2luZG93O1xuICBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykgZ2xvYmFsVmFyID0gZ2xvYmFsO1xuICBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIGdsb2JhbFZhciA9IHNlbGY7XG4gIGVsc2UgZ2xvYmFsVmFyID0ge307XG5cbiAgdmFyIGxvY2F0aW9uID0gZ2xvYmFsVmFyLmxvY2F0aW9uIHx8IHt9O1xuICBsb2MgPSBsb2MgfHwgbG9jYXRpb247XG5cbiAgdmFyIGZpbmFsZGVzdGluYXRpb24gPSB7fVxuICAgICwgdHlwZSA9IHR5cGVvZiBsb2NcbiAgICAsIGtleTtcblxuICBpZiAoJ2Jsb2I6JyA9PT0gbG9jLnByb3RvY29sKSB7XG4gICAgZmluYWxkZXN0aW5hdGlvbiA9IG5ldyBVcmwodW5lc2NhcGUobG9jLnBhdGhuYW1lKSwge30pO1xuICB9IGVsc2UgaWYgKCdzdHJpbmcnID09PSB0eXBlKSB7XG4gICAgZmluYWxkZXN0aW5hdGlvbiA9IG5ldyBVcmwobG9jLCB7fSk7XG4gICAgZm9yIChrZXkgaW4gaWdub3JlKSBkZWxldGUgZmluYWxkZXN0aW5hdGlvbltrZXldO1xuICB9IGVsc2UgaWYgKCdvYmplY3QnID09PSB0eXBlKSB7XG4gICAgZm9yIChrZXkgaW4gbG9jKSB7XG4gICAgICBpZiAoa2V5IGluIGlnbm9yZSkgY29udGludWU7XG4gICAgICBmaW5hbGRlc3RpbmF0aW9uW2tleV0gPSBsb2Nba2V5XTtcbiAgICB9XG5cbiAgICBpZiAoZmluYWxkZXN0aW5hdGlvbi5zbGFzaGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGZpbmFsZGVzdGluYXRpb24uc2xhc2hlcyA9IHNsYXNoZXMudGVzdChsb2MuaHJlZik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpbmFsZGVzdGluYXRpb247XG59XG5cbi8qKlxuICogQHR5cGVkZWYgUHJvdG9jb2xFeHRyYWN0XG4gKiBAdHlwZSBPYmplY3RcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBwcm90b2NvbCBQcm90b2NvbCBtYXRjaGVkIGluIHRoZSBVUkwsIGluIGxvd2VyY2FzZS5cbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gc2xhc2hlcyBgdHJ1ZWAgaWYgcHJvdG9jb2wgaXMgZm9sbG93ZWQgYnkgXCIvL1wiLCBlbHNlIGBmYWxzZWAuXG4gKiBAcHJvcGVydHkge1N0cmluZ30gcmVzdCBSZXN0IG9mIHRoZSBVUkwgdGhhdCBpcyBub3QgcGFydCBvZiB0aGUgcHJvdG9jb2wuXG4gKi9cblxuLyoqXG4gKiBFeHRyYWN0IHByb3RvY29sIGluZm9ybWF0aW9uIGZyb20gYSBVUkwgd2l0aC93aXRob3V0IGRvdWJsZSBzbGFzaCAoXCIvL1wiKS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYWRkcmVzcyBVUkwgd2Ugd2FudCB0byBleHRyYWN0IGZyb20uXG4gKiBAcmV0dXJuIHtQcm90b2NvbEV4dHJhY3R9IEV4dHJhY3RlZCBpbmZvcm1hdGlvbi5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGV4dHJhY3RQcm90b2NvbChhZGRyZXNzKSB7XG4gIGFkZHJlc3MgPSB0cmltTGVmdChhZGRyZXNzKTtcbiAgdmFyIG1hdGNoID0gcHJvdG9jb2xyZS5leGVjKGFkZHJlc3MpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvdG9jb2w6IG1hdGNoWzFdID8gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKSA6ICcnLFxuICAgIHNsYXNoZXM6ICEhbWF0Y2hbMl0sXG4gICAgcmVzdDogbWF0Y2hbM11cbiAgfTtcbn1cblxuLyoqXG4gKiBSZXNvbHZlIGEgcmVsYXRpdmUgVVJMIHBhdGhuYW1lIGFnYWluc3QgYSBiYXNlIFVSTCBwYXRobmFtZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVsYXRpdmUgUGF0aG5hbWUgb2YgdGhlIHJlbGF0aXZlIFVSTC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBiYXNlIFBhdGhuYW1lIG9mIHRoZSBiYXNlIFVSTC5cbiAqIEByZXR1cm4ge1N0cmluZ30gUmVzb2x2ZWQgcGF0aG5hbWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZXNvbHZlKHJlbGF0aXZlLCBiYXNlKSB7XG4gIGlmIChyZWxhdGl2ZSA9PT0gJycpIHJldHVybiBiYXNlO1xuXG4gIHZhciBwYXRoID0gKGJhc2UgfHwgJy8nKS5zcGxpdCgnLycpLnNsaWNlKDAsIC0xKS5jb25jYXQocmVsYXRpdmUuc3BsaXQoJy8nKSlcbiAgICAsIGkgPSBwYXRoLmxlbmd0aFxuICAgICwgbGFzdCA9IHBhdGhbaSAtIDFdXG4gICAgLCB1bnNoaWZ0ID0gZmFsc2VcbiAgICAsIHVwID0gMDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgaWYgKHBhdGhbaV0gPT09ICcuJykge1xuICAgICAgcGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChwYXRoW2ldID09PSAnLi4nKSB7XG4gICAgICBwYXRoLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgaWYgKGkgPT09IDApIHVuc2hpZnQgPSB0cnVlO1xuICAgICAgcGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIGlmICh1bnNoaWZ0KSBwYXRoLnVuc2hpZnQoJycpO1xuICBpZiAobGFzdCA9PT0gJy4nIHx8IGxhc3QgPT09ICcuLicpIHBhdGgucHVzaCgnJyk7XG5cbiAgcmV0dXJuIHBhdGguam9pbignLycpO1xufVxuXG4vKipcbiAqIFRoZSBhY3R1YWwgVVJMIGluc3RhbmNlLiBJbnN0ZWFkIG9mIHJldHVybmluZyBhbiBvYmplY3Qgd2UndmUgb3B0ZWQtaW4gdG9cbiAqIGNyZWF0ZSBhbiBhY3R1YWwgY29uc3RydWN0b3IgYXMgaXQncyBtdWNoIG1vcmUgbWVtb3J5IGVmZmljaWVudCBhbmRcbiAqIGZhc3RlciBhbmQgaXQgcGxlYXNlcyBteSBPQ0QuXG4gKlxuICogSXQgaXMgd29ydGggbm90aW5nIHRoYXQgd2Ugc2hvdWxkIG5vdCB1c2UgYFVSTGAgYXMgY2xhc3MgbmFtZSB0byBwcmV2ZW50XG4gKiBjbGFzaGVzIHdpdGggdGhlIGdsb2JhbCBVUkwgaW5zdGFuY2UgdGhhdCBnb3QgaW50cm9kdWNlZCBpbiBicm93c2Vycy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSBhZGRyZXNzIFVSTCB3ZSB3YW50IHRvIHBhcnNlLlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBbbG9jYXRpb25dIExvY2F0aW9uIGRlZmF1bHRzIGZvciByZWxhdGl2ZSBwYXRocy5cbiAqIEBwYXJhbSB7Qm9vbGVhbnxGdW5jdGlvbn0gW3BhcnNlcl0gUGFyc2VyIGZvciB0aGUgcXVlcnkgc3RyaW5nLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gVXJsKGFkZHJlc3MsIGxvY2F0aW9uLCBwYXJzZXIpIHtcbiAgYWRkcmVzcyA9IHRyaW1MZWZ0KGFkZHJlc3MpO1xuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBVcmwpKSB7XG4gICAgcmV0dXJuIG5ldyBVcmwoYWRkcmVzcywgbG9jYXRpb24sIHBhcnNlcik7XG4gIH1cblxuICB2YXIgcmVsYXRpdmUsIGV4dHJhY3RlZCwgcGFyc2UsIGluc3RydWN0aW9uLCBpbmRleCwga2V5XG4gICAgLCBpbnN0cnVjdGlvbnMgPSBydWxlcy5zbGljZSgpXG4gICAgLCB0eXBlID0gdHlwZW9mIGxvY2F0aW9uXG4gICAgLCB1cmwgPSB0aGlzXG4gICAgLCBpID0gMDtcblxuICAvL1xuICAvLyBUaGUgZm9sbG93aW5nIGlmIHN0YXRlbWVudHMgYWxsb3dzIHRoaXMgbW9kdWxlIHR3byBoYXZlIGNvbXBhdGliaWxpdHkgd2l0aFxuICAvLyAyIGRpZmZlcmVudCBBUEk6XG4gIC8vXG4gIC8vIDEuIE5vZGUuanMncyBgdXJsLnBhcnNlYCBhcGkgd2hpY2ggYWNjZXB0cyBhIFVSTCwgYm9vbGVhbiBhcyBhcmd1bWVudHNcbiAgLy8gICAgd2hlcmUgdGhlIGJvb2xlYW4gaW5kaWNhdGVzIHRoYXQgdGhlIHF1ZXJ5IHN0cmluZyBzaG91bGQgYWxzbyBiZSBwYXJzZWQuXG4gIC8vXG4gIC8vIDIuIFRoZSBgVVJMYCBpbnRlcmZhY2Ugb2YgdGhlIGJyb3dzZXIgd2hpY2ggYWNjZXB0cyBhIFVSTCwgb2JqZWN0IGFzXG4gIC8vICAgIGFyZ3VtZW50cy4gVGhlIHN1cHBsaWVkIG9iamVjdCB3aWxsIGJlIHVzZWQgYXMgZGVmYXVsdCB2YWx1ZXMgLyBmYWxsLWJhY2tcbiAgLy8gICAgZm9yIHJlbGF0aXZlIHBhdGhzLlxuICAvL1xuICBpZiAoJ29iamVjdCcgIT09IHR5cGUgJiYgJ3N0cmluZycgIT09IHR5cGUpIHtcbiAgICBwYXJzZXIgPSBsb2NhdGlvbjtcbiAgICBsb2NhdGlvbiA9IG51bGw7XG4gIH1cblxuICBpZiAocGFyc2VyICYmICdmdW5jdGlvbicgIT09IHR5cGVvZiBwYXJzZXIpIHBhcnNlciA9IHFzLnBhcnNlO1xuXG4gIGxvY2F0aW9uID0gbG9sY2F0aW9uKGxvY2F0aW9uKTtcblxuICAvL1xuICAvLyBFeHRyYWN0IHByb3RvY29sIGluZm9ybWF0aW9uIGJlZm9yZSBydW5uaW5nIHRoZSBpbnN0cnVjdGlvbnMuXG4gIC8vXG4gIGV4dHJhY3RlZCA9IGV4dHJhY3RQcm90b2NvbChhZGRyZXNzIHx8ICcnKTtcbiAgcmVsYXRpdmUgPSAhZXh0cmFjdGVkLnByb3RvY29sICYmICFleHRyYWN0ZWQuc2xhc2hlcztcbiAgdXJsLnNsYXNoZXMgPSBleHRyYWN0ZWQuc2xhc2hlcyB8fCByZWxhdGl2ZSAmJiBsb2NhdGlvbi5zbGFzaGVzO1xuICB1cmwucHJvdG9jb2wgPSBleHRyYWN0ZWQucHJvdG9jb2wgfHwgbG9jYXRpb24ucHJvdG9jb2wgfHwgJyc7XG4gIGFkZHJlc3MgPSBleHRyYWN0ZWQucmVzdDtcblxuICAvL1xuICAvLyBXaGVuIHRoZSBhdXRob3JpdHkgY29tcG9uZW50IGlzIGFic2VudCB0aGUgVVJMIHN0YXJ0cyB3aXRoIGEgcGF0aFxuICAvLyBjb21wb25lbnQuXG4gIC8vXG4gIGlmICghZXh0cmFjdGVkLnNsYXNoZXMpIGluc3RydWN0aW9uc1szXSA9IFsvKC4qKS8sICdwYXRobmFtZSddO1xuXG4gIGZvciAoOyBpIDwgaW5zdHJ1Y3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgaW5zdHJ1Y3Rpb24gPSBpbnN0cnVjdGlvbnNbaV07XG5cbiAgICBpZiAodHlwZW9mIGluc3RydWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhZGRyZXNzID0gaW5zdHJ1Y3Rpb24oYWRkcmVzcyk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBwYXJzZSA9IGluc3RydWN0aW9uWzBdO1xuICAgIGtleSA9IGluc3RydWN0aW9uWzFdO1xuXG4gICAgaWYgKHBhcnNlICE9PSBwYXJzZSkge1xuICAgICAgdXJsW2tleV0gPSBhZGRyZXNzO1xuICAgIH0gZWxzZSBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiBwYXJzZSkge1xuICAgICAgaWYgKH4oaW5kZXggPSBhZGRyZXNzLmluZGV4T2YocGFyc2UpKSkge1xuICAgICAgICBpZiAoJ251bWJlcicgPT09IHR5cGVvZiBpbnN0cnVjdGlvblsyXSkge1xuICAgICAgICAgIHVybFtrZXldID0gYWRkcmVzcy5zbGljZSgwLCBpbmRleCk7XG4gICAgICAgICAgYWRkcmVzcyA9IGFkZHJlc3Muc2xpY2UoaW5kZXggKyBpbnN0cnVjdGlvblsyXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdXJsW2tleV0gPSBhZGRyZXNzLnNsaWNlKGluZGV4KTtcbiAgICAgICAgICBhZGRyZXNzID0gYWRkcmVzcy5zbGljZSgwLCBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKChpbmRleCA9IHBhcnNlLmV4ZWMoYWRkcmVzcykpKSB7XG4gICAgICB1cmxba2V5XSA9IGluZGV4WzFdO1xuICAgICAgYWRkcmVzcyA9IGFkZHJlc3Muc2xpY2UoMCwgaW5kZXguaW5kZXgpO1xuICAgIH1cblxuICAgIHVybFtrZXldID0gdXJsW2tleV0gfHwgKFxuICAgICAgcmVsYXRpdmUgJiYgaW5zdHJ1Y3Rpb25bM10gPyBsb2NhdGlvbltrZXldIHx8ICcnIDogJydcbiAgICApO1xuXG4gICAgLy9cbiAgICAvLyBIb3N0bmFtZSwgaG9zdCBhbmQgcHJvdG9jb2wgc2hvdWxkIGJlIGxvd2VyY2FzZWQgc28gdGhleSBjYW4gYmUgdXNlZCB0b1xuICAgIC8vIGNyZWF0ZSBhIHByb3BlciBgb3JpZ2luYC5cbiAgICAvL1xuICAgIGlmIChpbnN0cnVjdGlvbls0XSkgdXJsW2tleV0gPSB1cmxba2V5XS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgLy9cbiAgLy8gQWxzbyBwYXJzZSB0aGUgc3VwcGxpZWQgcXVlcnkgc3RyaW5nIGluIHRvIGFuIG9iamVjdC4gSWYgd2UncmUgc3VwcGxpZWRcbiAgLy8gd2l0aCBhIGN1c3RvbSBwYXJzZXIgYXMgZnVuY3Rpb24gdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCBidWlsZC1pblxuICAvLyBwYXJzZXIuXG4gIC8vXG4gIGlmIChwYXJzZXIpIHVybC5xdWVyeSA9IHBhcnNlcih1cmwucXVlcnkpO1xuXG4gIC8vXG4gIC8vIElmIHRoZSBVUkwgaXMgcmVsYXRpdmUsIHJlc29sdmUgdGhlIHBhdGhuYW1lIGFnYWluc3QgdGhlIGJhc2UgVVJMLlxuICAvL1xuICBpZiAoXG4gICAgICByZWxhdGl2ZVxuICAgICYmIGxvY2F0aW9uLnNsYXNoZXNcbiAgICAmJiB1cmwucGF0aG5hbWUuY2hhckF0KDApICE9PSAnLydcbiAgICAmJiAodXJsLnBhdGhuYW1lICE9PSAnJyB8fCBsb2NhdGlvbi5wYXRobmFtZSAhPT0gJycpXG4gICkge1xuICAgIHVybC5wYXRobmFtZSA9IHJlc29sdmUodXJsLnBhdGhuYW1lLCBsb2NhdGlvbi5wYXRobmFtZSk7XG4gIH1cblxuICAvL1xuICAvLyBXZSBzaG91bGQgbm90IGFkZCBwb3J0IG51bWJlcnMgaWYgdGhleSBhcmUgYWxyZWFkeSB0aGUgZGVmYXVsdCBwb3J0IG51bWJlclxuICAvLyBmb3IgYSBnaXZlbiBwcm90b2NvbC4gQXMgdGhlIGhvc3QgYWxzbyBjb250YWlucyB0aGUgcG9ydCBudW1iZXIgd2UncmUgZ29pbmdcbiAgLy8gb3ZlcnJpZGUgaXQgd2l0aCB0aGUgaG9zdG5hbWUgd2hpY2ggY29udGFpbnMgbm8gcG9ydCBudW1iZXIuXG4gIC8vXG4gIGlmICghcmVxdWlyZWQodXJsLnBvcnQsIHVybC5wcm90b2NvbCkpIHtcbiAgICB1cmwuaG9zdCA9IHVybC5ob3N0bmFtZTtcbiAgICB1cmwucG9ydCA9ICcnO1xuICB9XG5cbiAgLy9cbiAgLy8gUGFyc2UgZG93biB0aGUgYGF1dGhgIGZvciB0aGUgdXNlcm5hbWUgYW5kIHBhc3N3b3JkLlxuICAvL1xuICB1cmwudXNlcm5hbWUgPSB1cmwucGFzc3dvcmQgPSAnJztcbiAgaWYgKHVybC5hdXRoKSB7XG4gICAgaW5zdHJ1Y3Rpb24gPSB1cmwuYXV0aC5zcGxpdCgnOicpO1xuICAgIHVybC51c2VybmFtZSA9IGluc3RydWN0aW9uWzBdIHx8ICcnO1xuICAgIHVybC5wYXNzd29yZCA9IGluc3RydWN0aW9uWzFdIHx8ICcnO1xuICB9XG5cbiAgdXJsLm9yaWdpbiA9IHVybC5wcm90b2NvbCAmJiB1cmwuaG9zdCAmJiB1cmwucHJvdG9jb2wgIT09ICdmaWxlOidcbiAgICA/IHVybC5wcm90b2NvbCArJy8vJysgdXJsLmhvc3RcbiAgICA6ICdudWxsJztcblxuICAvL1xuICAvLyBUaGUgaHJlZiBpcyBqdXN0IHRoZSBjb21waWxlZCByZXN1bHQuXG4gIC8vXG4gIHVybC5ocmVmID0gdXJsLnRvU3RyaW5nKCk7XG59XG5cbi8qKlxuICogVGhpcyBpcyBjb252ZW5pZW5jZSBtZXRob2QgZm9yIGNoYW5naW5nIHByb3BlcnRpZXMgaW4gdGhlIFVSTCBpbnN0YW5jZSB0b1xuICogaW5zdXJlIHRoYXQgdGhleSBhbGwgcHJvcGFnYXRlIGNvcnJlY3RseS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFydCAgICAgICAgICBQcm9wZXJ0eSB3ZSBuZWVkIHRvIGFkanVzdC5cbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlICAgICAgICAgIFRoZSBuZXdseSBhc3NpZ25lZCB2YWx1ZS5cbiAqIEBwYXJhbSB7Qm9vbGVhbnxGdW5jdGlvbn0gZm4gIFdoZW4gc2V0dGluZyB0aGUgcXVlcnksIGl0IHdpbGwgYmUgdGhlIGZ1bmN0aW9uXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VkIHRvIHBhcnNlIHRoZSBxdWVyeS5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoZW4gc2V0dGluZyB0aGUgcHJvdG9jb2wsIGRvdWJsZSBzbGFzaCB3aWxsIGJlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkIGZyb20gdGhlIGZpbmFsIHVybCBpZiBpdCBpcyB0cnVlLlxuICogQHJldHVybnMge1VSTH0gVVJMIGluc3RhbmNlIGZvciBjaGFpbmluZy5cbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gc2V0KHBhcnQsIHZhbHVlLCBmbikge1xuICB2YXIgdXJsID0gdGhpcztcblxuICBzd2l0Y2ggKHBhcnQpIHtcbiAgICBjYXNlICdxdWVyeSc6XG4gICAgICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiB2YWx1ZSAmJiB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgdmFsdWUgPSAoZm4gfHwgcXMucGFyc2UpKHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdXJsW3BhcnRdID0gdmFsdWU7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3BvcnQnOlxuICAgICAgdXJsW3BhcnRdID0gdmFsdWU7XG5cbiAgICAgIGlmICghcmVxdWlyZWQodmFsdWUsIHVybC5wcm90b2NvbCkpIHtcbiAgICAgICAgdXJsLmhvc3QgPSB1cmwuaG9zdG5hbWU7XG4gICAgICAgIHVybFtwYXJ0XSA9ICcnO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgICB1cmwuaG9zdCA9IHVybC5ob3N0bmFtZSArJzonKyB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdob3N0bmFtZSc6XG4gICAgICB1cmxbcGFydF0gPSB2YWx1ZTtcblxuICAgICAgaWYgKHVybC5wb3J0KSB2YWx1ZSArPSAnOicrIHVybC5wb3J0O1xuICAgICAgdXJsLmhvc3QgPSB2YWx1ZTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnaG9zdCc6XG4gICAgICB1cmxbcGFydF0gPSB2YWx1ZTtcblxuICAgICAgaWYgKC86XFxkKyQvLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJzonKTtcbiAgICAgICAgdXJsLnBvcnQgPSB2YWx1ZS5wb3AoKTtcbiAgICAgICAgdXJsLmhvc3RuYW1lID0gdmFsdWUuam9pbignOicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXJsLmhvc3RuYW1lID0gdmFsdWU7XG4gICAgICAgIHVybC5wb3J0ID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAncHJvdG9jb2wnOlxuICAgICAgdXJsLnByb3RvY29sID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIHVybC5zbGFzaGVzID0gIWZuO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdwYXRobmFtZSc6XG4gICAgY2FzZSAnaGFzaCc6XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBwYXJ0ID09PSAncGF0aG5hbWUnID8gJy8nIDogJyMnO1xuICAgICAgICB1cmxbcGFydF0gPSB2YWx1ZS5jaGFyQXQoMCkgIT09IGNoYXIgPyBjaGFyICsgdmFsdWUgOiB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVybFtwYXJ0XSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdXJsW3BhcnRdID0gdmFsdWU7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGlucyA9IHJ1bGVzW2ldO1xuXG4gICAgaWYgKGluc1s0XSkgdXJsW2luc1sxXV0gPSB1cmxbaW5zWzFdXS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgdXJsLm9yaWdpbiA9IHVybC5wcm90b2NvbCAmJiB1cmwuaG9zdCAmJiB1cmwucHJvdG9jb2wgIT09ICdmaWxlOidcbiAgICA/IHVybC5wcm90b2NvbCArJy8vJysgdXJsLmhvc3RcbiAgICA6ICdudWxsJztcblxuICB1cmwuaHJlZiA9IHVybC50b1N0cmluZygpO1xuXG4gIHJldHVybiB1cmw7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBwcm9wZXJ0aWVzIGJhY2sgaW4gdG8gYSB2YWxpZCBhbmQgZnVsbCBVUkwgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN0cmluZ2lmeSBPcHRpb25hbCBxdWVyeSBzdHJpbmdpZnkgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBDb21waWxlZCB2ZXJzaW9uIG9mIHRoZSBVUkwuXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nKHN0cmluZ2lmeSkge1xuICBpZiAoIXN0cmluZ2lmeSB8fCAnZnVuY3Rpb24nICE9PSB0eXBlb2Ygc3RyaW5naWZ5KSBzdHJpbmdpZnkgPSBxcy5zdHJpbmdpZnk7XG5cbiAgdmFyIHF1ZXJ5XG4gICAgLCB1cmwgPSB0aGlzXG4gICAgLCBwcm90b2NvbCA9IHVybC5wcm90b2NvbDtcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuY2hhckF0KHByb3RvY29sLmxlbmd0aCAtIDEpICE9PSAnOicpIHByb3RvY29sICs9ICc6JztcblxuICB2YXIgcmVzdWx0ID0gcHJvdG9jb2wgKyAodXJsLnNsYXNoZXMgPyAnLy8nIDogJycpO1xuXG4gIGlmICh1cmwudXNlcm5hbWUpIHtcbiAgICByZXN1bHQgKz0gdXJsLnVzZXJuYW1lO1xuICAgIGlmICh1cmwucGFzc3dvcmQpIHJlc3VsdCArPSAnOicrIHVybC5wYXNzd29yZDtcbiAgICByZXN1bHQgKz0gJ0AnO1xuICB9XG5cbiAgcmVzdWx0ICs9IHVybC5ob3N0ICsgdXJsLnBhdGhuYW1lO1xuXG4gIHF1ZXJ5ID0gJ29iamVjdCcgPT09IHR5cGVvZiB1cmwucXVlcnkgPyBzdHJpbmdpZnkodXJsLnF1ZXJ5KSA6IHVybC5xdWVyeTtcbiAgaWYgKHF1ZXJ5KSByZXN1bHQgKz0gJz8nICE9PSBxdWVyeS5jaGFyQXQoMCkgPyAnPycrIHF1ZXJ5IDogcXVlcnk7XG5cbiAgaWYgKHVybC5oYXNoKSByZXN1bHQgKz0gdXJsLmhhc2g7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuVXJsLnByb3RvdHlwZSA9IHsgc2V0OiBzZXQsIHRvU3RyaW5nOiB0b1N0cmluZyB9O1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBVUkwgcGFyc2VyIGFuZCBzb21lIGFkZGl0aW9uYWwgcHJvcGVydGllcyB0aGF0IG1pZ2h0IGJlIHVzZWZ1bCBmb3Jcbi8vIG90aGVycyBvciB0ZXN0aW5nLlxuLy9cblVybC5leHRyYWN0UHJvdG9jb2wgPSBleHRyYWN0UHJvdG9jb2w7XG5VcmwubG9jYXRpb24gPSBsb2xjYXRpb247XG5VcmwudHJpbUxlZnQgPSB0cmltTGVmdDtcblVybC5xcyA9IHFzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVybDtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIi8qIVxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCAqIGFzIHBhcnNlIGZyb20gJ3VybC1wYXJzZSc7XG5pbXBvcnQge1xuICBDbGVhckludGVyYWN0aW9uLFxuICBDb25maWdEYXRhLFxuICBDb25maWdEYXRhRWxlbWVudCxcbiAgQ29uZmlnRGF0YUVsZW1lbnRUeXBlLFxuICBDb25maWdJZCxcbiAgQ29uZmlnU3R5bGUsXG4gIENvbmZpZ1N0eWxlRWxlbWVudCxcbiAgRFNJbnRlcmFjdGlvbkRhdGEsXG4gIERTSW50ZXJhY3Rpb25UeXBlLFxuICBEU1Jvd1ZhbHVlLFxuICBGaWVsZCxcbiAgRmllbGRJZCxcbiAgRmllbGRzQnlDb25maWdJZCxcbiAgRmllbGRzQnlJZCxcbiAgSW50ZXJhY3Rpb24sXG4gIEludGVyYWN0aW9uTWVzc2FnZSxcbiAgSW50ZXJhY3Rpb25zQnlJZCxcbiAgSW50ZXJhY3Rpb25UeXBlLFxuICBNZXNzYWdlLFxuICBNZXNzYWdlVHlwZSxcbiAgT2JqZWN0Um93LFxuICBPYmplY3RUYWJsZXMsXG4gIE9iamVjdFRyYW5zZm9ybSxcbiAgUGFyc2VkSW1hZ2UsXG4gIFBvc3RNZXNzYWdlLFxuICBSb3csXG4gIFJvd0hlYWRpbmcsXG4gIFNlbmRJbnRlcmFjdGlvbixcbiAgU3R5bGVCeUlkLFxuICBTdWJzY3JpcHRpb25zT3B0aW9ucyxcbiAgVGFibGUsXG4gIFRhYmxlRm9ybWF0LFxuICBUYWJsZXMsXG4gIFRhYmxlVHJhbnNmb3JtLFxuICBUYWJsZVR5cGUsXG4gIFRoZW1lU3R5bGUsXG4gIFRvRFNNZXNzYWdlVHlwZSxcbiAgVml6UmVhZHlNZXNzYWdlLFxufSBmcm9tICcuL3R5cGVzJztcblxuLy8gTWFrZSBhbGwgZXhwb3J0ZWQgdHlwZXMgYXZhaWxhYmxlIHRvIGV4dGVybmFsIHVzZXJzLlxuZXhwb3J0ICogZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgd2lkdGggKGluIHBpeGVscykgb2YgdGhlIHZpcydzIGlmcmFtZS5cbiAqXG4gKiBVc2FnZTpcbiAqIGBgYFxuICogdmFyIG15V2lkdGggPSBkc2NjLmdldFdpZHRoKCk7XG4gKiBjb25zb2xlLmxvZygnTXkgd2lkdGggaXM6ICcsIG15V2lkdGgpO1xuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRXaWR0aCA9ICgpOiBudW1iZXIgPT4gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBoZWlnaHQgKGluIHBpeGVscykgb2YgdGhlIHZpcydzIGlmcmFtZS5cbiAqXG4gKiBVc2FnZTpcbiAqIGBgYFxuICogdmFyIG15SGVpZ2h0ID0gZHNjYy5nZXRIZWlnaHQoKTtcbiAqIGNvbnNvbGUubG9nKCdNeSBoZWlnaHQgaXM6ICcsIG15SGVpZ2h0KTtcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgZ2V0SGVpZ2h0ID0gKCk6IG51bWJlciA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGNvbXBvbmVudElkIG9mIHRoZSB2aXMuIENvbXBvbmVudCBpZHMgdW5pcXVlbHkgaWRlbnRpZnkgYSB2aXMgdG9cbiAqIERhdGEgU3R1ZGlvLlxuICpcbiAqIFVzYWdlOlxuICogYGBgXG4gKiB2YXIgbXlDb21wb25lbnRJZCA9IGRzY2MuZ2V0Q29tcG9uZW50SWQoKTtcbiAqIGNvbnNvbGUubG9nKCdNeSBjb21wb25lbnRJZCBpczogJywgbXlDb21wb25lbnRJZCk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldENvbXBvbmVudElkID0gKCk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gcGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpLnF1ZXJ5O1xuICBpZiAocXVlcnkuZHNjSWQpIHtcbiAgICByZXR1cm4gcXVlcnkuZHNjSWQ7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ2RzY0lkIG11c3QgYmUgaW4gdGhlIHF1ZXJ5IHBhcmFtZXRlcnMuICcgK1xuICAgICAgICAnVGhpcyBpcyBhIGJ1ZyBpbiBkcy1jb21wb25lbnQsIHBsZWFzZSBmaWxlIGEgYnVnOiAnICtcbiAgICAgICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGVkYXRhc3R1ZGlvL2RzLWNvbXBvbmVudC9pc3N1ZXMvbmV3J1xuICAgICk7XG4gIH1cbn07XG5cbi8qKlxuICogUGFyc2VzIGEgYCdcXHUwMGEwXFx1MDBhMCdgIGRlbGltaXRlZCBzdHJpbmcgaW50byBjb21wb25lbnQgcGFydHMuIElmIGFueSBwYXJ0c1xuICogYXJlIG1pc3NpbmcsIHRoZXkgd2lsbCBiZSByZXR1cm5lZCBhcyB1bmRlZmluZWQuXG4gKlxuICogVXNhZ2U6XG4gKiBgYGBcbiAqIGNvbnN0IG15SW1hZ2UgPSBwYXJzZUltYWdlKCdvcmlnaW5hbHVybC5jb21cXHUwMGEwXFx1MDBhMHByb3hpZWR1cmwuY29tXFx1MDBhMFxcdTAwYTBhbHQgdGV4dCcpO1xuICpcbiAqIGV4cGVjdChteUltYWdlKS50b0VxdWFsKHtcbiAqICAgb3JpZ2luYWxVcmw6ICdvcmlnaW5hbHVybC5jb20nLFxuICogICBwcm94aWVkVXJsOiAncHJveGllZHVybC5jb20nLFxuICogICBhbHRUZXh0OiAnYWx0IHRleHQnLFxuICogfSk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IHBhcnNlSW1hZ2UgPSAodmFsdWU6IHN0cmluZyk6IFBhcnNlZEltYWdlID0+IHtcbiAgY29uc3QgW29yaWdpbmFsVXJsLCBwcm94aWVkVXJsLCBhbHRUZXh0XSA9IHZhbHVlLnNwbGl0KCdcXHUwMGEwXFx1MDBhMCcpO1xuICByZXR1cm4ge1xuICAgIGFsdFRleHQsXG4gICAgb3JpZ2luYWxVcmwsXG4gICAgcHJveGllZFVybCxcbiAgfTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmllbGRzIGluZGV4ZWQgYnkgdGhlaXIgRGF0YSBTdHVkaW8gaWQuXG4gKi9cbmNvbnN0IGZpZWxkc0J5SWQgPSAobWVzc2FnZTogTWVzc2FnZSk6IEZpZWxkc0J5SWQgPT5cbiAgbWVzc2FnZS5maWVsZHMucmVkdWNlKChhY2M6IEZpZWxkc0J5SWQsIGZpZWxkOiBGaWVsZCkgPT4ge1xuICAgIGFjY1tmaWVsZC5pZF0gPSBmaWVsZDtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG5cbi8qKlxuICogWmlwcyB0d28gYXJyYXlzIHRvZ2V0aGVyIGludG8gYSBuZXcgYXJyYXkuIFVzZXMgdGhlIGxlbmd0aCBvZiB0aGUgc2hvcnRlc3RcbiAqIGFycmF5LlxuICpcbiAqIFVzYWdlOlxuICogYGBgXG4gKiBjb25zdCBhID0gWzEsIDIsIDNdO1xuICogY29uc3QgYiA9IFsnYScsICdiJywgJ2MnLCAnZCddO1xuICogY29uc3QgemlwcGVkID0gemlwMihhLCBiKTtcbiAqIGV4cGVjdCh6aXBwZWQpLnRvRXF1YWwoW1sxLCAnYSddLCBbMiwgJ2InXSwgWzMsICdjJ11dKTtcbiAqIGBgYFxuICovXG5jb25zdCB6aXAyID0gPFQsIFU+KHQ6IFRbXSwgdTogVVtdKTogQXJyYXk8W1QsIFVdPiA9PiB7XG4gIGlmICh0Lmxlbmd0aCA8IHUubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHQubWFwKCh0RW50cnk6IFQsIGlkeDogbnVtYmVyKTogW1QsIFVdID0+IFt0RW50cnksIHVbaWR4XV0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB1Lm1hcCgodUVudHJ5OiBVLCBpZHg6IG51bWJlcik6IFtULCBVXSA9PiBbdFtpZHhdLCB1RW50cnldKTtcbiAgfVxufTtcblxuLy8gYC5zb3J0YCBpc24ndCBzdGFibGUsIGJ1dCBpZiB5b3UgY29tcGFyZSBpdGVtcywgYW5kIHdoZW4gdGhleSBhcmUgZXF1YWwgdXNlXG4vLyB0aGUgb3JpZ2luYWwgaW5kZXgsIGl0IGlzIHRoZW4gc3RhYmxlLlxuY29uc3Qgc3RhYmxlU29ydCA9IDxUPihhcnI6IFRbXSwgY29tcGFyZTogKGE6IFQsIGI6IFQpID0+IG51bWJlcik6IFRbXSA9PlxuICBhcnJcbiAgICAubWFwKChpdGVtLCBpbmRleCkgPT4gKHtpdGVtLCBpbmRleH0pKVxuICAgIC5zb3J0KChhLCBiKSA9PiBjb21wYXJlKGEuaXRlbSwgYi5pdGVtKSB8fCBhLmluZGV4IC0gYi5pbmRleClcbiAgICAubWFwKCh7aXRlbX0pID0+IGl0ZW0pO1xuXG5jb25zdCBkaW1lbnNpb25Pck1ldHJpYyA9IChjZGU6IENvbmZpZ0RhdGFFbGVtZW50KTogYm9vbGVhbiA9PlxuICBjZGUudHlwZSA9PT0gQ29uZmlnRGF0YUVsZW1lbnRUeXBlLkRJTUVOU0lPTiB8fFxuICBjZGUudHlwZSA9PT0gQ29uZmlnRGF0YUVsZW1lbnRUeXBlLk1FVFJJQztcblxuY29uc3QgdG9OdW0gPSAoY2RldDogQ29uZmlnRGF0YUVsZW1lbnRUeXBlKSA9PlxuICBjZGV0ID09PSBDb25maWdEYXRhRWxlbWVudFR5cGUuRElNRU5TSU9OID8gLTEgOiAxO1xuXG4vKipcbiAqIEZsYXR0ZW5zIHRoZSBjb25maWdJZHMgZnJvbSBhIG1lc3NhZ2UgaW50byBhIHNpbmdsZSBhcnJheS4gVGhlIGNvbmZpZyBJZHNcbiAqIHdpbGwgYmUgcmVwZWF0ZWQgZm9yIHRoZSBgTUVUUklDYC9gRElNRU5TSU9OYCBzZWxlY3Rpb25zLiBpLmUuIGZvciBhIGBNRVRSSUNgXG4gKiBuYW1lZCBgXCJtZXRyaWNzXCJgIG9mIGB7bWluOiAyLCBtYXg6M31gLCB0aGUgdmFsdWUgbWV0cmljcyB3aWxsIGJlIHJlcGVhdGVkIDJcbiAqIHRvIDMgdGltZXMgZGVwZW5kaW5nIG9uIHdoYXQgdmFsdWVzIHRoZSB1c2VyIHNlbGVjdHMuXG4gKlxuICogTm90ZTogdGhpcyBpcyByZWx5aW5nIG9uIHRoZSBmYWN0IHRoYXQgdGhlIHBvc3RNZXNzYWdlIGZyb20gRGF0YVN0dWRpbyBoYXNcbiAqIHRoZSBmaWVsZHMgc29ydGVkIHRvIGJlIGRpbWVuc2lvbnMsIGZvbGxvd2VkIGJ5IG1ldHJpY3MuXG4gKi9cbmNvbnN0IGZsYXR0ZW5Db25maWdJZHMgPSAobWVzc2FnZTogTWVzc2FnZSk6IENvbmZpZ0lkW10gPT4ge1xuICBjb25zdCBjb25maWdEYXRhRWxlbWVudHM6IENvbmZpZ0RhdGFFbGVtZW50W10gPSBbXTtcbiAgbWVzc2FnZS5jb25maWcuZGF0YS5mb3JFYWNoKChjb25maWdEYXRhOiBDb25maWdEYXRhKSA9PiB7XG4gICAgY29uZmlnRGF0YS5lbGVtZW50cy5mb3JFYWNoKChjb25maWdEYXRhRWxlbWVudDogQ29uZmlnRGF0YUVsZW1lbnQpID0+IHtcbiAgICAgIGNvbmZpZ0RhdGFFbGVtZW50cy5wdXNoKGNvbmZpZ0RhdGFFbGVtZW50KTtcbiAgICB9KTtcbiAgfSk7XG4gIGNvbnN0IGRpbW5zQW5kTWV0cyA9IGNvbmZpZ0RhdGFFbGVtZW50cy5maWx0ZXIoZGltZW5zaW9uT3JNZXRyaWMpO1xuICBjb25zdCBzb3J0ZWQgPSBzdGFibGVTb3J0KFxuICAgIGRpbW5zQW5kTWV0cyxcbiAgICAoYSwgYikgPT4gdG9OdW0oYS50eXBlKSAtIHRvTnVtKGIudHlwZSlcbiAgKTtcbiAgY29uc3QgY29uZmlnSWRzOiBDb25maWdJZFtdID0gW107XG4gIHNvcnRlZC5mb3JFYWNoKChjb25maWdEYXRhRWxlbWVudDogQ29uZmlnRGF0YUVsZW1lbnQpID0+IHtcbiAgICBjb25maWdEYXRhRWxlbWVudC52YWx1ZS5mb3JFYWNoKCgpID0+IGNvbmZpZ0lkcy5wdXNoKGNvbmZpZ0RhdGFFbGVtZW50LmlkKSk7XG4gIH0pO1xuICByZXR1cm4gY29uZmlnSWRzO1xufTtcblxuLyoqXG4gKiBKb2lucyBhIHNpbmdsZSB0YWJsZSByb3cgd2l0aCB0aGUgbWF0Y2hpbmcgYENvbmZpZ0lkYFxuICovXG5jb25zdCBqb2luT2JqZWN0Um93ID0gKGNvbmZpZ0lkczogQ29uZmlnSWRbXSkgPT4gKHJvdzogUm93KTogT2JqZWN0Um93ID0+IHtcbiAgY29uc3Qgb2JqZWN0Um93OiBPYmplY3RSb3cgPSB7fTtcblxuICB6aXAyKHJvdywgY29uZmlnSWRzKS5mb3JFYWNoKChbcm93VmFsLCBjb25maWdJZF06IFtEU1Jvd1ZhbHVlLCBDb25maWdJZF0pID0+IHtcbiAgICBpZiAob2JqZWN0Um93W2NvbmZpZ0lkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvYmplY3RSb3dbY29uZmlnSWRdID0gW107XG4gICAgfVxuICAgIG9iamVjdFJvd1tjb25maWdJZF0ucHVzaChyb3dWYWwpO1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIG9iamVjdFJvdztcbn07XG5cbi8qKlxuICogRm9ybWF0cyB0YWJsZXMgaW50byB0aGUgYE9iamVjdFRhYmxlc2AgZm9ybWF0LlxuICovXG5jb25zdCBvYmplY3RGb3JtYXRUYWJsZSA9IChtZXNzYWdlOiBNZXNzYWdlKTogT2JqZWN0VGFibGVzID0+IHtcbiAgY29uc3QgY29uZmlnSWRzID0gZmxhdHRlbkNvbmZpZ0lkcyhtZXNzYWdlKTtcbiAgY29uc3Qgb2JqZWN0VGFibGVzOiBPYmplY3RUYWJsZXMgPSB7W1RhYmxlVHlwZS5ERUZBVUxUXTogW119O1xuXG4gIG1lc3NhZ2UuZGF0YVJlc3BvbnNlLnRhYmxlcy5mb3JFYWNoKCh0YWJsZTogVGFibGUpID0+IHtcbiAgICBjb25zdCBvYmplY3RSb3dzOiBPYmplY3RSb3dbXSA9IHRhYmxlLnJvd3MubWFwKGpvaW5PYmplY3RSb3coY29uZmlnSWRzKSk7XG4gICAgb2JqZWN0VGFibGVzW3RhYmxlLmlkXSA9IG9iamVjdFJvd3M7XG4gIH0pO1xuXG4gIHJldHVybiBvYmplY3RUYWJsZXM7XG59O1xuXG4vKipcbiAqIEZvcm1hdHMgdGFibGVzIGludG8gdGhlIGBUYWJsZXNgIGZvcm1hdC5cbiAqL1xuY29uc3QgdGFibGVGb3JtYXRUYWJsZSA9IChtZXNzYWdlOiBNZXNzYWdlKTogVGFibGVzID0+IHtcbiAgY29uc3QgZmllbGRzQnk6IEZpZWxkc0J5Q29uZmlnSWQgPSBmaWVsZHNCeUNvbmZpZ0lkKG1lc3NhZ2UpO1xuICBjb25zdCBjb25maWdJZHMgPSBmbGF0dGVuQ29uZmlnSWRzKG1lc3NhZ2UpO1xuICBjb25zdCBjb25maWdJZElkeCA9IHt9O1xuICBjb25zdCBoZWFkZXJzOiBSb3dIZWFkaW5nW10gPSBjb25maWdJZHMubWFwKFxuICAgIChjb25maWdJZDogc3RyaW5nKTogUm93SGVhZGluZyA9PiB7XG4gICAgICBpZiAoY29uZmlnSWRJZHhbY29uZmlnSWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uZmlnSWRJZHhbY29uZmlnSWRdID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmZpZ0lkSWR4W2NvbmZpZ0lkXSsrO1xuICAgICAgfVxuICAgICAgY29uc3QgaWR4ID0gY29uZmlnSWRJZHhbY29uZmlnSWRdO1xuICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNCeVtjb25maWdJZF1baWR4XTtcbiAgICAgIGNvbnN0IGhlYWRpbmc6IFJvd0hlYWRpbmcgPSB7Li4uZmllbGQsIGNvbmZpZ0lkfTtcbiAgICAgIHJldHVybiBoZWFkaW5nO1xuICAgIH1cbiAgKTtcbiAgY29uc3QgdGFibGVUYWJsZXM6IFRhYmxlcyA9IHtcbiAgICBbVGFibGVUeXBlLkRFRkFVTFRdOiB7aGVhZGVyczogW10sIHJvd3M6IFtdfSxcbiAgfTtcblxuICBtZXNzYWdlLmRhdGFSZXNwb25zZS50YWJsZXMuZm9yRWFjaCgodGFibGU6IFRhYmxlKSA9PiB7XG4gICAgdGFibGVUYWJsZXNbdGFibGUuaWRdID0ge1xuICAgICAgaGVhZGVycyxcbiAgICAgIHJvd3M6IHRhYmxlLnJvd3MsXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRhYmxlVGFibGVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaWVsZHMgaW5kZXhlZCBieSB0aGVpciBjb25maWcgaWQuIFNpbmNlIG1hbnkgZmllbGRzIGNhbiBiZSBpblxuICogdGhlIHNhbWUgYE1FVFJJQ2AvYERJTUVOU0lPTmAgc2VsZWN0aW9uLCBgY29uZmlnSWRgIGlzIG1hcHBlZCB0byBgRmllbGRbXWAuXG4gKi9cbmV4cG9ydCBjb25zdCBmaWVsZHNCeUNvbmZpZ0lkID0gKG1lc3NhZ2U6IE1lc3NhZ2UpOiBGaWVsZHNCeUNvbmZpZ0lkID0+IHtcbiAgY29uc3QgZmllbGRzQnlEU0lkID0gZmllbGRzQnlJZChtZXNzYWdlKTtcbiAgY29uc3QgZmllbGRzQnk6IEZpZWxkc0J5Q29uZmlnSWQgPSB7fTtcblxuICBtZXNzYWdlLmNvbmZpZy5kYXRhLmZvckVhY2goKGNvbmZpZ0RhdGE6IENvbmZpZ0RhdGEpID0+IHtcbiAgICBjb25maWdEYXRhLmVsZW1lbnRzLmZvckVhY2goKGNvbmZpZ0RhdGFFbGVtZW50OiBDb25maWdEYXRhRWxlbWVudCkgPT4ge1xuICAgICAgZmllbGRzQnlbY29uZmlnRGF0YUVsZW1lbnQuaWRdID0gY29uZmlnRGF0YUVsZW1lbnQudmFsdWUubWFwKFxuICAgICAgICAoZHNJZDogRmllbGRJZCk6IEZpZWxkID0+IGZpZWxkc0J5RFNJZFtkc0lkXVxuICAgICAgKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZpZWxkc0J5O1xufTtcblxuLyoqXG4gKiBGbGF0dGVucyB0aGUgc3R5bGUgZW50cmllcyBpbnRvIGEgc2luZ2xlIG9iamVjdC4gYHN0eWxlSWRgcyBzaG91bGQgYmUgdW5pcXVlLlxuICovXG5jb25zdCBmbGF0dGVuU3R5bGUgPSAobWVzc2FnZTogTWVzc2FnZSk6IFN0eWxlQnlJZCA9PiB7XG4gIGNvbnN0IHN0eWxlQnlJZDogU3R5bGVCeUlkID0ge307XG4gIChtZXNzYWdlLmNvbmZpZy5zdHlsZSB8fCBbXSkuZm9yRWFjaCgoc3R5bGVFbnRyeTogQ29uZmlnU3R5bGUpID0+IHtcbiAgICBzdHlsZUVudHJ5LmVsZW1lbnRzLmZvckVhY2goKGNvbmZpZ1N0eWxlRWxlbWVudDogQ29uZmlnU3R5bGVFbGVtZW50KSA9PiB7XG4gICAgICBpZiAoc3R5bGVCeUlkW2NvbmZpZ1N0eWxlRWxlbWVudC5pZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYHN0eWxlSWRzIG11c3QgYmUgdW5pcXVlLiBZb3VyIHN0eWxlSWQ6ICcke1xuICAgICAgICAgICAgY29uZmlnU3R5bGVFbGVtZW50LmlkXG4gICAgICAgICAgfScgaXMgdXNlZCBtb3JlIHRoYW4gb25jZS5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBzdHlsZUJ5SWRbY29uZmlnU3R5bGVFbGVtZW50LmlkXSA9IHtcbiAgICAgICAgdmFsdWU6IGNvbmZpZ1N0eWxlRWxlbWVudC52YWx1ZSxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBjb25maWdTdHlsZUVsZW1lbnQuZGVmYXVsdFZhbHVlLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfSwge30pO1xuXG4gIHJldHVybiBzdHlsZUJ5SWQ7XG59O1xuXG5jb25zdCB0aGVtZVN0eWxlID0gKG1lc3NhZ2U6IE1lc3NhZ2UpOiBUaGVtZVN0eWxlID0+IHtcbiAgcmV0dXJuIG1lc3NhZ2UuY29uZmlnLnRoZW1lU3R5bGU7XG59O1xuXG5jb25zdCBtYXBJbnRlcmFjdGlvblR5cGVzID0gKFxuICBkc0ludGVyYWN0aW9uOiBEU0ludGVyYWN0aW9uVHlwZVxuKTogSW50ZXJhY3Rpb25UeXBlID0+IHtcbiAgc3dpdGNoIChkc0ludGVyYWN0aW9uKSB7XG4gICAgY2FzZSBEU0ludGVyYWN0aW9uVHlwZS5GSUxURVI6XG4gICAgICByZXR1cm4gSW50ZXJhY3Rpb25UeXBlLkZJTFRFUjtcbiAgfVxufTtcblxuY29uc3QgdHJhbnNmb3JtRFNJbnRlcmFjdGlvbiA9IChtZXNzYWdlOiBNZXNzYWdlKTogSW50ZXJhY3Rpb25zQnlJZCA9PiB7XG4gIGNvbnN0IGRzSW50ZXJhY3Rpb25zOiBEU0ludGVyYWN0aW9uRGF0YVtdID0gbWVzc2FnZS5jb25maWcuaW50ZXJhY3Rpb25zO1xuICAvLyBUT0RPIC0gcmVtb3ZlIG9uY2UgaW50ZXJhY3Rpb25zIGFyZSBsaXZlLlxuICBpZiAoZHNJbnRlcmFjdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICByZXR1cm4gZHNJbnRlcmFjdGlvbnMucmVkdWNlKFxuICAgIChhY2M6IEludGVyYWN0aW9uc0J5SWQsIGRzSW50ZXJhY3Rpb246IERTSW50ZXJhY3Rpb25EYXRhKSA9PiB7XG4gICAgICBjb25zdCBpbnRlcmFjdGlvbnMgPSBkc0ludGVyYWN0aW9uLnN1cHBvcnRlZEFjdGlvbnMubWFwKFxuICAgICAgICBtYXBJbnRlcmFjdGlvblR5cGVzXG4gICAgICApO1xuICAgICAgY29uc3QgdmFsdWUgPSB7XG4gICAgICAgIHR5cGU6IG1hcEludGVyYWN0aW9uVHlwZXMoZHNJbnRlcmFjdGlvbi52YWx1ZS50eXBlKSxcbiAgICAgICAgZGF0YTogZHNJbnRlcmFjdGlvbi52YWx1ZS5kYXRhLFxuICAgICAgfTtcbiAgICAgIGFjY1tkc0ludGVyYWN0aW9uLmlkXSA9IHtcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIHN1cHBvcnRlZEFjdGlvbnM6IGludGVyYWN0aW9ucyxcbiAgICAgIH07XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sXG4gICAge31cbiAgKTtcbn07XG5cbi8qKlxuICogVGhlIHRyYW5zZm9ybSB0byB1c2UgZm9yIGRhdGEgaW4gYSBUYWJsZSBmb3JtYXQuIGkuZS4gYFtbMSwgMiwgM10sIFs0LCA1LCA2XV1gXG4gKi9cbmV4cG9ydCBjb25zdCB0YWJsZVRyYW5zZm9ybTogVGFibGVUcmFuc2Zvcm0gPSAoXG4gIG1lc3NhZ2U6IE1lc3NhZ2Vcbik6IFRhYmxlRm9ybWF0ID0+ICh7XG4gIHRhYmxlczogdGFibGVGb3JtYXRUYWJsZShtZXNzYWdlKSxcbiAgZmllbGRzOiBmaWVsZHNCeUNvbmZpZ0lkKG1lc3NhZ2UpLFxuICBzdHlsZTogZmxhdHRlblN0eWxlKG1lc3NhZ2UpLFxuICB0aGVtZTogdGhlbWVTdHlsZShtZXNzYWdlKSxcbiAgaW50ZXJhY3Rpb25zOiB0cmFuc2Zvcm1EU0ludGVyYWN0aW9uKG1lc3NhZ2UpLFxufSk7XG5cbi8qKlxuICogVGhlIHRyYW5zZm9ybSB0byB1c2UgZm9yIGRhdGEgaW4gYW4gb2JqZWN0IGZvcm1hdC4gaS5lLiBgW3tuYW1lOiAnam9obicsIHZpZXdzOiAzfSwge25hbWU6ICdzdXppZScsIHZpZXdzOiA1fV1gXG4gKi9cbmV4cG9ydCBjb25zdCBvYmplY3RUcmFuc2Zvcm06IE9iamVjdFRyYW5zZm9ybSA9IChtZXNzYWdlOiBNZXNzYWdlKSA9PiAoe1xuICB0YWJsZXM6IG9iamVjdEZvcm1hdFRhYmxlKG1lc3NhZ2UpLFxuICBmaWVsZHM6IGZpZWxkc0J5Q29uZmlnSWQobWVzc2FnZSksXG4gIHN0eWxlOiBmbGF0dGVuU3R5bGUobWVzc2FnZSksXG4gIHRoZW1lOiB0aGVtZVN0eWxlKG1lc3NhZ2UpLFxuICBpbnRlcmFjdGlvbnM6IHRyYW5zZm9ybURTSW50ZXJhY3Rpb24obWVzc2FnZSksXG59KTtcblxuLypcbiAqIFN1YnNjcmliZXMgdG8gbWVzc2FnZXMgZnJvbSBEYXRhIFN0dWRpby4gQ2FsbHMgYGNiYCBmb3IgZXZlcnkgbmV3XG4gKiBbW01lc3NhZ2VUeXBlLlJFTkRFUl1dIG1lc3NhZ2UuIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgdW5zdWJzY3JpYmVcbiAqIGBjYWxsYmFja2AgZnJvbSBmdXJ0aGVyIGludm9jYXRpb25zLlxuICpcbiAqIFVzYWdlIC0gdGFibGVUcmFuc2Zvcm06XG4gKiBgYGBcbiAqIHZhciB1bnN1YnNjcmliZSA9IGRzY2Muc3Vic2NyaWJlVG9EYXRhKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAqICAgY29uc29sZS5sb2cobWVzc2FnZS50YWJsZXMpXG4gKiAgIGNvbnNvbGUubG9nKG1lc3NhZ2UuZmllbGRzKVxuICogICBjb25zb2xlLmxvZyhtZXNzYWdlLnN0eWxlKVxuICogfSwge3RyYW5zZm9ybTogZHNjYy50YWJsZVRyYW5zZm9ybX0pO1xuICpcbiAqIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gKiAgIHVuc3Vic2NyaWJlKCk7XG4gKiB9LCAzMDAwKVxuICogYGBgXG5cbiAqIFVzYWdlIC0gb2JqZWN0VHJhbnNmb3JtOlxuICogYGBgXG4gKiB2YXIgdW5zdWJzY3JpYmUgPSBkc2NjLnN1YnNjcmliZVRvRGF0YShmdW5jdGlvbihtZXNzYWdlKSB7XG4gKiAgIGNvbnNvbGUubG9nKG1lc3NhZ2UudGFibGVzKVxuICogICBjb25zb2xlLmxvZyhtZXNzYWdlLmZpZWxkcylcbiAqICAgY29uc29sZS5sb2cobWVzc2FnZS5zdHlsZSlcbiAqIH0sIHt0cmFuc2Zvcm06IGRzY2Mub2JqZWN0VHJhbnNmb3JtfSk7XG4gKlxuICogc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAqICAgdW5zdWJzY3JpYmUoKTtcbiAqIH0sIDMwMDApXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IHN1YnNjcmliZVRvRGF0YSA9IDxUPihcbiAgY2I6IChjb21wb25lbnREYXRhOiBUKSA9PiB2b2lkLFxuICBvcHRpb25zOiBTdWJzY3JpcHRpb25zT3B0aW9uczxUPlxuKTogKCgpID0+IHZvaWQpID0+IHtcbiAgaWYgKFxuICAgIChvcHRpb25zLnRyYW5zZm9ybSBhcyBhbnkpID09PSB0YWJsZVRyYW5zZm9ybSB8fFxuICAgIChvcHRpb25zLnRyYW5zZm9ybSBhcyBhbnkpID09PSBvYmplY3RUcmFuc2Zvcm1cbiAgKSB7XG4gICAgY29uc3Qgb25NZXNzYWdlID0gKG1lc3NhZ2U6IFBvc3RNZXNzYWdlKSA9PiB7XG4gICAgICBpZiAobWVzc2FnZS5kYXRhLnR5cGUgPT09IE1lc3NhZ2VUeXBlLlJFTkRFUikge1xuICAgICAgICBjYihvcHRpb25zLnRyYW5zZm9ybShtZXNzYWdlLmRhdGEpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgYE1lc3NhZ2VUeXBlOiAke1xuICAgICAgICAgICAgbWVzc2FnZS5kYXRhLnR5cGVcbiAgICAgICAgICB9IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhpcyB2ZXJzaW9uIG9mIHRoZSBsaWJyYXJ5LmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25NZXNzYWdlKTtcbiAgICBjb25zdCBjb21wb25lbnRJZCA9IGdldENvbXBvbmVudElkKCk7XG4gICAgLy8gVGVsbCBEYXRhU3R1ZGlvIHRoYXQgdGhlIHZpeiBpcyByZWFkeSB0byBnZXQgZXZlbnRzLlxuICAgIGNvbnN0IHZpelJlYWR5TWVzc2FnZTogVml6UmVhZHlNZXNzYWdlID0ge1xuICAgICAgY29tcG9uZW50SWQsXG4gICAgICB0eXBlOiBUb0RTTWVzc2FnZVR5cGUuVklaX1JFQURZLFxuICAgIH07XG4gICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSh2aXpSZWFkeU1lc3NhZ2UsICcqJyk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25NZXNzYWdlKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE9ubHkgdGhlIGJ1aWx0IGluIHRyYW5zZm9ybSBmdW5jdGlvbnMgYXJlIHN1cHBvcnRlZC5gKTtcbiAgfVxufTtcblxuLypcbiAqIERvZXMgdGhlIHRoaW5nIHRoYXQgaW50ZXJhY3Rpb25zIHNob3VsZCBkby5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlbmRJbnRlcmFjdGlvbjogU2VuZEludGVyYWN0aW9uID0gKFxuICBhY3Rpb25JZCxcbiAgaW50ZXJhY3Rpb24sXG4gIGRhdGFcbikgPT4ge1xuICBjb25zdCBjb21wb25lbnRJZCA9IGdldENvbXBvbmVudElkKCk7XG4gIGNvbnN0IGludGVyYWN0aW9uTWVzc2FnZTogSW50ZXJhY3Rpb25NZXNzYWdlID0ge1xuICAgIHR5cGU6IFRvRFNNZXNzYWdlVHlwZS5JTlRFUkFDVElPTixcbiAgICBpZDogYWN0aW9uSWQsXG4gICAgZGF0YSxcbiAgICBjb21wb25lbnRJZCxcbiAgfTtcbiAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZShpbnRlcmFjdGlvbk1lc3NhZ2UsICcqJyk7XG59O1xuXG4vKlxuICogQ2xlYXJzIGFuIGludGVyYWN0aW9uXG4gKi9cblxuZXhwb3J0IGNvbnN0IGNsZWFySW50ZXJhY3Rpb246IENsZWFySW50ZXJhY3Rpb24gPSAoYWN0aW9uSWQsIGludGVyYWN0aW9uKSA9PiB7XG4gIHNlbmRJbnRlcmFjdGlvbihhY3Rpb25JZCwgaW50ZXJhY3Rpb24sIHVuZGVmaW5lZCk7XG59O1xuIiwiaW1wb3J0IHtjbGVhckludGVyYWN0aW9ufSBmcm9tICcuJztcblxuZXhwb3J0IGludGVyZmFjZSBQb3N0TWVzc2FnZSBleHRlbmRzIE1lc3NhZ2VFdmVudCB7XG4gIGRhdGE6IE1lc3NhZ2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBUaGUgbWVzc2FnZSB0eXBlLlxuICAgKi9cbiAgdHlwZTogTWVzc2FnZVR5cGU7XG4gIC8qKlxuICAgKiBUaGUgY29uZmlndXJhdGlvbiBzdGF0ZSBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY29uZmlnOiBDb25maWc7XG4gIC8qKlxuICAgKiBBIGxpc3Qgb2YgYWxsIHVzZXIgc2VsZWN0ZWQgZmllbGRzLlxuICAgKi9cbiAgZmllbGRzOiBGaWVsZFtdO1xuICAvKipcbiAgICogVGhlIGRhdGEgY29ycmVzcG9uZGluZyB0byB0aGUgZGF0YSBjb25maWcgc3RhdGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGRhdGFSZXNwb25zZTogRGF0YVJlc3BvbnNlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZyB7XG4gIC8qKlxuICAgKiBUaGUgZGF0YSBjb25maWcgZGVmaW5lZCBmb3IgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGRhdGE6IENvbmZpZ0RhdGFbXTtcbiAgLyoqXG4gICAqIFRoZSBzdHlsZSBlbGVtZW50cyByZXF1aXJlZCBhbmQgc3VwcG9ydGVkIGJ5IHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBzdHlsZTogQ29uZmlnU3R5bGVbXTtcbiAgdGhlbWVTdHlsZT86IENvbmZpZ1RoZW1lU3R5bGU7XG4gIGludGVyYWN0aW9uczogRFNJbnRlcmFjdGlvbkRhdGFbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWVsZCB7XG4gIC8qKlxuICAgKiBUaGUgSUQgb2YgdGhlIGZpZWxkLlxuICAgKi9cbiAgaWQ6IEZpZWxkSWQ7XG4gIC8qKlxuICAgKiBUaGUgdXNlci1mcmllbmRseSBuYW1lIG9mIHRoZSBmaWVsZC5cbiAgICovXG4gIG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSB1c2VyLWZyaWVuZGx5IGRlc2NyaXB0aW9uIG9mIHRoZSBmaWVsZC5cbiAgICovXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGZpZWxkIHR5cGUuXG4gICAqL1xuICB0eXBlOiBGaWVsZFR5cGU7XG4gIC8qKlxuICAgKiBUaGUgZmllbGQgY29uY2VwdC5cbiAgICovXG4gIGNvbmNlcHQ6IENvbmNlcHRUeXBlO1xufVxuXG5leHBvcnQgZW51bSBDb25jZXB0VHlwZSB7XG4gIE1FVFJJQyA9ICdNRVRSSUMnLFxuICBESU1FTlNJT04gPSAnRElNRU5TSU9OJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhUmVzcG9uc2Uge1xuICAvKipcbiAgICogVGhlIGxpc3Qgb2YgdGFibGVzIGZvciB0aGUgY3VycmVudCBkYXRhIGNvbmZpZ3VyYXRpb24uXG4gICAqL1xuICB0YWJsZXM6IFRhYmxlW107XG59XG5cbmV4cG9ydCBlbnVtIE1lc3NhZ2VUeXBlIHtcbiAgUkVOREVSID0gJ1JFTkRFUicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnRGF0YSB7XG4gIC8qKlxuICAgKiBUaGUgSUQgb2YgdGhlIGRhdGEgc2VjdGlvbi5cbiAgICpcbiAgICogVGhpcyBzaG91bGQgYmUgYSBub24tZW1wdHkgc3RyaW5nIHdpdGggbm8gc3BhY2VzLlxuICAgKi9cbiAgaWQ6IENvbmZpZ0RhdGFJZDtcbiAgLyoqXG4gICAqIFRoZSBsYWJlbCBmb3IgdGhlIGRhdGEgc2VjdGlvbi5cbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZGF0YSBlbGVtZW50cyB0byByZW5kZXIuXG4gICAqL1xuICBlbGVtZW50czogQ29uZmlnRGF0YUVsZW1lbnRbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnU3R5bGUge1xuICAvKipcbiAgICogVGhlIElEIG9mIHRoZSBzdHlsZSBzZWN0aW9uLlxuICAgKi9cbiAgaWQ6IENvbmZpZ1N0eWxlSWQ7XG4gIC8qKlxuICAgKiBUaGUgaGVhZGluZyBmb3IgdGhlIHN0eWxlIHNlY3Rpb24uXG4gICAqL1xuICBsYWJlbDogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHN0eWxlIGVsZW1lbnRzIHRvIHJlbmRlci5cbiAgICovXG4gIGVsZW1lbnRzOiBDb25maWdTdHlsZUVsZW1lbnRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdUaGVtZVN0eWxlIHtcbiAgdGhlbWVGaWxsQ29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk6IG51bWJlcjtcbiAgfTtcbiAgdGhlbWVGb250Q29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk6IG51bWJlcjtcbiAgfTtcbiAgdGhlbWVBY2NlbnRGaWxsQ29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk6IG51bWJlcjtcbiAgfTtcbiAgdGhlbWVBY2NlbnRGb250Q29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk6IG51bWJlcjtcbiAgfTtcbiAgdGhlbWVGb250RmFtaWx5OiBzdHJpbmc7XG4gIHRoZW1lQWNjZW50Rm9udEZhbWlseTogc3RyaW5nO1xuICB0aGVtZUluY3JlYXNlQ29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk6IG51bWJlcjtcbiAgfTtcbiAgdGhlbWVEZWNyZWFzZUNvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5OiBudW1iZXI7XG4gIH07XG4gIHRoZW1lR3JpZENvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5OiBudW1iZXI7XG4gIH07XG4gIHRoZW1lU2VyaWVzQ29sb3I6IEFycmF5PHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk6IG51bWJlcjtcbiAgfT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWVTdHlsZSB7XG4gIHRoZW1lRmlsbENvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5OiBudW1iZXI7XG4gIH07XG4gIHRoZW1lRm9udENvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5OiBudW1iZXI7XG4gIH07XG4gIHRoZW1lQWNjZW50RmlsbENvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5OiBudW1iZXI7XG4gIH07XG4gIHRoZW1lQWNjZW50Rm9udENvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5OiBudW1iZXI7XG4gIH07XG4gIHRoZW1lRm9udEZhbWlseTogc3RyaW5nO1xuICB0aGVtZUFjY2VudEZvbnRGYW1pbHk6IHN0cmluZztcbiAgdGhlbWVJbmNyZWFzZUNvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5OiBudW1iZXI7XG4gIH07XG4gIHRoZW1lRGVjcmVhc2VDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eTogbnVtYmVyO1xuICB9O1xuICB0aGVtZUdyaWRDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eTogbnVtYmVyO1xuICB9O1xuICB0aGVtZVNlcmllc0NvbG9yOiBBcnJheTx7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5OiBudW1iZXI7XG4gIH0+O1xufVxuXG5leHBvcnQgZW51bSBGaWVsZFR5cGUge1xuICBZRUFSID0gJ1lFQVInLFxuICBZRUFSX1FVQVJURVIgPSAnWUVBUl9RVUFSVEVSJyxcbiAgWUVBUl9NT05USCA9ICdZRUFSX01PTlRIJyxcbiAgWUVBUl9XRUVLID0gJ1lFQVJfV0VFSycsXG4gIFlFQVJfTU9OVEhfREFZID0gJ1lFQVJfTU9OVEhfREFZJyxcbiAgWUVBUl9NT05USF9EQVlfSE9VUiA9ICdZRUFSX01PTlRIX0RBWV9IT1VSJyxcbiAgUVVBUlRFUiA9ICdRVUFSVEVSJyxcbiAgTU9OVEggPSAnTU9OVEgnLFxuICBXRUVLID0gJ1dFRUsnLFxuICBNT05USF9EQVkgPSAnTU9OVEhfREFZJyxcbiAgREFZX09GX1dFRUsgPSAnREFZX09GX1dFRUsnLFxuICBEQVkgPSAnREFZJyxcbiAgSE9VUiA9ICdIT1VSJyxcbiAgTUlOVVRFID0gJ01JTlVURScsXG4gIERVUkFUSU9OID0gJ0RVUkFUSU9OJyxcbiAgQ09VTlRSWSA9ICdDT1VOVFJZJyxcbiAgQ09VTlRSWV9DT0RFID0gJ0NPVU5UUllfQ09ERScsXG4gIENPTlRJTkVOVCA9ICdDT05USU5FTlQnLFxuICBDT05USU5FTlRfQ09ERSA9ICdDT05USU5FTlRfQ09ERScsXG4gIFNVQl9DT05USU5FTlQgPSAnU1VCX0NPTlRJTkVOVCcsXG4gIFNVQl9DT05USU5FTlRfQ09ERSA9ICdTVUJfQ09OVElORU5UX0NPREUnLFxuICBSRUdJT04gPSAnUkVHSU9OJyxcbiAgUkVHSU9OX0NPREUgPSAnUkVHSU9OX0NPREUnLFxuICBDSVRZID0gJ0NJVFknLFxuICBDSVRZX0NPREUgPSAnQ0lUWV9DT0RFJyxcbiAgTUVUUk9fQ09ERSA9ICdNRVRST19DT0RFJyxcbiAgTEFUSVRVREVfTE9OR0lUVURFID0gJ0xBVElUVURFX0xPTkdJVFVERScsXG4gIE5VTUJFUiA9ICdOVU1CRVInLFxuICBQRVJDRU5UID0gJ1BFUkNFTlQnLFxuICBURVhUID0gJ1RFWFQnLFxuICBCT09MRUFOID0gJ0JPT0xFQU4nLFxuICBVUkwgPSAnVVJMJyxcbiAgSU1BR0UgPSAnSU1BR0UnLFxuICBDVVJSRU5DWV9BRUQgPSAnQ1VSUkVOQ1lfQUVEJyxcbiAgQ1VSUkVOQ1lfQUxMID0gJ0NVUlJFTkNZX0FMTCcsXG4gIENVUlJFTkNZX0FSUyA9ICdDVVJSRU5DWV9BUlMnLFxuICBDVVJSRU5DWV9BVUQgPSAnQ1VSUkVOQ1lfQVVEJyxcbiAgQ1VSUkVOQ1lfQkRUID0gJ0NVUlJFTkNZX0JEVCcsXG4gIENVUlJFTkNZX0JHTiA9ICdDVVJSRU5DWV9CR04nLFxuICBDVVJSRU5DWV9CT0IgPSAnQ1VSUkVOQ1lfQk9CJyxcbiAgQ1VSUkVOQ1lfQlJMID0gJ0NVUlJFTkNZX0JSTCcsXG4gIENVUlJFTkNZX0NBRCA9ICdDVVJSRU5DWV9DQUQnLFxuICBDVVJSRU5DWV9DREYgPSAnQ1VSUkVOQ1lfQ0RGJyxcbiAgQ1VSUkVOQ1lfQ0hGID0gJ0NVUlJFTkNZX0NIRicsXG4gIENVUlJFTkNZX0NMUCA9ICdDVVJSRU5DWV9DTFAnLFxuICBDVVJSRU5DWV9DTlkgPSAnQ1VSUkVOQ1lfQ05ZJyxcbiAgQ1VSUkVOQ1lfQ09QID0gJ0NVUlJFTkNZX0NPUCcsXG4gIENVUlJFTkNZX0NSQyA9ICdDVVJSRU5DWV9DUkMnLFxuICBDVVJSRU5DWV9DWksgPSAnQ1VSUkVOQ1lfQ1pLJyxcbiAgQ1VSUkVOQ1lfREtLID0gJ0NVUlJFTkNZX0RLSycsXG4gIENVUlJFTkNZX0RPUCA9ICdDVVJSRU5DWV9ET1AnLFxuICBDVVJSRU5DWV9FR1AgPSAnQ1VSUkVOQ1lfRUdQJyxcbiAgQ1VSUkVOQ1lfRVRCID0gJ0NVUlJFTkNZX0VUQicsXG4gIENVUlJFTkNZX0VVUiA9ICdDVVJSRU5DWV9FVVInLFxuICBDVVJSRU5DWV9HQlAgPSAnQ1VSUkVOQ1lfR0JQJyxcbiAgQ1VSUkVOQ1lfSEtEID0gJ0NVUlJFTkNZX0hLRCcsXG4gIENVUlJFTkNZX0hSSyA9ICdDVVJSRU5DWV9IUksnLFxuICBDVVJSRU5DWV9IVUYgPSAnQ1VSUkVOQ1lfSFVGJyxcbiAgQ1VSUkVOQ1lfSURSID0gJ0NVUlJFTkNZX0lEUicsXG4gIENVUlJFTkNZX0lMUyA9ICdDVVJSRU5DWV9JTFMnLFxuICBDVVJSRU5DWV9JTlIgPSAnQ1VSUkVOQ1lfSU5SJyxcbiAgQ1VSUkVOQ1lfSVJSID0gJ0NVUlJFTkNZX0lSUicsXG4gIENVUlJFTkNZX0lTSyA9ICdDVVJSRU5DWV9JU0snLFxuICBDVVJSRU5DWV9KTUQgPSAnQ1VSUkVOQ1lfSk1EJyxcbiAgQ1VSUkVOQ1lfSlBZID0gJ0NVUlJFTkNZX0pQWScsXG4gIENVUlJFTkNZX0tSVyA9ICdDVVJSRU5DWV9LUlcnLFxuICBDVVJSRU5DWV9MS1IgPSAnQ1VSUkVOQ1lfTEtSJyxcbiAgQ1VSUkVOQ1lfTFRMID0gJ0NVUlJFTkNZX0xUTCcsXG4gIENVUlJFTkNZX01OVCA9ICdDVVJSRU5DWV9NTlQnLFxuICBDVVJSRU5DWV9NVlIgPSAnQ1VSUkVOQ1lfTVZSJyxcbiAgQ1VSUkVOQ1lfTVhOID0gJ0NVUlJFTkNZX01YTicsXG4gIENVUlJFTkNZX01ZUiA9ICdDVVJSRU5DWV9NWVInLFxuICBDVVJSRU5DWV9OT0sgPSAnQ1VSUkVOQ1lfTk9LJyxcbiAgQ1VSUkVOQ1lfTlpEID0gJ0NVUlJFTkNZX05aRCcsXG4gIENVUlJFTkNZX1BBQiA9ICdDVVJSRU5DWV9QQUInLFxuICBDVVJSRU5DWV9QRU4gPSAnQ1VSUkVOQ1lfUEVOJyxcbiAgQ1VSUkVOQ1lfUEhQID0gJ0NVUlJFTkNZX1BIUCcsXG4gIENVUlJFTkNZX1BLUiA9ICdDVVJSRU5DWV9QS1InLFxuICBDVVJSRU5DWV9QTE4gPSAnQ1VSUkVOQ1lfUExOJyxcbiAgQ1VSUkVOQ1lfUk9OID0gJ0NVUlJFTkNZX1JPTicsXG4gIENVUlJFTkNZX1JTRCA9ICdDVVJSRU5DWV9SU0QnLFxuICBDVVJSRU5DWV9SVUIgPSAnQ1VSUkVOQ1lfUlVCJyxcbiAgQ1VSUkVOQ1lfU0FSID0gJ0NVUlJFTkNZX1NBUicsXG4gIENVUlJFTkNZX1NFSyA9ICdDVVJSRU5DWV9TRUsnLFxuICBDVVJSRU5DWV9TR0QgPSAnQ1VSUkVOQ1lfU0dEJyxcbiAgQ1VSUkVOQ1lfVEhCID0gJ0NVUlJFTkNZX1RIQicsXG4gIENVUlJFTkNZX1RSWSA9ICdDVVJSRU5DWV9UUlknLFxuICBDVVJSRU5DWV9UV0QgPSAnQ1VSUkVOQ1lfVFdEJyxcbiAgQ1VSUkVOQ1lfVFpTID0gJ0NVUlJFTkNZX1RaUycsXG4gIENVUlJFTkNZX1VBSCA9ICdDVVJSRU5DWV9VQUgnLFxuICBDVVJSRU5DWV9VU0QgPSAnQ1VSUkVOQ1lfVVNEJyxcbiAgQ1VSUkVOQ1lfVVlVID0gJ0NVUlJFTkNZX1VZVScsXG4gIENVUlJFTkNZX1ZFRiA9ICdDVVJSRU5DWV9WRUYnLFxuICBDVVJSRU5DWV9WTkQgPSAnQ1VSUkVOQ1lfVk5EJyxcbiAgQ1VSUkVOQ1lfWUVSID0gJ0NVUlJFTkNZX1lFUicsXG4gIENVUlJFTkNZX1pBUiA9ICdDVVJSRU5DWV9aQVInLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlIHtcbiAgLyoqXG4gICAqIFRoZSB0eXBlIG9mIHRoZSB0YWJsZS5cbiAgICovXG4gIGlkOiBUYWJsZVR5cGU7XG4gIC8qKlxuICAgKiBUaGUgW1tGaWVsZElkXV1zIG9mIHRoZSBmaWVsZHMgc2VsZWN0ZWQgYnkgdGhlIHVzZXIuXG4gICAqL1xuICBmaWVsZHM6IEZpZWxkSWRbXTtcbiAgLyoqXG4gICAqIFRoZSByb3dzIG9mIGRhdGEgVmFsdWVzLlxuICAgKi9cbiAgcm93czogRFNSb3dbXTtcbn1cblxuLyoqXG4gKiBBIHJvdyBvZiB2YWx1ZXMuXG4gKlxuICogVGhlIG9yZGVyIG9mIHZhbHVlcyBjb3JyZXNwb25kcyB0byB0aGUgb3JkZXIgb2YgdGhlIGZpZWxkcyBvZiBhbGwgZGF0YSBlbGVtZW50IGZpZWxkIG9iamVjdHMuXG4gKi9cblxuZXhwb3J0IHR5cGUgRFNSb3cgPSBEU1Jvd1ZhbHVlW107XG4vKipcbiAqIEEgdmFsdWUgZm9yIGFuIGVudHJ5IGluIGEgRFNSb3cuXG4gKi9cbmV4cG9ydCB0eXBlIERTUm93VmFsdWUgPSBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0RhdGFFbGVtZW50IHtcbiAgLyoqXG4gICAqIFRoZSBkYXRhIGVsZW1lbnQgdHlwZSB0byByZW5kZXIuXG4gICAqL1xuICB0eXBlOiBDb25maWdEYXRhRWxlbWVudFR5cGU7XG4gIC8qKlxuICAgKiBUaGUgSUQgb2YgdGhlIGRhdGEgZWxlbWVudC5cbiAgICpcbiAgICogVGhpcyBzaG91bGQgYmUgYSBub24tZW1wdHkgc3RyaW5nIHdpdGggbm8gc3BhY2VzLlxuICAgKi9cbiAgaWQ6IENvbmZpZ0RhdGFFbGVtZW50SWQ7XG4gIC8qKlxuICAgKiBUaGUgdG9vbHRpcCBvciBsYWJlbCBmb3IgdGhlIGRhdGEgZWxlbWVudC5cbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZGF0YSBvcHRpb25zIGZvciB0aGUgZWxlbWVudC5cbiAgICpcbiAgICogVGhpcyBpcyBkZXBlbmRlbnQgb24gdGhlIFtbQ29uZmlnRGF0YUVsZW1lbnRUeXBlXV0gb2YgdGhlIGVsZW1lbnQuXG4gICAqL1xuICBvcHRpb25zOiBEYXRhRWxlbWVudE9wdGlvbnM7XG4gIC8qKlxuICAgKiBUaGUgbGlzdCBvZiBbW0ZpZWxkSWRdXXMgc2VsZWN0ZWQgYnkgdGhlIHVzZXIuXG4gICAqXG4gICAqIFRoaXMgaXMgb25seSBkZWZpbmVkIGlmIHRoZSBbW0NvbmZpZ0VsZW1lbnRUeXBlXV0gaXMgYERJTUVOU0lPTmAgb3IgYE1FVFJJQ2AuXG4gICAqL1xuICB2YWx1ZTogRmllbGRJZFtdO1xufVxuZXhwb3J0IGludGVyZmFjZSBDb25maWdTdHlsZUVsZW1lbnQge1xuICAvKipcbiAgICogVGhlIHN0eWxlIGVsZW1lbnQgdHlwZSB0byByZW5kZXIuXG4gICAqL1xuICB0eXBlOiBDb25maWdTdHlsZUVsZW1lbnRUeXBlO1xuICAvKipcbiAgICogVGhlIElEIG9mIHRoZSBzdHlsZSBlbGVtZW50LlxuICAgKlxuICAgKiBUaGlzIHNob3VsZCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcgd2l0aCBubyBzcGFjZXMuXG4gICAqL1xuICBpZDogQ29uZmlnU3R5bGVFbGVtZW50SWQ7XG4gIC8qKlxuICAgKiBUaGUgdG9vbHRpcCBvciBsYWJlbCBmb3IgdGhlIHN0eWxlIGVsZW1lbnQuXG4gICAqXG4gICAqIFRoaXMgaXMgdGhlIGxhYmVsIHRleHQgZm9yIGEgYENIRUNLQk9YYCBlbGVtZW50IGFuZCB0aGUgdG9vbHRpcCB0ZXh0IGZvciBvdGhlciBlbGVtZW50cy5cbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBmb3IgdGhlIHN0eWxlIGVsZW1lbnQuXG4gICAqXG4gICAqIEludmFsaWQgdmFsdWVzIHdpbGwgYmUgaWdub3JlZC5cbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIHN0eWxlIGVsZW1lbnQuXG4gICAqL1xuICB2YWx1ZTogc3RyaW5nO1xufVxuZXhwb3J0IGVudW0gVGFibGVUeXBlIHtcbiAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgQ09NUEFSSVNPTiA9ICdDT01QQVJJU09OJyxcbiAgU1VNTUFSWSA9ICdTVU1NQVJZJyxcbn1cblxuZXhwb3J0IGVudW0gQ29uZmlnRGF0YUVsZW1lbnRUeXBlIHtcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSBtZXRyaWMgZmllbGQgZWxlbWVudC5cbiAgICovXG4gIE1FVFJJQyA9ICdNRVRSSUMnLFxuICAvKipcbiAgICogUmVuZGVycyBhIGRpbWVuc2lvbiBmaWVsZCBlbGVtZW50LlxuICAgKi9cbiAgRElNRU5TSU9OID0gJ0RJTUVOU0lPTicsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgc29ydCBmaWVsZCBlbGVtZW50LlxuICAgKlxuICAgKiBTb3J0IGhhcyBhbiBvcmRlciBkcm9wZG93bi5cbiAgICovXG4gIFNPUlQgPSAnU09SVCcsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgZHJvcGRvd24gdGhhdCBhZmZlY3RzIHRoZSBtYXhpbXVtIG51bWJlciBvZiByZXN1bHRzIHJldHVybmVkLlxuICAgKi9cbiAgTUFYX1JFU1VMVFMgPSAnTUFYX1JFU1VMVFMnLFxufVxuXG5leHBvcnQgdHlwZSBEYXRhRWxlbWVudE9wdGlvbnMgPVxuICB8IE1ldHJpY09wdGlvbnNcbiAgfCBEaW1lbnNpb25PcHRpb25zXG4gIHwgU29ydE9wdGlvbnNcbiAgfCBNYXhSZXN1bHRzT3B0aW9ucztcblxuZXhwb3J0IGVudW0gQ29uZmlnU3R5bGVFbGVtZW50VHlwZSB7XG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgdGV4dCBpbnB1dCBib3guXG4gICAqL1xuICBURVhUSU5QVVQgPSAnVEVYVElOUFVUJyxcbiAgLyoqXG4gICAqIEEgc2luZ2xlIHNlbGVjdCBkcm9wZG93bi5cbiAgICovXG4gIFNFTEVDVF9TSU5HTEUgPSAnU0VMRUNUX1NJTkdMRScsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgY2hlY2tib3guXG4gICAqXG4gICAqIERlZmF1bHQgdmFsdWU6IGBmYWxzZWBcbiAgICovXG4gIENIRUNLQk9YID0gJ0NIRUNLQk9YJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGZvbnQgY29sb3Igc2VsZWN0b3IuXG4gICAqXG4gICAqIEFjY2VwdGFibGUgZGVmYXVsdCB2YWx1ZXM6IEhFWCBjb2xvciB2YWx1ZS4gRS5nLiBgXCIjODg4ODg4XCJgLlxuICAgKlxuICAgKiBEZWZhdWx0IHZhbHVlOiBgXCIjMDAwXCJgLlxuICAgKi9cbiAgRk9OVF9DT0xPUiA9ICdGT05UX0NPTE9SJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGZvbnQgc2l6ZSBzZWxlY3Rvci5cbiAgICpcbiAgICogRGVmYXVsdCB2YWx1ZTogYFwiMTRweFwiYC5cbiAgICovXG4gIEZPTlRfU0laRSA9ICdGT05UX1NJWkUnLFxuICAvKipcbiAgICogUmVuZGVycyB0aGUgZm9udCBmYW1pbHkgc2VsZWN0b3IuXG4gICAqXG4gICAqIERlZmF1bHQgdmFsdWU6IGBcIlwiYFxuICAgKi9cbiAgRk9OVF9GQU1JTFkgPSAnRk9OVF9GQU1JTFknLFxuICAvKipcbiAgICogUmVuZGVycyBhIGZpbGwgY29sb3Igc2VsZWN0b3IuXG4gICAqXG4gICAqIEFjY2VwdGFibGUgZGVmYXVsdCB2YWx1ZXM6IEhFWCBjb2xvciB2YWx1ZS5cbiAgICovXG4gIEZJTExfQ09MT1IgPSAnRklMTF9DT0xPUicsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgYm9yZGVyIGNvbG9yIHNlbGVjdG9yLlxuICAgKlxuICAgKiBBY2NlcHRhYmxlIGRlZmF1bHQgdmFsdWVzOiBIRVggY29sb3IgdmFsdWUuXG4gICAqL1xuICBCT1JERVJfQ09MT1IgPSAnQk9SREVSX0NPTE9SJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYW4gYXhpcyBjb2xvciBzZWxlY3Rvci5cbiAgICpcbiAgICogQWNjZXB0YWJsZSBkZWZhdWx0IHZhbHVlczogSEVYIGNvbG9yIHZhbHVlLlxuICAgKi9cbiAgQVhJU19DT0xPUiA9ICdBWElTX0NPTE9SJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSBncmlkIGNvbG9yIHNlbGVjdG9yLlxuICAgKlxuICAgKiBBY2NlcHRhYmxlIGRlZmF1bHQgdmFsdWVzOiBIRVggY29sb3IgdmFsdWUuXG4gICAqL1xuICBHUklEX0NPTE9SID0gJ0dSSURfQ09MT1InLFxuICAvKipcbiAgICogUmVuZGVycyBhbiBvcGFjaXR5IHNlbGVjdG9yLlxuICAgKi9cbiAgT1BBQ0lUWSA9ICdPUEFDSVRZJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSBsaW5lIHdlaWdodCBwaWNrZXIuXG4gICAqL1xuICBMSU5FX1dFSUdIVCA9ICdMSU5FX1dFSUdIVCcsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgbGluZSBzdHlsZSBwaWNrZXIuXG4gICAqXG4gICAqIEFjY2VwdGFibGUgZGVmYXVsdCB2YWx1ZXM6IGBcInNvbGlkXCJgLCBgXCJkYXNoZWRcImAsIGBcImRvdHRlZFwiYCwgb3IgYFwiZG91YmxlXCJgLlxuICAgKi9cbiAgTElORV9TVFlMRSA9ICdMSU5FX1NUWUxFJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSBib3JkZXIgcmFkaXVzIHNlbGVjdG9yLlxuICAgKi9cbiAgQk9SREVSX1JBRElVUyA9ICdCT1JERVJfUkFESVVTJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYW4gaW50ZXJ2YWwgc2VsZWN0b3IuXG4gICAqL1xuICBJTlRFUlZBTCA9ICdJTlRFUlZBTCcsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgcmFkaW8gc2VsZWN0IHdpdGggcHJlLWRlZmluZWQgdmFsdWVzLlxuICAgKi9cbiAgU0VMRUNUX1JBRElPID0gJ1NFTEVDVF9SQURJTycsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWV0cmljT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgbWluaW11bSBudW1iZXIgb2YgbWV0cmljcyBzdXBwb3J0ZWQuXG4gICAqL1xuICBtaW46IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBtZXRyaWNzIHN1cHBvcnRlZC5cbiAgICovXG4gIG1heDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpbWVuc2lvbk9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIG1pbmltdW0gbnVtYmVyIG9mIGRpbWVuc2lvbnMgc3VwcG9ydGVkLlxuICAgKi9cbiAgbWluOiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSBudW1iZXIgb2YgZGltZW5zaW9ucyBzdXBwb3J0ZWQuXG4gICAqL1xuICBtYXg6IG51bWJlcjtcbiAgc3VwcG9ydGVkVHlwZXM6IEZpZWxkVHlwZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNvcnRPcHRpb25zIHtcbiAgLyoqXG4gICAqIGBcIkRFU0NcImAgZm9yIGRlc2NlbmRpbmcsIGBcIkFTQ1wiYCBmb3IgYXNjZW5kaW5nLlxuICAgKi9cbiAgZGVmYXVsdE9yZGVyOiAnREVTQycgfCAnQVNDJztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXhSZXN1bHRzT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSBudW1iZXIgb2Ygcm93cy5cbiAgICovXG4gIG1heDogbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSBEU0ludGVyYWN0aW9uRGF0YSA9IERTSW50ZXJhY3Rpb25GaWx0ZXJEYXRhO1xuXG5leHBvcnQgaW50ZXJmYWNlIERTSW50ZXJhY3Rpb25GaWx0ZXJEYXRhIHtcbiAgc3VwcG9ydGVkQWN0aW9uczogRFNJbnRlcmFjdGlvblR5cGVbXTtcbiAgaWQ6IEludGVyYWN0aW9uSWQ7XG4gIHZhbHVlOiBEU0ludGVyYWN0aW9uRmlsdGVyVmFsdWU7XG59XG5cbmV4cG9ydCBlbnVtIERTSW50ZXJhY3Rpb25UeXBlIHtcbiAgRklMVEVSID0gJ0ZJTFRFUicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRFNJbnRlcmFjdGlvbkZpbHRlclZhbHVlIHtcbiAgdHlwZTogRFNJbnRlcmFjdGlvblR5cGU7XG4gIGRhdGE6IEludGVyYWN0aW9uRGF0YTtcbn1cblxuLy8gQWxpYXNlc1xuZXhwb3J0IHR5cGUgRmllbGRJZCA9IHN0cmluZztcbmV4cG9ydCB0eXBlIENvbmZpZ0RhdGFJZCA9IHN0cmluZztcbmV4cG9ydCB0eXBlIENvbmZpZ1N0eWxlSWQgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBDb25maWdEYXRhRWxlbWVudElkID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgQ29uZmlnU3R5bGVFbGVtZW50SWQgPSBzdHJpbmc7XG5cbi8vIEN1c3RvbSB0eXBlcyBmb3IgTGlicmFyeVxuZXhwb3J0IGludGVyZmFjZSBQYXJzZWRJbWFnZSB7XG4gIG9yaWdpbmFsVXJsOiBzdHJpbmc7XG4gIHByb3hpZWRVcmw/OiBzdHJpbmc7XG4gIGFsdFRleHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmllbGRzQnlJZCB7XG4gIC8vIEFuIGluZGV4ZWQgVHlwZSBjYW5ub3QgYmUgYSB0eXBlIGFsaWFzIDooXG4gIFtmaWVsZElkOiBzdHJpbmddOiBGaWVsZDtcbn1cblxuZXhwb3J0IHR5cGUgUGFyc2VkUm93ID0gUGFyc2VkUm93VmFsdWVbXTtcblxuZXhwb3J0IGludGVyZmFjZSBSb3dCeUNvbmZpZ0lkIHtcbiAgW2NvbmZpZ0lkOiBzdHJpbmddOiBQYXJzZWRSb3c7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVzQnlUeXBlIHtcbiAgW1RhYmxlVHlwZS5ERUZBVUxUXTogUm93QnlDb25maWdJZFtdO1xuICBbVGFibGVUeXBlLkNPTVBBUklTT05dOiBSb3dCeUNvbmZpZ0lkW107XG4gIFtUYWJsZVR5cGUuU1VNTUFSWV06IFJvd0J5Q29uZmlnSWRbXTtcbn1cblxuZXhwb3J0IHR5cGUgUGFyc2VkUm93VmFsdWUgPSBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgUGFyc2VkSW1hZ2U7XG5cbmV4cG9ydCB0eXBlIFJvd0hlYWRpbmcgPSBGaWVsZCAmIHtjb25maWdJZDogc3RyaW5nfTtcbmV4cG9ydCB0eXBlIFJvd0VudHJ5ID0gc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbjtcbmV4cG9ydCB0eXBlIFJvdyA9IFJvd0VudHJ5W107XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmllbGRzQnlDb25maWdJZCB7XG4gIFtjb25maWdJZDogc3RyaW5nXTogRmllbGRbXTtcbn1cblxuZXhwb3J0IHR5cGUgU3R5bGVUaGVtZSA9IGFueTtcbmV4cG9ydCB0eXBlIFN0eWxlRW50cnkgPSBhbnk7XG5leHBvcnQgdHlwZSBTdHlsZVZhbHVlID0gU3R5bGVUaGVtZSB8IFN0eWxlRW50cnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVCeUlkIHtcbiAgW3N0eWxlSWQ6IHN0cmluZ106IFN0eWxlVmFsdWU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVEYXRhIHtcbiAgaGVhZGVyczogUm93SGVhZGluZ1tdO1xuICByb3dzOiBSb3dbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJsZXMge1xuICBbVGFibGVUeXBlLkRFRkFVTFRdOiBUYWJsZURhdGE7XG4gIFtUYWJsZVR5cGUuQ09NUEFSSVNPTl0/OiBUYWJsZURhdGE7XG4gIFtUYWJsZVR5cGUuU1VNTUFSWV0/OiBUYWJsZURhdGE7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVGb3JtYXQge1xuICBmaWVsZHM6IEZpZWxkc0J5Q29uZmlnSWQ7XG4gIHN0eWxlOiBTdHlsZUJ5SWQ7XG4gIHRhYmxlczogVGFibGVzO1xuICB0aGVtZTogVGhlbWVTdHlsZTtcbiAgaW50ZXJhY3Rpb25zOiBJbnRlcmFjdGlvbnNCeUlkO1xufVxuXG5leHBvcnQgdHlwZSBUYWJsZVRyYW5zZm9ybSA9IChtZXNzYWdlOiBNZXNzYWdlKSA9PiBUYWJsZUZvcm1hdDtcblxuZXhwb3J0IHR5cGUgQ29uZmlnSWQgPSBzdHJpbmc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Vic2NyaXB0aW9uc09wdGlvbnM8VD4ge1xuICB0cmFuc2Zvcm06IChtZXNzYWdlOiBNZXNzYWdlKSA9PiBUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9iamVjdFJvdyB7XG4gIFtjb25maWdJZDogc3RyaW5nXTogUm93RW50cnlbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RUYWJsZXMge1xuICBbVGFibGVUeXBlLkRFRkFVTFRdOiBPYmplY3RSb3dbXTtcbiAgW1RhYmxlVHlwZS5DT01QQVJJU09OXT86IE9iamVjdFJvd1tdW107XG4gIFtUYWJsZVR5cGUuU1VNTUFSWV0/OiBPYmplY3RSb3dbXVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9iamVjdEZvcm1hdCB7XG4gIGZpZWxkczogRmllbGRzQnlDb25maWdJZDtcbiAgc3R5bGU6IFN0eWxlQnlJZDtcbiAgdGFibGVzOiBPYmplY3RUYWJsZXM7XG4gIHRoZW1lOiBUaGVtZVN0eWxlO1xuICBpbnRlcmFjdGlvbnM6IEludGVyYWN0aW9uc0J5SWQ7XG59XG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudElkID0gc3RyaW5nO1xuXG5leHBvcnQgdHlwZSBPYmplY3RUcmFuc2Zvcm0gPSAobWVzc2FnZTogTWVzc2FnZSkgPT4gT2JqZWN0Rm9ybWF0O1xuXG5leHBvcnQgZW51bSBUb0RTTWVzc2FnZVR5cGUge1xuICBWSVpfUkVBRFkgPSAndml6UmVhZHknLFxuICBJTlRFUkFDVElPTiA9ICd2aXpBY3Rpb24nLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZpelJlYWR5TWVzc2FnZSB7XG4gIHR5cGU6IFRvRFNNZXNzYWdlVHlwZS5WSVpfUkVBRFk7XG4gIGNvbXBvbmVudElkOiBDb21wb25lbnRJZDtcbn1cblxuLy8gSW50ZXJhY3Rpb24gVHlwZXNcbmV4cG9ydCBpbnRlcmZhY2UgSW50ZXJhY3Rpb25NZXNzYWdlIHtcbiAgdHlwZTogVG9EU01lc3NhZ2VUeXBlLklOVEVSQUNUSU9OO1xuICBpZDogSW50ZXJhY3Rpb25JZDtcbiAgZGF0YTogSW50ZXJhY3Rpb25EYXRhO1xuICBjb21wb25lbnRJZDogQ29tcG9uZW50SWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VuZEludGVyYWN0aW9uIHtcbiAgLy8gVE9ETyAtIHJlbW92ZSB0aGlzIG9uY2UgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZSBpbnRlcmFjdGlvbiB0eXBlLlxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgY2FsbGFibGUtdHlwZXNcbiAgKFxuICAgIGFjdGlvbklkOiBJbnRlcmFjdGlvbklkLFxuICAgIGludGVyYWN0aW9uOiBJbnRlcmFjdGlvblR5cGUuRklMVEVSLFxuICAgIGRhdGE6IEZpbHRlckludGVyYWN0aW9uRGF0YVxuICApOiB2b2lkO1xuICAvLyBUT0RPIC0gV2hlbiB0aGVyZSBhcmUgbW9yZSBJbnRlcmFjdGlvbiB0eXBlcywgdGhlIG5ldyBvbmVzIHNob3VsZCBiZSBhZGRlZCBoZXJlIHdpdGggdGhlaXIgb3duIHNpZ25hdHVyZS5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckludGVyYWN0aW9uIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGNhbGxhYmxlLXR5cGVzXG4gIChcbiAgICBhY3Rpb25JZDogSW50ZXJhY3Rpb25JZCxcbiAgICBpbnRlcmFjdGlvbjogSW50ZXJhY3Rpb25UeXBlLkZJTFRFUixcbiAgICBkYXRhOiB1bmRlZmluZWRcbiAgKTogdm9pZDtcbn1cblxuZXhwb3J0IHR5cGUgQ29uY2VwdElkID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgRmlsdGVyUGFyYW1WYWx1ZSA9IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVySW50ZXJhY3Rpb25EYXRhIHtcbiAgY29uY2VwdHM6IENvbmNlcHRJZFtdO1xuICB2YWx1ZXM6IEZpbHRlclBhcmFtVmFsdWVbXVtdO1xufVxuXG5leHBvcnQgZW51bSBJbnRlcmFjdGlvblR5cGUge1xuICBGSUxURVIgPSAnRklMVEVSJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnRlcmFjdGlvblZhbHVlIHtcbiAgdHlwZTogSW50ZXJhY3Rpb25UeXBlO1xuICBkYXRhOiBJbnRlcmFjdGlvbkRhdGE7XG59XG5cbmV4cG9ydCB0eXBlIEludGVyYWN0aW9uRGF0YSA9IEZpbHRlckludGVyYWN0aW9uRGF0YTtcblxuZXhwb3J0IHR5cGUgSW50ZXJhY3Rpb25JZCA9IHN0cmluZztcblxuZXhwb3J0IGludGVyZmFjZSBJbnRlcmFjdGlvbiB7XG4gIHN1cHBvcnRlZEFjdGlvbnM6IEludGVyYWN0aW9uVHlwZVtdO1xuICB2YWx1ZTogSW50ZXJhY3Rpb25WYWx1ZSB8IHt9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEludGVyYWN0aW9uc0J5SWQge1xuICBbaW50ZXJhY3Rpb25JZDogc3RyaW5nXTogSW50ZXJhY3Rpb247XG59XG4iXSwic291cmNlUm9vdCI6IiJ9