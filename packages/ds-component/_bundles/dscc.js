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

/*!
  @license
  Copyright 2019 Google LLC

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
var flattenConfigIds = function (message) {
    var dimnsAndMets = [];
    message.config.data.forEach(function (configData) {
        configData.elements
            .filter(dimensionOrMetric)
            .forEach(function (configDataElement) {
            dimnsAndMets.push(configDataElement);
        });
    });
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
        if (table.id === types_1.TableType.DEFAULT) {
            objectTables[table.id] = objectRows;
        }
        else {
            var current = objectTables[table.id];
            if (current === undefined) {
                objectTables[table.id] = [];
            }
            objectTables[table.id].concat(objectRows);
        }
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
        var heading = __assign(__assign({}, field), { configId: configId });
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
        configData.elements
            .filter(dimensionOrMetric)
            .forEach(function (configDataElement) {
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
/**
 * Check if the transform is likely the identity function
 * This is not a supported implementation path
 * Avoid this if at all possible - please use either objectTransform or tableTransform
 */
var isProbablyIdentityFunction = function (transform) {
    var isIdentity = false;
    if (transform('identity') === 'identity') {
        isIdentity = true;
        console.warn("This is an unsupported data format. Please use one of the supported transforms:\n       dscc.objectFormat or dscc.tableFormat.");
    }
    return isIdentity;
};
var isValidTransform = function (transform) {
    var isValid = false;
    if (transform === exports.tableTransform ||
        transform === exports.objectTransform) {
        isValid = true;
    }
    else if (isProbablyIdentityFunction(transform)) {
        isValid = true;
    }
    return isValid;
};
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
    if (isValidTransform(options.transform)) {
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

/*!
  @license
  Copyright 2019 Google LLC

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kc2NjL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kc2NjL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RzY2MvLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmdpZnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZHNjYy8uL25vZGVfbW9kdWxlcy9yZXF1aXJlcy1wb3J0L2luZGV4LmpzIiwid2VicGFjazovL2RzY2MvLi9ub2RlX21vZHVsZXMvdXJsLXBhcnNlL2luZGV4LmpzIiwid2VicGFjazovL2RzY2MvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2RzY2MvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZHNjYy8uL3NyYy90eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVB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Q3pCLHlDQUFzQjtJQUN0Qiw0Q0FBeUI7QUFDM0IsQ0FBQyxFQUhXLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVCQUFlLFFBRzFCO0FBMkNELElBQVksZUFFWDtBQUZELFdBQVksZUFBZTtJQUN6QixvQ0FBaUI7QUFDbkIsQ0FBQyxFQUZXLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVCQUFlLFFBRTFCIiwiZmlsZSI6ImRzY2MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImRzY2NcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZHNjY1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkc2NjXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgLCB1bmRlZjtcblxuLyoqXG4gKiBEZWNvZGUgYSBVUkkgZW5jb2RlZCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBVUkkgZW5jb2RlZCBzdHJpbmcuXG4gKiBAcmV0dXJucyB7U3RyaW5nfE51bGx9IFRoZSBkZWNvZGVkIHN0cmluZy5cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBkZWNvZGUoaW5wdXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGlucHV0LnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogQXR0ZW1wdHMgdG8gZW5jb2RlIGEgZ2l2ZW4gaW5wdXQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBzdHJpbmcgdGhhdCBuZWVkcyB0byBiZSBlbmNvZGVkLlxuICogQHJldHVybnMge1N0cmluZ3xOdWxsfSBUaGUgZW5jb2RlZCBzdHJpbmcuXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZW5jb2RlKGlucHV0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChpbnB1dCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIFNpbXBsZSBxdWVyeSBzdHJpbmcgcGFyc2VyLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBxdWVyeSBUaGUgcXVlcnkgc3RyaW5nIHRoYXQgbmVlZHMgdG8gYmUgcGFyc2VkLlxuICogQHJldHVybnMge09iamVjdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIHF1ZXJ5c3RyaW5nKHF1ZXJ5KSB7XG4gIHZhciBwYXJzZXIgPSAvKFtePT8mXSspPT8oW14mXSopL2dcbiAgICAsIHJlc3VsdCA9IHt9XG4gICAgLCBwYXJ0O1xuXG4gIHdoaWxlIChwYXJ0ID0gcGFyc2VyLmV4ZWMocXVlcnkpKSB7XG4gICAgdmFyIGtleSA9IGRlY29kZShwYXJ0WzFdKVxuICAgICAgLCB2YWx1ZSA9IGRlY29kZShwYXJ0WzJdKTtcblxuICAgIC8vXG4gICAgLy8gUHJldmVudCBvdmVycmlkaW5nIG9mIGV4aXN0aW5nIHByb3BlcnRpZXMuIFRoaXMgZW5zdXJlcyB0aGF0IGJ1aWxkLWluXG4gICAgLy8gbWV0aG9kcyBsaWtlIGB0b1N0cmluZ2Agb3IgX19wcm90b19fIGFyZSBub3Qgb3ZlcnJpZGVuIGJ5IG1hbGljaW91c1xuICAgIC8vIHF1ZXJ5c3RyaW5ncy5cbiAgICAvL1xuICAgIC8vIEluIHRoZSBjYXNlIGlmIGZhaWxlZCBkZWNvZGluZywgd2Ugd2FudCB0byBvbWl0IHRoZSBrZXkvdmFsdWUgcGFpcnNcbiAgICAvLyBmcm9tIHRoZSByZXN1bHQuXG4gICAgLy9cbiAgICBpZiAoa2V5ID09PSBudWxsIHx8IHZhbHVlID09PSBudWxsIHx8IGtleSBpbiByZXN1bHQpIGNvbnRpbnVlO1xuICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybSBhIHF1ZXJ5IHN0cmluZyB0byBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBPYmplY3QgdGhhdCBzaG91bGQgYmUgdHJhbnNmb3JtZWQuXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJlZml4IE9wdGlvbmFsIHByZWZpeC5cbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBxdWVyeXN0cmluZ2lmeShvYmosIHByZWZpeCkge1xuICBwcmVmaXggPSBwcmVmaXggfHwgJyc7XG5cbiAgdmFyIHBhaXJzID0gW11cbiAgICAsIHZhbHVlXG4gICAgLCBrZXk7XG5cbiAgLy9cbiAgLy8gT3B0aW9uYWxseSBwcmVmaXggd2l0aCBhICc/JyBpZiBuZWVkZWRcbiAgLy9cbiAgaWYgKCdzdHJpbmcnICE9PSB0eXBlb2YgcHJlZml4KSBwcmVmaXggPSAnPyc7XG5cbiAgZm9yIChrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGhhcy5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFsdWUgPSBvYmpba2V5XTtcblxuICAgICAgLy9cbiAgICAgIC8vIEVkZ2UgY2FzZXMgd2hlcmUgd2UgYWN0dWFsbHkgd2FudCB0byBlbmNvZGUgdGhlIHZhbHVlIHRvIGFuIGVtcHR5XG4gICAgICAvLyBzdHJpbmcgaW5zdGVhZCBvZiB0aGUgc3RyaW5naWZpZWQgdmFsdWUuXG4gICAgICAvL1xuICAgICAgaWYgKCF2YWx1ZSAmJiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmIHx8IGlzTmFOKHZhbHVlKSkpIHtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgIH1cblxuICAgICAga2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KGtleSk7XG4gICAgICB2YWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG5cbiAgICAgIC8vXG4gICAgICAvLyBJZiB3ZSBmYWlsZWQgdG8gZW5jb2RlIHRoZSBzdHJpbmdzLCB3ZSBzaG91bGQgYmFpbCBvdXQgYXMgd2UgZG9uJ3RcbiAgICAgIC8vIHdhbnQgdG8gYWRkIGludmFsaWQgc3RyaW5ncyB0byB0aGUgcXVlcnkuXG4gICAgICAvL1xuICAgICAgaWYgKGtleSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gbnVsbCkgY29udGludWU7XG4gICAgICBwYWlycy5wdXNoKGtleSArJz0nKyB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhaXJzLmxlbmd0aCA/IHByZWZpeCArIHBhaXJzLmpvaW4oJyYnKSA6ICcnO1xufVxuXG4vL1xuLy8gRXhwb3NlIHRoZSBtb2R1bGUuXG4vL1xuZXhwb3J0cy5zdHJpbmdpZnkgPSBxdWVyeXN0cmluZ2lmeTtcbmV4cG9ydHMucGFyc2UgPSBxdWVyeXN0cmluZztcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDaGVjayBpZiB3ZSdyZSByZXF1aXJlZCB0byBhZGQgYSBwb3J0IG51bWJlci5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jZGVmYXVsdC1wb3J0XG4gKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IHBvcnQgUG9ydCBudW1iZXIgd2UgbmVlZCB0byBjaGVja1xuICogQHBhcmFtIHtTdHJpbmd9IHByb3RvY29sIFByb3RvY29sIHdlIG5lZWQgdG8gY2hlY2sgYWdhaW5zdC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBJcyBpdCBhIGRlZmF1bHQgcG9ydCBmb3IgdGhlIGdpdmVuIHByb3RvY29sXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZXF1aXJlZChwb3J0LCBwcm90b2NvbCkge1xuICBwcm90b2NvbCA9IHByb3RvY29sLnNwbGl0KCc6JylbMF07XG4gIHBvcnQgPSArcG9ydDtcblxuICBpZiAoIXBvcnQpIHJldHVybiBmYWxzZTtcblxuICBzd2l0Y2ggKHByb3RvY29sKSB7XG4gICAgY2FzZSAnaHR0cCc6XG4gICAgY2FzZSAnd3MnOlxuICAgIHJldHVybiBwb3J0ICE9PSA4MDtcblxuICAgIGNhc2UgJ2h0dHBzJzpcbiAgICBjYXNlICd3c3MnOlxuICAgIHJldHVybiBwb3J0ICE9PSA0NDM7XG5cbiAgICBjYXNlICdmdHAnOlxuICAgIHJldHVybiBwb3J0ICE9PSAyMTtcblxuICAgIGNhc2UgJ2dvcGhlcic6XG4gICAgcmV0dXJuIHBvcnQgIT09IDcwO1xuXG4gICAgY2FzZSAnZmlsZSc6XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHBvcnQgIT09IDA7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVxdWlyZWQgPSByZXF1aXJlKCdyZXF1aXJlcy1wb3J0JylcbiAgLCBxcyA9IHJlcXVpcmUoJ3F1ZXJ5c3RyaW5naWZ5JylcbiAgLCBzbGFzaGVzID0gL15bQS1aYS16XVtBLVphLXowLTkrLS5dKjpcXC9cXC8vXG4gICwgcHJvdG9jb2xyZSA9IC9eKFthLXpdW2EtejAtOS4rLV0qOik/KFxcL1xcLyk/KFtcXFNcXHNdKikvaVxuICAsIHdoaXRlc3BhY2UgPSAnW1xcXFx4MDlcXFxceDBBXFxcXHgwQlxcXFx4MENcXFxceDBEXFxcXHgyMFxcXFx4QTBcXFxcdTE2ODBcXFxcdTE4MEVcXFxcdTIwMDBcXFxcdTIwMDFcXFxcdTIwMDJcXFxcdTIwMDNcXFxcdTIwMDRcXFxcdTIwMDVcXFxcdTIwMDZcXFxcdTIwMDdcXFxcdTIwMDhcXFxcdTIwMDlcXFxcdTIwMEFcXFxcdTIwMkZcXFxcdTIwNUZcXFxcdTMwMDBcXFxcdTIwMjhcXFxcdTIwMjlcXFxcdUZFRkZdJ1xuICAsIGxlZnQgPSBuZXcgUmVnRXhwKCdeJysgd2hpdGVzcGFjZSArJysnKTtcblxuLyoqXG4gKiBUcmltIGEgZ2l2ZW4gc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgU3RyaW5nIHRvIHRyaW0uXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHRyaW1MZWZ0KHN0cikge1xuICByZXR1cm4gKHN0ciA/IHN0ciA6ICcnKS50b1N0cmluZygpLnJlcGxhY2UobGVmdCwgJycpO1xufVxuXG4vKipcbiAqIFRoZXNlIGFyZSB0aGUgcGFyc2UgcnVsZXMgZm9yIHRoZSBVUkwgcGFyc2VyLCBpdCBpbmZvcm1zIHRoZSBwYXJzZXJcbiAqIGFib3V0OlxuICpcbiAqIDAuIFRoZSBjaGFyIGl0IE5lZWRzIHRvIHBhcnNlLCBpZiBpdCdzIGEgc3RyaW5nIGl0IHNob3VsZCBiZSBkb25lIHVzaW5nXG4gKiAgICBpbmRleE9mLCBSZWdFeHAgdXNpbmcgZXhlYyBhbmQgTmFOIG1lYW5zIHNldCBhcyBjdXJyZW50IHZhbHVlLlxuICogMS4gVGhlIHByb3BlcnR5IHdlIHNob3VsZCBzZXQgd2hlbiBwYXJzaW5nIHRoaXMgdmFsdWUuXG4gKiAyLiBJbmRpY2F0aW9uIGlmIGl0J3MgYmFja3dhcmRzIG9yIGZvcndhcmQgcGFyc2luZywgd2hlbiBzZXQgYXMgbnVtYmVyIGl0J3NcbiAqICAgIHRoZSB2YWx1ZSBvZiBleHRyYSBjaGFycyB0aGF0IHNob3VsZCBiZSBzcGxpdCBvZmYuXG4gKiAzLiBJbmhlcml0IGZyb20gbG9jYXRpb24gaWYgbm9uIGV4aXN0aW5nIGluIHRoZSBwYXJzZXIuXG4gKiA0LiBgdG9Mb3dlckNhc2VgIHRoZSByZXN1bHRpbmcgdmFsdWUuXG4gKi9cbnZhciBydWxlcyA9IFtcbiAgWycjJywgJ2hhc2gnXSwgICAgICAgICAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IGZyb20gdGhlIGJhY2suXG4gIFsnPycsICdxdWVyeSddLCAgICAgICAgICAgICAgICAgICAgICAgLy8gRXh0cmFjdCBmcm9tIHRoZSBiYWNrLlxuICBmdW5jdGlvbiBzYW5pdGl6ZShhZGRyZXNzKSB7ICAgICAgICAgIC8vIFNhbml0aXplIHdoYXQgaXMgbGVmdCBvZiB0aGUgYWRkcmVzc1xuICAgIHJldHVybiBhZGRyZXNzLnJlcGxhY2UoJ1xcXFwnLCAnLycpO1xuICB9LFxuICBbJy8nLCAncGF0aG5hbWUnXSwgICAgICAgICAgICAgICAgICAgIC8vIEV4dHJhY3QgZnJvbSB0aGUgYmFjay5cbiAgWydAJywgJ2F1dGgnLCAxXSwgICAgICAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IGZyb20gdGhlIGZyb250LlxuICBbTmFOLCAnaG9zdCcsIHVuZGVmaW5lZCwgMSwgMV0sICAgICAgIC8vIFNldCBsZWZ0IG92ZXIgdmFsdWUuXG4gIFsvOihcXGQrKSQvLCAncG9ydCcsIHVuZGVmaW5lZCwgMV0sICAgIC8vIFJlZ0V4cCB0aGUgYmFjay5cbiAgW05hTiwgJ2hvc3RuYW1lJywgdW5kZWZpbmVkLCAxLCAxXSAgICAvLyBTZXQgbGVmdCBvdmVyLlxuXTtcblxuLyoqXG4gKiBUaGVzZSBwcm9wZXJ0aWVzIHNob3VsZCBub3QgYmUgY29waWVkIG9yIGluaGVyaXRlZCBmcm9tLiBUaGlzIGlzIG9ubHkgbmVlZGVkXG4gKiBmb3IgYWxsIG5vbiBibG9iIFVSTCdzIGFzIGEgYmxvYiBVUkwgZG9lcyBub3QgaW5jbHVkZSBhIGhhc2gsIG9ubHkgdGhlXG4gKiBvcmlnaW4uXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cbnZhciBpZ25vcmUgPSB7IGhhc2g6IDEsIHF1ZXJ5OiAxIH07XG5cbi8qKlxuICogVGhlIGxvY2F0aW9uIG9iamVjdCBkaWZmZXJzIHdoZW4geW91ciBjb2RlIGlzIGxvYWRlZCB0aHJvdWdoIGEgbm9ybWFsIHBhZ2UsXG4gKiBXb3JrZXIgb3IgdGhyb3VnaCBhIHdvcmtlciB1c2luZyBhIGJsb2IuIEFuZCB3aXRoIHRoZSBibG9iYmxlIGJlZ2lucyB0aGVcbiAqIHRyb3VibGUgYXMgdGhlIGxvY2F0aW9uIG9iamVjdCB3aWxsIGNvbnRhaW4gdGhlIFVSTCBvZiB0aGUgYmxvYiwgbm90IHRoZVxuICogbG9jYXRpb24gb2YgdGhlIHBhZ2Ugd2hlcmUgb3VyIGNvZGUgaXMgbG9hZGVkIGluLiBUaGUgYWN0dWFsIG9yaWdpbiBpc1xuICogZW5jb2RlZCBpbiB0aGUgYHBhdGhuYW1lYCBzbyB3ZSBjYW4gdGhhbmtmdWxseSBnZW5lcmF0ZSBhIGdvb2QgXCJkZWZhdWx0XCJcbiAqIGxvY2F0aW9uIGZyb20gaXQgc28gd2UgY2FuIGdlbmVyYXRlIHByb3BlciByZWxhdGl2ZSBVUkwncyBhZ2Fpbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGxvYyBPcHRpb25hbCBkZWZhdWx0IGxvY2F0aW9uIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IGxvbGNhdGlvbiBvYmplY3QuXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIGxvbGNhdGlvbihsb2MpIHtcbiAgdmFyIGdsb2JhbFZhcjtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIGdsb2JhbFZhciA9IHdpbmRvdztcbiAgZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIGdsb2JhbFZhciA9IGdsb2JhbDtcbiAgZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSBnbG9iYWxWYXIgPSBzZWxmO1xuICBlbHNlIGdsb2JhbFZhciA9IHt9O1xuXG4gIHZhciBsb2NhdGlvbiA9IGdsb2JhbFZhci5sb2NhdGlvbiB8fCB7fTtcbiAgbG9jID0gbG9jIHx8IGxvY2F0aW9uO1xuXG4gIHZhciBmaW5hbGRlc3RpbmF0aW9uID0ge31cbiAgICAsIHR5cGUgPSB0eXBlb2YgbG9jXG4gICAgLCBrZXk7XG5cbiAgaWYgKCdibG9iOicgPT09IGxvYy5wcm90b2NvbCkge1xuICAgIGZpbmFsZGVzdGluYXRpb24gPSBuZXcgVXJsKHVuZXNjYXBlKGxvYy5wYXRobmFtZSksIHt9KTtcbiAgfSBlbHNlIGlmICgnc3RyaW5nJyA9PT0gdHlwZSkge1xuICAgIGZpbmFsZGVzdGluYXRpb24gPSBuZXcgVXJsKGxvYywge30pO1xuICAgIGZvciAoa2V5IGluIGlnbm9yZSkgZGVsZXRlIGZpbmFsZGVzdGluYXRpb25ba2V5XTtcbiAgfSBlbHNlIGlmICgnb2JqZWN0JyA9PT0gdHlwZSkge1xuICAgIGZvciAoa2V5IGluIGxvYykge1xuICAgICAgaWYgKGtleSBpbiBpZ25vcmUpIGNvbnRpbnVlO1xuICAgICAgZmluYWxkZXN0aW5hdGlvbltrZXldID0gbG9jW2tleV07XG4gICAgfVxuXG4gICAgaWYgKGZpbmFsZGVzdGluYXRpb24uc2xhc2hlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBmaW5hbGRlc3RpbmF0aW9uLnNsYXNoZXMgPSBzbGFzaGVzLnRlc3QobG9jLmhyZWYpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmaW5hbGRlc3RpbmF0aW9uO1xufVxuXG4vKipcbiAqIEB0eXBlZGVmIFByb3RvY29sRXh0cmFjdFxuICogQHR5cGUgT2JqZWN0XG4gKiBAcHJvcGVydHkge1N0cmluZ30gcHJvdG9jb2wgUHJvdG9jb2wgbWF0Y2hlZCBpbiB0aGUgVVJMLCBpbiBsb3dlcmNhc2UuXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IHNsYXNoZXMgYHRydWVgIGlmIHByb3RvY29sIGlzIGZvbGxvd2VkIGJ5IFwiLy9cIiwgZWxzZSBgZmFsc2VgLlxuICogQHByb3BlcnR5IHtTdHJpbmd9IHJlc3QgUmVzdCBvZiB0aGUgVVJMIHRoYXQgaXMgbm90IHBhcnQgb2YgdGhlIHByb3RvY29sLlxuICovXG5cbi8qKlxuICogRXh0cmFjdCBwcm90b2NvbCBpbmZvcm1hdGlvbiBmcm9tIGEgVVJMIHdpdGgvd2l0aG91dCBkb3VibGUgc2xhc2ggKFwiLy9cIikuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFkZHJlc3MgVVJMIHdlIHdhbnQgdG8gZXh0cmFjdCBmcm9tLlxuICogQHJldHVybiB7UHJvdG9jb2xFeHRyYWN0fSBFeHRyYWN0ZWQgaW5mb3JtYXRpb24uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBleHRyYWN0UHJvdG9jb2woYWRkcmVzcykge1xuICBhZGRyZXNzID0gdHJpbUxlZnQoYWRkcmVzcyk7XG4gIHZhciBtYXRjaCA9IHByb3RvY29scmUuZXhlYyhhZGRyZXNzKTtcblxuICByZXR1cm4ge1xuICAgIHByb3RvY29sOiBtYXRjaFsxXSA/IG1hdGNoWzFdLnRvTG93ZXJDYXNlKCkgOiAnJyxcbiAgICBzbGFzaGVzOiAhIW1hdGNoWzJdLFxuICAgIHJlc3Q6IG1hdGNoWzNdXG4gIH07XG59XG5cbi8qKlxuICogUmVzb2x2ZSBhIHJlbGF0aXZlIFVSTCBwYXRobmFtZSBhZ2FpbnN0IGEgYmFzZSBVUkwgcGF0aG5hbWUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHJlbGF0aXZlIFBhdGhuYW1lIG9mIHRoZSByZWxhdGl2ZSBVUkwuXG4gKiBAcGFyYW0ge1N0cmluZ30gYmFzZSBQYXRobmFtZSBvZiB0aGUgYmFzZSBVUkwuXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFJlc29sdmVkIHBhdGhuYW1lLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZShyZWxhdGl2ZSwgYmFzZSkge1xuICBpZiAocmVsYXRpdmUgPT09ICcnKSByZXR1cm4gYmFzZTtcblxuICB2YXIgcGF0aCA9IChiYXNlIHx8ICcvJykuc3BsaXQoJy8nKS5zbGljZSgwLCAtMSkuY29uY2F0KHJlbGF0aXZlLnNwbGl0KCcvJykpXG4gICAgLCBpID0gcGF0aC5sZW5ndGhcbiAgICAsIGxhc3QgPSBwYXRoW2kgLSAxXVxuICAgICwgdW5zaGlmdCA9IGZhbHNlXG4gICAgLCB1cCA9IDA7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIGlmIChwYXRoW2ldID09PSAnLicpIHtcbiAgICAgIHBhdGguc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAocGF0aFtpXSA9PT0gJy4uJykge1xuICAgICAgcGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIGlmIChpID09PSAwKSB1bnNoaWZ0ID0gdHJ1ZTtcbiAgICAgIHBhdGguc3BsaWNlKGksIDEpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICBpZiAodW5zaGlmdCkgcGF0aC51bnNoaWZ0KCcnKTtcbiAgaWYgKGxhc3QgPT09ICcuJyB8fCBsYXN0ID09PSAnLi4nKSBwYXRoLnB1c2goJycpO1xuXG4gIHJldHVybiBwYXRoLmpvaW4oJy8nKTtcbn1cblxuLyoqXG4gKiBUaGUgYWN0dWFsIFVSTCBpbnN0YW5jZS4gSW5zdGVhZCBvZiByZXR1cm5pbmcgYW4gb2JqZWN0IHdlJ3ZlIG9wdGVkLWluIHRvXG4gKiBjcmVhdGUgYW4gYWN0dWFsIGNvbnN0cnVjdG9yIGFzIGl0J3MgbXVjaCBtb3JlIG1lbW9yeSBlZmZpY2llbnQgYW5kXG4gKiBmYXN0ZXIgYW5kIGl0IHBsZWFzZXMgbXkgT0NELlxuICpcbiAqIEl0IGlzIHdvcnRoIG5vdGluZyB0aGF0IHdlIHNob3VsZCBub3QgdXNlIGBVUkxgIGFzIGNsYXNzIG5hbWUgdG8gcHJldmVudFxuICogY2xhc2hlcyB3aXRoIHRoZSBnbG9iYWwgVVJMIGluc3RhbmNlIHRoYXQgZ290IGludHJvZHVjZWQgaW4gYnJvd3NlcnMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gYWRkcmVzcyBVUkwgd2Ugd2FudCB0byBwYXJzZS5cbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gW2xvY2F0aW9uXSBMb2NhdGlvbiBkZWZhdWx0cyBmb3IgcmVsYXRpdmUgcGF0aHMuXG4gKiBAcGFyYW0ge0Jvb2xlYW58RnVuY3Rpb259IFtwYXJzZXJdIFBhcnNlciBmb3IgdGhlIHF1ZXJ5IHN0cmluZy5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIFVybChhZGRyZXNzLCBsb2NhdGlvbiwgcGFyc2VyKSB7XG4gIGFkZHJlc3MgPSB0cmltTGVmdChhZGRyZXNzKTtcblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVXJsKSkge1xuICAgIHJldHVybiBuZXcgVXJsKGFkZHJlc3MsIGxvY2F0aW9uLCBwYXJzZXIpO1xuICB9XG5cbiAgdmFyIHJlbGF0aXZlLCBleHRyYWN0ZWQsIHBhcnNlLCBpbnN0cnVjdGlvbiwgaW5kZXgsIGtleVxuICAgICwgaW5zdHJ1Y3Rpb25zID0gcnVsZXMuc2xpY2UoKVxuICAgICwgdHlwZSA9IHR5cGVvZiBsb2NhdGlvblxuICAgICwgdXJsID0gdGhpc1xuICAgICwgaSA9IDA7XG5cbiAgLy9cbiAgLy8gVGhlIGZvbGxvd2luZyBpZiBzdGF0ZW1lbnRzIGFsbG93cyB0aGlzIG1vZHVsZSB0d28gaGF2ZSBjb21wYXRpYmlsaXR5IHdpdGhcbiAgLy8gMiBkaWZmZXJlbnQgQVBJOlxuICAvL1xuICAvLyAxLiBOb2RlLmpzJ3MgYHVybC5wYXJzZWAgYXBpIHdoaWNoIGFjY2VwdHMgYSBVUkwsIGJvb2xlYW4gYXMgYXJndW1lbnRzXG4gIC8vICAgIHdoZXJlIHRoZSBib29sZWFuIGluZGljYXRlcyB0aGF0IHRoZSBxdWVyeSBzdHJpbmcgc2hvdWxkIGFsc28gYmUgcGFyc2VkLlxuICAvL1xuICAvLyAyLiBUaGUgYFVSTGAgaW50ZXJmYWNlIG9mIHRoZSBicm93c2VyIHdoaWNoIGFjY2VwdHMgYSBVUkwsIG9iamVjdCBhc1xuICAvLyAgICBhcmd1bWVudHMuIFRoZSBzdXBwbGllZCBvYmplY3Qgd2lsbCBiZSB1c2VkIGFzIGRlZmF1bHQgdmFsdWVzIC8gZmFsbC1iYWNrXG4gIC8vICAgIGZvciByZWxhdGl2ZSBwYXRocy5cbiAgLy9cbiAgaWYgKCdvYmplY3QnICE9PSB0eXBlICYmICdzdHJpbmcnICE9PSB0eXBlKSB7XG4gICAgcGFyc2VyID0gbG9jYXRpb247XG4gICAgbG9jYXRpb24gPSBudWxsO1xuICB9XG5cbiAgaWYgKHBhcnNlciAmJiAnZnVuY3Rpb24nICE9PSB0eXBlb2YgcGFyc2VyKSBwYXJzZXIgPSBxcy5wYXJzZTtcblxuICBsb2NhdGlvbiA9IGxvbGNhdGlvbihsb2NhdGlvbik7XG5cbiAgLy9cbiAgLy8gRXh0cmFjdCBwcm90b2NvbCBpbmZvcm1hdGlvbiBiZWZvcmUgcnVubmluZyB0aGUgaW5zdHJ1Y3Rpb25zLlxuICAvL1xuICBleHRyYWN0ZWQgPSBleHRyYWN0UHJvdG9jb2woYWRkcmVzcyB8fCAnJyk7XG4gIHJlbGF0aXZlID0gIWV4dHJhY3RlZC5wcm90b2NvbCAmJiAhZXh0cmFjdGVkLnNsYXNoZXM7XG4gIHVybC5zbGFzaGVzID0gZXh0cmFjdGVkLnNsYXNoZXMgfHwgcmVsYXRpdmUgJiYgbG9jYXRpb24uc2xhc2hlcztcbiAgdXJsLnByb3RvY29sID0gZXh0cmFjdGVkLnByb3RvY29sIHx8IGxvY2F0aW9uLnByb3RvY29sIHx8ICcnO1xuICBhZGRyZXNzID0gZXh0cmFjdGVkLnJlc3Q7XG5cbiAgLy9cbiAgLy8gV2hlbiB0aGUgYXV0aG9yaXR5IGNvbXBvbmVudCBpcyBhYnNlbnQgdGhlIFVSTCBzdGFydHMgd2l0aCBhIHBhdGhcbiAgLy8gY29tcG9uZW50LlxuICAvL1xuICBpZiAoIWV4dHJhY3RlZC5zbGFzaGVzKSBpbnN0cnVjdGlvbnNbM10gPSBbLyguKikvLCAncGF0aG5hbWUnXTtcblxuICBmb3IgKDsgaSA8IGluc3RydWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGluc3RydWN0aW9uID0gaW5zdHJ1Y3Rpb25zW2ldO1xuXG4gICAgaWYgKHR5cGVvZiBpbnN0cnVjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYWRkcmVzcyA9IGluc3RydWN0aW9uKGFkZHJlc3MpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcGFyc2UgPSBpbnN0cnVjdGlvblswXTtcbiAgICBrZXkgPSBpbnN0cnVjdGlvblsxXTtcblxuICAgIGlmIChwYXJzZSAhPT0gcGFyc2UpIHtcbiAgICAgIHVybFtrZXldID0gYWRkcmVzcztcbiAgICB9IGVsc2UgaWYgKCdzdHJpbmcnID09PSB0eXBlb2YgcGFyc2UpIHtcbiAgICAgIGlmICh+KGluZGV4ID0gYWRkcmVzcy5pbmRleE9mKHBhcnNlKSkpIHtcbiAgICAgICAgaWYgKCdudW1iZXInID09PSB0eXBlb2YgaW5zdHJ1Y3Rpb25bMl0pIHtcbiAgICAgICAgICB1cmxba2V5XSA9IGFkZHJlc3Muc2xpY2UoMCwgaW5kZXgpO1xuICAgICAgICAgIGFkZHJlc3MgPSBhZGRyZXNzLnNsaWNlKGluZGV4ICsgaW5zdHJ1Y3Rpb25bMl0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVybFtrZXldID0gYWRkcmVzcy5zbGljZShpbmRleCk7XG4gICAgICAgICAgYWRkcmVzcyA9IGFkZHJlc3Muc2xpY2UoMCwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgoaW5kZXggPSBwYXJzZS5leGVjKGFkZHJlc3MpKSkge1xuICAgICAgdXJsW2tleV0gPSBpbmRleFsxXTtcbiAgICAgIGFkZHJlc3MgPSBhZGRyZXNzLnNsaWNlKDAsIGluZGV4LmluZGV4KTtcbiAgICB9XG5cbiAgICB1cmxba2V5XSA9IHVybFtrZXldIHx8IChcbiAgICAgIHJlbGF0aXZlICYmIGluc3RydWN0aW9uWzNdID8gbG9jYXRpb25ba2V5XSB8fCAnJyA6ICcnXG4gICAgKTtcblxuICAgIC8vXG4gICAgLy8gSG9zdG5hbWUsIGhvc3QgYW5kIHByb3RvY29sIHNob3VsZCBiZSBsb3dlcmNhc2VkIHNvIHRoZXkgY2FuIGJlIHVzZWQgdG9cbiAgICAvLyBjcmVhdGUgYSBwcm9wZXIgYG9yaWdpbmAuXG4gICAgLy9cbiAgICBpZiAoaW5zdHJ1Y3Rpb25bNF0pIHVybFtrZXldID0gdXJsW2tleV0udG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIC8vXG4gIC8vIEFsc28gcGFyc2UgdGhlIHN1cHBsaWVkIHF1ZXJ5IHN0cmluZyBpbiB0byBhbiBvYmplY3QuIElmIHdlJ3JlIHN1cHBsaWVkXG4gIC8vIHdpdGggYSBjdXN0b20gcGFyc2VyIGFzIGZ1bmN0aW9uIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgYnVpbGQtaW5cbiAgLy8gcGFyc2VyLlxuICAvL1xuICBpZiAocGFyc2VyKSB1cmwucXVlcnkgPSBwYXJzZXIodXJsLnF1ZXJ5KTtcblxuICAvL1xuICAvLyBJZiB0aGUgVVJMIGlzIHJlbGF0aXZlLCByZXNvbHZlIHRoZSBwYXRobmFtZSBhZ2FpbnN0IHRoZSBiYXNlIFVSTC5cbiAgLy9cbiAgaWYgKFxuICAgICAgcmVsYXRpdmVcbiAgICAmJiBsb2NhdGlvbi5zbGFzaGVzXG4gICAgJiYgdXJsLnBhdGhuYW1lLmNoYXJBdCgwKSAhPT0gJy8nXG4gICAgJiYgKHVybC5wYXRobmFtZSAhPT0gJycgfHwgbG9jYXRpb24ucGF0aG5hbWUgIT09ICcnKVxuICApIHtcbiAgICB1cmwucGF0aG5hbWUgPSByZXNvbHZlKHVybC5wYXRobmFtZSwgbG9jYXRpb24ucGF0aG5hbWUpO1xuICB9XG5cbiAgLy9cbiAgLy8gV2Ugc2hvdWxkIG5vdCBhZGQgcG9ydCBudW1iZXJzIGlmIHRoZXkgYXJlIGFscmVhZHkgdGhlIGRlZmF1bHQgcG9ydCBudW1iZXJcbiAgLy8gZm9yIGEgZ2l2ZW4gcHJvdG9jb2wuIEFzIHRoZSBob3N0IGFsc28gY29udGFpbnMgdGhlIHBvcnQgbnVtYmVyIHdlJ3JlIGdvaW5nXG4gIC8vIG92ZXJyaWRlIGl0IHdpdGggdGhlIGhvc3RuYW1lIHdoaWNoIGNvbnRhaW5zIG5vIHBvcnQgbnVtYmVyLlxuICAvL1xuICBpZiAoIXJlcXVpcmVkKHVybC5wb3J0LCB1cmwucHJvdG9jb2wpKSB7XG4gICAgdXJsLmhvc3QgPSB1cmwuaG9zdG5hbWU7XG4gICAgdXJsLnBvcnQgPSAnJztcbiAgfVxuXG4gIC8vXG4gIC8vIFBhcnNlIGRvd24gdGhlIGBhdXRoYCBmb3IgdGhlIHVzZXJuYW1lIGFuZCBwYXNzd29yZC5cbiAgLy9cbiAgdXJsLnVzZXJuYW1lID0gdXJsLnBhc3N3b3JkID0gJyc7XG4gIGlmICh1cmwuYXV0aCkge1xuICAgIGluc3RydWN0aW9uID0gdXJsLmF1dGguc3BsaXQoJzonKTtcbiAgICB1cmwudXNlcm5hbWUgPSBpbnN0cnVjdGlvblswXSB8fCAnJztcbiAgICB1cmwucGFzc3dvcmQgPSBpbnN0cnVjdGlvblsxXSB8fCAnJztcbiAgfVxuXG4gIHVybC5vcmlnaW4gPSB1cmwucHJvdG9jb2wgJiYgdXJsLmhvc3QgJiYgdXJsLnByb3RvY29sICE9PSAnZmlsZTonXG4gICAgPyB1cmwucHJvdG9jb2wgKycvLycrIHVybC5ob3N0XG4gICAgOiAnbnVsbCc7XG5cbiAgLy9cbiAgLy8gVGhlIGhyZWYgaXMganVzdCB0aGUgY29tcGlsZWQgcmVzdWx0LlxuICAvL1xuICB1cmwuaHJlZiA9IHVybC50b1N0cmluZygpO1xufVxuXG4vKipcbiAqIFRoaXMgaXMgY29udmVuaWVuY2UgbWV0aG9kIGZvciBjaGFuZ2luZyBwcm9wZXJ0aWVzIGluIHRoZSBVUkwgaW5zdGFuY2UgdG9cbiAqIGluc3VyZSB0aGF0IHRoZXkgYWxsIHByb3BhZ2F0ZSBjb3JyZWN0bHkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHBhcnQgICAgICAgICAgUHJvcGVydHkgd2UgbmVlZCB0byBhZGp1c3QuXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSAgICAgICAgICBUaGUgbmV3bHkgYXNzaWduZWQgdmFsdWUuXG4gKiBAcGFyYW0ge0Jvb2xlYW58RnVuY3Rpb259IGZuICBXaGVuIHNldHRpbmcgdGhlIHF1ZXJ5LCBpdCB3aWxsIGJlIHRoZSBmdW5jdGlvblxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlZCB0byBwYXJzZSB0aGUgcXVlcnkuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGVuIHNldHRpbmcgdGhlIHByb3RvY29sLCBkb3VibGUgc2xhc2ggd2lsbCBiZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZCBmcm9tIHRoZSBmaW5hbCB1cmwgaWYgaXQgaXMgdHJ1ZS5cbiAqIEByZXR1cm5zIHtVUkx9IFVSTCBpbnN0YW5jZSBmb3IgY2hhaW5pbmcuXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHNldChwYXJ0LCB2YWx1ZSwgZm4pIHtcbiAgdmFyIHVybCA9IHRoaXM7XG5cbiAgc3dpdGNoIChwYXJ0KSB7XG4gICAgY2FzZSAncXVlcnknOlxuICAgICAgaWYgKCdzdHJpbmcnID09PSB0eXBlb2YgdmFsdWUgJiYgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlID0gKGZuIHx8IHFzLnBhcnNlKSh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHVybFtwYXJ0XSA9IHZhbHVlO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdwb3J0JzpcbiAgICAgIHVybFtwYXJ0XSA9IHZhbHVlO1xuXG4gICAgICBpZiAoIXJlcXVpcmVkKHZhbHVlLCB1cmwucHJvdG9jb2wpKSB7XG4gICAgICAgIHVybC5ob3N0ID0gdXJsLmhvc3RuYW1lO1xuICAgICAgICB1cmxbcGFydF0gPSAnJztcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUpIHtcbiAgICAgICAgdXJsLmhvc3QgPSB1cmwuaG9zdG5hbWUgKyc6JysgdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnaG9zdG5hbWUnOlxuICAgICAgdXJsW3BhcnRdID0gdmFsdWU7XG5cbiAgICAgIGlmICh1cmwucG9ydCkgdmFsdWUgKz0gJzonKyB1cmwucG9ydDtcbiAgICAgIHVybC5ob3N0ID0gdmFsdWU7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2hvc3QnOlxuICAgICAgdXJsW3BhcnRdID0gdmFsdWU7XG5cbiAgICAgIGlmICgvOlxcZCskLy50ZXN0KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCc6Jyk7XG4gICAgICAgIHVybC5wb3J0ID0gdmFsdWUucG9wKCk7XG4gICAgICAgIHVybC5ob3N0bmFtZSA9IHZhbHVlLmpvaW4oJzonKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVybC5ob3N0bmFtZSA9IHZhbHVlO1xuICAgICAgICB1cmwucG9ydCA9ICcnO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3Byb3RvY29sJzpcbiAgICAgIHVybC5wcm90b2NvbCA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICB1cmwuc2xhc2hlcyA9ICFmbjtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAncGF0aG5hbWUnOlxuICAgIGNhc2UgJ2hhc2gnOlxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHZhciBjaGFyID0gcGFydCA9PT0gJ3BhdGhuYW1lJyA/ICcvJyA6ICcjJztcbiAgICAgICAgdXJsW3BhcnRdID0gdmFsdWUuY2hhckF0KDApICE9PSBjaGFyID8gY2hhciArIHZhbHVlIDogdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cmxbcGFydF0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHVybFtwYXJ0XSA9IHZhbHVlO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpbnMgPSBydWxlc1tpXTtcblxuICAgIGlmIChpbnNbNF0pIHVybFtpbnNbMV1dID0gdXJsW2luc1sxXV0udG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIHVybC5vcmlnaW4gPSB1cmwucHJvdG9jb2wgJiYgdXJsLmhvc3QgJiYgdXJsLnByb3RvY29sICE9PSAnZmlsZTonXG4gICAgPyB1cmwucHJvdG9jb2wgKycvLycrIHVybC5ob3N0XG4gICAgOiAnbnVsbCc7XG5cbiAgdXJsLmhyZWYgPSB1cmwudG9TdHJpbmcoKTtcblxuICByZXR1cm4gdXJsO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgcHJvcGVydGllcyBiYWNrIGluIHRvIGEgdmFsaWQgYW5kIGZ1bGwgVVJMIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmdpZnkgT3B0aW9uYWwgcXVlcnkgc3RyaW5naWZ5IGZ1bmN0aW9uLlxuICogQHJldHVybnMge1N0cmluZ30gQ29tcGlsZWQgdmVyc2lvbiBvZiB0aGUgVVJMLlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiB0b1N0cmluZyhzdHJpbmdpZnkpIHtcbiAgaWYgKCFzdHJpbmdpZnkgfHwgJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIHN0cmluZ2lmeSkgc3RyaW5naWZ5ID0gcXMuc3RyaW5naWZ5O1xuXG4gIHZhciBxdWVyeVxuICAgICwgdXJsID0gdGhpc1xuICAgICwgcHJvdG9jb2wgPSB1cmwucHJvdG9jb2w7XG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLmNoYXJBdChwcm90b2NvbC5sZW5ndGggLSAxKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOic7XG5cbiAgdmFyIHJlc3VsdCA9IHByb3RvY29sICsgKHVybC5zbGFzaGVzID8gJy8vJyA6ICcnKTtcblxuICBpZiAodXJsLnVzZXJuYW1lKSB7XG4gICAgcmVzdWx0ICs9IHVybC51c2VybmFtZTtcbiAgICBpZiAodXJsLnBhc3N3b3JkKSByZXN1bHQgKz0gJzonKyB1cmwucGFzc3dvcmQ7XG4gICAgcmVzdWx0ICs9ICdAJztcbiAgfVxuXG4gIHJlc3VsdCArPSB1cmwuaG9zdCArIHVybC5wYXRobmFtZTtcblxuICBxdWVyeSA9ICdvYmplY3QnID09PSB0eXBlb2YgdXJsLnF1ZXJ5ID8gc3RyaW5naWZ5KHVybC5xdWVyeSkgOiB1cmwucXVlcnk7XG4gIGlmIChxdWVyeSkgcmVzdWx0ICs9ICc/JyAhPT0gcXVlcnkuY2hhckF0KDApID8gJz8nKyBxdWVyeSA6IHF1ZXJ5O1xuXG4gIGlmICh1cmwuaGFzaCkgcmVzdWx0ICs9IHVybC5oYXNoO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cblVybC5wcm90b3R5cGUgPSB7IHNldDogc2V0LCB0b1N0cmluZzogdG9TdHJpbmcgfTtcblxuLy9cbi8vIEV4cG9zZSB0aGUgVVJMIHBhcnNlciBhbmQgc29tZSBhZGRpdGlvbmFsIHByb3BlcnRpZXMgdGhhdCBtaWdodCBiZSB1c2VmdWwgZm9yXG4vLyBvdGhlcnMgb3IgdGVzdGluZy5cbi8vXG5VcmwuZXh0cmFjdFByb3RvY29sID0gZXh0cmFjdFByb3RvY29sO1xuVXJsLmxvY2F0aW9uID0gbG9sY2F0aW9uO1xuVXJsLnRyaW1MZWZ0ID0gdHJpbUxlZnQ7XG5VcmwucXMgPSBxcztcblxubW9kdWxlLmV4cG9ydHMgPSBVcmw7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIvKiFcbiAgQGxpY2Vuc2VcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmltcG9ydCAqIGFzIHBhcnNlIGZyb20gJ3VybC1wYXJzZSc7XG5pbXBvcnQge1xuICBDbGVhckludGVyYWN0aW9uLFxuICBDb25maWdEYXRhLFxuICBDb25maWdEYXRhRWxlbWVudCxcbiAgQ29uZmlnRGF0YUVsZW1lbnREaW1lbnNpb24sXG4gIENvbmZpZ0RhdGFFbGVtZW50TWV0cmljLFxuICBDb25maWdEYXRhRWxlbWVudFR5cGUsXG4gIENvbmZpZ0lkLFxuICBDb25maWdTdHlsZSxcbiAgQ29uZmlnU3R5bGVFbGVtZW50LFxuICBEU0ludGVyYWN0aW9uRGF0YSxcbiAgRFNJbnRlcmFjdGlvblR5cGUsXG4gIERTUm93VmFsdWUsXG4gIEZpZWxkLFxuICBGaWVsZElkLFxuICBGaWVsZHNCeUNvbmZpZ0lkLFxuICBGaWVsZHNCeUlkLFxuICBJbnRlcmFjdGlvbixcbiAgSW50ZXJhY3Rpb25NZXNzYWdlLFxuICBJbnRlcmFjdGlvbnNCeUlkLFxuICBJbnRlcmFjdGlvblR5cGUsXG4gIE1lc3NhZ2UsXG4gIE1lc3NhZ2VUeXBlLFxuICBPYmplY3RSb3csXG4gIE9iamVjdFRhYmxlcyxcbiAgT2JqZWN0VHJhbnNmb3JtLFxuICBQYXJzZWRJbWFnZSxcbiAgUG9zdE1lc3NhZ2UsXG4gIFJvdyxcbiAgUm93SGVhZGluZyxcbiAgU2VuZEludGVyYWN0aW9uLFxuICBTdHlsZUJ5SWQsXG4gIFN1YnNjcmlwdGlvbnNPcHRpb25zLFxuICBUYWJsZSxcbiAgVGFibGVGb3JtYXQsXG4gIFRhYmxlcyxcbiAgVGFibGVUcmFuc2Zvcm0sXG4gIFRhYmxlVHlwZSxcbiAgVGhlbWVTdHlsZSxcbiAgVG9EU01lc3NhZ2VUeXBlLFxuICBWaXpSZWFkeU1lc3NhZ2UsXG59IGZyb20gJy4vdHlwZXMnO1xuXG4vLyBNYWtlIGFsbCBleHBvcnRlZCB0eXBlcyBhdmFpbGFibGUgdG8gZXh0ZXJuYWwgdXNlcnMuXG5leHBvcnQgKiBmcm9tICcuL3R5cGVzJztcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB3aWR0aCAoaW4gcGl4ZWxzKSBvZiB0aGUgdmlzJ3MgaWZyYW1lLlxuICpcbiAqIFVzYWdlOlxuICogYGBgXG4gKiB2YXIgbXlXaWR0aCA9IGRzY2MuZ2V0V2lkdGgoKTtcbiAqIGNvbnNvbGUubG9nKCdNeSB3aWR0aCBpczogJywgbXlXaWR0aCk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFdpZHRoID0gKCk6IG51bWJlciA9PiBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGhlaWdodCAoaW4gcGl4ZWxzKSBvZiB0aGUgdmlzJ3MgaWZyYW1lLlxuICpcbiAqIFVzYWdlOlxuICogYGBgXG4gKiB2YXIgbXlIZWlnaHQgPSBkc2NjLmdldEhlaWdodCgpO1xuICogY29uc29sZS5sb2coJ015IGhlaWdodCBpczogJywgbXlIZWlnaHQpO1xuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRIZWlnaHQgPSAoKTogbnVtYmVyID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgY29tcG9uZW50SWQgb2YgdGhlIHZpcy4gQ29tcG9uZW50IGlkcyB1bmlxdWVseSBpZGVudGlmeSBhIHZpcyB0b1xuICogRGF0YSBTdHVkaW8uXG4gKlxuICogVXNhZ2U6XG4gKiBgYGBcbiAqIHZhciBteUNvbXBvbmVudElkID0gZHNjYy5nZXRDb21wb25lbnRJZCgpO1xuICogY29uc29sZS5sb2coJ015IGNvbXBvbmVudElkIGlzOiAnLCBteUNvbXBvbmVudElkKTtcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgZ2V0Q29tcG9uZW50SWQgPSAoKTogc3RyaW5nID0+IHtcbiAgY29uc3QgcXVlcnkgPSBwYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSkucXVlcnk7XG4gIGlmIChxdWVyeS5kc2NJZCkge1xuICAgIHJldHVybiBxdWVyeS5kc2NJZDtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnZHNjSWQgbXVzdCBiZSBpbiB0aGUgcXVlcnkgcGFyYW1ldGVycy4gJyArXG4gICAgICAgICdUaGlzIGlzIGEgYnVnIGluIGRzLWNvbXBvbmVudCwgcGxlYXNlIGZpbGUgYSBidWc6ICcgK1xuICAgICAgICAnaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZWRhdGFzdHVkaW8vZHMtY29tcG9uZW50L2lzc3Vlcy9uZXcnXG4gICAgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBQYXJzZXMgYSBgJ1xcdTAwYTBcXHUwMGEwJ2AgZGVsaW1pdGVkIHN0cmluZyBpbnRvIGNvbXBvbmVudCBwYXJ0cy4gSWYgYW55IHBhcnRzXG4gKiBhcmUgbWlzc2luZywgdGhleSB3aWxsIGJlIHJldHVybmVkIGFzIHVuZGVmaW5lZC5cbiAqXG4gKiBVc2FnZTpcbiAqIGBgYFxuICogY29uc3QgbXlJbWFnZSA9IHBhcnNlSW1hZ2UoJ29yaWdpbmFsdXJsLmNvbVxcdTAwYTBcXHUwMGEwcHJveGllZHVybC5jb21cXHUwMGEwXFx1MDBhMGFsdCB0ZXh0Jyk7XG4gKlxuICogZXhwZWN0KG15SW1hZ2UpLnRvRXF1YWwoe1xuICogICBvcmlnaW5hbFVybDogJ29yaWdpbmFsdXJsLmNvbScsXG4gKiAgIHByb3hpZWRVcmw6ICdwcm94aWVkdXJsLmNvbScsXG4gKiAgIGFsdFRleHQ6ICdhbHQgdGV4dCcsXG4gKiB9KTtcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgcGFyc2VJbWFnZSA9ICh2YWx1ZTogc3RyaW5nKTogUGFyc2VkSW1hZ2UgPT4ge1xuICBjb25zdCBbb3JpZ2luYWxVcmwsIHByb3hpZWRVcmwsIGFsdFRleHRdID0gdmFsdWUuc3BsaXQoJ1xcdTAwYTBcXHUwMGEwJyk7XG4gIHJldHVybiB7XG4gICAgYWx0VGV4dCxcbiAgICBvcmlnaW5hbFVybCxcbiAgICBwcm94aWVkVXJsLFxuICB9O1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaWVsZHMgaW5kZXhlZCBieSB0aGVpciBEYXRhIFN0dWRpbyBpZC5cbiAqL1xuY29uc3QgZmllbGRzQnlJZCA9IChtZXNzYWdlOiBNZXNzYWdlKTogRmllbGRzQnlJZCA9PlxuICBtZXNzYWdlLmZpZWxkcy5yZWR1Y2UoKGFjYzogRmllbGRzQnlJZCwgZmllbGQ6IEZpZWxkKSA9PiB7XG4gICAgYWNjW2ZpZWxkLmlkXSA9IGZpZWxkO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcblxuLyoqXG4gKiBaaXBzIHR3byBhcnJheXMgdG9nZXRoZXIgaW50byBhIG5ldyBhcnJheS4gVXNlcyB0aGUgbGVuZ3RoIG9mIHRoZSBzaG9ydGVzdFxuICogYXJyYXkuXG4gKlxuICogVXNhZ2U6XG4gKiBgYGBcbiAqIGNvbnN0IGEgPSBbMSwgMiwgM107XG4gKiBjb25zdCBiID0gWydhJywgJ2InLCAnYycsICdkJ107XG4gKiBjb25zdCB6aXBwZWQgPSB6aXAyKGEsIGIpO1xuICogZXhwZWN0KHppcHBlZCkudG9FcXVhbChbWzEsICdhJ10sIFsyLCAnYiddLCBbMywgJ2MnXV0pO1xuICogYGBgXG4gKi9cbmNvbnN0IHppcDIgPSA8VCwgVT4odDogVFtdLCB1OiBVW10pOiBBcnJheTxbVCwgVV0+ID0+IHtcbiAgaWYgKHQubGVuZ3RoIDwgdS5sZW5ndGgpIHtcbiAgICByZXR1cm4gdC5tYXAoKHRFbnRyeTogVCwgaWR4OiBudW1iZXIpOiBbVCwgVV0gPT4gW3RFbnRyeSwgdVtpZHhdXSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHUubWFwKCh1RW50cnk6IFUsIGlkeDogbnVtYmVyKTogW1QsIFVdID0+IFt0W2lkeF0sIHVFbnRyeV0pO1xuICB9XG59O1xuXG4vLyBgLnNvcnRgIGlzbid0IHN0YWJsZSwgYnV0IGlmIHlvdSBjb21wYXJlIGl0ZW1zLCBhbmQgd2hlbiB0aGV5IGFyZSBlcXVhbCB1c2Vcbi8vIHRoZSBvcmlnaW5hbCBpbmRleCwgaXQgaXMgdGhlbiBzdGFibGUuXG5jb25zdCBzdGFibGVTb3J0ID0gPFQ+KGFycjogVFtdLCBjb21wYXJlOiAoYTogVCwgYjogVCkgPT4gbnVtYmVyKTogVFtdID0+XG4gIGFyclxuICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoe2l0ZW0sIGluZGV4fSkpXG4gICAgLnNvcnQoKGEsIGIpID0+IGNvbXBhcmUoYS5pdGVtLCBiLml0ZW0pIHx8IGEuaW5kZXggLSBiLmluZGV4KVxuICAgIC5tYXAoKHtpdGVtfSkgPT4gaXRlbSk7XG5cbmNvbnN0IGRpbWVuc2lvbk9yTWV0cmljID0gKGNkZTogQ29uZmlnRGF0YUVsZW1lbnQpOiBib29sZWFuID0+XG4gIGNkZS50eXBlID09PSBDb25maWdEYXRhRWxlbWVudFR5cGUuRElNRU5TSU9OIHx8XG4gIGNkZS50eXBlID09PSBDb25maWdEYXRhRWxlbWVudFR5cGUuTUVUUklDO1xuXG5jb25zdCB0b051bSA9IChjZGV0OiBDb25maWdEYXRhRWxlbWVudFR5cGUpID0+XG4gIGNkZXQgPT09IENvbmZpZ0RhdGFFbGVtZW50VHlwZS5ESU1FTlNJT04gPyAtMSA6IDE7XG5cbi8qKlxuICogRmxhdHRlbnMgdGhlIGNvbmZpZ0lkcyBmcm9tIGEgbWVzc2FnZSBpbnRvIGEgc2luZ2xlIGFycmF5LiBUaGUgY29uZmlnIElkc1xuICogd2lsbCBiZSByZXBlYXRlZCBmb3IgdGhlIGBNRVRSSUNgL2BESU1FTlNJT05gIHNlbGVjdGlvbnMuIGkuZS4gZm9yIGEgYE1FVFJJQ2BcbiAqIG5hbWVkIGBcIm1ldHJpY3NcImAgb2YgYHttaW46IDIsIG1heDozfWAsIHRoZSB2YWx1ZSBtZXRyaWNzIHdpbGwgYmUgcmVwZWF0ZWQgMlxuICogdG8gMyB0aW1lcyBkZXBlbmRpbmcgb24gd2hhdCB2YWx1ZXMgdGhlIHVzZXIgc2VsZWN0cy5cbiAqXG4gKiBOb3RlOiB0aGlzIGlzIHJlbHlpbmcgb24gdGhlIGZhY3QgdGhhdCB0aGUgcG9zdE1lc3NhZ2UgZnJvbSBEYXRhU3R1ZGlvIGhhc1xuICogdGhlIGZpZWxkcyBzb3J0ZWQgdG8gYmUgZGltZW5zaW9ucywgZm9sbG93ZWQgYnkgbWV0cmljcy5cbiAqL1xudHlwZSBDb25maWdEYXRhQ29uY2VwdCA9IENvbmZpZ0RhdGFFbGVtZW50TWV0cmljIHwgQ29uZmlnRGF0YUVsZW1lbnREaW1lbnNpb247XG5cbmNvbnN0IGZsYXR0ZW5Db25maWdJZHMgPSAobWVzc2FnZTogTWVzc2FnZSk6IENvbmZpZ0lkW10gPT4ge1xuICBjb25zdCBkaW1uc0FuZE1ldHM6IENvbmZpZ0RhdGFDb25jZXB0W10gPSBbXTtcbiAgbWVzc2FnZS5jb25maWcuZGF0YS5mb3JFYWNoKChjb25maWdEYXRhOiBDb25maWdEYXRhKSA9PiB7XG4gICAgY29uZmlnRGF0YS5lbGVtZW50c1xuICAgICAgLmZpbHRlcihkaW1lbnNpb25Pck1ldHJpYylcbiAgICAgIC5mb3JFYWNoKChjb25maWdEYXRhRWxlbWVudDogQ29uZmlnRGF0YUNvbmNlcHQpID0+IHtcbiAgICAgICAgZGltbnNBbmRNZXRzLnB1c2goY29uZmlnRGF0YUVsZW1lbnQpO1xuICAgICAgfSk7XG4gIH0pO1xuICBjb25zdCBzb3J0ZWQgPSBzdGFibGVTb3J0KFxuICAgIGRpbW5zQW5kTWV0cyxcbiAgICAoYSwgYikgPT4gdG9OdW0oYS50eXBlKSAtIHRvTnVtKGIudHlwZSlcbiAgKTtcbiAgY29uc3QgY29uZmlnSWRzOiBDb25maWdJZFtdID0gW107XG4gIHNvcnRlZC5mb3JFYWNoKChjb25maWdEYXRhRWxlbWVudCkgPT4ge1xuICAgIGNvbmZpZ0RhdGFFbGVtZW50LnZhbHVlLmZvckVhY2goKCkgPT4gY29uZmlnSWRzLnB1c2goY29uZmlnRGF0YUVsZW1lbnQuaWQpKTtcbiAgfSk7XG4gIHJldHVybiBjb25maWdJZHM7XG59O1xuXG4vKipcbiAqIEpvaW5zIGEgc2luZ2xlIHRhYmxlIHJvdyB3aXRoIHRoZSBtYXRjaGluZyBgQ29uZmlnSWRgXG4gKi9cbmNvbnN0IGpvaW5PYmplY3RSb3cgPSAoY29uZmlnSWRzOiBDb25maWdJZFtdKSA9PiAocm93OiBSb3cpOiBPYmplY3RSb3cgPT4ge1xuICBjb25zdCBvYmplY3RSb3c6IE9iamVjdFJvdyA9IHt9O1xuXG4gIHppcDIocm93LCBjb25maWdJZHMpLmZvckVhY2goKFtyb3dWYWwsIGNvbmZpZ0lkXTogW0RTUm93VmFsdWUsIENvbmZpZ0lkXSkgPT4ge1xuICAgIGlmIChvYmplY3RSb3dbY29uZmlnSWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9iamVjdFJvd1tjb25maWdJZF0gPSBbXTtcbiAgICB9XG4gICAgb2JqZWN0Um93W2NvbmZpZ0lkXS5wdXNoKHJvd1ZhbCk7XG4gIH0sIHt9KTtcblxuICByZXR1cm4gb2JqZWN0Um93O1xufTtcblxuLyoqXG4gKiBGb3JtYXRzIHRhYmxlcyBpbnRvIHRoZSBgT2JqZWN0VGFibGVzYCBmb3JtYXQuXG4gKi9cbmNvbnN0IG9iamVjdEZvcm1hdFRhYmxlID0gKG1lc3NhZ2U6IE1lc3NhZ2UpOiBPYmplY3RUYWJsZXMgPT4ge1xuICBjb25zdCBjb25maWdJZHMgPSBmbGF0dGVuQ29uZmlnSWRzKG1lc3NhZ2UpO1xuICBjb25zdCBvYmplY3RUYWJsZXM6IE9iamVjdFRhYmxlcyA9IHtbVGFibGVUeXBlLkRFRkFVTFRdOiBbXX07XG5cbiAgbWVzc2FnZS5kYXRhUmVzcG9uc2UudGFibGVzLmZvckVhY2goKHRhYmxlOiBUYWJsZSkgPT4ge1xuICAgIGNvbnN0IG9iamVjdFJvd3M6IE9iamVjdFJvd1tdID0gdGFibGUucm93cy5tYXAoam9pbk9iamVjdFJvdyhjb25maWdJZHMpKTtcbiAgICBpZiAodGFibGUuaWQgPT09IFRhYmxlVHlwZS5ERUZBVUxUKSB7XG4gICAgICBvYmplY3RUYWJsZXNbdGFibGUuaWRdID0gb2JqZWN0Um93cztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY3VycmVudCA9IG9iamVjdFRhYmxlc1t0YWJsZS5pZF07XG4gICAgICBpZiAoY3VycmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG9iamVjdFRhYmxlc1t0YWJsZS5pZF0gPSBbXTtcbiAgICAgIH1cbiAgICAgIG9iamVjdFRhYmxlc1t0YWJsZS5pZF0uY29uY2F0KG9iamVjdFJvd3MpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvYmplY3RUYWJsZXM7XG59O1xuXG4vKipcbiAqIEZvcm1hdHMgdGFibGVzIGludG8gdGhlIGBUYWJsZXNgIGZvcm1hdC5cbiAqL1xuY29uc3QgdGFibGVGb3JtYXRUYWJsZSA9IChtZXNzYWdlOiBNZXNzYWdlKTogVGFibGVzID0+IHtcbiAgY29uc3QgZmllbGRzQnk6IEZpZWxkc0J5Q29uZmlnSWQgPSBmaWVsZHNCeUNvbmZpZ0lkKG1lc3NhZ2UpO1xuICBjb25zdCBjb25maWdJZHMgPSBmbGF0dGVuQ29uZmlnSWRzKG1lc3NhZ2UpO1xuICBjb25zdCBjb25maWdJZElkeCA9IHt9O1xuICBjb25zdCBoZWFkZXJzOiBSb3dIZWFkaW5nW10gPSBjb25maWdJZHMubWFwKFxuICAgIChjb25maWdJZDogc3RyaW5nKTogUm93SGVhZGluZyA9PiB7XG4gICAgICBpZiAoY29uZmlnSWRJZHhbY29uZmlnSWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uZmlnSWRJZHhbY29uZmlnSWRdID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmZpZ0lkSWR4W2NvbmZpZ0lkXSsrO1xuICAgICAgfVxuICAgICAgY29uc3QgaWR4ID0gY29uZmlnSWRJZHhbY29uZmlnSWRdO1xuICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNCeVtjb25maWdJZF1baWR4XTtcbiAgICAgIGNvbnN0IGhlYWRpbmc6IFJvd0hlYWRpbmcgPSB7Li4uZmllbGQsIGNvbmZpZ0lkfTtcbiAgICAgIHJldHVybiBoZWFkaW5nO1xuICAgIH1cbiAgKTtcbiAgY29uc3QgdGFibGVUYWJsZXM6IFRhYmxlcyA9IHtcbiAgICBbVGFibGVUeXBlLkRFRkFVTFRdOiB7aGVhZGVyczogW10sIHJvd3M6IFtdfSxcbiAgfTtcblxuICBtZXNzYWdlLmRhdGFSZXNwb25zZS50YWJsZXMuZm9yRWFjaCgodGFibGU6IFRhYmxlKSA9PiB7XG4gICAgdGFibGVUYWJsZXNbdGFibGUuaWRdID0ge1xuICAgICAgaGVhZGVycyxcbiAgICAgIHJvd3M6IHRhYmxlLnJvd3MsXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRhYmxlVGFibGVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaWVsZHMgaW5kZXhlZCBieSB0aGVpciBjb25maWcgaWQuIFNpbmNlIG1hbnkgZmllbGRzIGNhbiBiZSBpblxuICogdGhlIHNhbWUgYE1FVFJJQ2AvYERJTUVOU0lPTmAgc2VsZWN0aW9uLCBgY29uZmlnSWRgIGlzIG1hcHBlZCB0byBgRmllbGRbXWAuXG4gKi9cbmV4cG9ydCBjb25zdCBmaWVsZHNCeUNvbmZpZ0lkID0gKG1lc3NhZ2U6IE1lc3NhZ2UpOiBGaWVsZHNCeUNvbmZpZ0lkID0+IHtcbiAgY29uc3QgZmllbGRzQnlEU0lkID0gZmllbGRzQnlJZChtZXNzYWdlKTtcbiAgY29uc3QgZmllbGRzQnk6IEZpZWxkc0J5Q29uZmlnSWQgPSB7fTtcblxuICBtZXNzYWdlLmNvbmZpZy5kYXRhLmZvckVhY2goKGNvbmZpZ0RhdGE6IENvbmZpZ0RhdGEpID0+IHtcbiAgICBjb25maWdEYXRhLmVsZW1lbnRzXG4gICAgICAuZmlsdGVyKGRpbWVuc2lvbk9yTWV0cmljKVxuICAgICAgLmZvckVhY2goKGNvbmZpZ0RhdGFFbGVtZW50OiBDb25maWdEYXRhQ29uY2VwdCkgPT4ge1xuICAgICAgICBmaWVsZHNCeVtjb25maWdEYXRhRWxlbWVudC5pZF0gPSBjb25maWdEYXRhRWxlbWVudC52YWx1ZS5tYXAoXG4gICAgICAgICAgKGRzSWQ6IEZpZWxkSWQpOiBGaWVsZCA9PiBmaWVsZHNCeURTSWRbZHNJZF1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZmllbGRzQnk7XG59O1xuXG4vKipcbiAqIEZsYXR0ZW5zIHRoZSBzdHlsZSBlbnRyaWVzIGludG8gYSBzaW5nbGUgb2JqZWN0LiBgc3R5bGVJZGBzIHNob3VsZCBiZSB1bmlxdWUuXG4gKi9cbmNvbnN0IGZsYXR0ZW5TdHlsZSA9IChtZXNzYWdlOiBNZXNzYWdlKTogU3R5bGVCeUlkID0+IHtcbiAgY29uc3Qgc3R5bGVCeUlkOiBTdHlsZUJ5SWQgPSB7fTtcbiAgKG1lc3NhZ2UuY29uZmlnLnN0eWxlIHx8IFtdKS5mb3JFYWNoKChzdHlsZUVudHJ5OiBDb25maWdTdHlsZSkgPT4ge1xuICAgIHN0eWxlRW50cnkuZWxlbWVudHMuZm9yRWFjaCgoY29uZmlnU3R5bGVFbGVtZW50OiBDb25maWdTdHlsZUVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChzdHlsZUJ5SWRbY29uZmlnU3R5bGVFbGVtZW50LmlkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgc3R5bGVJZHMgbXVzdCBiZSB1bmlxdWUuIFlvdXIgc3R5bGVJZDogJyR7XG4gICAgICAgICAgICBjb25maWdTdHlsZUVsZW1lbnQuaWRcbiAgICAgICAgICB9JyBpcyB1c2VkIG1vcmUgdGhhbiBvbmNlLmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHN0eWxlQnlJZFtjb25maWdTdHlsZUVsZW1lbnQuaWRdID0ge1xuICAgICAgICB2YWx1ZTogY29uZmlnU3R5bGVFbGVtZW50LnZhbHVlLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IGNvbmZpZ1N0eWxlRWxlbWVudC5kZWZhdWx0VmFsdWUsXG4gICAgICB9O1xuICAgIH0pO1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIHN0eWxlQnlJZDtcbn07XG5cbmNvbnN0IHRoZW1lU3R5bGUgPSAobWVzc2FnZTogTWVzc2FnZSk6IFRoZW1lU3R5bGUgPT4ge1xuICByZXR1cm4gbWVzc2FnZS5jb25maWcudGhlbWVTdHlsZTtcbn07XG5cbmNvbnN0IG1hcEludGVyYWN0aW9uVHlwZXMgPSAoXG4gIGRzSW50ZXJhY3Rpb246IERTSW50ZXJhY3Rpb25UeXBlXG4pOiBJbnRlcmFjdGlvblR5cGUgPT4ge1xuICBzd2l0Y2ggKGRzSW50ZXJhY3Rpb24pIHtcbiAgICBjYXNlIERTSW50ZXJhY3Rpb25UeXBlLkZJTFRFUjpcbiAgICAgIHJldHVybiBJbnRlcmFjdGlvblR5cGUuRklMVEVSO1xuICB9XG59O1xuXG5jb25zdCB0cmFuc2Zvcm1EU0ludGVyYWN0aW9uID0gKG1lc3NhZ2U6IE1lc3NhZ2UpOiBJbnRlcmFjdGlvbnNCeUlkID0+IHtcbiAgY29uc3QgZHNJbnRlcmFjdGlvbnM6IERTSW50ZXJhY3Rpb25EYXRhW10gPSBtZXNzYWdlLmNvbmZpZy5pbnRlcmFjdGlvbnM7XG4gIC8vIFRPRE8gLSByZW1vdmUgb25jZSBpbnRlcmFjdGlvbnMgYXJlIGxpdmUuXG4gIGlmIChkc0ludGVyYWN0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIHJldHVybiBkc0ludGVyYWN0aW9ucy5yZWR1Y2UoXG4gICAgKGFjYzogSW50ZXJhY3Rpb25zQnlJZCwgZHNJbnRlcmFjdGlvbjogRFNJbnRlcmFjdGlvbkRhdGEpID0+IHtcbiAgICAgIGNvbnN0IGludGVyYWN0aW9ucyA9IGRzSW50ZXJhY3Rpb24uc3VwcG9ydGVkQWN0aW9ucy5tYXAoXG4gICAgICAgIG1hcEludGVyYWN0aW9uVHlwZXNcbiAgICAgICk7XG4gICAgICBjb25zdCB2YWx1ZSA9IHtcbiAgICAgICAgdHlwZTogbWFwSW50ZXJhY3Rpb25UeXBlcyhkc0ludGVyYWN0aW9uLnZhbHVlLnR5cGUpLFxuICAgICAgICBkYXRhOiBkc0ludGVyYWN0aW9uLnZhbHVlLmRhdGEsXG4gICAgICB9O1xuICAgICAgYWNjW2RzSW50ZXJhY3Rpb24uaWRdID0ge1xuICAgICAgICB2YWx1ZSxcbiAgICAgICAgc3VwcG9ydGVkQWN0aW9uczogaW50ZXJhY3Rpb25zLFxuICAgICAgfTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSxcbiAgICB7fVxuICApO1xufTtcblxuLyoqXG4gKiBUaGUgdHJhbnNmb3JtIHRvIHVzZSBmb3IgZGF0YSBpbiBhIFRhYmxlIGZvcm1hdC4gaS5lLiBgW1sxLCAyLCAzXSwgWzQsIDUsIDZdXWBcbiAqL1xuZXhwb3J0IGNvbnN0IHRhYmxlVHJhbnNmb3JtOiBUYWJsZVRyYW5zZm9ybSA9IChcbiAgbWVzc2FnZTogTWVzc2FnZVxuKTogVGFibGVGb3JtYXQgPT4gKHtcbiAgdGFibGVzOiB0YWJsZUZvcm1hdFRhYmxlKG1lc3NhZ2UpLFxuICBmaWVsZHM6IGZpZWxkc0J5Q29uZmlnSWQobWVzc2FnZSksXG4gIHN0eWxlOiBmbGF0dGVuU3R5bGUobWVzc2FnZSksXG4gIHRoZW1lOiB0aGVtZVN0eWxlKG1lc3NhZ2UpLFxuICBpbnRlcmFjdGlvbnM6IHRyYW5zZm9ybURTSW50ZXJhY3Rpb24obWVzc2FnZSksXG59KTtcblxuLyoqXG4gKiBUaGUgdHJhbnNmb3JtIHRvIHVzZSBmb3IgZGF0YSBpbiBhbiBvYmplY3QgZm9ybWF0LiBpLmUuIGBbe25hbWU6ICdqb2huJywgdmlld3M6IDN9LCB7bmFtZTogJ3N1emllJywgdmlld3M6IDV9XWBcbiAqL1xuZXhwb3J0IGNvbnN0IG9iamVjdFRyYW5zZm9ybTogT2JqZWN0VHJhbnNmb3JtID0gKG1lc3NhZ2U6IE1lc3NhZ2UpID0+ICh7XG4gIHRhYmxlczogb2JqZWN0Rm9ybWF0VGFibGUobWVzc2FnZSksXG4gIGZpZWxkczogZmllbGRzQnlDb25maWdJZChtZXNzYWdlKSxcbiAgc3R5bGU6IGZsYXR0ZW5TdHlsZShtZXNzYWdlKSxcbiAgdGhlbWU6IHRoZW1lU3R5bGUobWVzc2FnZSksXG4gIGludGVyYWN0aW9uczogdHJhbnNmb3JtRFNJbnRlcmFjdGlvbihtZXNzYWdlKSxcbn0pO1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSB0cmFuc2Zvcm0gaXMgbGlrZWx5IHRoZSBpZGVudGl0eSBmdW5jdGlvblxuICogVGhpcyBpcyBub3QgYSBzdXBwb3J0ZWQgaW1wbGVtZW50YXRpb24gcGF0aFxuICogQXZvaWQgdGhpcyBpZiBhdCBhbGwgcG9zc2libGUgLSBwbGVhc2UgdXNlIGVpdGhlciBvYmplY3RUcmFuc2Zvcm0gb3IgdGFibGVUcmFuc2Zvcm1cbiAqL1xuY29uc3QgaXNQcm9iYWJseUlkZW50aXR5RnVuY3Rpb24gPSAodHJhbnNmb3JtKTogYm9vbGVhbiA9PiB7XG4gIGxldCBpc0lkZW50aXR5OiBib29sZWFuID0gZmFsc2U7XG4gIGlmICh0cmFuc2Zvcm0oJ2lkZW50aXR5JykgPT09ICdpZGVudGl0eScpIHtcbiAgICBpc0lkZW50aXR5ID0gdHJ1ZTtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgVGhpcyBpcyBhbiB1bnN1cHBvcnRlZCBkYXRhIGZvcm1hdC4gUGxlYXNlIHVzZSBvbmUgb2YgdGhlIHN1cHBvcnRlZCB0cmFuc2Zvcm1zOlxuICAgICAgIGRzY2Mub2JqZWN0Rm9ybWF0IG9yIGRzY2MudGFibGVGb3JtYXQuYFxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGlzSWRlbnRpdHk7XG59O1xuXG5jb25zdCBpc1ZhbGlkVHJhbnNmb3JtID0gKHRyYW5zZm9ybSk6IGJvb2xlYW4gPT4ge1xuICBsZXQgaXNWYWxpZCA9IGZhbHNlO1xuICBpZiAoXG4gICAgKHRyYW5zZm9ybSBhcyBhbnkpID09PSB0YWJsZVRyYW5zZm9ybSB8fFxuICAgICh0cmFuc2Zvcm0gYXMgYW55KSA9PT0gb2JqZWN0VHJhbnNmb3JtXG4gICkge1xuICAgIGlzVmFsaWQgPSB0cnVlO1xuICB9IGVsc2UgaWYgKGlzUHJvYmFibHlJZGVudGl0eUZ1bmN0aW9uKHRyYW5zZm9ybSkpIHtcbiAgICBpc1ZhbGlkID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gaXNWYWxpZDtcbn07XG4vKlxuICogU3Vic2NyaWJlcyB0byBtZXNzYWdlcyBmcm9tIERhdGEgU3R1ZGlvLiBDYWxscyBgY2JgIGZvciBldmVyeSBuZXdcbiAqIFtbTWVzc2FnZVR5cGUuUkVOREVSXV0gbWVzc2FnZS4gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCB1bnN1YnNjcmliZVxuICogYGNhbGxiYWNrYCBmcm9tIGZ1cnRoZXIgaW52b2NhdGlvbnMuXG4gKlxuICogVXNhZ2UgLSB0YWJsZVRyYW5zZm9ybTpcbiAqIGBgYFxuICogdmFyIHVuc3Vic2NyaWJlID0gZHNjYy5zdWJzY3JpYmVUb0RhdGEoZnVuY3Rpb24obWVzc2FnZSkge1xuICogICBjb25zb2xlLmxvZyhtZXNzYWdlLnRhYmxlcylcbiAqICAgY29uc29sZS5sb2cobWVzc2FnZS5maWVsZHMpXG4gKiAgIGNvbnNvbGUubG9nKG1lc3NhZ2Uuc3R5bGUpXG4gKiB9LCB7dHJhbnNmb3JtOiBkc2NjLnRhYmxlVHJhbnNmb3JtfSk7XG4gKlxuICogc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAqICAgdW5zdWJzY3JpYmUoKTtcbiAqIH0sIDMwMDApXG4gKiBgYGBcblxuICogVXNhZ2UgLSBvYmplY3RUcmFuc2Zvcm06XG4gKiBgYGBcbiAqIHZhciB1bnN1YnNjcmliZSA9IGRzY2Muc3Vic2NyaWJlVG9EYXRhKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAqICAgY29uc29sZS5sb2cobWVzc2FnZS50YWJsZXMpXG4gKiAgIGNvbnNvbGUubG9nKG1lc3NhZ2UuZmllbGRzKVxuICogICBjb25zb2xlLmxvZyhtZXNzYWdlLnN0eWxlKVxuICogfSwge3RyYW5zZm9ybTogZHNjYy5vYmplY3RUcmFuc2Zvcm19KTtcbiAqXG4gKiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICogICB1bnN1YnNjcmliZSgpO1xuICogfSwgMzAwMClcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlVG9EYXRhID0gPFQ+KFxuICBjYjogKGNvbXBvbmVudERhdGE6IFQpID0+IHZvaWQsXG4gIG9wdGlvbnM6IFN1YnNjcmlwdGlvbnNPcHRpb25zPFQ+XG4pOiAoKCkgPT4gdm9pZCkgPT4ge1xuICBpZiAoaXNWYWxpZFRyYW5zZm9ybShvcHRpb25zLnRyYW5zZm9ybSkpIHtcbiAgICBjb25zdCBvbk1lc3NhZ2UgPSAobWVzc2FnZTogUG9zdE1lc3NhZ2UpID0+IHtcbiAgICAgIGlmIChtZXNzYWdlLmRhdGEudHlwZSA9PT0gTWVzc2FnZVR5cGUuUkVOREVSKSB7XG4gICAgICAgIGNiKG9wdGlvbnMudHJhbnNmb3JtKG1lc3NhZ2UuZGF0YSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBgTWVzc2FnZVR5cGU6ICR7XG4gICAgICAgICAgICBtZXNzYWdlLmRhdGEudHlwZVxuICAgICAgICAgIH0gaXMgbm90IHN1cHBvcnRlZCBieSB0aGlzIHZlcnNpb24gb2YgdGhlIGxpYnJhcnkuYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpO1xuICAgIGNvbnN0IGNvbXBvbmVudElkID0gZ2V0Q29tcG9uZW50SWQoKTtcbiAgICAvLyBUZWxsIERhdGFTdHVkaW8gdGhhdCB0aGUgdml6IGlzIHJlYWR5IHRvIGdldCBldmVudHMuXG4gICAgY29uc3Qgdml6UmVhZHlNZXNzYWdlOiBWaXpSZWFkeU1lc3NhZ2UgPSB7XG4gICAgICBjb21wb25lbnRJZCxcbiAgICAgIHR5cGU6IFRvRFNNZXNzYWdlVHlwZS5WSVpfUkVBRFksXG4gICAgfTtcbiAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHZpelJlYWR5TWVzc2FnZSwgJyonKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihgT25seSB0aGUgYnVpbHQgaW4gdHJhbnNmb3JtIGZ1bmN0aW9ucyBhcmUgc3VwcG9ydGVkLmApO1xuICB9XG59O1xuXG4vKlxuICogRG9lcyB0aGUgdGhpbmcgdGhhdCBpbnRlcmFjdGlvbnMgc2hvdWxkIGRvLlxuICovXG5leHBvcnQgY29uc3Qgc2VuZEludGVyYWN0aW9uOiBTZW5kSW50ZXJhY3Rpb24gPSAoXG4gIGFjdGlvbklkLFxuICBpbnRlcmFjdGlvbixcbiAgZGF0YVxuKSA9PiB7XG4gIGNvbnN0IGNvbXBvbmVudElkID0gZ2V0Q29tcG9uZW50SWQoKTtcbiAgY29uc3QgaW50ZXJhY3Rpb25NZXNzYWdlOiBJbnRlcmFjdGlvbk1lc3NhZ2UgPSB7XG4gICAgdHlwZTogVG9EU01lc3NhZ2VUeXBlLklOVEVSQUNUSU9OLFxuICAgIGlkOiBhY3Rpb25JZCxcbiAgICBkYXRhLFxuICAgIGNvbXBvbmVudElkLFxuICB9O1xuICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKGludGVyYWN0aW9uTWVzc2FnZSwgJyonKTtcbn07XG5cbi8qXG4gKiBDbGVhcnMgYW4gaW50ZXJhY3Rpb25cbiAqL1xuXG5leHBvcnQgY29uc3QgY2xlYXJJbnRlcmFjdGlvbjogQ2xlYXJJbnRlcmFjdGlvbiA9IChhY3Rpb25JZCwgaW50ZXJhY3Rpb24pID0+IHtcbiAgc2VuZEludGVyYWN0aW9uKGFjdGlvbklkLCBpbnRlcmFjdGlvbiwgdW5kZWZpbmVkKTtcbn07XG4iLCIvKiFcbiAgQGxpY2Vuc2VcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmltcG9ydCB7Y2xlYXJJbnRlcmFjdGlvbn0gZnJvbSAnLic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9zdE1lc3NhZ2UgZXh0ZW5kcyBNZXNzYWdlRXZlbnQge1xuICBkYXRhOiBNZXNzYWdlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2Uge1xuICAvKipcbiAgICogVGhlIG1lc3NhZ2UgdHlwZS5cbiAgICovXG4gIHR5cGU6IE1lc3NhZ2VUeXBlO1xuICAvKipcbiAgICogVGhlIGNvbmZpZ3VyYXRpb24gc3RhdGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbmZpZzogQ29uZmlnO1xuICAvKipcbiAgICogQSBsaXN0IG9mIGFsbCB1c2VyIHNlbGVjdGVkIGZpZWxkcy5cbiAgICovXG4gIGZpZWxkczogRmllbGRbXTtcbiAgLyoqXG4gICAqIFRoZSBkYXRhIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGRhdGEgY29uZmlnIHN0YXRlIG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBkYXRhUmVzcG9uc2U6IERhdGFSZXNwb25zZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWcge1xuICAvKipcbiAgICogVGhlIGRhdGEgY29uZmlnIGRlZmluZWQgZm9yIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBkYXRhOiBDb25maWdEYXRhW107XG4gIC8qKlxuICAgKiBUaGUgc3R5bGUgZWxlbWVudHMgcmVxdWlyZWQgYW5kIHN1cHBvcnRlZCBieSB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgc3R5bGU6IENvbmZpZ1N0eWxlW107XG4gIHRoZW1lU3R5bGU/OiBDb25maWdUaGVtZVN0eWxlO1xuICBpbnRlcmFjdGlvbnM6IERTSW50ZXJhY3Rpb25EYXRhW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmllbGQge1xuICAvKipcbiAgICogVGhlIElEIG9mIHRoZSBmaWVsZC5cbiAgICovXG4gIGlkOiBGaWVsZElkO1xuICAvKipcbiAgICogVGhlIHVzZXItZnJpZW5kbHkgbmFtZSBvZiB0aGUgZmllbGQuXG4gICAqL1xuICBuYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgdXNlci1mcmllbmRseSBkZXNjcmlwdGlvbiBvZiB0aGUgZmllbGQuXG4gICAqL1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBmaWVsZCB0eXBlLlxuICAgKi9cbiAgdHlwZTogRmllbGRUeXBlO1xuICAvKipcbiAgICogVGhlIGZpZWxkIGNvbmNlcHQuXG4gICAqL1xuICBjb25jZXB0OiBDb25jZXB0VHlwZTtcbn1cblxuZXhwb3J0IGVudW0gQ29uY2VwdFR5cGUge1xuICBNRVRSSUMgPSAnTUVUUklDJyxcbiAgRElNRU5TSU9OID0gJ0RJTUVOU0lPTicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVJlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFRoZSBsaXN0IG9mIHRhYmxlcyBmb3IgdGhlIGN1cnJlbnQgZGF0YSBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgdGFibGVzOiBUYWJsZVtdO1xufVxuXG5leHBvcnQgZW51bSBNZXNzYWdlVHlwZSB7XG4gIFJFTkRFUiA9ICdSRU5ERVInLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0RhdGEge1xuICAvKipcbiAgICogVGhlIElEIG9mIHRoZSBkYXRhIHNlY3Rpb24uXG4gICAqXG4gICAqIFRoaXMgc2hvdWxkIGJlIGEgbm9uLWVtcHR5IHN0cmluZyB3aXRoIG5vIHNwYWNlcy5cbiAgICovXG4gIGlkOiBDb25maWdEYXRhSWQ7XG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgZm9yIHRoZSBkYXRhIHNlY3Rpb24uXG4gICAqL1xuICBsYWJlbDogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGRhdGEgZWxlbWVudHMgdG8gcmVuZGVyLlxuICAgKi9cbiAgZWxlbWVudHM6IENvbmZpZ0RhdGFFbGVtZW50W107XG59XG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1N0eWxlIHtcbiAgLyoqXG4gICAqIFRoZSBJRCBvZiB0aGUgc3R5bGUgc2VjdGlvbi5cbiAgICovXG4gIGlkOiBDb25maWdTdHlsZUlkO1xuICAvKipcbiAgICogVGhlIGhlYWRpbmcgZm9yIHRoZSBzdHlsZSBzZWN0aW9uLlxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBzdHlsZSBlbGVtZW50cyB0byByZW5kZXIuXG4gICAqL1xuICBlbGVtZW50czogQ29uZmlnU3R5bGVFbGVtZW50W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnVGhlbWVTdHlsZSB7XG4gIHRoZW1lRmlsbENvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgIHRoZW1lUmVmPzogVGhlbWVSZWZJbmRleDtcbiAgfTtcbiAgdGhlbWVGb250Q29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gICAgdGhlbWVSZWY/OiBUaGVtZVJlZkluZGV4O1xuICB9O1xuICB0aGVtZUFjY2VudEZpbGxDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICB0aGVtZVJlZj86IFRoZW1lUmVmSW5kZXg7XG4gIH07XG4gIHRoZW1lQWNjZW50Rm9udENvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgIHRoZW1lUmVmPzogVGhlbWVSZWZJbmRleDtcbiAgfTtcbiAgdGhlbWVGb250RmFtaWx5OiBzdHJpbmc7XG4gIHRoZW1lQWNjZW50Rm9udEZhbWlseTogc3RyaW5nO1xuICB0aGVtZUluY3JlYXNlQ29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gIH07XG4gIHRoZW1lRGVjcmVhc2VDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgfTtcbiAgdGhlbWVHcmlkQ29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gIH07XG4gIHRoZW1lU2VyaWVzQ29sb3I6IEFycmF5PHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gICAgdGhlbWVSZWY/OiBUaGVtZVJlZkluZGV4O1xuICAgIHNlcmllc1JlZjogU2VyaWVzUmVmSW5kZXg7XG4gIH0+O1xufVxuXG5pbnRlcmZhY2UgVGhlbWVSZWZJbmRleCB7XG4gIGluZGV4OiBudW1iZXI7XG59XG5pbnRlcmZhY2UgU2VyaWVzUmVmSW5kZXgge1xuICBpbmRleDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRoZW1lU3R5bGUge1xuICB0aGVtZUZpbGxDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICB0aGVtZVJlZj86IFRoZW1lUmVmSW5kZXg7XG4gIH07XG4gIHRoZW1lRm9udENvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgIHRoZW1lUmVmPzogVGhlbWVSZWZJbmRleDtcbiAgfTtcbiAgdGhlbWVBY2NlbnRGaWxsQ29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gICAgdGhlbWVSZWY/OiBUaGVtZVJlZkluZGV4O1xuICB9O1xuICB0aGVtZUFjY2VudEZvbnRDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICB0aGVtZVJlZj86IFRoZW1lUmVmSW5kZXg7XG4gIH07XG4gIHRoZW1lRm9udEZhbWlseTogc3RyaW5nO1xuICB0aGVtZUFjY2VudEZvbnRGYW1pbHk6IHN0cmluZztcbiAgdGhlbWVJbmNyZWFzZUNvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICB9O1xuICB0aGVtZURlY3JlYXNlQ29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gIH07XG4gIHRoZW1lR3JpZENvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICB9O1xuICB0aGVtZVNlcmllc0NvbG9yOiBBcnJheTx7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgIHRoZW1lUmVmPzogVGhlbWVSZWZJbmRleDtcbiAgICBzZXJpZXNSZWY6IFNlcmllc1JlZkluZGV4O1xuICB9Pjtcbn1cblxuZXhwb3J0IGVudW0gRmllbGRUeXBlIHtcbiAgWUVBUiA9ICdZRUFSJyxcbiAgWUVBUl9RVUFSVEVSID0gJ1lFQVJfUVVBUlRFUicsXG4gIFlFQVJfTU9OVEggPSAnWUVBUl9NT05USCcsXG4gIFlFQVJfV0VFSyA9ICdZRUFSX1dFRUsnLFxuICBZRUFSX01PTlRIX0RBWSA9ICdZRUFSX01PTlRIX0RBWScsXG4gIFlFQVJfTU9OVEhfREFZX0hPVVIgPSAnWUVBUl9NT05USF9EQVlfSE9VUicsXG4gIFFVQVJURVIgPSAnUVVBUlRFUicsXG4gIE1PTlRIID0gJ01PTlRIJyxcbiAgV0VFSyA9ICdXRUVLJyxcbiAgTU9OVEhfREFZID0gJ01PTlRIX0RBWScsXG4gIERBWV9PRl9XRUVLID0gJ0RBWV9PRl9XRUVLJyxcbiAgREFZID0gJ0RBWScsXG4gIEhPVVIgPSAnSE9VUicsXG4gIE1JTlVURSA9ICdNSU5VVEUnLFxuICBEVVJBVElPTiA9ICdEVVJBVElPTicsXG4gIENPVU5UUlkgPSAnQ09VTlRSWScsXG4gIENPVU5UUllfQ09ERSA9ICdDT1VOVFJZX0NPREUnLFxuICBDT05USU5FTlQgPSAnQ09OVElORU5UJyxcbiAgQ09OVElORU5UX0NPREUgPSAnQ09OVElORU5UX0NPREUnLFxuICBTVUJfQ09OVElORU5UID0gJ1NVQl9DT05USU5FTlQnLFxuICBTVUJfQ09OVElORU5UX0NPREUgPSAnU1VCX0NPTlRJTkVOVF9DT0RFJyxcbiAgUkVHSU9OID0gJ1JFR0lPTicsXG4gIFJFR0lPTl9DT0RFID0gJ1JFR0lPTl9DT0RFJyxcbiAgQ0lUWSA9ICdDSVRZJyxcbiAgQ0lUWV9DT0RFID0gJ0NJVFlfQ09ERScsXG4gIE1FVFJPX0NPREUgPSAnTUVUUk9fQ09ERScsXG4gIExBVElUVURFX0xPTkdJVFVERSA9ICdMQVRJVFVERV9MT05HSVRVREUnLFxuICBOVU1CRVIgPSAnTlVNQkVSJyxcbiAgUEVSQ0VOVCA9ICdQRVJDRU5UJyxcbiAgVEVYVCA9ICdURVhUJyxcbiAgQk9PTEVBTiA9ICdCT09MRUFOJyxcbiAgVVJMID0gJ1VSTCcsXG4gIElNQUdFID0gJ0lNQUdFJyxcbiAgQ1VSUkVOQ1lfQUVEID0gJ0NVUlJFTkNZX0FFRCcsXG4gIENVUlJFTkNZX0FMTCA9ICdDVVJSRU5DWV9BTEwnLFxuICBDVVJSRU5DWV9BUlMgPSAnQ1VSUkVOQ1lfQVJTJyxcbiAgQ1VSUkVOQ1lfQVVEID0gJ0NVUlJFTkNZX0FVRCcsXG4gIENVUlJFTkNZX0JEVCA9ICdDVVJSRU5DWV9CRFQnLFxuICBDVVJSRU5DWV9CR04gPSAnQ1VSUkVOQ1lfQkdOJyxcbiAgQ1VSUkVOQ1lfQk9CID0gJ0NVUlJFTkNZX0JPQicsXG4gIENVUlJFTkNZX0JSTCA9ICdDVVJSRU5DWV9CUkwnLFxuICBDVVJSRU5DWV9DQUQgPSAnQ1VSUkVOQ1lfQ0FEJyxcbiAgQ1VSUkVOQ1lfQ0RGID0gJ0NVUlJFTkNZX0NERicsXG4gIENVUlJFTkNZX0NIRiA9ICdDVVJSRU5DWV9DSEYnLFxuICBDVVJSRU5DWV9DTFAgPSAnQ1VSUkVOQ1lfQ0xQJyxcbiAgQ1VSUkVOQ1lfQ05ZID0gJ0NVUlJFTkNZX0NOWScsXG4gIENVUlJFTkNZX0NPUCA9ICdDVVJSRU5DWV9DT1AnLFxuICBDVVJSRU5DWV9DUkMgPSAnQ1VSUkVOQ1lfQ1JDJyxcbiAgQ1VSUkVOQ1lfQ1pLID0gJ0NVUlJFTkNZX0NaSycsXG4gIENVUlJFTkNZX0RLSyA9ICdDVVJSRU5DWV9ES0snLFxuICBDVVJSRU5DWV9ET1AgPSAnQ1VSUkVOQ1lfRE9QJyxcbiAgQ1VSUkVOQ1lfRUdQID0gJ0NVUlJFTkNZX0VHUCcsXG4gIENVUlJFTkNZX0VUQiA9ICdDVVJSRU5DWV9FVEInLFxuICBDVVJSRU5DWV9FVVIgPSAnQ1VSUkVOQ1lfRVVSJyxcbiAgQ1VSUkVOQ1lfR0JQID0gJ0NVUlJFTkNZX0dCUCcsXG4gIENVUlJFTkNZX0hLRCA9ICdDVVJSRU5DWV9IS0QnLFxuICBDVVJSRU5DWV9IUksgPSAnQ1VSUkVOQ1lfSFJLJyxcbiAgQ1VSUkVOQ1lfSFVGID0gJ0NVUlJFTkNZX0hVRicsXG4gIENVUlJFTkNZX0lEUiA9ICdDVVJSRU5DWV9JRFInLFxuICBDVVJSRU5DWV9JTFMgPSAnQ1VSUkVOQ1lfSUxTJyxcbiAgQ1VSUkVOQ1lfSU5SID0gJ0NVUlJFTkNZX0lOUicsXG4gIENVUlJFTkNZX0lSUiA9ICdDVVJSRU5DWV9JUlInLFxuICBDVVJSRU5DWV9JU0sgPSAnQ1VSUkVOQ1lfSVNLJyxcbiAgQ1VSUkVOQ1lfSk1EID0gJ0NVUlJFTkNZX0pNRCcsXG4gIENVUlJFTkNZX0pQWSA9ICdDVVJSRU5DWV9KUFknLFxuICBDVVJSRU5DWV9LUlcgPSAnQ1VSUkVOQ1lfS1JXJyxcbiAgQ1VSUkVOQ1lfTEtSID0gJ0NVUlJFTkNZX0xLUicsXG4gIENVUlJFTkNZX0xUTCA9ICdDVVJSRU5DWV9MVEwnLFxuICBDVVJSRU5DWV9NTlQgPSAnQ1VSUkVOQ1lfTU5UJyxcbiAgQ1VSUkVOQ1lfTVZSID0gJ0NVUlJFTkNZX01WUicsXG4gIENVUlJFTkNZX01YTiA9ICdDVVJSRU5DWV9NWE4nLFxuICBDVVJSRU5DWV9NWVIgPSAnQ1VSUkVOQ1lfTVlSJyxcbiAgQ1VSUkVOQ1lfTk9LID0gJ0NVUlJFTkNZX05PSycsXG4gIENVUlJFTkNZX05aRCA9ICdDVVJSRU5DWV9OWkQnLFxuICBDVVJSRU5DWV9QQUIgPSAnQ1VSUkVOQ1lfUEFCJyxcbiAgQ1VSUkVOQ1lfUEVOID0gJ0NVUlJFTkNZX1BFTicsXG4gIENVUlJFTkNZX1BIUCA9ICdDVVJSRU5DWV9QSFAnLFxuICBDVVJSRU5DWV9QS1IgPSAnQ1VSUkVOQ1lfUEtSJyxcbiAgQ1VSUkVOQ1lfUExOID0gJ0NVUlJFTkNZX1BMTicsXG4gIENVUlJFTkNZX1JPTiA9ICdDVVJSRU5DWV9ST04nLFxuICBDVVJSRU5DWV9SU0QgPSAnQ1VSUkVOQ1lfUlNEJyxcbiAgQ1VSUkVOQ1lfUlVCID0gJ0NVUlJFTkNZX1JVQicsXG4gIENVUlJFTkNZX1NBUiA9ICdDVVJSRU5DWV9TQVInLFxuICBDVVJSRU5DWV9TRUsgPSAnQ1VSUkVOQ1lfU0VLJyxcbiAgQ1VSUkVOQ1lfU0dEID0gJ0NVUlJFTkNZX1NHRCcsXG4gIENVUlJFTkNZX1RIQiA9ICdDVVJSRU5DWV9USEInLFxuICBDVVJSRU5DWV9UUlkgPSAnQ1VSUkVOQ1lfVFJZJyxcbiAgQ1VSUkVOQ1lfVFdEID0gJ0NVUlJFTkNZX1RXRCcsXG4gIENVUlJFTkNZX1RaUyA9ICdDVVJSRU5DWV9UWlMnLFxuICBDVVJSRU5DWV9VQUggPSAnQ1VSUkVOQ1lfVUFIJyxcbiAgQ1VSUkVOQ1lfVVNEID0gJ0NVUlJFTkNZX1VTRCcsXG4gIENVUlJFTkNZX1VZVSA9ICdDVVJSRU5DWV9VWVUnLFxuICBDVVJSRU5DWV9WRUYgPSAnQ1VSUkVOQ1lfVkVGJyxcbiAgQ1VSUkVOQ1lfVk5EID0gJ0NVUlJFTkNZX1ZORCcsXG4gIENVUlJFTkNZX1lFUiA9ICdDVVJSRU5DWV9ZRVInLFxuICBDVVJSRU5DWV9aQVIgPSAnQ1VSUkVOQ1lfWkFSJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJsZSB7XG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiB0aGUgdGFibGUuXG4gICAqL1xuICBpZDogVGFibGVUeXBlO1xuICAvKipcbiAgICogVGhlIFtbRmllbGRJZF1dcyBvZiB0aGUgZmllbGRzIHNlbGVjdGVkIGJ5IHRoZSB1c2VyLlxuICAgKi9cbiAgZmllbGRzOiBGaWVsZElkW107XG4gIC8qKlxuICAgKiBUaGUgcm93cyBvZiBkYXRhIFZhbHVlcy5cbiAgICovXG4gIHJvd3M6IERTUm93W107XG59XG5cbi8qKlxuICogQSByb3cgb2YgdmFsdWVzLlxuICpcbiAqIFRoZSBvcmRlciBvZiB2YWx1ZXMgY29ycmVzcG9uZHMgdG8gdGhlIG9yZGVyIG9mIHRoZSBmaWVsZHMgb2YgYWxsIGRhdGEgZWxlbWVudCBmaWVsZCBvYmplY3RzLlxuICovXG5cbmV4cG9ydCB0eXBlIERTUm93ID0gRFNSb3dWYWx1ZVtdO1xuLyoqXG4gKiBBIHZhbHVlIGZvciBhbiBlbnRyeSBpbiBhIERTUm93LlxuICovXG5leHBvcnQgdHlwZSBEU1Jvd1ZhbHVlID0gc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbjtcblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdEYXRhRWxlbWVudE1ldHJpYyB7XG4gIC8qKlxuICAgKiBUaGUgZGF0YSBlbGVtZW50IHR5cGUgdG8gcmVuZGVyLlxuICAgKi9cbiAgdHlwZTogQ29uZmlnRGF0YUVsZW1lbnRUeXBlLk1FVFJJQztcbiAgLyoqXG4gICAqIFRoZSBJRCBvZiB0aGUgbWV0cmljLlxuICAgKlxuICAgKiBUaGlzIHNob3VsZCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcgd2l0aCBubyBzcGFjZXMuXG4gICAqL1xuICBpZDogQ29uZmlnRGF0YUVsZW1lbnRJZDtcbiAgLyoqXG4gICAqIFRoZSB0b29sdGlwIG9yIGxhYmVsIGZvciB0aGUgbWV0cmljLlxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBkYXRhIG9wdGlvbnMgZm9yIGEgTWV0cmljLlxuICAgKi9cbiAgb3B0aW9uczoge1xuICAgIC8qKlxuICAgICAqIFRoZSBtaW5pbXVtIG51bWJlciBvZiBtZXRyaWNzIHN1cHBvcnRlZC5cbiAgICAgKi9cbiAgICBtaW4/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIG1heGltdW0gbnVtYmVyIG9mIG1ldHJpY3Mgc3VwcG9ydGVkLlxuICAgICAqL1xuICAgIG1heD86IG51bWJlcjtcbiAgfTtcbiAgLyoqXG4gICAqIFRoZSBsaXN0IG9mIFtbRmllbGRJZF1dcyBzZWxlY3RlZCBieSB0aGUgdXNlci5cbiAgICovXG4gIHZhbHVlOiBGaWVsZElkW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnRGF0YUVsZW1lbnREaW1lbnNpb24ge1xuICAvKipcbiAgICogVGhlIGRhdGEgZWxlbWVudCB0eXBlIHRvIHJlbmRlci5cbiAgICovXG4gIHR5cGU6IENvbmZpZ0RhdGFFbGVtZW50VHlwZS5ESU1FTlNJT047XG4gIC8qKlxuICAgKiBUaGUgSUQgb2YgdGhlIGRpbWVuc2lvbi5cbiAgICpcbiAgICogVGhpcyBzaG91bGQgYmUgYSBub24tZW1wdHkgc3RyaW5nIHdpdGggbm8gc3BhY2VzLlxuICAgKi9cbiAgaWQ6IENvbmZpZ0RhdGFFbGVtZW50SWQ7XG4gIC8qKlxuICAgKiBUaGUgdG9vbHRpcCBvciBsYWJlbCBmb3IgdGhlIGRpbWVuc2lvbi5cbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZGF0YSBvcHRpb25zIGZvciBhIERpbWVuc2lvbi5cbiAgICovXG4gIG9wdGlvbnM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgbWluaW11bSBudW1iZXIgb2YgZGltZW5zaW9ucyBzdXBwb3J0ZWQuXG4gICAgICovXG4gICAgbWluPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBkaW1lbnNpb25zIHN1cHBvcnRlZC5cbiAgICAgKi9cbiAgICBtYXg/OiBudW1iZXI7XG4gICAgc3VwcG9ydGVkVHlwZXM/OiBBcnJheTwnVElNRScgfCAnR0VPJyB8ICdERUZBVUxUJz47XG4gIH07XG4gIC8qKlxuICAgKiBUaGUgbGlzdCBvZiBbW0ZpZWxkSWRdXXMgc2VsZWN0ZWQgYnkgdGhlIHVzZXIuXG4gICAqL1xuICB2YWx1ZTogRmllbGRJZFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0RhdGFFbGVtZW50TWF4UmVzdWx0cyB7XG4gIC8qKlxuICAgKiBUaGUgZGF0YSBlbGVtZW50IHR5cGUgdG8gcmVuZGVyLlxuICAgKi9cbiAgdHlwZTogQ29uZmlnRGF0YUVsZW1lbnRUeXBlLk1BWF9SRVNVTFRTO1xuICAvKipcbiAgICogVGhlIElEIG9mIHRoZSBtYXggcmVzdWx0cy5cbiAgICpcbiAgICogVGhpcyBzaG91bGQgYmUgYSBub24tZW1wdHkgc3RyaW5nIHdpdGggbm8gc3BhY2VzLlxuICAgKi9cbiAgaWQ6IENvbmZpZ0RhdGFFbGVtZW50SWQ7XG4gIC8qKlxuICAgKiBUaGUgdG9vbHRpcCBvciBsYWJlbCBmb3IgdGhlIG1heCByZXN1bHRzLlxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBkYXRhIG9wdGlvbnMgZm9yIGEgTWF4IFJlc3VsdHMuXG4gICAqL1xuICBvcHRpb25zOiB7XG4gICAgLyoqXG4gICAgICogVGhlIG1heGltdW0gbnVtYmVyIG9mIHJvd3MuXG4gICAgICovXG4gICAgbWF4OiBudW1iZXI7XG4gIH07XG59XG5cbmV4cG9ydCB0eXBlIENvbmZpZ0RhdGFFbGVtZW50ID1cbiAgfCBDb25maWdEYXRhRWxlbWVudE1heFJlc3VsdHNcbiAgfCBDb25maWdEYXRhRWxlbWVudE1ldHJpY1xuICB8IENvbmZpZ0RhdGFFbGVtZW50RGltZW5zaW9uO1xuXG4vLyBUT0RPOiB0aGlzIHNob3VsZCBldmVudHVhbGx5IGFsd2F5cyBiZSBhIHZhbHVlXG5leHBvcnQgdHlwZSBDb25maWdTdHlsZVZhbHVlID0gc3RyaW5nIHwge30gfCBib29sZWFuIHwge2NvbG9yOiBzdHJpbmd9O1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1N0eWxlRWxlbWVudCB7XG4gIC8qKlxuICAgKiBUaGUgc3R5bGUgZWxlbWVudCB0eXBlIHRvIHJlbmRlci5cbiAgICovXG4gIHR5cGU6IENvbmZpZ1N0eWxlRWxlbWVudFR5cGU7XG4gIC8qKlxuICAgKiBUaGUgSUQgb2YgdGhlIHN0eWxlIGVsZW1lbnQuXG4gICAqXG4gICAqIFRoaXMgc2hvdWxkIGJlIGEgbm9uLWVtcHR5IHN0cmluZyB3aXRoIG5vIHNwYWNlcy5cbiAgICovXG4gIGlkOiBDb25maWdTdHlsZUVsZW1lbnRJZDtcbiAgLyoqXG4gICAqIFRoZSB0b29sdGlwIG9yIGxhYmVsIGZvciB0aGUgc3R5bGUgZWxlbWVudC5cbiAgICpcbiAgICogVGhpcyBpcyB0aGUgbGFiZWwgdGV4dCBmb3IgYSBgQ0hFQ0tCT1hgIGVsZW1lbnQgYW5kIHRoZSB0b29sdGlwIHRleHQgZm9yIG90aGVyIGVsZW1lbnRzLlxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IHZhbHVlIGZvciB0aGUgc3R5bGUgZWxlbWVudC5cbiAgICpcbiAgICogSW52YWxpZCB2YWx1ZXMgd2lsbCBiZSBpZ25vcmVkLlxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBDb25maWdTdHlsZVZhbHVlO1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIHN0eWxlIGVsZW1lbnQuXG4gICAqL1xuICB2YWx1ZTogQ29uZmlnU3R5bGVWYWx1ZTtcbn1cbmV4cG9ydCBlbnVtIFRhYmxlVHlwZSB7XG4gIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gIENPTVBBUklTT04gPSAnQ09NUEFSSVNPTicsXG4gIFNVTU1BUlkgPSAnU1VNTUFSWScsXG59XG5cbmV4cG9ydCBlbnVtIENvbmZpZ0RhdGFFbGVtZW50VHlwZSB7XG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgbWV0cmljIGZpZWxkIGVsZW1lbnQuXG4gICAqL1xuICBNRVRSSUMgPSAnTUVUUklDJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSBkaW1lbnNpb24gZmllbGQgZWxlbWVudC5cbiAgICovXG4gIERJTUVOU0lPTiA9ICdESU1FTlNJT04nLFxuICAvKipcbiAgICogUmVuZGVycyBhIGRyb3Bkb3duIHRoYXQgYWZmZWN0cyB0aGUgbWF4aW11bSBudW1iZXIgb2YgcmVzdWx0cyByZXR1cm5lZC5cbiAgICovXG4gIE1BWF9SRVNVTFRTID0gJ01BWF9SRVNVTFRTJyxcbn1cblxuZXhwb3J0IGVudW0gQ29uZmlnU3R5bGVFbGVtZW50VHlwZSB7XG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgdGV4dCBpbnB1dCBib3guXG4gICAqL1xuICBURVhUSU5QVVQgPSAnVEVYVElOUFVUJyxcbiAgLyoqXG4gICAqIEEgc2luZ2xlIHNlbGVjdCBkcm9wZG93bi5cbiAgICovXG4gIFNFTEVDVF9TSU5HTEUgPSAnU0VMRUNUX1NJTkdMRScsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgY2hlY2tib3guXG4gICAqXG4gICAqIERlZmF1bHQgdmFsdWU6IGBmYWxzZWBcbiAgICovXG4gIENIRUNLQk9YID0gJ0NIRUNLQk9YJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGZvbnQgY29sb3Igc2VsZWN0b3IuXG4gICAqXG4gICAqIEFjY2VwdGFibGUgZGVmYXVsdCB2YWx1ZXM6IEhFWCBjb2xvciB2YWx1ZS4gRS5nLiBgXCIjODg4ODg4XCJgLlxuICAgKlxuICAgKiBEZWZhdWx0IHZhbHVlOiBgXCIjMDAwXCJgLlxuICAgKi9cbiAgRk9OVF9DT0xPUiA9ICdGT05UX0NPTE9SJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGZvbnQgc2l6ZSBzZWxlY3Rvci5cbiAgICpcbiAgICogRGVmYXVsdCB2YWx1ZTogYFwiMTRweFwiYC5cbiAgICovXG4gIEZPTlRfU0laRSA9ICdGT05UX1NJWkUnLFxuICAvKipcbiAgICogUmVuZGVycyB0aGUgZm9udCBmYW1pbHkgc2VsZWN0b3IuXG4gICAqXG4gICAqIERlZmF1bHQgdmFsdWU6IGBcIlwiYFxuICAgKi9cbiAgRk9OVF9GQU1JTFkgPSAnRk9OVF9GQU1JTFknLFxuICAvKipcbiAgICogUmVuZGVycyBhIGZpbGwgY29sb3Igc2VsZWN0b3IuXG4gICAqXG4gICAqIEFjY2VwdGFibGUgZGVmYXVsdCB2YWx1ZXM6IEhFWCBjb2xvciB2YWx1ZS5cbiAgICovXG4gIEZJTExfQ09MT1IgPSAnRklMTF9DT0xPUicsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgYm9yZGVyIGNvbG9yIHNlbGVjdG9yLlxuICAgKlxuICAgKiBBY2NlcHRhYmxlIGRlZmF1bHQgdmFsdWVzOiBIRVggY29sb3IgdmFsdWUuXG4gICAqL1xuICBCT1JERVJfQ09MT1IgPSAnQk9SREVSX0NPTE9SJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYW4gYXhpcyBjb2xvciBzZWxlY3Rvci5cbiAgICpcbiAgICogQWNjZXB0YWJsZSBkZWZhdWx0IHZhbHVlczogSEVYIGNvbG9yIHZhbHVlLlxuICAgKi9cbiAgQVhJU19DT0xPUiA9ICdBWElTX0NPTE9SJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSBncmlkIGNvbG9yIHNlbGVjdG9yLlxuICAgKlxuICAgKiBBY2NlcHRhYmxlIGRlZmF1bHQgdmFsdWVzOiBIRVggY29sb3IgdmFsdWUuXG4gICAqL1xuICBHUklEX0NPTE9SID0gJ0dSSURfQ09MT1InLFxuICAvKipcbiAgICogUmVuZGVycyBhbiBvcGFjaXR5IHNlbGVjdG9yLlxuICAgKi9cbiAgT1BBQ0lUWSA9ICdPUEFDSVRZJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSBsaW5lIHdlaWdodCBwaWNrZXIuXG4gICAqL1xuICBMSU5FX1dFSUdIVCA9ICdMSU5FX1dFSUdIVCcsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgbGluZSBzdHlsZSBwaWNrZXIuXG4gICAqXG4gICAqIEFjY2VwdGFibGUgZGVmYXVsdCB2YWx1ZXM6IGBcInNvbGlkXCJgLCBgXCJkYXNoZWRcImAsIGBcImRvdHRlZFwiYCwgb3IgYFwiZG91YmxlXCJgLlxuICAgKi9cbiAgTElORV9TVFlMRSA9ICdMSU5FX1NUWUxFJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSBib3JkZXIgcmFkaXVzIHNlbGVjdG9yLlxuICAgKi9cbiAgQk9SREVSX1JBRElVUyA9ICdCT1JERVJfUkFESVVTJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYW4gaW50ZXJ2YWwgc2VsZWN0b3IuXG4gICAqL1xuICBJTlRFUlZBTCA9ICdJTlRFUlZBTCcsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgcmFkaW8gc2VsZWN0IHdpdGggcHJlLWRlZmluZWQgdmFsdWVzLlxuICAgKi9cbiAgU0VMRUNUX1JBRElPID0gJ1NFTEVDVF9SQURJTycsXG59XG5cbmV4cG9ydCB0eXBlIERTSW50ZXJhY3Rpb25EYXRhID0gRFNJbnRlcmFjdGlvbkZpbHRlckRhdGE7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRFNJbnRlcmFjdGlvbkZpbHRlckRhdGEge1xuICBzdXBwb3J0ZWRBY3Rpb25zOiBEU0ludGVyYWN0aW9uVHlwZVtdO1xuICBpZDogSW50ZXJhY3Rpb25JZDtcbiAgdmFsdWU6IERTSW50ZXJhY3Rpb25GaWx0ZXJWYWx1ZTtcbn1cblxuZXhwb3J0IGVudW0gRFNJbnRlcmFjdGlvblR5cGUge1xuICBGSUxURVIgPSAnRklMVEVSJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEU0ludGVyYWN0aW9uRmlsdGVyVmFsdWUge1xuICB0eXBlOiBEU0ludGVyYWN0aW9uVHlwZTtcbiAgZGF0YTogSW50ZXJhY3Rpb25EYXRhO1xufVxuXG4vLyBBbGlhc2VzXG5leHBvcnQgdHlwZSBGaWVsZElkID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgQ29uZmlnRGF0YUlkID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgQ29uZmlnU3R5bGVJZCA9IHN0cmluZztcbmV4cG9ydCB0eXBlIENvbmZpZ0RhdGFFbGVtZW50SWQgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBDb25maWdTdHlsZUVsZW1lbnRJZCA9IHN0cmluZztcblxuLy8gQ3VzdG9tIHR5cGVzIGZvciBMaWJyYXJ5XG5leHBvcnQgaW50ZXJmYWNlIFBhcnNlZEltYWdlIHtcbiAgb3JpZ2luYWxVcmw6IHN0cmluZztcbiAgcHJveGllZFVybD86IHN0cmluZztcbiAgYWx0VGV4dD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWVsZHNCeUlkIHtcbiAgLy8gQW4gaW5kZXhlZCBUeXBlIGNhbm5vdCBiZSBhIHR5cGUgYWxpYXMgOihcbiAgW2ZpZWxkSWQ6IHN0cmluZ106IEZpZWxkO1xufVxuXG5leHBvcnQgdHlwZSBQYXJzZWRSb3cgPSBQYXJzZWRSb3dWYWx1ZVtdO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJvd0J5Q29uZmlnSWQge1xuICBbY29uZmlnSWQ6IHN0cmluZ106IFBhcnNlZFJvdztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJsZXNCeVR5cGUge1xuICBbVGFibGVUeXBlLkRFRkFVTFRdOiBSb3dCeUNvbmZpZ0lkW107XG4gIFtUYWJsZVR5cGUuQ09NUEFSSVNPTl06IFJvd0J5Q29uZmlnSWRbXTtcbiAgW1RhYmxlVHlwZS5TVU1NQVJZXTogUm93QnlDb25maWdJZFtdO1xufVxuXG5leHBvcnQgdHlwZSBQYXJzZWRSb3dWYWx1ZSA9IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCBQYXJzZWRJbWFnZTtcblxuZXhwb3J0IHR5cGUgUm93SGVhZGluZyA9IEZpZWxkICYge2NvbmZpZ0lkOiBzdHJpbmd9O1xuZXhwb3J0IHR5cGUgUm93RW50cnkgPSBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuO1xuZXhwb3J0IHR5cGUgUm93ID0gUm93RW50cnlbXTtcblxuZXhwb3J0IGludGVyZmFjZSBGaWVsZHNCeUNvbmZpZ0lkIHtcbiAgW2NvbmZpZ0lkOiBzdHJpbmddOiBGaWVsZFtdO1xufVxuXG5leHBvcnQgdHlwZSBTdHlsZVRoZW1lID0gYW55O1xuZXhwb3J0IHR5cGUgU3R5bGVFbnRyeSA9IGFueTtcbmV4cG9ydCB0eXBlIFN0eWxlVmFsdWUgPSBTdHlsZVRoZW1lIHwgU3R5bGVFbnRyeTtcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZUJ5SWQge1xuICBbc3R5bGVJZDogc3RyaW5nXTogU3R5bGVWYWx1ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJsZURhdGEge1xuICBoZWFkZXJzOiBSb3dIZWFkaW5nW107XG4gIHJvd3M6IFJvd1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlcyB7XG4gIFtUYWJsZVR5cGUuREVGQVVMVF06IFRhYmxlRGF0YTtcbiAgW1RhYmxlVHlwZS5DT01QQVJJU09OXT86IFRhYmxlRGF0YTtcbiAgW1RhYmxlVHlwZS5TVU1NQVJZXT86IFRhYmxlRGF0YTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJsZUZvcm1hdCB7XG4gIGZpZWxkczogRmllbGRzQnlDb25maWdJZDtcbiAgc3R5bGU6IFN0eWxlQnlJZDtcbiAgdGFibGVzOiBUYWJsZXM7XG4gIHRoZW1lOiBUaGVtZVN0eWxlO1xuICBpbnRlcmFjdGlvbnM6IEludGVyYWN0aW9uc0J5SWQ7XG59XG5cbmV4cG9ydCB0eXBlIFRhYmxlVHJhbnNmb3JtID0gKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IFRhYmxlRm9ybWF0O1xuXG5leHBvcnQgdHlwZSBDb25maWdJZCA9IHN0cmluZztcblxuZXhwb3J0IGludGVyZmFjZSBTdWJzY3JpcHRpb25zT3B0aW9uczxUPiB7XG4gIHRyYW5zZm9ybTogKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IFQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0Um93IHtcbiAgW2NvbmZpZ0lkOiBzdHJpbmddOiBSb3dFbnRyeVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9iamVjdFRhYmxlcyB7XG4gIFtUYWJsZVR5cGUuREVGQVVMVF06IE9iamVjdFJvd1tdO1xuICBbVGFibGVUeXBlLkNPTVBBUklTT05dPzogT2JqZWN0Um93W11bXTtcbiAgW1RhYmxlVHlwZS5TVU1NQVJZXT86IE9iamVjdFJvd1tdW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0Rm9ybWF0IHtcbiAgZmllbGRzOiBGaWVsZHNCeUNvbmZpZ0lkO1xuICBzdHlsZTogU3R5bGVCeUlkO1xuICB0YWJsZXM6IE9iamVjdFRhYmxlcztcbiAgdGhlbWU6IFRoZW1lU3R5bGU7XG4gIGludGVyYWN0aW9uczogSW50ZXJhY3Rpb25zQnlJZDtcbn1cblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50SWQgPSBzdHJpbmc7XG5cbmV4cG9ydCB0eXBlIE9iamVjdFRyYW5zZm9ybSA9IChtZXNzYWdlOiBNZXNzYWdlKSA9PiBPYmplY3RGb3JtYXQ7XG5cbmV4cG9ydCBlbnVtIFRvRFNNZXNzYWdlVHlwZSB7XG4gIFZJWl9SRUFEWSA9ICd2aXpSZWFkeScsXG4gIElOVEVSQUNUSU9OID0gJ3ZpekFjdGlvbicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVml6UmVhZHlNZXNzYWdlIHtcbiAgdHlwZTogVG9EU01lc3NhZ2VUeXBlLlZJWl9SRUFEWTtcbiAgY29tcG9uZW50SWQ6IENvbXBvbmVudElkO1xufVxuXG4vLyBJbnRlcmFjdGlvbiBUeXBlc1xuZXhwb3J0IGludGVyZmFjZSBJbnRlcmFjdGlvbk1lc3NhZ2Uge1xuICB0eXBlOiBUb0RTTWVzc2FnZVR5cGUuSU5URVJBQ1RJT047XG4gIGlkOiBJbnRlcmFjdGlvbklkO1xuICBkYXRhOiBJbnRlcmFjdGlvbkRhdGE7XG4gIGNvbXBvbmVudElkOiBDb21wb25lbnRJZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZW5kSW50ZXJhY3Rpb24ge1xuICAvLyBUT0RPIC0gcmVtb3ZlIHRoaXMgb25jZSB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIGludGVyYWN0aW9uIHR5cGUuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBjYWxsYWJsZS10eXBlc1xuICAoXG4gICAgYWN0aW9uSWQ6IEludGVyYWN0aW9uSWQsXG4gICAgaW50ZXJhY3Rpb246IEludGVyYWN0aW9uVHlwZS5GSUxURVIsXG4gICAgZGF0YTogRmlsdGVySW50ZXJhY3Rpb25EYXRhXG4gICk6IHZvaWQ7XG4gIC8vIFRPRE8gLSBXaGVuIHRoZXJlIGFyZSBtb3JlIEludGVyYWN0aW9uIHR5cGVzLCB0aGUgbmV3IG9uZXMgc2hvdWxkIGJlIGFkZGVkIGhlcmUgd2l0aCB0aGVpciBvd24gc2lnbmF0dXJlLlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW50ZXJhY3Rpb24ge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgY2FsbGFibGUtdHlwZXNcbiAgKFxuICAgIGFjdGlvbklkOiBJbnRlcmFjdGlvbklkLFxuICAgIGludGVyYWN0aW9uOiBJbnRlcmFjdGlvblR5cGUuRklMVEVSLFxuICAgIGRhdGE6IHVuZGVmaW5lZFxuICApOiB2b2lkO1xufVxuXG5leHBvcnQgdHlwZSBDb25jZXB0SWQgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBGaWx0ZXJQYXJhbVZhbHVlID0gc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbjtcblxuZXhwb3J0IGludGVyZmFjZSBGaWx0ZXJJbnRlcmFjdGlvbkRhdGEge1xuICBjb25jZXB0czogQ29uY2VwdElkW107XG4gIHZhbHVlczogRmlsdGVyUGFyYW1WYWx1ZVtdW107XG59XG5cbmV4cG9ydCBlbnVtIEludGVyYWN0aW9uVHlwZSB7XG4gIEZJTFRFUiA9ICdGSUxURVInLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEludGVyYWN0aW9uVmFsdWUge1xuICB0eXBlOiBJbnRlcmFjdGlvblR5cGU7XG4gIGRhdGE6IEludGVyYWN0aW9uRGF0YTtcbn1cblxuZXhwb3J0IHR5cGUgSW50ZXJhY3Rpb25EYXRhID0gRmlsdGVySW50ZXJhY3Rpb25EYXRhO1xuXG5leHBvcnQgdHlwZSBJbnRlcmFjdGlvbklkID0gc3RyaW5nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEludGVyYWN0aW9uIHtcbiAgc3VwcG9ydGVkQWN0aW9uczogSW50ZXJhY3Rpb25UeXBlW107XG4gIHZhbHVlOiBJbnRlcmFjdGlvblZhbHVlIHwge307XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW50ZXJhY3Rpb25zQnlJZCB7XG4gIFtpbnRlcmFjdGlvbklkOiBzdHJpbmddOiBJbnRlcmFjdGlvbjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=