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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearInteraction = exports.sendInteraction = exports.subscribeToData = exports.objectTransform = exports.tableTransform = exports.fieldsByConfigId = exports.getComponentId = exports.getHeight = exports.getWidth = void 0;
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
var types_1 = __webpack_require__(/*! ./types */ "./src/types.ts");
// Make all exported types available to external users.
__exportStar(__webpack_require__(/*! ./types */ "./src/types.ts"), exports);
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
    var params = new URLSearchParams(window.location.search);
    if (params.get('dscId') !== null) {
        return params.get('dscId');
    }
    else {
        throw new Error('dscId must be in the query parameters. ' +
            'This is a bug in ds-component, please file a bug: ' +
            'https://github.com/googledatastudio/ds-component/issues/new');
    }
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
            objectTables[table.id] = objectTables[table.id].concat(objectRows);
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
 * Transform for date ranges
 */
var toDateRanges = function (message) {
    var dateRanges = message.dataResponse.dateRanges || [];
    var output = {};
    return dateRanges.reduce(function (inProgress, currentDSDateRange) {
        inProgress[currentDSDateRange.id] = {
            start: currentDSDateRange.start,
            end: currentDSDateRange.end,
        };
        return inProgress;
    }, output);
};
/* Transform for color maps */
var toColorsByDimension = function (message) {
    var colors = message.dataResponse.colorMap || {};
    return __assign({}, colors);
};
/**
 * The transform to use for data in a Table format. i.e. `[[1, 2, 3], [4, 5, 6]]`
 */
exports.tableTransform = function (message) { return ({
    tables: tableFormatTable(message),
    dateRanges: toDateRanges(message),
    fields: exports.fieldsByConfigId(message),
    style: flattenStyle(message),
    theme: themeStyle(message),
    interactions: transformDSInteraction(message),
    colorMap: toColorsByDimension(message),
}); };
/**
 * The transform to use for data in an object format. i.e. `[{name: 'john', views: 3}, {name: 'suzie', views: 5}]`
 */
