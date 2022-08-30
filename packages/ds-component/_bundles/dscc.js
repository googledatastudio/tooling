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
    var componentId = params.get('dscId');
    if (componentId !== null) {
        return componentId;
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
var toNum = function (cdet) {
    return cdet === types_1.ConfigDataElementType.DIMENSION ? -1 : 1;
};
var dimensionOrMetric = function (cde) {
    return cde.type === types_1.ConfigDataElementType.DIMENSION ||
        cde.type === types_1.ConfigDataElementType.METRIC;
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
                objectTables[table.id] = objectRows;
            }
            else {
                objectTables[table.id] = current.concat(objectRows);
            }
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
    var colors = message.config.colorMap || {};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kc2NjL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kc2NjL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RzY2MvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZHNjYy8uL3NyYy90eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7Ozs7Ozs7Ozs7OztFQWVFO0FBQ0YsbUVBeUNpQjtBQUVqQix1REFBdUQ7QUFDdkQsK0RBQXdCO0FBRXhCOzs7Ozs7OztHQVFHO0FBQ1UsZ0JBQVEsR0FBRyxjQUFjLGVBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUF6QixD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VW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZHNjY1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkc2NjXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRzY2NcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLyohXG4gIEBsaWNlbnNlXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHtcbiAgQ2xlYXJJbnRlcmFjdGlvbixcbiAgQ29sb3JzQnlEaW1lbnNpb24sXG4gIENvbmZpZ0RhdGEsXG4gIENvbmZpZ0RhdGFFbGVtZW50LFxuICBDb25maWdEYXRhRWxlbWVudERpbWVuc2lvbixcbiAgQ29uZmlnRGF0YUVsZW1lbnRNZXRyaWMsXG4gIENvbmZpZ0RhdGFFbGVtZW50VHlwZSxcbiAgQ29uZmlnSWQsXG4gIENvbmZpZ1N0eWxlLFxuICBDb25maWdTdHlsZUVsZW1lbnQsXG4gIERhdGVSYW5nZXNCeUlkLFxuICBEU0ludGVyYWN0aW9uRGF0YSxcbiAgRFNJbnRlcmFjdGlvblR5cGUsXG4gIERTUm93VmFsdWUsXG4gIEZpZWxkLFxuICBGaWVsZElkLFxuICBGaWVsZHNCeUNvbmZpZ0lkLFxuICBGaWVsZHNCeUlkLFxuICBJbnRlcmFjdGlvbk1lc3NhZ2UsXG4gIEludGVyYWN0aW9uc0J5SWQsXG4gIEludGVyYWN0aW9uVHlwZSxcbiAgTWVzc2FnZSxcbiAgTWVzc2FnZVR5cGUsXG4gIE9iamVjdFJvdyxcbiAgT2JqZWN0VGFibGVzLFxuICBPYmplY3RUcmFuc2Zvcm0sXG4gIFBvc3RNZXNzYWdlLFxuICBSb3csXG4gIFJvd0hlYWRpbmcsXG4gIFNlbmRJbnRlcmFjdGlvbixcbiAgU3R5bGVCeUlkLFxuICBTdWJzY3JpcHRpb25zT3B0aW9ucyxcbiAgVGFibGUsXG4gIFRhYmxlRm9ybWF0LFxuICBUYWJsZXMsXG4gIFRhYmxlVHJhbnNmb3JtLFxuICBUYWJsZVR5cGUsXG4gIFRoZW1lU3R5bGUsXG4gIFRvRFNNZXNzYWdlVHlwZSxcbiAgVml6UmVhZHlNZXNzYWdlLFxufSBmcm9tICcuL3R5cGVzJztcblxuLy8gTWFrZSBhbGwgZXhwb3J0ZWQgdHlwZXMgYXZhaWxhYmxlIHRvIGV4dGVybmFsIHVzZXJzLlxuZXhwb3J0ICogZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgd2lkdGggKGluIHBpeGVscykgb2YgdGhlIHZpcydzIGlmcmFtZS5cbiAqXG4gKiBVc2FnZTpcbiAqIGBgYFxuICogdmFyIG15V2lkdGggPSBkc2NjLmdldFdpZHRoKCk7XG4gKiBjb25zb2xlLmxvZygnTXkgd2lkdGggaXM6ICcsIG15V2lkdGgpO1xuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRXaWR0aCA9ICgpOiBudW1iZXIgPT4gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBoZWlnaHQgKGluIHBpeGVscykgb2YgdGhlIHZpcydzIGlmcmFtZS5cbiAqXG4gKiBVc2FnZTpcbiAqIGBgYFxuICogdmFyIG15SGVpZ2h0ID0gZHNjYy5nZXRIZWlnaHQoKTtcbiAqIGNvbnNvbGUubG9nKCdNeSBoZWlnaHQgaXM6ICcsIG15SGVpZ2h0KTtcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgZ2V0SGVpZ2h0ID0gKCk6IG51bWJlciA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGNvbXBvbmVudElkIG9mIHRoZSB2aXMuIENvbXBvbmVudCBpZHMgdW5pcXVlbHkgaWRlbnRpZnkgYSB2aXMgdG9cbiAqIERhdGEgU3R1ZGlvLlxuICpcbiAqIFVzYWdlOlxuICogYGBgXG4gKiB2YXIgbXlDb21wb25lbnRJZCA9IGRzY2MuZ2V0Q29tcG9uZW50SWQoKTtcbiAqIGNvbnNvbGUubG9nKCdNeSBjb21wb25lbnRJZCBpczogJywgbXlDb21wb25lbnRJZCk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldENvbXBvbmVudElkID0gKCk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gIGNvbnN0IGNvbXBvbmVudElkID0gcGFyYW1zLmdldCgnZHNjSWQnKTtcbiAgaWYgKGNvbXBvbmVudElkICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudElkO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdkc2NJZCBtdXN0IGJlIGluIHRoZSBxdWVyeSBwYXJhbWV0ZXJzLiAnICtcbiAgICAgICAgJ1RoaXMgaXMgYSBidWcgaW4gZHMtY29tcG9uZW50LCBwbGVhc2UgZmlsZSBhIGJ1ZzogJyArXG4gICAgICAgICdodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlZGF0YXN0dWRpby9kcy1jb21wb25lbnQvaXNzdWVzL25ldydcbiAgICApO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGZpZWxkcyBpbmRleGVkIGJ5IHRoZWlyIERhdGEgU3R1ZGlvIGlkLlxuICovXG5jb25zdCBmaWVsZHNCeUlkID0gKG1lc3NhZ2U6IE1lc3NhZ2UpOiBGaWVsZHNCeUlkID0+XG4gIG1lc3NhZ2UuZmllbGRzLnJlZHVjZSgoYWNjOiBGaWVsZHNCeUlkLCBmaWVsZDogRmllbGQpID0+IHtcbiAgICBhY2NbZmllbGQuaWRdID0gZmllbGQ7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG4vKipcbiAqIFppcHMgdHdvIGFycmF5cyB0b2dldGhlciBpbnRvIGEgbmV3IGFycmF5LiBVc2VzIHRoZSBsZW5ndGggb2YgdGhlIHNob3J0ZXN0XG4gKiBhcnJheS5cbiAqXG4gKiBVc2FnZTpcbiAqIGBgYFxuICogY29uc3QgYSA9IFsxLCAyLCAzXTtcbiAqIGNvbnN0IGIgPSBbJ2EnLCAnYicsICdjJywgJ2QnXTtcbiAqIGNvbnN0IHppcHBlZCA9IHppcDIoYSwgYik7XG4gKiBleHBlY3QoemlwcGVkKS50b0VxdWFsKFtbMSwgJ2EnXSwgWzIsICdiJ10sIFszLCAnYyddXSk7XG4gKiBgYGBcbiAqL1xuY29uc3QgemlwMiA9IDxULCBVPih0OiBUW10sIHU6IFVbXSk6IEFycmF5PFtULCBVXT4gPT4ge1xuICBpZiAodC5sZW5ndGggPCB1Lmxlbmd0aCkge1xuICAgIHJldHVybiB0Lm1hcCgodEVudHJ5OiBULCBpZHg6IG51bWJlcik6IFtULCBVXSA9PiBbdEVudHJ5LCB1W2lkeF1dKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdS5tYXAoKHVFbnRyeTogVSwgaWR4OiBudW1iZXIpOiBbVCwgVV0gPT4gW3RbaWR4XSwgdUVudHJ5XSk7XG4gIH1cbn07XG5cbi8vIGAuc29ydGAgaXNuJ3Qgc3RhYmxlLCBidXQgaWYgeW91IGNvbXBhcmUgaXRlbXMsIGFuZCB3aGVuIHRoZXkgYXJlIGVxdWFsIHVzZVxuLy8gdGhlIG9yaWdpbmFsIGluZGV4LCBpdCBpcyB0aGVuIHN0YWJsZS5cbmNvbnN0IHN0YWJsZVNvcnQgPSA8VD4oYXJyOiBUW10sIGNvbXBhcmU6IChhOiBULCBiOiBUKSA9PiBudW1iZXIpOiBUW10gPT5cbiAgYXJyXG4gICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+ICh7aXRlbSwgaW5kZXh9KSlcbiAgICAuc29ydCgoYSwgYikgPT4gY29tcGFyZShhLml0ZW0sIGIuaXRlbSkgfHwgYS5pbmRleCAtIGIuaW5kZXgpXG4gICAgLm1hcCgoe2l0ZW19KSA9PiBpdGVtKTtcblxuY29uc3QgdG9OdW0gPSAoY2RldDogQ29uZmlnRGF0YUVsZW1lbnRUeXBlKSA9PlxuICBjZGV0ID09PSBDb25maWdEYXRhRWxlbWVudFR5cGUuRElNRU5TSU9OID8gLTEgOiAxO1xuXG4vKipcbiAqIEZsYXR0ZW5zIHRoZSBjb25maWdJZHMgZnJvbSBhIG1lc3NhZ2UgaW50byBhIHNpbmdsZSBhcnJheS4gVGhlIGNvbmZpZyBJZHNcbiAqIHdpbGwgYmUgcmVwZWF0ZWQgZm9yIHRoZSBgTUVUUklDYC9gRElNRU5TSU9OYCBzZWxlY3Rpb25zLiBpLmUuIGZvciBhIGBNRVRSSUNgXG4gKiBuYW1lZCBgXCJtZXRyaWNzXCJgIG9mIGB7bWluOiAyLCBtYXg6M31gLCB0aGUgdmFsdWUgbWV0cmljcyB3aWxsIGJlIHJlcGVhdGVkIDJcbiAqIHRvIDMgdGltZXMgZGVwZW5kaW5nIG9uIHdoYXQgdmFsdWVzIHRoZSB1c2VyIHNlbGVjdHMuXG4gKlxuICogTm90ZTogdGhpcyBpcyByZWx5aW5nIG9uIHRoZSBmYWN0IHRoYXQgdGhlIHBvc3RNZXNzYWdlIGZyb20gRGF0YVN0dWRpbyBoYXNcbiAqIHRoZSBmaWVsZHMgc29ydGVkIHRvIGJlIGRpbWVuc2lvbnMsIGZvbGxvd2VkIGJ5IG1ldHJpY3MuXG4gKi9cbnR5cGUgQ29uZmlnRGF0YUNvbmNlcHQgPSBDb25maWdEYXRhRWxlbWVudE1ldHJpYyB8IENvbmZpZ0RhdGFFbGVtZW50RGltZW5zaW9uO1xuXG5jb25zdCBkaW1lbnNpb25Pck1ldHJpYyA9IChjZGU6IENvbmZpZ0RhdGFFbGVtZW50KTogY2RlIGlzIENvbmZpZ0RhdGFDb25jZXB0ID0+XG4gIGNkZS50eXBlID09PSBDb25maWdEYXRhRWxlbWVudFR5cGUuRElNRU5TSU9OIHx8XG4gIGNkZS50eXBlID09PSBDb25maWdEYXRhRWxlbWVudFR5cGUuTUVUUklDO1xuXG5jb25zdCBmbGF0dGVuQ29uZmlnSWRzID0gKG1lc3NhZ2U6IE1lc3NhZ2UpOiBDb25maWdJZFtdID0+IHtcbiAgY29uc3QgZGltbnNBbmRNZXRzOiBDb25maWdEYXRhQ29uY2VwdFtdID0gW107XG4gIG1lc3NhZ2UuY29uZmlnLmRhdGEuZm9yRWFjaCgoY29uZmlnRGF0YTogQ29uZmlnRGF0YSkgPT4ge1xuICAgIGNvbmZpZ0RhdGEuZWxlbWVudHNcbiAgICAgIC5maWx0ZXIoZGltZW5zaW9uT3JNZXRyaWMpXG4gICAgICAuZm9yRWFjaCgoY29uZmlnRGF0YUVsZW1lbnQ6IENvbmZpZ0RhdGFDb25jZXB0KSA9PiB7XG4gICAgICAgIGRpbW5zQW5kTWV0cy5wdXNoKGNvbmZpZ0RhdGFFbGVtZW50KTtcbiAgICAgIH0pO1xuICB9KTtcbiAgY29uc3Qgc29ydGVkID0gc3RhYmxlU29ydChcbiAgICBkaW1uc0FuZE1ldHMsXG4gICAgKGEsIGIpID0+IHRvTnVtKGEudHlwZSkgLSB0b051bShiLnR5cGUpXG4gICk7XG4gIGNvbnN0IGNvbmZpZ0lkczogQ29uZmlnSWRbXSA9IFtdO1xuICBzb3J0ZWQuZm9yRWFjaCgoY29uZmlnRGF0YUVsZW1lbnQpID0+IHtcbiAgICBjb25maWdEYXRhRWxlbWVudC52YWx1ZS5mb3JFYWNoKCgpID0+IGNvbmZpZ0lkcy5wdXNoKGNvbmZpZ0RhdGFFbGVtZW50LmlkKSk7XG4gIH0pO1xuICByZXR1cm4gY29uZmlnSWRzO1xufTtcblxuLyoqXG4gKiBKb2lucyBhIHNpbmdsZSB0YWJsZSByb3cgd2l0aCB0aGUgbWF0Y2hpbmcgYENvbmZpZ0lkYFxuICovXG5jb25zdCBqb2luT2JqZWN0Um93ID0gKGNvbmZpZ0lkczogQ29uZmlnSWRbXSkgPT4gKHJvdzogUm93KTogT2JqZWN0Um93ID0+IHtcbiAgY29uc3Qgb2JqZWN0Um93OiBPYmplY3RSb3cgPSB7fTtcblxuICB6aXAyKHJvdywgY29uZmlnSWRzKS5mb3JFYWNoKChbcm93VmFsLCBjb25maWdJZF06IFtEU1Jvd1ZhbHVlLCBDb25maWdJZF0pID0+IHtcbiAgICBpZiAob2JqZWN0Um93W2NvbmZpZ0lkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvYmplY3RSb3dbY29uZmlnSWRdID0gW107XG4gICAgfVxuICAgIG9iamVjdFJvd1tjb25maWdJZF0ucHVzaChyb3dWYWwpO1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIG9iamVjdFJvdztcbn07XG5cbi8qKlxuICogRm9ybWF0cyB0YWJsZXMgaW50byB0aGUgYE9iamVjdFRhYmxlc2AgZm9ybWF0LlxuICovXG5jb25zdCBvYmplY3RGb3JtYXRUYWJsZSA9IChtZXNzYWdlOiBNZXNzYWdlKTogT2JqZWN0VGFibGVzID0+IHtcbiAgY29uc3QgY29uZmlnSWRzID0gZmxhdHRlbkNvbmZpZ0lkcyhtZXNzYWdlKTtcbiAgY29uc3Qgb2JqZWN0VGFibGVzOiBPYmplY3RUYWJsZXMgPSB7W1RhYmxlVHlwZS5ERUZBVUxUXTogW119O1xuXG4gIG1lc3NhZ2UuZGF0YVJlc3BvbnNlLnRhYmxlcy5mb3JFYWNoKCh0YWJsZTogVGFibGUpID0+IHtcbiAgICBjb25zdCBvYmplY3RSb3dzOiBPYmplY3RSb3dbXSA9IHRhYmxlLnJvd3MubWFwKGpvaW5PYmplY3RSb3coY29uZmlnSWRzKSk7XG4gICAgaWYgKHRhYmxlLmlkID09PSBUYWJsZVR5cGUuREVGQVVMVCkge1xuICAgICAgb2JqZWN0VGFibGVzW3RhYmxlLmlkXSA9IG9iamVjdFJvd3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBvYmplY3RUYWJsZXNbdGFibGUuaWRdO1xuICAgICAgaWYgKGN1cnJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBvYmplY3RUYWJsZXNbdGFibGUuaWRdID0gb2JqZWN0Um93cztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9iamVjdFRhYmxlc1t0YWJsZS5pZF0gPSBjdXJyZW50LmNvbmNhdChvYmplY3RSb3dzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb2JqZWN0VGFibGVzO1xufTtcblxuLyoqXG4gKiBGb3JtYXRzIHRhYmxlcyBpbnRvIHRoZSBgVGFibGVzYCBmb3JtYXQuXG4gKi9cbmNvbnN0IHRhYmxlRm9ybWF0VGFibGUgPSAobWVzc2FnZTogTWVzc2FnZSk6IFRhYmxlcyA9PiB7XG4gIGNvbnN0IGZpZWxkc0J5OiBGaWVsZHNCeUNvbmZpZ0lkID0gZmllbGRzQnlDb25maWdJZChtZXNzYWdlKTtcbiAgY29uc3QgY29uZmlnSWRzID0gZmxhdHRlbkNvbmZpZ0lkcyhtZXNzYWdlKTtcblxuICBjb25zdCBjb25maWdJZElkeDoge1tjb25maWdJZDogc3RyaW5nXTogbnVtYmVyfSA9IHt9O1xuICBjb25zdCBoZWFkZXJzOiBSb3dIZWFkaW5nW10gPSBjb25maWdJZHMubWFwKFxuICAgIChjb25maWdJZDogc3RyaW5nKTogUm93SGVhZGluZyA9PiB7XG4gICAgICBpZiAoY29uZmlnSWRJZHhbY29uZmlnSWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uZmlnSWRJZHhbY29uZmlnSWRdID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmZpZ0lkSWR4W2NvbmZpZ0lkXSsrO1xuICAgICAgfVxuICAgICAgY29uc3QgaWR4ID0gY29uZmlnSWRJZHhbY29uZmlnSWRdO1xuICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNCeVtjb25maWdJZF1baWR4XTtcbiAgICAgIGNvbnN0IGhlYWRpbmc6IFJvd0hlYWRpbmcgPSB7Li4uZmllbGQsIGNvbmZpZ0lkfTtcbiAgICAgIHJldHVybiBoZWFkaW5nO1xuICAgIH1cbiAgKTtcbiAgY29uc3QgdGFibGVUYWJsZXM6IFRhYmxlcyA9IHtcbiAgICBbVGFibGVUeXBlLkRFRkFVTFRdOiB7aGVhZGVyczogW10sIHJvd3M6IFtdfSxcbiAgfTtcblxuICBtZXNzYWdlLmRhdGFSZXNwb25zZS50YWJsZXMuZm9yRWFjaCgodGFibGU6IFRhYmxlKSA9PiB7XG4gICAgdGFibGVUYWJsZXNbdGFibGUuaWRdID0ge1xuICAgICAgaGVhZGVycyxcbiAgICAgIHJvd3M6IHRhYmxlLnJvd3MsXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRhYmxlVGFibGVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaWVsZHMgaW5kZXhlZCBieSB0aGVpciBjb25maWcgaWQuIFNpbmNlIG1hbnkgZmllbGRzIGNhbiBiZSBpblxuICogdGhlIHNhbWUgYE1FVFJJQ2AvYERJTUVOU0lPTmAgc2VsZWN0aW9uLCBgY29uZmlnSWRgIGlzIG1hcHBlZCB0byBgRmllbGRbXWAuXG4gKi9cbmV4cG9ydCBjb25zdCBmaWVsZHNCeUNvbmZpZ0lkID0gKG1lc3NhZ2U6IE1lc3NhZ2UpOiBGaWVsZHNCeUNvbmZpZ0lkID0+IHtcbiAgY29uc3QgZmllbGRzQnlEU0lkID0gZmllbGRzQnlJZChtZXNzYWdlKTtcbiAgY29uc3QgZmllbGRzQnk6IEZpZWxkc0J5Q29uZmlnSWQgPSB7fTtcblxuICBtZXNzYWdlLmNvbmZpZy5kYXRhLmZvckVhY2goKGNvbmZpZ0RhdGE6IENvbmZpZ0RhdGEpID0+IHtcbiAgICBjb25maWdEYXRhLmVsZW1lbnRzXG4gICAgICAuZmlsdGVyKGRpbWVuc2lvbk9yTWV0cmljKVxuICAgICAgLmZvckVhY2goKGNvbmZpZ0RhdGFFbGVtZW50OiBDb25maWdEYXRhQ29uY2VwdCkgPT4ge1xuICAgICAgICBmaWVsZHNCeVtjb25maWdEYXRhRWxlbWVudC5pZF0gPSBjb25maWdEYXRhRWxlbWVudC52YWx1ZS5tYXAoXG4gICAgICAgICAgKGRzSWQ6IEZpZWxkSWQpOiBGaWVsZCA9PiBmaWVsZHNCeURTSWRbZHNJZF1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZmllbGRzQnk7XG59O1xuXG4vKipcbiAqIEZsYXR0ZW5zIHRoZSBzdHlsZSBlbnRyaWVzIGludG8gYSBzaW5nbGUgb2JqZWN0LiBgc3R5bGVJZGBzIHNob3VsZCBiZSB1bmlxdWUuXG4gKi9cbmNvbnN0IGZsYXR0ZW5TdHlsZSA9IChtZXNzYWdlOiBNZXNzYWdlKTogU3R5bGVCeUlkID0+IHtcbiAgY29uc3Qgc3R5bGVCeUlkOiBTdHlsZUJ5SWQgPSB7fTtcbiAgKG1lc3NhZ2UuY29uZmlnLnN0eWxlIHx8IFtdKS5mb3JFYWNoKChzdHlsZUVudHJ5OiBDb25maWdTdHlsZSkgPT4ge1xuICAgIHN0eWxlRW50cnkuZWxlbWVudHMuZm9yRWFjaCgoY29uZmlnU3R5bGVFbGVtZW50OiBDb25maWdTdHlsZUVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChzdHlsZUJ5SWRbY29uZmlnU3R5bGVFbGVtZW50LmlkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgc3R5bGVJZHMgbXVzdCBiZSB1bmlxdWUuIFlvdXIgc3R5bGVJZDogJyR7Y29uZmlnU3R5bGVFbGVtZW50LmlkfScgaXMgdXNlZCBtb3JlIHRoYW4gb25jZS5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBzdHlsZUJ5SWRbY29uZmlnU3R5bGVFbGVtZW50LmlkXSA9IHtcbiAgICAgICAgdmFsdWU6IGNvbmZpZ1N0eWxlRWxlbWVudC52YWx1ZSxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBjb25maWdTdHlsZUVsZW1lbnQuZGVmYXVsdFZhbHVlLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfSwge30pO1xuXG4gIHJldHVybiBzdHlsZUJ5SWQ7XG59O1xuXG5jb25zdCB0aGVtZVN0eWxlID0gKG1lc3NhZ2U6IE1lc3NhZ2UpOiBUaGVtZVN0eWxlID0+IHtcbiAgcmV0dXJuIG1lc3NhZ2UuY29uZmlnLnRoZW1lU3R5bGUhO1xufTtcblxuY29uc3QgbWFwSW50ZXJhY3Rpb25UeXBlcyA9IChcbiAgZHNJbnRlcmFjdGlvbjogRFNJbnRlcmFjdGlvblR5cGVcbik6IEludGVyYWN0aW9uVHlwZSA9PiB7XG4gIHN3aXRjaCAoZHNJbnRlcmFjdGlvbikge1xuICAgIGNhc2UgRFNJbnRlcmFjdGlvblR5cGUuRklMVEVSOlxuICAgICAgcmV0dXJuIEludGVyYWN0aW9uVHlwZS5GSUxURVI7XG4gIH1cbn07XG5cbmNvbnN0IHRyYW5zZm9ybURTSW50ZXJhY3Rpb24gPSAobWVzc2FnZTogTWVzc2FnZSk6IEludGVyYWN0aW9uc0J5SWQgPT4ge1xuICBjb25zdCBkc0ludGVyYWN0aW9uczogRFNJbnRlcmFjdGlvbkRhdGFbXSA9IG1lc3NhZ2UuY29uZmlnLmludGVyYWN0aW9ucztcbiAgLy8gVE9ETyAtIHJlbW92ZSBvbmNlIGludGVyYWN0aW9ucyBhcmUgbGl2ZS5cbiAgaWYgKGRzSW50ZXJhY3Rpb25zID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgcmV0dXJuIGRzSW50ZXJhY3Rpb25zLnJlZHVjZShcbiAgICAoYWNjOiBJbnRlcmFjdGlvbnNCeUlkLCBkc0ludGVyYWN0aW9uOiBEU0ludGVyYWN0aW9uRGF0YSkgPT4ge1xuICAgICAgY29uc3QgaW50ZXJhY3Rpb25zID0gZHNJbnRlcmFjdGlvbi5zdXBwb3J0ZWRBY3Rpb25zLm1hcChcbiAgICAgICAgbWFwSW50ZXJhY3Rpb25UeXBlc1xuICAgICAgKTtcbiAgICAgIGNvbnN0IHZhbHVlID0ge1xuICAgICAgICB0eXBlOiBtYXBJbnRlcmFjdGlvblR5cGVzKGRzSW50ZXJhY3Rpb24udmFsdWUudHlwZSksXG4gICAgICAgIGRhdGE6IGRzSW50ZXJhY3Rpb24udmFsdWUuZGF0YSxcbiAgICAgIH07XG4gICAgICBhY2NbZHNJbnRlcmFjdGlvbi5pZF0gPSB7XG4gICAgICAgIHZhbHVlLFxuICAgICAgICBzdXBwb3J0ZWRBY3Rpb25zOiBpbnRlcmFjdGlvbnMsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LFxuICAgIHt9XG4gICk7XG59O1xuXG4vKipcbiAqIFRyYW5zZm9ybSBmb3IgZGF0ZSByYW5nZXNcbiAqL1xuY29uc3QgdG9EYXRlUmFuZ2VzID0gKG1lc3NhZ2U6IE1lc3NhZ2UpOiBEYXRlUmFuZ2VzQnlJZCA9PiB7XG4gIGNvbnN0IGRhdGVSYW5nZXMgPSBtZXNzYWdlLmRhdGFSZXNwb25zZS5kYXRlUmFuZ2VzIHx8IFtdO1xuICBjb25zdCBvdXRwdXQ6IERhdGVSYW5nZXNCeUlkID0ge307XG4gIHJldHVybiBkYXRlUmFuZ2VzLnJlZHVjZSgoaW5Qcm9ncmVzcywgY3VycmVudERTRGF0ZVJhbmdlKSA9PiB7XG4gICAgaW5Qcm9ncmVzc1tjdXJyZW50RFNEYXRlUmFuZ2UuaWRdID0ge1xuICAgICAgc3RhcnQ6IGN1cnJlbnREU0RhdGVSYW5nZS5zdGFydCxcbiAgICAgIGVuZDogY3VycmVudERTRGF0ZVJhbmdlLmVuZCxcbiAgICB9O1xuICAgIHJldHVybiBpblByb2dyZXNzO1xuICB9LCBvdXRwdXQpO1xufTtcblxuLyogVHJhbnNmb3JtIGZvciBjb2xvciBtYXBzICovXG5jb25zdCB0b0NvbG9yc0J5RGltZW5zaW9uID0gKG1lc3NhZ2U6IE1lc3NhZ2UpOiBDb2xvcnNCeURpbWVuc2lvbiA9PiB7XG4gIGNvbnN0IGNvbG9ycyA9IG1lc3NhZ2UuY29uZmlnLmNvbG9yTWFwIHx8IHt9O1xuICByZXR1cm4gey4uLmNvbG9yc307XG59O1xuLyoqXG4gKiBUaGUgdHJhbnNmb3JtIHRvIHVzZSBmb3IgZGF0YSBpbiBhIFRhYmxlIGZvcm1hdC4gaS5lLiBgW1sxLCAyLCAzXSwgWzQsIDUsIDZdXWBcbiAqL1xuZXhwb3J0IGNvbnN0IHRhYmxlVHJhbnNmb3JtOiBUYWJsZVRyYW5zZm9ybSA9IChcbiAgbWVzc2FnZTogTWVzc2FnZVxuKTogVGFibGVGb3JtYXQgPT4gKHtcbiAgdGFibGVzOiB0YWJsZUZvcm1hdFRhYmxlKG1lc3NhZ2UpLFxuICBkYXRlUmFuZ2VzOiB0b0RhdGVSYW5nZXMobWVzc2FnZSksXG4gIGZpZWxkczogZmllbGRzQnlDb25maWdJZChtZXNzYWdlKSxcbiAgc3R5bGU6IGZsYXR0ZW5TdHlsZShtZXNzYWdlKSxcbiAgdGhlbWU6IHRoZW1lU3R5bGUobWVzc2FnZSksXG4gIGludGVyYWN0aW9uczogdHJhbnNmb3JtRFNJbnRlcmFjdGlvbihtZXNzYWdlKSxcbiAgY29sb3JNYXA6IHRvQ29sb3JzQnlEaW1lbnNpb24obWVzc2FnZSksXG59KTtcblxuLyoqXG4gKiBUaGUgdHJhbnNmb3JtIHRvIHVzZSBmb3IgZGF0YSBpbiBhbiBvYmplY3QgZm9ybWF0LiBpLmUuIGBbe25hbWU6ICdqb2huJywgdmlld3M6IDN9LCB7bmFtZTogJ3N1emllJywgdmlld3M6IDV9XWBcbiAqL1xuZXhwb3J0IGNvbnN0IG9iamVjdFRyYW5zZm9ybTogT2JqZWN0VHJhbnNmb3JtID0gKG1lc3NhZ2U6IE1lc3NhZ2UpID0+ICh7XG4gIHRhYmxlczogb2JqZWN0Rm9ybWF0VGFibGUobWVzc2FnZSksXG4gIGRhdGVSYW5nZXM6IHRvRGF0ZVJhbmdlcyhtZXNzYWdlKSxcbiAgZmllbGRzOiBmaWVsZHNCeUNvbmZpZ0lkKG1lc3NhZ2UpLFxuICBzdHlsZTogZmxhdHRlblN0eWxlKG1lc3NhZ2UpLFxuICB0aGVtZTogdGhlbWVTdHlsZShtZXNzYWdlKSxcbiAgaW50ZXJhY3Rpb25zOiB0cmFuc2Zvcm1EU0ludGVyYWN0aW9uKG1lc3NhZ2UpLFxuICBjb2xvck1hcDogdG9Db2xvcnNCeURpbWVuc2lvbihtZXNzYWdlKSxcbn0pO1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSB0cmFuc2Zvcm0gaXMgbGlrZWx5IHRoZSBpZGVudGl0eSBmdW5jdGlvblxuICogVGhpcyBpcyBub3QgYSBzdXBwb3J0ZWQgaW1wbGVtZW50YXRpb24gcGF0aFxuICogQXZvaWQgdGhpcyBpZiBhdCBhbGwgcG9zc2libGUgLSBwbGVhc2UgdXNlIGVpdGhlciBvYmplY3RUcmFuc2Zvcm0gb3IgdGFibGVUcmFuc2Zvcm1cbiAqL1xuY29uc3QgaXNQcm9iYWJseUlkZW50aXR5RnVuY3Rpb24gPSA8VCwgVT4odHJhbnNmb3JtOiAodDogVCkgPT4gVSk6IGJvb2xlYW4gPT4ge1xuICBsZXQgaXNJZGVudGl0eTogYm9vbGVhbiA9IGZhbHNlO1xuICBpZiAoKHRyYW5zZm9ybSBhcyBhbnkpKCdpZGVudGl0eScpID09PSAnaWRlbnRpdHknKSB7XG4gICAgaXNJZGVudGl0eSA9IHRydWU7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFRoaXMgaXMgYW4gdW5zdXBwb3J0ZWQgZGF0YSBmb3JtYXQuIFBsZWFzZSB1c2Ugb25lIG9mIHRoZSBzdXBwb3J0ZWQgdHJhbnNmb3JtczpcbiAgICAgICBkc2NjLm9iamVjdEZvcm1hdCBvciBkc2NjLnRhYmxlRm9ybWF0LmBcbiAgICApO1xuICB9XG4gIHJldHVybiBpc0lkZW50aXR5O1xufTtcblxuY29uc3QgaXNWYWxpZFRyYW5zZm9ybSA9IDxULCBVPih0cmFuc2Zvcm06ICh0OiBUKSA9PiBVKTogYm9vbGVhbiA9PiB7XG4gIGxldCBpc1ZhbGlkID0gZmFsc2U7XG4gIGlmIChcbiAgICAodHJhbnNmb3JtIGFzIGFueSkgPT09IHRhYmxlVHJhbnNmb3JtIHx8XG4gICAgKHRyYW5zZm9ybSBhcyBhbnkpID09PSBvYmplY3RUcmFuc2Zvcm1cbiAgKSB7XG4gICAgaXNWYWxpZCA9IHRydWU7XG4gIH0gZWxzZSBpZiAoaXNQcm9iYWJseUlkZW50aXR5RnVuY3Rpb24odHJhbnNmb3JtKSkge1xuICAgIGlzVmFsaWQgPSB0cnVlO1xuICB9XG4gIHJldHVybiBpc1ZhbGlkO1xufTtcbi8qXG4gKiBTdWJzY3JpYmVzIHRvIG1lc3NhZ2VzIGZyb20gRGF0YSBTdHVkaW8uIENhbGxzIGBjYmAgZm9yIGV2ZXJ5IG5ld1xuICogW1tNZXNzYWdlVHlwZS5SRU5ERVJdXSBtZXNzYWdlLiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHVuc3Vic2NyaWJlXG4gKiBgY2FsbGJhY2tgIGZyb20gZnVydGhlciBpbnZvY2F0aW9ucy5cbiAqXG4gKiBVc2FnZSAtIHRhYmxlVHJhbnNmb3JtOlxuICogYGBgXG4gKiB2YXIgdW5zdWJzY3JpYmUgPSBkc2NjLnN1YnNjcmliZVRvRGF0YShmdW5jdGlvbihtZXNzYWdlKSB7XG4gKiAgIGNvbnNvbGUubG9nKG1lc3NhZ2UudGFibGVzKVxuICogICBjb25zb2xlLmxvZyhtZXNzYWdlLmZpZWxkcylcbiAqICAgY29uc29sZS5sb2cobWVzc2FnZS5zdHlsZSlcbiAqIH0sIHt0cmFuc2Zvcm06IGRzY2MudGFibGVUcmFuc2Zvcm19KTtcbiAqXG4gKiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICogICB1bnN1YnNjcmliZSgpO1xuICogfSwgMzAwMClcbiAqIGBgYFxuXG4gKiBVc2FnZSAtIG9iamVjdFRyYW5zZm9ybTpcbiAqIGBgYFxuICogdmFyIHVuc3Vic2NyaWJlID0gZHNjYy5zdWJzY3JpYmVUb0RhdGEoZnVuY3Rpb24obWVzc2FnZSkge1xuICogICBjb25zb2xlLmxvZyhtZXNzYWdlLnRhYmxlcylcbiAqICAgY29uc29sZS5sb2cobWVzc2FnZS5maWVsZHMpXG4gKiAgIGNvbnNvbGUubG9nKG1lc3NhZ2Uuc3R5bGUpXG4gKiB9LCB7dHJhbnNmb3JtOiBkc2NjLm9iamVjdFRyYW5zZm9ybX0pO1xuICpcbiAqIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gKiAgIHVuc3Vic2NyaWJlKCk7XG4gKiB9LCAzMDAwKVxuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVUb0RhdGEgPSA8VD4oXG4gIGNiOiAoY29tcG9uZW50RGF0YTogVCkgPT4gdm9pZCxcbiAgb3B0aW9uczogU3Vic2NyaXB0aW9uc09wdGlvbnM8VD5cbik6ICgoKSA9PiB2b2lkKSA9PiB7XG4gIGlmIChpc1ZhbGlkVHJhbnNmb3JtKG9wdGlvbnMudHJhbnNmb3JtKSkge1xuICAgIGNvbnN0IG9uTWVzc2FnZSA9IChtZXNzYWdlOiBQb3N0TWVzc2FnZSkgPT4ge1xuICAgICAgaWYgKG1lc3NhZ2UuZGF0YS50eXBlID09PSBNZXNzYWdlVHlwZS5SRU5ERVIpIHtcbiAgICAgICAgY2Iob3B0aW9ucy50cmFuc2Zvcm0obWVzc2FnZS5kYXRhKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIGBNZXNzYWdlVHlwZTogJHttZXNzYWdlLmRhdGEudHlwZX0gaXMgbm90IHN1cHBvcnRlZCBieSB0aGlzIHZlcnNpb24gb2YgdGhlIGxpYnJhcnkuYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpO1xuICAgIGNvbnN0IGNvbXBvbmVudElkID0gZ2V0Q29tcG9uZW50SWQoKTtcbiAgICAvLyBUZWxsIERhdGFTdHVkaW8gdGhhdCB0aGUgdml6IGlzIHJlYWR5IHRvIGdldCBldmVudHMuXG4gICAgY29uc3Qgdml6UmVhZHlNZXNzYWdlOiBWaXpSZWFkeU1lc3NhZ2UgPSB7XG4gICAgICBjb21wb25lbnRJZCxcbiAgICAgIHR5cGU6IFRvRFNNZXNzYWdlVHlwZS5WSVpfUkVBRFksXG4gICAgfTtcbiAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHZpelJlYWR5TWVzc2FnZSwgJyonKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihgT25seSB0aGUgYnVpbHQgaW4gdHJhbnNmb3JtIGZ1bmN0aW9ucyBhcmUgc3VwcG9ydGVkLmApO1xuICB9XG59O1xuXG4vKlxuICogRG9lcyB0aGUgdGhpbmcgdGhhdCBpbnRlcmFjdGlvbnMgc2hvdWxkIGRvLlxuICovXG5leHBvcnQgY29uc3Qgc2VuZEludGVyYWN0aW9uOiBTZW5kSW50ZXJhY3Rpb24gPSAoXG4gIGFjdGlvbklkLFxuICBpbnRlcmFjdGlvbixcbiAgZGF0YVxuKSA9PiB7XG4gIGNvbnN0IGNvbXBvbmVudElkID0gZ2V0Q29tcG9uZW50SWQoKTtcbiAgY29uc3QgaW50ZXJhY3Rpb25NZXNzYWdlOiBJbnRlcmFjdGlvbk1lc3NhZ2UgPSB7XG4gICAgdHlwZTogVG9EU01lc3NhZ2VUeXBlLklOVEVSQUNUSU9OLFxuICAgIGlkOiBhY3Rpb25JZCxcbiAgICBkYXRhLFxuICAgIGNvbXBvbmVudElkLFxuICB9O1xuICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKGludGVyYWN0aW9uTWVzc2FnZSwgJyonKTtcbn07XG5cbi8qXG4gKiBDbGVhcnMgYW4gaW50ZXJhY3Rpb25cbiAqL1xuXG5leHBvcnQgY29uc3QgY2xlYXJJbnRlcmFjdGlvbjogQ2xlYXJJbnRlcmFjdGlvbiA9IChhY3Rpb25JZCwgaW50ZXJhY3Rpb24pID0+IHtcbiAgc2VuZEludGVyYWN0aW9uKGFjdGlvbklkLCBpbnRlcmFjdGlvbiwgdW5kZWZpbmVkKTtcbn07XG4iLCIvKiFcbiAgQGxpY2Vuc2VcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQge2NsZWFySW50ZXJhY3Rpb259IGZyb20gJy4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvc3RNZXNzYWdlIGV4dGVuZHMgTWVzc2FnZUV2ZW50IHtcbiAgZGF0YTogTWVzc2FnZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlIHtcbiAgLyoqXG4gICAqIFRoZSBtZXNzYWdlIHR5cGUuXG4gICAqL1xuICB0eXBlOiBNZXNzYWdlVHlwZTtcbiAgLyoqXG4gICAqIFRoZSBjb25maWd1cmF0aW9uIHN0YXRlIG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjb25maWc6IENvbmZpZztcbiAgLyoqXG4gICAqIEEgbGlzdCBvZiBhbGwgdXNlciBzZWxlY3RlZCBmaWVsZHMuXG4gICAqL1xuICBmaWVsZHM6IEZpZWxkW107XG4gIC8qKlxuICAgKiBUaGUgZGF0YSBjb3JyZXNwb25kaW5nIHRvIHRoZSBkYXRhIGNvbmZpZyBzdGF0ZSBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgZGF0YVJlc3BvbnNlOiBEYXRhUmVzcG9uc2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnIHtcbiAgLyoqXG4gICAqIFRoZSBkYXRhIGNvbmZpZyBkZWZpbmVkIGZvciB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgZGF0YTogQ29uZmlnRGF0YVtdO1xuICAvKipcbiAgICogVGhlIHN0eWxlIGVsZW1lbnRzIHJlcXVpcmVkIGFuZCBzdXBwb3J0ZWQgYnkgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIHN0eWxlOiBDb25maWdTdHlsZVtdO1xuICB0aGVtZVN0eWxlPzogQ29uZmlnVGhlbWVTdHlsZTtcbiAgaW50ZXJhY3Rpb25zOiBEU0ludGVyYWN0aW9uRGF0YVtdO1xuICBjb2xvck1hcD86IERTQ29sb3JNYXA7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmllbGQge1xuICAvKipcbiAgICogVGhlIElEIG9mIHRoZSBmaWVsZC5cbiAgICovXG4gIGlkOiBGaWVsZElkO1xuICAvKipcbiAgICogVGhlIHVzZXItZnJpZW5kbHkgbmFtZSBvZiB0aGUgZmllbGQuXG4gICAqL1xuICBuYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgdXNlci1mcmllbmRseSBkZXNjcmlwdGlvbiBvZiB0aGUgZmllbGQuXG4gICAqL1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBmaWVsZCB0eXBlLlxuICAgKi9cbiAgdHlwZTogRmllbGRUeXBlO1xuICAvKipcbiAgICogVGhlIGZpZWxkIGNvbmNlcHQuXG4gICAqL1xuICBjb25jZXB0OiBDb25jZXB0VHlwZTtcbn1cblxuZXhwb3J0IGVudW0gQ29uY2VwdFR5cGUge1xuICBNRVRSSUMgPSAnTUVUUklDJyxcbiAgRElNRU5TSU9OID0gJ0RJTUVOU0lPTicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRFNEYXRlUmFuZ2Uge1xuICBpZDogRGF0ZVJhbmdlVHlwZTtcbiAgc3RhcnQ6IHN0cmluZztcbiAgZW5kOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRFNDb2xvck1hcCB7XG4gIFtkaW1lbnNpb246IHN0cmluZ106IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhUmVzcG9uc2Uge1xuICAvKipcbiAgICogVGhlIGxpc3Qgb2YgdGFibGVzIGZvciB0aGUgY3VycmVudCBkYXRhIGNvbmZpZ3VyYXRpb24uXG4gICAqL1xuICB0YWJsZXM6IFRhYmxlW107XG4gIGRhdGVSYW5nZXM/OiBEU0RhdGVSYW5nZVtdO1xufVxuXG5leHBvcnQgZW51bSBNZXNzYWdlVHlwZSB7XG4gIFJFTkRFUiA9ICdSRU5ERVInLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0RhdGEge1xuICAvKipcbiAgICogVGhlIElEIG9mIHRoZSBkYXRhIHNlY3Rpb24uXG4gICAqXG4gICAqIFRoaXMgc2hvdWxkIGJlIGEgbm9uLWVtcHR5IHN0cmluZyB3aXRoIG5vIHNwYWNlcy5cbiAgICovXG4gIGlkOiBDb25maWdEYXRhSWQ7XG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgZm9yIHRoZSBkYXRhIHNlY3Rpb24uXG4gICAqL1xuICBsYWJlbDogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGRhdGEgZWxlbWVudHMgdG8gcmVuZGVyLlxuICAgKi9cbiAgZWxlbWVudHM6IENvbmZpZ0RhdGFFbGVtZW50W107XG59XG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1N0eWxlIHtcbiAgLyoqXG4gICAqIFRoZSBJRCBvZiB0aGUgc3R5bGUgc2VjdGlvbi5cbiAgICovXG4gIGlkOiBDb25maWdTdHlsZUlkO1xuICAvKipcbiAgICogVGhlIGhlYWRpbmcgZm9yIHRoZSBzdHlsZSBzZWN0aW9uLlxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBzdHlsZSBlbGVtZW50cyB0byByZW5kZXIuXG4gICAqL1xuICBlbGVtZW50czogQ29uZmlnU3R5bGVFbGVtZW50W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnVGhlbWVTdHlsZSB7XG4gIHRoZW1lRmlsbENvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgIHRoZW1lUmVmPzogVGhlbWVSZWZJbmRleDtcbiAgfTtcbiAgdGhlbWVGb250Q29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gICAgdGhlbWVSZWY/OiBUaGVtZVJlZkluZGV4O1xuICB9O1xuICB0aGVtZUFjY2VudEZpbGxDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICB0aGVtZVJlZj86IFRoZW1lUmVmSW5kZXg7XG4gIH07XG4gIHRoZW1lQWNjZW50Rm9udENvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgIHRoZW1lUmVmPzogVGhlbWVSZWZJbmRleDtcbiAgfTtcbiAgdGhlbWVGb250RmFtaWx5OiBzdHJpbmc7XG4gIHRoZW1lQWNjZW50Rm9udEZhbWlseTogc3RyaW5nO1xuICB0aGVtZUluY3JlYXNlQ29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gIH07XG4gIHRoZW1lRGVjcmVhc2VDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgfTtcbiAgdGhlbWVHcmlkQ29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gIH07XG4gIHRoZW1lU2VyaWVzQ29sb3I6IEFycmF5PHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gICAgdGhlbWVSZWY/OiBUaGVtZVJlZkluZGV4O1xuICAgIHNlcmllc1JlZjogU2VyaWVzUmVmSW5kZXg7XG4gIH0+O1xufVxuXG5pbnRlcmZhY2UgVGhlbWVSZWZJbmRleCB7XG4gIGluZGV4OiBudW1iZXI7XG59XG5pbnRlcmZhY2UgU2VyaWVzUmVmSW5kZXgge1xuICBpbmRleDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRoZW1lU3R5bGUge1xuICB0aGVtZUZpbGxDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICB0aGVtZVJlZj86IFRoZW1lUmVmSW5kZXg7XG4gIH07XG4gIHRoZW1lRm9udENvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgIHRoZW1lUmVmPzogVGhlbWVSZWZJbmRleDtcbiAgfTtcbiAgdGhlbWVBY2NlbnRGaWxsQ29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gICAgdGhlbWVSZWY/OiBUaGVtZVJlZkluZGV4O1xuICB9O1xuICB0aGVtZUFjY2VudEZvbnRDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICB0aGVtZVJlZj86IFRoZW1lUmVmSW5kZXg7XG4gIH07XG4gIHRoZW1lRm9udEZhbWlseTogc3RyaW5nO1xuICB0aGVtZUFjY2VudEZvbnRGYW1pbHk6IHN0cmluZztcbiAgdGhlbWVJbmNyZWFzZUNvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICB9O1xuICB0aGVtZURlY3JlYXNlQ29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gIH07XG4gIHRoZW1lR3JpZENvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICB9O1xuICB0aGVtZVNlcmllc0NvbG9yOiBBcnJheTx7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgIHRoZW1lUmVmPzogVGhlbWVSZWZJbmRleDtcbiAgICBzZXJpZXNSZWY6IFNlcmllc1JlZkluZGV4O1xuICB9Pjtcbn1cblxuZXhwb3J0IGVudW0gRmllbGRUeXBlIHtcbiAgWUVBUiA9ICdZRUFSJyxcbiAgWUVBUl9RVUFSVEVSID0gJ1lFQVJfUVVBUlRFUicsXG4gIFlFQVJfTU9OVEggPSAnWUVBUl9NT05USCcsXG4gIFlFQVJfV0VFSyA9ICdZRUFSX1dFRUsnLFxuICBZRUFSX01PTlRIX0RBWSA9ICdZRUFSX01PTlRIX0RBWScsXG4gIFlFQVJfTU9OVEhfREFZX0hPVVIgPSAnWUVBUl9NT05USF9EQVlfSE9VUicsXG4gIFFVQVJURVIgPSAnUVVBUlRFUicsXG4gIE1PTlRIID0gJ01PTlRIJyxcbiAgV0VFSyA9ICdXRUVLJyxcbiAgTU9OVEhfREFZID0gJ01PTlRIX0RBWScsXG4gIERBWV9PRl9XRUVLID0gJ0RBWV9PRl9XRUVLJyxcbiAgREFZID0gJ0RBWScsXG4gIEhPVVIgPSAnSE9VUicsXG4gIE1JTlVURSA9ICdNSU5VVEUnLFxuICBEVVJBVElPTiA9ICdEVVJBVElPTicsXG4gIENPVU5UUlkgPSAnQ09VTlRSWScsXG4gIENPVU5UUllfQ09ERSA9ICdDT1VOVFJZX0NPREUnLFxuICBDT05USU5FTlQgPSAnQ09OVElORU5UJyxcbiAgQ09OVElORU5UX0NPREUgPSAnQ09OVElORU5UX0NPREUnLFxuICBTVUJfQ09OVElORU5UID0gJ1NVQl9DT05USU5FTlQnLFxuICBTVUJfQ09OVElORU5UX0NPREUgPSAnU1VCX0NPTlRJTkVOVF9DT0RFJyxcbiAgUkVHSU9OID0gJ1JFR0lPTicsXG4gIFJFR0lPTl9DT0RFID0gJ1JFR0lPTl9DT0RFJyxcbiAgQ0lUWSA9ICdDSVRZJyxcbiAgQ0lUWV9DT0RFID0gJ0NJVFlfQ09ERScsXG4gIE1FVFJPX0NPREUgPSAnTUVUUk9fQ09ERScsXG4gIExBVElUVURFX0xPTkdJVFVERSA9ICdMQVRJVFVERV9MT05HSVRVREUnLFxuICBOVU1CRVIgPSAnTlVNQkVSJyxcbiAgUEVSQ0VOVCA9ICdQRVJDRU5UJyxcbiAgVEVYVCA9ICdURVhUJyxcbiAgQk9PTEVBTiA9ICdCT09MRUFOJyxcbiAgVVJMID0gJ1VSTCcsXG4gIElNQUdFID0gJ0lNQUdFJyxcbiAgQ1VSUkVOQ1lfQUVEID0gJ0NVUlJFTkNZX0FFRCcsXG4gIENVUlJFTkNZX0FMTCA9ICdDVVJSRU5DWV9BTEwnLFxuICBDVVJSRU5DWV9BUlMgPSAnQ1VSUkVOQ1lfQVJTJyxcbiAgQ1VSUkVOQ1lfQVVEID0gJ0NVUlJFTkNZX0FVRCcsXG4gIENVUlJFTkNZX0JEVCA9ICdDVVJSRU5DWV9CRFQnLFxuICBDVVJSRU5DWV9CR04gPSAnQ1VSUkVOQ1lfQkdOJyxcbiAgQ1VSUkVOQ1lfQk9CID0gJ0NVUlJFTkNZX0JPQicsXG4gIENVUlJFTkNZX0JSTCA9ICdDVVJSRU5DWV9CUkwnLFxuICBDVVJSRU5DWV9DQUQgPSAnQ1VSUkVOQ1lfQ0FEJyxcbiAgQ1VSUkVOQ1lfQ0RGID0gJ0NVUlJFTkNZX0NERicsXG4gIENVUlJFTkNZX0NIRiA9ICdDVVJSRU5DWV9DSEYnLFxuICBDVVJSRU5DWV9DTFAgPSAnQ1VSUkVOQ1lfQ0xQJyxcbiAgQ1VSUkVOQ1lfQ05ZID0gJ0NVUlJFTkNZX0NOWScsXG4gIENVUlJFTkNZX0NPUCA9ICdDVVJSRU5DWV9DT1AnLFxuICBDVVJSRU5DWV9DUkMgPSAnQ1VSUkVOQ1lfQ1JDJyxcbiAgQ1VSUkVOQ1lfQ1pLID0gJ0NVUlJFTkNZX0NaSycsXG4gIENVUlJFTkNZX0RLSyA9ICdDVVJSRU5DWV9ES0snLFxuICBDVVJSRU5DWV9ET1AgPSAnQ1VSUkVOQ1lfRE9QJyxcbiAgQ1VSUkVOQ1lfRUdQID0gJ0NVUlJFTkNZX0VHUCcsXG4gIENVUlJFTkNZX0VUQiA9ICdDVVJSRU5DWV9FVEInLFxuICBDVVJSRU5DWV9FVVIgPSAnQ1VSUkVOQ1lfRVVSJyxcbiAgQ1VSUkVOQ1lfR0JQID0gJ0NVUlJFTkNZX0dCUCcsXG4gIENVUlJFTkNZX0hLRCA9ICdDVVJSRU5DWV9IS0QnLFxuICBDVVJSRU5DWV9IUksgPSAnQ1VSUkVOQ1lfSFJLJyxcbiAgQ1VSUkVOQ1lfSFVGID0gJ0NVUlJFTkNZX0hVRicsXG4gIENVUlJFTkNZX0lEUiA9ICdDVVJSRU5DWV9JRFInLFxuICBDVVJSRU5DWV9JTFMgPSAnQ1VSUkVOQ1lfSUxTJyxcbiAgQ1VSUkVOQ1lfSU5SID0gJ0NVUlJFTkNZX0lOUicsXG4gIENVUlJFTkNZX0lSUiA9ICdDVVJSRU5DWV9JUlInLFxuICBDVVJSRU5DWV9JU0sgPSAnQ1VSUkVOQ1lfSVNLJyxcbiAgQ1VSUkVOQ1lfSk1EID0gJ0NVUlJFTkNZX0pNRCcsXG4gIENVUlJFTkNZX0pQWSA9ICdDVVJSRU5DWV9KUFknLFxuICBDVVJSRU5DWV9LUlcgPSAnQ1VSUkVOQ1lfS1JXJyxcbiAgQ1VSUkVOQ1lfTEtSID0gJ0NVUlJFTkNZX0xLUicsXG4gIENVUlJFTkNZX0xUTCA9ICdDVVJSRU5DWV9MVEwnLFxuICBDVVJSRU5DWV9NTlQgPSAnQ1VSUkVOQ1lfTU5UJyxcbiAgQ1VSUkVOQ1lfTVZSID0gJ0NVUlJFTkNZX01WUicsXG4gIENVUlJFTkNZX01YTiA9ICdDVVJSRU5DWV9NWE4nLFxuICBDVVJSRU5DWV9NWVIgPSAnQ1VSUkVOQ1lfTVlSJyxcbiAgQ1VSUkVOQ1lfTk9LID0gJ0NVUlJFTkNZX05PSycsXG4gIENVUlJFTkNZX05aRCA9ICdDVVJSRU5DWV9OWkQnLFxuICBDVVJSRU5DWV9QQUIgPSAnQ1VSUkVOQ1lfUEFCJyxcbiAgQ1VSUkVOQ1lfUEVOID0gJ0NVUlJFTkNZX1BFTicsXG4gIENVUlJFTkNZX1BIUCA9ICdDVVJSRU5DWV9QSFAnLFxuICBDVVJSRU5DWV9QS1IgPSAnQ1VSUkVOQ1lfUEtSJyxcbiAgQ1VSUkVOQ1lfUExOID0gJ0NVUlJFTkNZX1BMTicsXG4gIENVUlJFTkNZX1JPTiA9ICdDVVJSRU5DWV9ST04nLFxuICBDVVJSRU5DWV9SU0QgPSAnQ1VSUkVOQ1lfUlNEJyxcbiAgQ1VSUkVOQ1lfUlVCID0gJ0NVUlJFTkNZX1JVQicsXG4gIENVUlJFTkNZX1NBUiA9ICdDVVJSRU5DWV9TQVInLFxuICBDVVJSRU5DWV9TRUsgPSAnQ1VSUkVOQ1lfU0VLJyxcbiAgQ1VSUkVOQ1lfU0dEID0gJ0NVUlJFTkNZX1NHRCcsXG4gIENVUlJFTkNZX1RIQiA9ICdDVVJSRU5DWV9USEInLFxuICBDVVJSRU5DWV9UUlkgPSAnQ1VSUkVOQ1lfVFJZJyxcbiAgQ1VSUkVOQ1lfVFdEID0gJ0NVUlJFTkNZX1RXRCcsXG4gIENVUlJFTkNZX1RaUyA9ICdDVVJSRU5DWV9UWlMnLFxuICBDVVJSRU5DWV9VQUggPSAnQ1VSUkVOQ1lfVUFIJyxcbiAgQ1VSUkVOQ1lfVVNEID0gJ0NVUlJFTkNZX1VTRCcsXG4gIENVUlJFTkNZX1VZVSA9ICdDVVJSRU5DWV9VWVUnLFxuICBDVVJSRU5DWV9WRUYgPSAnQ1VSUkVOQ1lfVkVGJyxcbiAgQ1VSUkVOQ1lfVk5EID0gJ0NVUlJFTkNZX1ZORCcsXG4gIENVUlJFTkNZX1lFUiA9ICdDVVJSRU5DWV9ZRVInLFxuICBDVVJSRU5DWV9aQVIgPSAnQ1VSUkVOQ1lfWkFSJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJsZSB7XG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiB0aGUgdGFibGUuXG4gICAqL1xuICBpZDogVGFibGVUeXBlO1xuICAvKipcbiAgICogVGhlIFtbRmllbGRJZF1dcyBvZiB0aGUgZmllbGRzIHNlbGVjdGVkIGJ5IHRoZSB1c2VyLlxuICAgKi9cbiAgZmllbGRzOiBGaWVsZElkW107XG4gIC8qKlxuICAgKiBUaGUgcm93cyBvZiBkYXRhIFZhbHVlcy5cbiAgICovXG4gIHJvd3M6IERTUm93W107XG59XG5cbi8qKlxuICogQSByb3cgb2YgdmFsdWVzLlxuICpcbiAqIFRoZSBvcmRlciBvZiB2YWx1ZXMgY29ycmVzcG9uZHMgdG8gdGhlIG9yZGVyIG9mIHRoZSBmaWVsZHMgb2YgYWxsIGRhdGEgZWxlbWVudCBmaWVsZCBvYmplY3RzLlxuICovXG5cbmV4cG9ydCB0eXBlIERTUm93ID0gRFNSb3dWYWx1ZVtdO1xuLyoqXG4gKiBBIHZhbHVlIGZvciBhbiBlbnRyeSBpbiBhIERTUm93LlxuICovXG5leHBvcnQgdHlwZSBEU1Jvd1ZhbHVlID0gc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbjtcblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdEYXRhRWxlbWVudE1ldHJpYyB7XG4gIC8qKlxuICAgKiBUaGUgZGF0YSBlbGVtZW50IHR5cGUgdG8gcmVuZGVyLlxuICAgKi9cbiAgdHlwZTogQ29uZmlnRGF0YUVsZW1lbnRUeXBlLk1FVFJJQztcbiAgLyoqXG4gICAqIFRoZSBJRCBvZiB0aGUgbWV0cmljLlxuICAgKlxuICAgKiBUaGlzIHNob3VsZCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcgd2l0aCBubyBzcGFjZXMuXG4gICAqL1xuICBpZDogQ29uZmlnRGF0YUVsZW1lbnRJZDtcbiAgLyoqXG4gICAqIFRoZSB0b29sdGlwIG9yIGxhYmVsIGZvciB0aGUgbWV0cmljLlxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBkYXRhIG9wdGlvbnMgZm9yIGEgTWV0cmljLlxuICAgKi9cbiAgb3B0aW9uczoge1xuICAgIC8qKlxuICAgICAqIFRoZSBtaW5pbXVtIG51bWJlciBvZiBtZXRyaWNzIHN1cHBvcnRlZC5cbiAgICAgKi9cbiAgICBtaW4/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIG1heGltdW0gbnVtYmVyIG9mIG1ldHJpY3Mgc3VwcG9ydGVkLlxuICAgICAqL1xuICAgIG1heD86IG51bWJlcjtcbiAgfTtcbiAgLyoqXG4gICAqIFRoZSBsaXN0IG9mIFtbRmllbGRJZF1dcyBzZWxlY3RlZCBieSB0aGUgdXNlci5cbiAgICovXG4gIHZhbHVlOiBGaWVsZElkW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnRGF0YUVsZW1lbnREaW1lbnNpb24ge1xuICAvKipcbiAgICogVGhlIGRhdGEgZWxlbWVudCB0eXBlIHRvIHJlbmRlci5cbiAgICovXG4gIHR5cGU6IENvbmZpZ0RhdGFFbGVtZW50VHlwZS5ESU1FTlNJT047XG4gIC8qKlxuICAgKiBUaGUgSUQgb2YgdGhlIGRpbWVuc2lvbi5cbiAgICpcbiAgICogVGhpcyBzaG91bGQgYmUgYSBub24tZW1wdHkgc3RyaW5nIHdpdGggbm8gc3BhY2VzLlxuICAgKi9cbiAgaWQ6IENvbmZpZ0RhdGFFbGVtZW50SWQ7XG4gIC8qKlxuICAgKiBUaGUgdG9vbHRpcCBvciBsYWJlbCBmb3IgdGhlIGRpbWVuc2lvbi5cbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZGF0YSBvcHRpb25zIGZvciBhIERpbWVuc2lvbi5cbiAgICovXG4gIG9wdGlvbnM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgbWluaW11bSBudW1iZXIgb2YgZGltZW5zaW9ucyBzdXBwb3J0ZWQuXG4gICAgICovXG4gICAgbWluPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBkaW1lbnNpb25zIHN1cHBvcnRlZC5cbiAgICAgKi9cbiAgICBtYXg/OiBudW1iZXI7XG4gICAgc3VwcG9ydGVkVHlwZXM/OiBBcnJheTwnVElNRScgfCAnR0VPJyB8ICdERUZBVUxUJz47XG4gIH07XG4gIC8qKlxuICAgKiBUaGUgbGlzdCBvZiBbW0ZpZWxkSWRdXXMgc2VsZWN0ZWQgYnkgdGhlIHVzZXIuXG4gICAqL1xuICB2YWx1ZTogRmllbGRJZFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0RhdGFFbGVtZW50TWF4UmVzdWx0cyB7XG4gIC8qKlxuICAgKiBUaGUgZGF0YSBlbGVtZW50IHR5cGUgdG8gcmVuZGVyLlxuICAgKi9cbiAgdHlwZTogQ29uZmlnRGF0YUVsZW1lbnRUeXBlLk1BWF9SRVNVTFRTO1xuICAvKipcbiAgICogVGhlIElEIG9mIHRoZSBtYXggcmVzdWx0cy5cbiAgICpcbiAgICogVGhpcyBzaG91bGQgYmUgYSBub24tZW1wdHkgc3RyaW5nIHdpdGggbm8gc3BhY2VzLlxuICAgKi9cbiAgaWQ6IENvbmZpZ0RhdGFFbGVtZW50SWQ7XG4gIC8qKlxuICAgKiBUaGUgdG9vbHRpcCBvciBsYWJlbCBmb3IgdGhlIG1heCByZXN1bHRzLlxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBkYXRhIG9wdGlvbnMgZm9yIGEgTWF4IFJlc3VsdHMuXG4gICAqL1xuICBvcHRpb25zOiB7XG4gICAgLyoqXG4gICAgICogVGhlIG1heGltdW0gbnVtYmVyIG9mIHJvd3MuXG4gICAgICovXG4gICAgbWF4OiBudW1iZXI7XG4gIH07XG59XG5cbmV4cG9ydCB0eXBlIENvbmZpZ0RhdGFFbGVtZW50ID1cbiAgfCBDb25maWdEYXRhRWxlbWVudE1heFJlc3VsdHNcbiAgfCBDb25maWdEYXRhRWxlbWVudE1ldHJpY1xuICB8IENvbmZpZ0RhdGFFbGVtZW50RGltZW5zaW9uO1xuXG4vLyBUT0RPOiB0aGlzIHNob3VsZCBldmVudHVhbGx5IGFsd2F5cyBiZSBhIHZhbHVlXG5leHBvcnQgdHlwZSBDb25maWdTdHlsZVZhbHVlID0gc3RyaW5nIHwge30gfCBib29sZWFuIHwge2NvbG9yOiBzdHJpbmd9O1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1N0eWxlRWxlbWVudCB7XG4gIC8qKlxuICAgKiBUaGUgc3R5bGUgZWxlbWVudCB0eXBlIHRvIHJlbmRlci5cbiAgICovXG4gIHR5cGU6IENvbmZpZ1N0eWxlRWxlbWVudFR5cGU7XG4gIC8qKlxuICAgKiBUaGUgSUQgb2YgdGhlIHN0eWxlIGVsZW1lbnQuXG4gICAqXG4gICAqIFRoaXMgc2hvdWxkIGJlIGEgbm9uLWVtcHR5IHN0cmluZyB3aXRoIG5vIHNwYWNlcy5cbiAgICovXG4gIGlkOiBDb25maWdTdHlsZUVsZW1lbnRJZDtcbiAgLyoqXG4gICAqIFRoZSB0b29sdGlwIG9yIGxhYmVsIGZvciB0aGUgc3R5bGUgZWxlbWVudC5cbiAgICpcbiAgICogVGhpcyBpcyB0aGUgbGFiZWwgdGV4dCBmb3IgYSBgQ0hFQ0tCT1hgIGVsZW1lbnQgYW5kIHRoZSB0b29sdGlwIHRleHQgZm9yIG90aGVyIGVsZW1lbnRzLlxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IHZhbHVlIGZvciB0aGUgc3R5bGUgZWxlbWVudC5cbiAgICpcbiAgICogSW52YWxpZCB2YWx1ZXMgd2lsbCBiZSBpZ25vcmVkLlxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBDb25maWdTdHlsZVZhbHVlO1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIHN0eWxlIGVsZW1lbnQuXG4gICAqL1xuICB2YWx1ZTogQ29uZmlnU3R5bGVWYWx1ZTtcbn1cbmV4cG9ydCBlbnVtIFRhYmxlVHlwZSB7XG4gIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gIENPTVBBUklTT04gPSAnQ09NUEFSSVNPTicsXG4gIFNVTU1BUlkgPSAnU1VNTUFSWScsXG59XG5cbmV4cG9ydCBlbnVtIERhdGVSYW5nZVR5cGUge1xuICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICBDT01QQVJJU09OID0gJ0NPTVBBUklTT04nLFxufVxuXG5leHBvcnQgZW51bSBDb25maWdEYXRhRWxlbWVudFR5cGUge1xuICAvKipcbiAgICogUmVuZGVycyBhIG1ldHJpYyBmaWVsZCBlbGVtZW50LlxuICAgKi9cbiAgTUVUUklDID0gJ01FVFJJQycsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgZGltZW5zaW9uIGZpZWxkIGVsZW1lbnQuXG4gICAqL1xuICBESU1FTlNJT04gPSAnRElNRU5TSU9OJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSBkcm9wZG93biB0aGF0IGFmZmVjdHMgdGhlIG1heGltdW0gbnVtYmVyIG9mIHJlc3VsdHMgcmV0dXJuZWQuXG4gICAqL1xuICBNQVhfUkVTVUxUUyA9ICdNQVhfUkVTVUxUUycsXG59XG5cbmV4cG9ydCBlbnVtIENvbmZpZ1N0eWxlRWxlbWVudFR5cGUge1xuICAvKipcbiAgICogUmVuZGVycyBhIHRleHQgaW5wdXQgYm94LlxuICAgKi9cbiAgVEVYVElOUFVUID0gJ1RFWFRJTlBVVCcsXG4gIC8qKlxuICAgKiBBIHNpbmdsZSBzZWxlY3QgZHJvcGRvd24uXG4gICAqL1xuICBTRUxFQ1RfU0lOR0xFID0gJ1NFTEVDVF9TSU5HTEUnLFxuICAvKipcbiAgICogUmVuZGVycyBhIGNoZWNrYm94LlxuICAgKlxuICAgKiBEZWZhdWx0IHZhbHVlOiBgZmFsc2VgXG4gICAqL1xuICBDSEVDS0JPWCA9ICdDSEVDS0JPWCcsXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBmb250IGNvbG9yIHNlbGVjdG9yLlxuICAgKlxuICAgKiBBY2NlcHRhYmxlIGRlZmF1bHQgdmFsdWVzOiBIRVggY29sb3IgdmFsdWUuIEUuZy4gYFwiIzg4ODg4OFwiYC5cbiAgICpcbiAgICogRGVmYXVsdCB2YWx1ZTogYFwiIzAwMFwiYC5cbiAgICovXG4gIEZPTlRfQ09MT1IgPSAnRk9OVF9DT0xPUicsXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBmb250IHNpemUgc2VsZWN0b3IuXG4gICAqXG4gICAqIERlZmF1bHQgdmFsdWU6IGBcIjE0cHhcImAuXG4gICAqL1xuICBGT05UX1NJWkUgPSAnRk9OVF9TSVpFJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGZvbnQgZmFtaWx5IHNlbGVjdG9yLlxuICAgKlxuICAgKiBEZWZhdWx0IHZhbHVlOiBgXCJcImBcbiAgICovXG4gIEZPTlRfRkFNSUxZID0gJ0ZPTlRfRkFNSUxZJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSBmaWxsIGNvbG9yIHNlbGVjdG9yLlxuICAgKlxuICAgKiBBY2NlcHRhYmxlIGRlZmF1bHQgdmFsdWVzOiBIRVggY29sb3IgdmFsdWUuXG4gICAqL1xuICBGSUxMX0NPTE9SID0gJ0ZJTExfQ09MT1InLFxuICAvKipcbiAgICogUmVuZGVycyBhIGJvcmRlciBjb2xvciBzZWxlY3Rvci5cbiAgICpcbiAgICogQWNjZXB0YWJsZSBkZWZhdWx0IHZhbHVlczogSEVYIGNvbG9yIHZhbHVlLlxuICAgKi9cbiAgQk9SREVSX0NPTE9SID0gJ0JPUkRFUl9DT0xPUicsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGFuIGF4aXMgY29sb3Igc2VsZWN0b3IuXG4gICAqXG4gICAqIEFjY2VwdGFibGUgZGVmYXVsdCB2YWx1ZXM6IEhFWCBjb2xvciB2YWx1ZS5cbiAgICovXG4gIEFYSVNfQ09MT1IgPSAnQVhJU19DT0xPUicsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgZ3JpZCBjb2xvciBzZWxlY3Rvci5cbiAgICpcbiAgICogQWNjZXB0YWJsZSBkZWZhdWx0IHZhbHVlczogSEVYIGNvbG9yIHZhbHVlLlxuICAgKi9cbiAgR1JJRF9DT0xPUiA9ICdHUklEX0NPTE9SJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYW4gb3BhY2l0eSBzZWxlY3Rvci5cbiAgICovXG4gIE9QQUNJVFkgPSAnT1BBQ0lUWScsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgbGluZSB3ZWlnaHQgcGlja2VyLlxuICAgKi9cbiAgTElORV9XRUlHSFQgPSAnTElORV9XRUlHSFQnLFxuICAvKipcbiAgICogUmVuZGVycyBhIGxpbmUgc3R5bGUgcGlja2VyLlxuICAgKlxuICAgKiBBY2NlcHRhYmxlIGRlZmF1bHQgdmFsdWVzOiBgXCJzb2xpZFwiYCwgYFwiZGFzaGVkXCJgLCBgXCJkb3R0ZWRcImAsIG9yIGBcImRvdWJsZVwiYC5cbiAgICovXG4gIExJTkVfU1RZTEUgPSAnTElORV9TVFlMRScsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgYm9yZGVyIHJhZGl1cyBzZWxlY3Rvci5cbiAgICovXG4gIEJPUkRFUl9SQURJVVMgPSAnQk9SREVSX1JBRElVUycsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGFuIGludGVydmFsIHNlbGVjdG9yLlxuICAgKi9cbiAgSU5URVJWQUwgPSAnSU5URVJWQUwnLFxuICAvKipcbiAgICogUmVuZGVycyBhIHJhZGlvIHNlbGVjdCB3aXRoIHByZS1kZWZpbmVkIHZhbHVlcy5cbiAgICovXG4gIFNFTEVDVF9SQURJTyA9ICdTRUxFQ1RfUkFESU8nLFxufVxuXG5leHBvcnQgdHlwZSBEU0ludGVyYWN0aW9uRGF0YSA9IERTSW50ZXJhY3Rpb25GaWx0ZXJEYXRhO1xuXG5leHBvcnQgaW50ZXJmYWNlIERTSW50ZXJhY3Rpb25GaWx0ZXJEYXRhIHtcbiAgc3VwcG9ydGVkQWN0aW9uczogRFNJbnRlcmFjdGlvblR5cGVbXTtcbiAgaWQ6IEludGVyYWN0aW9uSWQ7XG4gIHZhbHVlOiBEU0ludGVyYWN0aW9uRmlsdGVyVmFsdWU7XG59XG5cbmV4cG9ydCBlbnVtIERTSW50ZXJhY3Rpb25UeXBlIHtcbiAgRklMVEVSID0gJ0ZJTFRFUicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRFNJbnRlcmFjdGlvbkZpbHRlclZhbHVlIHtcbiAgdHlwZTogRFNJbnRlcmFjdGlvblR5cGU7XG4gIGRhdGE6IEludGVyYWN0aW9uRGF0YTtcbn1cblxuLy8gQWxpYXNlc1xuZXhwb3J0IHR5cGUgRmllbGRJZCA9IHN0cmluZztcbmV4cG9ydCB0eXBlIENvbmZpZ0RhdGFJZCA9IHN0cmluZztcbmV4cG9ydCB0eXBlIENvbmZpZ1N0eWxlSWQgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBDb25maWdEYXRhRWxlbWVudElkID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgQ29uZmlnU3R5bGVFbGVtZW50SWQgPSBzdHJpbmc7XG5cbi8vIEN1c3RvbSB0eXBlcyBmb3IgTGlicmFyeVxuZXhwb3J0IGludGVyZmFjZSBQYXJzZWRJbWFnZSB7XG4gIG9yaWdpbmFsVXJsOiBzdHJpbmc7XG4gIHByb3hpZWRVcmw/OiBzdHJpbmc7XG4gIGFsdFRleHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmllbGRzQnlJZCB7XG4gIC8vIEFuIGluZGV4ZWQgVHlwZSBjYW5ub3QgYmUgYSB0eXBlIGFsaWFzIDooXG4gIFtmaWVsZElkOiBzdHJpbmddOiBGaWVsZDtcbn1cblxuZXhwb3J0IHR5cGUgUGFyc2VkUm93ID0gUGFyc2VkUm93VmFsdWVbXTtcblxuZXhwb3J0IGludGVyZmFjZSBSb3dCeUNvbmZpZ0lkIHtcbiAgW2NvbmZpZ0lkOiBzdHJpbmddOiBQYXJzZWRSb3c7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVzQnlUeXBlIHtcbiAgW1RhYmxlVHlwZS5ERUZBVUxUXTogUm93QnlDb25maWdJZFtdO1xuICBbVGFibGVUeXBlLkNPTVBBUklTT05dOiBSb3dCeUNvbmZpZ0lkW107XG4gIFtUYWJsZVR5cGUuU1VNTUFSWV06IFJvd0J5Q29uZmlnSWRbXTtcbn1cblxuZXhwb3J0IHR5cGUgUGFyc2VkUm93VmFsdWUgPSBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgUGFyc2VkSW1hZ2U7XG5cbmV4cG9ydCB0eXBlIFJvd0hlYWRpbmcgPSBGaWVsZCAmIHtjb25maWdJZDogc3RyaW5nfTtcbmV4cG9ydCB0eXBlIFJvd0VudHJ5ID0gc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbjtcbmV4cG9ydCB0eXBlIFJvdyA9IFJvd0VudHJ5W107XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmllbGRzQnlDb25maWdJZCB7XG4gIFtjb25maWdJZDogc3RyaW5nXTogRmllbGRbXTtcbn1cblxuZXhwb3J0IHR5cGUgU3R5bGVUaGVtZSA9IGFueTtcbmV4cG9ydCB0eXBlIFN0eWxlRW50cnkgPSBhbnk7XG5leHBvcnQgdHlwZSBTdHlsZVZhbHVlID0gU3R5bGVUaGVtZSB8IFN0eWxlRW50cnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVCeUlkIHtcbiAgW3N0eWxlSWQ6IHN0cmluZ106IFN0eWxlVmFsdWU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVEYXRhIHtcbiAgaGVhZGVyczogUm93SGVhZGluZ1tdO1xuICByb3dzOiBSb3dbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJsZXMge1xuICBbVGFibGVUeXBlLkRFRkFVTFRdOiBUYWJsZURhdGE7XG4gIFtUYWJsZVR5cGUuQ09NUEFSSVNPTl0/OiBUYWJsZURhdGE7XG4gIFtUYWJsZVR5cGUuU1VNTUFSWV0/OiBUYWJsZURhdGE7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVGb3JtYXQge1xuICBmaWVsZHM6IEZpZWxkc0J5Q29uZmlnSWQ7XG4gIHN0eWxlOiBTdHlsZUJ5SWQ7XG4gIHRhYmxlczogVGFibGVzO1xuICBkYXRlUmFuZ2VzOiBEYXRlUmFuZ2VzQnlJZDtcbiAgdGhlbWU6IFRoZW1lU3R5bGU7XG4gIGludGVyYWN0aW9uczogSW50ZXJhY3Rpb25zQnlJZDtcbiAgY29sb3JNYXA6IENvbG9yc0J5RGltZW5zaW9uO1xufVxuXG5leHBvcnQgdHlwZSBUYWJsZVRyYW5zZm9ybSA9IChtZXNzYWdlOiBNZXNzYWdlKSA9PiBUYWJsZUZvcm1hdDtcblxuZXhwb3J0IHR5cGUgQ29uZmlnSWQgPSBzdHJpbmc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Vic2NyaXB0aW9uc09wdGlvbnM8VD4ge1xuICB0cmFuc2Zvcm06IChtZXNzYWdlOiBNZXNzYWdlKSA9PiBUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9iamVjdFJvdyB7XG4gIFtjb25maWdJZDogc3RyaW5nXTogUm93RW50cnlbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RUYWJsZXMge1xuICBbVGFibGVUeXBlLkRFRkFVTFRdOiBPYmplY3RSb3dbXTtcbiAgW1RhYmxlVHlwZS5DT01QQVJJU09OXT86IE9iamVjdFJvd1tdO1xuICBbVGFibGVUeXBlLlNVTU1BUlldPzogT2JqZWN0Um93W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZVJhbmdlc0J5SWQge1xuICBbRGF0ZVJhbmdlVHlwZS5ERUZBVUxUXT86IHtcbiAgICBzdGFydDogc3RyaW5nO1xuICAgIGVuZDogc3RyaW5nO1xuICB9O1xuICBbRGF0ZVJhbmdlVHlwZS5DT01QQVJJU09OXT86IHtcbiAgICBzdGFydDogc3RyaW5nO1xuICAgIGVuZDogc3RyaW5nO1xuICB9O1xufVxuXG4vKiBBIG1hcCBvZiBkaW1lbnNpb24gdmFsdWVzIHRvIGhleCBzdHJpbmcgY29sb3JzICovXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yc0J5RGltZW5zaW9uIHtcbiAgW2RpbWVuc2lvbjogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9iamVjdEZvcm1hdCB7XG4gIGZpZWxkczogRmllbGRzQnlDb25maWdJZDtcbiAgc3R5bGU6IFN0eWxlQnlJZDtcbiAgdGFibGVzOiBPYmplY3RUYWJsZXM7XG4gIGRhdGVSYW5nZXM6IERhdGVSYW5nZXNCeUlkO1xuICB0aGVtZTogVGhlbWVTdHlsZTtcbiAgaW50ZXJhY3Rpb25zOiBJbnRlcmFjdGlvbnNCeUlkO1xuICBjb2xvck1hcDogQ29sb3JzQnlEaW1lbnNpb247XG59XG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudElkID0gc3RyaW5nO1xuXG5leHBvcnQgdHlwZSBPYmplY3RUcmFuc2Zvcm0gPSAobWVzc2FnZTogTWVzc2FnZSkgPT4gT2JqZWN0Rm9ybWF0O1xuXG5leHBvcnQgZW51bSBUb0RTTWVzc2FnZVR5cGUge1xuICBWSVpfUkVBRFkgPSAndml6UmVhZHknLFxuICBJTlRFUkFDVElPTiA9ICd2aXpBY3Rpb24nLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZpelJlYWR5TWVzc2FnZSB7XG4gIHR5cGU6IFRvRFNNZXNzYWdlVHlwZS5WSVpfUkVBRFk7XG4gIGNvbXBvbmVudElkOiBDb21wb25lbnRJZDtcbn1cblxuLy8gSW50ZXJhY3Rpb24gVHlwZXNcbmV4cG9ydCBpbnRlcmZhY2UgSW50ZXJhY3Rpb25NZXNzYWdlIHtcbiAgdHlwZTogVG9EU01lc3NhZ2VUeXBlLklOVEVSQUNUSU9OO1xuICBpZDogSW50ZXJhY3Rpb25JZDtcbiAgZGF0YTogSW50ZXJhY3Rpb25EYXRhIHwgdW5kZWZpbmVkO1xuICBjb21wb25lbnRJZDogQ29tcG9uZW50SWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VuZEludGVyYWN0aW9uIHtcbiAgLy8gVE9ETyAtIHJlbW92ZSB0aGlzIG9uY2UgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZSBpbnRlcmFjdGlvbiB0eXBlLlxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgY2FsbGFibGUtdHlwZXNcbiAgKFxuICAgIGFjdGlvbklkOiBJbnRlcmFjdGlvbklkLFxuICAgIGludGVyYWN0aW9uOiBJbnRlcmFjdGlvblR5cGUuRklMVEVSLFxuICAgIGRhdGE6IEZpbHRlckludGVyYWN0aW9uRGF0YSB8IHVuZGVmaW5lZFxuICApOiB2b2lkO1xuICAvLyBUT0RPIC0gV2hlbiB0aGVyZSBhcmUgbW9yZSBJbnRlcmFjdGlvbiB0eXBlcywgdGhlIG5ldyBvbmVzIHNob3VsZCBiZSBhZGRlZCBoZXJlIHdpdGggdGhlaXIgb3duIHNpZ25hdHVyZS5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckludGVyYWN0aW9uIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGNhbGxhYmxlLXR5cGVzXG4gIChcbiAgICBhY3Rpb25JZDogSW50ZXJhY3Rpb25JZCxcbiAgICBpbnRlcmFjdGlvbjogSW50ZXJhY3Rpb25UeXBlLkZJTFRFUixcbiAgICBkYXRhOiB1bmRlZmluZWRcbiAgKTogdm9pZDtcbn1cblxuZXhwb3J0IHR5cGUgQ29uY2VwdElkID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgRmlsdGVyUGFyYW1WYWx1ZSA9IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVySW50ZXJhY3Rpb25EYXRhIHtcbiAgY29uY2VwdHM6IENvbmNlcHRJZFtdO1xuICB2YWx1ZXM6IEZpbHRlclBhcmFtVmFsdWVbXVtdO1xufVxuXG5leHBvcnQgZW51bSBJbnRlcmFjdGlvblR5cGUge1xuICBGSUxURVIgPSAnRklMVEVSJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnRlcmFjdGlvblZhbHVlIHtcbiAgdHlwZTogSW50ZXJhY3Rpb25UeXBlO1xuICBkYXRhOiBJbnRlcmFjdGlvbkRhdGE7XG59XG5cbmV4cG9ydCB0eXBlIEludGVyYWN0aW9uRGF0YSA9IEZpbHRlckludGVyYWN0aW9uRGF0YTtcblxuZXhwb3J0IHR5cGUgSW50ZXJhY3Rpb25JZCA9IHN0cmluZztcblxuZXhwb3J0IGludGVyZmFjZSBJbnRlcmFjdGlvbiB7XG4gIHN1cHBvcnRlZEFjdGlvbnM6IEludGVyYWN0aW9uVHlwZVtdO1xuICB2YWx1ZTogSW50ZXJhY3Rpb25WYWx1ZSB8IHt9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEludGVyYWN0aW9uc0J5SWQge1xuICBbaW50ZXJhY3Rpb25JZDogc3RyaW5nXTogSW50ZXJhY3Rpb247XG59XG4iXSwic291cmNlUm9vdCI6IiJ9