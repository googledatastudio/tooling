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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kc2NjL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kc2NjL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RzY2MvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZHNjYy8uL3NyYy90eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7Ozs7Ozs7Ozs7OztFQWVFO0FBQ0YsbUVBeUNpQjtBQUVqQix1REFBdUQ7QUFDdkQsK0RBQXdCO0FBRXhCOzs7Ozs7OztHQVFHO0FBQ1UsZ0JBQVEsR0FBRyxjQUFjLGVBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUF6QixD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RUFGVyxlQUFlLEdBQWYsdUJBQWUsS0FBZix1QkFBZSxRQUUxQiIsImZpbGUiOiJkc2NjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJkc2NjXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRzY2NcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZHNjY1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvKiFcbiAgQGxpY2Vuc2VcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQge1xuICBDbGVhckludGVyYWN0aW9uLFxuICBDb25maWdEYXRhLFxuICBDb25maWdEYXRhRWxlbWVudCxcbiAgQ29uZmlnRGF0YUVsZW1lbnREaW1lbnNpb24sXG4gIENvbmZpZ0RhdGFFbGVtZW50TWV0cmljLFxuICBDb25maWdEYXRhRWxlbWVudFR5cGUsXG4gIENvbmZpZ0lkLFxuICBDb25maWdTdHlsZSxcbiAgQ29uZmlnU3R5bGVFbGVtZW50LFxuICBEU0ludGVyYWN0aW9uRGF0YSxcbiAgRFNJbnRlcmFjdGlvblR5cGUsXG4gIERTUm93VmFsdWUsXG4gIEZpZWxkLFxuICBGaWVsZElkLFxuICBGaWVsZHNCeUNvbmZpZ0lkLFxuICBGaWVsZHNCeUlkLFxuICBJbnRlcmFjdGlvbixcbiAgSW50ZXJhY3Rpb25NZXNzYWdlLFxuICBJbnRlcmFjdGlvbnNCeUlkLFxuICBJbnRlcmFjdGlvblR5cGUsXG4gIE1lc3NhZ2UsXG4gIE1lc3NhZ2VUeXBlLFxuICBPYmplY3RSb3csXG4gIE9iamVjdFRhYmxlcyxcbiAgT2JqZWN0VHJhbnNmb3JtLFxuICBQYXJzZWRJbWFnZSxcbiAgUG9zdE1lc3NhZ2UsXG4gIFJvdyxcbiAgUm93SGVhZGluZyxcbiAgU2VuZEludGVyYWN0aW9uLFxuICBTdHlsZUJ5SWQsXG4gIFN1YnNjcmlwdGlvbnNPcHRpb25zLFxuICBUYWJsZSxcbiAgVGFibGVGb3JtYXQsXG4gIFRhYmxlcyxcbiAgVGFibGVUcmFuc2Zvcm0sXG4gIFRhYmxlVHlwZSxcbiAgVGhlbWVTdHlsZSxcbiAgVG9EU01lc3NhZ2VUeXBlLFxuICBWaXpSZWFkeU1lc3NhZ2UsXG59IGZyb20gJy4vdHlwZXMnO1xuXG4vLyBNYWtlIGFsbCBleHBvcnRlZCB0eXBlcyBhdmFpbGFibGUgdG8gZXh0ZXJuYWwgdXNlcnMuXG5leHBvcnQgKiBmcm9tICcuL3R5cGVzJztcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB3aWR0aCAoaW4gcGl4ZWxzKSBvZiB0aGUgdmlzJ3MgaWZyYW1lLlxuICpcbiAqIFVzYWdlOlxuICogYGBgXG4gKiB2YXIgbXlXaWR0aCA9IGRzY2MuZ2V0V2lkdGgoKTtcbiAqIGNvbnNvbGUubG9nKCdNeSB3aWR0aCBpczogJywgbXlXaWR0aCk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFdpZHRoID0gKCk6IG51bWJlciA9PiBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGhlaWdodCAoaW4gcGl4ZWxzKSBvZiB0aGUgdmlzJ3MgaWZyYW1lLlxuICpcbiAqIFVzYWdlOlxuICogYGBgXG4gKiB2YXIgbXlIZWlnaHQgPSBkc2NjLmdldEhlaWdodCgpO1xuICogY29uc29sZS5sb2coJ015IGhlaWdodCBpczogJywgbXlIZWlnaHQpO1xuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRIZWlnaHQgPSAoKTogbnVtYmVyID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgY29tcG9uZW50SWQgb2YgdGhlIHZpcy4gQ29tcG9uZW50IGlkcyB1bmlxdWVseSBpZGVudGlmeSBhIHZpcyB0b1xuICogRGF0YSBTdHVkaW8uXG4gKlxuICogVXNhZ2U6XG4gKiBgYGBcbiAqIHZhciBteUNvbXBvbmVudElkID0gZHNjYy5nZXRDb21wb25lbnRJZCgpO1xuICogY29uc29sZS5sb2coJ015IGNvbXBvbmVudElkIGlzOiAnLCBteUNvbXBvbmVudElkKTtcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgZ2V0Q29tcG9uZW50SWQgPSAoKTogc3RyaW5nID0+IHtcbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgaWYgKHBhcmFtcy5nZXQoJ2RzY0lkJykgIT09IG51bGwpIHtcbiAgICByZXR1cm4gcGFyYW1zLmdldCgnZHNjSWQnKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnZHNjSWQgbXVzdCBiZSBpbiB0aGUgcXVlcnkgcGFyYW1ldGVycy4gJyArXG4gICAgICAgICdUaGlzIGlzIGEgYnVnIGluIGRzLWNvbXBvbmVudCwgcGxlYXNlIGZpbGUgYSBidWc6ICcgK1xuICAgICAgICAnaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZWRhdGFzdHVkaW8vZHMtY29tcG9uZW50L2lzc3Vlcy9uZXcnXG4gICAgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaWVsZHMgaW5kZXhlZCBieSB0aGVpciBEYXRhIFN0dWRpbyBpZC5cbiAqL1xuY29uc3QgZmllbGRzQnlJZCA9IChtZXNzYWdlOiBNZXNzYWdlKTogRmllbGRzQnlJZCA9PlxuICBtZXNzYWdlLmZpZWxkcy5yZWR1Y2UoKGFjYzogRmllbGRzQnlJZCwgZmllbGQ6IEZpZWxkKSA9PiB7XG4gICAgYWNjW2ZpZWxkLmlkXSA9IGZpZWxkO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcblxuLyoqXG4gKiBaaXBzIHR3byBhcnJheXMgdG9nZXRoZXIgaW50byBhIG5ldyBhcnJheS4gVXNlcyB0aGUgbGVuZ3RoIG9mIHRoZSBzaG9ydGVzdFxuICogYXJyYXkuXG4gKlxuICogVXNhZ2U6XG4gKiBgYGBcbiAqIGNvbnN0IGEgPSBbMSwgMiwgM107XG4gKiBjb25zdCBiID0gWydhJywgJ2InLCAnYycsICdkJ107XG4gKiBjb25zdCB6aXBwZWQgPSB6aXAyKGEsIGIpO1xuICogZXhwZWN0KHppcHBlZCkudG9FcXVhbChbWzEsICdhJ10sIFsyLCAnYiddLCBbMywgJ2MnXV0pO1xuICogYGBgXG4gKi9cbmNvbnN0IHppcDIgPSA8VCwgVT4odDogVFtdLCB1OiBVW10pOiBBcnJheTxbVCwgVV0+ID0+IHtcbiAgaWYgKHQubGVuZ3RoIDwgdS5sZW5ndGgpIHtcbiAgICByZXR1cm4gdC5tYXAoKHRFbnRyeTogVCwgaWR4OiBudW1iZXIpOiBbVCwgVV0gPT4gW3RFbnRyeSwgdVtpZHhdXSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHUubWFwKCh1RW50cnk6IFUsIGlkeDogbnVtYmVyKTogW1QsIFVdID0+IFt0W2lkeF0sIHVFbnRyeV0pO1xuICB9XG59O1xuXG4vLyBgLnNvcnRgIGlzbid0IHN0YWJsZSwgYnV0IGlmIHlvdSBjb21wYXJlIGl0ZW1zLCBhbmQgd2hlbiB0aGV5IGFyZSBlcXVhbCB1c2Vcbi8vIHRoZSBvcmlnaW5hbCBpbmRleCwgaXQgaXMgdGhlbiBzdGFibGUuXG5jb25zdCBzdGFibGVTb3J0ID0gPFQ+KGFycjogVFtdLCBjb21wYXJlOiAoYTogVCwgYjogVCkgPT4gbnVtYmVyKTogVFtdID0+XG4gIGFyclxuICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoe2l0ZW0sIGluZGV4fSkpXG4gICAgLnNvcnQoKGEsIGIpID0+IGNvbXBhcmUoYS5pdGVtLCBiLml0ZW0pIHx8IGEuaW5kZXggLSBiLmluZGV4KVxuICAgIC5tYXAoKHtpdGVtfSkgPT4gaXRlbSk7XG5cbmNvbnN0IGRpbWVuc2lvbk9yTWV0cmljID0gKGNkZTogQ29uZmlnRGF0YUVsZW1lbnQpOiBib29sZWFuID0+XG4gIGNkZS50eXBlID09PSBDb25maWdEYXRhRWxlbWVudFR5cGUuRElNRU5TSU9OIHx8XG4gIGNkZS50eXBlID09PSBDb25maWdEYXRhRWxlbWVudFR5cGUuTUVUUklDO1xuXG5jb25zdCB0b051bSA9IChjZGV0OiBDb25maWdEYXRhRWxlbWVudFR5cGUpID0+XG4gIGNkZXQgPT09IENvbmZpZ0RhdGFFbGVtZW50VHlwZS5ESU1FTlNJT04gPyAtMSA6IDE7XG5cbi8qKlxuICogRmxhdHRlbnMgdGhlIGNvbmZpZ0lkcyBmcm9tIGEgbWVzc2FnZSBpbnRvIGEgc2luZ2xlIGFycmF5LiBUaGUgY29uZmlnIElkc1xuICogd2lsbCBiZSByZXBlYXRlZCBmb3IgdGhlIGBNRVRSSUNgL2BESU1FTlNJT05gIHNlbGVjdGlvbnMuIGkuZS4gZm9yIGEgYE1FVFJJQ2BcbiAqIG5hbWVkIGBcIm1ldHJpY3NcImAgb2YgYHttaW46IDIsIG1heDozfWAsIHRoZSB2YWx1ZSBtZXRyaWNzIHdpbGwgYmUgcmVwZWF0ZWQgMlxuICogdG8gMyB0aW1lcyBkZXBlbmRpbmcgb24gd2hhdCB2YWx1ZXMgdGhlIHVzZXIgc2VsZWN0cy5cbiAqXG4gKiBOb3RlOiB0aGlzIGlzIHJlbHlpbmcgb24gdGhlIGZhY3QgdGhhdCB0aGUgcG9zdE1lc3NhZ2UgZnJvbSBEYXRhU3R1ZGlvIGhhc1xuICogdGhlIGZpZWxkcyBzb3J0ZWQgdG8gYmUgZGltZW5zaW9ucywgZm9sbG93ZWQgYnkgbWV0cmljcy5cbiAqL1xudHlwZSBDb25maWdEYXRhQ29uY2VwdCA9IENvbmZpZ0RhdGFFbGVtZW50TWV0cmljIHwgQ29uZmlnRGF0YUVsZW1lbnREaW1lbnNpb247XG5cbmNvbnN0IGZsYXR0ZW5Db25maWdJZHMgPSAobWVzc2FnZTogTWVzc2FnZSk6IENvbmZpZ0lkW10gPT4ge1xuICBjb25zdCBkaW1uc0FuZE1ldHM6IENvbmZpZ0RhdGFDb25jZXB0W10gPSBbXTtcbiAgbWVzc2FnZS5jb25maWcuZGF0YS5mb3JFYWNoKChjb25maWdEYXRhOiBDb25maWdEYXRhKSA9PiB7XG4gICAgY29uZmlnRGF0YS5lbGVtZW50c1xuICAgICAgLmZpbHRlcihkaW1lbnNpb25Pck1ldHJpYylcbiAgICAgIC5mb3JFYWNoKChjb25maWdEYXRhRWxlbWVudDogQ29uZmlnRGF0YUNvbmNlcHQpID0+IHtcbiAgICAgICAgZGltbnNBbmRNZXRzLnB1c2goY29uZmlnRGF0YUVsZW1lbnQpO1xuICAgICAgfSk7XG4gIH0pO1xuICBjb25zdCBzb3J0ZWQgPSBzdGFibGVTb3J0KFxuICAgIGRpbW5zQW5kTWV0cyxcbiAgICAoYSwgYikgPT4gdG9OdW0oYS50eXBlKSAtIHRvTnVtKGIudHlwZSlcbiAgKTtcbiAgY29uc3QgY29uZmlnSWRzOiBDb25maWdJZFtdID0gW107XG4gIHNvcnRlZC5mb3JFYWNoKChjb25maWdEYXRhRWxlbWVudCkgPT4ge1xuICAgIGNvbmZpZ0RhdGFFbGVtZW50LnZhbHVlLmZvckVhY2goKCkgPT4gY29uZmlnSWRzLnB1c2goY29uZmlnRGF0YUVsZW1lbnQuaWQpKTtcbiAgfSk7XG4gIHJldHVybiBjb25maWdJZHM7XG59O1xuXG4vKipcbiAqIEpvaW5zIGEgc2luZ2xlIHRhYmxlIHJvdyB3aXRoIHRoZSBtYXRjaGluZyBgQ29uZmlnSWRgXG4gKi9cbmNvbnN0IGpvaW5PYmplY3RSb3cgPSAoY29uZmlnSWRzOiBDb25maWdJZFtdKSA9PiAocm93OiBSb3cpOiBPYmplY3RSb3cgPT4ge1xuICBjb25zdCBvYmplY3RSb3c6IE9iamVjdFJvdyA9IHt9O1xuXG4gIHppcDIocm93LCBjb25maWdJZHMpLmZvckVhY2goKFtyb3dWYWwsIGNvbmZpZ0lkXTogW0RTUm93VmFsdWUsIENvbmZpZ0lkXSkgPT4ge1xuICAgIGlmIChvYmplY3RSb3dbY29uZmlnSWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9iamVjdFJvd1tjb25maWdJZF0gPSBbXTtcbiAgICB9XG4gICAgb2JqZWN0Um93W2NvbmZpZ0lkXS5wdXNoKHJvd1ZhbCk7XG4gIH0sIHt9KTtcblxuICByZXR1cm4gb2JqZWN0Um93O1xufTtcblxuLyoqXG4gKiBGb3JtYXRzIHRhYmxlcyBpbnRvIHRoZSBgT2JqZWN0VGFibGVzYCBmb3JtYXQuXG4gKi9cbmNvbnN0IG9iamVjdEZvcm1hdFRhYmxlID0gKG1lc3NhZ2U6IE1lc3NhZ2UpOiBPYmplY3RUYWJsZXMgPT4ge1xuICBjb25zdCBjb25maWdJZHMgPSBmbGF0dGVuQ29uZmlnSWRzKG1lc3NhZ2UpO1xuICBjb25zdCBvYmplY3RUYWJsZXM6IE9iamVjdFRhYmxlcyA9IHtbVGFibGVUeXBlLkRFRkFVTFRdOiBbXX07XG5cbiAgbWVzc2FnZS5kYXRhUmVzcG9uc2UudGFibGVzLmZvckVhY2goKHRhYmxlOiBUYWJsZSkgPT4ge1xuICAgIGNvbnN0IG9iamVjdFJvd3M6IE9iamVjdFJvd1tdID0gdGFibGUucm93cy5tYXAoam9pbk9iamVjdFJvdyhjb25maWdJZHMpKTtcbiAgICBpZiAodGFibGUuaWQgPT09IFRhYmxlVHlwZS5ERUZBVUxUKSB7XG4gICAgICBvYmplY3RUYWJsZXNbdGFibGUuaWRdID0gb2JqZWN0Um93cztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY3VycmVudCA9IG9iamVjdFRhYmxlc1t0YWJsZS5pZF07XG4gICAgICBpZiAoY3VycmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG9iamVjdFRhYmxlc1t0YWJsZS5pZF0gPSBbXTtcbiAgICAgIH1cbiAgICAgIG9iamVjdFRhYmxlc1t0YWJsZS5pZF0uY29uY2F0KG9iamVjdFJvd3MpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvYmplY3RUYWJsZXM7XG59O1xuXG4vKipcbiAqIEZvcm1hdHMgdGFibGVzIGludG8gdGhlIGBUYWJsZXNgIGZvcm1hdC5cbiAqL1xuY29uc3QgdGFibGVGb3JtYXRUYWJsZSA9IChtZXNzYWdlOiBNZXNzYWdlKTogVGFibGVzID0+IHtcbiAgY29uc3QgZmllbGRzQnk6IEZpZWxkc0J5Q29uZmlnSWQgPSBmaWVsZHNCeUNvbmZpZ0lkKG1lc3NhZ2UpO1xuICBjb25zdCBjb25maWdJZHMgPSBmbGF0dGVuQ29uZmlnSWRzKG1lc3NhZ2UpO1xuICBjb25zdCBjb25maWdJZElkeCA9IHt9O1xuICBjb25zdCBoZWFkZXJzOiBSb3dIZWFkaW5nW10gPSBjb25maWdJZHMubWFwKFxuICAgIChjb25maWdJZDogc3RyaW5nKTogUm93SGVhZGluZyA9PiB7XG4gICAgICBpZiAoY29uZmlnSWRJZHhbY29uZmlnSWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uZmlnSWRJZHhbY29uZmlnSWRdID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmZpZ0lkSWR4W2NvbmZpZ0lkXSsrO1xuICAgICAgfVxuICAgICAgY29uc3QgaWR4ID0gY29uZmlnSWRJZHhbY29uZmlnSWRdO1xuICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNCeVtjb25maWdJZF1baWR4XTtcbiAgICAgIGNvbnN0IGhlYWRpbmc6IFJvd0hlYWRpbmcgPSB7Li4uZmllbGQsIGNvbmZpZ0lkfTtcbiAgICAgIHJldHVybiBoZWFkaW5nO1xuICAgIH1cbiAgKTtcbiAgY29uc3QgdGFibGVUYWJsZXM6IFRhYmxlcyA9IHtcbiAgICBbVGFibGVUeXBlLkRFRkFVTFRdOiB7aGVhZGVyczogW10sIHJvd3M6IFtdfSxcbiAgfTtcblxuICBtZXNzYWdlLmRhdGFSZXNwb25zZS50YWJsZXMuZm9yRWFjaCgodGFibGU6IFRhYmxlKSA9PiB7XG4gICAgdGFibGVUYWJsZXNbdGFibGUuaWRdID0ge1xuICAgICAgaGVhZGVycyxcbiAgICAgIHJvd3M6IHRhYmxlLnJvd3MsXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRhYmxlVGFibGVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaWVsZHMgaW5kZXhlZCBieSB0aGVpciBjb25maWcgaWQuIFNpbmNlIG1hbnkgZmllbGRzIGNhbiBiZSBpblxuICogdGhlIHNhbWUgYE1FVFJJQ2AvYERJTUVOU0lPTmAgc2VsZWN0aW9uLCBgY29uZmlnSWRgIGlzIG1hcHBlZCB0byBgRmllbGRbXWAuXG4gKi9cbmV4cG9ydCBjb25zdCBmaWVsZHNCeUNvbmZpZ0lkID0gKG1lc3NhZ2U6IE1lc3NhZ2UpOiBGaWVsZHNCeUNvbmZpZ0lkID0+IHtcbiAgY29uc3QgZmllbGRzQnlEU0lkID0gZmllbGRzQnlJZChtZXNzYWdlKTtcbiAgY29uc3QgZmllbGRzQnk6IEZpZWxkc0J5Q29uZmlnSWQgPSB7fTtcblxuICBtZXNzYWdlLmNvbmZpZy5kYXRhLmZvckVhY2goKGNvbmZpZ0RhdGE6IENvbmZpZ0RhdGEpID0+IHtcbiAgICBjb25maWdEYXRhLmVsZW1lbnRzXG4gICAgICAuZmlsdGVyKGRpbWVuc2lvbk9yTWV0cmljKVxuICAgICAgLmZvckVhY2goKGNvbmZpZ0RhdGFFbGVtZW50OiBDb25maWdEYXRhQ29uY2VwdCkgPT4ge1xuICAgICAgICBmaWVsZHNCeVtjb25maWdEYXRhRWxlbWVudC5pZF0gPSBjb25maWdEYXRhRWxlbWVudC52YWx1ZS5tYXAoXG4gICAgICAgICAgKGRzSWQ6IEZpZWxkSWQpOiBGaWVsZCA9PiBmaWVsZHNCeURTSWRbZHNJZF1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZmllbGRzQnk7XG59O1xuXG4vKipcbiAqIEZsYXR0ZW5zIHRoZSBzdHlsZSBlbnRyaWVzIGludG8gYSBzaW5nbGUgb2JqZWN0LiBgc3R5bGVJZGBzIHNob3VsZCBiZSB1bmlxdWUuXG4gKi9cbmNvbnN0IGZsYXR0ZW5TdHlsZSA9IChtZXNzYWdlOiBNZXNzYWdlKTogU3R5bGVCeUlkID0+IHtcbiAgY29uc3Qgc3R5bGVCeUlkOiBTdHlsZUJ5SWQgPSB7fTtcbiAgKG1lc3NhZ2UuY29uZmlnLnN0eWxlIHx8IFtdKS5mb3JFYWNoKChzdHlsZUVudHJ5OiBDb25maWdTdHlsZSkgPT4ge1xuICAgIHN0eWxlRW50cnkuZWxlbWVudHMuZm9yRWFjaCgoY29uZmlnU3R5bGVFbGVtZW50OiBDb25maWdTdHlsZUVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChzdHlsZUJ5SWRbY29uZmlnU3R5bGVFbGVtZW50LmlkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgc3R5bGVJZHMgbXVzdCBiZSB1bmlxdWUuIFlvdXIgc3R5bGVJZDogJyR7XG4gICAgICAgICAgICBjb25maWdTdHlsZUVsZW1lbnQuaWRcbiAgICAgICAgICB9JyBpcyB1c2VkIG1vcmUgdGhhbiBvbmNlLmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHN0eWxlQnlJZFtjb25maWdTdHlsZUVsZW1lbnQuaWRdID0ge1xuICAgICAgICB2YWx1ZTogY29uZmlnU3R5bGVFbGVtZW50LnZhbHVlLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IGNvbmZpZ1N0eWxlRWxlbWVudC5kZWZhdWx0VmFsdWUsXG4gICAgICB9O1xuICAgIH0pO1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIHN0eWxlQnlJZDtcbn07XG5cbmNvbnN0IHRoZW1lU3R5bGUgPSAobWVzc2FnZTogTWVzc2FnZSk6IFRoZW1lU3R5bGUgPT4ge1xuICByZXR1cm4gbWVzc2FnZS5jb25maWcudGhlbWVTdHlsZTtcbn07XG5cbmNvbnN0IG1hcEludGVyYWN0aW9uVHlwZXMgPSAoXG4gIGRzSW50ZXJhY3Rpb246IERTSW50ZXJhY3Rpb25UeXBlXG4pOiBJbnRlcmFjdGlvblR5cGUgPT4ge1xuICBzd2l0Y2ggKGRzSW50ZXJhY3Rpb24pIHtcbiAgICBjYXNlIERTSW50ZXJhY3Rpb25UeXBlLkZJTFRFUjpcbiAgICAgIHJldHVybiBJbnRlcmFjdGlvblR5cGUuRklMVEVSO1xuICB9XG59O1xuXG5jb25zdCB0cmFuc2Zvcm1EU0ludGVyYWN0aW9uID0gKG1lc3NhZ2U6IE1lc3NhZ2UpOiBJbnRlcmFjdGlvbnNCeUlkID0+IHtcbiAgY29uc3QgZHNJbnRlcmFjdGlvbnM6IERTSW50ZXJhY3Rpb25EYXRhW10gPSBtZXNzYWdlLmNvbmZpZy5pbnRlcmFjdGlvbnM7XG4gIC8vIFRPRE8gLSByZW1vdmUgb25jZSBpbnRlcmFjdGlvbnMgYXJlIGxpdmUuXG4gIGlmIChkc0ludGVyYWN0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIHJldHVybiBkc0ludGVyYWN0aW9ucy5yZWR1Y2UoXG4gICAgKGFjYzogSW50ZXJhY3Rpb25zQnlJZCwgZHNJbnRlcmFjdGlvbjogRFNJbnRlcmFjdGlvbkRhdGEpID0+IHtcbiAgICAgIGNvbnN0IGludGVyYWN0aW9ucyA9IGRzSW50ZXJhY3Rpb24uc3VwcG9ydGVkQWN0aW9ucy5tYXAoXG4gICAgICAgIG1hcEludGVyYWN0aW9uVHlwZXNcbiAgICAgICk7XG4gICAgICBjb25zdCB2YWx1ZSA9IHtcbiAgICAgICAgdHlwZTogbWFwSW50ZXJhY3Rpb25UeXBlcyhkc0ludGVyYWN0aW9uLnZhbHVlLnR5cGUpLFxuICAgICAgICBkYXRhOiBkc0ludGVyYWN0aW9uLnZhbHVlLmRhdGEsXG4gICAgICB9O1xuICAgICAgYWNjW2RzSW50ZXJhY3Rpb24uaWRdID0ge1xuICAgICAgICB2YWx1ZSxcbiAgICAgICAgc3VwcG9ydGVkQWN0aW9uczogaW50ZXJhY3Rpb25zLFxuICAgICAgfTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSxcbiAgICB7fVxuICApO1xufTtcblxuLyoqXG4gKiBUaGUgdHJhbnNmb3JtIHRvIHVzZSBmb3IgZGF0YSBpbiBhIFRhYmxlIGZvcm1hdC4gaS5lLiBgW1sxLCAyLCAzXSwgWzQsIDUsIDZdXWBcbiAqL1xuZXhwb3J0IGNvbnN0IHRhYmxlVHJhbnNmb3JtOiBUYWJsZVRyYW5zZm9ybSA9IChcbiAgbWVzc2FnZTogTWVzc2FnZVxuKTogVGFibGVGb3JtYXQgPT4gKHtcbiAgdGFibGVzOiB0YWJsZUZvcm1hdFRhYmxlKG1lc3NhZ2UpLFxuICBmaWVsZHM6IGZpZWxkc0J5Q29uZmlnSWQobWVzc2FnZSksXG4gIHN0eWxlOiBmbGF0dGVuU3R5bGUobWVzc2FnZSksXG4gIHRoZW1lOiB0aGVtZVN0eWxlKG1lc3NhZ2UpLFxuICBpbnRlcmFjdGlvbnM6IHRyYW5zZm9ybURTSW50ZXJhY3Rpb24obWVzc2FnZSksXG59KTtcblxuLyoqXG4gKiBUaGUgdHJhbnNmb3JtIHRvIHVzZSBmb3IgZGF0YSBpbiBhbiBvYmplY3QgZm9ybWF0LiBpLmUuIGBbe25hbWU6ICdqb2huJywgdmlld3M6IDN9LCB7bmFtZTogJ3N1emllJywgdmlld3M6IDV9XWBcbiAqL1xuZXhwb3J0IGNvbnN0IG9iamVjdFRyYW5zZm9ybTogT2JqZWN0VHJhbnNmb3JtID0gKG1lc3NhZ2U6IE1lc3NhZ2UpID0+ICh7XG4gIHRhYmxlczogb2JqZWN0Rm9ybWF0VGFibGUobWVzc2FnZSksXG4gIGZpZWxkczogZmllbGRzQnlDb25maWdJZChtZXNzYWdlKSxcbiAgc3R5bGU6IGZsYXR0ZW5TdHlsZShtZXNzYWdlKSxcbiAgdGhlbWU6IHRoZW1lU3R5bGUobWVzc2FnZSksXG4gIGludGVyYWN0aW9uczogdHJhbnNmb3JtRFNJbnRlcmFjdGlvbihtZXNzYWdlKSxcbn0pO1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSB0cmFuc2Zvcm0gaXMgbGlrZWx5IHRoZSBpZGVudGl0eSBmdW5jdGlvblxuICogVGhpcyBpcyBub3QgYSBzdXBwb3J0ZWQgaW1wbGVtZW50YXRpb24gcGF0aFxuICogQXZvaWQgdGhpcyBpZiBhdCBhbGwgcG9zc2libGUgLSBwbGVhc2UgdXNlIGVpdGhlciBvYmplY3RUcmFuc2Zvcm0gb3IgdGFibGVUcmFuc2Zvcm1cbiAqL1xuY29uc3QgaXNQcm9iYWJseUlkZW50aXR5RnVuY3Rpb24gPSAodHJhbnNmb3JtKTogYm9vbGVhbiA9PiB7XG4gIGxldCBpc0lkZW50aXR5OiBib29sZWFuID0gZmFsc2U7XG4gIGlmICh0cmFuc2Zvcm0oJ2lkZW50aXR5JykgPT09ICdpZGVudGl0eScpIHtcbiAgICBpc0lkZW50aXR5ID0gdHJ1ZTtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgVGhpcyBpcyBhbiB1bnN1cHBvcnRlZCBkYXRhIGZvcm1hdC4gUGxlYXNlIHVzZSBvbmUgb2YgdGhlIHN1cHBvcnRlZCB0cmFuc2Zvcm1zOlxuICAgICAgIGRzY2Mub2JqZWN0Rm9ybWF0IG9yIGRzY2MudGFibGVGb3JtYXQuYFxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGlzSWRlbnRpdHk7XG59O1xuXG5jb25zdCBpc1ZhbGlkVHJhbnNmb3JtID0gKHRyYW5zZm9ybSk6IGJvb2xlYW4gPT4ge1xuICBsZXQgaXNWYWxpZCA9IGZhbHNlO1xuICBpZiAoXG4gICAgKHRyYW5zZm9ybSBhcyBhbnkpID09PSB0YWJsZVRyYW5zZm9ybSB8fFxuICAgICh0cmFuc2Zvcm0gYXMgYW55KSA9PT0gb2JqZWN0VHJhbnNmb3JtXG4gICkge1xuICAgIGlzVmFsaWQgPSB0cnVlO1xuICB9IGVsc2UgaWYgKGlzUHJvYmFibHlJZGVudGl0eUZ1bmN0aW9uKHRyYW5zZm9ybSkpIHtcbiAgICBpc1ZhbGlkID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gaXNWYWxpZDtcbn07XG4vKlxuICogU3Vic2NyaWJlcyB0byBtZXNzYWdlcyBmcm9tIERhdGEgU3R1ZGlvLiBDYWxscyBgY2JgIGZvciBldmVyeSBuZXdcbiAqIFtbTWVzc2FnZVR5cGUuUkVOREVSXV0gbWVzc2FnZS4gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCB1bnN1YnNjcmliZVxuICogYGNhbGxiYWNrYCBmcm9tIGZ1cnRoZXIgaW52b2NhdGlvbnMuXG4gKlxuICogVXNhZ2UgLSB0YWJsZVRyYW5zZm9ybTpcbiAqIGBgYFxuICogdmFyIHVuc3Vic2NyaWJlID0gZHNjYy5zdWJzY3JpYmVUb0RhdGEoZnVuY3Rpb24obWVzc2FnZSkge1xuICogICBjb25zb2xlLmxvZyhtZXNzYWdlLnRhYmxlcylcbiAqICAgY29uc29sZS5sb2cobWVzc2FnZS5maWVsZHMpXG4gKiAgIGNvbnNvbGUubG9nKG1lc3NhZ2Uuc3R5bGUpXG4gKiB9LCB7dHJhbnNmb3JtOiBkc2NjLnRhYmxlVHJhbnNmb3JtfSk7XG4gKlxuICogc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAqICAgdW5zdWJzY3JpYmUoKTtcbiAqIH0sIDMwMDApXG4gKiBgYGBcblxuICogVXNhZ2UgLSBvYmplY3RUcmFuc2Zvcm06XG4gKiBgYGBcbiAqIHZhciB1bnN1YnNjcmliZSA9IGRzY2Muc3Vic2NyaWJlVG9EYXRhKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAqICAgY29uc29sZS5sb2cobWVzc2FnZS50YWJsZXMpXG4gKiAgIGNvbnNvbGUubG9nKG1lc3NhZ2UuZmllbGRzKVxuICogICBjb25zb2xlLmxvZyhtZXNzYWdlLnN0eWxlKVxuICogfSwge3RyYW5zZm9ybTogZHNjYy5vYmplY3RUcmFuc2Zvcm19KTtcbiAqXG4gKiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICogICB1bnN1YnNjcmliZSgpO1xuICogfSwgMzAwMClcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlVG9EYXRhID0gPFQ+KFxuICBjYjogKGNvbXBvbmVudERhdGE6IFQpID0+IHZvaWQsXG4gIG9wdGlvbnM6IFN1YnNjcmlwdGlvbnNPcHRpb25zPFQ+XG4pOiAoKCkgPT4gdm9pZCkgPT4ge1xuICBpZiAoaXNWYWxpZFRyYW5zZm9ybShvcHRpb25zLnRyYW5zZm9ybSkpIHtcbiAgICBjb25zdCBvbk1lc3NhZ2UgPSAobWVzc2FnZTogUG9zdE1lc3NhZ2UpID0+IHtcbiAgICAgIGlmIChtZXNzYWdlLmRhdGEudHlwZSA9PT0gTWVzc2FnZVR5cGUuUkVOREVSKSB7XG4gICAgICAgIGNiKG9wdGlvbnMudHJhbnNmb3JtKG1lc3NhZ2UuZGF0YSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBgTWVzc2FnZVR5cGU6ICR7XG4gICAgICAgICAgICBtZXNzYWdlLmRhdGEudHlwZVxuICAgICAgICAgIH0gaXMgbm90IHN1cHBvcnRlZCBieSB0aGlzIHZlcnNpb24gb2YgdGhlIGxpYnJhcnkuYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpO1xuICAgIGNvbnN0IGNvbXBvbmVudElkID0gZ2V0Q29tcG9uZW50SWQoKTtcbiAgICAvLyBUZWxsIERhdGFTdHVkaW8gdGhhdCB0aGUgdml6IGlzIHJlYWR5IHRvIGdldCBldmVudHMuXG4gICAgY29uc3Qgdml6UmVhZHlNZXNzYWdlOiBWaXpSZWFkeU1lc3NhZ2UgPSB7XG4gICAgICBjb21wb25lbnRJZCxcbiAgICAgIHR5cGU6IFRvRFNNZXNzYWdlVHlwZS5WSVpfUkVBRFksXG4gICAgfTtcbiAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHZpelJlYWR5TWVzc2FnZSwgJyonKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihgT25seSB0aGUgYnVpbHQgaW4gdHJhbnNmb3JtIGZ1bmN0aW9ucyBhcmUgc3VwcG9ydGVkLmApO1xuICB9XG59O1xuXG4vKlxuICogRG9lcyB0aGUgdGhpbmcgdGhhdCBpbnRlcmFjdGlvbnMgc2hvdWxkIGRvLlxuICovXG5leHBvcnQgY29uc3Qgc2VuZEludGVyYWN0aW9uOiBTZW5kSW50ZXJhY3Rpb24gPSAoXG4gIGFjdGlvbklkLFxuICBpbnRlcmFjdGlvbixcbiAgZGF0YVxuKSA9PiB7XG4gIGNvbnN0IGNvbXBvbmVudElkID0gZ2V0Q29tcG9uZW50SWQoKTtcbiAgY29uc3QgaW50ZXJhY3Rpb25NZXNzYWdlOiBJbnRlcmFjdGlvbk1lc3NhZ2UgPSB7XG4gICAgdHlwZTogVG9EU01lc3NhZ2VUeXBlLklOVEVSQUNUSU9OLFxuICAgIGlkOiBhY3Rpb25JZCxcbiAgICBkYXRhLFxuICAgIGNvbXBvbmVudElkLFxuICB9O1xuICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKGludGVyYWN0aW9uTWVzc2FnZSwgJyonKTtcbn07XG5cbi8qXG4gKiBDbGVhcnMgYW4gaW50ZXJhY3Rpb25cbiAqL1xuXG5leHBvcnQgY29uc3QgY2xlYXJJbnRlcmFjdGlvbjogQ2xlYXJJbnRlcmFjdGlvbiA9IChhY3Rpb25JZCwgaW50ZXJhY3Rpb24pID0+IHtcbiAgc2VuZEludGVyYWN0aW9uKGFjdGlvbklkLCBpbnRlcmFjdGlvbiwgdW5kZWZpbmVkKTtcbn07XG4iLCIvKiFcbiAgQGxpY2Vuc2VcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQge2NsZWFySW50ZXJhY3Rpb259IGZyb20gJy4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvc3RNZXNzYWdlIGV4dGVuZHMgTWVzc2FnZUV2ZW50IHtcbiAgZGF0YTogTWVzc2FnZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlIHtcbiAgLyoqXG4gICAqIFRoZSBtZXNzYWdlIHR5cGUuXG4gICAqL1xuICB0eXBlOiBNZXNzYWdlVHlwZTtcbiAgLyoqXG4gICAqIFRoZSBjb25maWd1cmF0aW9uIHN0YXRlIG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjb25maWc6IENvbmZpZztcbiAgLyoqXG4gICAqIEEgbGlzdCBvZiBhbGwgdXNlciBzZWxlY3RlZCBmaWVsZHMuXG4gICAqL1xuICBmaWVsZHM6IEZpZWxkW107XG4gIC8qKlxuICAgKiBUaGUgZGF0YSBjb3JyZXNwb25kaW5nIHRvIHRoZSBkYXRhIGNvbmZpZyBzdGF0ZSBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgZGF0YVJlc3BvbnNlOiBEYXRhUmVzcG9uc2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnIHtcbiAgLyoqXG4gICAqIFRoZSBkYXRhIGNvbmZpZyBkZWZpbmVkIGZvciB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgZGF0YTogQ29uZmlnRGF0YVtdO1xuICAvKipcbiAgICogVGhlIHN0eWxlIGVsZW1lbnRzIHJlcXVpcmVkIGFuZCBzdXBwb3J0ZWQgYnkgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIHN0eWxlOiBDb25maWdTdHlsZVtdO1xuICB0aGVtZVN0eWxlPzogQ29uZmlnVGhlbWVTdHlsZTtcbiAgaW50ZXJhY3Rpb25zOiBEU0ludGVyYWN0aW9uRGF0YVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpZWxkIHtcbiAgLyoqXG4gICAqIFRoZSBJRCBvZiB0aGUgZmllbGQuXG4gICAqL1xuICBpZDogRmllbGRJZDtcbiAgLyoqXG4gICAqIFRoZSB1c2VyLWZyaWVuZGx5IG5hbWUgb2YgdGhlIGZpZWxkLlxuICAgKi9cbiAgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHVzZXItZnJpZW5kbHkgZGVzY3JpcHRpb24gb2YgdGhlIGZpZWxkLlxuICAgKi9cbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZmllbGQgdHlwZS5cbiAgICovXG4gIHR5cGU6IEZpZWxkVHlwZTtcbiAgLyoqXG4gICAqIFRoZSBmaWVsZCBjb25jZXB0LlxuICAgKi9cbiAgY29uY2VwdDogQ29uY2VwdFR5cGU7XG59XG5cbmV4cG9ydCBlbnVtIENvbmNlcHRUeXBlIHtcbiAgTUVUUklDID0gJ01FVFJJQycsXG4gIERJTUVOU0lPTiA9ICdESU1FTlNJT04nLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFSZXNwb25zZSB7XG4gIC8qKlxuICAgKiBUaGUgbGlzdCBvZiB0YWJsZXMgZm9yIHRoZSBjdXJyZW50IGRhdGEgY29uZmlndXJhdGlvbi5cbiAgICovXG4gIHRhYmxlczogVGFibGVbXTtcbn1cblxuZXhwb3J0IGVudW0gTWVzc2FnZVR5cGUge1xuICBSRU5ERVIgPSAnUkVOREVSJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdEYXRhIHtcbiAgLyoqXG4gICAqIFRoZSBJRCBvZiB0aGUgZGF0YSBzZWN0aW9uLlxuICAgKlxuICAgKiBUaGlzIHNob3VsZCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcgd2l0aCBubyBzcGFjZXMuXG4gICAqL1xuICBpZDogQ29uZmlnRGF0YUlkO1xuICAvKipcbiAgICogVGhlIGxhYmVsIGZvciB0aGUgZGF0YSBzZWN0aW9uLlxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBkYXRhIGVsZW1lbnRzIHRvIHJlbmRlci5cbiAgICovXG4gIGVsZW1lbnRzOiBDb25maWdEYXRhRWxlbWVudFtdO1xufVxuZXhwb3J0IGludGVyZmFjZSBDb25maWdTdHlsZSB7XG4gIC8qKlxuICAgKiBUaGUgSUQgb2YgdGhlIHN0eWxlIHNlY3Rpb24uXG4gICAqL1xuICBpZDogQ29uZmlnU3R5bGVJZDtcbiAgLyoqXG4gICAqIFRoZSBoZWFkaW5nIGZvciB0aGUgc3R5bGUgc2VjdGlvbi5cbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgc3R5bGUgZWxlbWVudHMgdG8gcmVuZGVyLlxuICAgKi9cbiAgZWxlbWVudHM6IENvbmZpZ1N0eWxlRWxlbWVudFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1RoZW1lU3R5bGUge1xuICB0aGVtZUZpbGxDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICB0aGVtZVJlZj86IFRoZW1lUmVmSW5kZXg7XG4gIH07XG4gIHRoZW1lRm9udENvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgIHRoZW1lUmVmPzogVGhlbWVSZWZJbmRleDtcbiAgfTtcbiAgdGhlbWVBY2NlbnRGaWxsQ29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gICAgdGhlbWVSZWY/OiBUaGVtZVJlZkluZGV4O1xuICB9O1xuICB0aGVtZUFjY2VudEZvbnRDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICB0aGVtZVJlZj86IFRoZW1lUmVmSW5kZXg7XG4gIH07XG4gIHRoZW1lRm9udEZhbWlseTogc3RyaW5nO1xuICB0aGVtZUFjY2VudEZvbnRGYW1pbHk6IHN0cmluZztcbiAgdGhlbWVJbmNyZWFzZUNvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICB9O1xuICB0aGVtZURlY3JlYXNlQ29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gIH07XG4gIHRoZW1lR3JpZENvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICB9O1xuICB0aGVtZVNlcmllc0NvbG9yOiBBcnJheTx7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgIHRoZW1lUmVmPzogVGhlbWVSZWZJbmRleDtcbiAgICBzZXJpZXNSZWY6IFNlcmllc1JlZkluZGV4O1xuICB9Pjtcbn1cblxuaW50ZXJmYWNlIFRoZW1lUmVmSW5kZXgge1xuICBpbmRleDogbnVtYmVyO1xufVxuaW50ZXJmYWNlIFNlcmllc1JlZkluZGV4IHtcbiAgaW5kZXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaGVtZVN0eWxlIHtcbiAgdGhlbWVGaWxsQ29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gICAgdGhlbWVSZWY/OiBUaGVtZVJlZkluZGV4O1xuICB9O1xuICB0aGVtZUZvbnRDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICB0aGVtZVJlZj86IFRoZW1lUmVmSW5kZXg7XG4gIH07XG4gIHRoZW1lQWNjZW50RmlsbENvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgIHRoZW1lUmVmPzogVGhlbWVSZWZJbmRleDtcbiAgfTtcbiAgdGhlbWVBY2NlbnRGb250Q29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gICAgdGhlbWVSZWY/OiBUaGVtZVJlZkluZGV4O1xuICB9O1xuICB0aGVtZUZvbnRGYW1pbHk6IHN0cmluZztcbiAgdGhlbWVBY2NlbnRGb250RmFtaWx5OiBzdHJpbmc7XG4gIHRoZW1lSW5jcmVhc2VDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgfTtcbiAgdGhlbWVEZWNyZWFzZUNvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICB9O1xuICB0aGVtZUdyaWRDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgfTtcbiAgdGhlbWVTZXJpZXNDb2xvcjogQXJyYXk8e1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICB0aGVtZVJlZj86IFRoZW1lUmVmSW5kZXg7XG4gICAgc2VyaWVzUmVmOiBTZXJpZXNSZWZJbmRleDtcbiAgfT47XG59XG5cbmV4cG9ydCBlbnVtIEZpZWxkVHlwZSB7XG4gIFlFQVIgPSAnWUVBUicsXG4gIFlFQVJfUVVBUlRFUiA9ICdZRUFSX1FVQVJURVInLFxuICBZRUFSX01PTlRIID0gJ1lFQVJfTU9OVEgnLFxuICBZRUFSX1dFRUsgPSAnWUVBUl9XRUVLJyxcbiAgWUVBUl9NT05USF9EQVkgPSAnWUVBUl9NT05USF9EQVknLFxuICBZRUFSX01PTlRIX0RBWV9IT1VSID0gJ1lFQVJfTU9OVEhfREFZX0hPVVInLFxuICBRVUFSVEVSID0gJ1FVQVJURVInLFxuICBNT05USCA9ICdNT05USCcsXG4gIFdFRUsgPSAnV0VFSycsXG4gIE1PTlRIX0RBWSA9ICdNT05USF9EQVknLFxuICBEQVlfT0ZfV0VFSyA9ICdEQVlfT0ZfV0VFSycsXG4gIERBWSA9ICdEQVknLFxuICBIT1VSID0gJ0hPVVInLFxuICBNSU5VVEUgPSAnTUlOVVRFJyxcbiAgRFVSQVRJT04gPSAnRFVSQVRJT04nLFxuICBDT1VOVFJZID0gJ0NPVU5UUlknLFxuICBDT1VOVFJZX0NPREUgPSAnQ09VTlRSWV9DT0RFJyxcbiAgQ09OVElORU5UID0gJ0NPTlRJTkVOVCcsXG4gIENPTlRJTkVOVF9DT0RFID0gJ0NPTlRJTkVOVF9DT0RFJyxcbiAgU1VCX0NPTlRJTkVOVCA9ICdTVUJfQ09OVElORU5UJyxcbiAgU1VCX0NPTlRJTkVOVF9DT0RFID0gJ1NVQl9DT05USU5FTlRfQ09ERScsXG4gIFJFR0lPTiA9ICdSRUdJT04nLFxuICBSRUdJT05fQ09ERSA9ICdSRUdJT05fQ09ERScsXG4gIENJVFkgPSAnQ0lUWScsXG4gIENJVFlfQ09ERSA9ICdDSVRZX0NPREUnLFxuICBNRVRST19DT0RFID0gJ01FVFJPX0NPREUnLFxuICBMQVRJVFVERV9MT05HSVRVREUgPSAnTEFUSVRVREVfTE9OR0lUVURFJyxcbiAgTlVNQkVSID0gJ05VTUJFUicsXG4gIFBFUkNFTlQgPSAnUEVSQ0VOVCcsXG4gIFRFWFQgPSAnVEVYVCcsXG4gIEJPT0xFQU4gPSAnQk9PTEVBTicsXG4gIFVSTCA9ICdVUkwnLFxuICBJTUFHRSA9ICdJTUFHRScsXG4gIENVUlJFTkNZX0FFRCA9ICdDVVJSRU5DWV9BRUQnLFxuICBDVVJSRU5DWV9BTEwgPSAnQ1VSUkVOQ1lfQUxMJyxcbiAgQ1VSUkVOQ1lfQVJTID0gJ0NVUlJFTkNZX0FSUycsXG4gIENVUlJFTkNZX0FVRCA9ICdDVVJSRU5DWV9BVUQnLFxuICBDVVJSRU5DWV9CRFQgPSAnQ1VSUkVOQ1lfQkRUJyxcbiAgQ1VSUkVOQ1lfQkdOID0gJ0NVUlJFTkNZX0JHTicsXG4gIENVUlJFTkNZX0JPQiA9ICdDVVJSRU5DWV9CT0InLFxuICBDVVJSRU5DWV9CUkwgPSAnQ1VSUkVOQ1lfQlJMJyxcbiAgQ1VSUkVOQ1lfQ0FEID0gJ0NVUlJFTkNZX0NBRCcsXG4gIENVUlJFTkNZX0NERiA9ICdDVVJSRU5DWV9DREYnLFxuICBDVVJSRU5DWV9DSEYgPSAnQ1VSUkVOQ1lfQ0hGJyxcbiAgQ1VSUkVOQ1lfQ0xQID0gJ0NVUlJFTkNZX0NMUCcsXG4gIENVUlJFTkNZX0NOWSA9ICdDVVJSRU5DWV9DTlknLFxuICBDVVJSRU5DWV9DT1AgPSAnQ1VSUkVOQ1lfQ09QJyxcbiAgQ1VSUkVOQ1lfQ1JDID0gJ0NVUlJFTkNZX0NSQycsXG4gIENVUlJFTkNZX0NaSyA9ICdDVVJSRU5DWV9DWksnLFxuICBDVVJSRU5DWV9ES0sgPSAnQ1VSUkVOQ1lfREtLJyxcbiAgQ1VSUkVOQ1lfRE9QID0gJ0NVUlJFTkNZX0RPUCcsXG4gIENVUlJFTkNZX0VHUCA9ICdDVVJSRU5DWV9FR1AnLFxuICBDVVJSRU5DWV9FVEIgPSAnQ1VSUkVOQ1lfRVRCJyxcbiAgQ1VSUkVOQ1lfRVVSID0gJ0NVUlJFTkNZX0VVUicsXG4gIENVUlJFTkNZX0dCUCA9ICdDVVJSRU5DWV9HQlAnLFxuICBDVVJSRU5DWV9IS0QgPSAnQ1VSUkVOQ1lfSEtEJyxcbiAgQ1VSUkVOQ1lfSFJLID0gJ0NVUlJFTkNZX0hSSycsXG4gIENVUlJFTkNZX0hVRiA9ICdDVVJSRU5DWV9IVUYnLFxuICBDVVJSRU5DWV9JRFIgPSAnQ1VSUkVOQ1lfSURSJyxcbiAgQ1VSUkVOQ1lfSUxTID0gJ0NVUlJFTkNZX0lMUycsXG4gIENVUlJFTkNZX0lOUiA9ICdDVVJSRU5DWV9JTlInLFxuICBDVVJSRU5DWV9JUlIgPSAnQ1VSUkVOQ1lfSVJSJyxcbiAgQ1VSUkVOQ1lfSVNLID0gJ0NVUlJFTkNZX0lTSycsXG4gIENVUlJFTkNZX0pNRCA9ICdDVVJSRU5DWV9KTUQnLFxuICBDVVJSRU5DWV9KUFkgPSAnQ1VSUkVOQ1lfSlBZJyxcbiAgQ1VSUkVOQ1lfS1JXID0gJ0NVUlJFTkNZX0tSVycsXG4gIENVUlJFTkNZX0xLUiA9ICdDVVJSRU5DWV9MS1InLFxuICBDVVJSRU5DWV9MVEwgPSAnQ1VSUkVOQ1lfTFRMJyxcbiAgQ1VSUkVOQ1lfTU5UID0gJ0NVUlJFTkNZX01OVCcsXG4gIENVUlJFTkNZX01WUiA9ICdDVVJSRU5DWV9NVlInLFxuICBDVVJSRU5DWV9NWE4gPSAnQ1VSUkVOQ1lfTVhOJyxcbiAgQ1VSUkVOQ1lfTVlSID0gJ0NVUlJFTkNZX01ZUicsXG4gIENVUlJFTkNZX05PSyA9ICdDVVJSRU5DWV9OT0snLFxuICBDVVJSRU5DWV9OWkQgPSAnQ1VSUkVOQ1lfTlpEJyxcbiAgQ1VSUkVOQ1lfUEFCID0gJ0NVUlJFTkNZX1BBQicsXG4gIENVUlJFTkNZX1BFTiA9ICdDVVJSRU5DWV9QRU4nLFxuICBDVVJSRU5DWV9QSFAgPSAnQ1VSUkVOQ1lfUEhQJyxcbiAgQ1VSUkVOQ1lfUEtSID0gJ0NVUlJFTkNZX1BLUicsXG4gIENVUlJFTkNZX1BMTiA9ICdDVVJSRU5DWV9QTE4nLFxuICBDVVJSRU5DWV9ST04gPSAnQ1VSUkVOQ1lfUk9OJyxcbiAgQ1VSUkVOQ1lfUlNEID0gJ0NVUlJFTkNZX1JTRCcsXG4gIENVUlJFTkNZX1JVQiA9ICdDVVJSRU5DWV9SVUInLFxuICBDVVJSRU5DWV9TQVIgPSAnQ1VSUkVOQ1lfU0FSJyxcbiAgQ1VSUkVOQ1lfU0VLID0gJ0NVUlJFTkNZX1NFSycsXG4gIENVUlJFTkNZX1NHRCA9ICdDVVJSRU5DWV9TR0QnLFxuICBDVVJSRU5DWV9USEIgPSAnQ1VSUkVOQ1lfVEhCJyxcbiAgQ1VSUkVOQ1lfVFJZID0gJ0NVUlJFTkNZX1RSWScsXG4gIENVUlJFTkNZX1RXRCA9ICdDVVJSRU5DWV9UV0QnLFxuICBDVVJSRU5DWV9UWlMgPSAnQ1VSUkVOQ1lfVFpTJyxcbiAgQ1VSUkVOQ1lfVUFIID0gJ0NVUlJFTkNZX1VBSCcsXG4gIENVUlJFTkNZX1VTRCA9ICdDVVJSRU5DWV9VU0QnLFxuICBDVVJSRU5DWV9VWVUgPSAnQ1VSUkVOQ1lfVVlVJyxcbiAgQ1VSUkVOQ1lfVkVGID0gJ0NVUlJFTkNZX1ZFRicsXG4gIENVUlJFTkNZX1ZORCA9ICdDVVJSRU5DWV9WTkQnLFxuICBDVVJSRU5DWV9ZRVIgPSAnQ1VSUkVOQ1lfWUVSJyxcbiAgQ1VSUkVOQ1lfWkFSID0gJ0NVUlJFTkNZX1pBUicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFibGUge1xuICAvKipcbiAgICogVGhlIHR5cGUgb2YgdGhlIHRhYmxlLlxuICAgKi9cbiAgaWQ6IFRhYmxlVHlwZTtcbiAgLyoqXG4gICAqIFRoZSBbW0ZpZWxkSWRdXXMgb2YgdGhlIGZpZWxkcyBzZWxlY3RlZCBieSB0aGUgdXNlci5cbiAgICovXG4gIGZpZWxkczogRmllbGRJZFtdO1xuICAvKipcbiAgICogVGhlIHJvd3Mgb2YgZGF0YSBWYWx1ZXMuXG4gICAqL1xuICByb3dzOiBEU1Jvd1tdO1xufVxuXG4vKipcbiAqIEEgcm93IG9mIHZhbHVlcy5cbiAqXG4gKiBUaGUgb3JkZXIgb2YgdmFsdWVzIGNvcnJlc3BvbmRzIHRvIHRoZSBvcmRlciBvZiB0aGUgZmllbGRzIG9mIGFsbCBkYXRhIGVsZW1lbnQgZmllbGQgb2JqZWN0cy5cbiAqL1xuXG5leHBvcnQgdHlwZSBEU1JvdyA9IERTUm93VmFsdWVbXTtcbi8qKlxuICogQSB2YWx1ZSBmb3IgYW4gZW50cnkgaW4gYSBEU1Jvdy5cbiAqL1xuZXhwb3J0IHR5cGUgRFNSb3dWYWx1ZSA9IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnRGF0YUVsZW1lbnRNZXRyaWMge1xuICAvKipcbiAgICogVGhlIGRhdGEgZWxlbWVudCB0eXBlIHRvIHJlbmRlci5cbiAgICovXG4gIHR5cGU6IENvbmZpZ0RhdGFFbGVtZW50VHlwZS5NRVRSSUM7XG4gIC8qKlxuICAgKiBUaGUgSUQgb2YgdGhlIG1ldHJpYy5cbiAgICpcbiAgICogVGhpcyBzaG91bGQgYmUgYSBub24tZW1wdHkgc3RyaW5nIHdpdGggbm8gc3BhY2VzLlxuICAgKi9cbiAgaWQ6IENvbmZpZ0RhdGFFbGVtZW50SWQ7XG4gIC8qKlxuICAgKiBUaGUgdG9vbHRpcCBvciBsYWJlbCBmb3IgdGhlIG1ldHJpYy5cbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZGF0YSBvcHRpb25zIGZvciBhIE1ldHJpYy5cbiAgICovXG4gIG9wdGlvbnM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgbWluaW11bSBudW1iZXIgb2YgbWV0cmljcyBzdXBwb3J0ZWQuXG4gICAgICovXG4gICAgbWluPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBtZXRyaWNzIHN1cHBvcnRlZC5cbiAgICAgKi9cbiAgICBtYXg/OiBudW1iZXI7XG4gIH07XG4gIC8qKlxuICAgKiBUaGUgbGlzdCBvZiBbW0ZpZWxkSWRdXXMgc2VsZWN0ZWQgYnkgdGhlIHVzZXIuXG4gICAqL1xuICB2YWx1ZTogRmllbGRJZFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0RhdGFFbGVtZW50RGltZW5zaW9uIHtcbiAgLyoqXG4gICAqIFRoZSBkYXRhIGVsZW1lbnQgdHlwZSB0byByZW5kZXIuXG4gICAqL1xuICB0eXBlOiBDb25maWdEYXRhRWxlbWVudFR5cGUuRElNRU5TSU9OO1xuICAvKipcbiAgICogVGhlIElEIG9mIHRoZSBkaW1lbnNpb24uXG4gICAqXG4gICAqIFRoaXMgc2hvdWxkIGJlIGEgbm9uLWVtcHR5IHN0cmluZyB3aXRoIG5vIHNwYWNlcy5cbiAgICovXG4gIGlkOiBDb25maWdEYXRhRWxlbWVudElkO1xuICAvKipcbiAgICogVGhlIHRvb2x0aXAgb3IgbGFiZWwgZm9yIHRoZSBkaW1lbnNpb24uXG4gICAqL1xuICBsYWJlbDogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGRhdGEgb3B0aW9ucyBmb3IgYSBEaW1lbnNpb24uXG4gICAqL1xuICBvcHRpb25zOiB7XG4gICAgLyoqXG4gICAgICogVGhlIG1pbmltdW0gbnVtYmVyIG9mIGRpbWVuc2lvbnMgc3VwcG9ydGVkLlxuICAgICAqL1xuICAgIG1pbj86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgbWF4aW11bSBudW1iZXIgb2YgZGltZW5zaW9ucyBzdXBwb3J0ZWQuXG4gICAgICovXG4gICAgbWF4PzogbnVtYmVyO1xuICAgIHN1cHBvcnRlZFR5cGVzPzogQXJyYXk8J1RJTUUnIHwgJ0dFTycgfCAnREVGQVVMVCc+O1xuICB9O1xuICAvKipcbiAgICogVGhlIGxpc3Qgb2YgW1tGaWVsZElkXV1zIHNlbGVjdGVkIGJ5IHRoZSB1c2VyLlxuICAgKi9cbiAgdmFsdWU6IEZpZWxkSWRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdEYXRhRWxlbWVudE1heFJlc3VsdHMge1xuICAvKipcbiAgICogVGhlIGRhdGEgZWxlbWVudCB0eXBlIHRvIHJlbmRlci5cbiAgICovXG4gIHR5cGU6IENvbmZpZ0RhdGFFbGVtZW50VHlwZS5NQVhfUkVTVUxUUztcbiAgLyoqXG4gICAqIFRoZSBJRCBvZiB0aGUgbWF4IHJlc3VsdHMuXG4gICAqXG4gICAqIFRoaXMgc2hvdWxkIGJlIGEgbm9uLWVtcHR5IHN0cmluZyB3aXRoIG5vIHNwYWNlcy5cbiAgICovXG4gIGlkOiBDb25maWdEYXRhRWxlbWVudElkO1xuICAvKipcbiAgICogVGhlIHRvb2x0aXAgb3IgbGFiZWwgZm9yIHRoZSBtYXggcmVzdWx0cy5cbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZGF0YSBvcHRpb25zIGZvciBhIE1heCBSZXN1bHRzLlxuICAgKi9cbiAgb3B0aW9uczoge1xuICAgIC8qKlxuICAgICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiByb3dzLlxuICAgICAqL1xuICAgIG1heDogbnVtYmVyO1xuICB9O1xufVxuXG5leHBvcnQgdHlwZSBDb25maWdEYXRhRWxlbWVudCA9XG4gIHwgQ29uZmlnRGF0YUVsZW1lbnRNYXhSZXN1bHRzXG4gIHwgQ29uZmlnRGF0YUVsZW1lbnRNZXRyaWNcbiAgfCBDb25maWdEYXRhRWxlbWVudERpbWVuc2lvbjtcblxuLy8gVE9ETzogdGhpcyBzaG91bGQgZXZlbnR1YWxseSBhbHdheXMgYmUgYSB2YWx1ZVxuZXhwb3J0IHR5cGUgQ29uZmlnU3R5bGVWYWx1ZSA9IHN0cmluZyB8IHt9IHwgYm9vbGVhbiB8IHtjb2xvcjogc3RyaW5nfTtcblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdTdHlsZUVsZW1lbnQge1xuICAvKipcbiAgICogVGhlIHN0eWxlIGVsZW1lbnQgdHlwZSB0byByZW5kZXIuXG4gICAqL1xuICB0eXBlOiBDb25maWdTdHlsZUVsZW1lbnRUeXBlO1xuICAvKipcbiAgICogVGhlIElEIG9mIHRoZSBzdHlsZSBlbGVtZW50LlxuICAgKlxuICAgKiBUaGlzIHNob3VsZCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcgd2l0aCBubyBzcGFjZXMuXG4gICAqL1xuICBpZDogQ29uZmlnU3R5bGVFbGVtZW50SWQ7XG4gIC8qKlxuICAgKiBUaGUgdG9vbHRpcCBvciBsYWJlbCBmb3IgdGhlIHN0eWxlIGVsZW1lbnQuXG4gICAqXG4gICAqIFRoaXMgaXMgdGhlIGxhYmVsIHRleHQgZm9yIGEgYENIRUNLQk9YYCBlbGVtZW50IGFuZCB0aGUgdG9vbHRpcCB0ZXh0IGZvciBvdGhlciBlbGVtZW50cy5cbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBmb3IgdGhlIHN0eWxlIGVsZW1lbnQuXG4gICAqXG4gICAqIEludmFsaWQgdmFsdWVzIHdpbGwgYmUgaWdub3JlZC5cbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogQ29uZmlnU3R5bGVWYWx1ZTtcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBzdHlsZSBlbGVtZW50LlxuICAgKi9cbiAgdmFsdWU6IENvbmZpZ1N0eWxlVmFsdWU7XG59XG5leHBvcnQgZW51bSBUYWJsZVR5cGUge1xuICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICBDT01QQVJJU09OID0gJ0NPTVBBUklTT04nLFxuICBTVU1NQVJZID0gJ1NVTU1BUlknLFxufVxuXG5leHBvcnQgZW51bSBDb25maWdEYXRhRWxlbWVudFR5cGUge1xuICAvKipcbiAgICogUmVuZGVycyBhIG1ldHJpYyBmaWVsZCBlbGVtZW50LlxuICAgKi9cbiAgTUVUUklDID0gJ01FVFJJQycsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgZGltZW5zaW9uIGZpZWxkIGVsZW1lbnQuXG4gICAqL1xuICBESU1FTlNJT04gPSAnRElNRU5TSU9OJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSBkcm9wZG93biB0aGF0IGFmZmVjdHMgdGhlIG1heGltdW0gbnVtYmVyIG9mIHJlc3VsdHMgcmV0dXJuZWQuXG4gICAqL1xuICBNQVhfUkVTVUxUUyA9ICdNQVhfUkVTVUxUUycsXG59XG5cbmV4cG9ydCBlbnVtIENvbmZpZ1N0eWxlRWxlbWVudFR5cGUge1xuICAvKipcbiAgICogUmVuZGVycyBhIHRleHQgaW5wdXQgYm94LlxuICAgKi9cbiAgVEVYVElOUFVUID0gJ1RFWFRJTlBVVCcsXG4gIC8qKlxuICAgKiBBIHNpbmdsZSBzZWxlY3QgZHJvcGRvd24uXG4gICAqL1xuICBTRUxFQ1RfU0lOR0xFID0gJ1NFTEVDVF9TSU5HTEUnLFxuICAvKipcbiAgICogUmVuZGVycyBhIGNoZWNrYm94LlxuICAgKlxuICAgKiBEZWZhdWx0IHZhbHVlOiBgZmFsc2VgXG4gICAqL1xuICBDSEVDS0JPWCA9ICdDSEVDS0JPWCcsXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBmb250IGNvbG9yIHNlbGVjdG9yLlxuICAgKlxuICAgKiBBY2NlcHRhYmxlIGRlZmF1bHQgdmFsdWVzOiBIRVggY29sb3IgdmFsdWUuIEUuZy4gYFwiIzg4ODg4OFwiYC5cbiAgICpcbiAgICogRGVmYXVsdCB2YWx1ZTogYFwiIzAwMFwiYC5cbiAgICovXG4gIEZPTlRfQ09MT1IgPSAnRk9OVF9DT0xPUicsXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBmb250IHNpemUgc2VsZWN0b3IuXG4gICAqXG4gICAqIERlZmF1bHQgdmFsdWU6IGBcIjE0cHhcImAuXG4gICAqL1xuICBGT05UX1NJWkUgPSAnRk9OVF9TSVpFJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGZvbnQgZmFtaWx5IHNlbGVjdG9yLlxuICAgKlxuICAgKiBEZWZhdWx0IHZhbHVlOiBgXCJcImBcbiAgICovXG4gIEZPTlRfRkFNSUxZID0gJ0ZPTlRfRkFNSUxZJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSBmaWxsIGNvbG9yIHNlbGVjdG9yLlxuICAgKlxuICAgKiBBY2NlcHRhYmxlIGRlZmF1bHQgdmFsdWVzOiBIRVggY29sb3IgdmFsdWUuXG4gICAqL1xuICBGSUxMX0NPTE9SID0gJ0ZJTExfQ09MT1InLFxuICAvKipcbiAgICogUmVuZGVycyBhIGJvcmRlciBjb2xvciBzZWxlY3Rvci5cbiAgICpcbiAgICogQWNjZXB0YWJsZSBkZWZhdWx0IHZhbHVlczogSEVYIGNvbG9yIHZhbHVlLlxuICAgKi9cbiAgQk9SREVSX0NPTE9SID0gJ0JPUkRFUl9DT0xPUicsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGFuIGF4aXMgY29sb3Igc2VsZWN0b3IuXG4gICAqXG4gICAqIEFjY2VwdGFibGUgZGVmYXVsdCB2YWx1ZXM6IEhFWCBjb2xvciB2YWx1ZS5cbiAgICovXG4gIEFYSVNfQ09MT1IgPSAnQVhJU19DT0xPUicsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgZ3JpZCBjb2xvciBzZWxlY3Rvci5cbiAgICpcbiAgICogQWNjZXB0YWJsZSBkZWZhdWx0IHZhbHVlczogSEVYIGNvbG9yIHZhbHVlLlxuICAgKi9cbiAgR1JJRF9DT0xPUiA9ICdHUklEX0NPTE9SJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYW4gb3BhY2l0eSBzZWxlY3Rvci5cbiAgICovXG4gIE9QQUNJVFkgPSAnT1BBQ0lUWScsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgbGluZSB3ZWlnaHQgcGlja2VyLlxuICAgKi9cbiAgTElORV9XRUlHSFQgPSAnTElORV9XRUlHSFQnLFxuICAvKipcbiAgICogUmVuZGVycyBhIGxpbmUgc3R5bGUgcGlja2VyLlxuICAgKlxuICAgKiBBY2NlcHRhYmxlIGRlZmF1bHQgdmFsdWVzOiBgXCJzb2xpZFwiYCwgYFwiZGFzaGVkXCJgLCBgXCJkb3R0ZWRcImAsIG9yIGBcImRvdWJsZVwiYC5cbiAgICovXG4gIExJTkVfU1RZTEUgPSAnTElORV9TVFlMRScsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgYm9yZGVyIHJhZGl1cyBzZWxlY3Rvci5cbiAgICovXG4gIEJPUkRFUl9SQURJVVMgPSAnQk9SREVSX1JBRElVUycsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGFuIGludGVydmFsIHNlbGVjdG9yLlxuICAgKi9cbiAgSU5URVJWQUwgPSAnSU5URVJWQUwnLFxuICAvKipcbiAgICogUmVuZGVycyBhIHJhZGlvIHNlbGVjdCB3aXRoIHByZS1kZWZpbmVkIHZhbHVlcy5cbiAgICovXG4gIFNFTEVDVF9SQURJTyA9ICdTRUxFQ1RfUkFESU8nLFxufVxuXG5leHBvcnQgdHlwZSBEU0ludGVyYWN0aW9uRGF0YSA9IERTSW50ZXJhY3Rpb25GaWx0ZXJEYXRhO1xuXG5leHBvcnQgaW50ZXJmYWNlIERTSW50ZXJhY3Rpb25GaWx0ZXJEYXRhIHtcbiAgc3VwcG9ydGVkQWN0aW9uczogRFNJbnRlcmFjdGlvblR5cGVbXTtcbiAgaWQ6IEludGVyYWN0aW9uSWQ7XG4gIHZhbHVlOiBEU0ludGVyYWN0aW9uRmlsdGVyVmFsdWU7XG59XG5cbmV4cG9ydCBlbnVtIERTSW50ZXJhY3Rpb25UeXBlIHtcbiAgRklMVEVSID0gJ0ZJTFRFUicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRFNJbnRlcmFjdGlvbkZpbHRlclZhbHVlIHtcbiAgdHlwZTogRFNJbnRlcmFjdGlvblR5cGU7XG4gIGRhdGE6IEludGVyYWN0aW9uRGF0YTtcbn1cblxuLy8gQWxpYXNlc1xuZXhwb3J0IHR5cGUgRmllbGRJZCA9IHN0cmluZztcbmV4cG9ydCB0eXBlIENvbmZpZ0RhdGFJZCA9IHN0cmluZztcbmV4cG9ydCB0eXBlIENvbmZpZ1N0eWxlSWQgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBDb25maWdEYXRhRWxlbWVudElkID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgQ29uZmlnU3R5bGVFbGVtZW50SWQgPSBzdHJpbmc7XG5cbi8vIEN1c3RvbSB0eXBlcyBmb3IgTGlicmFyeVxuZXhwb3J0IGludGVyZmFjZSBQYXJzZWRJbWFnZSB7XG4gIG9yaWdpbmFsVXJsOiBzdHJpbmc7XG4gIHByb3hpZWRVcmw/OiBzdHJpbmc7XG4gIGFsdFRleHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmllbGRzQnlJZCB7XG4gIC8vIEFuIGluZGV4ZWQgVHlwZSBjYW5ub3QgYmUgYSB0eXBlIGFsaWFzIDooXG4gIFtmaWVsZElkOiBzdHJpbmddOiBGaWVsZDtcbn1cblxuZXhwb3J0IHR5cGUgUGFyc2VkUm93ID0gUGFyc2VkUm93VmFsdWVbXTtcblxuZXhwb3J0IGludGVyZmFjZSBSb3dCeUNvbmZpZ0lkIHtcbiAgW2NvbmZpZ0lkOiBzdHJpbmddOiBQYXJzZWRSb3c7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVzQnlUeXBlIHtcbiAgW1RhYmxlVHlwZS5ERUZBVUxUXTogUm93QnlDb25maWdJZFtdO1xuICBbVGFibGVUeXBlLkNPTVBBUklTT05dOiBSb3dCeUNvbmZpZ0lkW107XG4gIFtUYWJsZVR5cGUuU1VNTUFSWV06IFJvd0J5Q29uZmlnSWRbXTtcbn1cblxuZXhwb3J0IHR5cGUgUGFyc2VkUm93VmFsdWUgPSBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgUGFyc2VkSW1hZ2U7XG5cbmV4cG9ydCB0eXBlIFJvd0hlYWRpbmcgPSBGaWVsZCAmIHtjb25maWdJZDogc3RyaW5nfTtcbmV4cG9ydCB0eXBlIFJvd0VudHJ5ID0gc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbjtcbmV4cG9ydCB0eXBlIFJvdyA9IFJvd0VudHJ5W107XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmllbGRzQnlDb25maWdJZCB7XG4gIFtjb25maWdJZDogc3RyaW5nXTogRmllbGRbXTtcbn1cblxuZXhwb3J0IHR5cGUgU3R5bGVUaGVtZSA9IGFueTtcbmV4cG9ydCB0eXBlIFN0eWxlRW50cnkgPSBhbnk7XG5leHBvcnQgdHlwZSBTdHlsZVZhbHVlID0gU3R5bGVUaGVtZSB8IFN0eWxlRW50cnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVCeUlkIHtcbiAgW3N0eWxlSWQ6IHN0cmluZ106IFN0eWxlVmFsdWU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVEYXRhIHtcbiAgaGVhZGVyczogUm93SGVhZGluZ1tdO1xuICByb3dzOiBSb3dbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJsZXMge1xuICBbVGFibGVUeXBlLkRFRkFVTFRdOiBUYWJsZURhdGE7XG4gIFtUYWJsZVR5cGUuQ09NUEFSSVNPTl0/OiBUYWJsZURhdGE7XG4gIFtUYWJsZVR5cGUuU1VNTUFSWV0/OiBUYWJsZURhdGE7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVGb3JtYXQge1xuICBmaWVsZHM6IEZpZWxkc0J5Q29uZmlnSWQ7XG4gIHN0eWxlOiBTdHlsZUJ5SWQ7XG4gIHRhYmxlczogVGFibGVzO1xuICB0aGVtZTogVGhlbWVTdHlsZTtcbiAgaW50ZXJhY3Rpb25zOiBJbnRlcmFjdGlvbnNCeUlkO1xufVxuXG5leHBvcnQgdHlwZSBUYWJsZVRyYW5zZm9ybSA9IChtZXNzYWdlOiBNZXNzYWdlKSA9PiBUYWJsZUZvcm1hdDtcblxuZXhwb3J0IHR5cGUgQ29uZmlnSWQgPSBzdHJpbmc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Vic2NyaXB0aW9uc09wdGlvbnM8VD4ge1xuICB0cmFuc2Zvcm06IChtZXNzYWdlOiBNZXNzYWdlKSA9PiBUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9iamVjdFJvdyB7XG4gIFtjb25maWdJZDogc3RyaW5nXTogUm93RW50cnlbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RUYWJsZXMge1xuICBbVGFibGVUeXBlLkRFRkFVTFRdOiBPYmplY3RSb3dbXTtcbiAgW1RhYmxlVHlwZS5DT01QQVJJU09OXT86IE9iamVjdFJvd1tdW107XG4gIFtUYWJsZVR5cGUuU1VNTUFSWV0/OiBPYmplY3RSb3dbXVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9iamVjdEZvcm1hdCB7XG4gIGZpZWxkczogRmllbGRzQnlDb25maWdJZDtcbiAgc3R5bGU6IFN0eWxlQnlJZDtcbiAgdGFibGVzOiBPYmplY3RUYWJsZXM7XG4gIHRoZW1lOiBUaGVtZVN0eWxlO1xuICBpbnRlcmFjdGlvbnM6IEludGVyYWN0aW9uc0J5SWQ7XG59XG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudElkID0gc3RyaW5nO1xuXG5leHBvcnQgdHlwZSBPYmplY3RUcmFuc2Zvcm0gPSAobWVzc2FnZTogTWVzc2FnZSkgPT4gT2JqZWN0Rm9ybWF0O1xuXG5leHBvcnQgZW51bSBUb0RTTWVzc2FnZVR5cGUge1xuICBWSVpfUkVBRFkgPSAndml6UmVhZHknLFxuICBJTlRFUkFDVElPTiA9ICd2aXpBY3Rpb24nLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZpelJlYWR5TWVzc2FnZSB7XG4gIHR5cGU6IFRvRFNNZXNzYWdlVHlwZS5WSVpfUkVBRFk7XG4gIGNvbXBvbmVudElkOiBDb21wb25lbnRJZDtcbn1cblxuLy8gSW50ZXJhY3Rpb24gVHlwZXNcbmV4cG9ydCBpbnRlcmZhY2UgSW50ZXJhY3Rpb25NZXNzYWdlIHtcbiAgdHlwZTogVG9EU01lc3NhZ2VUeXBlLklOVEVSQUNUSU9OO1xuICBpZDogSW50ZXJhY3Rpb25JZDtcbiAgZGF0YTogSW50ZXJhY3Rpb25EYXRhO1xuICBjb21wb25lbnRJZDogQ29tcG9uZW50SWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VuZEludGVyYWN0aW9uIHtcbiAgLy8gVE9ETyAtIHJlbW92ZSB0aGlzIG9uY2UgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZSBpbnRlcmFjdGlvbiB0eXBlLlxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgY2FsbGFibGUtdHlwZXNcbiAgKFxuICAgIGFjdGlvbklkOiBJbnRlcmFjdGlvbklkLFxuICAgIGludGVyYWN0aW9uOiBJbnRlcmFjdGlvblR5cGUuRklMVEVSLFxuICAgIGRhdGE6IEZpbHRlckludGVyYWN0aW9uRGF0YVxuICApOiB2b2lkO1xuICAvLyBUT0RPIC0gV2hlbiB0aGVyZSBhcmUgbW9yZSBJbnRlcmFjdGlvbiB0eXBlcywgdGhlIG5ldyBvbmVzIHNob3VsZCBiZSBhZGRlZCBoZXJlIHdpdGggdGhlaXIgb3duIHNpZ25hdHVyZS5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckludGVyYWN0aW9uIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGNhbGxhYmxlLXR5cGVzXG4gIChcbiAgICBhY3Rpb25JZDogSW50ZXJhY3Rpb25JZCxcbiAgICBpbnRlcmFjdGlvbjogSW50ZXJhY3Rpb25UeXBlLkZJTFRFUixcbiAgICBkYXRhOiB1bmRlZmluZWRcbiAgKTogdm9pZDtcbn1cblxuZXhwb3J0IHR5cGUgQ29uY2VwdElkID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgRmlsdGVyUGFyYW1WYWx1ZSA9IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVySW50ZXJhY3Rpb25EYXRhIHtcbiAgY29uY2VwdHM6IENvbmNlcHRJZFtdO1xuICB2YWx1ZXM6IEZpbHRlclBhcmFtVmFsdWVbXVtdO1xufVxuXG5leHBvcnQgZW51bSBJbnRlcmFjdGlvblR5cGUge1xuICBGSUxURVIgPSAnRklMVEVSJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnRlcmFjdGlvblZhbHVlIHtcbiAgdHlwZTogSW50ZXJhY3Rpb25UeXBlO1xuICBkYXRhOiBJbnRlcmFjdGlvbkRhdGE7XG59XG5cbmV4cG9ydCB0eXBlIEludGVyYWN0aW9uRGF0YSA9IEZpbHRlckludGVyYWN0aW9uRGF0YTtcblxuZXhwb3J0IHR5cGUgSW50ZXJhY3Rpb25JZCA9IHN0cmluZztcblxuZXhwb3J0IGludGVyZmFjZSBJbnRlcmFjdGlvbiB7XG4gIHN1cHBvcnRlZEFjdGlvbnM6IEludGVyYWN0aW9uVHlwZVtdO1xuICB2YWx1ZTogSW50ZXJhY3Rpb25WYWx1ZSB8IHt9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEludGVyYWN0aW9uc0J5SWQge1xuICBbaW50ZXJhY3Rpb25JZDogc3RyaW5nXTogSW50ZXJhY3Rpb247XG59XG4iXSwic291cmNlUm9vdCI6IiJ9