exports.objectTransform = function (message) { return ({
    tables: objectFormatTable(message),
    dateRanges: toDateRanges(message),
    fields: exports.fieldsByConfigId(message),
    style: flattenStyle(message),
    theme: themeStyle(message),
    interactions: transformDSInteraction(message),
    colorMap: toColorsByDimension(message),
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

Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionType = exports.ToDSMessageType = exports.DSInteractionType = exports.ConfigStyleElementType = exports.ConfigDataElementType = exports.DateRangeType = exports.TableType = exports.FieldType = exports.MessageType = exports.ConceptType = void 0;
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
var DateRangeType;
(function (DateRangeType) {
    DateRangeType["DEFAULT"] = "DEFAULT";
    DateRangeType["COMPARISON"] = "COMPARISON";
})(DateRangeType = exports.DateRangeType || (exports.DateRangeType = {}));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kc2NjL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kc2NjL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RzY2MvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZHNjYy8uL3NyYy90eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7Ozs7Ozs7Ozs7O0VBZUU7QUFDRixtRUEyQ2lCO0FBRWpCLHVEQUF1RDtBQUN2RCw0RUFBd0I7QUFFeEI7Ozs7Ozs7O0dBUUc7QUFDVSxnQkFBUSxHQUFHLGNBQWMsZUFBUSxDQUFDLElBQUksQ0FBQyxXQUFX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aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJkc2NjXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRzY2NcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZHNjY1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvKiFcbiAgQGxpY2Vuc2VcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQge1xuICBDbGVhckludGVyYWN0aW9uLFxuICBDb25maWdEYXRhLFxuICBDb25maWdEYXRhRWxlbWVudCxcbiAgQ29uZmlnRGF0YUVsZW1lbnREaW1lbnNpb24sXG4gIENvbmZpZ0RhdGFFbGVtZW50TWV0cmljLFxuICBDb25maWdEYXRhRWxlbWVudFR5cGUsXG4gIENvbmZpZ0lkLFxuICBDb25maWdTdHlsZSxcbiAgQ29uZmlnU3R5bGVFbGVtZW50LFxuICBDb2xvcnNCeURpbWVuc2lvbixcbiAgRGF0ZVJhbmdlc0J5SWQsXG4gIERTSW50ZXJhY3Rpb25EYXRhLFxuICBEU0ludGVyYWN0aW9uVHlwZSxcbiAgRFNSb3dWYWx1ZSxcbiAgRmllbGQsXG4gIEZpZWxkSWQsXG4gIEZpZWxkc0J5Q29uZmlnSWQsXG4gIEZpZWxkc0J5SWQsXG4gIEludGVyYWN0aW9uLFxuICBJbnRlcmFjdGlvbk1lc3NhZ2UsXG4gIEludGVyYWN0aW9uc0J5SWQsXG4gIEludGVyYWN0aW9uVHlwZSxcbiAgTWVzc2FnZSxcbiAgTWVzc2FnZVR5cGUsXG4gIE9iamVjdFJvdyxcbiAgT2JqZWN0VGFibGVzLFxuICBPYmplY3RUcmFuc2Zvcm0sXG4gIFBhcnNlZEltYWdlLFxuICBQb3N0TWVzc2FnZSxcbiAgUm93LFxuICBSb3dIZWFkaW5nLFxuICBTZW5kSW50ZXJhY3Rpb24sXG4gIFN0eWxlQnlJZCxcbiAgU3Vic2NyaXB0aW9uc09wdGlvbnMsXG4gIFRhYmxlLFxuICBUYWJsZUZvcm1hdCxcbiAgVGFibGVzLFxuICBUYWJsZVRyYW5zZm9ybSxcbiAgVGFibGVUeXBlLFxuICBUaGVtZVN0eWxlLFxuICBUb0RTTWVzc2FnZVR5cGUsXG4gIFZpelJlYWR5TWVzc2FnZSxcbn0gZnJvbSAnLi90eXBlcyc7XG5cbi8vIE1ha2UgYWxsIGV4cG9ydGVkIHR5cGVzIGF2YWlsYWJsZSB0byBleHRlcm5hbCB1c2Vycy5cbmV4cG9ydCAqIGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHdpZHRoIChpbiBwaXhlbHMpIG9mIHRoZSB2aXMncyBpZnJhbWUuXG4gKlxuICogVXNhZ2U6XG4gKiBgYGBcbiAqIHZhciBteVdpZHRoID0gZHNjYy5nZXRXaWR0aCgpO1xuICogY29uc29sZS5sb2coJ015IHdpZHRoIGlzOiAnLCBteVdpZHRoKTtcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgZ2V0V2lkdGggPSAoKTogbnVtYmVyID0+IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgaGVpZ2h0IChpbiBwaXhlbHMpIG9mIHRoZSB2aXMncyBpZnJhbWUuXG4gKlxuICogVXNhZ2U6XG4gKiBgYGBcbiAqIHZhciBteUhlaWdodCA9IGRzY2MuZ2V0SGVpZ2h0KCk7XG4gKiBjb25zb2xlLmxvZygnTXkgaGVpZ2h0IGlzOiAnLCBteUhlaWdodCk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEhlaWdodCA9ICgpOiBudW1iZXIgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjb21wb25lbnRJZCBvZiB0aGUgdmlzLiBDb21wb25lbnQgaWRzIHVuaXF1ZWx5IGlkZW50aWZ5IGEgdmlzIHRvXG4gKiBEYXRhIFN0dWRpby5cbiAqXG4gKiBVc2FnZTpcbiAqIGBgYFxuICogdmFyIG15Q29tcG9uZW50SWQgPSBkc2NjLmdldENvbXBvbmVudElkKCk7XG4gKiBjb25zb2xlLmxvZygnTXkgY29tcG9uZW50SWQgaXM6ICcsIG15Q29tcG9uZW50SWQpO1xuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDb21wb25lbnRJZCA9ICgpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICBpZiAocGFyYW1zLmdldCgnZHNjSWQnKSAhPT0gbnVsbCkge1xuICAgIHJldHVybiBwYXJhbXMuZ2V0KCdkc2NJZCcpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdkc2NJZCBtdXN0IGJlIGluIHRoZSBxdWVyeSBwYXJhbWV0ZXJzLiAnICtcbiAgICAgICAgJ1RoaXMgaXMgYSBidWcgaW4gZHMtY29tcG9uZW50LCBwbGVhc2UgZmlsZSBhIGJ1ZzogJyArXG4gICAgICAgICdodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlZGF0YXN0dWRpby9kcy1jb21wb25lbnQvaXNzdWVzL25ldydcbiAgICApO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGZpZWxkcyBpbmRleGVkIGJ5IHRoZWlyIERhdGEgU3R1ZGlvIGlkLlxuICovXG5jb25zdCBmaWVsZHNCeUlkID0gKG1lc3NhZ2U6IE1lc3NhZ2UpOiBGaWVsZHNCeUlkID0+XG4gIG1lc3NhZ2UuZmllbGRzLnJlZHVjZSgoYWNjOiBGaWVsZHNCeUlkLCBmaWVsZDogRmllbGQpID0+IHtcbiAgICBhY2NbZmllbGQuaWRdID0gZmllbGQ7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG4vKipcbiAqIFppcHMgdHdvIGFycmF5cyB0b2dldGhlciBpbnRvIGEgbmV3IGFycmF5LiBVc2VzIHRoZSBsZW5ndGggb2YgdGhlIHNob3J0ZXN0XG4gKiBhcnJheS5cbiAqXG4gKiBVc2FnZTpcbiAqIGBgYFxuICogY29uc3QgYSA9IFsxLCAyLCAzXTtcbiAqIGNvbnN0IGIgPSBbJ2EnLCAnYicsICdjJywgJ2QnXTtcbiAqIGNvbnN0IHppcHBlZCA9IHppcDIoYSwgYik7XG4gKiBleHBlY3QoemlwcGVkKS50b0VxdWFsKFtbMSwgJ2EnXSwgWzIsICdiJ10sIFszLCAnYyddXSk7XG4gKiBgYGBcbiAqL1xuY29uc3QgemlwMiA9IDxULCBVPih0OiBUW10sIHU6IFVbXSk6IEFycmF5PFtULCBVXT4gPT4ge1xuICBpZiAodC5sZW5ndGggPCB1Lmxlbmd0aCkge1xuICAgIHJldHVybiB0Lm1hcCgodEVudHJ5OiBULCBpZHg6IG51bWJlcik6IFtULCBVXSA9PiBbdEVudHJ5LCB1W2lkeF1dKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdS5tYXAoKHVFbnRyeTogVSwgaWR4OiBudW1iZXIpOiBbVCwgVV0gPT4gW3RbaWR4XSwgdUVudHJ5XSk7XG4gIH1cbn07XG5cbi8vIGAuc29ydGAgaXNuJ3Qgc3RhYmxlLCBidXQgaWYgeW91IGNvbXBhcmUgaXRlbXMsIGFuZCB3aGVuIHRoZXkgYXJlIGVxdWFsIHVzZVxuLy8gdGhlIG9yaWdpbmFsIGluZGV4LCBpdCBpcyB0aGVuIHN0YWJsZS5cbmNvbnN0IHN0YWJsZVNvcnQgPSA8VD4oYXJyOiBUW10sIGNvbXBhcmU6IChhOiBULCBiOiBUKSA9PiBudW1iZXIpOiBUW10gPT5cbiAgYXJyXG4gICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+ICh7aXRlbSwgaW5kZXh9KSlcbiAgICAuc29ydCgoYSwgYikgPT4gY29tcGFyZShhLml0ZW0sIGIuaXRlbSkgfHwgYS5pbmRleCAtIGIuaW5kZXgpXG4gICAgLm1hcCgoe2l0ZW19KSA9PiBpdGVtKTtcblxuY29uc3QgZGltZW5zaW9uT3JNZXRyaWMgPSAoY2RlOiBDb25maWdEYXRhRWxlbWVudCk6IGJvb2xlYW4gPT5cbiAgY2RlLnR5cGUgPT09IENvbmZpZ0RhdGFFbGVtZW50VHlwZS5ESU1FTlNJT04gfHxcbiAgY2RlLnR5cGUgPT09IENvbmZpZ0RhdGFFbGVtZW50VHlwZS5NRVRSSUM7XG5cbmNvbnN0IHRvTnVtID0gKGNkZXQ6IENvbmZpZ0RhdGFFbGVtZW50VHlwZSkgPT5cbiAgY2RldCA9PT0gQ29uZmlnRGF0YUVsZW1lbnRUeXBlLkRJTUVOU0lPTiA/IC0xIDogMTtcblxuLyoqXG4gKiBGbGF0dGVucyB0aGUgY29uZmlnSWRzIGZyb20gYSBtZXNzYWdlIGludG8gYSBzaW5nbGUgYXJyYXkuIFRoZSBjb25maWcgSWRzXG4gKiB3aWxsIGJlIHJlcGVhdGVkIGZvciB0aGUgYE1FVFJJQ2AvYERJTUVOU0lPTmAgc2VsZWN0aW9ucy4gaS5lLiBmb3IgYSBgTUVUUklDYFxuICogbmFtZWQgYFwibWV0cmljc1wiYCBvZiBge21pbjogMiwgbWF4OjN9YCwgdGhlIHZhbHVlIG1ldHJpY3Mgd2lsbCBiZSByZXBlYXRlZCAyXG4gKiB0byAzIHRpbWVzIGRlcGVuZGluZyBvbiB3aGF0IHZhbHVlcyB0aGUgdXNlciBzZWxlY3RzLlxuICpcbiAqIE5vdGU6IHRoaXMgaXMgcmVseWluZyBvbiB0aGUgZmFjdCB0aGF0IHRoZSBwb3N0TWVzc2FnZSBmcm9tIERhdGFTdHVkaW8gaGFzXG4gKiB0aGUgZmllbGRzIHNvcnRlZCB0byBiZSBkaW1lbnNpb25zLCBmb2xsb3dlZCBieSBtZXRyaWNzLlxuICovXG50eXBlIENvbmZpZ0RhdGFDb25jZXB0ID0gQ29uZmlnRGF0YUVsZW1lbnRNZXRyaWMgfCBDb25maWdEYXRhRWxlbWVudERpbWVuc2lvbjtcblxuY29uc3QgZmxhdHRlbkNvbmZpZ0lkcyA9IChtZXNzYWdlOiBNZXNzYWdlKTogQ29uZmlnSWRbXSA9PiB7XG4gIGNvbnN0IGRpbW5zQW5kTWV0czogQ29uZmlnRGF0YUNvbmNlcHRbXSA9IFtdO1xuICBtZXNzYWdlLmNvbmZpZy5kYXRhLmZvckVhY2goKGNvbmZpZ0RhdGE6IENvbmZpZ0RhdGEpID0+IHtcbiAgICBjb25maWdEYXRhLmVsZW1lbnRzXG4gICAgICAuZmlsdGVyKGRpbWVuc2lvbk9yTWV0cmljKVxuICAgICAgLmZvckVhY2goKGNvbmZpZ0RhdGFFbGVtZW50OiBDb25maWdEYXRhQ29uY2VwdCkgPT4ge1xuICAgICAgICBkaW1uc0FuZE1ldHMucHVzaChjb25maWdEYXRhRWxlbWVudCk7XG4gICAgICB9KTtcbiAgfSk7XG4gIGNvbnN0IHNvcnRlZCA9IHN0YWJsZVNvcnQoXG4gICAgZGltbnNBbmRNZXRzLFxuICAgIChhLCBiKSA9PiB0b051bShhLnR5cGUpIC0gdG9OdW0oYi50eXBlKVxuICApO1xuICBjb25zdCBjb25maWdJZHM6IENvbmZpZ0lkW10gPSBbXTtcbiAgc29ydGVkLmZvckVhY2goKGNvbmZpZ0RhdGFFbGVtZW50KSA9PiB7XG4gICAgY29uZmlnRGF0YUVsZW1lbnQudmFsdWUuZm9yRWFjaCgoKSA9PiBjb25maWdJZHMucHVzaChjb25maWdEYXRhRWxlbWVudC5pZCkpO1xuICB9KTtcbiAgcmV0dXJuIGNvbmZpZ0lkcztcbn07XG5cbi8qKlxuICogSm9pbnMgYSBzaW5nbGUgdGFibGUgcm93IHdpdGggdGhlIG1hdGNoaW5nIGBDb25maWdJZGBcbiAqL1xuY29uc3Qgam9pbk9iamVjdFJvdyA9IChjb25maWdJZHM6IENvbmZpZ0lkW10pID0+IChyb3c6IFJvdyk6IE9iamVjdFJvdyA9PiB7XG4gIGNvbnN0IG9iamVjdFJvdzogT2JqZWN0Um93ID0ge307XG5cbiAgemlwMihyb3csIGNvbmZpZ0lkcykuZm9yRWFjaCgoW3Jvd1ZhbCwgY29uZmlnSWRdOiBbRFNSb3dWYWx1ZSwgQ29uZmlnSWRdKSA9PiB7XG4gICAgaWYgKG9iamVjdFJvd1tjb25maWdJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgb2JqZWN0Um93W2NvbmZpZ0lkXSA9IFtdO1xuICAgIH1cbiAgICBvYmplY3RSb3dbY29uZmlnSWRdLnB1c2gocm93VmFsKTtcbiAgfSwge30pO1xuXG4gIHJldHVybiBvYmplY3RSb3c7XG59O1xuXG4vKipcbiAqIEZvcm1hdHMgdGFibGVzIGludG8gdGhlIGBPYmplY3RUYWJsZXNgIGZvcm1hdC5cbiAqL1xuY29uc3Qgb2JqZWN0Rm9ybWF0VGFibGUgPSAobWVzc2FnZTogTWVzc2FnZSk6IE9iamVjdFRhYmxlcyA9PiB7XG4gIGNvbnN0IGNvbmZpZ0lkcyA9IGZsYXR0ZW5Db25maWdJZHMobWVzc2FnZSk7XG4gIGNvbnN0IG9iamVjdFRhYmxlczogT2JqZWN0VGFibGVzID0ge1tUYWJsZVR5cGUuREVGQVVMVF06IFtdfTtcblxuICBtZXNzYWdlLmRhdGFSZXNwb25zZS50YWJsZXMuZm9yRWFjaCgodGFibGU6IFRhYmxlKSA9PiB7XG4gICAgY29uc3Qgb2JqZWN0Um93czogT2JqZWN0Um93W10gPSB0YWJsZS5yb3dzLm1hcChqb2luT2JqZWN0Um93KGNvbmZpZ0lkcykpO1xuICAgIGlmICh0YWJsZS5pZCA9PT0gVGFibGVUeXBlLkRFRkFVTFQpIHtcbiAgICAgIG9iamVjdFRhYmxlc1t0YWJsZS5pZF0gPSBvYmplY3RSb3dzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gb2JqZWN0VGFibGVzW3RhYmxlLmlkXTtcbiAgICAgIGlmIChjdXJyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb2JqZWN0VGFibGVzW3RhYmxlLmlkXSA9IFtdO1xuICAgICAgfVxuICAgICAgb2JqZWN0VGFibGVzW3RhYmxlLmlkXSA9IG9iamVjdFRhYmxlc1t0YWJsZS5pZF0uY29uY2F0KG9iamVjdFJvd3MpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvYmplY3RUYWJsZXM7XG59O1xuXG4vKipcbiAqIEZvcm1hdHMgdGFibGVzIGludG8gdGhlIGBUYWJsZXNgIGZvcm1hdC5cbiAqL1xuY29uc3QgdGFibGVGb3JtYXRUYWJsZSA9IChtZXNzYWdlOiBNZXNzYWdlKTogVGFibGVzID0+IHtcbiAgY29uc3QgZmllbGRzQnk6IEZpZWxkc0J5Q29uZmlnSWQgPSBmaWVsZHNCeUNvbmZpZ0lkKG1lc3NhZ2UpO1xuICBjb25zdCBjb25maWdJZHMgPSBmbGF0dGVuQ29uZmlnSWRzKG1lc3NhZ2UpO1xuICBjb25zdCBjb25maWdJZElkeCA9IHt9O1xuICBjb25zdCBoZWFkZXJzOiBSb3dIZWFkaW5nW10gPSBjb25maWdJZHMubWFwKFxuICAgIChjb25maWdJZDogc3RyaW5nKTogUm93SGVhZGluZyA9PiB7XG4gICAgICBpZiAoY29uZmlnSWRJZHhbY29uZmlnSWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uZmlnSWRJZHhbY29uZmlnSWRdID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmZpZ0lkSWR4W2NvbmZpZ0lkXSsrO1xuICAgICAgfVxuICAgICAgY29uc3QgaWR4ID0gY29uZmlnSWRJZHhbY29uZmlnSWRdO1xuICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNCeVtjb25maWdJZF1baWR4XTtcbiAgICAgIGNvbnN0IGhlYWRpbmc6IFJvd0hlYWRpbmcgPSB7Li4uZmllbGQsIGNvbmZpZ0lkfTtcbiAgICAgIHJldHVybiBoZWFkaW5nO1xuICAgIH1cbiAgKTtcbiAgY29uc3QgdGFibGVUYWJsZXM6IFRhYmxlcyA9IHtcbiAgICBbVGFibGVUeXBlLkRFRkFVTFRdOiB7aGVhZGVyczogW10sIHJvd3M6IFtdfSxcbiAgfTtcblxuICBtZXNzYWdlLmRhdGFSZXNwb25zZS50YWJsZXMuZm9yRWFjaCgodGFibGU6IFRhYmxlKSA9PiB7XG4gICAgdGFibGVUYWJsZXNbdGFibGUuaWRdID0ge1xuICAgICAgaGVhZGVycyxcbiAgICAgIHJvd3M6IHRhYmxlLnJvd3MsXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRhYmxlVGFibGVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaWVsZHMgaW5kZXhlZCBieSB0aGVpciBjb25maWcgaWQuIFNpbmNlIG1hbnkgZmllbGRzIGNhbiBiZSBpblxuICogdGhlIHNhbWUgYE1FVFJJQ2AvYERJTUVOU0lPTmAgc2VsZWN0aW9uLCBgY29uZmlnSWRgIGlzIG1hcHBlZCB0byBgRmllbGRbXWAuXG4gKi9cbmV4cG9ydCBjb25zdCBmaWVsZHNCeUNvbmZpZ0lkID0gKG1lc3NhZ2U6IE1lc3NhZ2UpOiBGaWVsZHNCeUNvbmZpZ0lkID0+IHtcbiAgY29uc3QgZmllbGRzQnlEU0lkID0gZmllbGRzQnlJZChtZXNzYWdlKTtcbiAgY29uc3QgZmllbGRzQnk6IEZpZWxkc0J5Q29uZmlnSWQgPSB7fTtcblxuICBtZXNzYWdlLmNvbmZpZy5kYXRhLmZvckVhY2goKGNvbmZpZ0RhdGE6IENvbmZpZ0RhdGEpID0+IHtcbiAgICBjb25maWdEYXRhLmVsZW1lbnRzXG4gICAgICAuZmlsdGVyKGRpbWVuc2lvbk9yTWV0cmljKVxuICAgICAgLmZvckVhY2goKGNvbmZpZ0RhdGFFbGVtZW50OiBDb25maWdEYXRhQ29uY2VwdCkgPT4ge1xuICAgICAgICBmaWVsZHNCeVtjb25maWdEYXRhRWxlbWVudC5pZF0gPSBjb25maWdEYXRhRWxlbWVudC52YWx1ZS5tYXAoXG4gICAgICAgICAgKGRzSWQ6IEZpZWxkSWQpOiBGaWVsZCA9PiBmaWVsZHNCeURTSWRbZHNJZF1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZmllbGRzQnk7XG59O1xuXG4vKipcbiAqIEZsYXR0ZW5zIHRoZSBzdHlsZSBlbnRyaWVzIGludG8gYSBzaW5nbGUgb2JqZWN0LiBgc3R5bGVJZGBzIHNob3VsZCBiZSB1bmlxdWUuXG4gKi9cbmNvbnN0IGZsYXR0ZW5TdHlsZSA9IChtZXNzYWdlOiBNZXNzYWdlKTogU3R5bGVCeUlkID0+IHtcbiAgY29uc3Qgc3R5bGVCeUlkOiBTdHlsZUJ5SWQgPSB7fTtcbiAgKG1lc3NhZ2UuY29uZmlnLnN0eWxlIHx8IFtdKS5mb3JFYWNoKChzdHlsZUVudHJ5OiBDb25maWdTdHlsZSkgPT4ge1xuICAgIHN0eWxlRW50cnkuZWxlbWVudHMuZm9yRWFjaCgoY29uZmlnU3R5bGVFbGVtZW50OiBDb25maWdTdHlsZUVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChzdHlsZUJ5SWRbY29uZmlnU3R5bGVFbGVtZW50LmlkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgc3R5bGVJZHMgbXVzdCBiZSB1bmlxdWUuIFlvdXIgc3R5bGVJZDogJyR7Y29uZmlnU3R5bGVFbGVtZW50LmlkfScgaXMgdXNlZCBtb3JlIHRoYW4gb25jZS5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBzdHlsZUJ5SWRbY29uZmlnU3R5bGVFbGVtZW50LmlkXSA9IHtcbiAgICAgICAgdmFsdWU6IGNvbmZpZ1N0eWxlRWxlbWVudC52YWx1ZSxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBjb25maWdTdHlsZUVsZW1lbnQuZGVmYXVsdFZhbHVlLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfSwge30pO1xuXG4gIHJldHVybiBzdHlsZUJ5SWQ7XG59O1xuXG5jb25zdCB0aGVtZVN0eWxlID0gKG1lc3NhZ2U6IE1lc3NhZ2UpOiBUaGVtZVN0eWxlID0+IHtcbiAgcmV0dXJuIG1lc3NhZ2UuY29uZmlnLnRoZW1lU3R5bGU7XG59O1xuXG5jb25zdCBtYXBJbnRlcmFjdGlvblR5cGVzID0gKFxuICBkc0ludGVyYWN0aW9uOiBEU0ludGVyYWN0aW9uVHlwZVxuKTogSW50ZXJhY3Rpb25UeXBlID0+IHtcbiAgc3dpdGNoIChkc0ludGVyYWN0aW9uKSB7XG4gICAgY2FzZSBEU0ludGVyYWN0aW9uVHlwZS5GSUxURVI6XG4gICAgICByZXR1cm4gSW50ZXJhY3Rpb25UeXBlLkZJTFRFUjtcbiAgfVxufTtcblxuY29uc3QgdHJhbnNmb3JtRFNJbnRlcmFjdGlvbiA9IChtZXNzYWdlOiBNZXNzYWdlKTogSW50ZXJhY3Rpb25zQnlJZCA9PiB7XG4gIGNvbnN0IGRzSW50ZXJhY3Rpb25zOiBEU0ludGVyYWN0aW9uRGF0YVtdID0gbWVzc2FnZS5jb25maWcuaW50ZXJhY3Rpb25zO1xuICAvLyBUT0RPIC0gcmVtb3ZlIG9uY2UgaW50ZXJhY3Rpb25zIGFyZSBsaXZlLlxuICBpZiAoZHNJbnRlcmFjdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICByZXR1cm4gZHNJbnRlcmFjdGlvbnMucmVkdWNlKFxuICAgIChhY2M6IEludGVyYWN0aW9uc0J5SWQsIGRzSW50ZXJhY3Rpb246IERTSW50ZXJhY3Rpb25EYXRhKSA9PiB7XG4gICAgICBjb25zdCBpbnRlcmFjdGlvbnMgPSBkc0ludGVyYWN0aW9uLnN1cHBvcnRlZEFjdGlvbnMubWFwKFxuICAgICAgICBtYXBJbnRlcmFjdGlvblR5cGVzXG4gICAgICApO1xuICAgICAgY29uc3QgdmFsdWUgPSB7XG4gICAgICAgIHR5cGU6IG1hcEludGVyYWN0aW9uVHlwZXMoZHNJbnRlcmFjdGlvbi52YWx1ZS50eXBlKSxcbiAgICAgICAgZGF0YTogZHNJbnRlcmFjdGlvbi52YWx1ZS5kYXRhLFxuICAgICAgfTtcbiAgICAgIGFjY1tkc0ludGVyYWN0aW9uLmlkXSA9IHtcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIHN1cHBvcnRlZEFjdGlvbnM6IGludGVyYWN0aW9ucyxcbiAgICAgIH07XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sXG4gICAge31cbiAgKTtcbn07XG5cbi8qKlxuICogVHJhbnNmb3JtIGZvciBkYXRlIHJhbmdlc1xuICovXG5jb25zdCB0b0RhdGVSYW5nZXMgPSAobWVzc2FnZTogTWVzc2FnZSk6IERhdGVSYW5nZXNCeUlkID0+IHtcbiAgY29uc3QgZGF0ZVJhbmdlcyA9IG1lc3NhZ2UuZGF0YVJlc3BvbnNlLmRhdGVSYW5nZXMgfHwgW107XG4gIGNvbnN0IG91dHB1dDogRGF0ZVJhbmdlc0J5SWQgPSB7fTtcbiAgcmV0dXJuIGRhdGVSYW5nZXMucmVkdWNlKChpblByb2dyZXNzLCBjdXJyZW50RFNEYXRlUmFuZ2UpID0+IHtcbiAgICBpblByb2dyZXNzW2N1cnJlbnREU0RhdGVSYW5nZS5pZF0gPSB7XG4gICAgICBzdGFydDogY3VycmVudERTRGF0ZVJhbmdlLnN0YXJ0LFxuICAgICAgZW5kOiBjdXJyZW50RFNEYXRlUmFuZ2UuZW5kLFxuICAgIH07XG4gICAgcmV0dXJuIGluUHJvZ3Jlc3M7XG4gIH0sIG91dHB1dCk7XG59O1xuXG4vKiBUcmFuc2Zvcm0gZm9yIGNvbG9yIG1hcHMgKi9cbmNvbnN0IHRvQ29sb3JzQnlEaW1lbnNpb24gPSAobWVzc2FnZTogTWVzc2FnZSk6IENvbG9yc0J5RGltZW5zaW9uID0+IHtcbiAgY29uc3QgY29sb3JzID0gbWVzc2FnZS5kYXRhUmVzcG9uc2UuY29sb3JNYXAgfHwge307XG4gIHJldHVybiB7Li4uY29sb3JzfTtcbn07XG4vKipcbiAqIFRoZSB0cmFuc2Zvcm0gdG8gdXNlIGZvciBkYXRhIGluIGEgVGFibGUgZm9ybWF0LiBpLmUuIGBbWzEsIDIsIDNdLCBbNCwgNSwgNl1dYFxuICovXG5leHBvcnQgY29uc3QgdGFibGVUcmFuc2Zvcm06IFRhYmxlVHJhbnNmb3JtID0gKFxuICBtZXNzYWdlOiBNZXNzYWdlXG4pOiBUYWJsZUZvcm1hdCA9PiAoe1xuICB0YWJsZXM6IHRhYmxlRm9ybWF0VGFibGUobWVzc2FnZSksXG4gIGRhdGVSYW5nZXM6IHRvRGF0ZVJhbmdlcyhtZXNzYWdlKSxcbiAgZmllbGRzOiBmaWVsZHNCeUNvbmZpZ0lkKG1lc3NhZ2UpLFxuICBzdHlsZTogZmxhdHRlblN0eWxlKG1lc3NhZ2UpLFxuICB0aGVtZTogdGhlbWVTdHlsZShtZXNzYWdlKSxcbiAgaW50ZXJhY3Rpb25zOiB0cmFuc2Zvcm1EU0ludGVyYWN0aW9uKG1lc3NhZ2UpLFxuICBjb2xvck1hcDogdG9Db2xvcnNCeURpbWVuc2lvbihtZXNzYWdlKSxcbn0pO1xuXG4vKipcbiAqIFRoZSB0cmFuc2Zvcm0gdG8gdXNlIGZvciBkYXRhIGluIGFuIG9iamVjdCBmb3JtYXQuIGkuZS4gYFt7bmFtZTogJ2pvaG4nLCB2aWV3czogM30sIHtuYW1lOiAnc3V6aWUnLCB2aWV3czogNX1dYFxuICovXG5leHBvcnQgY29uc3Qgb2JqZWN0VHJhbnNmb3JtOiBPYmplY3RUcmFuc2Zvcm0gPSAobWVzc2FnZTogTWVzc2FnZSkgPT4gKHtcbiAgdGFibGVzOiBvYmplY3RGb3JtYXRUYWJsZShtZXNzYWdlKSxcbiAgZGF0ZVJhbmdlczogdG9EYXRlUmFuZ2VzKG1lc3NhZ2UpLFxuICBmaWVsZHM6IGZpZWxkc0J5Q29uZmlnSWQobWVzc2FnZSksXG4gIHN0eWxlOiBmbGF0dGVuU3R5bGUobWVzc2FnZSksXG4gIHRoZW1lOiB0aGVtZVN0eWxlKG1lc3NhZ2UpLFxuICBpbnRlcmFjdGlvbnM6IHRyYW5zZm9ybURTSW50ZXJhY3Rpb24obWVzc2FnZSksXG4gIGNvbG9yTWFwOiB0b0NvbG9yc0J5RGltZW5zaW9uKG1lc3NhZ2UpLFxufSk7XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIHRyYW5zZm9ybSBpcyBsaWtlbHkgdGhlIGlkZW50aXR5IGZ1bmN0aW9uXG4gKiBUaGlzIGlzIG5vdCBhIHN1cHBvcnRlZCBpbXBsZW1lbnRhdGlvbiBwYXRoXG4gKiBBdm9pZCB0aGlzIGlmIGF0IGFsbCBwb3NzaWJsZSAtIHBsZWFzZSB1c2UgZWl0aGVyIG9iamVjdFRyYW5zZm9ybSBvciB0YWJsZVRyYW5zZm9ybVxuICovXG5jb25zdCBpc1Byb2JhYmx5SWRlbnRpdHlGdW5jdGlvbiA9ICh0cmFuc2Zvcm0pOiBib29sZWFuID0+IHtcbiAgbGV0IGlzSWRlbnRpdHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaWYgKHRyYW5zZm9ybSgnaWRlbnRpdHknKSA9PT0gJ2lkZW50aXR5Jykge1xuICAgIGlzSWRlbnRpdHkgPSB0cnVlO1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBUaGlzIGlzIGFuIHVuc3VwcG9ydGVkIGRhdGEgZm9ybWF0LiBQbGVhc2UgdXNlIG9uZSBvZiB0aGUgc3VwcG9ydGVkIHRyYW5zZm9ybXM6XG4gICAgICAgZHNjYy5vYmplY3RGb3JtYXQgb3IgZHNjYy50YWJsZUZvcm1hdC5gXG4gICAgKTtcbiAgfVxuICByZXR1cm4gaXNJZGVudGl0eTtcbn07XG5cbmNvbnN0IGlzVmFsaWRUcmFuc2Zvcm0gPSAodHJhbnNmb3JtKTogYm9vbGVhbiA9PiB7XG4gIGxldCBpc1ZhbGlkID0gZmFsc2U7XG4gIGlmIChcbiAgICAodHJhbnNmb3JtIGFzIGFueSkgPT09IHRhYmxlVHJhbnNmb3JtIHx8XG4gICAgKHRyYW5zZm9ybSBhcyBhbnkpID09PSBvYmplY3RUcmFuc2Zvcm1cbiAgKSB7XG4gICAgaXNWYWxpZCA9IHRydWU7XG4gIH0gZWxzZSBpZiAoaXNQcm9iYWJseUlkZW50aXR5RnVuY3Rpb24odHJhbnNmb3JtKSkge1xuICAgIGlzVmFsaWQgPSB0cnVlO1xuICB9XG4gIHJldHVybiBpc1ZhbGlkO1xufTtcbi8qXG4gKiBTdWJzY3JpYmVzIHRvIG1lc3NhZ2VzIGZyb20gRGF0YSBTdHVkaW8uIENhbGxzIGBjYmAgZm9yIGV2ZXJ5IG5ld1xuICogW1tNZXNzYWdlVHlwZS5SRU5ERVJdXSBtZXNzYWdlLiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHVuc3Vic2NyaWJlXG4gKiBgY2FsbGJhY2tgIGZyb20gZnVydGhlciBpbnZvY2F0aW9ucy5cbiAqXG4gKiBVc2FnZSAtIHRhYmxlVHJhbnNmb3JtOlxuICogYGBgXG4gKiB2YXIgdW5zdWJzY3JpYmUgPSBkc2NjLnN1YnNjcmliZVRvRGF0YShmdW5jdGlvbihtZXNzYWdlKSB7XG4gKiAgIGNvbnNvbGUubG9nKG1lc3NhZ2UudGFibGVzKVxuICogICBjb25zb2xlLmxvZyhtZXNzYWdlLmZpZWxkcylcbiAqICAgY29uc29sZS5sb2cobWVzc2FnZS5zdHlsZSlcbiAqIH0sIHt0cmFuc2Zvcm06IGRzY2MudGFibGVUcmFuc2Zvcm19KTtcbiAqXG4gKiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICogICB1bnN1YnNjcmliZSgpO1xuICogfSwgMzAwMClcbiAqIGBgYFxuXG4gKiBVc2FnZSAtIG9iamVjdFRyYW5zZm9ybTpcbiAqIGBgYFxuICogdmFyIHVuc3Vic2NyaWJlID0gZHNjYy5zdWJzY3JpYmVUb0RhdGEoZnVuY3Rpb24obWVzc2FnZSkge1xuICogICBjb25zb2xlLmxvZyhtZXNzYWdlLnRhYmxlcylcbiAqICAgY29uc29sZS5sb2cobWVzc2FnZS5maWVsZHMpXG4gKiAgIGNvbnNvbGUubG9nKG1lc3NhZ2Uuc3R5bGUpXG4gKiB9LCB7dHJhbnNmb3JtOiBkc2NjLm9iamVjdFRyYW5zZm9ybX0pO1xuICpcbiAqIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gKiAgIHVuc3Vic2NyaWJlKCk7XG4gKiB9LCAzMDAwKVxuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVUb0RhdGEgPSA8VD4oXG4gIGNiOiAoY29tcG9uZW50RGF0YTogVCkgPT4gdm9pZCxcbiAgb3B0aW9uczogU3Vic2NyaXB0aW9uc09wdGlvbnM8VD5cbik6ICgoKSA9PiB2b2lkKSA9PiB7XG4gIGlmIChpc1ZhbGlkVHJhbnNmb3JtKG9wdGlvbnMudHJhbnNmb3JtKSkge1xuICAgIGNvbnN0IG9uTWVzc2FnZSA9IChtZXNzYWdlOiBQb3N0TWVzc2FnZSkgPT4ge1xuICAgICAgaWYgKG1lc3NhZ2UuZGF0YS50eXBlID09PSBNZXNzYWdlVHlwZS5SRU5ERVIpIHtcbiAgICAgICAgY2Iob3B0aW9ucy50cmFuc2Zvcm0obWVzc2FnZS5kYXRhKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIGBNZXNzYWdlVHlwZTogJHttZXNzYWdlLmRhdGEudHlwZX0gaXMgbm90IHN1cHBvcnRlZCBieSB0aGlzIHZlcnNpb24gb2YgdGhlIGxpYnJhcnkuYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpO1xuICAgIGNvbnN0IGNvbXBvbmVudElkID0gZ2V0Q29tcG9uZW50SWQoKTtcbiAgICAvLyBUZWxsIERhdGFTdHVkaW8gdGhhdCB0aGUgdml6IGlzIHJlYWR5IHRvIGdldCBldmVudHMuXG4gICAgY29uc3Qgdml6UmVhZHlNZXNzYWdlOiBWaXpSZWFkeU1lc3NhZ2UgPSB7XG4gICAgICBjb21wb25lbnRJZCxcbiAgICAgIHR5cGU6IFRvRFNNZXNzYWdlVHlwZS5WSVpfUkVBRFksXG4gICAgfTtcbiAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHZpelJlYWR5TWVzc2FnZSwgJyonKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihgT25seSB0aGUgYnVpbHQgaW4gdHJhbnNmb3JtIGZ1bmN0aW9ucyBhcmUgc3VwcG9ydGVkLmApO1xuICB9XG59O1xuXG4vKlxuICogRG9lcyB0aGUgdGhpbmcgdGhhdCBpbnRlcmFjdGlvbnMgc2hvdWxkIGRvLlxuICovXG5leHBvcnQgY29uc3Qgc2VuZEludGVyYWN0aW9uOiBTZW5kSW50ZXJhY3Rpb24gPSAoXG4gIGFjdGlvbklkLFxuICBpbnRlcmFjdGlvbixcbiAgZGF0YVxuKSA9PiB7XG4gIGNvbnN0IGNvbXBvbmVudElkID0gZ2V0Q29tcG9uZW50SWQoKTtcbiAgY29uc3QgaW50ZXJhY3Rpb25NZXNzYWdlOiBJbnRlcmFjdGlvbk1lc3NhZ2UgPSB7XG4gICAgdHlwZTogVG9EU01lc3NhZ2VUeXBlLklOVEVSQUNUSU9OLFxuICAgIGlkOiBhY3Rpb25JZCxcbiAgICBkYXRhLFxuICAgIGNvbXBvbmVudElkLFxuICB9O1xuICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKGludGVyYWN0aW9uTWVzc2FnZSwgJyonKTtcbn07XG5cbi8qXG4gKiBDbGVhcnMgYW4gaW50ZXJhY3Rpb25cbiAqL1xuXG5leHBvcnQgY29uc3QgY2xlYXJJbnRlcmFjdGlvbjogQ2xlYXJJbnRlcmFjdGlvbiA9IChhY3Rpb25JZCwgaW50ZXJhY3Rpb24pID0+IHtcbiAgc2VuZEludGVyYWN0aW9uKGFjdGlvbklkLCBpbnRlcmFjdGlvbiwgdW5kZWZpbmVkKTtcbn07XG4iLCIvKiFcbiAgQGxpY2Vuc2VcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQge2NsZWFySW50ZXJhY3Rpb259IGZyb20gJy4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvc3RNZXNzYWdlIGV4dGVuZHMgTWVzc2FnZUV2ZW50IHtcbiAgZGF0YTogTWVzc2FnZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlIHtcbiAgLyoqXG4gICAqIFRoZSBtZXNzYWdlIHR5cGUuXG4gICAqL1xuICB0eXBlOiBNZXNzYWdlVHlwZTtcbiAgLyoqXG4gICAqIFRoZSBjb25maWd1cmF0aW9uIHN0YXRlIG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjb25maWc6IENvbmZpZztcbiAgLyoqXG4gICAqIEEgbGlzdCBvZiBhbGwgdXNlciBzZWxlY3RlZCBmaWVsZHMuXG4gICAqL1xuICBmaWVsZHM6IEZpZWxkW107XG4gIC8qKlxuICAgKiBUaGUgZGF0YSBjb3JyZXNwb25kaW5nIHRvIHRoZSBkYXRhIGNvbmZpZyBzdGF0ZSBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgZGF0YVJlc3BvbnNlOiBEYXRhUmVzcG9uc2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnIHtcbiAgLyoqXG4gICAqIFRoZSBkYXRhIGNvbmZpZyBkZWZpbmVkIGZvciB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgZGF0YTogQ29uZmlnRGF0YVtdO1xuICAvKipcbiAgICogVGhlIHN0eWxlIGVsZW1lbnRzIHJlcXVpcmVkIGFuZCBzdXBwb3J0ZWQgYnkgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIHN0eWxlOiBDb25maWdTdHlsZVtdO1xuICB0aGVtZVN0eWxlPzogQ29uZmlnVGhlbWVTdHlsZTtcbiAgaW50ZXJhY3Rpb25zOiBEU0ludGVyYWN0aW9uRGF0YVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpZWxkIHtcbiAgLyoqXG4gICAqIFRoZSBJRCBvZiB0aGUgZmllbGQuXG4gICAqL1xuICBpZDogRmllbGRJZDtcbiAgLyoqXG4gICAqIFRoZSB1c2VyLWZyaWVuZGx5IG5hbWUgb2YgdGhlIGZpZWxkLlxuICAgKi9cbiAgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHVzZXItZnJpZW5kbHkgZGVzY3JpcHRpb24gb2YgdGhlIGZpZWxkLlxuICAgKi9cbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZmllbGQgdHlwZS5cbiAgICovXG4gIHR5cGU6IEZpZWxkVHlwZTtcbiAgLyoqXG4gICAqIFRoZSBmaWVsZCBjb25jZXB0LlxuICAgKi9cbiAgY29uY2VwdDogQ29uY2VwdFR5cGU7XG59XG5cbmV4cG9ydCBlbnVtIENvbmNlcHRUeXBlIHtcbiAgTUVUUklDID0gJ01FVFJJQycsXG4gIERJTUVOU0lPTiA9ICdESU1FTlNJT04nLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERTRGF0ZVJhbmdlIHtcbiAgaWQ6IERhdGVSYW5nZVR5cGU7XG4gIHN0YXJ0OiBzdHJpbmc7XG4gIGVuZDogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBEU0NvbG9yTWFwID0ge1xuICBbZGltZW5zaW9uOiBzdHJpbmddOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFSZXNwb25zZSB7XG4gIC8qKlxuICAgKiBUaGUgbGlzdCBvZiB0YWJsZXMgZm9yIHRoZSBjdXJyZW50IGRhdGEgY29uZmlndXJhdGlvbi5cbiAgICovXG4gIHRhYmxlczogVGFibGVbXTtcbiAgZGF0ZVJhbmdlcz86IERTRGF0ZVJhbmdlW107XG4gIGNvbG9yTWFwPzogRFNDb2xvck1hcDtcbn1cblxuZXhwb3J0IGVudW0gTWVzc2FnZVR5cGUge1xuICBSRU5ERVIgPSAnUkVOREVSJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdEYXRhIHtcbiAgLyoqXG4gICAqIFRoZSBJRCBvZiB0aGUgZGF0YSBzZWN0aW9uLlxuICAgKlxuICAgKiBUaGlzIHNob3VsZCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcgd2l0aCBubyBzcGFjZXMuXG4gICAqL1xuICBpZDogQ29uZmlnRGF0YUlkO1xuICAvKipcbiAgICogVGhlIGxhYmVsIGZvciB0aGUgZGF0YSBzZWN0aW9uLlxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBkYXRhIGVsZW1lbnRzIHRvIHJlbmRlci5cbiAgICovXG4gIGVsZW1lbnRzOiBDb25maWdEYXRhRWxlbWVudFtdO1xufVxuZXhwb3J0IGludGVyZmFjZSBDb25maWdTdHlsZSB7XG4gIC8qKlxuICAgKiBUaGUgSUQgb2YgdGhlIHN0eWxlIHNlY3Rpb24uXG4gICAqL1xuICBpZDogQ29uZmlnU3R5bGVJZDtcbiAgLyoqXG4gICAqIFRoZSBoZWFkaW5nIGZvciB0aGUgc3R5bGUgc2VjdGlvbi5cbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgc3R5bGUgZWxlbWVudHMgdG8gcmVuZGVyLlxuICAgKi9cbiAgZWxlbWVudHM6IENvbmZpZ1N0eWxlRWxlbWVudFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1RoZW1lU3R5bGUge1xuICB0aGVtZUZpbGxDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICB0aGVtZVJlZj86IFRoZW1lUmVmSW5kZXg7XG4gIH07XG4gIHRoZW1lRm9udENvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgIHRoZW1lUmVmPzogVGhlbWVSZWZJbmRleDtcbiAgfTtcbiAgdGhlbWVBY2NlbnRGaWxsQ29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gICAgdGhlbWVSZWY/OiBUaGVtZVJlZkluZGV4O1xuICB9O1xuICB0aGVtZUFjY2VudEZvbnRDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICB0aGVtZVJlZj86IFRoZW1lUmVmSW5kZXg7XG4gIH07XG4gIHRoZW1lRm9udEZhbWlseTogc3RyaW5nO1xuICB0aGVtZUFjY2VudEZvbnRGYW1pbHk6IHN0cmluZztcbiAgdGhlbWVJbmNyZWFzZUNvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICB9O1xuICB0aGVtZURlY3JlYXNlQ29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gIH07XG4gIHRoZW1lR3JpZENvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICB9O1xuICB0aGVtZVNlcmllc0NvbG9yOiBBcnJheTx7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgIHRoZW1lUmVmPzogVGhlbWVSZWZJbmRleDtcbiAgICBzZXJpZXNSZWY6IFNlcmllc1JlZkluZGV4O1xuICB9Pjtcbn1cblxuaW50ZXJmYWNlIFRoZW1lUmVmSW5kZXgge1xuICBpbmRleDogbnVtYmVyO1xufVxuaW50ZXJmYWNlIFNlcmllc1JlZkluZGV4IHtcbiAgaW5kZXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaGVtZVN0eWxlIHtcbiAgdGhlbWVGaWxsQ29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gICAgdGhlbWVSZWY/OiBUaGVtZVJlZkluZGV4O1xuICB9O1xuICB0aGVtZUZvbnRDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICB0aGVtZVJlZj86IFRoZW1lUmVmSW5kZXg7XG4gIH07XG4gIHRoZW1lQWNjZW50RmlsbENvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgIHRoZW1lUmVmPzogVGhlbWVSZWZJbmRleDtcbiAgfTtcbiAgdGhlbWVBY2NlbnRGb250Q29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gICAgdGhlbWVSZWY/OiBUaGVtZVJlZkluZGV4O1xuICB9O1xuICB0aGVtZUZvbnRGYW1pbHk6IHN0cmluZztcbiAgdGhlbWVBY2NlbnRGb250RmFtaWx5OiBzdHJpbmc7XG4gIHRoZW1lSW5jcmVhc2VDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgfTtcbiAgdGhlbWVEZWNyZWFzZUNvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICB9O1xuICB0aGVtZUdyaWRDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgfTtcbiAgdGhlbWVTZXJpZXNDb2xvcjogQXJyYXk8e1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICB0aGVtZVJlZj86IFRoZW1lUmVmSW5kZXg7XG4gICAgc2VyaWVzUmVmOiBTZXJpZXNSZWZJbmRleDtcbiAgfT47XG59XG5cbmV4cG9ydCBlbnVtIEZpZWxkVHlwZSB7XG4gIFlFQVIgPSAnWUVBUicsXG4gIFlFQVJfUVVBUlRFUiA9ICdZRUFSX1FVQVJURVInLFxuICBZRUFSX01PTlRIID0gJ1lFQVJfTU9OVEgnLFxuICBZRUFSX1dFRUsgPSAnWUVBUl9XRUVLJyxcbiAgWUVBUl9NT05USF9EQVkgPSAnWUVBUl9NT05USF9EQVknLFxuICBZRUFSX01PTlRIX0RBWV9IT1VSID0gJ1lFQVJfTU9OVEhfREFZX0hPVVInLFxuICBRVUFSVEVSID0gJ1FVQVJURVInLFxuICBNT05USCA9ICdNT05USCcsXG4gIFdFRUsgPSAnV0VFSycsXG4gIE1PTlRIX0RBWSA9ICdNT05USF9EQVknLFxuICBEQVlfT0ZfV0VFSyA9ICdEQVlfT0ZfV0VFSycsXG4gIERBWSA9ICdEQVknLFxuICBIT1VSID0gJ0hPVVInLFxuICBNSU5VVEUgPSAnTUlOVVRFJyxcbiAgRFVSQVRJT04gPSAnRFVSQVRJT04nLFxuICBDT1VOVFJZID0gJ0NPVU5UUlknLFxuICBDT1VOVFJZX0NPREUgPSAnQ09VTlRSWV9DT0RFJyxcbiAgQ09OVElORU5UID0gJ0NPTlRJTkVOVCcsXG4gIENPTlRJTkVOVF9DT0RFID0gJ0NPTlRJTkVOVF9DT0RFJyxcbiAgU1VCX0NPTlRJTkVOVCA9ICdTVUJfQ09OVElORU5UJyxcbiAgU1VCX0NPTlRJTkVOVF9DT0RFID0gJ1NVQl9DT05USU5FTlRfQ09ERScsXG4gIFJFR0lPTiA9ICdSRUdJT04nLFxuICBSRUdJT05fQ09ERSA9ICdSRUdJT05fQ09ERScsXG4gIENJVFkgPSAnQ0lUWScsXG4gIENJVFlfQ09ERSA9ICdDSVRZX0NPREUnLFxuICBNRVRST19DT0RFID0gJ01FVFJPX0NPREUnLFxuICBMQVRJVFVERV9MT05HSVRVREUgPSAnTEFUSVRVREVfTE9OR0lUVURFJyxcbiAgTlVNQkVSID0gJ05VTUJFUicsXG4gIFBFUkNFTlQgPSAnUEVSQ0VOVCcsXG4gIFRFWFQgPSAnVEVYVCcsXG4gIEJPT0xFQU4gPSAnQk9PTEVBTicsXG4gIFVSTCA9ICdVUkwnLFxuICBJTUFHRSA9ICdJTUFHRScsXG4gIENVUlJFTkNZX0FFRCA9ICdDVVJSRU5DWV9BRUQnLFxuICBDVVJSRU5DWV9BTEwgPSAnQ1VSUkVOQ1lfQUxMJyxcbiAgQ1VSUkVOQ1lfQVJTID0gJ0NVUlJFTkNZX0FSUycsXG4gIENVUlJFTkNZX0FVRCA9ICdDVVJSRU5DWV9BVUQnLFxuICBDVVJSRU5DWV9CRFQgPSAnQ1VSUkVOQ1lfQkRUJyxcbiAgQ1VSUkVOQ1lfQkdOID0gJ0NVUlJFTkNZX0JHTicsXG4gIENVUlJFTkNZX0JPQiA9ICdDVVJSRU5DWV9CT0InLFxuICBDVVJSRU5DWV9CUkwgPSAnQ1VSUkVOQ1lfQlJMJyxcbiAgQ1VSUkVOQ1lfQ0FEID0gJ0NVUlJFTkNZX0NBRCcsXG4gIENVUlJFTkNZX0NERiA9ICdDVVJSRU5DWV9DREYnLFxuICBDVVJSRU5DWV9DSEYgPSAnQ1VSUkVOQ1lfQ0hGJyxcbiAgQ1VSUkVOQ1lfQ0xQID0gJ0NVUlJFTkNZX0NMUCcsXG4gIENVUlJFTkNZX0NOWSA9ICdDVVJSRU5DWV9DTlknLFxuICBDVVJSRU5DWV9DT1AgPSAnQ1VSUkVOQ1lfQ09QJyxcbiAgQ1VSUkVOQ1lfQ1JDID0gJ0NVUlJFTkNZX0NSQycsXG4gIENVUlJFTkNZX0NaSyA9ICdDVVJSRU5DWV9DWksnLFxuICBDVVJSRU5DWV9ES0sgPSAnQ1VSUkVOQ1lfREtLJyxcbiAgQ1VSUkVOQ1lfRE9QID0gJ0NVUlJFTkNZX0RPUCcsXG4gIENVUlJFTkNZX0VHUCA9ICdDVVJSRU5DWV9FR1AnLFxuICBDVVJSRU5DWV9FVEIgPSAnQ1VSUkVOQ1lfRVRCJyxcbiAgQ1VSUkVOQ1lfRVVSID0gJ0NVUlJFTkNZX0VVUicsXG4gIENVUlJFTkNZX0dCUCA9ICdDVVJSRU5DWV9HQlAnLFxuICBDVVJSRU5DWV9IS0QgPSAnQ1VSUkVOQ1lfSEtEJyxcbiAgQ1VSUkVOQ1lfSFJLID0gJ0NVUlJFTkNZX0hSSycsXG4gIENVUlJFTkNZX0hVRiA9ICdDVVJSRU5DWV9IVUYnLFxuICBDVVJSRU5DWV9JRFIgPSAnQ1VSUkVOQ1lfSURSJyxcbiAgQ1VSUkVOQ1lfSUxTID0gJ0NVUlJFTkNZX0lMUycsXG4gIENVUlJFTkNZX0lOUiA9ICdDVVJSRU5DWV9JTlInLFxuICBDVVJSRU5DWV9JUlIgPSAnQ1VSUkVOQ1lfSVJSJyxcbiAgQ1VSUkVOQ1lfSVNLID0gJ0NVUlJFTkNZX0lTSycsXG4gIENVUlJFTkNZX0pNRCA9ICdDVVJSRU5DWV9KTUQnLFxuICBDVVJSRU5DWV9KUFkgPSAnQ1VSUkVOQ1lfSlBZJyxcbiAgQ1VSUkVOQ1lfS1JXID0gJ0NVUlJFTkNZX0tSVycsXG4gIENVUlJFTkNZX0xLUiA9ICdDVVJSRU5DWV9MS1InLFxuICBDVVJSRU5DWV9MVEwgPSAnQ1VSUkVOQ1lfTFRMJyxcbiAgQ1VSUkVOQ1lfTU5UID0gJ0NVUlJFTkNZX01OVCcsXG4gIENVUlJFTkNZX01WUiA9ICdDVVJSRU5DWV9NVlInLFxuICBDVVJSRU5DWV9NWE4gPSAnQ1VSUkVOQ1lfTVhOJyxcbiAgQ1VSUkVOQ1lfTVlSID0gJ0NVUlJFTkNZX01ZUicsXG4gIENVUlJFTkNZX05PSyA9ICdDVVJSRU5DWV9OT0snLFxuICBDVVJSRU5DWV9OWkQgPSAnQ1VSUkVOQ1lfTlpEJyxcbiAgQ1VSUkVOQ1lfUEFCID0gJ0NVUlJFTkNZX1BBQicsXG4gIENVUlJFTkNZX1BFTiA9ICdDVVJSRU5DWV9QRU4nLFxuICBDVVJSRU5DWV9QSFAgPSAnQ1VSUkVOQ1lfUEhQJyxcbiAgQ1VSUkVOQ1lfUEtSID0gJ0NVUlJFTkNZX1BLUicsXG4gIENVUlJFTkNZX1BMTiA9ICdDVVJSRU5DWV9QTE4nLFxuICBDVVJSRU5DWV9ST04gPSAnQ1VSUkVOQ1lfUk9OJyxcbiAgQ1VSUkVOQ1lfUlNEID0gJ0NVUlJFTkNZX1JTRCcsXG4gIENVUlJFTkNZX1JVQiA9ICdDVVJSRU5DWV9SVUInLFxuICBDVVJSRU5DWV9TQVIgPSAnQ1VSUkVOQ1lfU0FSJyxcbiAgQ1VSUkVOQ1lfU0VLID0gJ0NVUlJFTkNZX1NFSycsXG4gIENVUlJFTkNZX1NHRCA9ICdDVVJSRU5DWV9TR0QnLFxuICBDVVJSRU5DWV9USEIgPSAnQ1VSUkVOQ1lfVEhCJyxcbiAgQ1VSUkVOQ1lfVFJZID0gJ0NVUlJFTkNZX1RSWScsXG4gIENVUlJFTkNZX1RXRCA9ICdDVVJSRU5DWV9UV0QnLFxuICBDVVJSRU5DWV9UWlMgPSAnQ1VSUkVOQ1lfVFpTJyxcbiAgQ1VSUkVOQ1lfVUFIID0gJ0NVUlJFTkNZX1VBSCcsXG4gIENVUlJFTkNZX1VTRCA9ICdDVVJSRU5DWV9VU0QnLFxuICBDVVJSRU5DWV9VWVUgPSAnQ1VSUkVOQ1lfVVlVJyxcbiAgQ1VSUkVOQ1lfVkVGID0gJ0NVUlJFTkNZX1ZFRicsXG4gIENVUlJFTkNZX1ZORCA9ICdDVVJSRU5DWV9WTkQnLFxuICBDVVJSRU5DWV9ZRVIgPSAnQ1VSUkVOQ1lfWUVSJyxcbiAgQ1VSUkVOQ1lfWkFSID0gJ0NVUlJFTkNZX1pBUicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFibGUge1xuICAvKipcbiAgICogVGhlIHR5cGUgb2YgdGhlIHRhYmxlLlxuICAgKi9cbiAgaWQ6IFRhYmxlVHlwZTtcbiAgLyoqXG4gICAqIFRoZSBbW0ZpZWxkSWRdXXMgb2YgdGhlIGZpZWxkcyBzZWxlY3RlZCBieSB0aGUgdXNlci5cbiAgICovXG4gIGZpZWxkczogRmllbGRJZFtdO1xuICAvKipcbiAgICogVGhlIHJvd3Mgb2YgZGF0YSBWYWx1ZXMuXG4gICAqL1xuICByb3dzOiBEU1Jvd1tdO1xufVxuXG4vKipcbiAqIEEgcm93IG9mIHZhbHVlcy5cbiAqXG4gKiBUaGUgb3JkZXIgb2YgdmFsdWVzIGNvcnJlc3BvbmRzIHRvIHRoZSBvcmRlciBvZiB0aGUgZmllbGRzIG9mIGFsbCBkYXRhIGVsZW1lbnQgZmllbGQgb2JqZWN0cy5cbiAqL1xuXG5leHBvcnQgdHlwZSBEU1JvdyA9IERTUm93VmFsdWVbXTtcbi8qKlxuICogQSB2YWx1ZSBmb3IgYW4gZW50cnkgaW4gYSBEU1Jvdy5cbiAqL1xuZXhwb3J0IHR5cGUgRFNSb3dWYWx1ZSA9IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnRGF0YUVsZW1lbnRNZXRyaWMge1xuICAvKipcbiAgICogVGhlIGRhdGEgZWxlbWVudCB0eXBlIHRvIHJlbmRlci5cbiAgICovXG4gIHR5cGU6IENvbmZpZ0RhdGFFbGVtZW50VHlwZS5NRVRSSUM7XG4gIC8qKlxuICAgKiBUaGUgSUQgb2YgdGhlIG1ldHJpYy5cbiAgICpcbiAgICogVGhpcyBzaG91bGQgYmUgYSBub24tZW1wdHkgc3RyaW5nIHdpdGggbm8gc3BhY2VzLlxuICAgKi9cbiAgaWQ6IENvbmZpZ0RhdGFFbGVtZW50SWQ7XG4gIC8qKlxuICAgKiBUaGUgdG9vbHRpcCBvciBsYWJlbCBmb3IgdGhlIG1ldHJpYy5cbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZGF0YSBvcHRpb25zIGZvciBhIE1ldHJpYy5cbiAgICovXG4gIG9wdGlvbnM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgbWluaW11bSBudW1iZXIgb2YgbWV0cmljcyBzdXBwb3J0ZWQuXG4gICAgICovXG4gICAgbWluPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBtZXRyaWNzIHN1cHBvcnRlZC5cbiAgICAgKi9cbiAgICBtYXg/OiBudW1iZXI7XG4gIH07XG4gIC8qKlxuICAgKiBUaGUgbGlzdCBvZiBbW0ZpZWxkSWRdXXMgc2VsZWN0ZWQgYnkgdGhlIHVzZXIuXG4gICAqL1xuICB2YWx1ZTogRmllbGRJZFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0RhdGFFbGVtZW50RGltZW5zaW9uIHtcbiAgLyoqXG4gICAqIFRoZSBkYXRhIGVsZW1lbnQgdHlwZSB0byByZW5kZXIuXG4gICAqL1xuICB0eXBlOiBDb25maWdEYXRhRWxlbWVudFR5cGUuRElNRU5TSU9OO1xuICAvKipcbiAgICogVGhlIElEIG9mIHRoZSBkaW1lbnNpb24uXG4gICAqXG4gICAqIFRoaXMgc2hvdWxkIGJlIGEgbm9uLWVtcHR5IHN0cmluZyB3aXRoIG5vIHNwYWNlcy5cbiAgICovXG4gIGlkOiBDb25maWdEYXRhRWxlbWVudElkO1xuICAvKipcbiAgICogVGhlIHRvb2x0aXAgb3IgbGFiZWwgZm9yIHRoZSBkaW1lbnNpb24uXG4gICAqL1xuICBsYWJlbDogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGRhdGEgb3B0aW9ucyBmb3IgYSBEaW1lbnNpb24uXG4gICAqL1xuICBvcHRpb25zOiB7XG4gICAgLyoqXG4gICAgICogVGhlIG1pbmltdW0gbnVtYmVyIG9mIGRpbWVuc2lvbnMgc3VwcG9ydGVkLlxuICAgICAqL1xuICAgIG1pbj86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgbWF4aW11bSBudW1iZXIgb2YgZGltZW5zaW9ucyBzdXBwb3J0ZWQuXG4gICAgICovXG4gICAgbWF4PzogbnVtYmVyO1xuICAgIHN1cHBvcnRlZFR5cGVzPzogQXJyYXk8J1RJTUUnIHwgJ0dFTycgfCAnREVGQVVMVCc+O1xuICB9O1xuICAvKipcbiAgICogVGhlIGxpc3Qgb2YgW1tGaWVsZElkXV1zIHNlbGVjdGVkIGJ5IHRoZSB1c2VyLlxuICAgKi9cbiAgdmFsdWU6IEZpZWxkSWRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdEYXRhRWxlbWVudE1heFJlc3VsdHMge1xuICAvKipcbiAgICogVGhlIGRhdGEgZWxlbWVudCB0eXBlIHRvIHJlbmRlci5cbiAgICovXG4gIHR5cGU6IENvbmZpZ0RhdGFFbGVtZW50VHlwZS5NQVhfUkVTVUxUUztcbiAgLyoqXG4gICAqIFRoZSBJRCBvZiB0aGUgbWF4IHJlc3VsdHMuXG4gICAqXG4gICAqIFRoaXMgc2hvdWxkIGJlIGEgbm9uLWVtcHR5IHN0cmluZyB3aXRoIG5vIHNwYWNlcy5cbiAgICovXG4gIGlkOiBDb25maWdEYXRhRWxlbWVudElkO1xuICAvKipcbiAgICogVGhlIHRvb2x0aXAgb3IgbGFiZWwgZm9yIHRoZSBtYXggcmVzdWx0cy5cbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZGF0YSBvcHRpb25zIGZvciBhIE1heCBSZXN1bHRzLlxuICAgKi9cbiAgb3B0aW9uczoge1xuICAgIC8qKlxuICAgICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiByb3dzLlxuICAgICAqL1xuICAgIG1heDogbnVtYmVyO1xuICB9O1xufVxuXG5leHBvcnQgdHlwZSBDb25maWdEYXRhRWxlbWVudCA9XG4gIHwgQ29uZmlnRGF0YUVsZW1lbnRNYXhSZXN1bHRzXG4gIHwgQ29uZmlnRGF0YUVsZW1lbnRNZXRyaWNcbiAgfCBDb25maWdEYXRhRWxlbWVudERpbWVuc2lvbjtcblxuLy8gVE9ETzogdGhpcyBzaG91bGQgZXZlbnR1YWxseSBhbHdheXMgYmUgYSB2YWx1ZVxuZXhwb3J0IHR5cGUgQ29uZmlnU3R5bGVWYWx1ZSA9IHN0cmluZyB8IHt9IHwgYm9vbGVhbiB8IHtjb2xvcjogc3RyaW5nfTtcblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdTdHlsZUVsZW1lbnQge1xuICAvKipcbiAgICogVGhlIHN0eWxlIGVsZW1lbnQgdHlwZSB0byByZW5kZXIuXG4gICAqL1xuICB0eXBlOiBDb25maWdTdHlsZUVsZW1lbnRUeXBlO1xuICAvKipcbiAgICogVGhlIElEIG9mIHRoZSBzdHlsZSBlbGVtZW50LlxuICAgKlxuICAgKiBUaGlzIHNob3VsZCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcgd2l0aCBubyBzcGFjZXMuXG4gICAqL1xuICBpZDogQ29uZmlnU3R5bGVFbGVtZW50SWQ7XG4gIC8qKlxuICAgKiBUaGUgdG9vbHRpcCBvciBsYWJlbCBmb3IgdGhlIHN0eWxlIGVsZW1lbnQuXG4gICAqXG4gICAqIFRoaXMgaXMgdGhlIGxhYmVsIHRleHQgZm9yIGEgYENIRUNLQk9YYCBlbGVtZW50IGFuZCB0aGUgdG9vbHRpcCB0ZXh0IGZvciBvdGhlciBlbGVtZW50cy5cbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBmb3IgdGhlIHN0eWxlIGVsZW1lbnQuXG4gICAqXG4gICAqIEludmFsaWQgdmFsdWVzIHdpbGwgYmUgaWdub3JlZC5cbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogQ29uZmlnU3R5bGVWYWx1ZTtcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBzdHlsZSBlbGVtZW50LlxuICAgKi9cbiAgdmFsdWU6IENvbmZpZ1N0eWxlVmFsdWU7XG59XG5leHBvcnQgZW51bSBUYWJsZVR5cGUge1xuICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICBDT01QQVJJU09OID0gJ0NPTVBBUklTT04nLFxuICBTVU1NQVJZID0gJ1NVTU1BUlknLFxufVxuXG5leHBvcnQgZW51bSBEYXRlUmFuZ2VUeXBlIHtcbiAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgQ09NUEFSSVNPTiA9ICdDT01QQVJJU09OJyxcbn1cblxuZXhwb3J0IGVudW0gQ29uZmlnRGF0YUVsZW1lbnRUeXBlIHtcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSBtZXRyaWMgZmllbGQgZWxlbWVudC5cbiAgICovXG4gIE1FVFJJQyA9ICdNRVRSSUMnLFxuICAvKipcbiAgICogUmVuZGVycyBhIGRpbWVuc2lvbiBmaWVsZCBlbGVtZW50LlxuICAgKi9cbiAgRElNRU5TSU9OID0gJ0RJTUVOU0lPTicsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgZHJvcGRvd24gdGhhdCBhZmZlY3RzIHRoZSBtYXhpbXVtIG51bWJlciBvZiByZXN1bHRzIHJldHVybmVkLlxuICAgKi9cbiAgTUFYX1JFU1VMVFMgPSAnTUFYX1JFU1VMVFMnLFxufVxuXG5leHBvcnQgZW51bSBDb25maWdTdHlsZUVsZW1lbnRUeXBlIHtcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSB0ZXh0IGlucHV0IGJveC5cbiAgICovXG4gIFRFWFRJTlBVVCA9ICdURVhUSU5QVVQnLFxuICAvKipcbiAgICogQSBzaW5nbGUgc2VsZWN0IGRyb3Bkb3duLlxuICAgKi9cbiAgU0VMRUNUX1NJTkdMRSA9ICdTRUxFQ1RfU0lOR0xFJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSBjaGVja2JveC5cbiAgICpcbiAgICogRGVmYXVsdCB2YWx1ZTogYGZhbHNlYFxuICAgKi9cbiAgQ0hFQ0tCT1ggPSAnQ0hFQ0tCT1gnLFxuICAvKipcbiAgICogUmVuZGVycyB0aGUgZm9udCBjb2xvciBzZWxlY3Rvci5cbiAgICpcbiAgICogQWNjZXB0YWJsZSBkZWZhdWx0IHZhbHVlczogSEVYIGNvbG9yIHZhbHVlLiBFLmcuIGBcIiM4ODg4ODhcImAuXG4gICAqXG4gICAqIERlZmF1bHQgdmFsdWU6IGBcIiMwMDBcImAuXG4gICAqL1xuICBGT05UX0NPTE9SID0gJ0ZPTlRfQ09MT1InLFxuICAvKipcbiAgICogUmVuZGVycyB0aGUgZm9udCBzaXplIHNlbGVjdG9yLlxuICAgKlxuICAgKiBEZWZhdWx0IHZhbHVlOiBgXCIxNHB4XCJgLlxuICAgKi9cbiAgRk9OVF9TSVpFID0gJ0ZPTlRfU0laRScsXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBmb250IGZhbWlseSBzZWxlY3Rvci5cbiAgICpcbiAgICogRGVmYXVsdCB2YWx1ZTogYFwiXCJgXG4gICAqL1xuICBGT05UX0ZBTUlMWSA9ICdGT05UX0ZBTUlMWScsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgZmlsbCBjb2xvciBzZWxlY3Rvci5cbiAgICpcbiAgICogQWNjZXB0YWJsZSBkZWZhdWx0IHZhbHVlczogSEVYIGNvbG9yIHZhbHVlLlxuICAgKi9cbiAgRklMTF9DT0xPUiA9ICdGSUxMX0NPTE9SJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSBib3JkZXIgY29sb3Igc2VsZWN0b3IuXG4gICAqXG4gICAqIEFjY2VwdGFibGUgZGVmYXVsdCB2YWx1ZXM6IEhFWCBjb2xvciB2YWx1ZS5cbiAgICovXG4gIEJPUkRFUl9DT0xPUiA9ICdCT1JERVJfQ09MT1InLFxuICAvKipcbiAgICogUmVuZGVycyBhbiBheGlzIGNvbG9yIHNlbGVjdG9yLlxuICAgKlxuICAgKiBBY2NlcHRhYmxlIGRlZmF1bHQgdmFsdWVzOiBIRVggY29sb3IgdmFsdWUuXG4gICAqL1xuICBBWElTX0NPTE9SID0gJ0FYSVNfQ09MT1InLFxuICAvKipcbiAgICogUmVuZGVycyBhIGdyaWQgY29sb3Igc2VsZWN0b3IuXG4gICAqXG4gICAqIEFjY2VwdGFibGUgZGVmYXVsdCB2YWx1ZXM6IEhFWCBjb2xvciB2YWx1ZS5cbiAgICovXG4gIEdSSURfQ09MT1IgPSAnR1JJRF9DT0xPUicsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGFuIG9wYWNpdHkgc2VsZWN0b3IuXG4gICAqL1xuICBPUEFDSVRZID0gJ09QQUNJVFknLFxuICAvKipcbiAgICogUmVuZGVycyBhIGxpbmUgd2VpZ2h0IHBpY2tlci5cbiAgICovXG4gIExJTkVfV0VJR0hUID0gJ0xJTkVfV0VJR0hUJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSBsaW5lIHN0eWxlIHBpY2tlci5cbiAgICpcbiAgICogQWNjZXB0YWJsZSBkZWZhdWx0IHZhbHVlczogYFwic29saWRcImAsIGBcImRhc2hlZFwiYCwgYFwiZG90dGVkXCJgLCBvciBgXCJkb3VibGVcImAuXG4gICAqL1xuICBMSU5FX1NUWUxFID0gJ0xJTkVfU1RZTEUnLFxuICAvKipcbiAgICogUmVuZGVycyBhIGJvcmRlciByYWRpdXMgc2VsZWN0b3IuXG4gICAqL1xuICBCT1JERVJfUkFESVVTID0gJ0JPUkRFUl9SQURJVVMnLFxuICAvKipcbiAgICogUmVuZGVycyBhbiBpbnRlcnZhbCBzZWxlY3Rvci5cbiAgICovXG4gIElOVEVSVkFMID0gJ0lOVEVSVkFMJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSByYWRpbyBzZWxlY3Qgd2l0aCBwcmUtZGVmaW5lZCB2YWx1ZXMuXG4gICAqL1xuICBTRUxFQ1RfUkFESU8gPSAnU0VMRUNUX1JBRElPJyxcbn1cblxuZXhwb3J0IHR5cGUgRFNJbnRlcmFjdGlvbkRhdGEgPSBEU0ludGVyYWN0aW9uRmlsdGVyRGF0YTtcblxuZXhwb3J0IGludGVyZmFjZSBEU0ludGVyYWN0aW9uRmlsdGVyRGF0YSB7XG4gIHN1cHBvcnRlZEFjdGlvbnM6IERTSW50ZXJhY3Rpb25UeXBlW107XG4gIGlkOiBJbnRlcmFjdGlvbklkO1xuICB2YWx1ZTogRFNJbnRlcmFjdGlvbkZpbHRlclZhbHVlO1xufVxuXG5leHBvcnQgZW51bSBEU0ludGVyYWN0aW9uVHlwZSB7XG4gIEZJTFRFUiA9ICdGSUxURVInLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERTSW50ZXJhY3Rpb25GaWx0ZXJWYWx1ZSB7XG4gIHR5cGU6IERTSW50ZXJhY3Rpb25UeXBlO1xuICBkYXRhOiBJbnRlcmFjdGlvbkRhdGE7XG59XG5cbi8vIEFsaWFzZXNcbmV4cG9ydCB0eXBlIEZpZWxkSWQgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBDb25maWdEYXRhSWQgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBDb25maWdTdHlsZUlkID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgQ29uZmlnRGF0YUVsZW1lbnRJZCA9IHN0cmluZztcbmV4cG9ydCB0eXBlIENvbmZpZ1N0eWxlRWxlbWVudElkID0gc3RyaW5nO1xuXG4vLyBDdXN0b20gdHlwZXMgZm9yIExpYnJhcnlcbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2VkSW1hZ2Uge1xuICBvcmlnaW5hbFVybDogc3RyaW5nO1xuICBwcm94aWVkVXJsPzogc3RyaW5nO1xuICBhbHRUZXh0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpZWxkc0J5SWQge1xuICAvLyBBbiBpbmRleGVkIFR5cGUgY2Fubm90IGJlIGEgdHlwZSBhbGlhcyA6KFxuICBbZmllbGRJZDogc3RyaW5nXTogRmllbGQ7XG59XG5cbmV4cG9ydCB0eXBlIFBhcnNlZFJvdyA9IFBhcnNlZFJvd1ZhbHVlW107XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm93QnlDb25maWdJZCB7XG4gIFtjb25maWdJZDogc3RyaW5nXTogUGFyc2VkUm93O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlc0J5VHlwZSB7XG4gIFtUYWJsZVR5cGUuREVGQVVMVF06IFJvd0J5Q29uZmlnSWRbXTtcbiAgW1RhYmxlVHlwZS5DT01QQVJJU09OXTogUm93QnlDb25maWdJZFtdO1xuICBbVGFibGVUeXBlLlNVTU1BUlldOiBSb3dCeUNvbmZpZ0lkW107XG59XG5cbmV4cG9ydCB0eXBlIFBhcnNlZFJvd1ZhbHVlID0gc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IFBhcnNlZEltYWdlO1xuXG5leHBvcnQgdHlwZSBSb3dIZWFkaW5nID0gRmllbGQgJiB7Y29uZmlnSWQ6IHN0cmluZ307XG5leHBvcnQgdHlwZSBSb3dFbnRyeSA9IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XG5leHBvcnQgdHlwZSBSb3cgPSBSb3dFbnRyeVtdO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZpZWxkc0J5Q29uZmlnSWQge1xuICBbY29uZmlnSWQ6IHN0cmluZ106IEZpZWxkW107XG59XG5cbmV4cG9ydCB0eXBlIFN0eWxlVGhlbWUgPSBhbnk7XG5leHBvcnQgdHlwZSBTdHlsZUVudHJ5ID0gYW55O1xuZXhwb3J0IHR5cGUgU3R5bGVWYWx1ZSA9IFN0eWxlVGhlbWUgfCBTdHlsZUVudHJ5O1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlQnlJZCB7XG4gIFtzdHlsZUlkOiBzdHJpbmddOiBTdHlsZVZhbHVlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlRGF0YSB7XG4gIGhlYWRlcnM6IFJvd0hlYWRpbmdbXTtcbiAgcm93czogUm93W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVzIHtcbiAgW1RhYmxlVHlwZS5ERUZBVUxUXTogVGFibGVEYXRhO1xuICBbVGFibGVUeXBlLkNPTVBBUklTT05dPzogVGFibGVEYXRhO1xuICBbVGFibGVUeXBlLlNVTU1BUlldPzogVGFibGVEYXRhO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlRm9ybWF0IHtcbiAgZmllbGRzOiBGaWVsZHNCeUNvbmZpZ0lkO1xuICBzdHlsZTogU3R5bGVCeUlkO1xuICB0YWJsZXM6IFRhYmxlcztcbiAgZGF0ZVJhbmdlczogRGF0ZVJhbmdlc0J5SWQ7XG4gIHRoZW1lOiBUaGVtZVN0eWxlO1xuICBpbnRlcmFjdGlvbnM6IEludGVyYWN0aW9uc0J5SWQ7XG4gIGNvbG9yTWFwOiBDb2xvcnNCeURpbWVuc2lvbjtcbn1cblxuZXhwb3J0IHR5cGUgVGFibGVUcmFuc2Zvcm0gPSAobWVzc2FnZTogTWVzc2FnZSkgPT4gVGFibGVGb3JtYXQ7XG5cbmV4cG9ydCB0eXBlIENvbmZpZ0lkID0gc3RyaW5nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN1YnNjcmlwdGlvbnNPcHRpb25zPFQ+IHtcbiAgdHJhbnNmb3JtOiAobWVzc2FnZTogTWVzc2FnZSkgPT4gVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RSb3cge1xuICBbY29uZmlnSWQ6IHN0cmluZ106IFJvd0VudHJ5W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0VGFibGVzIHtcbiAgW1RhYmxlVHlwZS5ERUZBVUxUXTogT2JqZWN0Um93W107XG4gIFtUYWJsZVR5cGUuQ09NUEFSSVNPTl0/OiBPYmplY3RSb3dbXTtcbiAgW1RhYmxlVHlwZS5TVU1NQVJZXT86IE9iamVjdFJvd1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVSYW5nZXNCeUlkIHtcbiAgW0RhdGVSYW5nZVR5cGUuREVGQVVMVF0/OiB7XG4gICAgc3RhcnQ6IHN0cmluZztcbiAgICBlbmQ6IHN0cmluZztcbiAgfTtcbiAgW0RhdGVSYW5nZVR5cGUuQ09NUEFSSVNPTl0/OiB7XG4gICAgc3RhcnQ6IHN0cmluZztcbiAgICBlbmQ6IHN0cmluZztcbiAgfTtcbn1cblxuLyogQSBtYXAgb2YgZGltZW5zaW9uIHZhbHVlcyB0byBoZXggc3RyaW5nIGNvbG9ycyAqL1xuZXhwb3J0IHR5cGUgQ29sb3JzQnlEaW1lbnNpb24gPSB7XG4gIFtkaW1lbnNpb246IHN0cmluZ106IHN0cmluZztcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0Rm9ybWF0IHtcbiAgZmllbGRzOiBGaWVsZHNCeUNvbmZpZ0lkO1xuICBzdHlsZTogU3R5bGVCeUlkO1xuICB0YWJsZXM6IE9iamVjdFRhYmxlcztcbiAgZGF0ZVJhbmdlczogRGF0ZVJhbmdlc0J5SWQ7XG4gIHRoZW1lOiBUaGVtZVN0eWxlO1xuICBpbnRlcmFjdGlvbnM6IEludGVyYWN0aW9uc0J5SWQ7XG4gIGNvbG9yTWFwOiBDb2xvcnNCeURpbWVuc2lvbjtcbn1cblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50SWQgPSBzdHJpbmc7XG5cbmV4cG9ydCB0eXBlIE9iamVjdFRyYW5zZm9ybSA9IChtZXNzYWdlOiBNZXNzYWdlKSA9PiBPYmplY3RGb3JtYXQ7XG5cbmV4cG9ydCBlbnVtIFRvRFNNZXNzYWdlVHlwZSB7XG4gIFZJWl9SRUFEWSA9ICd2aXpSZWFkeScsXG4gIElOVEVSQUNUSU9OID0gJ3ZpekFjdGlvbicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVml6UmVhZHlNZXNzYWdlIHtcbiAgdHlwZTogVG9EU01lc3NhZ2VUeXBlLlZJWl9SRUFEWTtcbiAgY29tcG9uZW50SWQ6IENvbXBvbmVudElkO1xufVxuXG4vLyBJbnRlcmFjdGlvbiBUeXBlc1xuZXhwb3J0IGludGVyZmFjZSBJbnRlcmFjdGlvbk1lc3NhZ2Uge1xuICB0eXBlOiBUb0RTTWVzc2FnZVR5cGUuSU5URVJBQ1RJT047XG4gIGlkOiBJbnRlcmFjdGlvbklkO1xuICBkYXRhOiBJbnRlcmFjdGlvbkRhdGE7XG4gIGNvbXBvbmVudElkOiBDb21wb25lbnRJZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZW5kSW50ZXJhY3Rpb24ge1xuICAvLyBUT0RPIC0gcmVtb3ZlIHRoaXMgb25jZSB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIGludGVyYWN0aW9uIHR5cGUuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBjYWxsYWJsZS10eXBlc1xuICAoXG4gICAgYWN0aW9uSWQ6IEludGVyYWN0aW9uSWQsXG4gICAgaW50ZXJhY3Rpb246IEludGVyYWN0aW9uVHlwZS5GSUxURVIsXG4gICAgZGF0YTogRmlsdGVySW50ZXJhY3Rpb25EYXRhXG4gICk6IHZvaWQ7XG4gIC8vIFRPRE8gLSBXaGVuIHRoZXJlIGFyZSBtb3JlIEludGVyYWN0aW9uIHR5cGVzLCB0aGUgbmV3IG9uZXMgc2hvdWxkIGJlIGFkZGVkIGhlcmUgd2l0aCB0aGVpciBvd24gc2lnbmF0dXJlLlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW50ZXJhY3Rpb24ge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgY2FsbGFibGUtdHlwZXNcbiAgKFxuICAgIGFjdGlvbklkOiBJbnRlcmFjdGlvbklkLFxuICAgIGludGVyYWN0aW9uOiBJbnRlcmFjdGlvblR5cGUuRklMVEVSLFxuICAgIGRhdGE6IHVuZGVmaW5lZFxuICApOiB2b2lkO1xufVxuXG5leHBvcnQgdHlwZSBDb25jZXB0SWQgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBGaWx0ZXJQYXJhbVZhbHVlID0gc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbjtcblxuZXhwb3J0IGludGVyZmFjZSBGaWx0ZXJJbnRlcmFjdGlvbkRhdGEge1xuICBjb25jZXB0czogQ29uY2VwdElkW107XG4gIHZhbHVlczogRmlsdGVyUGFyYW1WYWx1ZVtdW107XG59XG5cbmV4cG9ydCBlbnVtIEludGVyYWN0aW9uVHlwZSB7XG4gIEZJTFRFUiA9ICdGSUxURVInLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEludGVyYWN0aW9uVmFsdWUge1xuICB0eXBlOiBJbnRlcmFjdGlvblR5cGU7XG4gIGRhdGE6IEludGVyYWN0aW9uRGF0YTtcbn1cblxuZXhwb3J0IHR5cGUgSW50ZXJhY3Rpb25EYXRhID0gRmlsdGVySW50ZXJhY3Rpb25EYXRhO1xuXG5leHBvcnQgdHlwZSBJbnRlcmFjdGlvbklkID0gc3RyaW5nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEludGVyYWN0aW9uIHtcbiAgc3VwcG9ydGVkQWN0aW9uczogSW50ZXJhY3Rpb25UeXBlW107XG4gIHZhbHVlOiBJbnRlcmFjdGlvblZhbHVlIHwge307XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW50ZXJhY3Rpb25zQnlJZCB7XG4gIFtpbnRlcmFjdGlvbklkOiBzdHJpbmddOiBJbnRlcmFjdGlvbjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=