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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kc2NjL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kc2NjL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RzY2MvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZHNjYy8uL3NyYy90eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7Ozs7Ozs7Ozs7OztFQWVFO0FBQ0YsbUVBMENpQjtBQUVqQix1REFBdUQ7QUFDdkQsK0RBQXdCO0FBRXhCOzs7Ozs7OztHQVFHO0FBQ1UsZ0JBQVEsR0FBRyxjQUFjLGVBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUF6QixD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Ozs7O09BSUc7SUFDSCxxREFBMkI7SUFDM0I7Ozs7T0FJRztJQUNILG1EQUF5QjtJQUN6Qjs7OztPQUlHO0lBQ0gsdURBQTZCO0lBQzdCOzs7O09BSUc7SUFDSCxtREFBeUI7SUFDekI7Ozs7T0FJRztJQUNILG1EQUF5QjtJQUN6Qjs7T0FFRztJQUNILDZDQUFtQjtJQUNuQjs7T0FFRztJQUNILHFEQUEyQjtJQUMzQjs7OztPQUlHO0lBQ0gsbURBQXlCO0lBQ3pCOztPQUVHO0lBQ0gseURBQStCO0lBQy9COztPQUVHO0lBQ0gsK0NBQXFCO0lBQ3JCOztPQUVHO0lBQ0gsdURBQTZCO0FBQy9CLENBQUMsRUFyRlcsc0JBQXNCLEdBQXRCLDhCQUFzQixLQUF0Qiw4QkFBc0IsUUFxRmpDO0FBVUQsSUFBWSxpQkFFWDtBQUZELFdBQVksaUJBQWlCO0lBQzNCLHNDQUFpQjtBQUNuQixDQUFDLEVBRlcsaUJBQWlCLEdBQWpCLHlCQUFpQixLQUFqQix5QkFBaUIsUUFFNUI7QUFzSEQsSUFBWSxlQUdYO0FBSEQsV0FBWSxlQUFlO0lBQ3pCLHlDQUFzQjtJQUN0Qiw0Q0FBeUI7QUFDM0IsQ0FBQyxFQUhXLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVCQUFlLFFBRzFCO0FBMkNELElBQVksZUFFWDtBQUZELFdBQVksZUFBZTtJQUN6QixvQ0FBaUI7QUFDbkIsQ0FBQyxFQUZXLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVCQUFlLFFBRTFCIiwiZmlsZSI6ImRzY2MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImRzY2NcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZHNjY1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkc2NjXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8qIVxuICBAbGljZW5zZVxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7XG4gIENsZWFySW50ZXJhY3Rpb24sXG4gIENvbmZpZ0RhdGEsXG4gIENvbmZpZ0RhdGFFbGVtZW50LFxuICBDb25maWdEYXRhRWxlbWVudERpbWVuc2lvbixcbiAgQ29uZmlnRGF0YUVsZW1lbnRNZXRyaWMsXG4gIENvbmZpZ0RhdGFFbGVtZW50VHlwZSxcbiAgQ29uZmlnSWQsXG4gIENvbmZpZ1N0eWxlLFxuICBDb25maWdTdHlsZUVsZW1lbnQsXG4gIERhdGVSYW5nZXNCeUlkLFxuICBEU0ludGVyYWN0aW9uRGF0YSxcbiAgRFNJbnRlcmFjdGlvblR5cGUsXG4gIERTUm93VmFsdWUsXG4gIEZpZWxkLFxuICBGaWVsZElkLFxuICBGaWVsZHNCeUNvbmZpZ0lkLFxuICBGaWVsZHNCeUlkLFxuICBJbnRlcmFjdGlvbixcbiAgSW50ZXJhY3Rpb25NZXNzYWdlLFxuICBJbnRlcmFjdGlvbnNCeUlkLFxuICBJbnRlcmFjdGlvblR5cGUsXG4gIE1lc3NhZ2UsXG4gIE1lc3NhZ2VUeXBlLFxuICBPYmplY3RSb3csXG4gIE9iamVjdFRhYmxlcyxcbiAgT2JqZWN0VHJhbnNmb3JtLFxuICBQYXJzZWRJbWFnZSxcbiAgUG9zdE1lc3NhZ2UsXG4gIFJvdyxcbiAgUm93SGVhZGluZyxcbiAgU2VuZEludGVyYWN0aW9uLFxuICBTdHlsZUJ5SWQsXG4gIFN1YnNjcmlwdGlvbnNPcHRpb25zLFxuICBUYWJsZSxcbiAgVGFibGVGb3JtYXQsXG4gIFRhYmxlcyxcbiAgVGFibGVUcmFuc2Zvcm0sXG4gIFRhYmxlVHlwZSxcbiAgVGhlbWVTdHlsZSxcbiAgVG9EU01lc3NhZ2VUeXBlLFxuICBWaXpSZWFkeU1lc3NhZ2UsXG59IGZyb20gJy4vdHlwZXMnO1xuXG4vLyBNYWtlIGFsbCBleHBvcnRlZCB0eXBlcyBhdmFpbGFibGUgdG8gZXh0ZXJuYWwgdXNlcnMuXG5leHBvcnQgKiBmcm9tICcuL3R5cGVzJztcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB3aWR0aCAoaW4gcGl4ZWxzKSBvZiB0aGUgdmlzJ3MgaWZyYW1lLlxuICpcbiAqIFVzYWdlOlxuICogYGBgXG4gKiB2YXIgbXlXaWR0aCA9IGRzY2MuZ2V0V2lkdGgoKTtcbiAqIGNvbnNvbGUubG9nKCdNeSB3aWR0aCBpczogJywgbXlXaWR0aCk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFdpZHRoID0gKCk6IG51bWJlciA9PiBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGhlaWdodCAoaW4gcGl4ZWxzKSBvZiB0aGUgdmlzJ3MgaWZyYW1lLlxuICpcbiAqIFVzYWdlOlxuICogYGBgXG4gKiB2YXIgbXlIZWlnaHQgPSBkc2NjLmdldEhlaWdodCgpO1xuICogY29uc29sZS5sb2coJ015IGhlaWdodCBpczogJywgbXlIZWlnaHQpO1xuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRIZWlnaHQgPSAoKTogbnVtYmVyID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgY29tcG9uZW50SWQgb2YgdGhlIHZpcy4gQ29tcG9uZW50IGlkcyB1bmlxdWVseSBpZGVudGlmeSBhIHZpcyB0b1xuICogRGF0YSBTdHVkaW8uXG4gKlxuICogVXNhZ2U6XG4gKiBgYGBcbiAqIHZhciBteUNvbXBvbmVudElkID0gZHNjYy5nZXRDb21wb25lbnRJZCgpO1xuICogY29uc29sZS5sb2coJ015IGNvbXBvbmVudElkIGlzOiAnLCBteUNvbXBvbmVudElkKTtcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgZ2V0Q29tcG9uZW50SWQgPSAoKTogc3RyaW5nID0+IHtcbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgaWYgKHBhcmFtcy5nZXQoJ2RzY0lkJykgIT09IG51bGwpIHtcbiAgICByZXR1cm4gcGFyYW1zLmdldCgnZHNjSWQnKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnZHNjSWQgbXVzdCBiZSBpbiB0aGUgcXVlcnkgcGFyYW1ldGVycy4gJyArXG4gICAgICAgICdUaGlzIGlzIGEgYnVnIGluIGRzLWNvbXBvbmVudCwgcGxlYXNlIGZpbGUgYSBidWc6ICcgK1xuICAgICAgICAnaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZWRhdGFzdHVkaW8vZHMtY29tcG9uZW50L2lzc3Vlcy9uZXcnXG4gICAgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaWVsZHMgaW5kZXhlZCBieSB0aGVpciBEYXRhIFN0dWRpbyBpZC5cbiAqL1xuY29uc3QgZmllbGRzQnlJZCA9IChtZXNzYWdlOiBNZXNzYWdlKTogRmllbGRzQnlJZCA9PlxuICBtZXNzYWdlLmZpZWxkcy5yZWR1Y2UoKGFjYzogRmllbGRzQnlJZCwgZmllbGQ6IEZpZWxkKSA9PiB7XG4gICAgYWNjW2ZpZWxkLmlkXSA9IGZpZWxkO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcblxuLyoqXG4gKiBaaXBzIHR3byBhcnJheXMgdG9nZXRoZXIgaW50byBhIG5ldyBhcnJheS4gVXNlcyB0aGUgbGVuZ3RoIG9mIHRoZSBzaG9ydGVzdFxuICogYXJyYXkuXG4gKlxuICogVXNhZ2U6XG4gKiBgYGBcbiAqIGNvbnN0IGEgPSBbMSwgMiwgM107XG4gKiBjb25zdCBiID0gWydhJywgJ2InLCAnYycsICdkJ107XG4gKiBjb25zdCB6aXBwZWQgPSB6aXAyKGEsIGIpO1xuICogZXhwZWN0KHppcHBlZCkudG9FcXVhbChbWzEsICdhJ10sIFsyLCAnYiddLCBbMywgJ2MnXV0pO1xuICogYGBgXG4gKi9cbmNvbnN0IHppcDIgPSA8VCwgVT4odDogVFtdLCB1OiBVW10pOiBBcnJheTxbVCwgVV0+ID0+IHtcbiAgaWYgKHQubGVuZ3RoIDwgdS5sZW5ndGgpIHtcbiAgICByZXR1cm4gdC5tYXAoKHRFbnRyeTogVCwgaWR4OiBudW1iZXIpOiBbVCwgVV0gPT4gW3RFbnRyeSwgdVtpZHhdXSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHUubWFwKCh1RW50cnk6IFUsIGlkeDogbnVtYmVyKTogW1QsIFVdID0+IFt0W2lkeF0sIHVFbnRyeV0pO1xuICB9XG59O1xuXG4vLyBgLnNvcnRgIGlzbid0IHN0YWJsZSwgYnV0IGlmIHlvdSBjb21wYXJlIGl0ZW1zLCBhbmQgd2hlbiB0aGV5IGFyZSBlcXVhbCB1c2Vcbi8vIHRoZSBvcmlnaW5hbCBpbmRleCwgaXQgaXMgdGhlbiBzdGFibGUuXG5jb25zdCBzdGFibGVTb3J0ID0gPFQ+KGFycjogVFtdLCBjb21wYXJlOiAoYTogVCwgYjogVCkgPT4gbnVtYmVyKTogVFtdID0+XG4gIGFyclxuICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoe2l0ZW0sIGluZGV4fSkpXG4gICAgLnNvcnQoKGEsIGIpID0+IGNvbXBhcmUoYS5pdGVtLCBiLml0ZW0pIHx8IGEuaW5kZXggLSBiLmluZGV4KVxuICAgIC5tYXAoKHtpdGVtfSkgPT4gaXRlbSk7XG5cbmNvbnN0IGRpbWVuc2lvbk9yTWV0cmljID0gKGNkZTogQ29uZmlnRGF0YUVsZW1lbnQpOiBib29sZWFuID0+XG4gIGNkZS50eXBlID09PSBDb25maWdEYXRhRWxlbWVudFR5cGUuRElNRU5TSU9OIHx8XG4gIGNkZS50eXBlID09PSBDb25maWdEYXRhRWxlbWVudFR5cGUuTUVUUklDO1xuXG5jb25zdCB0b051bSA9IChjZGV0OiBDb25maWdEYXRhRWxlbWVudFR5cGUpID0+XG4gIGNkZXQgPT09IENvbmZpZ0RhdGFFbGVtZW50VHlwZS5ESU1FTlNJT04gPyAtMSA6IDE7XG5cbi8qKlxuICogRmxhdHRlbnMgdGhlIGNvbmZpZ0lkcyBmcm9tIGEgbWVzc2FnZSBpbnRvIGEgc2luZ2xlIGFycmF5LiBUaGUgY29uZmlnIElkc1xuICogd2lsbCBiZSByZXBlYXRlZCBmb3IgdGhlIGBNRVRSSUNgL2BESU1FTlNJT05gIHNlbGVjdGlvbnMuIGkuZS4gZm9yIGEgYE1FVFJJQ2BcbiAqIG5hbWVkIGBcIm1ldHJpY3NcImAgb2YgYHttaW46IDIsIG1heDozfWAsIHRoZSB2YWx1ZSBtZXRyaWNzIHdpbGwgYmUgcmVwZWF0ZWQgMlxuICogdG8gMyB0aW1lcyBkZXBlbmRpbmcgb24gd2hhdCB2YWx1ZXMgdGhlIHVzZXIgc2VsZWN0cy5cbiAqXG4gKiBOb3RlOiB0aGlzIGlzIHJlbHlpbmcgb24gdGhlIGZhY3QgdGhhdCB0aGUgcG9zdE1lc3NhZ2UgZnJvbSBEYXRhU3R1ZGlvIGhhc1xuICogdGhlIGZpZWxkcyBzb3J0ZWQgdG8gYmUgZGltZW5zaW9ucywgZm9sbG93ZWQgYnkgbWV0cmljcy5cbiAqL1xudHlwZSBDb25maWdEYXRhQ29uY2VwdCA9IENvbmZpZ0RhdGFFbGVtZW50TWV0cmljIHwgQ29uZmlnRGF0YUVsZW1lbnREaW1lbnNpb247XG5cbmNvbnN0IGZsYXR0ZW5Db25maWdJZHMgPSAobWVzc2FnZTogTWVzc2FnZSk6IENvbmZpZ0lkW10gPT4ge1xuICBjb25zdCBkaW1uc0FuZE1ldHM6IENvbmZpZ0RhdGFDb25jZXB0W10gPSBbXTtcbiAgbWVzc2FnZS5jb25maWcuZGF0YS5mb3JFYWNoKChjb25maWdEYXRhOiBDb25maWdEYXRhKSA9PiB7XG4gICAgY29uZmlnRGF0YS5lbGVtZW50c1xuICAgICAgLmZpbHRlcihkaW1lbnNpb25Pck1ldHJpYylcbiAgICAgIC5mb3JFYWNoKChjb25maWdEYXRhRWxlbWVudDogQ29uZmlnRGF0YUNvbmNlcHQpID0+IHtcbiAgICAgICAgZGltbnNBbmRNZXRzLnB1c2goY29uZmlnRGF0YUVsZW1lbnQpO1xuICAgICAgfSk7XG4gIH0pO1xuICBjb25zdCBzb3J0ZWQgPSBzdGFibGVTb3J0KFxuICAgIGRpbW5zQW5kTWV0cyxcbiAgICAoYSwgYikgPT4gdG9OdW0oYS50eXBlKSAtIHRvTnVtKGIudHlwZSlcbiAgKTtcbiAgY29uc3QgY29uZmlnSWRzOiBDb25maWdJZFtdID0gW107XG4gIHNvcnRlZC5mb3JFYWNoKChjb25maWdEYXRhRWxlbWVudCkgPT4ge1xuICAgIGNvbmZpZ0RhdGFFbGVtZW50LnZhbHVlLmZvckVhY2goKCkgPT4gY29uZmlnSWRzLnB1c2goY29uZmlnRGF0YUVsZW1lbnQuaWQpKTtcbiAgfSk7XG4gIHJldHVybiBjb25maWdJZHM7XG59O1xuXG4vKipcbiAqIEpvaW5zIGEgc2luZ2xlIHRhYmxlIHJvdyB3aXRoIHRoZSBtYXRjaGluZyBgQ29uZmlnSWRgXG4gKi9cbmNvbnN0IGpvaW5PYmplY3RSb3cgPSAoY29uZmlnSWRzOiBDb25maWdJZFtdKSA9PiAocm93OiBSb3cpOiBPYmplY3RSb3cgPT4ge1xuICBjb25zdCBvYmplY3RSb3c6IE9iamVjdFJvdyA9IHt9O1xuXG4gIHppcDIocm93LCBjb25maWdJZHMpLmZvckVhY2goKFtyb3dWYWwsIGNvbmZpZ0lkXTogW0RTUm93VmFsdWUsIENvbmZpZ0lkXSkgPT4ge1xuICAgIGlmIChvYmplY3RSb3dbY29uZmlnSWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9iamVjdFJvd1tjb25maWdJZF0gPSBbXTtcbiAgICB9XG4gICAgb2JqZWN0Um93W2NvbmZpZ0lkXS5wdXNoKHJvd1ZhbCk7XG4gIH0sIHt9KTtcblxuICByZXR1cm4gb2JqZWN0Um93O1xufTtcblxuLyoqXG4gKiBGb3JtYXRzIHRhYmxlcyBpbnRvIHRoZSBgT2JqZWN0VGFibGVzYCBmb3JtYXQuXG4gKi9cbmNvbnN0IG9iamVjdEZvcm1hdFRhYmxlID0gKG1lc3NhZ2U6IE1lc3NhZ2UpOiBPYmplY3RUYWJsZXMgPT4ge1xuICBjb25zdCBjb25maWdJZHMgPSBmbGF0dGVuQ29uZmlnSWRzKG1lc3NhZ2UpO1xuICBjb25zdCBvYmplY3RUYWJsZXM6IE9iamVjdFRhYmxlcyA9IHtbVGFibGVUeXBlLkRFRkFVTFRdOiBbXX07XG5cbiAgbWVzc2FnZS5kYXRhUmVzcG9uc2UudGFibGVzLmZvckVhY2goKHRhYmxlOiBUYWJsZSkgPT4ge1xuICAgIGNvbnN0IG9iamVjdFJvd3M6IE9iamVjdFJvd1tdID0gdGFibGUucm93cy5tYXAoam9pbk9iamVjdFJvdyhjb25maWdJZHMpKTtcbiAgICBpZiAodGFibGUuaWQgPT09IFRhYmxlVHlwZS5ERUZBVUxUKSB7XG4gICAgICBvYmplY3RUYWJsZXNbdGFibGUuaWRdID0gb2JqZWN0Um93cztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY3VycmVudCA9IG9iamVjdFRhYmxlc1t0YWJsZS5pZF07XG4gICAgICBpZiAoY3VycmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG9iamVjdFRhYmxlc1t0YWJsZS5pZF0gPSBbXTtcbiAgICAgIH1cbiAgICAgIG9iamVjdFRhYmxlc1t0YWJsZS5pZF0gPSBvYmplY3RUYWJsZXNbdGFibGUuaWRdLmNvbmNhdChvYmplY3RSb3dzKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb2JqZWN0VGFibGVzO1xufTtcblxuLyoqXG4gKiBGb3JtYXRzIHRhYmxlcyBpbnRvIHRoZSBgVGFibGVzYCBmb3JtYXQuXG4gKi9cbmNvbnN0IHRhYmxlRm9ybWF0VGFibGUgPSAobWVzc2FnZTogTWVzc2FnZSk6IFRhYmxlcyA9PiB7XG4gIGNvbnN0IGZpZWxkc0J5OiBGaWVsZHNCeUNvbmZpZ0lkID0gZmllbGRzQnlDb25maWdJZChtZXNzYWdlKTtcbiAgY29uc3QgY29uZmlnSWRzID0gZmxhdHRlbkNvbmZpZ0lkcyhtZXNzYWdlKTtcbiAgY29uc3QgY29uZmlnSWRJZHggPSB7fTtcbiAgY29uc3QgaGVhZGVyczogUm93SGVhZGluZ1tdID0gY29uZmlnSWRzLm1hcChcbiAgICAoY29uZmlnSWQ6IHN0cmluZyk6IFJvd0hlYWRpbmcgPT4ge1xuICAgICAgaWYgKGNvbmZpZ0lkSWR4W2NvbmZpZ0lkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbmZpZ0lkSWR4W2NvbmZpZ0lkXSA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25maWdJZElkeFtjb25maWdJZF0rKztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlkeCA9IGNvbmZpZ0lkSWR4W2NvbmZpZ0lkXTtcbiAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzQnlbY29uZmlnSWRdW2lkeF07XG4gICAgICBjb25zdCBoZWFkaW5nOiBSb3dIZWFkaW5nID0gey4uLmZpZWxkLCBjb25maWdJZH07XG4gICAgICByZXR1cm4gaGVhZGluZztcbiAgICB9XG4gICk7XG4gIGNvbnN0IHRhYmxlVGFibGVzOiBUYWJsZXMgPSB7XG4gICAgW1RhYmxlVHlwZS5ERUZBVUxUXToge2hlYWRlcnM6IFtdLCByb3dzOiBbXX0sXG4gIH07XG5cbiAgbWVzc2FnZS5kYXRhUmVzcG9uc2UudGFibGVzLmZvckVhY2goKHRhYmxlOiBUYWJsZSkgPT4ge1xuICAgIHRhYmxlVGFibGVzW3RhYmxlLmlkXSA9IHtcbiAgICAgIGhlYWRlcnMsXG4gICAgICByb3dzOiB0YWJsZS5yb3dzLFxuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiB0YWJsZVRhYmxlcztcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmllbGRzIGluZGV4ZWQgYnkgdGhlaXIgY29uZmlnIGlkLiBTaW5jZSBtYW55IGZpZWxkcyBjYW4gYmUgaW5cbiAqIHRoZSBzYW1lIGBNRVRSSUNgL2BESU1FTlNJT05gIHNlbGVjdGlvbiwgYGNvbmZpZ0lkYCBpcyBtYXBwZWQgdG8gYEZpZWxkW11gLlxuICovXG5leHBvcnQgY29uc3QgZmllbGRzQnlDb25maWdJZCA9IChtZXNzYWdlOiBNZXNzYWdlKTogRmllbGRzQnlDb25maWdJZCA9PiB7XG4gIGNvbnN0IGZpZWxkc0J5RFNJZCA9IGZpZWxkc0J5SWQobWVzc2FnZSk7XG4gIGNvbnN0IGZpZWxkc0J5OiBGaWVsZHNCeUNvbmZpZ0lkID0ge307XG5cbiAgbWVzc2FnZS5jb25maWcuZGF0YS5mb3JFYWNoKChjb25maWdEYXRhOiBDb25maWdEYXRhKSA9PiB7XG4gICAgY29uZmlnRGF0YS5lbGVtZW50c1xuICAgICAgLmZpbHRlcihkaW1lbnNpb25Pck1ldHJpYylcbiAgICAgIC5mb3JFYWNoKChjb25maWdEYXRhRWxlbWVudDogQ29uZmlnRGF0YUNvbmNlcHQpID0+IHtcbiAgICAgICAgZmllbGRzQnlbY29uZmlnRGF0YUVsZW1lbnQuaWRdID0gY29uZmlnRGF0YUVsZW1lbnQudmFsdWUubWFwKFxuICAgICAgICAgIChkc0lkOiBGaWVsZElkKTogRmllbGQgPT4gZmllbGRzQnlEU0lkW2RzSWRdXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZpZWxkc0J5O1xufTtcblxuLyoqXG4gKiBGbGF0dGVucyB0aGUgc3R5bGUgZW50cmllcyBpbnRvIGEgc2luZ2xlIG9iamVjdC4gYHN0eWxlSWRgcyBzaG91bGQgYmUgdW5pcXVlLlxuICovXG5jb25zdCBmbGF0dGVuU3R5bGUgPSAobWVzc2FnZTogTWVzc2FnZSk6IFN0eWxlQnlJZCA9PiB7XG4gIGNvbnN0IHN0eWxlQnlJZDogU3R5bGVCeUlkID0ge307XG4gIChtZXNzYWdlLmNvbmZpZy5zdHlsZSB8fCBbXSkuZm9yRWFjaCgoc3R5bGVFbnRyeTogQ29uZmlnU3R5bGUpID0+IHtcbiAgICBzdHlsZUVudHJ5LmVsZW1lbnRzLmZvckVhY2goKGNvbmZpZ1N0eWxlRWxlbWVudDogQ29uZmlnU3R5bGVFbGVtZW50KSA9PiB7XG4gICAgICBpZiAoc3R5bGVCeUlkW2NvbmZpZ1N0eWxlRWxlbWVudC5pZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYHN0eWxlSWRzIG11c3QgYmUgdW5pcXVlLiBZb3VyIHN0eWxlSWQ6ICcke2NvbmZpZ1N0eWxlRWxlbWVudC5pZH0nIGlzIHVzZWQgbW9yZSB0aGFuIG9uY2UuYFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgc3R5bGVCeUlkW2NvbmZpZ1N0eWxlRWxlbWVudC5pZF0gPSB7XG4gICAgICAgIHZhbHVlOiBjb25maWdTdHlsZUVsZW1lbnQudmFsdWUsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogY29uZmlnU3R5bGVFbGVtZW50LmRlZmF1bHRWYWx1ZSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sIHt9KTtcblxuICByZXR1cm4gc3R5bGVCeUlkO1xufTtcblxuY29uc3QgdGhlbWVTdHlsZSA9IChtZXNzYWdlOiBNZXNzYWdlKTogVGhlbWVTdHlsZSA9PiB7XG4gIHJldHVybiBtZXNzYWdlLmNvbmZpZy50aGVtZVN0eWxlO1xufTtcblxuY29uc3QgbWFwSW50ZXJhY3Rpb25UeXBlcyA9IChcbiAgZHNJbnRlcmFjdGlvbjogRFNJbnRlcmFjdGlvblR5cGVcbik6IEludGVyYWN0aW9uVHlwZSA9PiB7XG4gIHN3aXRjaCAoZHNJbnRlcmFjdGlvbikge1xuICAgIGNhc2UgRFNJbnRlcmFjdGlvblR5cGUuRklMVEVSOlxuICAgICAgcmV0dXJuIEludGVyYWN0aW9uVHlwZS5GSUxURVI7XG4gIH1cbn07XG5cbmNvbnN0IHRyYW5zZm9ybURTSW50ZXJhY3Rpb24gPSAobWVzc2FnZTogTWVzc2FnZSk6IEludGVyYWN0aW9uc0J5SWQgPT4ge1xuICBjb25zdCBkc0ludGVyYWN0aW9uczogRFNJbnRlcmFjdGlvbkRhdGFbXSA9IG1lc3NhZ2UuY29uZmlnLmludGVyYWN0aW9ucztcbiAgLy8gVE9ETyAtIHJlbW92ZSBvbmNlIGludGVyYWN0aW9ucyBhcmUgbGl2ZS5cbiAgaWYgKGRzSW50ZXJhY3Rpb25zID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgcmV0dXJuIGRzSW50ZXJhY3Rpb25zLnJlZHVjZShcbiAgICAoYWNjOiBJbnRlcmFjdGlvbnNCeUlkLCBkc0ludGVyYWN0aW9uOiBEU0ludGVyYWN0aW9uRGF0YSkgPT4ge1xuICAgICAgY29uc3QgaW50ZXJhY3Rpb25zID0gZHNJbnRlcmFjdGlvbi5zdXBwb3J0ZWRBY3Rpb25zLm1hcChcbiAgICAgICAgbWFwSW50ZXJhY3Rpb25UeXBlc1xuICAgICAgKTtcbiAgICAgIGNvbnN0IHZhbHVlID0ge1xuICAgICAgICB0eXBlOiBtYXBJbnRlcmFjdGlvblR5cGVzKGRzSW50ZXJhY3Rpb24udmFsdWUudHlwZSksXG4gICAgICAgIGRhdGE6IGRzSW50ZXJhY3Rpb24udmFsdWUuZGF0YSxcbiAgICAgIH07XG4gICAgICBhY2NbZHNJbnRlcmFjdGlvbi5pZF0gPSB7XG4gICAgICAgIHZhbHVlLFxuICAgICAgICBzdXBwb3J0ZWRBY3Rpb25zOiBpbnRlcmFjdGlvbnMsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LFxuICAgIHt9XG4gICk7XG59O1xuXG4vKipcbiAqIFRyYW5zZm9ybSBmb3IgZGF0ZSByYW5nZXNcbiAqL1xuY29uc3QgdG9EYXRlUmFuZ2VzID0gKG1lc3NhZ2U6IE1lc3NhZ2UpOiBEYXRlUmFuZ2VzQnlJZCA9PiB7XG4gIGNvbnN0IGRhdGVSYW5nZXMgPSBtZXNzYWdlLmRhdGFSZXNwb25zZS5kYXRlUmFuZ2VzIHx8IFtdO1xuICBjb25zdCBvdXRwdXQ6IERhdGVSYW5nZXNCeUlkID0ge307XG4gIHJldHVybiBkYXRlUmFuZ2VzLnJlZHVjZSgoaW5Qcm9ncmVzcywgY3VycmVudERTRGF0ZVJhbmdlKSA9PiB7XG4gICAgaW5Qcm9ncmVzc1tjdXJyZW50RFNEYXRlUmFuZ2UuaWRdID0ge1xuICAgICAgc3RhcnQ6IGN1cnJlbnREU0RhdGVSYW5nZS5zdGFydCxcbiAgICAgIGVuZDogY3VycmVudERTRGF0ZVJhbmdlLmVuZCxcbiAgICB9O1xuICAgIHJldHVybiBpblByb2dyZXNzO1xuICB9LCBvdXRwdXQpO1xufTtcbi8qKlxuICogVGhlIHRyYW5zZm9ybSB0byB1c2UgZm9yIGRhdGEgaW4gYSBUYWJsZSBmb3JtYXQuIGkuZS4gYFtbMSwgMiwgM10sIFs0LCA1LCA2XV1gXG4gKi9cbmV4cG9ydCBjb25zdCB0YWJsZVRyYW5zZm9ybTogVGFibGVUcmFuc2Zvcm0gPSAoXG4gIG1lc3NhZ2U6IE1lc3NhZ2Vcbik6IFRhYmxlRm9ybWF0ID0+ICh7XG4gIHRhYmxlczogdGFibGVGb3JtYXRUYWJsZShtZXNzYWdlKSxcbiAgZGF0ZVJhbmdlczogdG9EYXRlUmFuZ2VzKG1lc3NhZ2UpLFxuICBmaWVsZHM6IGZpZWxkc0J5Q29uZmlnSWQobWVzc2FnZSksXG4gIHN0eWxlOiBmbGF0dGVuU3R5bGUobWVzc2FnZSksXG4gIHRoZW1lOiB0aGVtZVN0eWxlKG1lc3NhZ2UpLFxuICBpbnRlcmFjdGlvbnM6IHRyYW5zZm9ybURTSW50ZXJhY3Rpb24obWVzc2FnZSksXG59KTtcblxuLyoqXG4gKiBUaGUgdHJhbnNmb3JtIHRvIHVzZSBmb3IgZGF0YSBpbiBhbiBvYmplY3QgZm9ybWF0LiBpLmUuIGBbe25hbWU6ICdqb2huJywgdmlld3M6IDN9LCB7bmFtZTogJ3N1emllJywgdmlld3M6IDV9XWBcbiAqL1xuZXhwb3J0IGNvbnN0IG9iamVjdFRyYW5zZm9ybTogT2JqZWN0VHJhbnNmb3JtID0gKG1lc3NhZ2U6IE1lc3NhZ2UpID0+ICh7XG4gIHRhYmxlczogb2JqZWN0Rm9ybWF0VGFibGUobWVzc2FnZSksXG4gIGRhdGVSYW5nZXM6IHRvRGF0ZVJhbmdlcyhtZXNzYWdlKSxcbiAgZmllbGRzOiBmaWVsZHNCeUNvbmZpZ0lkKG1lc3NhZ2UpLFxuICBzdHlsZTogZmxhdHRlblN0eWxlKG1lc3NhZ2UpLFxuICB0aGVtZTogdGhlbWVTdHlsZShtZXNzYWdlKSxcbiAgaW50ZXJhY3Rpb25zOiB0cmFuc2Zvcm1EU0ludGVyYWN0aW9uKG1lc3NhZ2UpLFxufSk7XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIHRyYW5zZm9ybSBpcyBsaWtlbHkgdGhlIGlkZW50aXR5IGZ1bmN0aW9uXG4gKiBUaGlzIGlzIG5vdCBhIHN1cHBvcnRlZCBpbXBsZW1lbnRhdGlvbiBwYXRoXG4gKiBBdm9pZCB0aGlzIGlmIGF0IGFsbCBwb3NzaWJsZSAtIHBsZWFzZSB1c2UgZWl0aGVyIG9iamVjdFRyYW5zZm9ybSBvciB0YWJsZVRyYW5zZm9ybVxuICovXG5jb25zdCBpc1Byb2JhYmx5SWRlbnRpdHlGdW5jdGlvbiA9ICh0cmFuc2Zvcm0pOiBib29sZWFuID0+IHtcbiAgbGV0IGlzSWRlbnRpdHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaWYgKHRyYW5zZm9ybSgnaWRlbnRpdHknKSA9PT0gJ2lkZW50aXR5Jykge1xuICAgIGlzSWRlbnRpdHkgPSB0cnVlO1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBUaGlzIGlzIGFuIHVuc3VwcG9ydGVkIGRhdGEgZm9ybWF0LiBQbGVhc2UgdXNlIG9uZSBvZiB0aGUgc3VwcG9ydGVkIHRyYW5zZm9ybXM6XG4gICAgICAgZHNjYy5vYmplY3RGb3JtYXQgb3IgZHNjYy50YWJsZUZvcm1hdC5gXG4gICAgKTtcbiAgfVxuICByZXR1cm4gaXNJZGVudGl0eTtcbn07XG5cbmNvbnN0IGlzVmFsaWRUcmFuc2Zvcm0gPSAodHJhbnNmb3JtKTogYm9vbGVhbiA9PiB7XG4gIGxldCBpc1ZhbGlkID0gZmFsc2U7XG4gIGlmIChcbiAgICAodHJhbnNmb3JtIGFzIGFueSkgPT09IHRhYmxlVHJhbnNmb3JtIHx8XG4gICAgKHRyYW5zZm9ybSBhcyBhbnkpID09PSBvYmplY3RUcmFuc2Zvcm1cbiAgKSB7XG4gICAgaXNWYWxpZCA9IHRydWU7XG4gIH0gZWxzZSBpZiAoaXNQcm9iYWJseUlkZW50aXR5RnVuY3Rpb24odHJhbnNmb3JtKSkge1xuICAgIGlzVmFsaWQgPSB0cnVlO1xuICB9XG4gIHJldHVybiBpc1ZhbGlkO1xufTtcbi8qXG4gKiBTdWJzY3JpYmVzIHRvIG1lc3NhZ2VzIGZyb20gRGF0YSBTdHVkaW8uIENhbGxzIGBjYmAgZm9yIGV2ZXJ5IG5ld1xuICogW1tNZXNzYWdlVHlwZS5SRU5ERVJdXSBtZXNzYWdlLiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHVuc3Vic2NyaWJlXG4gKiBgY2FsbGJhY2tgIGZyb20gZnVydGhlciBpbnZvY2F0aW9ucy5cbiAqXG4gKiBVc2FnZSAtIHRhYmxlVHJhbnNmb3JtOlxuICogYGBgXG4gKiB2YXIgdW5zdWJzY3JpYmUgPSBkc2NjLnN1YnNjcmliZVRvRGF0YShmdW5jdGlvbihtZXNzYWdlKSB7XG4gKiAgIGNvbnNvbGUubG9nKG1lc3NhZ2UudGFibGVzKVxuICogICBjb25zb2xlLmxvZyhtZXNzYWdlLmZpZWxkcylcbiAqICAgY29uc29sZS5sb2cobWVzc2FnZS5zdHlsZSlcbiAqIH0sIHt0cmFuc2Zvcm06IGRzY2MudGFibGVUcmFuc2Zvcm19KTtcbiAqXG4gKiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICogICB1bnN1YnNjcmliZSgpO1xuICogfSwgMzAwMClcbiAqIGBgYFxuXG4gKiBVc2FnZSAtIG9iamVjdFRyYW5zZm9ybTpcbiAqIGBgYFxuICogdmFyIHVuc3Vic2NyaWJlID0gZHNjYy5zdWJzY3JpYmVUb0RhdGEoZnVuY3Rpb24obWVzc2FnZSkge1xuICogICBjb25zb2xlLmxvZyhtZXNzYWdlLnRhYmxlcylcbiAqICAgY29uc29sZS5sb2cobWVzc2FnZS5maWVsZHMpXG4gKiAgIGNvbnNvbGUubG9nKG1lc3NhZ2Uuc3R5bGUpXG4gKiB9LCB7dHJhbnNmb3JtOiBkc2NjLm9iamVjdFRyYW5zZm9ybX0pO1xuICpcbiAqIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gKiAgIHVuc3Vic2NyaWJlKCk7XG4gKiB9LCAzMDAwKVxuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVUb0RhdGEgPSA8VD4oXG4gIGNiOiAoY29tcG9uZW50RGF0YTogVCkgPT4gdm9pZCxcbiAgb3B0aW9uczogU3Vic2NyaXB0aW9uc09wdGlvbnM8VD5cbik6ICgoKSA9PiB2b2lkKSA9PiB7XG4gIGlmIChpc1ZhbGlkVHJhbnNmb3JtKG9wdGlvbnMudHJhbnNmb3JtKSkge1xuICAgIGNvbnN0IG9uTWVzc2FnZSA9IChtZXNzYWdlOiBQb3N0TWVzc2FnZSkgPT4ge1xuICAgICAgaWYgKG1lc3NhZ2UuZGF0YS50eXBlID09PSBNZXNzYWdlVHlwZS5SRU5ERVIpIHtcbiAgICAgICAgY2Iob3B0aW9ucy50cmFuc2Zvcm0obWVzc2FnZS5kYXRhKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIGBNZXNzYWdlVHlwZTogJHttZXNzYWdlLmRhdGEudHlwZX0gaXMgbm90IHN1cHBvcnRlZCBieSB0aGlzIHZlcnNpb24gb2YgdGhlIGxpYnJhcnkuYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpO1xuICAgIGNvbnN0IGNvbXBvbmVudElkID0gZ2V0Q29tcG9uZW50SWQoKTtcbiAgICAvLyBUZWxsIERhdGFTdHVkaW8gdGhhdCB0aGUgdml6IGlzIHJlYWR5IHRvIGdldCBldmVudHMuXG4gICAgY29uc3Qgdml6UmVhZHlNZXNzYWdlOiBWaXpSZWFkeU1lc3NhZ2UgPSB7XG4gICAgICBjb21wb25lbnRJZCxcbiAgICAgIHR5cGU6IFRvRFNNZXNzYWdlVHlwZS5WSVpfUkVBRFksXG4gICAgfTtcbiAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHZpelJlYWR5TWVzc2FnZSwgJyonKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihgT25seSB0aGUgYnVpbHQgaW4gdHJhbnNmb3JtIGZ1bmN0aW9ucyBhcmUgc3VwcG9ydGVkLmApO1xuICB9XG59O1xuXG4vKlxuICogRG9lcyB0aGUgdGhpbmcgdGhhdCBpbnRlcmFjdGlvbnMgc2hvdWxkIGRvLlxuICovXG5leHBvcnQgY29uc3Qgc2VuZEludGVyYWN0aW9uOiBTZW5kSW50ZXJhY3Rpb24gPSAoXG4gIGFjdGlvbklkLFxuICBpbnRlcmFjdGlvbixcbiAgZGF0YVxuKSA9PiB7XG4gIGNvbnN0IGNvbXBvbmVudElkID0gZ2V0Q29tcG9uZW50SWQoKTtcbiAgY29uc3QgaW50ZXJhY3Rpb25NZXNzYWdlOiBJbnRlcmFjdGlvbk1lc3NhZ2UgPSB7XG4gICAgdHlwZTogVG9EU01lc3NhZ2VUeXBlLklOVEVSQUNUSU9OLFxuICAgIGlkOiBhY3Rpb25JZCxcbiAgICBkYXRhLFxuICAgIGNvbXBvbmVudElkLFxuICB9O1xuICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKGludGVyYWN0aW9uTWVzc2FnZSwgJyonKTtcbn07XG5cbi8qXG4gKiBDbGVhcnMgYW4gaW50ZXJhY3Rpb25cbiAqL1xuXG5leHBvcnQgY29uc3QgY2xlYXJJbnRlcmFjdGlvbjogQ2xlYXJJbnRlcmFjdGlvbiA9IChhY3Rpb25JZCwgaW50ZXJhY3Rpb24pID0+IHtcbiAgc2VuZEludGVyYWN0aW9uKGFjdGlvbklkLCBpbnRlcmFjdGlvbiwgdW5kZWZpbmVkKTtcbn07XG4iLCIvKiFcbiAgQGxpY2Vuc2VcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQge2NsZWFySW50ZXJhY3Rpb259IGZyb20gJy4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvc3RNZXNzYWdlIGV4dGVuZHMgTWVzc2FnZUV2ZW50IHtcbiAgZGF0YTogTWVzc2FnZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlIHtcbiAgLyoqXG4gICAqIFRoZSBtZXNzYWdlIHR5cGUuXG4gICAqL1xuICB0eXBlOiBNZXNzYWdlVHlwZTtcbiAgLyoqXG4gICAqIFRoZSBjb25maWd1cmF0aW9uIHN0YXRlIG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjb25maWc6IENvbmZpZztcbiAgLyoqXG4gICAqIEEgbGlzdCBvZiBhbGwgdXNlciBzZWxlY3RlZCBmaWVsZHMuXG4gICAqL1xuICBmaWVsZHM6IEZpZWxkW107XG4gIC8qKlxuICAgKiBUaGUgZGF0YSBjb3JyZXNwb25kaW5nIHRvIHRoZSBkYXRhIGNvbmZpZyBzdGF0ZSBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgZGF0YVJlc3BvbnNlOiBEYXRhUmVzcG9uc2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnIHtcbiAgLyoqXG4gICAqIFRoZSBkYXRhIGNvbmZpZyBkZWZpbmVkIGZvciB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgZGF0YTogQ29uZmlnRGF0YVtdO1xuICAvKipcbiAgICogVGhlIHN0eWxlIGVsZW1lbnRzIHJlcXVpcmVkIGFuZCBzdXBwb3J0ZWQgYnkgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIHN0eWxlOiBDb25maWdTdHlsZVtdO1xuICB0aGVtZVN0eWxlPzogQ29uZmlnVGhlbWVTdHlsZTtcbiAgaW50ZXJhY3Rpb25zOiBEU0ludGVyYWN0aW9uRGF0YVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpZWxkIHtcbiAgLyoqXG4gICAqIFRoZSBJRCBvZiB0aGUgZmllbGQuXG4gICAqL1xuICBpZDogRmllbGRJZDtcbiAgLyoqXG4gICAqIFRoZSB1c2VyLWZyaWVuZGx5IG5hbWUgb2YgdGhlIGZpZWxkLlxuICAgKi9cbiAgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHVzZXItZnJpZW5kbHkgZGVzY3JpcHRpb24gb2YgdGhlIGZpZWxkLlxuICAgKi9cbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZmllbGQgdHlwZS5cbiAgICovXG4gIHR5cGU6IEZpZWxkVHlwZTtcbiAgLyoqXG4gICAqIFRoZSBmaWVsZCBjb25jZXB0LlxuICAgKi9cbiAgY29uY2VwdDogQ29uY2VwdFR5cGU7XG59XG5cbmV4cG9ydCBlbnVtIENvbmNlcHRUeXBlIHtcbiAgTUVUUklDID0gJ01FVFJJQycsXG4gIERJTUVOU0lPTiA9ICdESU1FTlNJT04nLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERTRGF0ZVJhbmdlIHtcbiAgaWQ6IERhdGVSYW5nZVR5cGU7XG4gIHN0YXJ0OiBzdHJpbmc7XG4gIGVuZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFSZXNwb25zZSB7XG4gIC8qKlxuICAgKiBUaGUgbGlzdCBvZiB0YWJsZXMgZm9yIHRoZSBjdXJyZW50IGRhdGEgY29uZmlndXJhdGlvbi5cbiAgICovXG4gIHRhYmxlczogVGFibGVbXTtcbiAgZGF0ZVJhbmdlcz86IERTRGF0ZVJhbmdlW107XG59XG5cbmV4cG9ydCBlbnVtIE1lc3NhZ2VUeXBlIHtcbiAgUkVOREVSID0gJ1JFTkRFUicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnRGF0YSB7XG4gIC8qKlxuICAgKiBUaGUgSUQgb2YgdGhlIGRhdGEgc2VjdGlvbi5cbiAgICpcbiAgICogVGhpcyBzaG91bGQgYmUgYSBub24tZW1wdHkgc3RyaW5nIHdpdGggbm8gc3BhY2VzLlxuICAgKi9cbiAgaWQ6IENvbmZpZ0RhdGFJZDtcbiAgLyoqXG4gICAqIFRoZSBsYWJlbCBmb3IgdGhlIGRhdGEgc2VjdGlvbi5cbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZGF0YSBlbGVtZW50cyB0byByZW5kZXIuXG4gICAqL1xuICBlbGVtZW50czogQ29uZmlnRGF0YUVsZW1lbnRbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnU3R5bGUge1xuICAvKipcbiAgICogVGhlIElEIG9mIHRoZSBzdHlsZSBzZWN0aW9uLlxuICAgKi9cbiAgaWQ6IENvbmZpZ1N0eWxlSWQ7XG4gIC8qKlxuICAgKiBUaGUgaGVhZGluZyBmb3IgdGhlIHN0eWxlIHNlY3Rpb24uXG4gICAqL1xuICBsYWJlbDogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHN0eWxlIGVsZW1lbnRzIHRvIHJlbmRlci5cbiAgICovXG4gIGVsZW1lbnRzOiBDb25maWdTdHlsZUVsZW1lbnRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdUaGVtZVN0eWxlIHtcbiAgdGhlbWVGaWxsQ29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gICAgdGhlbWVSZWY/OiBUaGVtZVJlZkluZGV4O1xuICB9O1xuICB0aGVtZUZvbnRDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICB0aGVtZVJlZj86IFRoZW1lUmVmSW5kZXg7XG4gIH07XG4gIHRoZW1lQWNjZW50RmlsbENvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgIHRoZW1lUmVmPzogVGhlbWVSZWZJbmRleDtcbiAgfTtcbiAgdGhlbWVBY2NlbnRGb250Q29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gICAgdGhlbWVSZWY/OiBUaGVtZVJlZkluZGV4O1xuICB9O1xuICB0aGVtZUZvbnRGYW1pbHk6IHN0cmluZztcbiAgdGhlbWVBY2NlbnRGb250RmFtaWx5OiBzdHJpbmc7XG4gIHRoZW1lSW5jcmVhc2VDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgfTtcbiAgdGhlbWVEZWNyZWFzZUNvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICB9O1xuICB0aGVtZUdyaWRDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgfTtcbiAgdGhlbWVTZXJpZXNDb2xvcjogQXJyYXk8e1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICB0aGVtZVJlZj86IFRoZW1lUmVmSW5kZXg7XG4gICAgc2VyaWVzUmVmOiBTZXJpZXNSZWZJbmRleDtcbiAgfT47XG59XG5cbmludGVyZmFjZSBUaGVtZVJlZkluZGV4IHtcbiAgaW5kZXg6IG51bWJlcjtcbn1cbmludGVyZmFjZSBTZXJpZXNSZWZJbmRleCB7XG4gIGluZGV4OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWVTdHlsZSB7XG4gIHRoZW1lRmlsbENvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgIHRoZW1lUmVmPzogVGhlbWVSZWZJbmRleDtcbiAgfTtcbiAgdGhlbWVGb250Q29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gICAgdGhlbWVSZWY/OiBUaGVtZVJlZkluZGV4O1xuICB9O1xuICB0aGVtZUFjY2VudEZpbGxDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICB0aGVtZVJlZj86IFRoZW1lUmVmSW5kZXg7XG4gIH07XG4gIHRoZW1lQWNjZW50Rm9udENvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgIHRoZW1lUmVmPzogVGhlbWVSZWZJbmRleDtcbiAgfTtcbiAgdGhlbWVGb250RmFtaWx5OiBzdHJpbmc7XG4gIHRoZW1lQWNjZW50Rm9udEZhbWlseTogc3RyaW5nO1xuICB0aGVtZUluY3JlYXNlQ29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gIH07XG4gIHRoZW1lRGVjcmVhc2VDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgfTtcbiAgdGhlbWVHcmlkQ29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gIH07XG4gIHRoZW1lU2VyaWVzQ29sb3I6IEFycmF5PHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gICAgdGhlbWVSZWY/OiBUaGVtZVJlZkluZGV4O1xuICAgIHNlcmllc1JlZjogU2VyaWVzUmVmSW5kZXg7XG4gIH0+O1xufVxuXG5leHBvcnQgZW51bSBGaWVsZFR5cGUge1xuICBZRUFSID0gJ1lFQVInLFxuICBZRUFSX1FVQVJURVIgPSAnWUVBUl9RVUFSVEVSJyxcbiAgWUVBUl9NT05USCA9ICdZRUFSX01PTlRIJyxcbiAgWUVBUl9XRUVLID0gJ1lFQVJfV0VFSycsXG4gIFlFQVJfTU9OVEhfREFZID0gJ1lFQVJfTU9OVEhfREFZJyxcbiAgWUVBUl9NT05USF9EQVlfSE9VUiA9ICdZRUFSX01PTlRIX0RBWV9IT1VSJyxcbiAgUVVBUlRFUiA9ICdRVUFSVEVSJyxcbiAgTU9OVEggPSAnTU9OVEgnLFxuICBXRUVLID0gJ1dFRUsnLFxuICBNT05USF9EQVkgPSAnTU9OVEhfREFZJyxcbiAgREFZX09GX1dFRUsgPSAnREFZX09GX1dFRUsnLFxuICBEQVkgPSAnREFZJyxcbiAgSE9VUiA9ICdIT1VSJyxcbiAgTUlOVVRFID0gJ01JTlVURScsXG4gIERVUkFUSU9OID0gJ0RVUkFUSU9OJyxcbiAgQ09VTlRSWSA9ICdDT1VOVFJZJyxcbiAgQ09VTlRSWV9DT0RFID0gJ0NPVU5UUllfQ09ERScsXG4gIENPTlRJTkVOVCA9ICdDT05USU5FTlQnLFxuICBDT05USU5FTlRfQ09ERSA9ICdDT05USU5FTlRfQ09ERScsXG4gIFNVQl9DT05USU5FTlQgPSAnU1VCX0NPTlRJTkVOVCcsXG4gIFNVQl9DT05USU5FTlRfQ09ERSA9ICdTVUJfQ09OVElORU5UX0NPREUnLFxuICBSRUdJT04gPSAnUkVHSU9OJyxcbiAgUkVHSU9OX0NPREUgPSAnUkVHSU9OX0NPREUnLFxuICBDSVRZID0gJ0NJVFknLFxuICBDSVRZX0NPREUgPSAnQ0lUWV9DT0RFJyxcbiAgTUVUUk9fQ09ERSA9ICdNRVRST19DT0RFJyxcbiAgTEFUSVRVREVfTE9OR0lUVURFID0gJ0xBVElUVURFX0xPTkdJVFVERScsXG4gIE5VTUJFUiA9ICdOVU1CRVInLFxuICBQRVJDRU5UID0gJ1BFUkNFTlQnLFxuICBURVhUID0gJ1RFWFQnLFxuICBCT09MRUFOID0gJ0JPT0xFQU4nLFxuICBVUkwgPSAnVVJMJyxcbiAgSU1BR0UgPSAnSU1BR0UnLFxuICBDVVJSRU5DWV9BRUQgPSAnQ1VSUkVOQ1lfQUVEJyxcbiAgQ1VSUkVOQ1lfQUxMID0gJ0NVUlJFTkNZX0FMTCcsXG4gIENVUlJFTkNZX0FSUyA9ICdDVVJSRU5DWV9BUlMnLFxuICBDVVJSRU5DWV9BVUQgPSAnQ1VSUkVOQ1lfQVVEJyxcbiAgQ1VSUkVOQ1lfQkRUID0gJ0NVUlJFTkNZX0JEVCcsXG4gIENVUlJFTkNZX0JHTiA9ICdDVVJSRU5DWV9CR04nLFxuICBDVVJSRU5DWV9CT0IgPSAnQ1VSUkVOQ1lfQk9CJyxcbiAgQ1VSUkVOQ1lfQlJMID0gJ0NVUlJFTkNZX0JSTCcsXG4gIENVUlJFTkNZX0NBRCA9ICdDVVJSRU5DWV9DQUQnLFxuICBDVVJSRU5DWV9DREYgPSAnQ1VSUkVOQ1lfQ0RGJyxcbiAgQ1VSUkVOQ1lfQ0hGID0gJ0NVUlJFTkNZX0NIRicsXG4gIENVUlJFTkNZX0NMUCA9ICdDVVJSRU5DWV9DTFAnLFxuICBDVVJSRU5DWV9DTlkgPSAnQ1VSUkVOQ1lfQ05ZJyxcbiAgQ1VSUkVOQ1lfQ09QID0gJ0NVUlJFTkNZX0NPUCcsXG4gIENVUlJFTkNZX0NSQyA9ICdDVVJSRU5DWV9DUkMnLFxuICBDVVJSRU5DWV9DWksgPSAnQ1VSUkVOQ1lfQ1pLJyxcbiAgQ1VSUkVOQ1lfREtLID0gJ0NVUlJFTkNZX0RLSycsXG4gIENVUlJFTkNZX0RPUCA9ICdDVVJSRU5DWV9ET1AnLFxuICBDVVJSRU5DWV9FR1AgPSAnQ1VSUkVOQ1lfRUdQJyxcbiAgQ1VSUkVOQ1lfRVRCID0gJ0NVUlJFTkNZX0VUQicsXG4gIENVUlJFTkNZX0VVUiA9ICdDVVJSRU5DWV9FVVInLFxuICBDVVJSRU5DWV9HQlAgPSAnQ1VSUkVOQ1lfR0JQJyxcbiAgQ1VSUkVOQ1lfSEtEID0gJ0NVUlJFTkNZX0hLRCcsXG4gIENVUlJFTkNZX0hSSyA9ICdDVVJSRU5DWV9IUksnLFxuICBDVVJSRU5DWV9IVUYgPSAnQ1VSUkVOQ1lfSFVGJyxcbiAgQ1VSUkVOQ1lfSURSID0gJ0NVUlJFTkNZX0lEUicsXG4gIENVUlJFTkNZX0lMUyA9ICdDVVJSRU5DWV9JTFMnLFxuICBDVVJSRU5DWV9JTlIgPSAnQ1VSUkVOQ1lfSU5SJyxcbiAgQ1VSUkVOQ1lfSVJSID0gJ0NVUlJFTkNZX0lSUicsXG4gIENVUlJFTkNZX0lTSyA9ICdDVVJSRU5DWV9JU0snLFxuICBDVVJSRU5DWV9KTUQgPSAnQ1VSUkVOQ1lfSk1EJyxcbiAgQ1VSUkVOQ1lfSlBZID0gJ0NVUlJFTkNZX0pQWScsXG4gIENVUlJFTkNZX0tSVyA9ICdDVVJSRU5DWV9LUlcnLFxuICBDVVJSRU5DWV9MS1IgPSAnQ1VSUkVOQ1lfTEtSJyxcbiAgQ1VSUkVOQ1lfTFRMID0gJ0NVUlJFTkNZX0xUTCcsXG4gIENVUlJFTkNZX01OVCA9ICdDVVJSRU5DWV9NTlQnLFxuICBDVVJSRU5DWV9NVlIgPSAnQ1VSUkVOQ1lfTVZSJyxcbiAgQ1VSUkVOQ1lfTVhOID0gJ0NVUlJFTkNZX01YTicsXG4gIENVUlJFTkNZX01ZUiA9ICdDVVJSRU5DWV9NWVInLFxuICBDVVJSRU5DWV9OT0sgPSAnQ1VSUkVOQ1lfTk9LJyxcbiAgQ1VSUkVOQ1lfTlpEID0gJ0NVUlJFTkNZX05aRCcsXG4gIENVUlJFTkNZX1BBQiA9ICdDVVJSRU5DWV9QQUInLFxuICBDVVJSRU5DWV9QRU4gPSAnQ1VSUkVOQ1lfUEVOJyxcbiAgQ1VSUkVOQ1lfUEhQID0gJ0NVUlJFTkNZX1BIUCcsXG4gIENVUlJFTkNZX1BLUiA9ICdDVVJSRU5DWV9QS1InLFxuICBDVVJSRU5DWV9QTE4gPSAnQ1VSUkVOQ1lfUExOJyxcbiAgQ1VSUkVOQ1lfUk9OID0gJ0NVUlJFTkNZX1JPTicsXG4gIENVUlJFTkNZX1JTRCA9ICdDVVJSRU5DWV9SU0QnLFxuICBDVVJSRU5DWV9SVUIgPSAnQ1VSUkVOQ1lfUlVCJyxcbiAgQ1VSUkVOQ1lfU0FSID0gJ0NVUlJFTkNZX1NBUicsXG4gIENVUlJFTkNZX1NFSyA9ICdDVVJSRU5DWV9TRUsnLFxuICBDVVJSRU5DWV9TR0QgPSAnQ1VSUkVOQ1lfU0dEJyxcbiAgQ1VSUkVOQ1lfVEhCID0gJ0NVUlJFTkNZX1RIQicsXG4gIENVUlJFTkNZX1RSWSA9ICdDVVJSRU5DWV9UUlknLFxuICBDVVJSRU5DWV9UV0QgPSAnQ1VSUkVOQ1lfVFdEJyxcbiAgQ1VSUkVOQ1lfVFpTID0gJ0NVUlJFTkNZX1RaUycsXG4gIENVUlJFTkNZX1VBSCA9ICdDVVJSRU5DWV9VQUgnLFxuICBDVVJSRU5DWV9VU0QgPSAnQ1VSUkVOQ1lfVVNEJyxcbiAgQ1VSUkVOQ1lfVVlVID0gJ0NVUlJFTkNZX1VZVScsXG4gIENVUlJFTkNZX1ZFRiA9ICdDVVJSRU5DWV9WRUYnLFxuICBDVVJSRU5DWV9WTkQgPSAnQ1VSUkVOQ1lfVk5EJyxcbiAgQ1VSUkVOQ1lfWUVSID0gJ0NVUlJFTkNZX1lFUicsXG4gIENVUlJFTkNZX1pBUiA9ICdDVVJSRU5DWV9aQVInLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlIHtcbiAgLyoqXG4gICAqIFRoZSB0eXBlIG9mIHRoZSB0YWJsZS5cbiAgICovXG4gIGlkOiBUYWJsZVR5cGU7XG4gIC8qKlxuICAgKiBUaGUgW1tGaWVsZElkXV1zIG9mIHRoZSBmaWVsZHMgc2VsZWN0ZWQgYnkgdGhlIHVzZXIuXG4gICAqL1xuICBmaWVsZHM6IEZpZWxkSWRbXTtcbiAgLyoqXG4gICAqIFRoZSByb3dzIG9mIGRhdGEgVmFsdWVzLlxuICAgKi9cbiAgcm93czogRFNSb3dbXTtcbn1cblxuLyoqXG4gKiBBIHJvdyBvZiB2YWx1ZXMuXG4gKlxuICogVGhlIG9yZGVyIG9mIHZhbHVlcyBjb3JyZXNwb25kcyB0byB0aGUgb3JkZXIgb2YgdGhlIGZpZWxkcyBvZiBhbGwgZGF0YSBlbGVtZW50IGZpZWxkIG9iamVjdHMuXG4gKi9cblxuZXhwb3J0IHR5cGUgRFNSb3cgPSBEU1Jvd1ZhbHVlW107XG4vKipcbiAqIEEgdmFsdWUgZm9yIGFuIGVudHJ5IGluIGEgRFNSb3cuXG4gKi9cbmV4cG9ydCB0eXBlIERTUm93VmFsdWUgPSBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0RhdGFFbGVtZW50TWV0cmljIHtcbiAgLyoqXG4gICAqIFRoZSBkYXRhIGVsZW1lbnQgdHlwZSB0byByZW5kZXIuXG4gICAqL1xuICB0eXBlOiBDb25maWdEYXRhRWxlbWVudFR5cGUuTUVUUklDO1xuICAvKipcbiAgICogVGhlIElEIG9mIHRoZSBtZXRyaWMuXG4gICAqXG4gICAqIFRoaXMgc2hvdWxkIGJlIGEgbm9uLWVtcHR5IHN0cmluZyB3aXRoIG5vIHNwYWNlcy5cbiAgICovXG4gIGlkOiBDb25maWdEYXRhRWxlbWVudElkO1xuICAvKipcbiAgICogVGhlIHRvb2x0aXAgb3IgbGFiZWwgZm9yIHRoZSBtZXRyaWMuXG4gICAqL1xuICBsYWJlbDogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGRhdGEgb3B0aW9ucyBmb3IgYSBNZXRyaWMuXG4gICAqL1xuICBvcHRpb25zOiB7XG4gICAgLyoqXG4gICAgICogVGhlIG1pbmltdW0gbnVtYmVyIG9mIG1ldHJpY3Mgc3VwcG9ydGVkLlxuICAgICAqL1xuICAgIG1pbj86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgbWF4aW11bSBudW1iZXIgb2YgbWV0cmljcyBzdXBwb3J0ZWQuXG4gICAgICovXG4gICAgbWF4PzogbnVtYmVyO1xuICB9O1xuICAvKipcbiAgICogVGhlIGxpc3Qgb2YgW1tGaWVsZElkXV1zIHNlbGVjdGVkIGJ5IHRoZSB1c2VyLlxuICAgKi9cbiAgdmFsdWU6IEZpZWxkSWRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdEYXRhRWxlbWVudERpbWVuc2lvbiB7XG4gIC8qKlxuICAgKiBUaGUgZGF0YSBlbGVtZW50IHR5cGUgdG8gcmVuZGVyLlxuICAgKi9cbiAgdHlwZTogQ29uZmlnRGF0YUVsZW1lbnRUeXBlLkRJTUVOU0lPTjtcbiAgLyoqXG4gICAqIFRoZSBJRCBvZiB0aGUgZGltZW5zaW9uLlxuICAgKlxuICAgKiBUaGlzIHNob3VsZCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcgd2l0aCBubyBzcGFjZXMuXG4gICAqL1xuICBpZDogQ29uZmlnRGF0YUVsZW1lbnRJZDtcbiAgLyoqXG4gICAqIFRoZSB0b29sdGlwIG9yIGxhYmVsIGZvciB0aGUgZGltZW5zaW9uLlxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBkYXRhIG9wdGlvbnMgZm9yIGEgRGltZW5zaW9uLlxuICAgKi9cbiAgb3B0aW9uczoge1xuICAgIC8qKlxuICAgICAqIFRoZSBtaW5pbXVtIG51bWJlciBvZiBkaW1lbnNpb25zIHN1cHBvcnRlZC5cbiAgICAgKi9cbiAgICBtaW4/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIG1heGltdW0gbnVtYmVyIG9mIGRpbWVuc2lvbnMgc3VwcG9ydGVkLlxuICAgICAqL1xuICAgIG1heD86IG51bWJlcjtcbiAgICBzdXBwb3J0ZWRUeXBlcz86IEFycmF5PCdUSU1FJyB8ICdHRU8nIHwgJ0RFRkFVTFQnPjtcbiAgfTtcbiAgLyoqXG4gICAqIFRoZSBsaXN0IG9mIFtbRmllbGRJZF1dcyBzZWxlY3RlZCBieSB0aGUgdXNlci5cbiAgICovXG4gIHZhbHVlOiBGaWVsZElkW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnRGF0YUVsZW1lbnRNYXhSZXN1bHRzIHtcbiAgLyoqXG4gICAqIFRoZSBkYXRhIGVsZW1lbnQgdHlwZSB0byByZW5kZXIuXG4gICAqL1xuICB0eXBlOiBDb25maWdEYXRhRWxlbWVudFR5cGUuTUFYX1JFU1VMVFM7XG4gIC8qKlxuICAgKiBUaGUgSUQgb2YgdGhlIG1heCByZXN1bHRzLlxuICAgKlxuICAgKiBUaGlzIHNob3VsZCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcgd2l0aCBubyBzcGFjZXMuXG4gICAqL1xuICBpZDogQ29uZmlnRGF0YUVsZW1lbnRJZDtcbiAgLyoqXG4gICAqIFRoZSB0b29sdGlwIG9yIGxhYmVsIGZvciB0aGUgbWF4IHJlc3VsdHMuXG4gICAqL1xuICBsYWJlbDogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGRhdGEgb3B0aW9ucyBmb3IgYSBNYXggUmVzdWx0cy5cbiAgICovXG4gIG9wdGlvbnM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgbWF4aW11bSBudW1iZXIgb2Ygcm93cy5cbiAgICAgKi9cbiAgICBtYXg6IG51bWJlcjtcbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgQ29uZmlnRGF0YUVsZW1lbnQgPVxuICB8IENvbmZpZ0RhdGFFbGVtZW50TWF4UmVzdWx0c1xuICB8IENvbmZpZ0RhdGFFbGVtZW50TWV0cmljXG4gIHwgQ29uZmlnRGF0YUVsZW1lbnREaW1lbnNpb247XG5cbi8vIFRPRE86IHRoaXMgc2hvdWxkIGV2ZW50dWFsbHkgYWx3YXlzIGJlIGEgdmFsdWVcbmV4cG9ydCB0eXBlIENvbmZpZ1N0eWxlVmFsdWUgPSBzdHJpbmcgfCB7fSB8IGJvb2xlYW4gfCB7Y29sb3I6IHN0cmluZ307XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnU3R5bGVFbGVtZW50IHtcbiAgLyoqXG4gICAqIFRoZSBzdHlsZSBlbGVtZW50IHR5cGUgdG8gcmVuZGVyLlxuICAgKi9cbiAgdHlwZTogQ29uZmlnU3R5bGVFbGVtZW50VHlwZTtcbiAgLyoqXG4gICAqIFRoZSBJRCBvZiB0aGUgc3R5bGUgZWxlbWVudC5cbiAgICpcbiAgICogVGhpcyBzaG91bGQgYmUgYSBub24tZW1wdHkgc3RyaW5nIHdpdGggbm8gc3BhY2VzLlxuICAgKi9cbiAgaWQ6IENvbmZpZ1N0eWxlRWxlbWVudElkO1xuICAvKipcbiAgICogVGhlIHRvb2x0aXAgb3IgbGFiZWwgZm9yIHRoZSBzdHlsZSBlbGVtZW50LlxuICAgKlxuICAgKiBUaGlzIGlzIHRoZSBsYWJlbCB0ZXh0IGZvciBhIGBDSEVDS0JPWGAgZWxlbWVudCBhbmQgdGhlIHRvb2x0aXAgdGV4dCBmb3Igb3RoZXIgZWxlbWVudHMuXG4gICAqL1xuICBsYWJlbDogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGRlZmF1bHQgdmFsdWUgZm9yIHRoZSBzdHlsZSBlbGVtZW50LlxuICAgKlxuICAgKiBJbnZhbGlkIHZhbHVlcyB3aWxsIGJlIGlnbm9yZWQuXG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IENvbmZpZ1N0eWxlVmFsdWU7XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgc3R5bGUgZWxlbWVudC5cbiAgICovXG4gIHZhbHVlOiBDb25maWdTdHlsZVZhbHVlO1xufVxuZXhwb3J0IGVudW0gVGFibGVUeXBlIHtcbiAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgQ09NUEFSSVNPTiA9ICdDT01QQVJJU09OJyxcbiAgU1VNTUFSWSA9ICdTVU1NQVJZJyxcbn1cblxuZXhwb3J0IGVudW0gRGF0ZVJhbmdlVHlwZSB7XG4gIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gIENPTVBBUklTT04gPSAnQ09NUEFSSVNPTicsXG59XG5cbmV4cG9ydCBlbnVtIENvbmZpZ0RhdGFFbGVtZW50VHlwZSB7XG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgbWV0cmljIGZpZWxkIGVsZW1lbnQuXG4gICAqL1xuICBNRVRSSUMgPSAnTUVUUklDJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSBkaW1lbnNpb24gZmllbGQgZWxlbWVudC5cbiAgICovXG4gIERJTUVOU0lPTiA9ICdESU1FTlNJT04nLFxuICAvKipcbiAgICogUmVuZGVycyBhIGRyb3Bkb3duIHRoYXQgYWZmZWN0cyB0aGUgbWF4aW11bSBudW1iZXIgb2YgcmVzdWx0cyByZXR1cm5lZC5cbiAgICovXG4gIE1BWF9SRVNVTFRTID0gJ01BWF9SRVNVTFRTJyxcbn1cblxuZXhwb3J0IGVudW0gQ29uZmlnU3R5bGVFbGVtZW50VHlwZSB7XG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgdGV4dCBpbnB1dCBib3guXG4gICAqL1xuICBURVhUSU5QVVQgPSAnVEVYVElOUFVUJyxcbiAgLyoqXG4gICAqIEEgc2luZ2xlIHNlbGVjdCBkcm9wZG93bi5cbiAgICovXG4gIFNFTEVDVF9TSU5HTEUgPSAnU0VMRUNUX1NJTkdMRScsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgY2hlY2tib3guXG4gICAqXG4gICAqIERlZmF1bHQgdmFsdWU6IGBmYWxzZWBcbiAgICovXG4gIENIRUNLQk9YID0gJ0NIRUNLQk9YJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGZvbnQgY29sb3Igc2VsZWN0b3IuXG4gICAqXG4gICAqIEFjY2VwdGFibGUgZGVmYXVsdCB2YWx1ZXM6IEhFWCBjb2xvciB2YWx1ZS4gRS5nLiBgXCIjODg4ODg4XCJgLlxuICAgKlxuICAgKiBEZWZhdWx0IHZhbHVlOiBgXCIjMDAwXCJgLlxuICAgKi9cbiAgRk9OVF9DT0xPUiA9ICdGT05UX0NPTE9SJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGZvbnQgc2l6ZSBzZWxlY3Rvci5cbiAgICpcbiAgICogRGVmYXVsdCB2YWx1ZTogYFwiMTRweFwiYC5cbiAgICovXG4gIEZPTlRfU0laRSA9ICdGT05UX1NJWkUnLFxuICAvKipcbiAgICogUmVuZGVycyB0aGUgZm9udCBmYW1pbHkgc2VsZWN0b3IuXG4gICAqXG4gICAqIERlZmF1bHQgdmFsdWU6IGBcIlwiYFxuICAgKi9cbiAgRk9OVF9GQU1JTFkgPSAnRk9OVF9GQU1JTFknLFxuICAvKipcbiAgICogUmVuZGVycyBhIGZpbGwgY29sb3Igc2VsZWN0b3IuXG4gICAqXG4gICAqIEFjY2VwdGFibGUgZGVmYXVsdCB2YWx1ZXM6IEhFWCBjb2xvciB2YWx1ZS5cbiAgICovXG4gIEZJTExfQ09MT1IgPSAnRklMTF9DT0xPUicsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgYm9yZGVyIGNvbG9yIHNlbGVjdG9yLlxuICAgKlxuICAgKiBBY2NlcHRhYmxlIGRlZmF1bHQgdmFsdWVzOiBIRVggY29sb3IgdmFsdWUuXG4gICAqL1xuICBCT1JERVJfQ09MT1IgPSAnQk9SREVSX0NPTE9SJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYW4gYXhpcyBjb2xvciBzZWxlY3Rvci5cbiAgICpcbiAgICogQWNjZXB0YWJsZSBkZWZhdWx0IHZhbHVlczogSEVYIGNvbG9yIHZhbHVlLlxuICAgKi9cbiAgQVhJU19DT0xPUiA9ICdBWElTX0NPTE9SJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSBncmlkIGNvbG9yIHNlbGVjdG9yLlxuICAgKlxuICAgKiBBY2NlcHRhYmxlIGRlZmF1bHQgdmFsdWVzOiBIRVggY29sb3IgdmFsdWUuXG4gICAqL1xuICBHUklEX0NPTE9SID0gJ0dSSURfQ09MT1InLFxuICAvKipcbiAgICogUmVuZGVycyBhbiBvcGFjaXR5IHNlbGVjdG9yLlxuICAgKi9cbiAgT1BBQ0lUWSA9ICdPUEFDSVRZJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSBsaW5lIHdlaWdodCBwaWNrZXIuXG4gICAqL1xuICBMSU5FX1dFSUdIVCA9ICdMSU5FX1dFSUdIVCcsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgbGluZSBzdHlsZSBwaWNrZXIuXG4gICAqXG4gICAqIEFjY2VwdGFibGUgZGVmYXVsdCB2YWx1ZXM6IGBcInNvbGlkXCJgLCBgXCJkYXNoZWRcImAsIGBcImRvdHRlZFwiYCwgb3IgYFwiZG91YmxlXCJgLlxuICAgKi9cbiAgTElORV9TVFlMRSA9ICdMSU5FX1NUWUxFJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSBib3JkZXIgcmFkaXVzIHNlbGVjdG9yLlxuICAgKi9cbiAgQk9SREVSX1JBRElVUyA9ICdCT1JERVJfUkFESVVTJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYW4gaW50ZXJ2YWwgc2VsZWN0b3IuXG4gICAqL1xuICBJTlRFUlZBTCA9ICdJTlRFUlZBTCcsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgcmFkaW8gc2VsZWN0IHdpdGggcHJlLWRlZmluZWQgdmFsdWVzLlxuICAgKi9cbiAgU0VMRUNUX1JBRElPID0gJ1NFTEVDVF9SQURJTycsXG59XG5cbmV4cG9ydCB0eXBlIERTSW50ZXJhY3Rpb25EYXRhID0gRFNJbnRlcmFjdGlvbkZpbHRlckRhdGE7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRFNJbnRlcmFjdGlvbkZpbHRlckRhdGEge1xuICBzdXBwb3J0ZWRBY3Rpb25zOiBEU0ludGVyYWN0aW9uVHlwZVtdO1xuICBpZDogSW50ZXJhY3Rpb25JZDtcbiAgdmFsdWU6IERTSW50ZXJhY3Rpb25GaWx0ZXJWYWx1ZTtcbn1cblxuZXhwb3J0IGVudW0gRFNJbnRlcmFjdGlvblR5cGUge1xuICBGSUxURVIgPSAnRklMVEVSJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEU0ludGVyYWN0aW9uRmlsdGVyVmFsdWUge1xuICB0eXBlOiBEU0ludGVyYWN0aW9uVHlwZTtcbiAgZGF0YTogSW50ZXJhY3Rpb25EYXRhO1xufVxuXG4vLyBBbGlhc2VzXG5leHBvcnQgdHlwZSBGaWVsZElkID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgQ29uZmlnRGF0YUlkID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgQ29uZmlnU3R5bGVJZCA9IHN0cmluZztcbmV4cG9ydCB0eXBlIENvbmZpZ0RhdGFFbGVtZW50SWQgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBDb25maWdTdHlsZUVsZW1lbnRJZCA9IHN0cmluZztcblxuLy8gQ3VzdG9tIHR5cGVzIGZvciBMaWJyYXJ5XG5leHBvcnQgaW50ZXJmYWNlIFBhcnNlZEltYWdlIHtcbiAgb3JpZ2luYWxVcmw6IHN0cmluZztcbiAgcHJveGllZFVybD86IHN0cmluZztcbiAgYWx0VGV4dD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWVsZHNCeUlkIHtcbiAgLy8gQW4gaW5kZXhlZCBUeXBlIGNhbm5vdCBiZSBhIHR5cGUgYWxpYXMgOihcbiAgW2ZpZWxkSWQ6IHN0cmluZ106IEZpZWxkO1xufVxuXG5leHBvcnQgdHlwZSBQYXJzZWRSb3cgPSBQYXJzZWRSb3dWYWx1ZVtdO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJvd0J5Q29uZmlnSWQge1xuICBbY29uZmlnSWQ6IHN0cmluZ106IFBhcnNlZFJvdztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJsZXNCeVR5cGUge1xuICBbVGFibGVUeXBlLkRFRkFVTFRdOiBSb3dCeUNvbmZpZ0lkW107XG4gIFtUYWJsZVR5cGUuQ09NUEFSSVNPTl06IFJvd0J5Q29uZmlnSWRbXTtcbiAgW1RhYmxlVHlwZS5TVU1NQVJZXTogUm93QnlDb25maWdJZFtdO1xufVxuXG5leHBvcnQgdHlwZSBQYXJzZWRSb3dWYWx1ZSA9IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCBQYXJzZWRJbWFnZTtcblxuZXhwb3J0IHR5cGUgUm93SGVhZGluZyA9IEZpZWxkICYge2NvbmZpZ0lkOiBzdHJpbmd9O1xuZXhwb3J0IHR5cGUgUm93RW50cnkgPSBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuO1xuZXhwb3J0IHR5cGUgUm93ID0gUm93RW50cnlbXTtcblxuZXhwb3J0IGludGVyZmFjZSBGaWVsZHNCeUNvbmZpZ0lkIHtcbiAgW2NvbmZpZ0lkOiBzdHJpbmddOiBGaWVsZFtdO1xufVxuXG5leHBvcnQgdHlwZSBTdHlsZVRoZW1lID0gYW55O1xuZXhwb3J0IHR5cGUgU3R5bGVFbnRyeSA9IGFueTtcbmV4cG9ydCB0eXBlIFN0eWxlVmFsdWUgPSBTdHlsZVRoZW1lIHwgU3R5bGVFbnRyeTtcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZUJ5SWQge1xuICBbc3R5bGVJZDogc3RyaW5nXTogU3R5bGVWYWx1ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJsZURhdGEge1xuICBoZWFkZXJzOiBSb3dIZWFkaW5nW107XG4gIHJvd3M6IFJvd1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlcyB7XG4gIFtUYWJsZVR5cGUuREVGQVVMVF06IFRhYmxlRGF0YTtcbiAgW1RhYmxlVHlwZS5DT01QQVJJU09OXT86IFRhYmxlRGF0YTtcbiAgW1RhYmxlVHlwZS5TVU1NQVJZXT86IFRhYmxlRGF0YTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJsZUZvcm1hdCB7XG4gIGZpZWxkczogRmllbGRzQnlDb25maWdJZDtcbiAgc3R5bGU6IFN0eWxlQnlJZDtcbiAgdGFibGVzOiBUYWJsZXM7XG4gIGRhdGVSYW5nZXM6IERhdGVSYW5nZXNCeUlkO1xuICB0aGVtZTogVGhlbWVTdHlsZTtcbiAgaW50ZXJhY3Rpb25zOiBJbnRlcmFjdGlvbnNCeUlkO1xufVxuXG5leHBvcnQgdHlwZSBUYWJsZVRyYW5zZm9ybSA9IChtZXNzYWdlOiBNZXNzYWdlKSA9PiBUYWJsZUZvcm1hdDtcblxuZXhwb3J0IHR5cGUgQ29uZmlnSWQgPSBzdHJpbmc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Vic2NyaXB0aW9uc09wdGlvbnM8VD4ge1xuICB0cmFuc2Zvcm06IChtZXNzYWdlOiBNZXNzYWdlKSA9PiBUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9iamVjdFJvdyB7XG4gIFtjb25maWdJZDogc3RyaW5nXTogUm93RW50cnlbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RUYWJsZXMge1xuICBbVGFibGVUeXBlLkRFRkFVTFRdOiBPYmplY3RSb3dbXTtcbiAgW1RhYmxlVHlwZS5DT01QQVJJU09OXT86IE9iamVjdFJvd1tdO1xuICBbVGFibGVUeXBlLlNVTU1BUlldPzogT2JqZWN0Um93W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZVJhbmdlc0J5SWQge1xuICBbRGF0ZVJhbmdlVHlwZS5ERUZBVUxUXT86IHtcbiAgICBzdGFydDogc3RyaW5nO1xuICAgIGVuZDogc3RyaW5nO1xuICB9O1xuICBbRGF0ZVJhbmdlVHlwZS5DT01QQVJJU09OXT86IHtcbiAgICBzdGFydDogc3RyaW5nO1xuICAgIGVuZDogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9iamVjdEZvcm1hdCB7XG4gIGZpZWxkczogRmllbGRzQnlDb25maWdJZDtcbiAgc3R5bGU6IFN0eWxlQnlJZDtcbiAgdGFibGVzOiBPYmplY3RUYWJsZXM7XG4gIGRhdGVSYW5nZXM6IERhdGVSYW5nZXNCeUlkO1xuICB0aGVtZTogVGhlbWVTdHlsZTtcbiAgaW50ZXJhY3Rpb25zOiBJbnRlcmFjdGlvbnNCeUlkO1xufVxuXG5leHBvcnQgdHlwZSBDb21wb25lbnRJZCA9IHN0cmluZztcblxuZXhwb3J0IHR5cGUgT2JqZWN0VHJhbnNmb3JtID0gKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IE9iamVjdEZvcm1hdDtcblxuZXhwb3J0IGVudW0gVG9EU01lc3NhZ2VUeXBlIHtcbiAgVklaX1JFQURZID0gJ3ZpelJlYWR5JyxcbiAgSU5URVJBQ1RJT04gPSAndml6QWN0aW9uJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWaXpSZWFkeU1lc3NhZ2Uge1xuICB0eXBlOiBUb0RTTWVzc2FnZVR5cGUuVklaX1JFQURZO1xuICBjb21wb25lbnRJZDogQ29tcG9uZW50SWQ7XG59XG5cbi8vIEludGVyYWN0aW9uIFR5cGVzXG5leHBvcnQgaW50ZXJmYWNlIEludGVyYWN0aW9uTWVzc2FnZSB7XG4gIHR5cGU6IFRvRFNNZXNzYWdlVHlwZS5JTlRFUkFDVElPTjtcbiAgaWQ6IEludGVyYWN0aW9uSWQ7XG4gIGRhdGE6IEludGVyYWN0aW9uRGF0YTtcbiAgY29tcG9uZW50SWQ6IENvbXBvbmVudElkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlbmRJbnRlcmFjdGlvbiB7XG4gIC8vIFRPRE8gLSByZW1vdmUgdGhpcyBvbmNlIHRoZXJlIGlzIG1vcmUgdGhhbiBvbmUgaW50ZXJhY3Rpb24gdHlwZS5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGNhbGxhYmxlLXR5cGVzXG4gIChcbiAgICBhY3Rpb25JZDogSW50ZXJhY3Rpb25JZCxcbiAgICBpbnRlcmFjdGlvbjogSW50ZXJhY3Rpb25UeXBlLkZJTFRFUixcbiAgICBkYXRhOiBGaWx0ZXJJbnRlcmFjdGlvbkRhdGFcbiAgKTogdm9pZDtcbiAgLy8gVE9ETyAtIFdoZW4gdGhlcmUgYXJlIG1vcmUgSW50ZXJhY3Rpb24gdHlwZXMsIHRoZSBuZXcgb25lcyBzaG91bGQgYmUgYWRkZWQgaGVyZSB3aXRoIHRoZWlyIG93biBzaWduYXR1cmUuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xlYXJJbnRlcmFjdGlvbiB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBjYWxsYWJsZS10eXBlc1xuICAoXG4gICAgYWN0aW9uSWQ6IEludGVyYWN0aW9uSWQsXG4gICAgaW50ZXJhY3Rpb246IEludGVyYWN0aW9uVHlwZS5GSUxURVIsXG4gICAgZGF0YTogdW5kZWZpbmVkXG4gICk6IHZvaWQ7XG59XG5cbmV4cG9ydCB0eXBlIENvbmNlcHRJZCA9IHN0cmluZztcbmV4cG9ydCB0eXBlIEZpbHRlclBhcmFtVmFsdWUgPSBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZpbHRlckludGVyYWN0aW9uRGF0YSB7XG4gIGNvbmNlcHRzOiBDb25jZXB0SWRbXTtcbiAgdmFsdWVzOiBGaWx0ZXJQYXJhbVZhbHVlW11bXTtcbn1cblxuZXhwb3J0IGVudW0gSW50ZXJhY3Rpb25UeXBlIHtcbiAgRklMVEVSID0gJ0ZJTFRFUicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW50ZXJhY3Rpb25WYWx1ZSB7XG4gIHR5cGU6IEludGVyYWN0aW9uVHlwZTtcbiAgZGF0YTogSW50ZXJhY3Rpb25EYXRhO1xufVxuXG5leHBvcnQgdHlwZSBJbnRlcmFjdGlvbkRhdGEgPSBGaWx0ZXJJbnRlcmFjdGlvbkRhdGE7XG5cbmV4cG9ydCB0eXBlIEludGVyYWN0aW9uSWQgPSBzdHJpbmc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW50ZXJhY3Rpb24ge1xuICBzdXBwb3J0ZWRBY3Rpb25zOiBJbnRlcmFjdGlvblR5cGVbXTtcbiAgdmFsdWU6IEludGVyYWN0aW9uVmFsdWUgfCB7fTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnRlcmFjdGlvbnNCeUlkIHtcbiAgW2ludGVyYWN0aW9uSWQ6IHN0cmluZ106IEludGVyYWN0aW9uO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==